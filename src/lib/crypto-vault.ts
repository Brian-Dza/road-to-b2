import {
  type EncryptedSecretEnvelope,
  EncryptedSecretEnvelopeSchema,
} from "@/schemas/account.schema.ts";

const PBKDF2_ITERATIONS = 210_000;
const SESSION_VAULT_PREFIX = "road-to-b2:vault-session-key:v1:";

function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  for (let i = 0; i < bytes.length; i += 1) {
    const byte = bytes[i];
    if (byte !== undefined) {
      binary += String.fromCharCode(byte);
    }
  }
  return window.btoa(binary);
}

function base64ToBytes(b64: string): Uint8Array<ArrayBuffer> {
  const binary = window.atob(b64);
  const buffer = new ArrayBuffer(binary.length);
  const out = new Uint8Array(buffer);
  for (let i = 0; i < binary.length; i += 1) {
    out[i] = binary.charCodeAt(i);
  }
  return out;
}

function toArrayBufferSlice(bytes: Uint8Array): Uint8Array<ArrayBuffer> {
  const copy = new ArrayBuffer(bytes.byteLength);
  const view = new Uint8Array(copy);
  view.set(bytes);
  return view;
}

export function generateVaultSaltB64(): string {
  const randomBytes = new Uint8Array(16);
  window.crypto.getRandomValues(randomBytes);
  return bytesToBase64(randomBytes);
}

export async function deriveVaultKeyBytes(
  password: string,
  saltB64: string,
  iterations: number = PBKDF2_ITERATIONS,
): Promise<Uint8Array<ArrayBuffer>> {
  const passwordBytes = new TextEncoder().encode(password);
  const saltBytes = base64ToBytes(saltB64);

  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    toArrayBufferSlice(passwordBytes),
    "PBKDF2",
    false,
    ["deriveBits"],
  );

  const derivedBits = await window.crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: saltBytes,
      iterations,
      hash: "SHA-256",
    },
    keyMaterial,
    256,
  );

  return new Uint8Array(derivedBits);
}

async function importAesGcmKey(
  rawKeyBytes: Uint8Array,
  usages: readonly KeyUsage[],
): Promise<CryptoKey> {
  return window.crypto.subtle.importKey(
    "raw",
    toArrayBufferSlice(rawKeyBytes),
    { name: "AES-GCM", length: 256 },
    false,
    [...usages],
  );
}

export async function encryptSecretWithRawKey(
  plainSecret: string,
  rawKeyBytes: Uint8Array,
  saltB64: string,
): Promise<EncryptedSecretEnvelope> {
  const ivBuffer = new ArrayBuffer(12);
  const iv = new Uint8Array(ivBuffer);
  window.crypto.getRandomValues(iv);

  const aesKey = await importAesGcmKey(rawKeyBytes, ["encrypt"]);
  const plainBytes = new TextEncoder().encode(plainSecret);

  const cipherBuffer = await window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    aesKey,
    toArrayBufferSlice(plainBytes),
  );

  return EncryptedSecretEnvelopeSchema.parse({
    version: 1,
    algorithm: "AES-GCM-256-PBKDF2-SHA256",
    iterations: PBKDF2_ITERATIONS,
    saltB64,
    ivB64: bytesToBase64(iv),
    ciphertextB64: bytesToBase64(new Uint8Array(cipherBuffer)),
    updatedAtIso: new Date().toISOString(),
  });
}

export async function decryptSecretWithRawKey(
  envelope: EncryptedSecretEnvelope,
  rawKeyBytes: Uint8Array,
): Promise<string> {
  const validated = EncryptedSecretEnvelopeSchema.parse(envelope);
  const iv = base64ToBytes(validated.ivB64);
  const ciphertext = base64ToBytes(validated.ciphertextB64);
  const aesKey = await importAesGcmKey(rawKeyBytes, ["decrypt"]);

  const plainBuffer = await window.crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    aesKey,
    ciphertext,
  );

  return new TextDecoder().decode(plainBuffer);
}

export function saveSessionVaultKey(userId: string, rawKeyBytes: Uint8Array): void {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.sessionStorage.setItem(`${SESSION_VAULT_PREFIX}${userId}`, bytesToBase64(rawKeyBytes));
  } catch {
    // Ignore sessionStorage restrictions in private contexts
  }
}

export function loadSessionVaultKey(userId: string): Uint8Array<ArrayBuffer> | null {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    const stored = window.sessionStorage.getItem(`${SESSION_VAULT_PREFIX}${userId}`);
    if (!stored) {
      return null;
    }
    const decoded = base64ToBytes(stored);
    return decoded.byteLength === 32 ? decoded : null;
  } catch {
    return null;
  }
}

export function clearSessionVaultKeys(): void {
  if (typeof window === "undefined") {
    return;
  }
  try {
    const keysToDelete: string[] = [];
    for (let i = 0; i < window.sessionStorage.length; i += 1) {
      const k = window.sessionStorage.key(i);
      if (k?.startsWith(SESSION_VAULT_PREFIX)) {
        keysToDelete.push(k);
      }
    }
    for (const k of keysToDelete) {
      window.sessionStorage.removeItem(k);
    }
  } catch {
    // Ignore sessionStorage restrictions
  }
}
