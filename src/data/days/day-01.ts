import type { RoadmapDay } from "../../schemas/curriculum.schema.ts";

export const day01: RoadmapDay = {
  dayNumber: 1,
  sprintNumber: 1,
  cefrLevel: "B2",
  title: "Complex Clause Architecture & Academic Inference",
  subtitleEs:
    "Arquitectura de cláusulas complejas (relativas, participiales reducidas y nominales) e inferencia académica",
  b2FocusSummaryEs:
    "El salto real de B1 a B2 en iTEP Academic-Plus comienza al dominar cómo el inglés académico comprime información: cláusulas relativas con preposición adelantada ('by which', 'upon which'), cláusulas participiales reducidas ('conducted over a decade') y cláusulas nominales con 'what', 'whether' y 'whatever'. Reconocer y producir estas estructuras multiplica tu velocidad en Grammar, evita perder el hilo en lecturas densas de 450 palabras y eleva de inmediato tu rango sintáctico en Writing y Speaking.",
  estimatedMinutes: 140,
  isMockExamDay: false,
  sections: {
    // =========================================================================
    // 1. GRAMMAR (25 min study / 8 min official pace for 10 items)
    // =========================================================================
    grammar: {
      skill: "grammar",
      cefrLevel: "B2",
      title: "Complex Relatives, Reduced Participles & Nominal Clauses",
      estimatedMinutes: 25,
      timeLimitSeconds: 480,
      focusSummaryEs:
        "Identifica la función sintáctica exacta del conector dentro de su propia cláusula antes de elegir: verifica si falta sujeto u objeto ('what' vs. 'that'), si el verbo exige preposición ('by which', 'upon which'), o si el sujeto principal ejecuta ('-ing') o recibe ('-ed') la acción de una cláusula reducida.",
      questions: [
        {
          part: "part1_fill_blank",
          id: "d01-gram-p1-q01",
          cefrLevel: "B2",
          grammarTopic: "Preposition + Relative Pronoun in Formal Register",
          sentenceWithBlank:
            "Neuroscientists have recently mapped the cellular mechanism _____ prolonged sleep deprivation impairs short-term memory consolidation.",
          options: [
            {
              id: "A",
              text: "which",
              explanationEs:
                "Incorrecto: la cláusula subordinada ya posee sujeto ('prolonged sleep deprivation') y objeto directo ('short-term memory consolidation'); 'which' solo dejaría a 'mechanism' sin vínculo preposicional de medio.",
            },
            {
              id: "B",
              text: "in that",
              explanationEs:
                "Incorrecto: 'in that' es una conjunción explicativa ('en la medida en que'), no una estructura relativa capaz de modificar al sustantivo 'mechanism'.",
            },
            {
              id: "C",
              text: "by which",
              explanationEs:
                "Correcto: 'impairs ... by this mechanism' exige la preposición instrumental 'by', que en registro académico formal se antepone al pronombre relativo 'which' ('the mechanism by which').",
            },
            {
              id: "D",
              text: "by that",
              explanationEs:
                "Incorrecto: en inglés estándar el pronombre relativo 'that' jamás puede ir precedido directamente por una preposición.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Si la cláusula relativa que sigue al espacio ya tiene sujeto y objeto completos, busca 'preposición + which' según el sustantivo antecedente ('mechanism by which', 'extent to which').",
        },
        {
          part: "part1_fill_blank",
          id: "d01-gram-p1-q02",
          cefrLevel: "B2",
          grammarTopic: "Reduced Passive Relative Clauses",
          sentenceWithBlank:
            "Longitudinal studies _____ over the past decade indicate that bilingualism delays the onset of age-related cognitive decline.",
          options: [
            {
              id: "A",
              text: "conducted",
              explanationEs:
                "Correcto: cláusula relativa pasiva reducida ('[which have been] conducted') que modifica a 'Longitudinal studies' sin duplicar el verbo principal conjugado 'indicate'.",
            },
            {
              id: "B",
              text: "conducting",
              explanationEs:
                "Incorrecto: el participio activo '-ing' implicaría que los estudios se realizan a sí mismos, cuando en realidad son ejecutados por investigadores.",
            },
            {
              id: "C",
              text: "were conducted",
              explanationEs:
                "Incorrecto: introduce un verbo finito sin pronombre relativo ('which'), provocando un choque de dos verbos principales ('were conducted ... indicate') para un mismo sujeto.",
            },
            {
              id: "D",
              text: "having conducting",
              explanationEs:
                "Incorrecto: construcción morfológicamente inválida ('having' exige participio pasado) y además activa en lugar de pasiva ('having been conducted').",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Localiza primero el verbo principal de la oración ('indicate'): si no hay pronombre relativo ('which/that'), el modificador intermedio debe reducirse a participio ('-ed' pasivo o '-ing' activo).",
        },
        {
          part: "part1_fill_blank",
          id: "d01-gram-p1-q03",
          cefrLevel: "B2",
          grammarTopic: "Nominal Clauses in Subject Position (Whether vs. If)",
          sentenceWithBlank:
            "_____ the municipal council will approve the proposed congestion tax depends largely on next month's environmental impact report.",
          options: [
            {
              id: "A",
              text: "If",
              explanationEs:
                "Incorrecto: aunque 'if' puede introducir cláusulas nominales de objeto tras verbos como 'ask', es agramatical al encabezar una cláusula nominal en posición de sujeto inicial ante 'depends'.",
            },
            {
              id: "B",
              text: "What",
              explanationEs:
                "Incorrecto: 'what' debe ocupar un hueco argumental (sujeto u objeto) dentro de su cláusula, pero 'the municipal council will approve the proposed congestion tax' ya está sintácticamente completa.",
            },
            {
              id: "C",
              text: "That what",
              explanationEs:
                "Incorrecto: secuencia redundante e inexistente en inglés académico como conector de cláusula nominal.",
            },
            {
              id: "D",
              text: "Whether",
              explanationEs:
                "Correcto: 'Whether' encabeza legítimamente una cláusula nominal en función de sujeto singular del verbo 'depends' y expresa la disyuntiva abierta sobre la aprobación.",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Al inicio absoluto de oración funcionando como sujeto de un verbo ('... depends on'), usa siempre 'Whether' (si hay incertidumbre) o 'That' (si es un hecho), nunca 'If'.",
        },
        {
          part: "part1_fill_blank",
          id: "d01-gram-p1-q04",
          cefrLevel: "B2",
          grammarTopic: "Fused Nominal Relative Clauses (What vs. That)",
          sentenceWithBlank:
            "Early ethnographic records often reflected _____ colonial administrators assumed about indigenous governance rather than empirical observation.",
          options: [
            {
              id: "A",
              text: "that",
              explanationEs:
                "Incorrecto: el verbo transitivo 'assumed' carece de objeto directo dentro de su cláusula ('assumed [something] about...'), hueco que la conjunción 'that' no puede llenar.",
            },
            {
              id: "B",
              text: "what",
              explanationEs:
                "Correcto: relativo nominal fusionado ('aquello que / lo que'), que actúa simultáneamente como objeto de 'reflected' y como objeto directo interno de 'assumed'.",
            },
            {
              id: "C",
              text: "which",
              explanationEs:
                "Incorrecto: 'which' relativo requiere un sustantivo antecedente previo explícito, ausente detrás del verbo 'reflected'.",
            },
            {
              id: "D",
              text: "whatever that",
              explanationEs:
                "Incorrecto: los relativos compuestos en '-ever' ('whatever', 'whoever') nunca van seguidos por 'that'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Aplica la prueba de doble función: sin sustantivo antecedente + verbo subordinado incompleto ('assumed [?]') = 'what'; cláusula subordinada completa = 'that'.",
        },
        {
          part: "part1_fill_blank",
          id: "d01-gram-p1-q05",
          cefrLevel: "B2",
          grammarTopic: "Partitive Non-Defining Relative Clauses (of which / of whom)",
          sentenceWithBlank:
            "The archaeological survey cataloged forty-two ceramic vessels, nearly half _____ retained traces of ancient olive oil residue.",
          options: [
            {
              id: "A",
              text: "of them",
              explanationEs:
                "Incorrecto: trampa máxima en iTEP; al no haber punto y coma ni conjunción ('and'), usar el pronombre personal 'them' produce un 'comma splice' entre dos verbos finitos ('cataloged' y 'retained').",
            },
            {
              id: "B",
              text: "of whom",
              explanationEs:
                "Incorrecto: 'whom' solo puede remitir a antecedentes humanos, pero el antecedente 'ceramic vessels' es inanimado.",
            },
            {
              id: "C",
              text: "of which",
              explanationEs:
                "Correcto: estructura relativa partitiva no definitoria ('nearly half of which') que subordina gramaticalmente el verbo 'retained' al antecedente inanimado 'vessels' tras coma.",
            },
            {
              id: "D",
              text: "of that",
              explanationEs:
                "Incorrecto: 'that' no puede emplearse tras la preposición 'of' ni dentro de cláusulas no definitorias tras coma.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Tras una coma sin conjunción ('and/but'), si aparece un cuantificador ('many', 'most', 'half', 'none') seguido de verbo conjugado, exige 'of which' (cosas) u 'of whom' (personas), jamás 'of them'.",
        },
        {
          part: "part2_error_identification",
          id: "d01-gram-p2-q06",
          cefrLevel: "B2",
          grammarTopic: "Dangling / Misaligned Voice in Participial Clauses",
          sentenceWithMarkedSegments:
            "[A]{Analyzing under ultraviolet light}, the archival parchment [B]{revealed} marginalia [C]{that had remained} invisible to historians [D]{for centuries}.",
          correctedSegment: "Analyzed under ultraviolet light",
          options: [
            {
              id: "A",
              text: "Analyzing under ultraviolet light",
              explanationEs:
                "Incorrecto (contiene el error): el sujeto de la cláusula principal es 'the archival parchment'; usar el participio activo 'Analyzing' atribuye al pergamino la acción de analizar. Debe ser pasivo: 'Analyzed under ultraviolet light'.",
            },
            {
              id: "B",
              text: "revealed",
              explanationEs:
                "Correcto en la oración: verbo transitivo en Past Simple que funciona legítimamente con 'parchment' ('el pergamino dejó ver anotaciones marginales').",
            },
            {
              id: "C",
              text: "that had remained",
              explanationEs:
                "Correcto en la oración: cláusula relativa definitoria en Past Perfect que marca anterioridad respecto al descubrimiento pasado ('revealed').",
            },
            {
              id: "D",
              text: "for centuries",
              explanationEs:
                "Correcto en la oración: complemento preposicional de duración plenamente compatible con el aspecto perfecto 'had remained'.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Siempre que una oración empiece con una frase participial seguida de coma, comprueba que el sustantivo inmediatamente posterior a la coma sea el sujeto lógico de ese participio.",
        },
        {
          part: "part2_error_identification",
          id: "d01-gram-p2-q07",
          cefrLevel: "B2",
          grammarTopic: "Non-Defining Relative Pronouns After Comma",
          sentenceWithMarkedSegments:
            "The paleoclimatology team [A]{synthesized} ice-core data [B]{collected from} three Antarctic stations, [C]{that confirmed} an abrupt warming episode [D]{twelve thousand years ago}.",
          correctedSegment: "which confirmed",
          options: [
            {
              id: "A",
              text: "synthesized",
              explanationEs:
                "Correcto en la oración: verbo principal en Past Simple concordando con un evento científico concluido.",
            },
            {
              id: "B",
              text: "collected from",
              explanationEs:
                "Correcto en la oración: cláusula relativa pasiva reducida ('[which had been] collected from') que modifica con precisión a 'ice-core data'.",
            },
            {
              id: "C",
              text: "that confirmed",
              explanationEs:
                "Incorrecto (contiene el error): tras una coma en una cláusula relativa explicativa o de comentario oracional, el pronombre 'that' está prohibido en inglés formal; debe emplearse 'which confirmed'.",
            },
            {
              id: "D",
              text: "twelve thousand years ago",
              explanationEs:
                "Correcto en la oración: marcador temporal de pasado definido coherente con 'an abrupt warming episode' y 'confirmed'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "En iTEP Part 2, la secuencia ', that + verbo' introduciendo una relativa explicativa es un error inmediato; tras coma relativa se exige ', which' o ', who'.",
        },
        {
          part: "part2_error_identification",
          id: "d01-gram-p2-q08",
          cefrLevel: "B2",
          grammarTopic: "Declarative Word Order in Embedded Nominal Clauses",
          sentenceWithMarkedSegments:
            "Evolutionary biologists [A]{have long debated} [B]{how did insular reptiles adapt} so rapidly [C]{to arid microclimates} [D]{following volcanic eruptions}.",
          correctedSegment: "how insular reptiles adapted",
          options: [
            {
              id: "A",
              text: "have long debated",
              explanationEs:
                "Correcto en la oración: Present Perfect con el adverbio 'long' intercalado tras el auxiliar para indicar un debate académico sostenido hasta hoy.",
            },
            {
              id: "B",
              text: "how did insular reptiles adapt",
              explanationEs:
                "Incorrecto (contiene el error): las cláusulas nominales incrustadas como objeto de 'debated' exigen orden declarativo ('sujeto + verbo conjugado': 'how insular reptiles adapted'), nunca inversión interrogativa con 'did'.",
            },
            {
              id: "C",
              text: "to arid microclimates",
              explanationEs:
                "Correcto en la oración: régimen preposicional exacto del verbo 'adapt' ('adapt to + sintagma nominal').",
            },
            {
              id: "D",
              text: "following volcanic eruptions",
              explanationEs:
                "Correcto en la oración: 'following' funciona en registro académico como preposición equivalente a 'after' ante un grupo nominal.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Cuando 'how', 'why', 'where' o 'what' van incrustados dentro de una afirmación (sin signo de interrogación), elimina cualquier inversión auxiliar ('do/does/did') y restaura el orden sujeto + verbo.",
        },
        {
          part: "part2_error_identification",
          id: "d01-gram-p2-q09",
          cefrLevel: "B2",
          grammarTopic: "Long-Distance Subject-Verb Agreement Across Intervening Clauses",
          sentenceWithMarkedSegments:
            "The policy recommendations [A]{outlined in} the commission's final report, [B]{whatever} critics [C]{might claim} about their cost, [D]{requires} immediate legislative action.",
          correctedSegment: "require",
          options: [
            {
              id: "A",
              text: "outlined in",
              explanationEs:
                "Correcto en la oración: participio pasado reducido que modifica apropiadamente a 'recommendations'.",
            },
            {
              id: "B",
              text: "whatever",
              explanationEs:
                "Correcto en la oración: relativo concesivo compuesto ('no importa qué') que actúa como objeto directo interno de 'might claim'.",
            },
            {
              id: "C",
              text: "might claim",
              explanationEs:
                "Correcto en la oración: locución verbal modal bien construida para expresar objeciones hipotéticas dentro del inciso concesivo.",
            },
            {
              id: "D",
              text: "requires",
              explanationEs:
                "Incorrecto (contiene el error): el núcleo del sujeto principal es plural ('recommendations'), no 'report' ni 'cost'; pese a las cláusulas intercaladas, el verbo principal debe ir en plural ('require').",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Tacha mentalmente tanto los participios reducidos como los incisos entre comas para conectar directamente el núcleo del sujeto ('recommendations') con el verbo principal ('require').",
        },
        {
          part: "part2_error_identification",
          id: "d01-gram-p2-q10",
          cefrLevel: "B2",
          grammarTopic: "Duplicated Preposition in Formal Relative Clauses",
          sentenceWithMarkedSegments:
            "The econometric model [A]{upon which} the central bank [B]{relies on} [C]{to forecast} quarterly inflation [D]{underestimated} recent supply-chain volatility.",
          correctedSegment: "relies",
          options: [
            {
              id: "A",
              text: "upon which",
              explanationEs:
                "Correcto en la oración: construcción relativa formal válida con preposición antepuesta para el verbo preposicional 'rely upon/on'.",
            },
            {
              id: "B",
              text: "relies on",
              explanationEs:
                "Incorrecto (contiene el error): dado que la preposición ya se adelantó en '[A]{upon which}', repetir 'on' detrás de 'relies' genera una duplicación preposicional agramatical ('*upon which ... relies on'). Debe ser 'relies'.",
            },
            {
              id: "C",
              text: "to forecast",
              explanationEs:
                "Correcto en la oración: infinitivo de finalidad ('para pronosticar') correctamente articulado.",
            },
            {
              id: "D",
              text: "underestimated",
              explanationEs:
                "Correcto en la oración: verbo finito de la cláusula matriz cuyo sujeto es 'The econometric model'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Si ves 'in which', 'to which', 'on which' o 'upon which', revisa el final de esa misma cláusula relativa para asegurarte de que no hayan repetido la preposición al final del verbo.",
        },
      ],
    },

    // =========================================================================
    // 2. LISTENING (35 min study / strict single-play simulation)
    // =========================================================================
    listening: {
      skill: "listening",
      cefrLevel: "B2",
      title: "Pragmatic Inference, Academic Advising & Attention Restoration Lecture",
      estimatedMinutes: 35,
      timeLimitSeconds: 900,
      focusSummaryEs:
        "Entrena la retención en una sola reproducción identificando giros adversativos ('actually', 'however', 'rather than') y cláusulas nominales de condición: en iTEP Listening la respuesta correcta suele parafrasear lo que implica la restricción mencionada tras un contraste.",
      items: [
        {
          part: "part1_short_dialogue",
          id: "d01-list-p1",
          title: "Reserve Desk Edition Discrepancy",
          cefrLevel: "B2",
          audio: {
            trackId: "day01-listening-p1",
            audioUrl: "/audio/day01-listening-p1.mp3",
            contextSetup:
              "A graduate student speaks with a librarian at the university course-reserve counter.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Excuse me, I'm looking for the urban econometrics reader that Professor Lin placed on two-hour reserve, but the copy on the shelf is the third edition.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Librarian",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Let me check our system. Ah—what Professor Lin requested last week was the fourth edition, which includes the updated municipal housing datasets, and our acquisitions desk only finished cataloging it twenty minutes ago.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "That explains why my problem-set page numbers didn't match at all.",
                pauseAfterMs: 400,
              },
              {
                speakerLabel: "Librarian",
                voice: "en-US-AndrewMultilingualNeural",
                text: "If you have your student ID handy, I can retrieve it from the sorting cart behind me right now.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d01-list-p1-q01",
              prompt: "What can be inferred from the conversation?",
              options: [
                {
                  id: "A",
                  text: "Professor Lin accidentally listed the wrong edition on the course syllabus.",
                  explanationEs:
                    "Incorrecto: el bibliotecario confirma que lo solicitado por la profesora fue efectivamente la cuarta edición, la cual coincide con las páginas de la tarea de la estudiante.",
                },
                {
                  id: "B",
                  text: "The newly cataloged edition had not yet been moved to the public reserve shelf.",
                  explanationEs:
                    "Correcto: el bibliotecario explica que adquisiciones terminó de catalogar la cuarta edición hace apenas veinte minutos y ofrece sacarla del carrito de clasificación ('sorting cart') detrás del mostrador.",
                },
                {
                  id: "C",
                  text: "Students are allowed to borrow course-reserve readers overnight with a valid ID.",
                  explanationEs:
                    "Incorrecto: al inicio la estudiante especifica que el libro está en préstamo restringido de dos horas ('two-hour reserve'), no nocturno.",
                },
                {
                  id: "D",
                  text: "The fourth edition omits the municipal housing datasets used in the problem set.",
                  explanationEs:
                    "Incorrecto: contradice directamente el audio, donde se afirma que la cuarta edición sí incluye ('which includes') los conjuntos de datos actualizados.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "En Part 1 presta atención a los detalles operativos del último turno ('retrieve it from the sorting cart'): revelan el estado físico real del objeto sin decirlo literalmente.",
        },
        {
          part: "part2_conversation",
          id: "d01-list-p2",
          title: "Undergraduate Research Fellowship Eligibility",
          cefrLevel: "B2",
          audio: {
            trackId: "day01-listening-p2",
            audioUrl: "/audio/day01-listening-p2.mp3",
            contextSetup:
              "An undergraduate environmental studies student meets with the director of undergraduate research regarding a summer fellowship application.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Hi Dr. Mercer. Thanks for fitting me in before Friday's deadline for the Summer Undergraduate Research Fellowship.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Advisor",
                voice: "en-US-GuyNeural",
                text: "Of course, Clara. I glanced over the draft proposal you uploaded this morning—the one examining heat-island mitigation along the river corridor with Dr. Vargas. Your literature review is remarkably thorough.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Thank you! What worried me, though, is the methodology section on the portal. My proposal relies heavily on spatial thermal mapping, and the fellowship rubric says applicants must have completed Geography 310, Geographic Information Systems, prior to June.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Advisor",
                voice: "en-US-GuyNeural",
                text: "Right, I noticed Geography 310 isn't on your transcript yet. Were you unable to enroll in it this spring?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "It conflicted with my required hydrology lab. Instead, Dr. Vargas arranged for me to take the graduate school's intensive two-week spatial analysis bootcamp in May, right after final exams end.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Advisor",
                voice: "en-US-GuyNeural",
                text: "Ah, that changes things. Our review committee flags applications automatically when a listed technical prerequisite is missing from the registrar feed, because reviewers don't see non-credit departmental bootcamps on standard transcripts.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Oh, I had no idea the bootcamp wouldn't appear there. Does that mean my application will be screened out before the faculty panel even reads it?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Advisor",
                voice: "en-US-GuyNeural",
                text: "Not if you document equivalency upfront. Ask Dr. Vargas to append a brief methodological readiness addendum to her mentorship letter specifying which software modules the May bootcamp covers and confirming you'll complete it before fieldwork begins in June.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "That's a huge relief. I'm meeting Dr. Vargas at three o'clock today to calibrate sensors anyway, so I'll bring the bootcamp syllabus and ask her to include that addendum before she submits her letter.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d01-list-p2-q01",
              prompt: "Why did the student schedule a meeting with Dr. Mercer?",
              options: [
                {
                  id: "A",
                  text: "To request an extension on Friday's fellowship application deadline",
                  explanationEs:
                    "Incorrecto: menciona la fecha límite del viernes solo para agradecer que la recibiera antes, nunca para pedir prórroga.",
                },
                {
                  id: "B",
                  text: "To resolve a concern about a technical course prerequisite for her summer proposal",
                  explanationEs:
                    "Correcto: Clara plantea explícitamente su inquietud ('What worried me, though...') porque su proyecto exige mapeo espacial y aún no ha cursado Geography 310.",
                },
                {
                  id: "C",
                  text: "To ask Dr. Mercer to replace Dr. Vargas as her faculty research mentor",
                  explanationEs:
                    "Incorrecto: Dr. Vargas sigue siendo su mentora activa; de hecho, se reunirá con ella esa misma tarde.",
                },
                {
                  id: "D",
                  text: "To appeal a scheduling conflict between Geography 310 and her hydrology lab",
                  explanationEs:
                    "Incorrecto: el choque de horario ocurrió al inscribirse en primavera y ya lo resolvió optando por el taller intensivo de mayo.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d01-list-p2-q02",
              prompt:
                "According to Dr. Mercer, why might the review committee flag Clara's application?",
              options: [
                {
                  id: "A",
                  text: "Her literature review on urban heat islands lacks recent empirical citations.",
                  explanationEs:
                    "Incorrecto: al contrario, Dr. Mercer elogia su revisión bibliográfica calificándola de 'remarkably thorough'.",
                },
                {
                  id: "B",
                  text: "Undergraduate students are not permitted to enroll in graduate-level workshops.",
                  explanationEs:
                    "Incorrecto: Dr. Vargas ya gestionó su ingreso al bootcamp de posgrado y Dr. Mercer lo acepta como preparación válida.",
                },
                {
                  id: "C",
                  text: "Non-credit departmental bootcamps do not appear on the official registrar transcript.",
                  explanationEs:
                    "Correcto: Dr. Mercer explica que el sistema marca automáticamente las solicitudes cuando falta el prerrequisito porque los talleres sin créditos no figuran en el historial del registro académico.",
                },
                {
                  id: "D",
                  text: "Fieldwork along the river corridor begins before the May bootcamp concludes.",
                  explanationEs:
                    "Incorrecto: el taller intensivo ocurre en mayo tras exámenes finales y el trabajo de campo inicia en junio.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d01-list-p2-q03",
              prompt: "What does Dr. Mercer recommend to ensure the proposal is evaluated fairly?",
              options: [
                {
                  id: "A",
                  text: "Removing spatial thermal mapping from the proposal's methodology section",
                  explanationEs:
                    "Incorrecto: nunca sugiere recortar la metodología del proyecto, sino acreditar formalmente su equivalencia técnica.",
                },
                {
                  id: "B",
                  text: "Having Dr. Vargas verify the bootcamp's software coverage in her mentorship letter",
                  explanationEs:
                    "Correcto: aconseja pedir a la Dra. Vargas un anexo breve en su carta de mentoría detallando los módulos de software del taller de mayo y confirmando su finalización antes de junio.",
                },
                {
                  id: "C",
                  text: "Registering for an online section of Geography 310 during the summer term",
                  explanationEs:
                    "Incorrecto: no se menciona ninguna sección en línea de Geography 310 durante la conversación.",
                },
                {
                  id: "D",
                  text: "Submitting the graduate bootcamp syllabus directly to the university registrar",
                  explanationEs:
                    "Incorrecto: la documentación debe integrarse en la carta de mentoría para el comité de becas, no enviarse a la oficina de registro.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d01-list-p2-q04",
              prompt: "What will Clara most likely do at three o'clock?",
              options: [
                {
                  id: "A",
                  text: "Bring the May bootcamp syllabus to her laboratory meeting with Dr. Vargas",
                  explanationEs:
                    "Correcto: en el turno final afirma que verá a la Dra. Vargas a las tres para calibrar sensores y llevará el temario del bootcamp para solicitarle el anexo.",
                },
                {
                  id: "B",
                  text: "Upload her final fellowship application before meeting with her hydrology group",
                  explanationEs:
                    "Incorrecto: necesita que la Dra. Vargas incorpore el anexo en su carta antes del cierre, no subir la solicitud sin respaldo.",
                },
                {
                  id: "C",
                  text: "Attend the opening orientation session of the spatial analysis bootcamp",
                  explanationEs:
                    "Incorrecto: el bootcamp tendrá lugar en mayo, al terminar los exámenes finales, no esa tarde.",
                },
                {
                  id: "D",
                  text: "Request an official paper transcript from the registrar's office",
                  explanationEs:
                    "Incorrecto: pedir un historial impreso no resolvería el problema, pues el taller sin créditos tampoco aparecería allí.",
                },
              ],
              correctOptionId: "A",
            },
          ],
          keyTakeawayEs:
            "En conversaciones de asesoría universitaria (Part 2), anota siempre tres puntos en 10 palabras: (1) obstáculo administrativo, (2) por qué ocurre en el sistema y (3) documento/acción exacta que lo destraba.",
        },
        {
          part: "part3_lecture",
          id: "d01-list-p3",
          title: "Environmental Psychology: Attention Restoration Theory & Biophilic Design",
          cefrLevel: "B2",
          audio: {
            trackId: "day01-listening-p3",
            audioUrl: "/audio/day01-listening-p3.mp3",
            contextSetup:
              "A university professor delivers a seminar lecture in an environmental psychology course.",
            turns: [
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Good morning, everyone. Today in our environmental psychology seminar, we're examining Attention Restoration Theory—specifically, the cognitive mechanism by which natural architecture counteracts mental exhaustion in dense urban settings.",
                pauseAfterMs: 700,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "When you navigate a crowded city boulevard, your prefrontal cortex relies on what psychologists call directed attention. Because traffic signals, digital advertisements, and pedestrian movement compete simultaneously for your awareness, your brain must actively inhibit irrelevant stimuli just to focus on a single task, such as reading a transit map.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Over several hours, that inhibitory effort depletes neural resources, resulting in directed attention fatigue—a state characterized by irritability, slower error detection, and impaired working memory. Notice that this fatigue doesn't stem from boredom; rather, it arises from constantly suppressing high-intensity distractions.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Natural environments, by contrast, engage an entirely different mode known as soft fascination. Gently shifting tree canopies, cloud formations, and natural water patterns exhibit repeating geometric structures called fractals, which hold our involuntary attention effortlessly without demanding active filtering from the prefrontal cortex.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Recent neuroimaging studies conducted on university students confirm this distinction. Participants who walked for forty minutes through an arboretum showed reduced blood flow in the subgenual prefrontal cortex and scored twenty percent higher on subsequent proofreading tasks than peers assigned to walk along an equally quiet asphalt service road.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "However, commercial designers sometimes misapply these findings. Simply placing a few potted ferns inside a windowless office cubicle rarely produces measurable restoration. What genuinely replenishes cognitive capacity is visual access to dynamic daylight, layered spatial depth, and authentic fractal complexity—principles that hospital and library architects are now integrating into structural layouts.",
                pauseAfterMs: 650,
              },
            ],
          },
          questions: [
            {
              id: "d01-list-p3-q01",
              prompt: "What is the main focus of the professor's lecture?",
              options: [
                {
                  id: "A",
                  text: "How exposure to fractal natural environments allows depleted cognitive control mechanisms to recover",
                  explanationEs:
                    "Correcto: sintetiza el eje completo de la clase: cómo el esfuerzo inhibitorio urbano agota la atención dirigida y cómo la fascinación suave de patrones fractales auténticos restaura dicha capacidad.",
                },
                {
                  id: "B",
                  text: "Why municipal governments should ban digital advertisements near university campuses",
                  explanationEs:
                    "Incorrecto: los anuncios digitales se mencionan solo como ejemplo de estímulos urbanos competitivos, nunca como propuesta regulatoria.",
                },
                {
                  id: "C",
                  text: "How aerobic exercise improves long-term cardiovascular health more effectively outdoors than indoors",
                  explanationEs:
                    "Incorrecto: el experimento de la caminata evalúa flujo prefrontal y rendimiento cognitivo en corrección de textos, no salud cardiovascular.",
                },
                {
                  id: "D",
                  text: "Why hospital architects are replacing glass facades with enclosed artificial lighting systems",
                  explanationEs:
                    "Incorrecto: contradice el cierre de la clase, que destaca el acceso visual a luz natural dinámica ('dynamic daylight').",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d01-list-p3-q02",
              prompt:
                "According to the lecture, what directly causes directed attention fatigue in urban environments?",
              options: [
                {
                  id: "A",
                  text: "Prolonged monotony from performing repetitive clerical tasks indoors",
                  explanationEs:
                    "Incorrecto: la profesora aclara explícitamente que esta fatiga no proviene del aburrimiento ('doesn't stem from boredom').",
                },
                {
                  id: "B",
                  text: "The continuous neural effort required to block out competing environmental distractions",
                  explanationEs:
                    "Correcto: explica que la corteza prefrontal agota sus recursos al inhibir activamente estímulos irrelevantes de alta intensidad ('suppressing high-intensity distractions').",
                },
                {
                  id: "C",
                  text: "Visual strain produced by observing complex fractal geometry in modern skyscrapers",
                  explanationEs:
                    "Incorrecto: los fractales se asocian con entornos naturales restauradores que no exigen filtrado activo, no con fatiga visual urbana.",
                },
                {
                  id: "D",
                  text: "Ambient traffic noise exceeding safe auditory thresholds along city boulevards",
                  explanationEs:
                    "Incorrecto: el estudio comparativo incluso utilizó una vía asfaltada igualmente silenciosa ('equally quiet asphalt service road'), descartando el ruido como única causa.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d01-list-p3-q03",
              prompt:
                "How does 'soft fascination' differ from the cognitive mode used on a crowded city street?",
              options: [
                {
                  id: "A",
                  text: "It eliminates all external visual input so the brain enters a sleep-like state.",
                  explanationEs:
                    "Incorrecto: la naturaleza sí presenta movimiento visual (copas de árboles, nubes, agua), pero capta la atención involuntaria suavemente.",
                },
                {
                  id: "B",
                  text: "It engages involuntary attention gently without taxing prefrontal filtering mechanisms.",
                  explanationEs:
                    "Correcto: las formas fractales sostienen la atención involuntaria sin esfuerzo ('effortlessly without demanding active filtering from the prefrontal cortex'), permitiendo que la atención dirigida descanse.",
                },
                {
                  id: "C",
                  text: "It trains the subgenual prefrontal cortex to process multiple tasks simultaneously.",
                  explanationEs:
                    "Incorrecto: la multitarea no es el mecanismo descrito; en cambio, se reduce la hiperactividad prefrontal y se recupera la memoria de trabajo posterior.",
                },
                {
                  id: "D",
                  text: "It requires observers to consciously analyze geometric ratios in surrounding foliage.",
                  explanationEs:
                    "Incorrecto: analizar conscientemente exigiría atención dirigida; la fascinación suave es involuntaria.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d01-list-p3-q04",
              prompt:
                "Why did the neuroimaging study compare an arboretum walk with a walk along a quiet asphalt service road?",
              options: [
                {
                  id: "A",
                  text: "To isolate the restorative effect of natural visual features from physical walking and low noise",
                  explanationEs:
                    "Correcto: al igualar tanto los cuarenta minutos de caminata como el silencio ('equally quiet'), el diseño experimental demuestra que la mejora del 20 % proviene de la estructura natural del arboreto y no solo del ejercicio o la ausencia de ruido.",
                },
                {
                  id: "B",
                  text: "To prove that walking speed increases when pedestrians avoid traffic intersections",
                  explanationEs:
                    "Incorrecto: la velocidad de marcha no fue la variable evaluada; se midieron neuroimagen y detección de errores ('proofreading tasks').",
                },
                {
                  id: "C",
                  text: "To show that university campuses lack sufficient green spaces for undergraduates",
                  explanationEs:
                    "Incorrecto: el propósito mencionado es confirmar experimentalmente la distinción teórica entre entornos restauradores y no restauradores.",
                },
                {
                  id: "D",
                  text: "To test whether proofreading accuracy declines immediately after mild physical exertion",
                  explanationEs:
                    "Incorrecto: el grupo del arboreto obtuvo un rendimiento 20 % superior tras caminar, demostrando restauración cognitiva.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d01-list-p3-q05",
              prompt:
                "What is the professor's attitude toward placing potted plants in windowless office cubicles?",
              options: [
                {
                  id: "A",
                  text: "Enthusiastic, because any indoor greenery triggers a twenty-percent productivity gain",
                  explanationEs:
                    "Incorrecto: califica esa práctica de aplicación errónea ('misapply these findings') que rara vez genera restauración medible.",
                },
                {
                  id: "B",
                  text: "Skeptical, because isolated indoor plants lack daylight dynamics and spatial depth",
                  explanationEs:
                    "Correcto: advierte con escepticismo analítico que unos helechos en maceta sin ventanas no sustituyen la luz natural dinámica, la profundidad espacial en capas ni la complejidad fractal auténtica.",
                },
                {
                  id: "C",
                  text: "Indifferent, because Attention Restoration Theory applies only to wilderness parks",
                  explanationEs:
                    "Incorrecto: señala que arquitectos de hospitales y bibliotecas sí están integrando estos principios con éxito en diseños estructurales.",
                },
                {
                  id: "D",
                  text: "Concerned that indoor ferns distract employees more than digital billboards do",
                  explanationEs:
                    "Incorrecto: no afirma que las plantas distraigan más que las vallas luminosas, sino que resultan insuficientes para restaurar la capacidad cognitiva.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d01-list-p3-q06",
              prompt: "How does the professor organize the lecture?",
              options: [
                {
                  id: "A",
                  text: "By tracing a chronological biography of the psychologists who coined fractal geometry",
                  explanationEs:
                    "Incorrecto: no presenta una biografía cronológica de autores, sino un análisis funcional y experimental.",
                },
                {
                  id: "B",
                  text: "By contrasting two attentional mechanisms, citing experimental evidence, and qualifying practical design applications",
                  explanationEs:
                    "Correcto: primero contrasta 'directed attention' frente a 'soft fascination', luego respalda la teoría con el estudio de neuroimagen en estudiantes y cierra matizando cómo aplicarla rigurosamente en arquitectura.",
                },
                {
                  id: "C",
                  text: "By presenting three competing theories of working memory and refuting each one",
                  explanationEs:
                    "Incorrecto: expone y respalda una sola teoría central (Attention Restoration Theory), sin refutar tres modelos rivales.",
                },
                {
                  id: "D",
                  text: "By comparing architectural building codes across several European capitals",
                  explanationEs:
                    "Incorrecto: no se comparan normativas municipales europeas en ningún momento de la exposición.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "En clases magistrales (Part 3), presta máxima atención al giro final ('However, commercial designers sometimes misapply...'): casi siempre alimenta una pregunta de actitud del profesor o de inferencia aplicada.",
        },
      ],
    },

    // =========================================================================
    // 3. READING (35 min study / 20 min official pace for Part 1 + Part 2)
    // =========================================================================
    reading: {
      skill: "reading",
      cefrLevel: "B2",
      title: "Editorial Automation & Subterranean Forest Ecology",
      estimatedMinutes: 35,
      timeLimitSeconds: 1200,
      focusSummaryEs:
        "Descompón oraciones largas aislando la cláusula matriz (sujeto + verbo principal) de los modificadores participiales iniciales ('Designed to...', 'Often linking...') y verifica los referentes cohesivos antes de insertar oraciones en `[A][B][C][D]`.",
      passages: [
        {
          part: "part1_intermediate",
          id: "d01-read-p1",
          title: "Algorithmic Screening in Scholarly Peer Review",
          cefrLevel: "B2",
          topicDomain: "Research Methodology & Science Policy",
          paragraphs: [
            "Over the past five years, major scientific journals have increasingly deployed automated screening software before forwarding submitted manuscripts to human peer reviewers. Originally developed to curb rising retraction rates across biomedical and social sciences, these algorithmic tools scan incoming papers for statistical inconsistencies, duplicated microscopy images, and omitted ethics disclosures, processing within minutes what editorial assistants once verified manually over several weeks. Proponents of editorial automation contend that delegating routine compliance checks allows external scholars to concentrate on evaluating theoretical originality and experimental design rather than clerical accuracy.",
            "Nevertheless, research methodologists caution against equating computational speed with epistemic rigor. Algorithms trained predominantly on historical publication archives frequently penalize unconventional analytical frameworks while overlooking subtle flaws in causal inference or sample selection. In interdisciplinary fields where qualitative and quantitative methods converge, automated classifiers often misinterpret exploratory hypotheses as incomplete reporting. Furthermore, smaller university laboratories lacking dedicated data-curation specialists may experience disproportionate desk rejections simply because their supplementary files deviate from rigid formatting templates, regardless of the underlying empirical strength of their findings.",
            "To address these vulnerabilities, leading academic publishing consortia have recently endorsed a hybrid governance model in which software outputs function strictly as advisory diagnostics rather than automated rejection triggers. Under these guidelines, human associate editors evaluate every flagged anomaly alongside the authors' methodological rationale before reaching a decision. Ultimately, whether algorithmic screening strengthens scientific reproducibility will depend not on replacing scholarly judgment, but on contextualizing machine-generated alerts within each discipline's investigative norms.",
          ],
          questions: [
            {
              id: "d01-read-p1-q01",
              questionType: "main_idea",
              prompt: "What is the primary purpose of the passage?",
              options: [
                {
                  id: "A",
                  text: "To argue that automated software has completely eliminated fraudulent imagery in scientific publishing",
                  explanationEs:
                    "Incorrecto: generalización extrema; el texto indica que estas herramientas buscan reducir retractaciones, pero presentan limitaciones serias y no han eliminado el problema por completo.",
                },
                {
                  id: "B",
                  text: "To examine both the efficiency gains and methodological risks of automated manuscript screening, advocating human-guided oversight",
                  explanationEs:
                    "Correcto: recoge equilibradamente los tres párrafos: ventajas operativas (P1), sesgos metodológicos e inequidades (P2) y el modelo híbrido bajo criterio editorial humano (P3).",
                },
                {
                  id: "C",
                  text: "To demonstrate why interdisciplinary studies are less reproducible than traditional quantitative experiments",
                  explanationEs:
                    "Incorrecto: el párrafo 2 critica que el software malinterprete estudios interdisciplinarios, no que dichos estudios sean menos reproducibles.",
                },
                {
                  id: "D",
                  text: "To persuade university laboratories to hire full-time data-curation specialists before submitting articles",
                  explanationEs:
                    "Incorrecto: la falta de personal especializado se menciona para ilustrar un sesgo injusto de rechazo automático, no como recomendación laboral.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d01-read-p1-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'clerical' in paragraph 1 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "administrative and procedural",
                  explanationEs:
                    "Correcto: en contraste con 'theoretical originality' y en referencia a verificar plantillas, divulgaciones éticas y consistencia rutinaria ('routine compliance checks'), 'clerical' significa administrativo o de verificación documental.",
                },
                {
                  id: "B",
                  text: "mathematically speculative",
                  explanationEs:
                    "Incorrecto: la especulación teórica corresponde precisamente al polo opuesto que los revisores humanos deben evaluar.",
                },
                {
                  id: "C",
                  text: "ideologically biased",
                  explanationEs:
                    "Incorrecto: 'clerical accuracy' alude a exactitud formal y administrativa, sin ninguna connotación ideológica o religiosa en este contexto académico.",
                },
                {
                  id: "D",
                  text: "confidential and anonymous",
                  explanationEs:
                    "Incorrecto: el pasaje no aborda el anonimato del arbitraje por pares, sino la automatización de controles rutinarios.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d01-read-p1-q03",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 2 about smaller university laboratories?",
              options: [
                {
                  id: "A",
                  text: "They submit higher rates of duplicated microscopy images than larger institutions.",
                  explanationEs:
                    "Incorrecto: el texto jamás vincula a los laboratorios pequeños con fraude o duplicación de imágenes.",
                },
                {
                  id: "B",
                  text: "They avoid conducting interdisciplinary research because journals prohibit qualitative methods.",
                  explanationEs:
                    "Incorrecto: mezcla indebidamente dos oraciones distintas del párrafo 2 sin sustento textual.",
                },
                {
                  id: "C",
                  text: "Valuable research from these laboratories could be dismissed prematurely if journals rely on unmoderated software filters.",
                  explanationEs:
                    "Correcto: dado que sufren rechazos desproporcionados solo por apartarse de plantillas rígidas de formato 'regardless of the empirical strength of their findings', un filtro automático sin revisión humana descartaría hallazgos sólidos.",
                },
                {
                  id: "D",
                  text: "Their researchers prefer algorithmic screening over slower evaluations by human referees.",
                  explanationEs:
                    "Incorrecto: ellos son precisamente los perjudicados por el rechazo de escritorio ('desk rejections') derivado del formato.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d01-read-p1-q04",
              questionType: "synthesis",
              prompt:
                "According to paragraph 3, how does the hybrid governance model resolve the concerns raised by methodologists?",
              options: [
                {
                  id: "A",
                  text: "By restricting algorithmic screening exclusively to supplementary spreadsheets",
                  explanationEs:
                    "Incorrecto: no limita el software a hojas de cálculo, sino que redefine el valor de sus reportes como diagnósticos consultivos.",
                },
                {
                  id: "B",
                  text: "By requiring associate editors to weigh software alerts against the authors' own methodological justification",
                  explanationEs:
                    "Correcto: el párrafo 3 establece que los resultados algorítmicos sirven únicamente como diagnóstico orientativo y que editores humanos evalúan cada alerta junto con la justificación metodológica de los autores.",
                },
                {
                  id: "C",
                  text: "By retraining screening algorithms every five years using qualitative research archives",
                  explanationEs:
                    "Incorrecto: no se menciona ningún ciclo quinquenal de reentrenamiento algorítmico en el párrafo 3.",
                },
                {
                  id: "D",
                  text: "By allowing authors to opt out of compliance checks when submitting exploratory studies",
                  explanationEs:
                    "Incorrecto: los manuscritos siguen pasando por el diagnóstico, pero ninguna alerta dispara un rechazo automático sin juicio editorial.",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
        {
          part: "part2_academic",
          id: "d01-read-p2",
          title: "Mycorrhizal Networks and Resource Allocation in Temperate Forests",
          cefrLevel: "B2",
          topicDomain: "Forest Ecology & Evolutionary Biology",
          paragraphs: [
            "Beneath the litter layer of temperate and boreal forests lies an intricate web of ectomycorrhizal fungi whose microscopic filaments, known as hyphae, envelop the fine root tips of neighboring trees. Because fungal hyphae are far narrower than plant roots, they penetrate microscopic mineral soil pores to extract bound phosphorus and nitrogen, which they exchange for photosynthetically fixed carbon supplied by their host trees. Often linking dozens of individual trees across species boundaries, these shared subterranean structures—commonly termed common mycorrhizal networks—have prompted ecologists to reconsider whether mature forest stands operate solely through direct competition for light and water or also through underground resource redistribution.",
            "During the late twentieth century, pioneering isotope-tracing studies popularized a compelling cooperative model frequently described in public discourse as the 'wood-wide web.' Field researchers injected mature canopy trees with labeled carbon isotopes and subsequently detected those isotopes near shaded understory seedlings growing several meters away. Interpreting these measurements through a lens of community stability, early accounts proposed that established canopy trees actively recognize stressed saplings and channel surplus carbohydrates through fungal conduits to sustain forest regeneration. Although this altruistic narrative resonated widely outside academia, evolutionary biologists soon questioned how natural selection could maintain costly interspecific generosity without inviting exploitation by non-contributing competitors.",
            "Subsequent field experiments grounded in biological market theory have substantially revised that cooperative interpretation. [A] Rather than functioning as passive pipelines controlled by maternal trees, mycorrhizal fungi behave as autonomous metabolic traders that invest mineral nutrients preferentially in hosts capable of delivering the highest carbohydrate return. [B] Rigorous trials employing dual-isotope labeling alongside root-exclusion meshes indicate that net tree-to-tree carbon transfer becomes statistically negligible once passive diffusion through soil water and direct root grafts is excluded. [C] Even in instances where labeled carbon crosses into the shared fungal matrix, high-resolution imaging reveals that most of it remains sequestered within fungal cell walls to fuel hyphal expansion instead of entering the vascular tissues of adjacent saplings. [D]",
            "Yet dismantling anthropomorphic claims of tree altruism in no way diminishes the structural or ecological significance of common mycorrhizal networks. Even when governed by reciprocal self-interest between plant and fungal partners, persistent hyphal matrices bind mineral particles into stable soil aggregates, enhance moisture retention during prolonged summer droughts, and enable newly germinated seedlings to tap into established nutrient-foraging infrastructure without paying the full energetic cost of building one independently. What contemporary forest ecology demonstrates, therefore, is that subterranean connectivity shapes post-disturbance species succession not through benevolent cooperation, but through dynamic biochemical negotiations in which fungal intermediaries hold decisive ecological leverage.",
          ],
          questions: [
            {
              id: "d01-read-p2-q01",
              questionType: "detail",
              prompt:
                "According to paragraph 1, why are ectomycorrhizal fungi able to supply host trees with phosphorus and nitrogen?",
              options: [
                {
                  id: "A",
                  text: "Fungal hyphae convert atmospheric nitrogen directly into photosynthetic carbohydrates.",
                  explanationEs:
                    "Incorrecto: los carbohidratos fotosintéticos los aportan los árboles anfitriones ('supplied by their host trees'), no los hongos.",
                },
                {
                  id: "B",
                  text: "Their microscopic filaments can access tiny mineral soil pores that coarser tree roots cannot reach.",
                  explanationEs:
                    "Correcto: el párrafo 1 explica que, al ser mucho más finas que las raíces vegetales, las hifas penetran poros minerales microscópicos para extraer fósforo y nitrógeno adheridos.",
                },
                {
                  id: "C",
                  text: "They decompose fallen canopy leaves above the forest litter layer during summer droughts.",
                  explanationEs:
                    "Incorrecto: la red opera debajo de la capa de hojarasca ('Beneath the litter layer') extrayendo nutrientes de poros minerales.",
                },
                {
                  id: "D",
                  text: "They fuse the vascular systems of different tree species into a single root graft.",
                  explanationEs:
                    "Incorrecto: los injertos radiculares directos ('direct root grafts') se distinguen en el párrafo 3 como una vía física aparte del hongo.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d01-read-p2-q02",
              questionType: "rhetorical_purpose",
              prompt:
                "Why does the author mention 'evolutionary biologists' at the end of paragraph 2?",
              options: [
                {
                  id: "A",
                  text: "To credit them with coining the popular metaphor of the 'wood-wide web'",
                  explanationEs:
                    "Incorrecto: esa metáfora proviene del discurso divulgativo derivado de los primeros estudios de isótopos, frente al cual los biólogos evolutivos mostraron escepticismo.",
                },
                {
                  id: "B",
                  text: "To introduce the theoretical objection that prompted stricter experimental tests of tree altruism",
                  explanationEs:
                    "Correcto: plantea la paradoja evolutiva (cómo sostener generosidad costosa entre especies sin ser explotado) que da pie en el párrafo 3 a los experimentos rigurosos de teoría de mercados biológicos.",
                },
                {
                  id: "C",
                  text: "To prove that mature canopy trees only share carbon with genetically identical offspring",
                  explanationEs:
                    "Incorrecto: los biólogos cuestionaron la narrativa altruista interespecífica, y el párrafo 3 muestra que la transferencia neta entre árboles es casi nula.",
                },
                {
                  id: "D",
                  text: "To argue that isotope-tracing technology cannot be used reliably in boreal soils",
                  explanationEs:
                    "Incorrecto: en el párrafo 3 sí se emplea marcaje isotópico doble ('dual-isotope labeling') de forma rigurosa con mallas de exclusión.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d01-read-p2-q03",
              questionType: "vocabulary_in_context",
              prompt: "The word 'sequestered' in paragraph 3 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "retained and isolated",
                  explanationEs:
                    "Correcto: en 'remains sequestered within fungal cell walls ... instead of entering the vascular tissues of adjacent saplings', significa retenido o confinado dentro de las paredes celulares del hongo.",
                },
                {
                  id: "B",
                  text: "chemically neutralized",
                  explanationEs:
                    "Incorrecto: el carbono no se neutraliza químicamente; el texto indica que se utiliza activamente para impulsar la expansión hifal ('to fuel hyphal expansion').",
                },
                {
                  id: "C",
                  text: "rapidly circulated",
                  explanationEs:
                    "Incorrecto: es exactamente el antónimo contextual, pues el carbono NO pasa al sistema vascular de los árboles vecinos.",
                },
                {
                  id: "D",
                  text: "accidentally contaminated",
                  explanationEs:
                    "Incorrecto: no existe referencia alguna a contaminación accidental en el tejido fúngico.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d01-read-p2-q04",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 3 about the pioneering isotope-tracing studies described in paragraph 2?",
              options: [
                {
                  id: "A",
                  text: "They studied tropical rainforests rather than temperate or boreal ecosystems.",
                  explanationEs:
                    "Incorrecto: todo el artículo se enmarca en bosques templados y boreales sin aludir a selvas tropicales.",
                },
                {
                  id: "B",
                  text: "They likely lacked sufficient physical controls to distinguish fungal carbon retention or soil diffusion from active tree-to-seedling transfer.",
                  explanationEs:
                    "Correcto: dado que los ensayos posteriores con mallas de exclusión e imagen de alta resolución demostraron que la transferencia se vuelve insignificante al controlar difusión en agua, injertos y retención fúngica, se infiere que los estudios pioneros no aislaron esas variables.",
                },
                {
                  id: "C",
                  text: "They deliberately fabricated isotope measurements to attract media coverage.",
                  explanationEs:
                    "Incorrecto: los primeros investigadores sí detectaron isótopos cerca de las plántulas ('detected those isotopes near shaded understory seedlings'); el error estuvo en la interpretación causal, no en fraude.",
                },
                {
                  id: "D",
                  text: "They underestimated the amount of phosphorus that seedlings donate back to canopy trees.",
                  explanationEs:
                    "Incorrecto: el fósforo lo extraen los hongos del suelo mineral, no lo donan las plántulas.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d01-read-p2-q05",
              questionType: "sentence_insertion",
              prompt:
                "Look at the four squares [A], [B], [C], and [D] in paragraph 3. Where would the following sentence best fit?",
              sentenceToInsert:
                "In other words, detecting labeled carbon outside a donor tree does not prove that a neighboring seedling actually absorbs and utilizes it.",
              options: [
                {
                  id: "A",
                  text: "[A]",
                  explanationEs:
                    "Incorrecto: antes de `[A]` aún no se ha mencionado el carbono marcado ('labeled carbon') ni su detección fuera del árbol donante en este párrafo.",
                },
                {
                  id: "B",
                  text: "[B]",
                  explanationEs:
                    "Incorrecto: la oración anterior a `[B]` describe a los hongos como comerciantes metabólicos de nutrientes minerales, por lo que 'In other words' no reformularía la retención de carbono marcado.",
                },
                {
                  id: "C",
                  text: "[C]",
                  explanationEs:
                    "Incorrecto: aunque antes de `[C]` se habla de difusión pasiva e injertos, todavía no se explica que el carbono que sí entra al hongo queda retenido sin ser absorbido por los tejidos vasculares de la plántula.",
                },
                {
                  id: "D",
                  text: "[D]",
                  explanationEs:
                    "Correcto: 'In other words' reformula con precisión la oración inmediatamente previa a `[D]`, la cual revela que el carbono marcado permanece confinado en las paredes celulares fúngicas en vez de ingresar al tejido vascular de las plántulas vecinas.",
                },
              ],
              correctOptionId: "D",
            },
            {
              id: "d01-read-p2-q06",
              questionType: "synthesis",
              prompt:
                "Which statement best synthesizes the author's overall view of common mycorrhizal networks?",
              options: [
                {
                  id: "A",
                  text: "Because tree-to-tree carbon sharing is negligible, mycorrhizal networks play only a minor role in forest regeneration.",
                  explanationEs:
                    "Incorrecto: contradice frontalmente el párrafo 4, que subraya su enorme importancia estructural, hídrica y sucesional pese a no basarse en altruismo.",
                },
                {
                  id: "B",
                  text: "Although driven by fungal self-interest rather than maternal tree altruism, mycorrhizal networks remain vital to soil stability, drought resilience, and seedling establishment.",
                  explanationEs:
                    "Correcto: integra la revisión crítica del párrafo 3 (mercado biológico e interés fúngico) con la síntesis ecológica del párrafo 4 (agregación del suelo, retención de agua e infraestructura para plántulas).",
                },
                {
                  id: "C",
                  text: "Mycorrhizal fungi act as benevolent intermediaries whenever summer droughts threaten canopy biodiversity.",
                  explanationEs:
                    "Incorrecto: el cierre rechaza expresamente la cooperación benevolente ('not through benevolent cooperation').",
                },
                {
                  id: "D",
                  text: "Future forest succession depends on replacing competitive ectomycorrhizal fungi with cooperative strains.",
                  explanationEs:
                    "Incorrecto: el pasaje describe procesos ecológicos naturales, no ingeniería de cepas fúngicas.",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
      ],
    },

    // =========================================================================
    // 4. WRITING (30 min study / 25 min official timer without spellcheck)
    // =========================================================================
    writing: {
      skill: "writing",
      cefrLevel: "B2",
      title: "Academic Schedule Coordination & STEM Curriculum Argumentation",
      estimatedMinutes: 30,
      timeLimitSeconds: 1500,
      focusSummaryEs:
        "Aplica la arquitectura de cláusulas del Día 1 en tu producción escrita: incluye al menos una cláusula nominal con 'whether' en la nota corta (Part 1) y combina una cláusula relativa con preposición ('in which') más una concesión formal en el ensayo argumentativo (Part 2).",
      tasks: [
        {
          part: "part1_note",
          id: "d01-writ-p1",
          cefrLevel: "B2",
          title: "Rescheduling an Honors Colloquium Presentation",
          prompt:
            "You are scheduled to deliver a ten-minute research presentation at the Undergraduate Honors Colloquium on Tuesday, November 12. However, an unavoidable academic conflict has arisen. Write a formal note to Dr. Reynolds, the Colloquium Coordinator, in which you: (1) explain the specific academic conflict, (2) propose switching presentation dates with a classmate who has already agreed, and (3) ask whether any administrative step is required to update the program.",
          timeLimitSeconds: 300,
          minWords: 50,
          maxWords: 75,
          strategyGuideEs:
            "Distribuye tus 5 minutos con precisión: 45s para planificar los 3 puntos obligatorios, 3m30s para redactar 3–4 oraciones densas y 45s para cazar errores de concordancia u ortografía. Usa una cláusula relativa ('who presents on...') y cierra con una pregunta indirecta con 'whether' (sin inversión interrogativa).",
          recommendedConnectors: ["regarding", "because", "who is scheduled for", "whether"],
          b2RubricChecklistEs: [
            "Cumple los 3 requerimientos del prompt (conflicto académico concreto, compañero con fecha exacta de intercambio y consulta administrativa).",
            "Mantiene el conteo estricto entre 50 y 75 palabras con registro universitario formal ('Dear Dr. Reynolds,' / 'Sincerely,').",
            "Integra al menos una cláusula compleja (relativa con 'who/which' o nominal indirecta con 'whether' en orden declarativo).",
            "Cero errores de ortografía básica, puntuación o concordancia sujeto-verbo sin corrector automático.",
          ],
          modelAnswerB2:
            "Dear Dr. Reynolds, I am writing regarding my colloquium presentation on Tuesday, November 12. Because my marine ecology professor just scheduled a mandatory coastal sampling lab that afternoon, I will be off campus until evening. Maya Lin, who presents on Thursday, November 14, has agreed to swap slots with me. Could you confirm whether this exchange is approved and whether I should resubmit my abstract? Sincerely, Daniel Ortiz",
        },
        {
          part: "part2_essay",
          id: "d01-writ-p2",
          cefrLevel: "B2",
          title: "Humanities Seminars in Undergraduate STEM Degrees",
          prompt:
            "Some university administrators argue that undergraduate students majoring in science, technology, engineering, and mathematics (STEM) should only be required to take technical courses directly related to their specialization so they can enter the workforce sooner. Others maintain that mandatory humanities and social science seminars remain indispensable for STEM graduates. Which position do you support? Provide specific reasons and concrete examples to justify your stance.",
          timeLimitSeconds: 1200,
          minWords: 175,
          maxWords: 225,
          strategyGuideEs:
            "Estructura tu ensayo en 4 párrafos compactos dentro de los 20 minutos (3 min esquema -> 14 min redacción -> 3 min auditoría gramatical): P1 Introducción con postura inequívoca; P2 Concesión breve + primer argumento central con ejemplo concreto; P3 Segundo argumento enfocado en comunicación/ética aplicada; P4 Síntesis final usando una cláusula nominal con 'What...'.",
          recommendedConnectors: [
            "Admittedly,",
            "Nevertheless,",
            "in which",
            "Furthermore,",
            "What ultimately distinguishes",
          ],
          b2RubricChecklistEs: [
            "Tesis explícita y sostenida desde el primer párrafo respondiendo directamente al dilema curricular.",
            "Rango de 175 a 225 palabras con división clara en párrafos e ideas desarrolladas mediante ejemplos universitarios/profesionales concretos.",
            "Incluye una concesión breve ('Admittedly, ... / While accelerating graduation...') refutada con un conector adversativo B2.",
            "Demuestra variedad sintáctica B2: al menos una cláusula participial reducida, una relativa con preposición ('in which') y una cláusula nominal ('What...' / 'whether...').",
            "Precisión léxica académica (evita verbos vagos como 'get', 'do', 'make things better') y control ortográfico limpio.",
          ],
          modelAnswerB2:
            "Universities face growing pressure to streamline technical degrees, yet eliminating humanities and social science requirements from STEM curricula would be a shortsighted policy mistake. Mandatory interdisciplinary seminars remain indispensable because modern scientific innovation operates within complex ethical, legal, and communicative frameworks.\n\nAdmittedly, removing non-technical coursework could shorten undergraduate graduation timelines by a semester. Nevertheless, technical proficiency alone rarely prepares graduates for the societal consequences of what they engineer. Computer scientists designing predictive healthcare algorithms, for instance, must examine historical socioeconomic biases; otherwise, automated diagnostic models risk reinforcing systemic disparities in patient care. Seminars in ethics and public policy equip engineers with the analytical lenses by which such blind spots are identified before deployment.\n\nFurthermore, leadership in scientific industries depends heavily on persuasive communication across disciplines. Whether a biomedical researcher secures competitive grant funding or convinces municipal officials to adopt clean-water infrastructure hinges on translating dense empirical data for non-specialist audiences—a skill cultivated systematically in writing-intensive humanities seminars.\n\nUltimately, what distinguishes visionary scientific leaders from narrow technicians is the capacity to evaluate how technological tools reshape human institutions. Preserving core humanities coursework ensures that STEM graduates enter the workforce as reflective citizens rather than isolated specialists.",
        },
      ],
    },

    // =========================================================================
    // 5. SPEAKING (15 min study / chained prep + recording official timers)
    // =========================================================================
    speaking: {
      skill: "speaking",
      cefrLevel: "B2",
      title: "Rapid Skill Acquisition & Open-Book Assessment Debate",
      estimatedMinutes: 15,
      timeLimitSeconds: 300,
      focusSummaryEs:
        "En iTEP Speaking tienes 30s/45s de preparación: no escribas oraciones completas. Anota solo 3 bloques léxicos y arranca el segundo 1 con una tesis directa seguida de una estructura B2 ('What initially challenged me was...', 'While critics worry that...').",
      tasks: [
        {
          part: "part1_personal",
          id: "d01-speak-p1",
          cefrLevel: "B2",
          title: "Mastering an Unfamiliar Academic or Technical Skill",
          prompt:
            "Describe a demanding academic project or professional assignment that required you to learn an unfamiliar tool or methodology under a tight deadline. Explain how you structured your learning process and what result you achieved.",
          prepSeconds: 30,
          recordSeconds: 45,
          structureTemplate: [
            "0–10s (Context & Thesis): Name the exact project/tool and why the deadline was critical.",
            "10–28s (Action Strategy): Explain the two concrete steps by which you mastered the skill efficiently.",
            "28–45s (Measurable Outcome): State the concrete result and what that experience taught you.",
          ],
          keyPhrasesB2: [
            "What initially seemed daunting was...",
            "Rather than attempting to memorize every feature, I focused on...",
            "Having tested the workflow on a small dataset...",
            "Ultimately, that experience proved that...",
          ],
          selfRubricChecklistEs: [
            "Inicié en los primeros 3 segundos respondiendo directamente con un proyecto académico o profesional específico (sin muletillas largas).",
            "Expliqué tanto el método de aprendizaje como el resultado concreto antes de que el cronómetro de 45s llegara a cero.",
            "Utilicé al menos una cláusula compleja del Día 1 ('What initially...', cláusula participial o relativa).",
            "Mantuve ritmo fluido y entonación clara sin pausas de silencio mayores a 2 segundos.",
          ],
          modelTranscriptB2:
            "Last year, during an undergraduate economics seminar, my research partner withdrew unexpectedly two days before our panel presentation, leaving me responsible for running regression diagnostics in R—a statistical language that I had never used before. What initially seemed daunting was debugging syntax errors under time pressure. Rather than watching hours of general tutorials, I isolated the three specific commands required for our municipal employment dataset and consulted the university statistics lab's annotated code templates. Having verified the output against our manual calculations, I delivered the presentation on schedule and earned high marks for methodological clarity. Ultimately, that experience taught me how to break unfamiliar technical tools into manageable functional steps.",
        },
        {
          part: "part2_opinion",
          id: "d01-speak-p2",
          cefrLevel: "B2",
          title: "Open-Book Analytical Exams vs. Closed-Book Finals",
          prompt:
            "Many university departments are replacing traditional closed-book final examinations with timed open-book analytical assessments in which students may consult academic notes and primary sources. Supporters argue that open-book assessments evaluate higher-order synthesis rather than short-term memorization, whereas critics warn that students will neglect foundational knowledge if reference materials are permitted. Which assessment model do you believe better measures university-level mastery, and why?",
          audioPrompt: {
            trackId: "day01-speaking-p2",
            audioUrl: "/audio/day01-speaking-p2.mp3",
            contextSetup: "Official iTEP Speaking Part 2 dual-perspective academic prompt.",
            turns: [
              {
                speakerLabel: "Examiner",
                voice: "en-GB-RyanNeural",
                text: "Many university departments are replacing traditional closed-book final examinations with timed open-book analytical assessments in which students may consult academic notes and primary sources. Supporters argue that open-book assessments evaluate higher-order synthesis rather than short-term memorization, whereas critics warn that students will neglect foundational knowledge if reference materials are permitted. Which assessment model do you believe better measures university-level mastery, and why?",
                pauseAfterMs: 600,
              },
            ],
          },
          prepSeconds: 45,
          recordSeconds: 60,
          structureTemplate: [
            "0–12s (Clear Stance): State unequivocally which exam format you endorse and your overarching reason.",
            "12–30s (Concession + Rebuttal): Acknowledge the opposing concern briefly, then explain why strict time limits neutralize it.",
            "30–50s (Real-World Alignment + Example): Illustrate how professionals/researchers synthesize sources in practice.",
            "50–60s (Crisp Conclusion): Close with a decisive summary sentence before the 60s cutoff.",
          ],
          keyPhrasesB2: [
            "I firmly believe that timed open-book assessments provide a far more accurate measure of...",
            "While critics understandably worry that..., in practice...",
            "In professional environments in which researchers analyze unfamiliar problems...",
            "Therefore, evaluating how students apply evidence outweighs testing rote recall.",
          ],
          selfRubricChecklistEs: [
            "Tomé una postura clara desde la primera oración en lugar de quedar indeciso entre ambos formatos.",
            "Incluí una concesión breve a la postura contraria ('While critics worry that...') y la refuté con lógica académica.",
            "Desarrollé un ejemplo universitario o profesional concreto manteniendo un ritmo constante durante los 60 segundos.",
            "Incorporé conectores y cláusulas complejas B2 ('in which', 'whether', 'rather than') con pronunciación inteligible.",
            "Cerré con una oración conclusiva completa antes del corte automático del minuto.",
          ],
          modelTranscriptB2:
            "I firmly believe that timed open-book analytical assessments provide a far more accurate measure of university-level mastery than traditional closed-book exams. While critics understandably worry that students might neglect core concepts if notes are allowed, strict time limits quickly expose anyone who hasn't internalized foundational principles. If a student spends twenty minutes searching a textbook for basic definitions, they simply won't finish analyzing the case study. Moreover, open-book exams mirror the professional environments in which scientists, attorneys, and engineers actually operate. In a research laboratory or policy institute, what matters is not reciting formulas from memory, but evaluating conflicting evidence and constructing a coherent argument under deadline pressure. By designing questions that demand synthesis across multiple sources, universities reward deep conceptual understanding rather than temporary cramming that students forget a week after finals.",
        },
      ],
    },
  },
  dailyChecklistEs: [
    "Completé los 10 reactivos de Grammar en menos de 8 minutos verificando preposición + relativo ('by which', 'upon which') y cláusulas reducidas.",
    "Resolví las 3 partes de Listening respetando estrictamente una sola reproducción sin pausar el audio.",
    "Leí los 2 pasajes de Reading en menos de 20 minutos acertando la inserción cohesiva en `[D]`.",
    "Redacté la nota (50–75 palabras) y el ensayo (175–225 palabras) sin corrector ortográfico e integré cláusulas con 'whether' y 'what'.",
    "Grabé y auto-escuché mis respuestas de Speaking Part 1 (45s) y Part 2 (60s) comprobando estructura y cierre a tiempo.",
  ],
};
