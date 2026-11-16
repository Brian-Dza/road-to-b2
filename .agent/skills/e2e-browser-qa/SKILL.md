---
name: e2e-browser-qa
description: >-
  Checklist y protocolo de verificación automatizada E2E en navegador real con Playwright
  para validar el flujo de diagnóstico A1-B1, el avance en los días 1 al 15 del roadmap B2,
  la reproducción única de audios .mp3, temporizadores de Writing/Speaking/Simulacro y
  la persistencia en localStorage. Activa esta skill en la Fase 5 o al escribir/ejecutar tests E2E.
---

# Verificación Automatizada en Navegador Real (Playwright E2E QA)

Toda entrega funcional debe verificarse de extremo a extremo sobre un navegador Chromium real mediante `@playwright/test` contra el servidor compilado (`vite preview`) o de desarrollo.

## 1. Configuración Obligatoria de Playwright (`playwright.config.ts`)
- Configura Chromium con banderas de dispositivos multimedia simulados para poder probar `MediaRecorder` en **Speaking** sin bloqueos de permisos del sistema operativo:
  ```ts
  launchOptions: {
    args: [
      "--use-fake-ui-for-media-stream",
      "--use-fake-device-for-media-stream",
    ],
  }
  ```
- Otorga permisos `["microphone", "clipboard-read", "clipboard-write"]` en el contexto de pruebas.
- Registra listeners en cada test para **fallar inmediatamente** ante cualquier `page.on("pageerror")` o `console.error` inesperado (incluyendo errores 404 de archivos `.mp3`).

## 2. Checklist Obligatorio de Escenarios E2E

### Escenario 1: Flujo de Cimientos y Diagnóstico (`A1`–`B1`)
1. Navegar al apartado secundario **Cimientos (A1–B1)**.
2. Iniciar y responder el Test Diagnóstico (o filtro rápido de validación) seleccionando respuestas correctas e incorrectas deliberadas.
3. Verificar que se muestra la explicación pedagógica en español (`explanationEs`) tanto de la opción elegida como de la respuesta correcta, y que se listan las cápsulas recomendadas según los fallos.
4. Abrir un módulo de repaso `A1`–`B1`, completar su micro-verificación y marcarlo como `Dominado`, comprobando que el indicador visual se actualiza.

### Escenario 2: Avance en los Días 1 al 15 del Roadmap Principal (`B2`)
1. Verificar en el **Dashboard Principal** que se renderizan los **15 días** completos organizados estratégicamente, con etiqueta `B2`, tiempo estimado (>120 min) y selector/indicador de estado (`Pendiente`, `En repaso`, `Dominado`).
2. Entrar al **Día 1** y verificar las 5 pestañas/bloques de habilidades iTEP:
   - **Grammar:** Responder reactivos Part 1 (hueco) y Part 2 (segmentos subrayados `[A]`–`[D]`) y verificar retroalimentación.
   - **Listening:** Verificar que el elemento `<audio>` apunta a un archivo `/audio/*.mp3` existente con respuesta HTTP `200`, iniciar reproducción en modo examen y confirmar que tras finalizar queda bloqueado (`1/1 reproducción consumida`) hasta entregar las respuestas.
   - **Reading:** Verificar renderizado del pasaje académico con marcadores `[A] [B] [C] [D]` y selección de respuesta.
   - **Writing:** Verificar que el `<textarea>` tiene `spellcheck="false"`, que el cronómetro descuenta segundos en tiempo real, que el contador de palabras calcula con exactitud el texto ingresado y que el botón **"Copiar para evaluar con IA"** copia al portapapeles el prompt estructurado con la rúbrica B2.
   - **Speaking:** Iniciar tarea, verificar transición del temporizador de preparación a grabación (`MediaRecorder` activo con stream simulado) y despliegue de la rúbrica de autoevaluación B2.
3. Navegar al **Día 8**, **Día 14** y **Día 15**, y cambiar estados de dominio en múltiples días comprobando el recálculo de progreso global.

### Escenario 3: Simulacro Cronometrado Oficial (80 min)
1. Abrir la vista de **Simulacro Cronometrado**, iniciar el Simulacro #1 o #2.
2. Verificar que el temporizador de la sección activa está corriendo, que no se revelan explicaciones durante el examen activo y que permite avanzar ordenadamente entre secciones hasta generar el reporte de puntaje estimado `0.0–6.0`.

### Escenario 4: Persistencia Tras Recarga y Respaldo JSON
1. Con estados cambiados (`En repaso`, `Dominado`), borrador de Writing guardado y diagnóstico realizado, ejecutar `await page.reload()`.
2. Confirmar que el 100% del estado persiste intacto desde `localStorage`.
3. Ejecutar la exportación del archivo `.json` de respaldo, limpiar el progreso desde la UI y re-importar el `.json` descargado verificando la restauración exacta.
