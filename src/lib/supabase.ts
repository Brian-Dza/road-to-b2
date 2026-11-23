import { createClient } from "@supabase/supabase-js";
import { type RegisterEdgeResponse, RegisterEdgeResponseSchema } from "@/schemas/account.schema.ts";
import type { CefrLevel } from "@/schemas/curriculum.schema.ts";

const envUrl = import.meta.env.VITE_SUPABASE_URL;
const envKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (typeof envUrl !== "string" || envUrl.trim().length === 0) {
  throw new Error(
    "Missing VITE_SUPABASE_URL. Copy .env.example to .env and configure your Supabase project URL.",
  );
}

if (typeof envKey !== "string" || envKey.trim().length === 0) {
  throw new Error(
    "Missing VITE_SUPABASE_PUBLISHABLE_KEY. Copy .env.example to .env and configure your Supabase publishable key.",
  );
}

const SUPABASE_URL: string = envUrl.trim();
const SUPABASE_PUBLISHABLE_KEY: string = envKey.trim();

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
    storageKey: "road-to-b2:supabase-auth:v1",
  },
});

export interface RegisterAccountRequest {
  readonly email: string;
  readonly password: string;
  readonly displayName: string;
  readonly currentCefr: CefrLevel;
  readonly targetItepScore: number;
  readonly vaultSalt: string;
}

export async function registerAccountViaEdge(
  payload: RegisterAccountRequest,
): Promise<RegisterEdgeResponse> {
  const endpoint = `${SUPABASE_URL}/functions/v1/register-user`;

  let response: Response;
  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_PUBLISHABLE_KEY,
      },
      body: JSON.stringify(payload),
    });
  } catch {
    return {
      ok: false,
      code: "NETWORK_ERROR",
      messageEs:
        "No se pudo conectar con el servidor de cuentas. Verifica tu conexión a internet e inténtalo de nuevo.",
    };
  }

  let rawJson: unknown;
  try {
    rawJson = await response.json();
  } catch {
    return {
      ok: false,
      code: "INVALID_RESPONSE",
      messageEs: "Respuesta inesperada del servidor al crear la cuenta.",
    };
  }

  const parsed = RegisterEdgeResponseSchema.safeParse(rawJson);
  if (!parsed.success) {
    return {
      ok: false,
      code: "SCHEMA_MISMATCH",
      messageEs: "No se pudo completar el registro en este momento.",
    };
  }

  return parsed.data;
}
