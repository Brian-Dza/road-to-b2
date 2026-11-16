import { z } from "zod";

const GEMINI_ENDPOINT =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

const GEMINI_TIMEOUT_MS = 30_000;

const GeminiApiSuccessEnvelopeSchema = z.object({
  candidates: z
    .array(
      z.object({
        content: z
          .object({
            parts: z
              .array(
                z.object({
                  text: z.string().optional(),
                }),
              )
              .min(1),
          })
          .optional(),
      }),
    )
    .min(1),
});

const GeminiApiErrorEnvelopeSchema = z.object({
  error: z
    .object({
      code: z.number().optional(),
      message: z.string().optional(),
    })
    .optional(),
});

function sanitizeApiErrorMessage(rawMessage: string): string {
  return rawMessage
    .replace(/AIza[0-9A-Za-z_-]{10,}/g, "[REDACTED_KEY]")
    .replace(/([?&]key=)[^&\s]+/gi, "$1[REDACTED]")
    .slice(0, 220)
    .trim();
}

export interface GeminiJsonRequestOptions {
  readonly apiKey: string;
  readonly prompt: string;
  readonly quotaHintActionEs: string;
}

/**
 * Invokes Gemini JSON generation using the `x-goog-api-key` header (never URL query strings)
 * with timeout protection and sanitized error messages.
 */
export async function requestGeminiJsonPayload({
  apiKey,
  prompt,
  quotaHintActionEs,
}: GeminiJsonRequestOptions): Promise<unknown> {
  const trimmedKey = apiKey.trim();
  if (!trimmedKey) {
    throw new Error("Configura primero tu Gemini API Key en Ajustes y Respaldo.");
  }
  if (!/^[!-~]+$/.test(trimmedKey)) {
    throw new Error(
      "La Gemini API Key contiene espacios o caracteres de control inválidos. Revísala en Ajustes.",
    );
  }

  let response: Response;
  try {
    response = await fetch(GEMINI_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": trimmedKey,
      },
      signal: AbortSignal.timeout(GEMINI_TIMEOUT_MS),
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.2,
        },
      }),
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "TimeoutError") {
      throw new Error(
        `La solicitud a Gemini superó el tiempo límite de ${Math.round(GEMINI_TIMEOUT_MS / 1000)}s. Intenta nuevamente o usa '${quotaHintActionEs}'.`,
      );
    }
    throw new Error(
      `No se pudo conectar con la API de Gemini. Verifica tu conexión o usa '${quotaHintActionEs}'.`,
    );
  }

  let rawPayload: unknown;
  try {
    rawPayload = await response.json();
  } catch {
    throw new Error(`La API de Gemini devolvió una respuesta ilegible (HTTP ${response.status}).`);
  }

  if (!response.ok) {
    const parsedErr = GeminiApiErrorEnvelopeSchema.safeParse(rawPayload);
    const rawMsg = parsedErr.success ? parsedErr.data.error?.message : undefined;
    const safeMsg = rawMsg ? sanitizeApiErrorMessage(rawMsg) : "";

    if (response.status === 400 || response.status === 401 || response.status === 403) {
      throw new Error(
        `API Key rechazada o sin permisos para gemini-2.5-flash (HTTP ${response.status}). Revisa tu clave en Ajustes.`,
      );
    }
    if (response.status === 429) {
      throw new Error(
        `Cuota gratuita de Gemini temporalmente agotada (HTTP 429). Espera unos segundos o usa '${quotaHintActionEs}'.`,
      );
    }
    throw new Error(
      safeMsg
        ? `Error de Gemini (HTTP ${response.status}): ${safeMsg}`
        : `Error inesperado al consultar Gemini (HTTP ${response.status}).`,
    );
  }

  const parsedEnvelope = GeminiApiSuccessEnvelopeSchema.safeParse(rawPayload);
  const jsonText = parsedEnvelope.success
    ? parsedEnvelope.data.candidates[0]?.content?.parts[0]?.text
    : undefined;

  if (!jsonText) {
    throw new Error("Gemini no devolvió texto estructurado. Intenta nuevamente.");
  }

  try {
    return JSON.parse(jsonText) as unknown;
  } catch {
    throw new Error("La respuesta de Gemini no tuvo formato JSON válido.");
  }
}
