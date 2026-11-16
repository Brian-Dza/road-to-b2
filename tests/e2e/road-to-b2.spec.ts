import { mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { expect, type Page, test } from "@playwright/test";
import { day08 } from "../../src/data/days/day-08.ts";
import { countWords } from "../../src/lib/ai-evaluator.ts";
import { UserProgressSchema } from "../../src/schemas/progress.schema.ts";

const WALKTHROUGH_SCREENSHOT_DIR =
  process.env.WALKTHROUGH_SCREENSHOT_DIR ?? join(process.cwd(), "test-results", "screenshots");
mkdirSync(WALKTHROUGH_SCREENSHOT_DIR, { recursive: true });

interface BrowserGuardian {
  readonly assertClean: () => void;
}

function attachStrictBrowserGuardian(page: Page): BrowserGuardian {
  const failures: string[] = [];

  page.on("pageerror", (error) => {
    failures.push(`[pageerror] ${error.name}: ${error.message}`);
  });

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      failures.push(`[console.error] ${msg.text()}`);
    }
  });

  page.on("response", (response) => {
    const url = response.url();
    const isLocalOrigin =
      url.startsWith("http://127.0.0.1:4173") || url.startsWith("http://localhost:4173");
    if (isLocalOrigin && response.status() >= 400) {
      failures.push(`[HTTP ${response.status()}] ${url}`);
    }
  });

  return {
    assertClean: () => {
      expect(failures, `Se detectaron errores en navegador o red:\n${failures.join("\n")}`).toEqual(
        [],
      );
    },
  };
}

async function signUpFreshTestAccount(
  page: Page,
  displayName = "Estudiante E2E",
): Promise<{ readonly email: string; readonly password: string }> {
  const uniqueSuffix = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const email = `e2e-${uniqueSuffix}@roadtob2.test`;
  const password = "TestPasswordB2!2026";

  await page.goto("/#/signup");
  await page.locator("#signup-name").fill(displayName);
  await page.locator("#signup-email").fill(email);
  await page.locator("#signup-password").fill(password);
  await page.getByRole("button", { name: "Crear cuenta y comenzar Bootcamp" }).click();
  await expect(page.getByRole("heading", { name: "Panel Estratégico Road to B2" })).toBeVisible({
    timeout: 20_000,
  });

  return { email, password };
}

test.describe("Road to B2 — Verificación E2E Integral en Chromium Real", () => {
  test("Escenario 1: Cimientos A1–B1, Test Diagnóstico con explicaciones en español y dominio de cápsula", async ({
    page,
  }) => {
    const guardian = attachStrictBrowserGuardian(page);

    await signUpFreshTestAccount(page, "Estudiante Escenario 1");

    await page.getByRole("link", { name: "Cimientos A1–B1" }).click();
    await expect(page).toHaveURL(/#\/foundations$/);
    await expect(
      page.getByRole("heading", { name: "Cimientos Estructurales y Diagnóstico Calibrado" }),
    ).toBeVisible();

    // Responder #1 con acierto (diag-q01 -> C: "stays")
    await page.locator('label:has(input[name="diag-diag-q01"][value="C"])').click();
    await expect(page.getByText("Respuesta correcta (C)").first()).toBeVisible();
    await expect(
      page.getByText(
        /el núcleo del sujeto 'The main university library' es tercera persona singular/,
      ),
    ).toBeVisible();

    // Responder #2 con fallo deliberado (diag-q02 -> A: "does" en vez de B: "do")
    await page.locator('label:has(input[name="diag-diag-q02"][value="A"])').click();
    await expect(page.getByText("Elegiste A · Respuesta correcta: B")).toBeVisible();
    await expect(
      page.getByText(/'does' solo concuerda con sujetos en tercera persona singular/),
    ).toBeVisible();
    await expect(
      page.getByText(
        /las preguntas en Present Simple con verbo léxico en base \('submit'\) y sujeto plural/,
      ),
    ).toBeVisible();

    // Responder #3 con acierto (diag-q03 -> D: "agree")
    await page.locator('label:has(input[name="diag-diag-q03"][value="D"])').click();
    await expect(page.getByText("Respuesta correcta (D)").first()).toBeVisible();

    // Calcular y guardar diagnóstico
    await page.getByRole("button", { name: /Calcular y guardar diagnóstico \(3\/30\)/ }).click();

    await expect(
      page.getByRole("heading", { name: "Resultado Diagnóstico Guardado" }),
    ).toBeVisible();
    await expect(page.getByText(/Puntaje:\s*67%/)).toBeVisible();

    const recommendedCapsuleButton = page
      .getByRole("button", { name: /A1 · Core Clause Order, Be vs\. Have & Present Aspect/ })
      .first();
    await expect(recommendedCapsuleButton).toBeVisible();

    // Captura 2: Cimientos A1–B1 mostrando diagnóstico guardado y explicaciones en español
    await page.evaluate(() => window.scrollTo({ top: 500, behavior: "instant" }));
    await page.screenshot({
      path: join(WALKTHROUGH_SCREENSHOT_DIR, "screenshot-foundations.png"),
    });

    // Abrir la cápsula recomendada a1-core-structures
    await recommendedCapsuleButton.click();
    await expect(page).toHaveURL(/#\/foundations\/a1-core-structures$/);
    await expect(
      page.getByRole("heading", { name: "Core Clause Order, Be vs. Have & Present Aspect" }).last(),
    ).toBeVisible();
    await expect(page.getByText("Síntesis estructural del módulo")).toBeVisible();
    await expect(page.getByText("Puente directo hacia iTEP Nivel B2")).toBeVisible();

    // Responder micro-quiz de la cápsula
    await page
      .locator('label:has(input[name="capsule-a1-core-structures-fm-a1-core-q01"][value="B"])')
      .click();
    await expect(page.getByText("Correcto (B)")).toBeVisible();

    await page
      .locator('label:has(input[name="capsule-a1-core-structures-fm-a1-core-q02"][value="A"])')
      .click();
    await expect(page.getByText("Correcto (A)")).toBeVisible();

    await page.getByRole("button", { name: "Comprobar micro-verificación" }).click();
    await expect(page.getByText(/Resultado actual:\s*2\s*\/\s*5\s*aciertos/)).toBeVisible();

    // Marcar cápsula como Dominado y verificar actualización visual
    await page.getByRole("button", { name: "Marcar cápsula como Dominado" }).click();

    const capsuleStatusGroup = page.getByRole("group", {
      name: "Estado de dominio para Core Clause Order, Be vs. Have & Present Aspect",
    });
    await expect(capsuleStatusGroup.getByRole("button", { name: "Dominado" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    const capsuleSelectorCard = page
      .getByRole("tabpanel")
      .locator("button", { hasText: "Core Clause Order, Be vs. Have & Present Aspect" })
      .first();
    await expect(capsuleSelectorCard).toContainText("Dominado");

    guardian.assertClean();
  });

  test("Escenario 2: Roadmap Días 1–15, estados globales y los 5 Runners iTEP (Grammar, Listening MP3 1/1, Reading, Writing IA, Speaking MediaRecorder)", async ({
    page,
  }) => {
    test.setTimeout(90_000);
    const guardian = attachStrictBrowserGuardian(page);

    await signUpFreshTestAccount(page, "Estudiante Escenario 2");

    // 1. Verificar los 3 Sprints y las 15 tarjetas de días completas
    await expect(page.getByRole("heading", { name: /Sprint 1 \(Días 1–5\)/ })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Sprint 2 \(Días 6–10\)/ })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Sprint 3 \(Días 11–15\)/ })).toBeVisible();

    for (let dayNum = 1; dayNum <= 15; dayNum += 1) {
      const card = page.locator(`article[aria-labelledby="dashboard-day-title-${dayNum}"]`);
      await expect(card).toBeVisible();
      await expect(card).toContainText(`Día ${dayNum}`);
      await expect(card).toContainText("B2");
      await expect(card).toContainText(/1[2-8]\d min/);
    }

    // Cambiar estados en Dashboard: Pendiente -> En repaso -> Dominado y comprobar métricas
    const day1Select = page.getByLabel("Estado de dominio del Día 1", { exact: true });
    await expect(day1Select).toHaveValue("pending");

    await day1Select.selectOption("in_review");
    await expect(page.getByText("1 en repaso · 14 pendientes")).toBeVisible();

    await day1Select.selectOption("mastered");
    await expect(page.getByText("1 / 15")).toBeVisible();
    await expect(page.getByText("0 en repaso · 14 pendientes")).toBeVisible();

    await page.getByLabel("Estado de dominio del Día 2", { exact: true }).selectOption("in_review");
    await page.getByLabel("Estado de dominio del Día 3", { exact: true }).selectOption("mastered");
    await expect(page.getByText("2 / 15")).toBeVisible();
    await expect(page.getByText("1 en repaso · 12 pendientes")).toBeVisible();

    // Captura 1: Dashboard de 15 días con progreso activo
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.screenshot({
      path: join(WALKTHROUGH_SCREENSHOT_DIR, "screenshot-dashboard.png"),
    });

    // 2. Entrar al Día 1 y validar las 5 habilidades oficiales iTEP
    await page.getByRole("link", { name: "Estudiar Día 1", exact: true }).click();
    await expect(page).toHaveURL(/#\/day\/1$/);
    await expect(
      page.getByRole("heading", {
        name: /Día 1: Complex Clause Architecture & Academic Inference/,
      }),
    ).toBeVisible();

    // --- HABILIDAD 1: GRAMMAR (Part 1 + Part 2 con segmentos subrayados) ---
    await page.locator('label:has(input[name="grammar-d01-gram-p1-q01"][value="C"])').click();
    const gramQ1Article = page.locator("article", {
      has: page.locator('input[name="grammar-d01-gram-p1-q01"]'),
    });
    await gramQ1Article.getByRole("button", { name: "Comprobar respuesta" }).click();
    await expect(gramQ1Article).toContainText("Respuesta correcta (C)");
    await expect(gramQ1Article).toContainText("Estrategia iTEP:");

    // Part 2: clic directo sobre el segmento subrayado [A] Analyzing under ultraviolet light
    const gramQ6Article = page.locator("article", {
      has: page.locator('input[name="grammar-d01-gram-p2-q06"]'),
    });
    await gramQ6Article
      .getByRole("button", { name: /\[A\]\s*Analyzing under ultraviolet light/ })
      .click();
    await gramQ6Article.getByRole("button", { name: "Comprobar respuesta" }).click();
    await expect(gramQ6Article).toContainText("Respuesta correcta (A)");
    await expect(gramQ6Article).toContainText("Corrección B2:");
    await expect(gramQ6Article).toContainText("Analyzed under ultraviolet light");

    // --- HABILIDAD 2: LISTENING (HTTP 200, duración válida, bloqueo 1/1 y desbloqueo de transcripción) ---
    const directMp3Res = await page.request.get("/audio/day01-listening-p1.mp3");
    expect(directMp3Res.status()).toBe(200);
    expect(directMp3Res.headers()["content-type"]).toContain("audio/mpeg");
    expect((await directMp3Res.body()).byteLength).toBeGreaterThan(10_000);

    await page.getByRole("tab", { name: /Listening/ }).click();

    const firstTrackSection = page
      .locator("section", { hasText: "Reserve Desk Edition Discrepancy" })
      .first();
    const trackAudio = firstTrackSection.locator('audio[src="/audio/day01-listening-p1.mp3"]');
    await expect(trackAudio).toHaveCount(1);

    // Esperar a que cargue metadata real del MP3 (> 30s)
    await expect
      .poll(async () => {
        return trackAudio.evaluate((el) => {
          const audio = el as HTMLAudioElement;
          return Number.isFinite(audio.duration) ? audio.duration : 0;
        });
      })
      .toBeGreaterThan(30);

    // Antes de enviar respuestas, el <details> de transcripción NO está desbloqueado
    await expect(page.locator("details#transcript-day01-listening-p1")).toHaveCount(0);
    await expect(
      firstTrackSection.getByText(/Transcripción multi-locutor bloqueada durante Modo Examen/),
    ).toBeVisible();

    // Reproducir pista en Modo Examen y completar la única toma
    await firstTrackSection
      .getByRole("button", { name: "Reproducir audio oficial (1 sola toma)" })
      .click();
    await expect(
      firstTrackSection.getByRole("button", {
        name: /Reproduciendo pista oficial \(1 sola toma en curso\)/,
      }),
    ).toBeVisible();

    // Adelantar internamente el elemento de audio al tramo final tras arrancar reproducción real
    await trackAudio.evaluate((el) => {
      const audio = el as HTMLAudioElement;
      if (Number.isFinite(audio.duration) && audio.duration > 1) {
        audio.currentTime = Math.max(0, audio.duration - 0.15);
      }
    });

    // Verificar bloqueo estricto 1/1 ANTES de enviar respuestas
    const lockedPlayButton = firstTrackSection.getByRole("button", {
      name: "1/1 reproducción consumida — condición real iTEP",
    });
    await expect(lockedPlayButton).toBeVisible({ timeout: 10_000 });
    await expect(lockedPlayButton).toBeDisabled();
    await expect(page.locator("details#transcript-day01-listening-p1")).toHaveCount(0);

    // Seleccionar respuesta y enviar bloque para desbloquear transcripción y explicaciones
    await firstTrackSection
      .locator('label:has(input[name="listening-d01-list-p1-q01"][value="B"])')
      .click();
    await firstTrackSection
      .getByRole("button", { name: "Enviar respuestas y ver transcripción" })
      .click();

    const unlockedTranscript = page.locator("details#transcript-day01-listening-p1");
    await expect(unlockedTranscript).toBeVisible();
    await expect(unlockedTranscript).toHaveAttribute("open", "");
    await expect(unlockedTranscript).toContainText("Student:");
    await expect(unlockedTranscript).toContainText("Librarian:");
    await expect(firstTrackSection).toContainText("Respuesta correcta (B)");
    await expect(firstTrackSection).toContainText("Clave estratégica B2:");

    // --- HABILIDAD 3: READING (Pasaje académico con [A][B][C][D], sentenceToInsert y selección) ---
    await page.getByRole("tab", { name: /Reading/ }).click();

    const academicPassageSection = page.locator("#reading-passage-d01-read-p2");
    await expect(academicPassageSection).toBeVisible();
    await expect(
      academicPassageSection.getByRole("heading", {
        name: "Mycorrhizal Networks and Resource Allocation in Temperate Forests",
      }),
    ).toBeVisible();

    for (const marker of ["A", "B", "C", "D"] as const) {
      await expect(
        academicPassageSection.getByRole("button", {
          name: `Seleccionar posición de inserción [${marker}]`,
        }),
      ).toBeVisible();
    }

    await expect(academicPassageSection).toContainText(
      "Oración a insertar en [A], [B], [C] o [D]:",
    );
    await expect(academicPassageSection).toContainText(
      "In other words, detecting labeled carbon outside a donor tree does not prove that a neighboring seedling actually absorbs and utilizes it.",
    );

    // Seleccionar posición [D] directamente desde el marcador del pasaje + responder q01
    await academicPassageSection
      .getByRole("button", { name: "Seleccionar posición de inserción [D]" })
      .click();
    await expect(
      academicPassageSection.locator('input[name="reading-d01-read-p2-q05"][value="D"]'),
    ).toBeChecked();

    await academicPassageSection
      .locator('label:has(input[name="reading-d01-read-p2-q01"][value="B"])')
      .click();
    await page.getByRole("button", { name: "Comprobar Reading completo" }).click();
    await expect(academicPassageSection).toContainText("Respuesta correcta (D)");

    // Captura 3: Vista de estudio diario en Reading académico con marcadores [A]-[D] y análisis
    const insertQuestionCard = academicPassageSection.locator("article", {
      has: page.locator('input[name="reading-d01-read-p2-q05"]'),
    });
    await insertQuestionCard.scrollIntoViewIfNeeded();
    await page.screenshot({
      path: join(WALKTHROUGH_SCREENSHOT_DIR, "screenshot-day01-listening-reading.png"),
    });

    // --- HABILIDAD 4: WRITING (spellcheck="false", lang="en", timer en vivo, conteo exacto y portapapeles IA) ---
    await page.getByRole("tab", { name: /Writing/ }).click();

    const writingPart1Card = page
      .locator("section", { hasText: "Rescheduling an Honors Colloquium Presentation" })
      .first();
    const part1Textarea = writingPart1Card.getByLabel(
      "Redacción oficial Writing Part 1 (inglés sin corrector)",
    );

    await expect(part1Textarea).toHaveAttribute("spellcheck", "false");
    await expect(part1Textarea).toHaveAttribute("lang", "en");
    await expect(part1Textarea).toHaveAttribute("autocorrect", "off");

    const sampleNote =
      "Dear Dr. Reynolds, I am writing regarding my colloquium presentation on Tuesday, November 12. Because my marine ecology professor scheduled a mandatory coastal sampling lab that afternoon, I cannot attend. Maya Lin, who presents on Thursday, November 14, has agreed to switch dates with me. Please let me know whether any form is required to update the program.";
    const expectedWords = countWords(sampleNote);
    expect(expectedWords).toBe(58);

    await part1Textarea.fill(sampleNote);

    // Comprobar conteo exacto y rango óptimo B2 (50–75 palabras)
    await expect(writingPart1Card.getByText(`${expectedWords} palabras`)).toBeVisible();
    await expect(writingPart1Card.getByText("En zona óptima B2 (50–75 palabras)")).toBeVisible();

    // Comprobar que el cronómetro de Writing descuenta tiempo en vivo (< 05:00)
    await expect
      .poll(
        async () => {
          const text = await writingPart1Card.textContent();
          const match = text?.match(/04:5\d/);
          return match ? match[0] : null;
        },
        { timeout: 5_000 },
      )
      .not.toBeNull();

    // Copiar prompt estructurado con rúbrica B2 al portapapeles y verificar contenido
    await writingPart1Card.getByRole("button", { name: "Copiar para evaluar con IA" }).click();
    await expect(
      writingPart1Card.getByRole("button", { name: "¡Copiado con rúbrica B2!" }),
    ).toBeVisible();

    const clipboardContent = await page.evaluate(() => navigator.clipboard.readText());
    expect(clipboardContent).toContain("=== ENUNCIADO EXACTO DEL EXAMEN (PROMPT) ===");
    expect(clipboardContent).toContain("Dr. Reynolds, the Colloquium Coordinator");
    expect(clipboardContent).toContain("=== RESPUESTA DEL ESTUDIANTE (RAW EXAM TEXT) ===");
    expect(clipboardContent).toContain(sampleNote);
    expect(clipboardContent).toContain(`Conteo real del estudiante: ${expectedWords} palabras`);
    expect(clipboardContent).toContain("=== RÚBRICA OFICIAL iTEP ACADEMIC-PLUS");

    // Desplegar respuesta modelo B2 y capturar pantalla limpia de Writing + IA
    await writingPart1Card
      .locator("summary", { hasText: /Ver respuesta modelo calibrada/ })
      .click();
    await writingPart1Card.scrollIntoViewIfNeeded();
    await page.screenshot({
      path: join(WALKTHROUGH_SCREENSHOT_DIR, "screenshot-writing-ai.png"),
    });

    // --- HABILIDAD 5: SPEAKING (Prep countdown -> MediaRecorder activo -> auto-escucha <audio controls> + rúbrica) ---
    const speakMp3Res = await page.request.get("/audio/day01-speaking-p2.mp3");
    expect(speakMp3Res.status()).toBe(200);

    await page.getByRole("tab", { name: /Speaking/ }).click();

    const speakingPart1Card = page
      .locator("section", { hasText: "Mastering an Unfamiliar Academic or Technical Skill" })
      .first();

    await speakingPart1Card.getByRole("button", { name: "Iniciar preparación (30s)" }).click();
    await expect(speakingPart1Card.getByText(/Fase 1\/2 · Preparación activa/)).toBeVisible();

    // Comprobar que la cuenta regresiva de preparación descuenta desde 00:30
    await expect
      .poll(
        async () => {
          const text = await speakingPart1Card.textContent();
          return Boolean(text?.includes("00:29") || text?.includes("00:28"));
        },
        { timeout: 4_000 },
      )
      .toBe(true);

    // Pasar a grabación activa con MediaRecorder (stream simulado de Chromium)
    await speakingPart1Card.getByRole("button", { name: "Adelantar y grabar ahora (45s)" }).click();
    await expect(
      speakingPart1Card.getByText("Fase 2/2 · Grabando respuesta oficial en navegador…"),
    ).toBeVisible();

    // Permitir que MediaRecorder acumule chunks reales antes de detener
    await page.waitForTimeout(650);
    await speakingPart1Card.getByRole("button", { name: "Detener y revisar respuesta" }).click();

    await expect(
      speakingPart1Card.getByText("Auto-escucha y auditoría de criterios B2"),
    ).toBeVisible();

    const recordedPlaybackAudio = speakingPart1Card.locator(
      'audio[controls][aria-label*="Mastering an Unfamiliar Academic or Technical Skill"]',
    );
    await expect(recordedPlaybackAudio).toBeVisible();
    await expect(recordedPlaybackAudio).toHaveAttribute("src", /^blob:/);

    // Marcar criterios de la rúbrica oficial B2
    const rubricCheckboxes = speakingPart1Card.locator('input[type="checkbox"]');
    await rubricCheckboxes.nth(0).check();
    await rubricCheckboxes.nth(1).check();
    await expect(speakingPart1Card.getByText("Rúbrica B2: 2 / 4")).toBeVisible();

    // 3. Navegar a Día 8, Día 14 y Día 15 verificando carga sin errores
    const daySwitcher = page.getByLabel("Cambiar rápidamente de día del Bootcamp");
    await daySwitcher.selectOption("8");
    await expect(page).toHaveURL(/#\/day\/8$/);
    await expect(
      page.getByRole("heading", { name: /Día 8: Official Midpoint Mock Exam #1/ }),
    ).toBeVisible();

    await daySwitcher.selectOption("14");
    await expect(page).toHaveURL(/#\/day\/14$/);
    await expect(page.getByRole("heading", { name: /Día 14:/ })).toBeVisible();

    await daySwitcher.selectOption("15");
    await expect(page).toHaveURL(/#\/day\/15$/);
    await expect(
      page.getByRole("heading", {
        name: /Día 15: Exam-Day Peak Readiness & Anti-Fatigue Protocol/,
      }),
    ).toBeVisible();

    guardian.assertClean();
  });

  test("Escenario 3: Simulacro Cronometrado Oficial (80 min) — 5 secciones sin pistas, reporte 0.0–6.0 e historial", async ({
    page,
  }) => {
    test.setTimeout(90_000);
    const guardian = attachStrictBrowserGuardian(page);

    await signUpFreshTestAccount(page, "Estudiante Escenario 3");
    await page.goto("/#/mocks");
    await expect(
      page.getByRole("heading", { name: "Centro de Simulacros Oficiales iTEP (80 Minutos)" }),
    ).toBeVisible();

    const midMockCard = page
      .locator("article", { hasText: "Simulacro Oficial Intermedio #1 (Día 8)" })
      .first();
    await midMockCard.getByRole("link", { name: "Iniciar Simulacro (80 min)" }).click();
    await expect(page).toHaveURL(/#\/mock\/mock-mid-day08$/);

    await page.getByRole("button", { name: "Comenzar Simulacro Cronometrado (80:00)" }).click();

    // 1. Sección Grammar (10:00) — reloj corriendo y cero explicaciones reveladas
    await expect(page.getByText("Sección 1 de 5 · Grammar")).toBeVisible();
    await expect(page.getByText("Reloj oficial continuo")).toBeVisible();

    await expect
      .poll(
        async () => {
          const headerText = await page.locator("section.sticky").textContent();
          return Boolean(headerText?.includes("09:59") || headerText?.includes("09:58"));
        },
        { timeout: 4_000 },
      )
      .toBe(true);

    for (const q of day08.sections.grammar.questions.slice(0, 20)) {
      await page
        .locator(`label:has(input[name="grammar-${q.id}"][value="${q.correctOptionId}"])`)
        .click();
    }
    await expect(page.getByText("Estrategia iTEP:")).toHaveCount(0);
    await expect(page.getByRole("button", { name: /Comprobar/i })).toHaveCount(0);

    await page.getByRole("button", { name: "Avanzar a Listening" }).click();

    // 2. Sección Listening (20:00) — sin botón de envío ni transcripción revelada
    await expect(page.getByText("Sección 2 de 5 · Listening")).toBeVisible();
    await expect(
      page.getByRole("button", { name: /Enviar respuestas y ver transcripción/i }),
    ).toHaveCount(0);

    for (const item of day08.sections.listening.items) {
      for (const q of item.questions) {
        await page
          .locator(`label:has(input[name="listening-${q.id}"][value="${q.correctOptionId}"])`)
          .click();
      }
    }

    await page.getByRole("button", { name: "Avanzar a Reading" }).click();

    // 3. Sección Reading (20:00) — sin explicaciones durante el examen
    await expect(page.getByText("Sección 3 de 5 · Reading")).toBeVisible();
    for (const passage of day08.sections.reading.passages) {
      for (const q of passage.questions) {
        await page
          .locator(`label:has(input[name="reading-${q.id}"][value="${q.correctOptionId}"])`)
          .click();
      }
    }
    await expect(page.getByRole("button", { name: /Comprobar/i })).toHaveCount(0);

    await page.getByRole("button", { name: "Avanzar a Writing" }).click();

    // 4. Sección Writing (25:00) — sin corrector ni paneles de ayuda IA/modelo
    await expect(page.getByText("Sección 4 de 5 · Writing")).toBeVisible();
    await expect(page.getByRole("button", { name: /Copiar para evaluar con IA/i })).toHaveCount(0);

    const wTask1 = day08.sections.writing.tasks[0];
    const wTask2 = day08.sections.writing.tasks[1];
    if (wTask1) {
      await page
        .getByLabel("Redacción oficial Writing Part 1 (inglés sin corrector)")
        .fill(wTask1.modelAnswerB2);
    }
    if (wTask2) {
      await page
        .getByLabel("Redacción oficial Writing Part 2 (inglés sin corrector)")
        .fill(wTask2.modelAnswerB2);
    }

    await page.getByRole("button", { name: "Avanzar a Speaking" }).click();

    // 5. Sección Speaking (05:00) — grabación simulada + cierre del examen
    await expect(page.getByText("Sección 5 de 5 · Speaking")).toBeVisible();
    await expect(page.locator("summary", { hasText: /Ver transcripción modelo/i })).toHaveCount(0);

    const firstSpeakSection = page.locator("main section").nth(1);
    await firstSpeakSection.getByRole("button", { name: /Iniciar preparación/ }).click();
    await firstSpeakSection.getByRole("button", { name: /Adelantar y grabar ahora/ }).click();
    await expect(
      firstSpeakSection.getByText("Fase 2/2 · Grabando respuesta oficial en navegador…"),
    ).toBeVisible();
    await page.waitForTimeout(450);
    await firstSpeakSection.getByRole("button", { name: "Detener y revisar respuesta" }).click();
    await firstSpeakSection.locator('input[type="checkbox"]').nth(0).check();
    await firstSpeakSection.locator('input[type="checkbox"]').nth(1).check();
    await firstSpeakSection.locator('input[type="checkbox"]').nth(2).check();

    await page.getByRole("button", { name: "Finalizar Simulacro y Calificar" }).click();

    // Verificar reporte oficial 0.0–6.0 y desbloqueo de auditoría post-examen
    await expect(page.getByText("Reporte Oficial Estimado iTEP Academic-Plus")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Resultado Global:\s*[3-6]\.\d\s*\/\s*6\.0/ }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "Auditoría Diagnóstica Post-Examen (Respuestas, Explicaciones y Transcripciones)",
      }),
    ).toBeVisible();

    // Activar Modo Oscuro para tomar Captura 5 (Reporte 0.0–6.0 en Modo Oscuro)
    await page.getByRole("button", { name: "Ajustes y Respaldo" }).click();
    const settingsDialog = page.locator("dialog[open]");
    await expect(settingsDialog).toBeVisible();
    await settingsDialog.getByRole("button", { name: "Oscuro", exact: true }).click();
    await expect(page.locator('meta[name="color-scheme"]')).toHaveAttribute("content", "dark");
    await settingsDialog.getByRole("button", { name: "Cerrar ajustes" }).click();
    await expect(settingsDialog).toHaveCount(0);

    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.screenshot({
      path: join(WALKTHROUGH_SCREENSHOT_DIR, "screenshot-mock-dark.png"),
    });

    // Comprobar persistencia en el Historial de Simulacros
    await page.getByRole("link", { name: "Volver al Centro de Simulacros" }).click();
    await expect(page).toHaveURL(/#\/mocks$/);
    await expect(
      page.getByRole("heading", { name: "Historial de Simulacros Registrados (1)" }),
    ).toBeVisible();
    await expect(page.getByText(/MCER B2/).first()).toBeVisible();

    guardian.assertClean();
  });

  test("Escenario 4: Persistencia intacta tras page.reload(), Modo Oscuro (<dialog>) y ciclo Exportar -> Reiniciar -> Importar JSON", async ({
    page,
  }, testInfo) => {
    test.setTimeout(90_000);
    const guardian = attachStrictBrowserGuardian(page);

    // 1. Generar progreso real en los 5 dominios persistentes (días, cimientos, diagnóstico, writing, simulacro)
    await signUpFreshTestAccount(page, "Estudiante Escenario 4");
    await page.getByLabel("Estado de dominio del Día 1", { exact: true }).selectOption("mastered");
    await page.getByLabel("Estado de dominio del Día 2", { exact: true }).selectOption("in_review");

    // Diagnóstico + cápsula dominada
    await page.getByRole("link", { name: "Cimientos A1–B1" }).click();
    await page.locator('label:has(input[name="diag-diag-q01"][value="C"])').click();
    await page.locator('label:has(input[name="diag-diag-q02"][value="A"])').click();
    await page.getByRole("button", { name: /Calcular y guardar diagnóstico \(2\/30\)/ }).click();
    await expect(page.getByText(/Puntaje:\s*50%/)).toBeVisible();

    await page
      .getByRole("button", { name: /A1 · Core Clause Order, Be vs\. Have & Present Aspect/ })
      .first()
      .click();
    await page.getByRole("button", { name: "Marcar cápsula como Dominado" }).click();

    // Borrador de Writing en Día 1
    await page.goto("/#/day/1");
    await page.getByRole("tab", { name: /Writing/ }).click();
    const persistedDraftText =
      "Dear Dr. Reynolds, I am writing to confirm whether Maya Lin and I may exchange our colloquium presentation slots next week due to a mandatory marine lab.";
    await page
      .getByLabel("Redacción oficial Writing Part 1 (inglés sin corrector)")
      .fill(persistedDraftText);

    // Simulacro registrado en historial
    await page.goto("/#/mock/mock-mid-day08");
    await page.getByRole("button", { name: "Comenzar Simulacro Cronometrado (80:00)" }).click();
    const firstMockGram = day08.sections.grammar.questions[0];
    if (firstMockGram) {
      await page
        .locator(
          `label:has(input[name="grammar-${firstMockGram.id}"][value="${firstMockGram.correctOptionId}"])`,
        )
        .click();
    }
    await page.getByRole("button", { name: "Avanzar a Listening" }).click();
    await page.getByRole("button", { name: "Avanzar a Reading" }).click();
    await page.getByRole("button", { name: "Avanzar a Writing" }).click();
    await page.getByRole("button", { name: "Avanzar a Speaking" }).click();
    await page.getByRole("button", { name: "Finalizar Simulacro y Calificar" }).click();
    await expect(page.getByText("Reporte Oficial Estimado iTEP Academic-Plus")).toBeVisible();

    // 2. Volver al Dashboard, ejecutar page.reload() y verificar persistencia 100% intacta
    await page.goto("/#/dashboard");
    await expect(page.getByText("1 / 15")).toBeVisible();
    await expect(page.getByText("1 en repaso · 13 pendientes")).toBeVisible();
    await expect(page.getByText("1 / 6 cápsulas dominadas")).toBeVisible();
    await expect(page.getByText(/Último Test Diagnóstico:\s*50%/)).toBeVisible();
    await expect(page.getByText("1 simulacro completado")).toBeVisible();

    await page.reload();

    await expect(page.getByText("1 / 15")).toBeVisible();
    await expect(page.getByText("1 en repaso · 13 pendientes")).toBeVisible();
    await expect(page.getByText("1 / 6 cápsulas dominadas")).toBeVisible();
    await expect(page.getByText(/Último Test Diagnóstico:\s*50%/)).toBeVisible();
    await expect(page.getByText("1 simulacro completado")).toBeVisible();

    // Verificar borrador de Writing tras reload
    await page.goto("/#/day/1");
    await page.getByRole("tab", { name: /Writing/ }).click();
    await expect(
      page.getByLabel("Redacción oficial Writing Part 1 (inglés sin corrector)"),
    ).toHaveValue(persistedDraftText);

    // 3. Abrir <dialog> nativo de Ajustes, activar Modo Oscuro y verificar <meta name="color-scheme" content="dark">
    await page.getByRole("button", { name: "Ajustes y Respaldo" }).click();
    const dialog = page.locator("dialog[open]");
    await expect(dialog).toBeVisible();

    await dialog.getByRole("button", { name: "Oscuro", exact: true }).click();
    await expect(page.locator('meta[name="color-scheme"]')).toHaveAttribute("content", "dark");

    const bodyBgDark = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(bodyBgDark).toBe("rgb(11, 17, 32)");

    // Configurar una Gemini API Key sintética para verificar que NO se expone en el respaldo exportado
    await dialog
      .getByLabel("Clave personal de Google AI Studio")
      .fill("test-gemini-placeholder-key-0001");
    await dialog.getByRole("button", { name: "Guardar clave" }).click();

    // 4. Descargar respaldo .json (Exportar JSON) y validar esquema con Zod (sin API key en claro)
    const downloadPromise = page.waitForEvent("download");
    await dialog.getByRole("button", { name: "Exportar JSON" }).click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe("road-to-b2-backup.json");

    const backupFilePath = testInfo.outputPath("road-to-b2-backup.json");
    await download.saveAs(backupFilePath);

    const exportedRaw = readFileSync(backupFilePath, "utf8");
    expect(exportedRaw).not.toContain("test-gemini-placeholder-key-0001");
    const parsedBackup = UserProgressSchema.parse(JSON.parse(exportedRaw));
    expect(parsedBackup.settings.geminiApiKey).toBeUndefined();
    expect(parsedBackup.dayStatuses["1"]).toBe("mastered");
    expect(parsedBackup.dayStatuses["2"]).toBe("in_review");
    expect(parsedBackup.foundationStatuses["a1-core-structures"]).toBe("mastered");
    expect(parsedBackup.diagnosticAttempt?.scorePercent).toBe(50);
    expect(parsedBackup.writingDrafts["d01-writ-p1"]?.text).toBe(persistedDraftText);
    expect(parsedBackup.mockAttempts).toHaveLength(1);

    // 5. Ejecutar Reiniciar progreso y comprobar que todo vuelve a cero
    await dialog.getByRole("button", { name: "Reiniciar progreso" }).click();
    await dialog.getByRole("button", { name: "Confirmar reinicio total" }).click();
    await expect(
      dialog.getByText("Todo el progreso local fue reiniciado a su estado inicial limpio."),
    ).toBeVisible();

    await dialog.getByRole("button", { name: "Cerrar ajustes" }).click();
    await page.goto("/#/dashboard");

    await expect(page.getByText("0 / 15")).toBeVisible();
    await expect(page.getByText("0 en repaso · 15 pendientes")).toBeVisible();
    await expect(page.getByText("0 / 6 cápsulas dominadas")).toBeVisible();
    await expect(page.getByRole("link", { name: "Iniciar Test Diagnóstico A1–B1" })).toBeVisible();

    // 6. Re-importar el archivo .json descargado y comprobar restauración completa
    await page.getByRole("button", { name: "Ajustes y Respaldo" }).click();
    const reopenedDialog = page.locator("dialog[open]");
    await expect(reopenedDialog).toBeVisible();

    const fileChooserPromise = page.waitForEvent("filechooser");
    await reopenedDialog.getByRole("button", { name: "Importar JSON" }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(backupFilePath);

    await expect(
      reopenedDialog.getByText(
        "Respaldo restaurado correctamente. Todo tu progreso ha sido sincronizado.",
      ),
    ).toBeVisible();
    await reopenedDialog.getByRole("button", { name: "Cerrar ajustes" }).click();

    await expect(page.getByText("1 / 15")).toBeVisible();
    await expect(page.getByText("1 en repaso · 13 pendientes")).toBeVisible();
    await expect(page.getByText("1 / 6 cápsulas dominadas")).toBeVisible();
    await expect(page.getByText(/Último Test Diagnóstico:\s*50%/)).toBeVisible();
    await expect(page.getByText("1 simulacro completado")).toBeVisible();

    await page.goto("/#/day/1");
    await page.getByRole("tab", { name: /Writing/ }).click();
    await expect(
      page.getByLabel("Redacción oficial Writing Part 1 (inglés sin corrector)"),
    ).toHaveValue(persistedDraftText);

    guardian.assertClean();
  });

  test("Escenario 5: Vocabulario Inteligente · Byme Lenguage — Audio neural repetible, sesión SRS, palabra propia C1, respaldo JSON y 6.ª pestaña opcional diaria", async ({
    page,
  }, testInfo) => {
    test.setTimeout(90_000);
    const guardian = attachStrictBrowserGuardian(page);

    // 1. Navegar desde la Card 4 del Dashboard hacia #/vocabulary
    await signUpFreshTestAccount(page, "Estudiante Escenario 5");
    await expect(
      page.getByRole("heading", { name: "Vocabulario Inteligente · Byme Lenguage" }),
    ).toBeVisible();
    await expect(page.getByText("0 / 60 tarjetas")).toBeVisible();
    await expect(page.getByText("60 base académica iTEP · 0 palabras propias")).toBeVisible();

    await page.getByRole("link", { name: "Abrir Byme Lenguage" }).click();
    await expect(page).toHaveURL(/#\/vocabulary$/);
    await expect(
      page.getByRole("heading", { name: "Vocabulario Inteligente · Byme Lenguage" }),
    ).toBeVisible();

    // 2. Verificar pista neural .mp3 de vocabulario y reproducción repetible ilimitada (sin candado 1/1)
    const vocabMp3Res = await page.request.get("/audio/vocab-d01-corroborate.mp3");
    expect(vocabMp3Res.status()).toBe(200);
    expect(vocabMp3Res.headers()["content-type"]).toContain("audio/mpeg");
    expect((await vocabMp3Res.body()).byteLength).toBeGreaterThan(10_000);

    const flashcardArticle = page.locator(
      'article[aria-labelledby="flashcard-term-vocab-d01-corroborate"]',
    );
    await expect(flashcardArticle).toBeVisible();

    const vocabAudio = flashcardArticle.locator('audio[src="/audio/vocab-d01-corroborate.mp3"]');
    await expect(vocabAudio).toHaveCount(1);
    await expect
      .poll(async () => {
        return vocabAudio.evaluate((el) => {
          const audio = el as HTMLAudioElement;
          return Number.isFinite(audio.duration) ? audio.duration : 0;
        });
      })
      .toBeGreaterThan(3);

    // Toma #1 completa
    const playPronunciationBtn = flashcardArticle.getByRole("button", {
      name: "Escuchar pronunciación y ejemplo de corroborate",
    });
    await playPronunciationBtn.click();
    await expect(
      flashcardArticle.getByRole("button", { name: "Detener pronunciación de corroborate" }),
    ).toBeVisible();

    await vocabAudio.evaluate((el) => {
      const audio = el as HTMLAudioElement;
      if (Number.isFinite(audio.duration) && audio.duration > 0.5) {
        audio.currentTime = Math.max(0, audio.duration - 0.1);
      }
    });

    // Tras finalizar la toma #1, el botón sigue habilitado y permite una toma #2
    await expect(playPronunciationBtn).toBeVisible({ timeout: 8_000 });
    await expect(playPronunciationBtn).toBeEnabled();
    await playPronunciationBtn.click();
    const stopPronunciationBtn = flashcardArticle.getByRole("button", {
      name: "Detener pronunciación de corroborate",
    });
    await expect(stopPronunciationBtn).toBeVisible();
    await stopPronunciationBtn.click();
    await expect(playPronunciationBtn).toBeEnabled();

    // 3. Revelar flashcard, capturar vista de Byme Lenguage y calificar con Fácil (SRS SM-2)
    await flashcardArticle.getByRole("button", { name: "Mostrar significado y contexto" }).click();
    await expect(
      flashcardArticle.getByText(
        /Corroborar o respaldar una afirmación o hipótesis mediante evidencia empírica independiente/,
      ),
    ).toBeVisible();

    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.screenshot({
      path: join(WALKTHROUGH_SCREENSHOT_DIR, "screenshot-vocabulary-byme.png"),
    });

    await flashcardArticle.getByRole("button", { name: /Fácil/ }).click();
    await expect(page.getByText("1 / 60")).toBeVisible();

    // 4. Crear una palabra propia MCER C1 vinculada al Día 1 mediante el <dialog> nativo
    await page.getByRole("button", { name: "Agregar Palabra Propia" }).click();
    const vocabDialog = page.locator("dialog[open]");
    await expect(vocabDialog).toBeVisible();

    await vocabDialog
      .getByLabel(/Término, phrasal verb o colocación en inglés/)
      .fill("epistemological");
    await vocabDialog.getByRole("button", { name: "Copiar prompt IA" }).click();
    await expect(vocabDialog.getByRole("button", { name: "¡Prompt copiado!" })).toBeVisible();

    await vocabDialog.getByLabel("Nivel MCER").selectOption("C1");
    await vocabDialog.getByLabel("Categoría gramatical").selectOption("adjective");
    await vocabDialog.getByLabel("Fonética IPA (opcional)").fill("/ɪˌpɪs.tə.məˈlɒdʒ.ɪ.kəl/");
    await vocabDialog
      .getByLabel(/Significado preciso en español/)
      .fill(
        "Epistemológico; relativo a los fundamentos, límites y validez del conocimiento científico.",
      );
    await vocabDialog
      .getByLabel(/Oración académica en contexto \(inglés\)/)
      .fill(
        "The seminar examined the epistemological assumptions underlying quantitative social research.",
      );
    await vocabDialog
      .getByLabel("Colocaciones separadas por coma (opcional)")
      .fill("epistemological framework, epistemological shift");
    await vocabDialog.getByLabel("D1", { exact: true }).check();

    await vocabDialog.getByRole("button", { name: "Guardar en Mi Banco" }).click();
    await expect(vocabDialog).toHaveCount(0);

    await expect(page.getByText("60 base iTEP · 1 propias")).toBeVisible();
    await expect(page.getByText("1 / 61")).toBeVisible();

    // 5. Verificar en el Explorador (<search>) filtrando por Mis Palabras y tras page.reload()
    await page.getByRole("tab", { name: /Explorador y Gestión del Banco/ }).click();
    await page.getByLabel("Origen").selectOption("custom");
    await expect(page.getByText("Mostrando 1 de 61 tarjetas léxicas.")).toBeVisible();
    await expect(page.getByRole("heading", { name: "epistemological" })).toBeVisible();
    await expect(page.getByText("MCER C1")).toBeVisible();

    await page.reload();
    await expect(page.getByText("60 base iTEP · 1 propias")).toBeVisible();
    await expect(page.getByText("1 / 61")).toBeVisible();

    // 6. Verificar ciclo Exportar JSON -> Reiniciar progreso -> Importar JSON con estado SRS + customItems
    await page.getByRole("button", { name: "Ajustes y Respaldo" }).click();
    const settingsDialog = page.locator("dialog[open]");
    await expect(settingsDialog).toBeVisible();

    const downloadPromise = page.waitForEvent("download");
    await settingsDialog.getByRole("button", { name: "Exportar JSON" }).click();
    const download = await downloadPromise;
    const vocabBackupPath = testInfo.outputPath("road-to-b2-vocab-backup.json");
    await download.saveAs(vocabBackupPath);

    const parsedVocabBackup = UserProgressSchema.parse(
      JSON.parse(readFileSync(vocabBackupPath, "utf8")),
    );
    expect(parsedVocabBackup.vocabulary.customItems).toHaveLength(1);
    expect(parsedVocabBackup.vocabulary.customItems[0]?.term).toBe("epistemological");
    expect(parsedVocabBackup.vocabulary.srsRecords["vocab-d01-corroborate"]?.status).toBe(
      "mastered",
    );

    await settingsDialog.getByRole("button", { name: "Reiniciar progreso" }).click();
    await settingsDialog.getByRole("button", { name: "Confirmar reinicio total" }).click();
    await settingsDialog.getByRole("button", { name: "Cerrar ajustes" }).click();

    await expect(page.getByText("60 base iTEP · 0 propias")).toBeVisible();
    await expect(page.getByText("0 / 60")).toBeVisible();

    await page.getByRole("button", { name: "Ajustes y Respaldo" }).click();
    const restoreDialog = page.locator("dialog[open]");
    const chooserPromise = page.waitForEvent("filechooser");
    await restoreDialog.getByRole("button", { name: "Importar JSON" }).click();
    const chooser = await chooserPromise;
    await chooser.setFiles(vocabBackupPath);
    await restoreDialog.getByRole("button", { name: "Cerrar ajustes" }).click();

    await expect(page.getByText("60 base iTEP · 1 propias")).toBeVisible();
    await expect(page.getByText("1 / 61")).toBeVisible();

    // 7. Verificar la 6.ª pestaña opcional en Día 1 y confirmar que NO altera las 75 habilidades oficiales
    await page.goto("/#/day/1");
    const dayVocabTab = page.getByRole("tab", { name: /Vocabulario · Byme/ });
    await expect(dayVocabTab).toBeVisible();
    await expect(dayVocabTab).toContainText("Opcional · 1/5");

    await dayVocabTab.click();
    await expect(
      page.getByRole("heading", {
        name: "Refuerzo Léxico en Contexto y Repetición Espaciada (Día 1)",
      }),
    ).toBeVisible();
    await page.getByRole("button", { name: "Ver fichas completas (5)" }).click();
    await expect(page.getByRole("heading", { name: "corroborate" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "epistemological" })).toBeVisible();

    await page.goto("/#/dashboard");
    await expect(page.getByText("0 / 75")).toBeVisible();
    await expect(page.getByText("1 / 61 tarjetas")).toBeVisible();

    guardian.assertClean();
  });

  test("Escenario 6: Landing Page, Login/Registro multi-usuario en Supabase, Perfil Personal, Bóveda AES-GCM y Aislamiento entre Cuentas", async ({
    page,
    browser,
  }) => {
    test.setTimeout(90_000);
    const guardian = attachStrictBrowserGuardian(page);

    // 1. Landing Page pública y protección de rutas sin sesión
    await page.goto("/#/");
    await expect(
      page.getByRole("heading", {
        name: /Pasa de B1 a B2 en el examen iTEP Academic-Plus/i,
      }),
    ).toBeVisible();

    await page.goto("/#/dashboard");
    await expect(page).toHaveURL(/#\/login$/);
    await expect(
      page.getByRole("heading", { name: "Inicia sesión en tu Bootcamp personal" }),
    ).toBeVisible();

    // 2. Registrar Usuario A con metas personalizadas
    await page.getByRole("tab", { name: "Crear cuenta" }).click();
    const suffix = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const userAEmail = `e2e-ana-${suffix}@roadtob2.test`;
    const userAPassword = "AnaSecureKey!2026";

    await page.locator("#signup-name").fill("Ana Sofía Morales");
    await page.locator("#signup-email").fill(userAEmail);
    await page.locator("#signup-password").fill(userAPassword);
    await page.locator('label:has(input[name="targetScore"][value="4.2"])').click();
    await page.getByRole("button", { name: "Crear cuenta y comenzar Bootcamp" }).click();

    await expect(page.getByRole("heading", { name: "Panel Estratégico Road to B2" })).toBeVisible({
      timeout: 20_000,
    });
    await expect(page.getByText(/Hola,\s*Ana Sofía Morales/)).toBeVisible();
    await expect(page.getByText(/Meta Personal B2 >= 4\.2 \/ 6\.0/)).toBeVisible();

    // 3. Modificar progreso, perfil personal y guardar Gemini API Key cifrada con AES-GCM
    await page.getByLabel("Estado de dominio del Día 1", { exact: true }).selectOption("mastered");
    await expect(page.getByText("1 / 15")).toBeVisible();

    await page.getByRole("button", { name: "Ajustes y Respaldo" }).click();
    const settingsDialog = page.locator("dialog[open]");
    await expect(settingsDialog).toBeVisible();

    await settingsDialog.getByLabel(/Nombre visible/).fill("Ana Sofía B2");
    await settingsDialog
      .getByLabel(/Objetivo académico o profesional/)
      .fill("Beca Posgrado Internacional");
    await settingsDialog.getByLabel(/Fecha estimada de tu examen iTEP/).fill("2026-12-15");
    await settingsDialog.getByRole("button", { name: "Guardar perfil" }).click();
    await expect(
      settingsDialog.getByText("Perfil personal actualizado y sincronizado en tu cuenta."),
    ).toBeVisible();

    const sampleGeminiKey = "AIzaSyTestEncryptedKeyForAna00012345";
    await settingsDialog.getByLabel("Clave personal de Google AI Studio").fill(sampleGeminiKey);
    await settingsDialog.getByRole("button", { name: "Guardar clave" }).click();
    await expect(settingsDialog.getByText("Cifrada y activa (AES-GCM)")).toBeVisible();

    // Verificar que la clave NUNCA existe en texto plano en localStorage
    const dumpedLocalStorage = await page.evaluate(() => JSON.stringify(window.localStorage));
    expect(dumpedLocalStorage).not.toContain(sampleGeminiKey);

    await settingsDialog.getByRole("button", { name: "Cerrar ajustes" }).click();
    await expect(page.getByText(/Hola,\s*Ana Sofía B2/)).toBeVisible();
    await expect(page.getByText(/Objetivo: Beca Posgrado Internacional/)).toBeVisible();

    // 4. Cerrar sesión de Ana y registrar Usuario B en el MISMO navegador -> cero contaminación
    await page.getByRole("button", { name: "Cerrar sesión" }).click();
    await expect(
      page.getByRole("heading", {
        name: /Pasa de B1 a B2 en el examen iTEP Academic-Plus/i,
      }),
    ).toBeVisible();

    const userBEmail = `e2e-carlos-${suffix}@roadtob2.test`;
    await page.getByRole("link", { name: "Crear cuenta gratis" }).click();
    await page.locator("#signup-name").fill("Carlos Méndez");
    await page.locator("#signup-email").fill(userBEmail);
    await page.locator("#signup-password").fill("CarlosKey!2026");
    await page.getByRole("button", { name: "Crear cuenta y comenzar Bootcamp" }).click();

    await expect(page.getByRole("heading", { name: "Panel Estratégico Road to B2" })).toBeVisible({
      timeout: 20_000,
    });
    await expect(page.getByText(/Hola,\s*Carlos Méndez/)).toBeVisible();
    await expect(page.getByText("0 / 15")).toBeVisible();

    await page.getByRole("button", { name: "Ajustes y Respaldo" }).click();
    const carlosDialog = page.locator("dialog[open]");
    await expect(carlosDialog.getByText("Sin configurar")).toBeVisible();
    await carlosDialog.getByRole("button", { name: "Cerrar ajustes" }).click();

    // 5. Nuevo contexto aislado (simulando otro dispositivo sin localStorage) iniciando sesión como Ana
    const secondDeviceContext = await browser.newContext();
    const secondDevicePage = await secondDeviceContext.newPage();
    const secondGuardian = attachStrictBrowserGuardian(secondDevicePage);

    await secondDevicePage.goto("http://127.0.0.1:4173/#/login");
    await secondDevicePage.locator("#signin-email").fill(userAEmail);
    await secondDevicePage.locator("#signin-password").fill(userAPassword);
    await secondDevicePage.getByRole("button", { name: "Iniciar sesión" }).click();

    await expect(
      secondDevicePage.getByRole("heading", { name: "Panel Estratégico Road to B2" }),
    ).toBeVisible({ timeout: 20_000 });
    await expect(secondDevicePage.getByText(/Hola,\s*Ana Sofía B2/)).toBeVisible();
    await expect(secondDevicePage.getByText(/Objetivo: Beca Posgrado Internacional/)).toBeVisible();
    await expect(secondDevicePage.getByText("1 / 15")).toBeVisible();

    await secondDevicePage.getByRole("button", { name: "Ajustes y Respaldo" }).click();
    const anaSecondDeviceDialog = secondDevicePage.locator("dialog[open]");
    await expect(anaSecondDeviceDialog.getByText("Cifrada y activa (AES-GCM)")).toBeVisible();
    await expect(
      anaSecondDeviceDialog.getByLabel("Clave personal de Google AI Studio"),
    ).toHaveValue(sampleGeminiKey);

    secondGuardian.assertClean();
    await secondDeviceContext.close();
    guardian.assertClean();
  });
});
