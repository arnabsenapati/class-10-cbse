import type { IncomingMessage, ServerResponse } from 'node:http';

export function hasGeminiApiKey(projectRoot?: string): {
  available: boolean;
  model: string;
};

export function resolveGeminiConfig(projectRoot?: string): {
  apiKey: string;
  model: string;
  isModelPinned: boolean;
};

export function createAskTeacherMiddleware(options?: {
  projectRoot?: string;
}): (req: IncomingMessage, res: ServerResponse) => Promise<void>;
