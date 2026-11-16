import type { RoadmapDay } from "../../schemas/curriculum.schema.ts";

export const day13: RoadmapDay = {
  dayNumber: 13,
  sprintNumber: 3,
  cefrLevel: "B2",
  title: "Subtle Part-2 Error-Identification Traps & Abstract Topic Improvisation",
  subtitleEs:
    "Trampas sutiles de identificación de errores en Grammar Part 2 e improvisación académica sobre dilemas abstractos",
  b2FocusSummaryEs:
    "En la recta final hacia el puntaje B2 sólido (≥ 3.8), los puntos decisivos se ganan donde los candidatos B1 altos suelen confiarse: los errores camuflados de Grammar Part 2 (comparaciones ilógicas sin 'those of', preposición 'to' seguida de infinitivo, correlativos rotos y verbos intransitivos en voz pasiva) y los temas filosóficos o de política científica en Writing y Speaking donde no basta narrar anécdotas cotidianas.",
  estimatedMinutes: 135,
  isMockExamDay: false,
  sections: {
    // =========================================================================
    // 1. GRAMMAR (25 min study / 3 part1_fill_blank + 7 part2_error_identification)
    // =========================================================================
    grammar: {
      skill: "grammar",
      cefrLevel: "B2",
      title: "Deceptive Part-2 Underlined Traps: Comparisons, Prepositional 'To' & Voice",
      estimatedMinutes: 25,
      timeLimitSeconds: 360,
      focusSummaryEs:
        "En iTEP Grammar Part 2 el oído suele pasar por alto errores que 'suenan fluidos'. Audita sistemáticamente cuatro puntos en cada oración: (1) qué dos sustantivos exactos se comparan, (2) si 'to' es marca de infinitivo o preposición que exige '-ing', (3) si el núcleo del sujeto es singular ('the number') o plural ('a number'), y (4) si el verbo admite voz pasiva.",
      questions: [
        {
          part: "part1_fill_blank",
          id: "d13-gram-p1-q01",
          cefrLevel: "B2",
          grammarTopic:
            "Demonstrative Pronouns in Parallel Academic Comparisons (that of / those of)",
          sentenceWithBlank:
            "Spectroscopic readings obtained from high-altitude desert observatories exhibit far less water-vapor distortion than _____ collected by sea-level telescopes.",
          options: [
            {
              id: "A",
              text: "that",
              explanationEs:
                "Incorrecto: el antecedente comparado es plural ('Spectroscopic readings'), por lo que el pronombre demostrativo singular 'that' rompe la concordancia de número.",
            },
            {
              id: "B",
              text: "those",
              explanationEs:
                "Correcto: 'those' sustituye con exactitud al sustantivo plural 'readings' ('those [readings] collected by sea-level telescopes'), evitando repetir el núcleo nominal y manteniendo una comparación lógica.",
            },
            {
              id: "C",
              text: "which",
              explanationEs:
                "Incorrecto: tras la conjunción comparativa 'than' se requiere un pronombre demostrativo que actúe como núcleo nominal ('those'), no un pronombre relativo sin antecedente inmediato.",
            },
            {
              id: "D",
              text: "them",
              explanationEs:
                "Incorrecto: los pronombres personales de objeto ('them') no admiten modificación restrictiva directa mediante participios pasados ('*them collected by...').",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Tras 'than' o 'as', comprueba si el sustantivo comparado en la primera mitad es incontable/singular ('that') o plural contable ('those') antes de un modificador ('of...' / participio).",
        },
        {
          part: "part1_fill_blank",
          id: "d13-gram-p1-q02",
          cefrLevel: "B2",
          grammarTopic: "Adjective + Prepositional 'To' Requiring Gerund Complement",
          sentenceWithBlank:
            "Urban hydrologists contend that replacing impermeable asphalt plazas with vegetated bioswales is far more conducive _____ peak stormwater runoff than widening concrete culverts alone.",
          options: [
            {
              id: "A",
              text: "to curb",
              explanationEs:
                "Incorrecto: trampa clásica para hispanohablantes; en la locución 'conducive to', la palabra 'to' es una preposición plena y no puede ir seguida de un infinitivo ('curb').",
            },
            {
              id: "B",
              text: "for curbing",
              explanationEs:
                "Incorrecto: aunque emplea gerundio, viola el régimen preposicional fijo del adjetivo académico 'conducive', que exige exclusivamente 'to' y nunca 'for'.",
            },
            {
              id: "C",
              text: "to curbing",
              explanationEs:
                "Correcto: respeta tanto la colocación léxica obligatoria ('conducive to') como la regla sintáctica de que toda preposición rige un sustantivo o gerundio ('curbing').",
            },
            {
              id: "D",
              text: "that curbs",
              explanationEs:
                "Incorrecto: 'conducive' no selecciona cláusulas subordinadas con 'that' como complemento.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Memoriza el bloque de expresiones académicas donde 'to' es preposición + '-ing': 'conducive to', 'attributable to', 'committed to', 'object to' y 'accustomed to'.",
        },
        {
          part: "part1_fill_blank",
          id: "d13-gram-p1-q03",
          cefrLevel: "B2",
          grammarTopic: "Subject-Auxiliary Inversion After Restrictive Frequency Adverbs",
          sentenceWithBlank:
            "Seldom _____ planetary scientists encountered an extrasolar atmosphere whose carbon-to-oxygen ratio deviates so sharply from solar-system models.",
          options: [
            {
              id: "A",
              text: "have",
              explanationEs:
                "Correcto: el adverbio restrictivo 'Seldom' en posición inicial obliga a invertir el auxiliar ante el sujeto plural ('Seldom have planetary scientists') y concuerda con el participio 'encountered'.",
            },
            {
              id: "B",
              text: "did",
              explanationEs:
                "Incorrecto: el auxiliar 'did' exige verbo en forma base ('encounter'), pero la oración presenta el participio pasado 'encountered'.",
            },
            {
              id: "C",
              text: "are",
              explanationEs:
                "Incorrecto: 'are ... encountered' formaría una voz pasiva incompatible con el objeto directo activo 'an extrasolar atmosphere' que sigue al verbo.",
            },
            {
              id: "D",
              text: "they have",
              explanationEs:
                "Incorrecto: duplica el sujeto ('they' + 'planetary scientists') y además omite la inversión obligatoria tras 'Seldom'.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Cuando 'Seldom', 'Rarely', 'Little' o 'Never before' abren la oración, verifica dos cosas a la vez: orden invertido (auxiliar + sujeto) y morfología del verbo principal (base vs. participio).",
        },
        {
          part: "part2_error_identification",
          id: "d13-gram-p2-q04",
          cefrLevel: "B2",
          grammarTopic: "Illogical Comparison (Comparing Property Directly to Entity)",
          sentenceWithMarkedSegments:
            "Recent orbital surveys indicate that [A]{the thermal conductivity} of lunar regolith [B]{differs markedly} from [C]{terrestrial volcanic basalt} [D]{under vacuum conditions}.",
          correctedSegment: "that of terrestrial volcanic basalt",
          options: [
            {
              id: "A",
              text: "the thermal conductivity",
              explanationEs:
                "Correcto en la oración: sintagma nominal definido bien construido que actúa como sujeto de la cláusula subordinada.",
            },
            {
              id: "B",
              text: "differs markedly",
              explanationEs:
                "Correcto en la oración: verbo singular 'differs' en concordancia con 'conductivity', modificado adecuadamente por el adverbio 'markedly' y seguido de su preposición 'from'.",
            },
            {
              id: "C",
              text: "terrestrial volcanic basalt",
              explanationEs:
                "Incorrecto (contiene el error): compara una propiedad física ('the thermal conductivity') directamente con una roca ('terrestrial volcanic basalt'). En registro académico debe compararse propiedad con propiedad mediante 'that of terrestrial volcanic basalt'.",
            },
            {
              id: "D",
              text: "under vacuum conditions",
              explanationEs:
                "Correcto en la oración: locución preposicional estándar en física experimental ('bajo condiciones de vacío').",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "En verbos y giros contrastivos ('differ from', 'exceed', 'resemble', 'compared with'), verifica que ambos lados designen la misma categoría ontológica; si no, falta 'that of' o 'those of'.",
        },
        {
          part: "part2_error_identification",
          id: "d13-gram-p2-q05",
          cefrLevel: "B2",
          grammarTopic: "Prepositional 'To' Falsely Paired with Bare Infinitive",
          sentenceWithMarkedSegments:
            "[A]{Objecting to allocate} emergency bond revenues [B]{toward experimental} tidal wetlands, several coastal municipalities [C]{redirected} the funds [D]{into conventional} seawall repairs.",
          correctedSegment: "Objecting to allocating",
          options: [
            {
              id: "A",
              text: "Objecting to allocate",
              explanationEs:
                "Incorrecto (contiene el error): aunque el participio activo 'Objecting' concuerda con 'municipalities', el verbo preposicional 'object to' exige gerundio nominal tras la preposición 'to', nunca infinitivo. Debe ser 'Objecting to allocating'.",
            },
            {
              id: "B",
              text: "toward experimental",
              explanationEs:
                "Correcto en la oración: la preposición direccional 'toward' seguida del adjetivo 'experimental' complementa con naturalidad la asignación de fondos.",
            },
            {
              id: "C",
              text: "redirected",
              explanationEs:
                "Correcto en la oración: verbo finito principal en Past Simple para narrar la decisión presupuestaria consumada.",
            },
            {
              id: "D",
              text: "into conventional",
              explanationEs:
                "Correcto en la oración: 'redirect [funds] into + sintagma nominal' es la construcción idiomática exacta.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "No te detengas al comprobar que un participio inicial no esté colgando: examina también el complemento interno que sigue a 'to' dentro de ese mismo segmento.",
        },
        {
          part: "part2_error_identification",
          id: "d13-gram-p2-q06",
          cefrLevel: "B2",
          grammarTopic: "Correlative Conjunction Contamination (both ... as well as)",
          sentenceWithMarkedSegments:
            "The bioethics panel commended the archival protocol both [A]{for safeguarding} sensitive clinical records [B]{as well as} [C]{for preserving} longitudinal [D]{demographic metadata}.",
          correctedSegment: "and",
          options: [
            {
              id: "A",
              text: "for safeguarding",
              explanationEs:
                "Correcto en la oración: primer miembro preposicional + gerundio tras 'commended ... for', perfectamente simétrico con '[C]{for preserving}'.",
            },
            {
              id: "B",
              text: "as well as",
              explanationEs:
                "Incorrecto (contiene el error): el correlativo 'both' exige de manera exclusiva la conjunción coordinante 'and' ('both X and Y'). Combinar 'both ... as well as' constituye una contaminación sintáctica penalizada sistemáticamente en iTEP.",
            },
            {
              id: "C",
              text: "for preserving",
              explanationEs:
                "Correcto en la oración: mantiene el paralelismo preposicional exacto ('for safeguarding ... and for preserving').",
            },
            {
              id: "D",
              text: "demographic metadata",
              explanationEs:
                "Correcto en la oración: adjetivo relacional + sustantivo técnico como objeto directo de 'preserving'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Verifica siempre las parejas correlativas cerradas: 'both ... and' (nunca 'as well as'), 'between ... and' (nunca 'to'), 'not only ... but also' y 'neither ... nor'.",
        },
        {
          part: "part2_error_identification",
          id: "d13-gram-p2-q07",
          cefrLevel: "B2",
          grammarTopic: "Subject-Verb Agreement Contrast: 'A number of' vs. 'The number of'",
          sentenceWithMarkedSegments:
            "Although [A]{a growing number} of metropolitan districts [B]{have adopted} cool-pavement coatings, [C]{the total number} of heat-related hospitalizations [D]{remain} stubbornly high in low-canopy neighborhoods.",
          correctedSegment: "remains",
          options: [
            {
              id: "A",
              text: "a growing number",
              explanationEs:
                "Correcto en la oración: 'a [growing] number of + plural' funciona como cuantificador equivalente a 'many', rigiendo verbo plural.",
            },
            {
              id: "B",
              text: "have adopted",
              explanationEs:
                "Correcto en la oración: auxiliar plural en Present Perfect que concuerda legítimamente con 'a growing number of metropolitan districts'.",
            },
            {
              id: "C",
              text: "the total number",
              explanationEs:
                "Correcto en la oración: sintagma nominal definido cuyo núcleo sintáctico es la cifra estadística singular 'number'.",
            },
            {
              id: "D",
              text: "remain",
              explanationEs:
                "Incorrecto (contiene el error): a diferencia de 'a number of' (plural), la expresión definida 'the [total] number of...' tiene como núcleo estricto el sustantivo singular 'number', no 'hospitalizations'. Exige el verbo singular 'remains'.",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Regla de oro de alta frecuencia en iTEP: 'A number of + N plural' lleva verbo PLURAL; 'THE number of + N plural' lleva siempre verbo SINGULAR.",
        },
        {
          part: "part2_error_identification",
          id: "d13-gram-p2-q08",
          cefrLevel: "B2",
          grammarTopic: "Adjective Misused to Modify Comparative Adverb",
          sentenceWithMarkedSegments:
            "Infrared space telescopes [A]{operating beyond} Earth's thermal glow [B]{can detect} atmospheric methane [C]{considerable more} reliably [D]{than ground-based} interferometers.",
          correctedSegment: "considerably more",
          options: [
            {
              id: "A",
              text: "operating beyond",
              explanationEs:
                "Correcto en la oración: cláusula relativa activa reducida ('[which operate] beyond') que modifica a 'Infrared space telescopes'.",
            },
            {
              id: "B",
              text: "can detect",
              explanationEs:
                "Correcto en la oración: modal de capacidad técnica seguido de infinitivo sin 'to'.",
            },
            {
              id: "C",
              text: "considerable more",
              explanationEs:
                "Incorrecto (contiene el error): 'considerable' es adjetivo y no puede intensificar al cuantificador comparativo 'more reliably'. Se requiere el adverbio de grado en '-ly': 'considerably more'.",
            },
            {
              id: "D",
              text: "than ground-based",
              explanationEs:
                "Correcto en la oración: introduce el segundo término de la comparación con un adjetivo compuesto con guion antes de 'interferometers'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Ante un comparativo ('more', 'less', 'faster', 'higher'), cualquier palabra intensificadora previa que no sea 'much/far/even' debe ser adverbio ('considerably', 'substantially', 'significantly').",
        },
        {
          part: "part2_error_identification",
          id: "d13-gram-p2-q09",
          cefrLevel: "B2",
          grammarTopic: "Intransitive Change-of-State Verbs Falsely Passivized",
          sentenceWithMarkedSegments:
            "Over the past decade, a broad consensus [A]{has been emerged} [B]{among paleoclimatologists} [C]{regarding how} ocean circulation shifts [D]{triggered} abrupt regional droughts.",
          correctedSegment: "has emerged",
          options: [
            {
              id: "A",
              text: "has been emerged",
              explanationEs:
                "Incorrecto (contiene el error): 'emerge' (al igual que 'occur', 'arise', 'consist' y 'disappear') es un verbo estrictamente intransitivo, por lo que carece de voz pasiva en inglés. Debe escribirse en voz activa: 'has emerged'.",
            },
            {
              id: "B",
              text: "among paleoclimatologists",
              explanationEs:
                "Correcto en la oración: 'among' es la preposición exacta para distribuir consenso entre tres o más especialistas.",
            },
            {
              id: "C",
              text: "regarding how",
              explanationEs:
                "Correcto en la oración: preposición deverbal académica seguida de cláusula nominal en orden declarativo.",
            },
            {
              id: "D",
              text: "triggered",
              explanationEs:
                "Correcto en la oración: verbo transitivo en Past Simple dentro de la cláusula nominal sobre eventos paleoclimáticos pasados.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Desconfía de inmediato si ves 'be + occurred / happened / emerged / arisen / consisted / existed': ninguno de estos verbos intransitivos admite jamás construcción pasiva.",
        },
        {
          part: "part2_error_identification",
          id: "d13-gram-p2-q10",
          cefrLevel: "B2",
          grammarTopic: "Pronoun-Antecedent Number Shift Across Clauses",
          sentenceWithMarkedSegments:
            "Because Roman limestone aqueducts [A]{accumulated} mineral sinter [B]{over decades of} continuous flow, municipal engineers [C]{periodically scraped} [D]{its interior channels} to restore hydraulic capacity.",
          correctedSegment: "their interior channels",
          options: [
            {
              id: "A",
              text: "accumulated",
              explanationEs:
                "Correcto en la oración: verbo en Past Simple coherente con el marco histórico romano.",
            },
            {
              id: "B",
              text: "over decades of",
              explanationEs:
                "Correcto en la oración: locución temporal de proceso gradual ('a lo largo de décadas de').",
            },
            {
              id: "C",
              text: "periodically scraped",
              explanationEs:
                "Correcto en la oración: adverbio de frecuencia colocado correctamente delante del verbo principal pasado.",
            },
            {
              id: "D",
              text: "its interior channels",
              explanationEs:
                "Incorrecto (contiene el error): el determinante posesivo singular 'its' intenta remitir a 'Roman limestone aqueducts', que es plural. Aunque 'sinter' y 'flow' sean singulares cercanos, el poseedor lógico de los canales es 'aqueducts', exigiendo 'their interior channels'.",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Siempre que encuentres 'its' o 'their' subrayado en Part 2, rastrea hacia atrás quién posee físicamente ese sustantivo y comprueba si ese antecedente es singular o plural.",
        },
      ],
    },

    // =========================================================================
    // 2. LISTENING (35 min study / Astrophysics & Exoplanets Lecture)
    // =========================================================================
    listening: {
      skill: "listening",
      cefrLevel: "B2",
      title: "Observatory Calibration, HPC Queue Allocation & Exoplanet Biosignatures",
      estimatedMinutes: 35,
      timeLimitSeconds: 900,
      focusSummaryEs:
        "En conferencias científicas densas (Part 3), distingue entre la ventaja aparente de un método (por qué las enanas rojas facilitan detectar tránsitos) y la trampa física que obliga a matizar la conclusión (falsos positivos fotoquímicos de oxígeno).",
      items: [
        {
          part: "part1_short_dialogue",
          id: "d13-list-p1",
          title: "Rooftop Observatory Filter Offset",
          cefrLevel: "B2",
          audio: {
            trackId: "day13-listening-p1",
            audioUrl: "/audio/day13-listening-p1.mp3",
            contextSetup:
              "An undergraduate astronomy student speaks with a graduate teaching assistant outside the campus observatory dome.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Hi Marcus. I reserved the rooftop telescope from nine to midnight to capture variable-star light curves, so why is the dome shutter still locked?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Teaching Assistant",
                voice: "en-GB-RyanNeural",
                text: "Sorry, Elena—I just sent an alert to the observing list. Technicians replaced the cracked hydrogen-alpha filter this afternoon, and nobody updated the focal-plane offset table in the control software.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Wait, so any exposures I took tonight would have been slightly out of focus anyway?",
                pauseAfterMs: 400,
              },
              {
                speakerLabel: "Teaching Assistant",
                voice: "en-GB-RyanNeural",
                text: "Exactly. Once I finish running standard-star calibration frames tonight, I'll bump you to tomorrow's primary slot—when atmospheric humidity is actually forecast to drop by half.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d13-list-p1-q01",
              prompt: "What can be inferred from the conversation?",
              options: [
                {
                  id: "A",
                  text: "Heavy cloud cover forced the department to close the observatory dome for the week.",
                  explanationEs:
                    "Incorrecto: el cierre de esta noche se debe a la falta de calibración focal tras cambiar un filtro óptico, no a nubosidad semanal.",
                },
                {
                  id: "B",
                  text: "Installing a new optical filter requires recalibrating the telescope's focus settings before research imaging.",
                  explanationEs:
                    "Correcto: el asistente explica que al cambiar el filtro sin actualizar la tabla de desplazamiento focal las tomas habrían salido desenfocadas, por lo que debe correr cuadros de calibración esta noche.",
                },
                {
                  id: "C",
                  text: "Elena accidentally cracked the hydrogen-alpha filter during her previous observing session.",
                  explanationEs:
                    "Incorrecto: solo se menciona que los técnicos reemplazaron el filtro agrietado esa tarde, sin atribuir el daño a la estudiante.",
                },
                {
                  id: "D",
                  text: "Tomorrow night's observing conditions are expected to be worse than tonight's.",
                  explanationEs:
                    "Incorrecto: contradice el turno final, donde se indica que la humedad atmosférica bajará a la mitad mañana (mejores condiciones astronómicas).",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "En diálogos técnicos breves, vincula la causa operativa ('replaced the filter without updating the offset table') con la consecuencia práctica confirmada por el segundo hablante ('slightly out of focus').",
        },
        {
          part: "part2_conversation",
          id: "d13-list-p2",
          title: "High-Performance Computing Cluster Preemption",
          cefrLevel: "B2",
          audio: {
            trackId: "day13-listening-p2",
            audioUrl: "/audio/day13-listening-p2.mp3",
            contextSetup:
              "A planetary science doctoral student consults the director of university research computing about interrupted simulation jobs.",
            turns: [
              {
                speakerLabel: "Graduate Student",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Dr. Patel, thanks for seeing me on short notice. Over the past forty-eight hours, three of my atmospheric retrieval simulations on the campus supercomputing cluster were terminated halfway through.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Computing Director",
                voice: "en-US-AvaMultilingualNeural",
                text: "Let me pull up your lab's account log, Devon. You're in Professor Sato's exoplanet modeling group, right?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Graduate Student",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Yes. I'm presenting preliminary sub-Neptune cloud models at next Thursday's astrobiology symposium, and each retrieval takes fourteen uninterrupted hours on graphics nodes.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Computing Director",
                voice: "en-US-AvaMultilingualNeural",
                text: "Here's the issue. Your jobs weren't crashing due to hardware faults—they were preempted because Professor Sato's group exhausted its quarterly priority allocation last Friday.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Graduate Student",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Already? We're barely two months into the quarter! How did we burn through forty thousand node-hours so fast?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Computing Director",
                voice: "en-US-AvaMultilingualNeural",
                text: "According to the usage breakdown, a visiting postdoctoral fellow in your lab ran high-resolution magnetohydrodynamic grids across sixty nodes for ten straight days. Once a lab's baseline quota hits zero, subsequent submissions automatically drop into the opportunistic scavenger queue.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Graduate Student",
                voice: "en-US-AndrewMultilingualNeural",
                text: "And in the scavenger queue, whenever another department with remaining priority credits submits a job, my fourteen-hour run gets evicted and loses all progress.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Computing Director",
                voice: "en-US-AvaMultilingualNeural",
                text: "Precisely—unless your code writes periodic state snapshots. First, add a checkpoint flag to save intermediate chains every thirty minutes so evicted runs resume where they paused instead of restarting from scratch. Second, have Professor Sato email a one-paragraph conference-deadline burst request; I can grant five thousand emergency priority hours once the principal investigator signs off.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Graduate Student",
                voice: "en-US-AndrewMultilingualNeural",
                text: "That solves both problems. I'll implement the thirty-minute checkpointing routine this afternoon and ask Professor Sato to send that burst request right after our group seminar.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d13-list-p2-q01",
              prompt:
                "Why were Devon's atmospheric simulations repeatedly stopping before completion?",
              options: [
                {
                  id: "A",
                  text: "Overheating graphics nodes on the campus cluster caused random hardware crashes.",
                  explanationEs:
                    "Incorrecto: la Dra. Patel descarta explícitamente fallos físicos ('weren't crashing due to hardware faults').",
                },
                {
                  id: "B",
                  text: "His research group had depleted its priority quota, placing his jobs in an evictable queue.",
                  explanationEs:
                    "Correcto: al agotarse la cuota trimestral del grupo el viernes anterior, sus tareas cayeron automáticamente a la cola oportunista ('scavenger queue'), donde otros departamentos con prioridad las desalojan.",
                },
                {
                  id: "C",
                  text: "His retrieval script exceeded the twelve-hour maximum runtime allowed for doctoral students.",
                  explanationEs:
                    "Incorrecto: no se menciona ningún límite reglamentario de doce horas para doctorandos.",
                },
                {
                  id: "D",
                  text: "Professor Sato suspended the lab's computing account to audit a visiting researcher's code.",
                  explanationEs:
                    "Incorrecto: la cuenta no fue suspendida por el profesor; cambió de nivel de prioridad automáticamente al llegar la cuota base a cero.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d13-list-p2-q02",
              prompt:
                "What caused Professor Sato's laboratory to use up its quarterly allocation early?",
              options: [
                {
                  id: "A",
                  text: "A visiting postdoc executed intensive multi-node simulations continuously for ten days.",
                  explanationEs:
                    "Correcto: el registro muestra que un investigador posdoctoral visitante corrió mallas magnetohidrodinámicas en sesenta nodos durante diez días seguidos.",
                },
                {
                  id: "B",
                  text: "The university reduced baseline computing quotas across all planetary science labs.",
                  explanationEs:
                    "Incorrecto: el agotamiento se debió al consumo interno extraordinario del laboratorio, no a un recorte institucional.",
                },
                {
                  id: "C",
                  text: "Devon accidentally submitted duplicate cloud-modeling jobs over the weekend.",
                  explanationEs:
                    "Incorrecto: Devon solo intentó completar tres simulaciones en las últimas cuarenta y ocho horas.",
                },
                {
                  id: "D",
                  text: "Checkpoint snapshots consumed all available storage space on the cluster.",
                  explanationEs:
                    "Incorrecto: de hecho, el código de Devon aún NO guardaba instantáneas periódicas ('checkpointing'), razón por la cual perdía su avance.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d13-list-p2-q03",
              prompt:
                "Why does Dr. Patel advise Devon to add a thirty-minute checkpoint flag to his code?",
              options: [
                {
                  id: "A",
                  text: "To bypass the need for Professor Sato's signature on the burst-grant request",
                  explanationEs:
                    "Incorrecto: la firma del investigador principal sigue siendo indispensable para liberar las cinco mil horas prioritarias.",
                },
                {
                  id: "B",
                  text: "To compress fourteen hours of calculations into a single thirty-minute run",
                  explanationEs:
                    "Incorrecto: el guardado periódico no acelera veintiocho veces el cálculo; solo almacena el estado intermedio.",
                },
                {
                  id: "C",
                  text: "To ensure interrupted simulations can resume from their latest saved state rather than starting over",
                  explanationEs:
                    "Correcto: explica que guardar estados intermedios cada treinta minutos permite reanudar las corridas desalojadas desde donde se pausaron en lugar de reiniciar desde cero.",
                },
                {
                  id: "D",
                  text: "To detect numerical errors in the visiting postdoc's magnetohydrodynamic grids",
                  explanationEs:
                    "Incorrecto: la modificación se aplica al propio script de recuperación atmosférica de Devon.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d13-list-p2-q04",
              prompt:
                "What is required before Dr. Patel can release five thousand emergency priority hours?",
              options: [
                {
                  id: "A",
                  text: "An official acceptance letter from the astrobiology symposium organizers",
                  explanationEs:
                    "Incorrecto: la directora no solicita carta del comité organizador del simposio.",
                },
                {
                  id: "B",
                  text: "A brief email request authorized by Devon's principal investigator, Professor Sato",
                  explanationEs:
                    "Correcto: indica que puede otorgar cinco mil horas prioritarias de emergencia tan pronto como el investigador principal (Prof. Sato) envíe y avale la solicitud breve por plazo de congreso.",
                },
                {
                  id: "C",
                  text: "Payment of an interdepartmental surcharge from the astronomy travel budget",
                  explanationEs:
                    "Incorrecto: no se menciona ningún cobro monetario ni transferencia presupuestaria.",
                },
                {
                  id: "D",
                  text: "Waiting until the next quarterly allocation cycle begins on Thursday",
                  explanationEs:
                    "Incorrecto: el jueves siguiente es la presentación de Devon en el simposio, y apenas van dos meses del trimestre.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "Cuando la solución administrativa en Part 2 consta de dos pasos ('First... Second...'), iTEP suele dedicar una pregunta técnica al primer paso y una pregunta de procedimiento al segundo.",
        },
        {
          part: "part3_lecture",
          id: "d13-list-p3",
          title: "Astrophysics: Exoplanet Transmission Spectroscopy & M-Dwarf Biosignature Traps",
          cefrLevel: "B2",
          audio: {
            trackId: "day13-listening-p3",
            audioUrl: "/audio/day13-listening-p3.mp3",
            contextSetup:
              "An astrophysics professor lectures to upper-level undergraduates on characterizing rocky exoplanet atmospheres.",
            turns: [
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Today we turn to one of modern astrophysics' central challenges: using transmission spectroscopy to search for atmospheric biosignatures on rocky exoplanets. Whenever an exoplanet crosses—or transits—directly in front of its host star, a tiny fraction of starlight filters through the planet's upper atmosphere, where specific gas molecules absorb distinct infrared wavelengths.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "At first glance, small, cool red stars known as M-dwarfs look like an observer's dream. Because an M-dwarf has far less surface area and luminosity than a Sun-like star, an Earth-sized planet blocks a noticeably larger proportion of starlight. Moreover, its temperate habitable zone lies very close to the star, meaning planets complete an orbit every few days rather than once a year.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Yet that close orbital embrace creates a deceptive photochemical trap. Unlike Sun-like stars, which settle down relatively quickly after formation, M-dwarfs remain magnetically hyperactive for hundreds of millions of years, bombarding nearby planets with extreme ultraviolet flares that split atmospheric water vapor into hydrogen and oxygen.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Because hydrogen atoms are exceptionally light, thermal energy drives them permanently out into space, whereas heavier oxygen atoms remain behind. Over geological timescales, a sterile, desiccated planet that lost entire oceans can accumulate a thick oxygen atmosphere without a single photosynthetic organism ever evolving on its surface.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Consequently, astrobiologists no longer treat molecular oxygen in isolation as definitive proof of life. Instead, our benchmark is chemical disequilibrium—detecting abundant oxygen alongside a reducing gas such as methane. Because oxygen and methane rapidly react to form carbon dioxide and water, finding both simultaneously implies an active surface process, likely biological, continually replenishing them.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Even then, observers must account for what we call stellar contamination. Cooler dark starspots on an unocculted patch of an M-dwarf's surface can harbor their own water-vapor molecules, imprinting phantom spectral lines onto the transit data. Characterizing the host star's magnetic heterogeneity is therefore just as critical as measuring the planet itself.",
                pauseAfterMs: 650,
              },
            ],
          },
          questions: [
            {
              id: "d13-list-p3-q01",
              prompt: "What is the main topic of the professor's lecture?",
              options: [
                {
                  id: "A",
                  text: "Why rocky planets orbiting M-dwarf stars offer observational advantages yet pose severe false-positive risks for biosignature detection",
                  explanationEs:
                    "Correcto: abarca la estructura íntegra de la clase: el principio de espectroscopía de transmisión, las ventajas geométricas/orbitales de las enanas M y las trampas abióticas (oxígeno residual y manchas estelares) que obligan a buscar desequilibrio químico.",
                },
                {
                  id: "B",
                  text: "How radio telescopes measure tectonic plate movement on Earth-sized planets around Sun-like stars",
                  explanationEs:
                    "Incorrecto: la conferencia trata sobre espectroscopía infrarroja de atmósferas alrededor de enanas rojas (M-dwarfs), no radioastronomía ni tectónica de placas.",
                },
                {
                  id: "C",
                  text: "Why photosynthetic organisms cannot survive on planets whose atmospheres contain both oxygen and methane",
                  explanationEs:
                    "Incorrecto: invierte la tesis; precisamente la coexistencia de oxígeno y metano sugiere actividad biológica continua, tal como ocurre en la Tierra.",
                },
                {
                  id: "D",
                  text: "How space agencies plan to deflect extreme ultraviolet flares away from habitable exoplanets",
                  explanationEs:
                    "Incorrecto: los destellos ultravioletas son fenómenos astrofísicos remotos observados a años luz, no algo que las agencias espaciales desvíen.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d13-list-p3-q02",
              prompt:
                "According to the professor, why do M-dwarf systems initially seem ideal for studying rocky exoplanets?",
              options: [
                {
                  id: "A",
                  text: "M-dwarf stars emit almost no ultraviolet radiation during their early evolutionary stages.",
                  explanationEs:
                    "Incorrecto: contradice frontalmente el audio, que destaca su hiperactividad magnética y bombardeo ultravioleta durante cientos de millones de años.",
                },
                {
                  id: "B",
                  text: "Habitable-zone planets transit frequently and block a larger share of the smaller star's light.",
                  explanationEs:
                    "Correcto: al ser estrellas pequeñas y tenues, un planeta rocoso bloquea una proporción mayor de luz y su zona templada cercana produce tránsitos cada pocos días en vez de una vez al año.",
                },
                {
                  id: "C",
                  text: "Planets orbiting M-dwarfs retain primordial hydrogen atmospheres more easily than gas giants.",
                  explanationEs:
                    "Incorrecto: el hidrógeno escapa al espacio con facilidad debido a su ligereza bajo radiación intensa.",
                },
                {
                  id: "D",
                  text: "M-dwarf surfaces are completely uniform and free of magnetic starspots.",
                  explanationEs:
                    "Incorrecto: el cierre advierte precisamente que las manchas oscuras ('cool dark starspots') contaminan los espectros de tránsito.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d13-list-p3-q03",
              prompt:
                "How can a completely sterile exoplanet accumulate an oxygen-rich atmosphere around an M-dwarf?",
              options: [
                {
                  id: "A",
                  text: "Cometary impacts deliver frozen oxygen directly without introducing any hydrogen.",
                  explanationEs:
                    "Incorrecto: no se mencionan impactos cometarios en el mecanismo descrito por la profesora.",
                },
                {
                  id: "B",
                  text: "Ultraviolet flares split atmospheric water vapor, and lightweight hydrogen escapes into space while heavier oxygen stays behind.",
                  explanationEs:
                    "Correcto: describe la cadena causal exacta de los turnos 3 y 4: fotólisis del vapor de agua por fulguraciones UV -> escape térmico del hidrógeno ligero -> acumulación abiótica del oxígeno pesado tras perder océanos.",
                },
                {
                  id: "C",
                  text: "Subterranean volcanic vents convert methane into pure molecular oxygen under high pressure.",
                  explanationEs:
                    "Incorrecto: el metano y el oxígeno reaccionan formando dióxido de carbono y agua; los volcanes no convierten metano en oxígeno puro.",
                },
                {
                  id: "D",
                  text: "Cool starspots transfer oxygen atoms across interplanetary space via solar winds.",
                  explanationEs:
                    "Incorrecto: las manchas estelares generan una ilusión óptica/espectral de vapor de agua en la luz estelar, no transferencia física de oxígeno.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d13-list-p3-q04",
              prompt:
                "Why do astrobiologists consider the simultaneous presence of abundant oxygen and methane a stronger biosignature than oxygen alone?",
              options: [
                {
                  id: "A",
                  text: "Methane shields the planet's surface from stellar starspot contamination.",
                  explanationEs:
                    "Incorrecto: la contaminación por manchas estelares es un artefacto observacional en la luz de la estrella anfitriona, no algo que el metano bloquee.",
                },
                {
                  id: "B",
                  text: "Neither gas can absorb infrared wavelengths unless the other gas is present.",
                  explanationEs:
                    "Incorrecto: ambos absorben longitudes de onda por sí mismos; el argumento es termodinámico/químico, no de invisibilidad óptica.",
                },
                {
                  id: "C",
                  text: "Because the two gases rapidly destroy each other chemically, their coexistence points to continuous active replenishment.",
                  explanationEs:
                    "Correcto: al reaccionar rápidamente entre sí para formar CO2 y agua, hallar ambos en abundancia implica un desequilibrio químico sostenido por una fuente activa continua (probablemente biológica).",
                },
                {
                  id: "D",
                  text: "Ultraviolet flares from M-dwarfs synthesize methane and oxygen in equal proportions.",
                  explanationEs:
                    "Incorrecto: las fulguraciones UV producen el falso positivo de oxígeno aislado por pérdida de agua, precisamente lo que el criterio de desequilibrio busca descartar.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d13-list-p3-q05",
              prompt:
                "What does the professor imply by discussing 'stellar contamination' at the end of the lecture?",
              options: [
                {
                  id: "A",
                  text: "Water-vapor features detected during a transit might actually originate on the star's own spotted surface rather than in the planet's atmosphere.",
                  explanationEs:
                    "Correcto: las manchas frías no ocultadas de la enana roja pueden albergar moléculas de vapor de agua e imprimir líneas espectrales fantasma ('phantom spectral lines') que parecen provenir del planeta.",
                },
                {
                  id: "B",
                  text: "Earth's own atmosphere makes space-based infrared spectroscopy impossible around red dwarfs.",
                  explanationEs:
                    "Incorrecto: la contaminación estelar proviene de la superficie heterogénea de la estrella anfitriona lejana, no de la atmósfera terrestre.",
                },
                {
                  id: "C",
                  text: "Astronomers should abandon transmission spectroscopy altogether and study only solar-system moons.",
                  explanationEs:
                    "Incorrecto: su conclusión no es abandonar la técnica, sino modelar con el mismo rigor la heterogeneidad magnética de la estrella.",
                },
                {
                  id: "D",
                  text: "Robotic probes have accidentally introduced terrestrial microbes into exoplanet data.",
                  explanationEs:
                    "Incorrecto: confunde 'contaminación biológica de sondas' con el término astrofísico 'contaminación espectral estelar'.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d13-list-p3-q06",
              prompt: "How is the lecture organized?",
              options: [
                {
                  id: "A",
                  text: "It introduces an observational method, explains an appealing target's hidden pitfalls, and outlines stricter diagnostic criteria.",
                  explanationEs:
                    "Correcto: describe la espectroscopía de tránsito (T1), expone por qué las enanas M parecen ideales (T2), revela el falso positivo fotoquímico (T3–T4) y establece criterios más rigurosos: desequilibrio químico y control de manchas estelares (T5–T6).",
                },
                {
                  id: "B",
                  text: "It compares the budgets of three space telescopes in chronological order of launch.",
                  explanationEs:
                    "Incorrecto: no menciona presupuestos ni fechas de lanzamiento de telescopios espaciales.",
                },
                {
                  id: "C",
                  text: "It presents a historical debate from the nineteenth century and proves both sides wrong.",
                  explanationEs:
                    "Incorrecto: toda la discusión se sitúa en la astrofísica contemporánea de exoplanetas.",
                },
                {
                  id: "D",
                  text: "It classifies rocky exoplanets into four mineralogical categories based on core density.",
                  explanationEs:
                    "Incorrecto: analiza composición atmosférica y fotoquímica, no densidad mineralógica del núcleo.",
                },
              ],
              correctOptionId: "A",
            },
          ],
          keyTakeawayEs:
            "Anota siempre los pares de contraste físico (hidrógeno ligero escapa / oxígeno pesado queda; oxígeno aislado dudoso / oxígeno + metano = desequilibrio): son el blanco predilecto de las preguntas de causa-efecto en Part 3.",
        },
      ],
    },

    // =========================================================================
    // 3. READING (30 min study / Climate Urbanism + Close-Distractor Elimination)
    // =========================================================================
    reading: {
      skill: "reading",
      cefrLevel: "B2",
      title: "Urban Wind Corridors & The Climate Gentrification Paradox",
      estimatedMinutes: 30,
      timeLimitSeconds: 1200,
      focusSummaryEs:
        "Para superar los distractores cercanos de nivel B2/C1, no busques palabras repetidas del pasaje: descarta opciones que (1) inviertan la relación causa-efecto, (2) conviertan una condición parcial en absoluta ('solely', 'eliminates all') o (3) mezclen conceptos verdaderos de dos párrafos en una afirmación falsa.",
      passages: [
        {
          part: "part1_intermediate",
          id: "d13-read-p1",
          title: "Aerodynamic Ventilation Corridors and Albedo Retrofitting in Compact Cities",
          cefrLevel: "B2",
          topicDomain: "Urban Climatology & Sustainable Architecture",
          paragraphs: [
            "As summer heatwaves intensify across mid-latitude metropolises, municipal planners have widely promoted high-albedo 'cool roofs' and reflective street coatings designed to bounce incoming solar radiation back into the upper atmosphere. While reflective surfaces reliably lower daytime rooftop temperatures and curb air-conditioning demand inside upper-story apartments, micrometeorological field campaigns reveal that surface reflectivity alone cannot resolve nocturnal heat retention in densely built urban districts. Where uninterrupted walls of high-rise towers block prevailing coastal or valley breezes, thermal energy absorbed by vertical glass and masonry facades remains trapped within narrow street canyons long after sunset.",
            "To overcome this aerodynamic bottleneck, cities from Stuttgart to Singapore have integrated wind-ventilation corridors—continuous linear pathways of stepped building heights, open waterways, and tree-lined boulevards aligned with regional nighttime airflows—directly into statutory zoning codes. Rather than treating individual buildings as isolated thermal envelopes, aerodynamic zoning regulates tower orientation and ground-level podium porosity so cooler rural or marine air can flush stagnant heat out of interior neighborhoods. Crucially, computational fluid-dynamics modeling demonstrates that misplacing reflective coatings along poorly ventilated streets can occasionally backfire at pedestrian level by redirecting shortwave glare onto adjacent walls and passing pedestrians.",
            "Consequently, contemporary urban climatology treats reflective materials and aerodynamic permeability as interdependent rather than interchangeable interventions. Reflective roofs perform best atop low-rise industrial warehouses and broad civic halls where reflected radiation escapes skyward unimpeded, whereas dense residential canyons require shaded tree canopies paired with protected breeze corridors to lower nighttime physiological heat stress.",
          ],
          questions: [
            {
              id: "d13-read-p1-q01",
              questionType: "main_idea",
              prompt: "What is the central argument of the passage?",
              options: [
                {
                  id: "A",
                  text: "Reflective roof coatings worsen urban heatwaves everywhere and should be replaced entirely with municipal waterways.",
                  explanationEs:
                    "Incorrecto (distractor extremo): el texto reconoce que los techos reflectantes sí reducen eficazmente la temperatura diurna en pisos altos y naves bajas; no propone eliminarlos en todas partes.",
                },
                {
                  id: "B",
                  text: "Effective urban heat mitigation requires pairing context-appropriate reflective surfaces with zoning that preserves aerodynamic airflow and shade.",
                  explanationEs:
                    "Correcto: sintetiza con precisión los tres párrafos: límites nocturnos y peatonales del albedo aislado (P1–P2), el rol de los corredores de ventilación (P2) y la complementariedad estratégica de ambas medidas según la geometría urbana (P3).",
                },
                {
                  id: "C",
                  text: "High-rise glass towers reduce daytime air-conditioning demand more effectively than low-rise warehouses.",
                  explanationEs:
                    "Incorrecto (mezcla léxica): el texto señala todo lo contrario respecto a las fachadas verticales de vidrio, que atrapan calor en cañones urbanos estrechos.",
                },
                {
                  id: "D",
                  text: "Coastal cities naturally flush out nocturnal heat without needing statutory zoning regulations.",
                  explanationEs:
                    "Incorrecto (contradicción directa): el párrafo 1 indica que los muros continuos de rascacielos bloquean las brisas costeras si no existen corredores protegidos por códigos de zonificación.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d13-read-p1-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'porosity' in paragraph 2 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "moisture absorption in concrete foundations",
                  explanationEs:
                    "Incorrecto (acepción literal fuera de contexto): aunque en geología o materiales 'porosity' alude a absorción de agua, aquí modifica a 'podium' (basamento arquitectónico) para permitir el paso del viento.",
                },
                {
                  id: "B",
                  text: "structural openness that allows air to pass through",
                  explanationEs:
                    "Correcto: junto a 'tower orientation' y con la finalidad de que el aire fresco barra el calor estancado ('so cooler rural or marine air can flush stagnant heat'), designa la permeabilidad o abertura espacial de los basamentos arquitectónicos.",
                },
                {
                  id: "C",
                  text: "legal flexibility in municipal tax exemptions",
                  explanationEs:
                    "Incorrecto: el párrafo habla de regulaciones físicas de altura y orientación en zonificación, no de exenciones fiscales.",
                },
                {
                  id: "D",
                  text: "reflective brightness under midday sunlight",
                  explanationEs:
                    "Incorrecto: esa propiedad corresponde al término 'albedo' mencionado en el título y el párrafo 1, no a 'podium porosity'.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d13-read-p1-q03",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 2 about applying reflective street pavement in a narrow, poorly ventilated high-rise canyon?",
              options: [
                {
                  id: "A",
                  text: "It may increase thermal discomfort for pedestrians despite lowering pavement surface temperature.",
                  explanationEs:
                    "Correcto: dado que en calles mal ventiladas los recubrimientos reflectantes pueden resultar contraproducentes a nivel peatonal al redirigir radiación de onda corta hacia muros vecinos y cuerpos humanos, un peatón puede sufrir mayor carga radiante.",
                },
                {
                  id: "B",
                  text: "It accelerates regional nighttime breezes from surrounding valleys.",
                  explanationEs:
                    "Incorrecto: la reflectividad del pavimento no desbloquea muros de torres ni genera corredores aerodinámicos.",
                },
                {
                  id: "C",
                  text: "It is legally required before cities in Singapore or Stuttgart permit tree planting.",
                  explanationEs:
                    "Incorrecto: ninguna parte del pasaje condiciona la arborización al uso previo de pavimento reflectante.",
                },
                {
                  id: "D",
                  text: "It directs reflected solar energy straight into the upper atmosphere without striking nearby buildings.",
                  explanationEs:
                    "Incorrecto (confusión con párrafo 3): el escape libre hacia el cielo ocurre en techos de naves bajas y amplias ('low-rise warehouses'), precisamente lo que NO sucede en cañones estrechos.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d13-read-p1-q04",
              questionType: "synthesis",
              prompt:
                "Why does the author distinguish between low-rise warehouses and dense residential canyons in paragraph 3?",
              options: [
                {
                  id: "A",
                  text: "To argue that industrial districts deserve greater municipal heat-relief funding than residential zones",
                  explanationEs:
                    "Incorrecto: la distinción es física y microclimática (geometría de radiación y ventilación), no de prioridad presupuestaria.",
                },
                {
                  id: "B",
                  text: "To illustrate how surrounding urban geometry determines which cooling strategy functions effectively without unintended side effects",
                  explanationEs:
                    "Correcto: ejemplifica por qué las intervenciones no son intercambiables: en techos bajos despejados la radiación escapa al cielo, mientras que los cañones residenciales densos exigen sombra arbórea y corredores de brisa.",
                },
                {
                  id: "C",
                  text: "To show that computational fluid-dynamics models apply only to commercial architecture",
                  explanationEs:
                    "Incorrecto: los modelos aerodinámicos evalúan calles peatonales y barrios interiores, incluidos los residenciales.",
                },
                {
                  id: "D",
                  text: "To prove that tree canopies trap more nocturnal heat than masonry facades do",
                  explanationEs:
                    "Incorrecto: el párrafo 3 recomienda expresamente copas de árboles sombreadas junto con corredores de brisa para reducir el estrés térmico nocturno.",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
        {
          part: "part2_academic",
          id: "d13-read-p2",
          title: "Hydrological Sponge Districts and the Paradox of Climate Gentrification",
          cefrLevel: "B2",
          topicDomain: "Climate Urbanism & Environmental Justice",
          paragraphs: [
            "For over a century, industrial cities managed extreme rainfall through 'gray infrastructure'—vast underground networks of concrete storm sewers, pumping stations, culverts, and channelized rivers engineered to expel surface runoff as rapidly as possible. Yet as climate change amplifies convective cloudbursts well beyond historical design thresholds, rigid pipe networks routinely overflow, inundating low-lying residential neighborhoods while depriving urban aquifers of natural groundwater recharge. In response, metropolitan water agencies worldwide have embraced 'sponge city' urbanism: retrofitting flood-prone districts with permeable pavements, sunken detention parks, restored riparian wetlands, and vegetated bioswales capable of absorbing, filtering, and slowly releasing stormwater on site.",
            "From a purely hydrological standpoint, decentralized green infrastructure outperforms conventional pipe expansion at a fraction of the lifecycle carbon and maintenance cost. Alongside attenuating peak flood crests during torrential storms, vegetated retention basins cool surrounding microclimates through evapotranspiration, trap heavy-metal road particulates before they reach coastal estuaries, and create accessible public recreational amenities in formerly neglected industrial corridors. However, urban sociologists analyzing early flagship sponge districts across North America, Western Europe, and East Asia have documented an acute socioeconomic contradiction now termed 'climate gentrification.' When municipalities concentrate high-visibility ecological upgrades in historically underinvested, flood-vulnerable neighborhoods without parallel housing safeguards, private real-estate developers swiftly capitalize on both the reduced flood risk and the newly landscaped parkland.",
            "Empirical tracking of property assessments around major green-infrastructure corridors reveals how rapidly ecological resilience can morph into residential displacement. [A] Within five years of wetland park completion, median residential rents and property tax assessments in adjacent census tracts frequently climb twenty to thirty-five percent faster than metropolitan averages, pricing out long-term working-class tenants and small neighborhood businesses. [B] Displaced low-income households are often forced to relocate toward peripheral floodplains or heat-exposed outer suburbs that still lack protective drainage infrastructure, effectively transferring climate vulnerability across municipal boundaries rather than reducing net regional risk. [C] Critics note that project evaluation metrics compound this institutional blind spot whenever engineering departments measure success solely through cubic meters of stormwater retained while ignoring post-project demographic turnover. [D]",
            "Addressing this paradox does not mean halting green hydrological retrofits; leaving working-class districts exposed to escalating flood hazards would merely perpetuate environmental neglect. Instead, equitable climate urbanism embeds anti-displacement instruments directly into infrastructure financing prior to breaking ground. Cities pioneering this integrated governance model pair sponge-park municipal bonds with community land trusts that lock in permanent rent affordability, enact inclusionary zoning around transit-accessible bioswale corridors, and distribute modest micro-catchments evenly across entire watersheds rather than concentrating signature 'eco-parks' as speculative real-estate catalysts. Ultimately, urban climate adaptation succeeds only when physical flood resilience and residential stability are engineered as a single civic mandate.",
          ],
          questions: [
            {
              id: "d13-read-p2-q01",
              questionType: "detail",
              prompt:
                "According to paragraph 1, what dual failure occurs when conventional 'gray infrastructure' is overwhelmed by intense cloudbursts?",
              options: [
                {
                  id: "A",
                  text: "Low-lying neighborhoods flood while urban groundwater reserves fail to receive natural replenishment.",
                  explanationEs:
                    "Correcto: el párrafo 1 señala explícitamente ambos efectos ('inundating low-lying neighborhoods while depriving urban aquifers of natural recharge').",
                },
                {
                  id: "B",
                  text: "Permeable pavements clog with river sediment while coastal estuaries dry out.",
                  explanationEs:
                    "Incorrecto: los pavimentos permeables pertenecen a la solución 'sponge city', no al fallo de la infraestructura gris tradicional.",
                },
                {
                  id: "C",
                  text: "Concrete culverts release excess carbon dioxide directly into urban aquifers.",
                  explanationEs:
                    "Incorrecto: el costo de carbono del ciclo de vida ('lifecycle carbon cost') se menciona en el párrafo 2 respecto a ampliar tuberías, no como filtración de gas a los acuíferos.",
                },
                {
                  id: "D",
                  text: "Sunken detention parks overflow into underground storm sewers during mild drizzle.",
                  explanationEs:
                    "Incorrecto: mezcla elementos de ambos modelos y contradice el contexto de lluvias convectivas extremas ('convective cloudbursts').",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d13-read-p2-q02",
              questionType: "rhetorical_purpose",
              prompt:
                "Why does the author list microclimate cooling, pollutant filtration, and recreational amenities at the beginning of paragraph 2?",
              options: [
                {
                  id: "A",
                  text: "To prove that urban sociologists exaggerate the housing impacts of green infrastructure",
                  explanationEs:
                    "Incorrecto: el autor valida plenamente los hallazgos de los sociólogos urbanos en la mitad siguiente del párrafo y en el párrafo 3.",
                },
                {
                  id: "B",
                  text: "To acknowledge the genuine ecological and civic benefits of sponge districts before introducing their unintended socioeconomic downside",
                  explanationEs:
                    "Correcto: establece primero por qué la infraestructura verde es técnica y ambientalmente valiosa (y por qué atrae inversión inmobiliaria), preparando el giro adversativo ('However, urban sociologists...').",
                },
                {
                  id: "C",
                  text: "To explain why private developers refuse to build housing near vegetated retention basins",
                  explanationEs:
                    "Incorrecto: ocurre exactamente lo opuesto; los promotores inmobiliarios capitalizan de inmediato esas mejoras paisajísticas.",
                },
                {
                  id: "D",
                  text: "To demonstrate that sponge cities eliminate the need for municipal zoning laws",
                  explanationEs:
                    "Incorrecto: el párrafo 4 exige precisamente zonificación inclusiva y fideicomisos de suelo.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d13-read-p2-q03",
              questionType: "vocabulary_in_context",
              prompt: "The word 'attenuating' in paragraph 2 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "measuring and forecasting",
                  explanationEs:
                    "Incorrecto: las cuencas vegetadas amortiguan físicamente la crecida del agua, no son instrumentos de medición meteorológica.",
                },
                {
                  id: "B",
                  text: "moderating and reducing the intensity of",
                  explanationEs:
                    "Correcto: en hidrología ('attenuating peak flood crests'), 'attenuate' significa amortiguar, mitigar o reducir la magnitud máxima de los picos de inundación.",
                },
                {
                  id: "C",
                  text: "diverting into offshore pipelines",
                  explanationEs:
                    "Incorrecto: expulsar la escorrentía por conductos rápidos es el enfoque de la infraestructura gris, opuesto a la retención in situ.",
                },
                {
                  id: "D",
                  text: "legally insuring against",
                  explanationEs:
                    "Incorrecto: el contexto describe funciones biofísicas (enfriar microclimas, atrapar metales pesados), no seguros financieros.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d13-read-p2-q04",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 3 about evaluating climate-adaptation projects strictly by engineering metrics?",
              options: [
                {
                  id: "A",
                  text: "Such metrics can classify a project as a triumph even when it worsens regional vulnerability for low-income residents.",
                  explanationEs:
                    "Correcto: si los departamentos de ingeniería miden el éxito únicamente por metros cúbicos retenidos e ignoran el recambio demográfico que empuja a hogares vulnerables hacia llanuras aluviales periféricas sin protección, un proyecto 'exitoso' en papel redistribuye el riesgo climático.",
                },
                {
                  id: "B",
                  text: "Engineering departments intentionally inflate stormwater retention figures to raise property taxes.",
                  explanationEs:
                    "Incorrecto (distractor de intencionalidad falsa): el texto señala un punto ciego metodológico ('blind spot'), no manipulación fraudulenta de cifras.",
                },
                {
                  id: "C",
                  text: "Peripheral suburbs already possess stronger flood defenses than central sponge districts.",
                  explanationEs:
                    "Incorrecto: contradice el párrafo 3, que describe esos suburbios periféricos como zonas expuestas que aún carecen de infraestructura protectora ('still lack protective infrastructure').",
                },
                {
                  id: "D",
                  text: "Property taxes rise around wetland parks only when stormwater retention targets are missed.",
                  explanationEs:
                    "Incorrecto (causalidad invertida): las rentas e impuestos suben precisamente porque el parque reduce el riesgo de inundación y embellece el entorno.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d13-read-p2-q05",
              questionType: "sentence_insertion",
              prompt:
                "Look at the four squares [A], [B], [C], and [D] in paragraph 3. Where would the following sentence best fit?",
              sentenceToInsert:
                "In effect, public adaptation funds end up subsidizing secure green enclaves for affluent newcomers at the expense of the very communities originally at risk.",
              options: [
                {
                  id: "A",
                  text: "[A]",
                  explanationEs:
                    "Incorrecto: antes de `[A]` aún no se ha explicado ni la subida de alquileres/impuestos ni el desplazamiento de los residentes originales hacia periferias vulnerables.",
                },
                {
                  id: "B",
                  text: "[B]",
                  explanationEs:
                    "Incorrecto: aunque antes de `[B]` se menciona el alza de rentas, la oración posterior a `[B]` sigue desarrollando el destino geográfico de los hogares desplazados ('Displaced low-income households...'), por lo que insertar aquí la conclusión 'In effect...' cortaría la cadena causal.",
                },
                {
                  id: "C",
                  text: "[C]",
                  explanationEs:
                    "Correcto: 'In effect' resume con precisión las dos oraciones previas (alza acelerada de alquileres/impuestos + reubicación forzosa de familias de bajos ingresos a periferias sin protección), antes de pasar en la última oración a las métricas de evaluación ('Critics note that project evaluation metrics...').",
                },
                {
                  id: "D",
                  text: "[D]",
                  explanationEs:
                    "Incorrecto: la oración anterior a `[D]` trata específicamente sobre indicadores de ingeniería ('cubic meters of stormwater retained'), con lo cual 'In effect, public adaptation funds...' perdería su anclaje directo con el desplazamiento residencial descrito antes de `[C]`.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d13-read-p2-q06",
              questionType: "synthesis",
              prompt:
                "Which policy approach best reflects the integrated model endorsed in paragraph 4?",
              options: [
                {
                  id: "A",
                  text: "Postponing flood-control investments in low-income neighborhoods until regional housing prices stabilize naturally",
                  explanationEs:
                    "Incorrecto: la primera oración del párrafo 4 rechaza expresamente frenar estas obras porque perpetuaría el abandono ambiental ante inundaciones crecientes.",
                },
                {
                  id: "B",
                  text: "Building a single monumental eco-park downtown to maximize private real-estate tax revenue",
                  explanationEs:
                    "Incorrecto: el párrafo 4 critica concentrar 'eco-parks' emblemáticos como catalizadores especulativos y aboga por microcuencas distribuidas.",
                },
                {
                  id: "C",
                  text: "Coupling distributed permeable infrastructure with upfront community land trusts and affordable-housing mandates",
                  explanationEs:
                    "Correcto: recoge los tres pilares del párrafo 4: fideicomisos de tierras comunitarias financiados desde el inicio, zonificación inclusiva y microcuencas distribuidas equitativamente en toda la cuenca hidrográfica.",
                },
                {
                  id: "D",
                  text: "Returning to underground concrete storm sewers so neighborhood property values remain unchanged",
                  explanationEs:
                    "Incorrecto: contradice el párrafo 1 (donde la infraestructura gris colapsa ante tormentas intensas) y la síntesis del párrafo 4.",
                },
              ],
              correctOptionId: "C",
            },
          ],
        },
      ],
    },

    // =========================================================================
    // 4. WRITING (30 min study / Poster Erratum Note + Pure vs. Applied Science)
    // =========================================================================
    writing: {
      skill: "writing",
      cefrLevel: "B2",
      title: "Symposium Methodological Correction & Basic Science Funding Debate",
      estimatedMinutes: 30,
      timeLimitSeconds: 1500,
      focusSummaryEs:
        "Cuando enfrentes un tema abstracto en Writing Part 2 (como financiar ciencia teórica frente a crisis urgentes), evita generalidades vagas: aterriza tu tesis en los primeros 90 segundos pensando en un caso histórico concreto donde la ciencia pura habilitó una tecnología cotidiana décadas después.",
      tasks: [
        {
          part: "part1_note",
          id: "d13-writ-p1",
          cefrLevel: "B2",
          title: "Correcting a Calibration Figure Before a Poster Session",
          prompt:
            "Your research poster has been accepted for Thursday's Urban Sustainability Symposium. While reviewing the printed proof today, you discovered a unit-conversion error in one of the thermal-sensor tables. Write a formal note to Professor Halvorsen, the Symposium Chair, in which you: (1) identify the specific error and clarify that it does not alter your main conclusion, (2) offer to bring a corrected reprint at your own expense before setup begins, and (3) ask whether an erratum note is needed for the digital proceedings.",
          timeLimitSeconds: 300,
          minWords: 50,
          maxWords: 75,
          strategyGuideEs:
            "Resuelve los 3 puntos con precisión ejecutiva y aplica las reglas de Grammar del Día 13: usa una cláusula concesiva ('although...') para aclarar que tu conclusión se mantiene intacta y verifica que cualquier 'to' preposicional o pregunta indirecta con 'whether' esté libre de trampas.",
          recommendedConnectors: ["While reviewing", "although", "at my own expense", "whether"],
          b2RubricChecklistEs: [
            "Aborda los 3 requisitos completos (error específico sin cambio de conclusión, reimpresión asumiendo el costo antes del montaje y consulta sobre fe de erratas digital).",
            "Se mantiene estrictamente entre 50 y 75 palabras con tono académico responsable y conciso.",
            "Emplea subordinación fluida ('While reviewing...', 'although...', 'whether...') sin oraciones telegráficas.",
            "Cero errores en concordancia, ortografía académica ('proceedings', 'conclusion', 'conversion') o puntuación.",
          ],
          modelAnswerB2:
            "Dear Professor Halvorsen, While reviewing my poster for Thursday's symposium, I noticed a Celsius-to-Kelvin conversion error in Table 2, although this mistake does not alter our overall microclimate conclusions. I am printing a corrected poster at my own expense and will mount it before nine o'clock on Thursday morning. Could you let me know whether I should also submit a brief erratum note for the digital proceedings? Sincerely, Mateo Silva",
        },
        {
          part: "part2_essay",
          id: "d13-writ-p2",
          cefrLevel: "B2",
          title: "Public Funding for Curiosity-Driven Basic Science",
          prompt:
            "Some policymakers argue that public tax revenues should exclusively fund applied scientific research that addresses immediate practical problems, such as medical treatments or municipal infrastructure, rather than pure theoretical inquiry like deep-space astronomy or abstract mathematics. Others contend that sustained investment in curiosity-driven basic science remains essential for society's long-term progress. Which position do you support? Provide specific reasons and examples to justify your stance.",
          timeLimitSeconds: 1200,
          minWords: 175,
          maxWords: 225,
          strategyGuideEs:
            "Frente a dilemas abstractos, aplica la fórmula 'Tesis Matizada + Puente Histórico': concede en 1 oración la urgencia de las necesidades sociales inmediatas, pero demuestra con ejemplos verificables (mecánica cuántica -> resonancia magnética / relatividad -> GPS / enzimas bacterianas -> edición genética) que la ciencia aplicada se seca sin investigación básica pública.",
          recommendedConnectors: [
            "Understandably,",
            "However,",
            "Had governments restricted",
            "Furthermore,",
            "those of",
          ],
          b2RubricChecklistEs: [
            "Defiende una postura inequívoca desde la introducción evitando respuestas tibias ('ambas son importantes' sin jerarquización argumental).",
            "Alcanza entre 175 y 225 palabras distribuidas en 4 párrafos cohesionados.",
            "Ilustra el argumento abstracto con al menos un ejemplo científico-tecnológico concreto y creíble.",
            "Integra estructuras B2 del Día 13 sin errores (comparación paralela con 'those of', condicional invertido o gerundio tras preposición).",
            "Revisión final de 3 minutos sin corrector ortográfico verificando consonantes dobles y concordancia sujeto-verbo.",
          ],
          modelAnswerB2:
            "Allocating public revenue requires difficult fiscal choices, yet restricting government grants exclusively to short-term applied projects would severely undermine future innovation. Sustained public investment in curiosity-driven basic science remains indispensable because breakthrough technologies almost always emerge from foundational discoveries whose practical value was initially unforeseeable.\n\nUnderstandably, taxpayers facing healthcare shortages or aging transit systems expect tangible returns on public expenditure. However, treating applied engineering as independent from theoretical inquiry misunderstands how scientific knowledge accumulates. Had twentieth-century physicists been prohibited from investigating abstract atomic resonance or general relativity, modern hospitals would lack magnetic resonance imaging, and global navigation satellites could not synchronize orbital clocks accurately. Applied researchers harvest solutions, whereas basic scientists cultivate the conceptual soil from which those solutions grow.\n\nFurthermore, private corporations already possess strong financial incentives to commercialize near-term medical devices and industrial software, but their quarterly profit horizons differ markedly from those of public research universities. Because private investors rarely fund thirty-year astronomical surveys or foundational microbiology without guaranteed patents, government stewardship is the only mechanism capable of sustaining open-access theoretical exploration.\n\nUltimately, nations that abandon pure inquiry sacrifice tomorrow's transformative remedies for modest incremental fixes today. Balanced science policy must address urgent civic needs while safeguarding basic research.",
        },
      ],
    },

    // =========================================================================
    // 5. SPEAKING (15 min study / Abstract Improvisation Under Time Pressure)
    // =========================================================================
    speaking: {
      skill: "speaking",
      cefrLevel: "B2",
      title: "Questioning Academic Conventions & Digital Archival Policy",
      estimatedMinutes: 15,
      timeLimitSeconds: 300,
      focusSummaryEs:
        "Si un prompt de Speaking es filosófico o inusual, resiste el impulso de hablar en abstracto durante 60 segundos: en el segundo 15 baja el concepto a un escenario concreto (una sala de estudio, un hospital, un archivo municipal) usando 'Consider, for instance, what happens when...'.",
      tasks: [
        {
          part: "part1_personal",
          id: "d13-speak-p1",
          cefrLevel: "B2",
          title: "Challenging a Counterproductive Study or Workplace Convention",
          prompt:
            "Identify a widely accepted habit or conventional assumption in university study or professional work that you believe is actually counterproductive. Explain why people continue following it and what alternative approach produces stronger results.",
          prepSeconds: 30,
          recordSeconds: 45,
          structureTemplate: [
            "0–10s (Name the Myth): Identify the specific conventional habit directly ('One widespread academic habit...').",
            "10–25s (Psychological Trap): Explain briefly why people keep doing it despite poor outcomes.",
            "25–45s (Evidence-Based Alternative): Contrast it with a concrete practice you use instead.",
          ],
          keyPhrasesB2: [
            "One widely accepted academic habit that proves surprisingly counterproductive is...",
            "Students gravitate toward this routine because it creates an illusion of...",
            "Rather than passively rereading..., a far more effective approach involves...",
            "Switching to active retrieval has consistently strengthened my...",
          ],
          selfRubricChecklistEs: [
            "Nombré una convención académica o laboral concreta en los primeros 8 segundos sin divagar.",
            "Expliqué tanto la causa psicológica del hábito como la alternativa práctica superadora.",
            "Usé conectores de contraste B2 ('Rather than + -ing', 'whereas', 'despite') con fluidez natural.",
            "Cerré mi última oración de forma limpia antes de agotarse los 45 segundos.",
          ],
          modelTranscriptB2:
            "One widely accepted academic habit that proves surprisingly counterproductive is marathon passive rereading and highlighting right before exams. Students continue relying on this routine because seeing familiar colored paragraphs creates a comforting illusion of mastery without demanding strenuous mental effort. However, familiarity with a page differs markedly from being able to reconstruct an argument independently under pressure. Rather than rereading chapters multiple times, a far more effective approach involves closing the textbook after each section and summarizing the core mechanism aloud or solving practice problems from memory. Since adopting active self-testing in my coursework, I spend fewer hours studying late at night while retaining complex concepts far more reliably.",
        },
        {
          part: "part2_opinion",
          id: "d13-speak-p2",
          cefrLevel: "B2",
          title: "Total Digital Preservation vs. Selective Archival Curation",
          prompt:
            "Inexpensive cloud storage now enables public institutions and universities to preserve virtually every administrative email, draft document, and municipal dataset indefinitely. Some historians argue that institutions should retain everything so future scholars possess an unfiltered record of contemporary society, whereas critics maintain that deliberate curation and scheduled deletion are essential to protect privacy and prevent archival overload. Which principle should guide public archival policy, and why?",
          audioPrompt: {
            trackId: "day13-speaking-p2",
            audioUrl: "/audio/day13-speaking-p2.mp3",
            contextSetup: "Official iTEP Speaking Part 2 dual-perspective abstract policy prompt.",
            turns: [
              {
                speakerLabel: "Examiner",
                voice: "en-US-GuyNeural",
                text: "Inexpensive cloud storage now enables public institutions and universities to preserve virtually every administrative email, draft document, and municipal dataset indefinitely. Some historians argue that institutions should retain everything so future scholars possess an unfiltered record of contemporary society, whereas critics maintain that deliberate curation and scheduled deletion are essential to protect privacy and prevent archival overload. Which principle should guide public archival policy, and why?",
                pauseAfterMs: 600,
              },
            ],
          },
          prepSeconds: 45,
          recordSeconds: 60,
          structureTemplate: [
            "0–12s (Decisive Thesis): Endorse selective curation (or comprehensive retention) with two clear pillars.",
            "12–30s (Concession + Practical Rebuttal): Acknowledge historians' desire for completeness, then show how unindexed noise buries real evidence.",
            "30–50s (Privacy & Candor Concrete Example): Illustrate how permanent retention chills honest deliberation or exposes citizens.",
            "50–60s (Policy Synthesis): Conclude with transparent retention schedules for major public decisions.",
          ],
          keyPhrasesB2: [
            "Public archival policy should prioritize deliberate curation and scheduled deletion rather than...",
            "Admittedly, preserving every digital trace sounds appealing to future historians, yet...",
            "Consider what happens when millions of routine administrative messages obscure...",
            "By preserving final policy rationales while purging routine personal drafts...",
          ],
          selfRubricChecklistEs: [
            "Arranqué sin titubeos tomando partido claro ante un tema abstracto poco predecible.",
            "Aterricé el dilema abstracto con un ejemplo institucional tangible (universidad, hospital o municipio).",
            "Articulé una concesión ('Admittedly...') seguida de refutación lógica sin perder velocidad.",
            "Evité errores de preposición + gerundio ('by preserving', 'rather than retaining') al improvisar.",
            "Completé la conclusión dentro de la ventana exacta de 52 a 60 segundos.",
          ],
          modelTranscriptB2:
            "Public archival policy should prioritize deliberate curation and transparent deletion schedules rather than indiscriminate digital hoarding. Admittedly, preserving every raw email and draft document sounds appealing to future historians seeking an unfiltered record, yet total retention actually undermines historical clarity in practice. When billions of trivial scheduling messages and unverified drafts accumulate without context, researchers confront overwhelming informational noise that obscures the records that genuinely matter. Furthermore, permanent surveillance of every preliminary draft chills candid deliberation; consider a university committee or public health agency where advisors hesitate to test bold hypotheses in writing because tentative remarks will remain searchable forever. By archiving final policy decisions, empirical datasets, and formal dissenting opinions while routinely purging transient personal correspondence, institutions safeguard both civic accountability and individual privacy.",
        },
      ],
    },
  },
  dailyChecklistEs: [
    "Resolví los 10 reactivos de Grammar auditando comparaciones con 'those of', 'to + -ing', 'the number of' y verbos intransitivos.",
    "Completé la conferencia de Astrofísica de Listening en una sola reproducción identificando la cadena causal de falsos positivos de oxígeno.",
    "Eliminé distractores cercanos en los 2 pasajes de Urbanismo Climático e inserté con precisión la oración en `[C]`.",
    "Redacté la nota de simposio (50–75 palabras) y el ensayo sobre ciencia básica (175–225 palabras) sin corrector ortográfico.",
    "Improvisé respuestas estructuradas con ejemplos concretos en Speaking Part 1 (45s) y Part 2 (60s) sobre dilemas abstractos.",
  ],
};
