# Road to B2 — iTEP Academic-Plus 15-Day Bootcamp

Aplicación web de entrenamiento intensivo diseñada para llevar a un estudiante desde nivel **MCER B1** hasta **B2 sólido (puntaje iTEP >= 3.5, meta segura 3.8–4.4 / 6.0)** en un horizonte cerrado de **15 días**, con **cuentas independientes sincronizadas en la nube**.

- **Producción en vivo (GitHub Pages):** https://brian-dza.github.io/road-to-b2/
- **Preparada también para Vercel:** configuración lista con cabeceras de seguridad HTTP estrictas en `vercel.json`.

## Módulos Integrados

1. **Landing Page + Autenticación Multi-Dispositivo (Supabase Auth + PostgreSQL RLS):** Registro e inicio de sesión independientes para cada estudiante con aislamiento estricto por `auth.uid()`, ajustes personales de perfil (nombre, nivel base, puntaje meta iTEP, fecha estimada de examen, objetivo académico y tema visual) y bóveda **AES-GCM-256 (`PBKDF2-SHA256`)** vinculada a la contraseña para cifrar la Gemini API Key personal de extremo a extremo.
2. **Roadmap Principal B2 (15 Días / 3 Sprints):** Práctica diaria calibrada de 120 a 160 minutos cubriendo las 5 secciones oficiales de **iTEP Academic-Plus** (`Grammar`, `Listening` con toma única `1/1`, `Reading` con inserción `[A][B][C][D]`, `Writing` sin corrector ortográfico + evaluación híbrida con IA, y `Speaking` con `MediaRecorder` y temporizadores encadenados).
3. **Centro de Simulacros Oficiales (80 min):** Dos exámenes continuos completos sin pistas en los Días 8 y 14 con reporte estimado en escala oficial `0.0–6.0`.
4. **Cimientos Estructurales (`A1` a `B1`):** Test Diagnóstico calibrado de 30 preguntas y 6 cápsulas de remediación puntual para hispanohablantes.
5. **Vocabulario Inteligente · Byme Lenguage (`A1` a `C2` + SRS):** Banco académico híbrido con 60 tarjetas curadas con fonética IPA y audio neural `.mp3` repetible, tarjetas personalizadas (manuales o autocompletadas con Gemini `gemini-2.5-flash`) y Repetición Espaciada activa (SM-2).

## Desarrollo y Auditoría Local

```bash
pnpm install
pnpm dev

# Verificaciones de calidad, esquemas Zod, audios MP3 y seguridad
pnpm typecheck
pnpm lint
pnpm knip
pnpm validate:content
pnpm audit

# Suite E2E completa en navegador Chromium real
pnpm test:e2e
```
