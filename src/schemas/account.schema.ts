import { z } from "zod";
import { CefrLevelSchema } from "./curriculum.schema.ts";

export const ThemePreferenceSchema = z.enum(["system", "light", "dark"]);

export const EncryptedSecretEnvelopeSchema = z.strictObject({
  version: z.literal(1),
  algorithm: z.literal("AES-GCM-256-PBKDF2-SHA256"),
  iterations: z.number().int().min(100_000).max(1_000_000),
  saltB64: z.string().min(16).max(128),
  ivB64: z.string().min(12).max(64),
  ciphertextB64: z.string().min(16).max(4096),
  updatedAtIso: z.string().min(1),
});
export type EncryptedSecretEnvelope = z.infer<typeof EncryptedSecretEnvelopeSchema>;

export const UserProfileSchema = z.strictObject({
  userId: z.string().uuid(),
  email: z.string().email(),
  displayName: z.string().trim().min(1).max(80),
  currentCefr: CefrLevelSchema,
  targetItepScore: z.number().min(3.5).max(6.0),
  examDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .nullable(),
  dailyGoalMinutes: z.number().int().min(60).max(300),
  themePreference: ThemePreferenceSchema,
  bioGoal: z.string().max(240),
  vaultSalt: z.string().min(16).max(128).nullable(),
  encryptedGeminiKey: EncryptedSecretEnvelopeSchema.nullable(),
});
export type UserProfile = z.infer<typeof UserProfileSchema>;

export const UserProfileUpdateInputSchema = z.strictObject({
  displayName: z.string().trim().min(1, "Ingresa tu nombre visible.").max(80),
  currentCefr: CefrLevelSchema,
  targetItepScore: z.number().min(3.5).max(6.0),
  examDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .nullable(),
  dailyGoalMinutes: z.number().int().min(60).max(300),
  bioGoal: z.string().trim().max(240),
});
export type UserProfileUpdateInput = z.infer<typeof UserProfileUpdateInputSchema>;

export const RegisterEdgeResponseSchema = z.union([
  z.strictObject({
    ok: z.literal(true),
    userId: z.string().uuid(),
  }),
  z.strictObject({
    ok: z.literal(false),
    code: z.string().min(1),
    messageEs: z.string().min(1),
  }),
]);
export type RegisterEdgeResponse = z.infer<typeof RegisterEdgeResponseSchema>;
