import { existsSync, readFileSync, statSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, resolve } from 'node:path';
import { GoogleGenAI } from '@google/genai';

const DEFAULT_MODEL = 'gemini-4-hydrogen';
const FALLBACK_MODEL = 'gemini-3.5-flash-lite';
const MAX_BODY_BYTES = 16 * 1024;
const MAX_CACHE_ENTRIES = 300;

const envFileCache = new Map();
const responseCache = new Map();

const WORD_EXPLANATION_SCHEMA = {
  type: 'object',
  properties: {
    word: {
      type: 'string',
      description: 'The selected word or short phrase.',
    },
    transliteration: {
      type: 'string',
      description:
        'Phonetic transliteration in Title Case Latin script for Hindi words (e.g. "Dilati", "Muhaane", "Company"), or concise Devanagari pronunciation for English words.',
    },
    rootForm: {
      type: 'string',
      description: 'Base dictionary/root form (मूल शब्द / धातु / मानक रूप).',
    },
    detailedMeaning: {
      type: 'string',
      description:
        'Gemini-App style natural explanation ("अर्थ"): 1-2 fluid sentences stating the grammatical form/root verb/noun if inflected, precise meaning in quotes, and 1-2 short everyday collocations in parentheses like (जैसे — सम्मान दिलाना, याद दिलाना). Match the study language (clear natural Hindi for Hindi lessons; clear English with simple Hindi clarity for English/Science/SST).',
    },
    hindiMeaning: {
      type: 'string',
      description:
        'Exam-safe मानक हिंदी अर्थ (2-4 clear synonyms or short meaning in Devanagari that a Class 10 CBSE student can write in board answers).',
    },
    englishMeaning: {
      type: 'string',
      description: 'Clear, concise English meaning.',
    },
    contextMeaning: {
      type: 'string',
      description:
        'Gemini-App style contextual explanation ("संदर्भ"): 1-2 sentences explicitly tying this word/phrase to the given Lesson/Chapter and surrounding stanza/paragraph, including any historical, poetic, or conceptual nuance (e.g., East India Company in 1857 context for "कंपनी बाग").',
    },
    grammarNote: {
      type: 'string',
      description:
        'Concise CBSE grammar note: part of speech (संज्ञा/विशेषण/क्रिया/अव्यय), लिंग/वचन यदि प्रासंगिक हो, तत्सम/तद्भव/उर्दू-फ़ारसी/देशज/अंग्रेज़ी, and any संधि-विच्छेद, उपसर्ग/प्रत्यय, समास, or मुहावरा detail if applicable.',
    },
    exampleSentence: {
      type: 'string',
      description:
        'One simple, natural Class 10 board-exam-friendly example sentence using the word.',
    },
  },
  required: [
    'word',
    'transliteration',
    'rootForm',
    'detailedMeaning',
    'hindiMeaning',
    'englishMeaning',
    'contextMeaning',
    'grammarNote',
    'exampleSentence',
  ],
};

const SYSTEM_INSTRUCTION = [
  'You are Gemini acting as an expert, warm CBSE Class 10 bilingual teacher (Hindi Course B, English, Social Science & Science).',
  'When a student highlights a word or phrase on a study page, explain it with the clarity, natural flow, and contextual intelligence of the Gemini app:',
  '1. Give accurate phonetic transliteration (e.g., दिलाती -> Dilati) and identify its base root/lemma (मूल शब्द / धातु) whenever inflected.',
  '2. In detailedMeaning ("अर्थ"), explain naturally what form the word is, state its precise meaning in quotes, and give 1-2 short everyday collocations in parentheses like (जैसे — सम्मान दिलाना, याद दिलाना). For Hindi lessons write primarily in clear, natural Hindi with brief English clarity where helpful; for English/Science/SST lessons write in clear English with simple Hindi clarity.',
  '3. In contextMeaning ("संदर्भ"), connect the word directly to the current lesson title, section, and full surrounding stanza/paragraph — including any historical, poetic, or conceptual nuance (for example, "कंपनी" in "कंपनी बाग" refers to the British East India Company in the 1857 context, not a generic modern business).',
  '4. Also supply concise exam-safe मानक हिंदी अर्थ (hindiMeaning), concise English meaning (englishMeaning), CBSE व्याकरण टिप्पणी (grammarNote), and a clean Class 10 example sentence (exampleSentence).',
].join(' ');

function parseEnvContent(raw) {
  const result = {};
  const lines = raw.split(/\r?\n/);
  for (const rawLine of lines) {
    const trimmed = rawLine.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const withoutExport = trimmed.startsWith('export ')
      ? trimmed.slice(7).trim()
      : trimmed;
    const eqIndex = withoutExport.indexOf('=');
    if (eqIndex <= 0) continue;
    const key = withoutExport.slice(0, eqIndex).trim();
    if (!key) continue;
    let value = withoutExport.slice(eqIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"') && value.length >= 2) ||
      (value.startsWith("'") && value.endsWith("'") && value.length >= 2)
    ) {
      value = value.slice(1, -1).trim();
    }
    if (value) {
      result[key] = value;
    }
  }
  return result;
}

function readEnvFileCached(filePath) {
  try {
    if (!existsSync(filePath)) {
      envFileCache.delete(filePath);
      return {};
    }
    const stat = statSync(filePath);
    const cached = envFileCache.get(filePath);
    if (cached && cached.mtimeMs === stat.mtimeMs) {
      return cached.vars;
    }
    const content = readFileSync(filePath, 'utf8');
    const vars = parseEnvContent(content);
    envFileCache.set(filePath, { mtimeMs: stat.mtimeMs, vars });
    return vars;
  } catch {
    return {};
  }
}

export function resolveGeminiConfig(projectRoot = process.cwd()) {
  const root = resolve(projectRoot);
  const localEnv = readEnvFileCached(join(root, '.env.local'));
  const dotEnv = readEnvFileCached(join(root, '.env'));
  let homeEnv = {};
  try {
    homeEnv = readEnvFileCached(join(homedir(), '.env'));
  } catch {
    homeEnv = {};
  }

  const apiKey =
    localEnv.GEMINI_API_KEY ||
    localEnv.GOOGLE_API_KEY ||
    dotEnv.GEMINI_API_KEY ||
    dotEnv.GOOGLE_API_KEY ||
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    homeEnv.GEMINI_API_KEY ||
    homeEnv.GOOGLE_API_KEY ||
    '';

  const explicitModel =
    localEnv.GEMINI_MODEL ||
    dotEnv.GEMINI_MODEL ||
    process.env.GEMINI_MODEL ||
    homeEnv.GEMINI_MODEL ||
    '';

  return {
    apiKey: apiKey.trim(),
    model: explicitModel.trim() || DEFAULT_MODEL,
    isModelPinned: Boolean(explicitModel.trim()),
  };
}

export function hasGeminiApiKey(projectRoot = process.cwd()) {
  const cfg = resolveGeminiConfig(projectRoot);
  return {
    available: Boolean(cfg.apiKey),
    model: cfg.model,
  };
}

function isAllowedLocalOrLanOrigin(origin, hostHeader) {
  if (!origin || typeof origin !== 'string') return false;
  try {
    const parsed = new URL(origin);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return false;
    }
    const host = parsed.hostname.toLowerCase();
    const reqHost = String(hostHeader || '').split(':')[0].toLowerCase();
    if (
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host === '::1' ||
      host === '[::1]' ||
      host.endsWith('.local') ||
      (reqHost && host === reqHost) ||
      /^10\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(host) ||
      /^192\.168\.\d{1,3}\.\d{1,3}$/.test(host) ||
      /^172\.(1[6-9]|2\d|3[0-1])\.\d{1,3}\.\d{1,3}$/.test(host)
    ) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
}

function buildCorsHeaders(req) {
  const origin = req?.headers?.origin;
  if (!isAllowedLocalOrLanOrigin(origin, req?.headers?.host)) {
    return {};
  }
  const headers = {
    'Access-Control-Allow-Origin': origin,
    Vary: 'Origin',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
  if (req?.headers?.['access-control-request-private-network'] === 'true') {
    headers['Access-Control-Allow-Private-Network'] = 'true';
  }
  return headers;
}

function sendJson(res, statusCode, payload, extraHeaders = {}) {
  if (res.writableEnded) return;
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    ...extraHeaders,
  });
  res.end(body);
}

function readJsonBody(req) {
  return new Promise((resolvePromise, rejectPromise) => {
    const chunks = [];
    let totalBytes = 0;
    let settled = false;

    const finishError = (statusCode, message) => {
      if (settled) return;
      settled = true;
      rejectPromise({ statusCode, message });
    };

    req.on('data', (chunk) => {
      if (settled) return;
      totalBytes += chunk.length;
      if (totalBytes > MAX_BODY_BYTES) {
        req.pause();
        finishError(413, 'Request payload too large.');
        return;
      }
      chunks.push(chunk);
    });

    req.on('end', () => {
      if (settled) return;
      settled = true;
      const raw = Buffer.concat(chunks).toString('utf8').trim();
      if (!raw) {
        resolvePromise({});
        return;
      }
      try {
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
          rejectPromise({
            statusCode: 400,
            message: 'Invalid JSON request body.',
          });
          return;
        }
        resolvePromise(parsed);
      } catch {
        rejectPromise({
          statusCode: 400,
          message: 'Invalid JSON request body.',
        });
      }
    });

    req.on('error', () => {
      finishError(400, 'Failed to read request body.');
    });
  });
}

function sanitizeString(value, maxLen) {
  if (typeof value !== 'string') return '';
  return value.replace(/\s+/g, ' ').trim().slice(0, maxLen);
}

function buildTeacherPrompt({
  word,
  contextSentence,
  surroundingPassage,
  sectionHeading,
  chapterTitle,
  subjectSlug,
}) {
  const parts = [`Highlighted word or phrase: "${word}"`];
  if (chapterTitle) {
    parts.push(`Lesson / Chapter: ${chapterTitle}`);
  }
  if (sectionHeading) {
    parts.push(`Section on page: ${sectionHeading}`);
  }
  if (subjectSlug) {
    parts.push(`Subject context: Class 10 CBSE (${subjectSlug})`);
  }
  if (contextSentence) {
    parts.push(`Exact line / sentence:\n"${contextSentence}"`);
  }
  if (
    surroundingPassage &&
    surroundingPassage !== contextSentence
  ) {
    parts.push(
      `Surrounding stanza / paragraph on page:\n"${surroundingPassage}"`
    );
  }
  if (!contextSentence && !surroundingPassage) {
    parts.push(
      'Explain its standard Class 10 CBSE meaning and board-exam usage.'
    );
  }
  return parts.join('\n\n');
}

function validateExplanation(parsed, fallbackWord) {
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error('Model returned non-object JSON output.');
  }
  const fields = [
    'word',
    'transliteration',
    'rootForm',
    'detailedMeaning',
    'hindiMeaning',
    'englishMeaning',
    'contextMeaning',
    'grammarNote',
    'exampleSentence',
  ];
  const cleaned = {};
  for (const field of fields) {
    const val =
      typeof parsed[field] === 'string' ? parsed[field].trim() : '';
    if (!val && field !== 'word') {
      throw new Error(`Missing required explanation field: ${field}`);
    }
    cleaned[field] = val;
  }
  if (!cleaned.word) {
    cleaned.word = fallbackWord;
  }
  return cleaned;
}

function cacheExplanation(key, entry) {
  if (responseCache.has(key)) {
    responseCache.delete(key);
  } else if (responseCache.size >= MAX_CACHE_ENTRIES) {
    const oldestKey = responseCache.keys().next().value;
    if (oldestKey !== undefined) {
      responseCache.delete(oldestKey);
    }
  }
  responseCache.set(key, entry);
}

function isLikelyBadCredentialError(err) {
  const msg = String(err?.message || '');
  const status = Number(err?.statusCode || err?.status || 0);
  return (
    status === 401 ||
    /API_KEY_INVALID|API key not valid|invalid api key|unauthenticated/i.test(
      msg
    )
  );
}

async function queryGeminiWordExplanation(ai, model, promptArgs) {
  const interaction = await ai.interactions.create({
    model,
    input: buildTeacherPrompt(promptArgs),
    system_instruction: SYSTEM_INSTRUCTION,
    store: false,
    generation_config: {
      thinking_level: 'low',
    },
    response_format: {
      type: 'text',
      mime_type: 'application/json',
      schema: WORD_EXPLANATION_SCHEMA,
    },
  });

  if (!interaction?.output_text) {
    throw new Error(
      `Empty response from Gemini model (${interaction?.status || 'unknown'}).`
    );
  }

  let parsed;
  try {
    parsed = JSON.parse(interaction.output_text);
  } catch {
    throw new Error('Gemini returned malformed JSON output.');
  }

  return validateExplanation(parsed, promptArgs.word);
}

export function createAskTeacherMiddleware(options = {}) {
  const projectRoot = resolve(options.projectRoot || process.cwd());

  return async function askTeacherMiddleware(req, res) {
    const corsHeaders = buildCorsHeaders(req);
    const replyJson = (statusCode, payload, extraHeaders = {}) =>
      sendJson(res, statusCode, payload, { ...corsHeaders, ...extraHeaders });

    try {
      const method = (req.method || 'GET').toUpperCase();
      const rawUrl = req.url || '/';
      const pathname = rawUrl.split('?')[0] || '/';

      if (method === 'OPTIONS') {
        res.writeHead(204, {
          'Cache-Control': 'no-store',
          ...corsHeaders,
        });
        res.end();
        return;
      }

      if (method === 'GET') {
        if (pathname === '/status' || pathname === '/status/') {
          const cfg = resolveGeminiConfig(projectRoot);
          replyJson(200, {
            available: Boolean(cfg.apiKey),
            model: cfg.model,
          });
          return;
        }
        replyJson(404, { error: 'Not found.' });
        return;
      }

      if (method !== 'POST') {
        replyJson(
          405,
          { error: 'Method not allowed.' },
          { Allow: 'GET, POST, OPTIONS' }
        );
        return;
      }

      if (pathname !== '/' && pathname !== '') {
        replyJson(404, { error: 'Not found.' });
        return;
      }

      let body;
      try {
        body = await readJsonBody(req);
      } catch (err) {
        replyJson(err?.statusCode || 400, {
          error: err?.message || 'Invalid JSON request body.',
        });
        return;
      }

      const word = sanitizeString(body.word, 120);
      if (!word) {
        replyJson(400, {
          error:
            'Please highlight a valid word or short phrase (1–120 characters).',
        });
        return;
      }

      const contextSentence = sanitizeString(body.contextSentence, 800);
      const surroundingPassage = sanitizeString(body.surroundingPassage, 1400);
      const sectionHeading = sanitizeString(body.sectionHeading, 180);
      const chapterTitle = sanitizeString(body.chapterTitle, 160);
      const subjectSlug = sanitizeString(body.subjectSlug, 40);

      const cfg = resolveGeminiConfig(projectRoot);
      if (!cfg.apiKey) {
        replyJson(503, {
          error: 'AI Teacher is not enabled on the server yet.',
          code: 'SERVER_KEY_MISSING',
        });
        return;
      }

      const cacheKey = [
        'v2',
        cfg.model,
        subjectSlug.toLowerCase(),
        word.toLowerCase(),
        contextSentence.toLowerCase(),
        surroundingPassage.slice(0, 240).toLowerCase(),
      ].join('|');

      const cached = responseCache.get(cacheKey);
      if (cached) {
        replyJson(200, {
          ok: true,
          cached: true,
          model: cached.model,
          explanation: cached.explanation,
        });
        return;
      }

      const ai = new GoogleGenAI({ apiKey: cfg.apiKey });
      const promptArgs = {
        word,
        contextSentence,
        surroundingPassage,
        sectionHeading,
        chapterTitle,
        subjectSlug,
      };

      try {
        const explanation = await queryGeminiWordExplanation(
          ai,
          cfg.model,
          promptArgs
        );
        cacheExplanation(cacheKey, { model: cfg.model, explanation });
        replyJson(200, {
          ok: true,
          cached: false,
          model: cfg.model,
          explanation,
        });
      } catch (primaryErr) {
        if (
          !cfg.isModelPinned &&
          cfg.model !== FALLBACK_MODEL &&
          !isLikelyBadCredentialError(primaryErr)
        ) {
          try {
            const explanation = await queryGeminiWordExplanation(
              ai,
              FALLBACK_MODEL,
              promptArgs
            );
            cacheExplanation(cacheKey, { model: FALLBACK_MODEL, explanation });
            replyJson(200, {
              ok: true,
              cached: false,
              model: FALLBACK_MODEL,
              explanation,
            });
            return;
          } catch {
            // Fall through to clean error response below
          }
        }

        if (isLikelyBadCredentialError(primaryErr)) {
          replyJson(502, {
            error:
              'Server Gemini API credential was rejected by Google AI Studio.',
            code: 'SERVER_KEY_INVALID',
          });
          return;
        }

        replyJson(502, {
          error:
            'Unable to reach AI Teacher right now. Please try again shortly.',
          code: 'UPSTREAM_ERROR',
        });
      }
    } catch {
      replyJson(500, {
        error: 'Unexpected server error while contacting AI Teacher.',
        code: 'INTERNAL_ERROR',
      });
    }
  };
}
