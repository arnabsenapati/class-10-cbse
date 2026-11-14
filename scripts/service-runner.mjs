import { existsSync, mkdirSync, appendFileSync, renameSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { preview } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');
const distIndex = join(projectRoot, 'dist', 'index.html');
const logDir = join(projectRoot, 'logs');
const logFile = join(logDir, 'pwa-service.log');
const maxLogBytes = 1024 * 1024; // 1 MiB
const port = Number(process.env.PWA_PORT || 4174);

function rotateLogIfNeeded() {
  try {
    if (existsSync(logFile) && statSync(logFile).size >= maxLogBytes) {
      renameSync(logFile, `${logFile}.1`);
    }
  } catch {
    // Non-fatal: continue logging even if rotation fails
  }
}

function logLine(level, message) {
  const clean = String(message).replace(/\x1b\[[0-9;]*m/g, '').trimEnd();
  const entry = `[${new Date().toISOString()}] [${level}] ${clean}\n`;
  try {
    mkdirSync(logDir, { recursive: true });
    rotateLogIfNeeded();
    appendFileSync(logFile, entry, 'utf8');
  } catch {
    // Fallback to stderr only if log directory is unwritable
  }
  if (level === 'ERROR') {
    process.stderr.write(entry);
  } else {
    process.stdout.write(entry);
  }
}

/**
 * Starts the single-process Vite preview HTTP server for the built PWA (`dist/`).
 * Running `preview()` directly in-process avoids orphaned child processes when stopped by Windows.
 */
async function main() {
  if (!existsSync(distIndex)) {
    logLine('ERROR', `Missing built bundle at "${distIndex}". Run "npm run build" first.`);
    process.exit(1);
  }

  logLine('INFO', `Starting Class 10 CBSE Study Hub PWA on 0.0.0.0:${port}...`);

  const server = await preview({
    root: projectRoot,
    logLevel: 'warn',
    preview: {
      host: '0.0.0.0',
      port,
      strictPort: true,
    },
  });

  const localUrls = server.resolvedUrls?.local ?? [`http://localhost:${port}/`];
  const networkUrls = server.resolvedUrls?.network ?? [];
  logLine('INFO', `PWA server ready. Local: ${localUrls.join(', ')}`);
  if (networkUrls.length > 0) {
    logLine('INFO', `Network (LAN): ${networkUrls.join(', ')}`);
  }

  let closing = false;
  const shutdown = async (signal) => {
    if (closing) return;
    closing = true;
    logLine('INFO', `Received ${signal}; shutting down cleanly...`);
    try {
      await server.close();
      logLine('INFO', 'Server closed cleanly.');
      process.exit(0);
    } catch (err) {
      logLine('ERROR', `Error during shutdown: ${err instanceof Error ? err.message : String(err)}`);
      process.exit(1);
    }
  };

  process.on('SIGINT', () => void shutdown('SIGINT'));
  process.on('SIGTERM', () => void shutdown('SIGTERM'));
  process.on('SIGBREAK', () => void shutdown('SIGBREAK'));
  process.on('uncaughtException', (err) => {
    logLine('ERROR', `Uncaught exception: ${err.stack || err.message}`);
    process.exit(1);
  });
  process.on('unhandledRejection', (reason) => {
    logLine('ERROR', `Unhandled rejection: ${reason instanceof Error ? reason.stack : String(reason)}`);
    process.exit(1);
  });
}

main().catch((err) => {
  logLine('ERROR', `Failed to start PWA server: ${err instanceof Error ? err.stack : String(err)}`);
  process.exit(1);
});
