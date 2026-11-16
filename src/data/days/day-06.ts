import type { RoadmapDay } from "../../schemas/curriculum.schema.ts";

export const day06: RoadmapDay = {
  dayNumber: 6,
  sprintNumber: 2,
  cefrLevel: "B2",
  title: "Participle Clauses, Dangling Modifiers & Verbal Complements",
  subtitleEs:
    "Cláusulas participiales perfectas, modificadores colgantes, complementación verbal y atenuación académica (hedging)",
  b2FocusSummaryEs:
    "En el Sprint 2 consolidamos la compresión sintáctica avanzada que distingue el nivel B2 sólido en iTEP Academic-Plus: participios perfectos activos y pasivos ('Having calibrated...', 'Having been exposed...'), alineación obligatoria de sujeto para erradicar modificadores colgantes en Grammar Part 2, verbos que alteran radicalmente su significado según rijan gerundio o infinitivo ('remember', 'regret', 'stop', 'mean') y estructuras 'objeto + preposición + -ing' ('prevent X from doing'). En Writing y Reading aplicamos además la atenuación epistémica ('hedging') propia del discurso universitario.",
  estimatedMinutes: 140,
  isMockExamDay: false,
  sections: {
    // =========================================================================
    // 1. GRAMMAR (25 min study / 8 min official pace for 10 items)
    // =========================================================================
    grammar: {
      skill: "grammar",
      cefrLevel: "B2",
      title: "Perfect Participles, Subject Alignment & Verbal Complementation",
      estimatedMinutes: 25,
      timeLimitSeconds: 480,
      focusSummaryEs:
        "Antes de elegir una forma no personal ('-ing', '-ed', 'having + V3' o 'to + verbo'), comprueba dos ejes: quién ejecuta realmente la acción en la cláusula principal (para evitar modificadores colgantes) y si el verbo rector cambia de sentido temporal o intencional con gerundio frente a infinitivo.",
      questions: [
        {
          part: "part1_fill_blank",
          id: "d06-gram-p1-q01",
          cefrLevel: "B2",
          grammarTopic: "Perfect Active Participle Clauses Expressing Prior Completion",
          sentenceWithBlank:
            "_____ the X-ray fluorescence spectrometer against three reference standards, the museum conservators proceeded to scan the fifteenth-century altarpiece.",
          options: [
            {
              id: "A",
              text: "Calibrated",
              explanationEs:
                "Incorrecto: el participio pasado simple es pasivo e implicaría que los propios restauradores ('the museum conservators') fueron calibrados como si fueran instrumentos.",
            },
            {
              id: "B",
              text: "Having calibrated",
              explanationEs:
                "Correcto: participio perfecto activo que indica que el sujeto principal ('the museum conservators') completó primero la acción transitiva de calibrar el espectrómetro antes de escanear el retablo.",
            },
            {
              id: "C",
              text: "Having been calibrated",
              explanationEs:
                "Incorrecto: voz pasiva perfecta que nuevamente atribuiría el estado de 'haber sido calibrados' a los restauradores en vez de al espectrómetro.",
            },
            {
              id: "D",
              text: "They calibrated",
              explanationEs:
                "Incorrecto: introduce una cláusula finita independiente unida únicamente por coma a otra cláusula finita ('proceeded'), generando un 'comma splice' agramatical.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Si la frase inicial tiene objeto directo propio ('the spectrometer') y ocurrió antes del verbo principal, usa 'Having + participio pasado' cuando el sujeto tras la coma sea el agente ejecutor.",
        },
        {
          part: "part1_fill_blank",
          id: "d06-gram-p1-q02",
          cefrLevel: "B2",
          grammarTopic: "Verbs with Gerund vs. Infinitive Meaning Shift (mean)",
          sentenceWithBlank:
            "Retrofitting nineteenth-century textile mills to satisfy modern seismic codes inevitably means _____ internal masonry piers without altering the historic brick facade.",
          options: [
            {
              id: "A",
              text: "to reinforce",
              explanationEs:
                "Incorrecto: 'mean + to-infinitive' expresa intención personal ('tener la intención de'), sentido incompatible con un sujeto abstracto de proceso ('Retrofitting...').",
            },
            {
              id: "B",
              text: "reinforcing",
              explanationEs:
                "Correcto: 'mean + gerundio (-ing)' significa 'implicar necesariamente / conllevar', exactamente la relación lógica entre rehabilitar fábricas históricas y reforzar pilares internos.",
            },
            {
              id: "C",
              text: "reinforced",
              explanationEs:
                "Incorrecto: el verbo transitivo 'mean' no admite un participio pasado desnudo como complemento verbal directo.",
            },
            {
              id: "D",
              text: "that reinforcing",
              explanationEs:
                "Incorrecto: abrir una cláusula nominal con 'that' exigiría un verbo finito posterior para el sujeto gerundial 'reinforcing', el cual no existe en la oración.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Distingue siempre ambos patrones de 'mean': sujeto humano + 'mean to do' = intentar/proponerse; evento o decisión + 'mean doing' = implicar o traer como consecuencia.",
        },
        {
          part: "part1_fill_blank",
          id: "d06-gram-p1-q03",
          cefrLevel: "B2",
          grammarTopic: "Object + Preposition + Gerund Complementation (prevent from)",
          sentenceWithBlank:
            "Strict municipal heritage statutes prevented the real-estate syndicate _____ the cast-iron skylight above the former locomotive foundry.",
          options: [
            {
              id: "A",
              text: "to dismantle",
              explanationEs:
                "Incorrecto: interferencia frecuente del español o de verbos como 'forbid'; en inglés académico estándar 'prevent' jamás rige infinitivo con 'to'.",
            },
            {
              id: "B",
              text: "against dismantling",
              explanationEs:
                "Incorrecto: 'against' se emplea tras verbos de advertencia ('warn against doing'), pero no forma parte del régimen preposicional de 'prevent'.",
            },
            {
              id: "C",
              text: "from dismantling",
              explanationEs:
                "Correcto: cumple con la estructura obligatoria 'prevent + objeto + from + gerundio (-ing)' en registro escrito formal.",
            },
            {
              id: "D",
              text: "that it dismantled",
              explanationEs:
                "Incorrecto: calco directo del español ('impidieron que desmantelara'); en inglés 'prevent' no admite cláusulas subordinadas con 'that'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Agrupa en un solo patrón mental los verbos de impedimento ('prevent', 'prohibit', 'deter', 'discourage', 'keep'): todos exigen 'objeto + from + -ing', nunca 'to + verbo'.",
        },
        {
          part: "part1_fill_blank",
          id: "d06-gram-p1-q04",
          cefrLevel: "B2",
          grammarTopic: "Perfect Passive Participle Clauses",
          sentenceWithBlank:
            "_____ to acidic coal-smoke particulates for nearly a century, the limestone reliefs on the civic exchange required laser micro-ablation rather than chemical washing.",
          options: [
            {
              id: "A",
              text: "Having exposed",
              explanationEs:
                "Incorrecto: forma activa que carece de objeto directo y haría que los relieves de piedra caliza hubieran expuesto algo más.",
            },
            {
              id: "B",
              text: "Exposing",
              explanationEs:
                "Incorrecto: participio presente activo incompatible con el sujeto paciente inanimado 'the limestone reliefs'.",
            },
            {
              id: "C",
              text: "Having been exposed",
              explanationEs:
                "Correcto: participio perfecto pasivo que expresa una exposición prolongada previa sufrida por el sujeto paciente ('the limestone reliefs') antes de requerir microablación láser.",
            },
            {
              id: "D",
              text: "To have exposed",
              explanationEs:
                "Incorrecto: infinitivo perfecto activo que expresa propósito o evaluación retrospectiva activa, ajeno a la relación causal pasiva de la oración.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Cuando la frase inicial no lleva objeto directo y va seguida de 'to/by' más una duración ('for nearly a century'), verifica si el sujeto principal recibió la acción: usa 'Having been + participio pasado'.",
        },
        {
          part: "part1_fill_blank",
          id: "d06-gram-p1-q05",
          cefrLevel: "B2",
          grammarTopic: "Retrospective Gerund vs. Prospective Infinitive (remember)",
          sentenceWithBlank:
            "During the oral-history symposium, retired structural engineers distinctly remembered _____ hairline thermal fractures along the viaduct's wrought-iron girders in the 1980s.",
          options: [
            {
              id: "A",
              text: "to document",
              explanationEs:
                "Incorrecto: 'remember + to-infinitive' indica acordarse de cumplir un deber pendiente antes de ejecutarlo, no evocar un recuerdo vivido décadas atrás.",
            },
            {
              id: "B",
              text: "documenting",
              explanationEs:
                "Correcto: 'remember + gerundio (-ing)' expresa la evocación retrospectiva de una experiencia o acción que el sujeto ya realizó en el pasado ('in the 1980s').",
            },
            {
              id: "C",
              text: "documented",
              explanationEs:
                "Incorrecto: 'remember' no acepta un participio pasado sin estructura subordinada finita o gerundial.",
            },
            {
              id: "D",
              text: "for documenting",
              explanationEs:
                "Incorrecto: 'remember' transitivo toma directamente el gerundio como objeto, sin intercalar la preposición 'for'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Con 'remember' y 'forget', aplica la línea temporal: si la acción ocurrió ANTES del acto de recordar (evidencia como 'distinctly' o fechas pasadas), usa '-ing'; si era una obligación pendiente, usa 'to + verbo'.",
        },
        {
          part: "part2_error_identification",
          id: "d06-gram-p2-q06",
          cefrLevel: "B2",
          grammarTopic: "Dangling Reduced Adverbial Participle Clauses",
          sentenceWithMarkedSegments:
            "[A]{When evaluating} structural fatigue in nineteenth-century cast-iron columns, [B]{microscopic internal fissures} [C]{often escape} detection during [D]{routine visual inspections}.",
          correctedSegment: "When engineers evaluate",
          options: [
            {
              id: "A",
              text: "When evaluating",
              explanationEs:
                "Incorrecto (contiene el error): modificador colgante clásico; al reducir la cláusula temporal a 'When evaluating', el sujeto gramatical pasa a ser 'microscopic internal fissures', como si las fisuras evaluaran la fatiga estructural. Debe explicitarse un sujeto agente: 'When engineers evaluate'.",
            },
            {
              id: "B",
              text: "microscopic internal fissures",
              explanationEs:
                "Correcto en la oración: sintagma nominal plural bien formado que funciona legítimamente como sujeto de 'escape'.",
            },
            {
              id: "C",
              text: "often escape",
              explanationEs:
                "Correcto en la oración: adverbio de frecuencia correctamente ubicado antes del verbo léxico en plural concordando con 'fissures'.",
            },
            {
              id: "D",
              text: "routine visual inspections",
              explanationEs:
                "Correcto en la oración: secuencia adecuada de adjetivos calificativos modificando al sustantivo plural tras la preposición 'during'.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "En cláusulas reducidas con 'When/While/Before/After + -ing', exige identidad total entre el agente implícito del '-ing' y el primer sustantivo tras la coma.",
        },
        {
          part: "part2_error_identification",
          id: "d06-gram-p2-q07",
          cefrLevel: "B2",
          grammarTopic: "Dangling Perfect Participle Clauses",
          sentenceWithMarkedSegments:
            "[A]{Having drafted} the municipal sanitation charter in 1898, [B]{typhoid mortality rates} [C]{declined sharply} across [D]{densely populated mill districts}.",
          correctedSegment: "After civic reformers had drafted",
          options: [
            {
              id: "A",
              text: "Having drafted",
              explanationEs:
                "Incorrecto (contiene el error): modificador participial colgante; 'typhoid mortality rates' no pudo redactar el estatuto sanitario municipal en 1898. Requiere cláusula completa con sujeto humano explícito ('After civic reformers had drafted').",
            },
            {
              id: "B",
              text: "typhoid mortality rates",
              explanationEs:
                "Correcto en la oración: compuesto nominal técnico bien estructurado como sujeto plural de 'declined'.",
            },
            {
              id: "C",
              text: "declined sharply",
              explanationEs:
                "Correcto en la oración: verbo intransitivo en Past Simple modificado con precisión por el adverbio de modo 'sharply'.",
            },
            {
              id: "D",
              text: "densely populated mill districts",
              explanationEs:
                "Correcto en la oración: adverbio 'densely' modificando al adjetivo participial 'populated' dentro del sintagma preposicional.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Desconfía de inmediato en Grammar Part 2 cuando tras 'Having + participio pasado,' aparezca como sujeto principal una estadística, tasa, temperatura o fenómeno inanimado.",
        },
        {
          part: "part2_error_identification",
          id: "d06-gram-p2-q08",
          cefrLevel: "B2",
          grammarTopic: "Meaning Shift Between 'stop doing' and 'stop to do'",
          sentenceWithMarkedSegments:
            "The gallery's conservation studio [A]{stopped to use} chlorinated solvents [B]{nearly twenty years ago} [C]{because their vapors} accelerated bronze disease [D]{inside sealed display cases}.",
          correctedSegment: "stopped using",
          options: [
            {
              id: "A",
              text: "stopped to use",
              explanationEs:
                "Incorrecto (contiene el error): 'stopped to use' significa interrumpir otra actividad con el propósito de usar solventes clorados; sin embargo, la causa ('because their vapors accelerated...') exige indicar el abandono definitivo de la práctica mediante gerundio: 'stopped using'.",
            },
            {
              id: "B",
              text: "nearly twenty years ago",
              explanationEs:
                "Correcto en la oración: expresión temporal definida de pasado plenamente compatible con el verbo en Past Simple.",
            },
            {
              id: "C",
              text: "because their vapors",
              explanationEs:
                "Correcto en la oración: conjunción causal seguida del determinante posesivo plural 'their', cuyo antecedente inequívoco es 'chlorinated solvents'.",
            },
            {
              id: "D",
              text: "inside sealed display cases",
              explanationEs:
                "Correcto en la oración: frase preposicional locativa con adjetivo participial 'sealed' bien empleado.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Verifica la lógica semántica de 'stop': 'stop + -ing' = cesar o abandonar un hábito/método; 'stop + to-infinitive' = detener la marcha para empezar otra acción.",
        },
        {
          part: "part2_error_identification",
          id: "d06-gram-p2-q09",
          cefrLevel: "B2",
          grammarTopic: "Verbal Complementation After Deterrence Verbs (deter from -ing)",
          sentenceWithMarkedSegments:
            "Steep maritime insurance premiums [A]{did not deter} nineteenth-century industrialists [B]{to finance} transatlantic telegraph cables [C]{despite repeated} mechanical failures [D]{along the ocean floor}.",
          correctedSegment: "from financing",
          options: [
            {
              id: "A",
              text: "did not deter",
              explanationEs:
                "Correcto en la oración: negación auxiliar en Past Simple seguida de la forma base verbal 'deter'.",
            },
            {
              id: "B",
              text: "to finance",
              explanationEs:
                "Incorrecto (contiene el error): el verbo 'deter' exige obligatoriamente la construcción 'deter + objeto + from + gerundio (-ing)', nunca infinitivo con 'to'. Debe corregirse a 'from financing'.",
            },
            {
              id: "C",
              text: "despite repeated",
              explanationEs:
                "Correcto en la oración: la preposición concesiva 'despite' introduce correctamente un sintagma nominal encabezado por el adjetivo 'repeated'.",
            },
            {
              id: "D",
              text: "along the ocean floor",
              explanationEs:
                "Correcto en la oración: complemento preposicional espacial idiomático y preciso.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "En iTEP Part 2, revisa siempre qué sigue al objeto directo de 'deter', 'prevent', 'prohibit', 'discourage' y 'forbid': solo 'forbid' acepta 'to-infinitive'; los otros cuatro exigen 'from + -ing'.",
        },
        {
          part: "part2_error_identification",
          id: "d06-gram-p2-q10",
          cefrLevel: "B2",
          grammarTopic: "Formal Institutional Announcements with 'regret to + Verb'",
          sentenceWithMarkedSegments:
            "The curatorial committee [A]{regrets informing} visiting scholars [B]{that the print room} [C]{will remain closed} throughout November [D]{for climate-control upgrades}.",
          correctedSegment: "regrets to inform",
          options: [
            {
              id: "A",
              text: "regrets informing",
              explanationEs:
                "Incorrecto (contiene el error): 'regrets informing' significa arrepentirse hoy de haber informado algo en el pasado; para comunicar formalmente una mala noticia en el acto mismo del anuncio ('lamenta informar que permanecerá cerrada'), el inglés exige infinitivo: 'regrets to inform'.",
            },
            {
              id: "B",
              text: "that the print room",
              explanationEs:
                "Correcto en la oración: conjunción completiva que introduce la cláusula nominal objeto de comunicación.",
            },
            {
              id: "C",
              text: "will remain closed",
              explanationEs:
                "Correcto en la oración: futuro simple con verbo copulativo 'remain' seguido del adjetivo predicativo 'closed'.",
            },
            {
              id: "D",
              text: "for climate-control upgrades",
              explanationEs:
                "Correcto en la oración: complemento preposicional de motivo con sustantivo compuesto con guion en función atributiva.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Ante verbos de comunicación formal ('inform', 'announce', 'state', 'tell'), 'regret' siempre se construye con infinitivo ('regret to inform / announce'), jamás con '-ing'.",
        },
      ],
    },

    // =========================================================================
    // 2. LISTENING (35 min study / strict single-play simulation)
    // =========================================================================
    listening: {
      skill: "listening",
      cefrLevel: "B2",
      title: "Conservation Lab Logistics, Archival Copyright & Industrial Renaissance Lecture",
      estimatedMinutes: 35,
      timeLimitSeconds: 900,
      focusSummaryEs:
        "Rastrea relaciones de anterioridad y bloqueo operativo ('having scheduled...', 'prevent us from scanning...') en diálogos universitarios, y distingue en la clase magistral de Historia del Arte entre la innovación técnica descrita, la crítica estética de época y la reinterpretación historiográfica posterior.",
      items: [
        {
          part: "part1_short_dialogue",
          id: "d06-list-p1",
          title: "Multispectral Imaging Appointment Delay",
          cefrLevel: "B2",
          audio: {
            trackId: "day06-listening-p1",
            audioUrl: "/audio/day06-listening-p1.mp3",
            contextSetup:
              "A graduate art history student speaks with the coordinator of the university's fine-arts imaging laboratory.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Hi Marcus. Having reserved the infrared reflectography camera for two o'clock, I just stopped by vault three to pick up the eighteenth-century Venetian oil sketch, and it's still bolted inside its gilded exhibition frame.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Lab Coordinator",
                voice: "en-US-GuyNeural",
                text: "Oh, that's an issue. The metallic leaf along the rabbet edge reflects infrared wavelengths back into the lens, which prevents the sensor from capturing the charcoal underdrawing near the margins.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Could I unfasten the backing brackets myself on the worktable?",
                pauseAfterMs: 400,
              },
              {
                speakerLabel: "Lab Coordinator",
                voice: "en-US-GuyNeural",
                text: "Museum insurance rules prohibit anyone except a certified frames technician from unmounting loan pieces, so let me move your camera slot to Thursday morning right after Elena finishes unframing the baroque loans.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d06-list-p1-q01",
              prompt: "Why must the student's imaging session be postponed until Thursday?",
              options: [
                {
                  id: "A",
                  text: "The infrared camera lens is currently undergoing calibration for baroque paintings.",
                  explanationEs:
                    "Incorrecto: la cámara sí estaba reservada y operativa; el obstáculo reside en el marco dorado del boceto al óleo, no en una avería o calibración del equipo.",
                },
                {
                  id: "B",
                  text: "Only an authorized technician may remove the gilded frame that interferes with marginal scans.",
                  explanationEs:
                    "Correcto: el coordinador explica que la hoja metálica del marco impide captar el dibujo subyacente en los bordes y que el seguro prohíbe desmontar obras en préstamo salvo a una técnica certificada (Elena).",
                },
                {
                  id: "C",
                  text: "Vault three remains locked until the museum insurance auditor arrives on Thursday.",
                  explanationEs:
                    "Incorrecto: la estudiante ya pasó por la bóveda tres y vio la obra; no hay ningún cierre de bóveda ni visita de auditor.",
                },
                {
                  id: "D",
                  text: "Infrared wavelengths risk damaging the gilded leaf on eighteenth-century Venetian frames.",
                  explanationEs:
                    "Incorrecto: el dorado refleja la radiación hacia el lente distorsionando la captura marginal, pero no se afirma que el infrarrojo dañe el marco.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "En diálogos breves con vocabulario técnico ('infrared reflectography', 'rabbet edge'), concéntrate en la cadena causal 'qué impide hacer qué' ('prevents X from -ing' / 'prohibit anyone except Y from -ing').",
        },
        {
          part: "part2_conversation",
          id: "d06-list-p2",
          title: "Exhibition Catalog Blueprint Permissions",
          cefrLevel: "B2",
          audio: {
            trackId: "day06-listening-p2",
            audioUrl: "/audio/day06-listening-p2.mp3",
            contextSetup:
              "An undergraduate architectural history student consults her faculty exhibition advisor about reproducing archival illustrations.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Professor Albright, do you have a few minutes to discuss my catalog essay for next month's student exhibition on nineteenth-century industrial architecture?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Certainly, Nadia. Having read your revised draft last night, I thought your comparison between Manchester cotton mills and New England turbine houses was remarkably sharp.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Thank you. The text is ready, but I hit a snag with the three 1874 elevation blueprints I scanned at the County Historical Society. Their rights office emailed me an invoice for four hundred dollars in commercial licensing fees.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Four hundred dollars? Wait—did you mention on the reproduction form that our gallery distributes a printed booklet as well as an open-access PDF?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Yes, I checked the 'print publication' box because we're printing two hundred copies for visitors, and I think that triggered their commercial press tariff automatically.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "That explains it. Because county archives classify external print runs as commercial by default, checking that box prevented your request from qualifying for their academic fee waiver.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Oh, I regret not asking you before submitting the form. Should I drop the blueprints and substitute my own line diagrams instead?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "No, don't sacrifice primary visual evidence—your whole argument about cast-iron window ratios relies on those original plates. Download their non-profit instructional addendum, state clearly that the booklet is distributed free of charge, and bring it to the department chair's office so Dr. Patel can countersign on university letterhead.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Perfect. The printer doesn't lock the page layout until Monday afternoon, so I'll fill out that addendum right now and take it to Dr. Patel before noon.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d06-list-p2-q01",
              prompt: "What problem is Nadia trying to resolve?",
              options: [
                {
                  id: "A",
                  text: "She missed the printer's final layout deadline for the gallery catalog.",
                  explanationEs:
                    "Incorrecto: al final aclara que la imprenta no cierra la maquetación sino hasta el lunes por la tarde.",
                },
                {
                  id: "B",
                  text: "She was billed an unexpected commercial licensing fee to reproduce historic blueprints.",
                  explanationEs:
                    "Correcto: Nadia explica que el texto está listo, pero la Sociedad Histórica del Condado le envió una factura de 400 dólares por tarifas comerciales sobre tres planos de 1874.",
                },
                {
                  id: "C",
                  text: "Professor Albright asked her to rewrite her comparison of cotton mills and turbine houses.",
                  explanationEs:
                    "Incorrecto: el profesor elogia esa comparación calificándola de 'remarkably sharp'.",
                },
                {
                  id: "D",
                  text: "The County Historical Society refused to let undergraduates scan nineteenth-century documents.",
                  explanationEs:
                    "Incorrecto: ella ya escaneó los tres planos ('the three 1874 elevation blueprints I scanned'); el obstáculo es la tarifa de publicación.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d06-list-p2-q02",
              prompt:
                "According to Professor Albright, why did the archive classify Nadia's request as commercial?",
              options: [
                {
                  id: "A",
                  text: "The university gallery charges visitors an admission fee to receive the booklet.",
                  explanationEs:
                    "Incorrecto: el profesor subraya explícitamente que el folleto se distribuye sin costo alguno ('distributed free of charge').",
                },
                {
                  id: "B",
                  text: "Open-access PDFs violate the archive's digital preservation policies.",
                  explanationEs:
                    "Incorrecto: el disparador automático fue marcar la casilla de tiraje impreso ('print publication'), no el PDF.",
                },
                {
                  id: "C",
                  text: "Selecting the print-publication option automatically places external print runs in a commercial tier.",
                  explanationEs:
                    "Correcto: el profesor señala que los archivos del condado clasifican por defecto cualquier tiraje impreso externo como comercial, lo que impidió acceder a la exención académica.",
                },
                {
                  id: "D",
                  text: "Nadia forgot to list Professor Albright's name on her initial reproduction form.",
                  explanationEs:
                    "Incorrecto: la causa fue marcar la casilla de publicación impresa sin adjuntar el anexo de uso educativo sin fines de lucro.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d06-list-p2-q03",
              prompt:
                "Why does Professor Albright discourage Nadia from replacing the blueprints with her own diagrams?",
              options: [
                {
                  id: "A",
                  text: "Hand-drawn diagrams take too long to format before Monday's printing deadline.",
                  explanationEs:
                    "Incorrecto: su objeción no es de tiempo de diseño, sino de rigor probatorio visual.",
                },
                {
                  id: "B",
                  text: "The exhibition rules require every student essay to include exactly three archival scans.",
                  explanationEs:
                    "Incorrecto: no se menciona ninguna cuota reglamentaria de tres escaneos por ensayo.",
                },
                {
                  id: "C",
                  text: "Her analytical argument about cast-iron window proportions depends on the original 1874 plates.",
                  explanationEs:
                    "Correcto: le pide no sacrificar evidencia visual primaria porque todo su argumento sobre las proporciones de ventanas de hierro fundido se apoya en esas láminas originales.",
                },
                {
                  id: "D",
                  text: "The department has already allocated grant funds to pay the four-hundred-dollar invoice.",
                  explanationEs:
                    "Incorrecto: en lugar de pagar la factura, le indica tramitar la exención académica sin costo.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d06-list-p2-q04",
              prompt: "What does Professor Albright instruct Nadia to obtain from Dr. Patel?",
              options: [
                {
                  id: "A",
                  text: "A countersignature on university letterhead verifying non-profit gratis distribution",
                  explanationEs:
                    "Correcto: debe completar el anexo educativo sin fines de lucro aclarando la distribución gratuita y llevarlo a la oficina de la jefatura departamental para la contrafirma de la Dra. Patel en papel membretado.",
                },
                {
                  id: "B",
                  text: "Written permission to postpone the printer's Monday afternoon deadline",
                  explanationEs:
                    "Incorrecto: Nadia afirma que le da tiempo de sobra antes del cierre del lunes por la tarde.",
                },
                {
                  id: "C",
                  text: "A departmental reimbursement check made payable to the County Historical Society",
                  explanationEs:
                    "Incorrecto: el trámite busca obtener la exención de pago ('fee waiver'), no emitir un cheque.",
                },
                {
                  id: "D",
                  text: "Approval to publish her essay exclusively as an online PDF without printed copies",
                  explanationEs:
                    "Incorrecto: mantendrán los doscientos ejemplares impresos gratuitos acreditando su carácter no comercial.",
                },
              ],
              correctOptionId: "A",
            },
          ],
          keyTakeawayEs:
            "Cuando un estudiante propone una salida fácil ('Should I drop the blueprints...?'), escucha con atención el 'No' del profesor: ahí aparece tanto la justificación académica como el procedimiento administrativo exacto.",
        },
        {
          part: "part3_lecture",
          id: "d06-list-p3",
          title:
            "Art & Architectural History: The 1851 Crystal Palace and the Industrial Renaissance Debate",
          cefrLevel: "B2",
          audio: {
            trackId: "day06-listening-p3",
            audioUrl: "/audio/day06-listening-p3.mp3",
            contextSetup:
              "An art history professor lectures on nineteenth-century industrial architecture and Victorian aesthetic criticism.",
            turns: [
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Good afternoon. Today we turn to what historians often call the Industrial Renaissance of the mid-nineteenth century—a moment when mass-produced cast iron and cylinder sheet glass began challenging centuries of masonry-based architectural aesthetics.",
                pauseAfterMs: 700,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "No building crystallized that rupture more dramatically than Joseph Paxton's Crystal Palace, erected in London's Hyde Park for the Great Exhibition of 1851. Having honed lightweight ridge-and-furrow glazing techniques while designing aristocratic botanical conservatories, Paxton conceived an exhibition hall nearly six hundred meters long that relied on standardized, factory-cast iron columns and modular wooden sash bars.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Because Birmingham foundries and glassworks fabricated every girder and pane off-site to uniform tolerances, construction crews bolted the entire three-story frame together in under nine months. Inside, visitors encountered something unprecedented: instead of thick stone walls pierced by narrow windows, slender iron supports dissolved spatial boundaries and flooded the interior with shadowless daylight.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Yet this triumph of prefabrication provoked fierce aesthetic resistance, led most memorably by art critic John Ruskin. Ruskin did not deny Paxton's engineering ingenuity; rather, he argued that true architecture differed fundamentally from mere building or greenhouse assembly. Having studied medieval Venetian stone carvers, Ruskin maintained that artistic value arose from imperfect human handiwork, whereas casting identical iron ornaments in industrial molds severed creative thought from physical labor.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Ironically, many commercial architects of the 1860s tried to appease critics like Ruskin by disguising iron train-shed frames behind neo-Gothic stone facades or bolting machine-pressed acanthus leaves onto structural columns—a compromise that pleased almost nobody.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Twentieth-century modernist historians later reevaluated this debate from an entirely new angle. Scholars such as Sigfried Giedion contended that nineteenth-century engineers—precisely where utilitarian budgets prevented them from adding historicist stone cladding—had inadvertently pioneered modernist structural honesty, proving that exposed skeleton framing and industrial transparency possessed a coherent aesthetic language of their own.",
                pauseAfterMs: 650,
              },
            ],
          },
          questions: [
            {
              id: "d06-list-p3-q01",
              prompt: "What is the main topic of the lecture?",
              options: [
                {
                  id: "A",
                  text: "How Victorian botanical gardens imported rare tropical species during the 1851 Great Exhibition",
                  explanationEs:
                    "Incorrecto: los invernaderos botánicos se mencionan brevemente como antecedente técnico de Paxton, no como tema central de la clase.",
                },
                {
                  id: "B",
                  text: "How prefabricated iron-and-glass construction reshaped architectural space, provoked Victorian criticism, and anticipated modernist theory",
                  explanationEs:
                    "Correcto: recoge los tres movimientos de la conferencia: la revolución prefabricada del Crystal Palace, la objeción artesanal de John Ruskin y la reinterpretación modernista del siglo XX.",
                },
                {
                  id: "C",
                  text: "Why nineteenth-century Birmingham foundries failed to compete with traditional Venetian stone quarries",
                  explanationEs:
                    "Incorrecto: las fundiciones de Birmingham produjeron con éxito piezas estandarizadas; Venecia aparece solo en los estudios medievales de Ruskin.",
                },
                {
                  id: "D",
                  text: "Why the Crystal Palace collapsed less than nine months after opening in Hyde Park",
                  explanationEs:
                    "Incorrecto: nueve meses fue el tiempo récord de ensamblaje ('in under nine months'), jamás un colapso.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d06-list-p3-q02",
              prompt:
                "How did Joseph Paxton's prior career prepare him to design the Crystal Palace?",
              options: [
                {
                  id: "A",
                  text: "He had developed lightweight modular glazing systems while building large botanical conservatories.",
                  explanationEs:
                    "Correcto: la profesora explica mediante participio perfecto ('Having honed lightweight ridge-and-furrow glazing techniques while designing aristocratic botanical conservatories...') el origen directo de su método estructural.",
                },
                {
                  id: "B",
                  text: "He had apprenticed with medieval stone restorers in Venice alongside John Ruskin.",
                  explanationEs:
                    "Incorrecto: quien estudió a los talladores medievales venecianos fue el crítico John Ruskin, no Paxton.",
                },
                {
                  id: "C",
                  text: "He had managed a Birmingham iron foundry that manufactured railway bridges.",
                  explanationEs:
                    "Incorrecto: las fundiciones de Birmingham fabricaron las piezas fuera del sitio, pero Paxton provenía del diseño de invernaderos.",
                },
                {
                  id: "D",
                  text: "He had designed neo-Gothic stone facades for London railway terminals in the 1840s.",
                  explanationEs:
                    "Incorrecto: las fachadas neogóticas frente a cobertizos ferroviarios fueron un compromiso posterior de arquitectos comerciales en la década de 1860.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d06-list-p3-q03",
              prompt:
                "What enabled workers to assemble the Crystal Palace in less than nine months?",
              options: [
                {
                  id: "A",
                  text: "Eliminating upper floors so the exhibition occupied a single ground-level pavilion",
                  explanationEs:
                    "Incorrecto: el audio especifica explícitamente que era una estructura de tres niveles ('the entire three-story frame').",
                },
                {
                  id: "B",
                  text: "Off-site factory production of standardized girders and glass panes to uniform dimensions",
                  explanationEs:
                    "Correcto: dado que fundiciones y vidrierías fabricaron cada viga y panel fuera de obra con tolerancias uniformes, las cuadrillas pudieron atornillar el armazón rápidamente.",
                },
                {
                  id: "C",
                  text: "Reusing load-bearing stone walls from an earlier royal pavilion in Hyde Park",
                  explanationEs:
                    "Incorrecto: el edificio prescindió precisamente de gruesos muros de piedra ('instead of thick stone walls').",
                },
                {
                  id: "D",
                  text: "Replacing bolted metal joints with fast-drying hydraulic concrete",
                  explanationEs:
                    "Incorrecto: las cuadrillas ensamblaron el armazón con pernos ('bolted the entire three-story frame together'), sin mención de hormigón hidráulico.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d06-list-p3-q04",
              prompt:
                "On what grounds did John Ruskin criticize industrial iron-and-glass structures?",
              options: [
                {
                  id: "A",
                  text: "He believed slender cast-iron columns could not safely support three-story public crowds.",
                  explanationEs:
                    "Incorrecto: la profesora aclara que Ruskin no negó el ingenio técnico ('did not deny Paxton's engineering ingenuity'), sino su estatuto artístico.",
                },
                {
                  id: "B",
                  text: "He argued that shadowless daylight damaged oil paintings exhibited inside the hall.",
                  explanationEs:
                    "Incorrecto: no se menciona ningún daño lumínico a pinturas en la crítica de Ruskin.",
                },
                {
                  id: "C",
                  text: "He contended that machine-cast repetition divorced manual craftsmanship from authentic artistic expression.",
                  explanationEs:
                    "Correcto: para Ruskin el valor arquitectónico nacía del trabajo manual humano e imperfecto, mientras que fundir ornamentos idénticos en moldes industriales separaba pensamiento creativo y trabajo físico.",
                },
                {
                  id: "D",
                  text: "He preferred unadorned utilitarian iron bridges over Venetian Gothic stone carving.",
                  explanationEs:
                    "Incorrecto: invierte por completo la postura de Ruskin, quien admiraba la talla manual veneciana.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d06-list-p3-q05",
              prompt:
                "What is the professor's attitude toward 1860s railway stations that hid iron sheds behind neo-Gothic stone facades?",
              options: [
                {
                  id: "A",
                  text: "Dismissive of them as an unsatisfying compromise between engineering reality and historicist ornament",
                  explanationEs:
                    "Correcto: señala con ironía crítica ('Ironically... a compromise that pleased almost nobody') que ocultar estructuras de hierro tras piedra neogótica o follaje prensado resultó fallido.",
                },
                {
                  id: "B",
                  text: "Admiring of how harmoniously they reconciled Ruskin's ideals with Sigfried Giedion's theories",
                  explanationEs:
                    "Incorrecto: afirma explícitamente que ese compromiso no satisfizo casi a nadie ('pleased almost nobody').",
                },
                {
                  id: "C",
                  text: "Surprised that Victorian railway companies could afford imported Venetian marble",
                  explanationEs:
                    "Incorrecto: no se menciona mármol veneciano importado en las estaciones ferroviarias.",
                },
                {
                  id: "D",
                  text: "Convinced that stone facades were structurally necessary to prevent iron frames from buckling",
                  explanationEs:
                    "Incorrecto: las fachadas neogóticas se añadieron para disfrazar ('disguising') el hierro y apaciguar críticas estéticas, no por necesidad estructural.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d06-list-p3-q06",
              prompt:
                "According to Sigfried Giedion, why did utilitarian nineteenth-century engineers become inadvertent pioneers of modernism?",
              options: [
                {
                  id: "A",
                  text: "They published theoretical manifestos calling for the abolition of stone churches.",
                  explanationEs:
                    "Incorrecto: la profesora usa 'inadvertently' (inadvertidamente), indicando que no buscaban fundar un movimiento teórico.",
                },
                {
                  id: "B",
                  text: "Budgetary constraints prevented them from concealing exposed structural skeletons behind historicist cladding.",
                  explanationEs:
                    "Correcto: exactamente donde los presupuestos utilitarios les impidieron añadir revestimientos historicistas de piedra, dejaron expuesto el esqueleto estructural y revelaron una estética propia de honestidad constructiva.",
                },
                {
                  id: "C",
                  text: "They collaborated directly with twentieth-century glassmakers to rebuild the Crystal Palace.",
                  explanationEs:
                    "Incorrecto: Giedion fue un historiador del siglo XX que reevaluó retrospectivamente obras del XIX.",
                },
                {
                  id: "D",
                  text: "They replaced cast iron with hand-carved timber trusses in industrial warehouses.",
                  explanationEs:
                    "Incorrecto: su aporte modernista consistió precisamente en el armazón metálico expuesto y la transparencia industrial.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "Observa cómo la gramática del Día 6 estructura el discurso académico real: 'Having honed...', 'Having studied...' y 'prevented them from adding...' marcan causas previas y restricciones decisivas en preguntas de inferencia.",
        },
      ],
    },

    // =========================================================================
    // 3. READING (35 min study / 20 min official pace for Part 1 + Part 2)
    // =========================================================================
    reading: {
      skill: "reading",
      cefrLevel: "B2",
      title: "Post-Industrial Adaptive Reuse & The Material Chemistry of Impressionism",
      estimatedMinutes: 35,
      timeLimitSeconds: 1200,
      focusSummaryEs:
        "En preguntas de propósito retórico ('Why does the author mention X?'), no busques qué es X literalmente, sino qué función argumentativa cumple dentro de su párrafo (refutar determinismo tecnológico, ilustrar una restricción física o matizar una generalización). En 'Sentence Insertion', rastrea sintagmas nominales demostrativos ('those embedded particulates').",
      passages: [
        {
          part: "part1_intermediate",
          id: "d06-read-p1",
          title: "Microclimatic Engineering in Adaptive Industrial Heritage",
          cefrLevel: "B2",
          topicDomain: "Architectural Conservation & Urban Heritage",
          paragraphs: [
            "Across port cities in North America and Western Europe, municipal planners have increasingly favored adaptive reuse over demolition when confronting obsolete nineteenth-century waterfront warehouses. Constructed from load-bearing brick masonry and heavy timber joists, these industrial structures were originally engineered to support immense cargo loads, making their structural shells exceptionally durable. Having stood vacant for decades following the shift toward containerized deep-water terminals, dozens of former grain silos and maritime depots now house public libraries, conservation studios, and university design laboratories.",
            "Converting uninsulated industrial shells into climate-controlled cultural venues, however, entails complex hygrothermal trade-offs. Curatorial standards for fine-art galleries require stable relative humidity, yet applying impermeable interior vapor barriers can trap moisture inside historic brickwork and accelerate freeze-thaw spalling during winter months. To prevent condensation from migrating into exhibition halls without sealing off breathable masonry facades, conservation architects increasingly insert freestanding timber-and-glass pavilions—often termed 'box-in-box' enclosures—within the existing warehouse volume, leaving a ventilated thermal buffer zone along the perimeter walls.",
            "Beyond resolving microclimatic constraints, this reversible strategy satisfies international heritage charters that discourage architects from altering historic load-bearing fabric permanently. Visitors circulating through the perimeter walkways remain visually aware of rough-hewn ceiling trusses, cast-iron tie rods, and hoist pulleys overhead, preserving tangible evidence of maritime labor history. Adaptive reuse thus suggests that safeguarding industrial memory need not mean sacrificing modern environmental performance, provided designers treat historic material constraints as catalysts for spatial invention rather than obstacles to erase.",
          ],
          questions: [
            {
              id: "d06-read-p1-q01",
              questionType: "main_idea",
              prompt: "What is the central focus of the passage?",
              options: [
                {
                  id: "A",
                  text: "Why containerized deep-water terminals rendered nineteenth-century brick warehouses structurally unsafe",
                  explanationEs:
                    "Incorrecto: contradice el párrafo 1, que afirma que sus cascos estructurales son excepcionalmente duraderos ('exceptionally durable') pese a haber quedado obsoletos logísticamente.",
                },
                {
                  id: "B",
                  text: "How architectural 'box-in-box' interventions reconcile museum climate control with the material preservation of historic industrial buildings",
                  explanationEs:
                    "Correcto: integra la tendencia de reutilización adaptativa (P1), el dilema higrotérmico resuelto mediante pabellones internos reversibles (P2) y el valor patrimonial resultante (P3).",
                },
                {
                  id: "C",
                  text: "Why international heritage charters prohibit public libraries from occupying former maritime grain silos",
                  explanationEs:
                    "Incorrecto: el párrafo 1 menciona bibliotecas públicas como ejemplo exitoso de reutilización, y las cartas patrimoniales solo desaconsejan alteraciones irreversibles.",
                },
                {
                  id: "D",
                  text: "How impermeable interior vapor barriers extend the lifespan of historic brickwork in cold climates",
                  explanationEs:
                    "Incorrecto: el párrafo 2 advierte exactamente lo opuesto: las barreras impermeables atrapan humedad y aceleran el desprendimiento por hielo-deshielo ('freeze-thaw spalling').",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d06-read-p1-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'entails' in paragraph 2 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "involves as a necessary consequence",
                  explanationEs:
                    "Correcto: 'Converting uninsulated industrial shells ... entails complex hygrothermal trade-offs' equivale semánticamente a 'means dealing with / involves necessarily' (implica o conlleva).",
                },
                {
                  id: "B",
                  text: "eliminates through automation",
                  explanationEs:
                    "Incorrecto: los compromisos higrotérmicos son el desafío que surge al reconvertir el edificio, no algo eliminado automáticamente.",
                },
                {
                  id: "C",
                  text: "postpones indefinitely",
                  explanationEs:
                    "Incorrecto: los arquitectos deben resolver estos equilibrios térmicos de inmediato para alojar galerías climatizadas.",
                },
                {
                  id: "D",
                  text: "restricts legally",
                  explanationEs:
                    "Incorrecto: confunde el sentido jurídico arcaico de 'entail' en derecho sucesorio con su uso académico habitual de implicación necesaria.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d06-read-p1-q03",
              questionType: "rhetorical_purpose",
              prompt:
                "Why does the author mention 'rough-hewn ceiling trusses, cast-iron tie rods, and hoist pulleys' in paragraph 3?",
              options: [
                {
                  id: "A",
                  text: "To list hazardous mechanical fixtures that must be dismantled before visitors enter the building",
                  explanationEs:
                    "Incorrecto: estos elementos permanecen a la vista de los visitantes ('remain visually aware of...') en lugar de desmantelarse.",
                },
                {
                  id: "B",
                  text: "To illustrate how keeping the perimeter shell exposed preserves visible links to the building's industrial past",
                  explanationEs:
                    "Correcto: ejemplifica de manera concreta cómo el corredor perimetral permite conservar evidencia tangible de la historia del trabajo marítimo sin ocultarla tras muros falsos.",
                },
                {
                  id: "C",
                  text: "To explain why timber joists are weaker than modern steel beams in museum construction",
                  explanationEs:
                    "Incorrecto: en ningún punto se cuestiona la resistencia mecánica de las cerchas o tirantes originales.",
                },
                {
                  id: "D",
                  text: "To argue that maritime warehouses are better suited for machinery storage than for fine-art galleries",
                  explanationEs:
                    "Incorrecto: contradice la tesis favorable del autor hacia la adaptación cultural mediante recintos reversibles.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d06-read-p1-q04",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraphs 2 and 3 about 'box-in-box' architectural enclosures?",
              options: [
                {
                  id: "A",
                  text: "They could be removed in the future without destroying the warehouse's original brick walls.",
                  explanationEs:
                    "Correcto: al describirse como pabellones autoportantes ('freestanding') y calificarse en el párrafo 3 como estrategia reversible ('this reversible strategy') que evita alterar permanentemente la fábrica portante, se infiere que podrían desmontarse dejando intacta la mampostería histórica.",
                },
                {
                  id: "B",
                  text: "They maintain identical humidity levels inside the exhibition pavilion and the perimeter buffer zone.",
                  explanationEs:
                    "Incorrecto: el objetivo mismo del recinto independiente es aislar la galería climatizada dejando una zona perimetral ventilada de amortiguación térmica.",
                },
                {
                  id: "C",
                  text: "They completely block visitors from seeing the warehouse's exterior masonry walls.",
                  explanationEs:
                    "Incorrecto: al ser de madera y vidrio ('timber-and-glass pavilions') con pasillos perimetrales, mantienen la percepción visual de la estructura histórica.",
                },
                {
                  id: "D",
                  text: "They are required only in tropical ports where winter freezing never occurs.",
                  explanationEs:
                    "Incorrecto: el párrafo 2 destaca precisamente su utilidad frente al daño invernal por hielo y deshielo ('freeze-thaw spalling during winter months').",
                },
              ],
              correctOptionId: "A",
            },
          ],
        },
        {
          part: "part2_academic",
          id: "d06-read-p2",
          title: "Synthetic Chemistry, Collapsible Paint Tubes, and Impressionist Practice",
          cefrLevel: "B2",
          topicDomain: "Art History & History of Industrial Chemistry",
          paragraphs: [
            "Popular accounts of nineteenth-century French Impressionism frequently attribute the movement's luminous outdoor palette almost exclusively to sudden breakthroughs in industrial manufacturing. Prior to the 1840s, European landscape painters ground mineral earths manually on stone slabs with linseed oil and stored mixed pigments inside punctured animal bladders, which oxidized rapidly once pierced and occasionally ruptured during rural excursions. Having patented the collapsible tin paint tube with a resealable screw cap in 1841, American portraitist John Goffe Rand enabled artists to transport dozens of pre-mixed oil colors into forests, river valleys, and coastal villages without risking premature skinning, ostensibly liberating landscape painting from studio routines overnight.",
            "Concurrently, advances in metallurgical and coal-tar chemistry transformed the chromatic spectrum available to nineteenth-century colorists. Industrial laboratories synthesized cobalt blue, emerald viridian, cadmium yellow, and artificial French ultramarine—pigments whose high tinting strength, chemical stability, and opacity contrasted sharply with the muted earth ochres and umbers of traditional academic workshops. Equipped with lightweight folding box easels, parasols, and factory-milled paints stabilized with beeswax, Claude Monet, Auguste Renoir, and Camille Pissarro juxtaposed unblended strokes of complementary hues directly onto pale primed canvases rather than building gradual chiaroscuro glazes over dark brown grounds. Art historians long cited these twin innovations—metallic packaging and synthetic pigments—to explain how Impressionists captured fleeting atmospheric light along the Seine.",
            "Yet technical conservation studies of surviving canvases caution against reducing stylistic revolution to straightforward technological determinism. [A] Decades before tin tubes reached Parisian color merchants, painters associated with the Barbizon school regularly executed rapid oil sketches outdoors using improvised glass syringes and bladder pouches, demonstrating that portable containers facilitated rather than originated plein-air observation. [B] Furthermore, cross-sectional microscopy of canonical Impressionist landscapes reveals dried dust particles and studio varnish droplets trapped beneath upper brushwork layers. [C] Far from completing instantaneous retinal impressions in a single outdoor session, Monet routinely set riverbank canvases aside for weeks and reworked sky passages inside his Giverny studio to harmonize chromatic contrasts across multi-canvas exhibition series. [D]",
            "Recognizing this interplay between material tools and artistic agency yields a more nuanced account of nineteenth-century modernism. Collapsible tin tubes and synthetic pigments unquestionably lowered the logistical barriers to painting outside and expanded chromatic intensity, yet hardware alone could not dictate aesthetic innovation; conservative salon painters purchased identical factory-ground colors from the very same Parisian suppliers while continuing to produce smooth mythological tableaux indoors. Ultimately, Impressionism emerged not as an automatic byproduct of industrial chemistry, but through artists consciously repurposing commercial inventions to challenge institutional conventions of surface finish, narrative subject matter, temporality, and visual perception.",
          ],
          questions: [
            {
              id: "d06-read-p2-q01",
              questionType: "detail",
              prompt:
                "According to paragraph 1, what disadvantage did animal-bladder pigment containers pose for pre-1840s landscape painters?",
              options: [
                {
                  id: "A",
                  text: "They chemically altered synthetic blues into muted brown umbers when exposed to sunlight.",
                  explanationEs:
                    "Incorrecto: los pigmentos sintéticos y tierras pardas se contrastan en el párrafo 2; las vejigas animales presentaban problemas físicos de oxidación y rotura.",
                },
                {
                  id: "B",
                  text: "Once punctured for use, they could not be resealed effectively, causing oil paint to dry out or spill.",
                  explanationEs:
                    "Correcto: el párrafo 1 señala que las vejigas animales perforadas se oxidaban rápidamente tras abrirse ('oxidized rapidly once pierced') y a veces reventaban en excursiones rurales, a diferencia del tapón de rosca resellable de Rand.",
                },
                {
                  id: "C",
                  text: "French customs statutes prohibited artists from carrying animal bladders onto passenger trains.",
                  explanationEs:
                    "Incorrecto: no existe referencia alguna a regulaciones ferroviarias o aduaneras en el texto.",
                },
                {
                  id: "D",
                  text: "They could hold only water-soluble pigments rather than pigments ground with linseed oil.",
                  explanationEs:
                    "Incorrecto: el texto afirma explícitamente que los pintores molían tierras minerales con aceite de linaza ('with linseed oil') y las guardaban en esas vejigas.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d06-read-p2-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'ostensibly' in paragraph 1 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "apparently, though not entirely so in reality",
                  explanationEs:
                    "Correcto: adverbio clásico de atenuación crítica ('hedging'); anticipa que la idea popular de que el tubo de estaño liberó la pintura de la noche a la mañana parece cierta en superficie, pero será matizada en el párrafo 3.",
                },
                {
                  id: "B",
                  text: "permanently and irreversibly",
                  explanationEs:
                    "Incorrecto: contradice el giro escéptico del párrafo 3, donde se demuestra que los impresionistas siguieron trabajando intensamente en el taller.",
                },
                {
                  id: "C",
                  text: "reluctantly and accidentally",
                  explanationEs:
                    "Incorrecto: Rand patentó deliberadamente el tubo plegable con tapón de rosca; 'ostensibly' califica la aparente consecuencia histórica, no renuencia.",
                },
                {
                  id: "D",
                  text: "exclusively for portrait painters",
                  explanationEs:
                    "Incorrecto: aunque Rand era retratista, el texto indica que la invención permitió transportar colores a bosques y pueblos costeros.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d06-read-p2-q03",
              questionType: "rhetorical_purpose",
              prompt:
                "Why does the author mention 'painters associated with the Barbizon school' in paragraph 3?",
              options: [
                {
                  id: "A",
                  text: "To identify the first group of French artists who invested financially in John Goffe Rand's patent",
                  explanationEs:
                    "Incorrecto: el texto indica que pintaban al aire libre décadas ANTES de que los tubos de estaño llegaran a los comerciantes parisinos.",
                },
                {
                  id: "B",
                  text: "To refute the claim that outdoor oil sketching could not occur prior to the invention of collapsible tin tubes",
                  explanationEs:
                    "Correcto: cumple el propósito retórico de refutar el determinismo tecnológico mostrando que ya se ejecutaban bocetos al óleo al aire libre con jeringas de vidrio y bolsas, por lo que el tubo facilitó pero no originó la práctica.",
                },
                {
                  id: "C",
                  text: "To contrast their preference for dark brown studio glazes with Monet's pale primed canvases",
                  explanationEs:
                    "Incorrecto: las veladuras oscuras corresponden a los talleres académicos mencionados en el párrafo 2, no al ejemplo de Barbizon en el párrafo 3.",
                },
                {
                  id: "D",
                  text: "To explain why cross-sectional microscopy damages early nineteenth-century landscape sketches",
                  explanationEs:
                    "Incorrecto: la microscopía transversal se introduce en la oración siguiente como herramienta analítica de conservación, no como causa de daño.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d06-read-p2-q04",
              questionType: "sentence_insertion",
              prompt:
                "Look at the four squares [A], [B], [C], and [D] in paragraph 3. Where would the following sentence best fit?",
              sentenceToInsert:
                "For conservators, those embedded particulates provide unmistakable proof that substantial painting occurred indoors long after the initial excursion ended.",
              options: [
                {
                  id: "A",
                  text: "[A]",
                  explanationEs:
                    "Incorrecto: antes de `[A]` solo aparece la oración temática sobre determinismo tecnológico; aún no existe antecedente alguno para 'those embedded particulates'.",
                },
                {
                  id: "B",
                  text: "[B]",
                  explanationEs:
                    "Incorrecto: la oración previa a `[B]` trata sobre jeringas de vidrio y bolsas de la escuela de Barbizon, sin mencionar partículas incrustadas bajo capas pictóricas.",
                },
                {
                  id: "C",
                  text: "[C]",
                  explanationEs:
                    "Correcto: 'those embedded particulates' retoma cohesivamente 'dried dust particles and studio varnish droplets trapped beneath upper brushwork layers' de la oración anterior, y 'substantial painting occurred indoors' enlaza directamente con el ejemplo posterior de Monet retocando cielos en su estudio de Giverny.",
                },
                {
                  id: "D",
                  text: "[D]",
                  explanationEs:
                    "Incorrecto: colocarla en `[D]` rompería el vínculo anafórico inmediato con las partículas de polvo y barniz y repetiría de forma redundante lo ya ejemplificado con el estudio de Giverny.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d06-read-p2-q05",
              questionType: "rhetorical_purpose",
              prompt: "Why does the author refer to 'conservative salon painters' in paragraph 4?",
              options: [
                {
                  id: "A",
                  text: "To demonstrate that access to identical industrial materials did not automatically compel artists to adopt Impressionist techniques",
                  explanationEs:
                    "Correcto: respalda la tesis de que el material por sí solo no dicta el estilo ('hardware alone could not dictate aesthetic innovation'), pues los pintores académicos compraban los mismos colores industriales y seguían pintando escenas mitológicas lisas en interior.",
                },
                {
                  id: "B",
                  text: "To show that synthetic pigments were too expensive for independent artists outside official academies",
                  explanationEs:
                    "Incorrecto: tanto los impresionistas como los pintores de salón adquirían esos pigmentos molidos en fábrica.",
                },
                {
                  id: "C",
                  text: "To argue that mythological tableaux required higher tinting strength than riverbank landscapes",
                  explanationEs:
                    "Incorrecto: el contraste radica en el acabado liso tradicional frente a las pinceladas yuxtapuestas impresionistas, no en una mayor exigencia cromática mitológica.",
                },
                {
                  id: "D",
                  text: "To suggest that Monet eventually abandoned outdoor sketching to compete in academic salons",
                  explanationEs:
                    "Incorrecto: Monet retocaba series en su estudio para armonizar contrastes cromáticos, no para volver a cuadros mitológicos de salón.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d06-read-p2-q06",
              questionType: "synthesis",
              prompt:
                "Which statement best summarizes the author's overall argument regarding industrial technology and Impressionism?",
              options: [
                {
                  id: "A",
                  text: "Synthetic pigments and collapsible tubes had virtually no influence on Impressionism because artists painted primarily inside their studios.",
                  explanationEs:
                    "Incorrecto: distorsión extrema; el párrafo 4 reconoce expresamente que tubos y pigmentos redujeron sin duda las barreras logísticas y ampliaron la intensidad cromática.",
                },
                {
                  id: "B",
                  text: "While industrial chemistry and portable packaging expanded technical possibilities, Impressionism ultimately depended on deliberate artistic choices both outdoors and in the studio.",
                  explanationEs:
                    "Correcto: sintetiza con exactitud la tesis matizada del texto: las invenciones comerciales facilitaron el cambio material, pero la innovación surgió de la agencia artística consciente y el trabajo combinado de campo y estudio.",
                },
                {
                  id: "C",
                  text: "John Goffe Rand's 1841 patent forced nineteenth-century French academies to abandon chiaroscuro glazing overnight.",
                  explanationEs:
                    "Incorrecto: el autor refuta esa narrativa simplista ('ostensibly... overnight') y señala que los pintores de salón continuaron con su estilo tradicional.",
                },
                {
                  id: "D",
                  text: "Barbizon painters should be credited as the sole inventors of synthetic French ultramarine and viridian.",
                  explanationEs:
                    "Incorrecto: esos pigmentos fueron sintetizados por laboratorios químicos industriales, no por los pintores de Barbizon.",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
      ],
    },

    // =========================================================================
    // 4. WRITING (30 min study / 25 min official timer — Academic Hedging Focus)
    // =========================================================================
    writing: {
      skill: "writing",
      cefrLevel: "B2",
      title: "Archival Research Contingency & Industrial Heritage Hedged Essay",
      estimatedMinutes: 30,
      timeLimitSeconds: 1500,
      focusSummaryEs:
        "Domina el 'academic hedging' (atenuación epistémica): los evaluadores de iTEP penalizan afirmaciones absolutas e ingenuas ('Demolishing old factories always destroys culture'). Sustitúyelas por verbos modales y léxicos matizados ('tends to erode', 'appears to overlook', 'may prevent cities from preserving') combinados con cláusulas participiales bien ancladas al sujeto.",
      tasks: [
        {
          part: "part1_note",
          id: "d06-writ-p1",
          cefrLevel: "B2",
          title: "Substituting Primary Sources Due to Conservation Rebinding",
          prompt:
            "You are writing a research paper for Professor Takahashi's Industrial History seminar. Upon visiting the municipal archive today, you learned that the nineteenth-century factory wage ledgers you planned to analyze are unavailable due to conservation work. Write a formal note to Professor Takahashi in which you: (1) explain why the ledgers cannot be consulted, (2) propose an alternative archival source you found on-site, and (3) politely ask whether this substitution would satisfy the seminar's primary-source rubric.",
          timeLimitSeconds: 300,
          minWords: 50,
          maxWords: 75,
          strategyGuideEs:
            "Abre con un participio perfecto bien alineado ('Having visited the municipal archive...') cuyo sujeto sea 'I'. Incluye un verbo de complemento con 'from + -ing' ('prevented me from examining...') y formula la consulta final con atenuación cortés ('whether analyzing ... would satisfy').",
          recommendedConnectors: [
            "Having visited",
            "prevented me from",
            "instead",
            "whether this substitution would",
          ],
          b2RubricChecklistEs: [
            "Cubre los 3 puntos requeridos (motivo de conservación, fuente primaria alternativa concreta y consulta sobre la rúbrica).",
            "Respeta estrictamente el margen de 50 a 75 palabras en tono académico deferente.",
            "Usa una cláusula participial inicial cuyo sujeto gramatical tras la coma sea 'I' (cero modificadores colgantes).",
            "Emplea atenuación modal ('would satisfy' / 'might fulfill') e indirecta con 'whether' sin inversión interrogativa.",
          ],
          modelAnswerB2:
            "Dear Professor Takahashi, Having visited the municipal archive this morning, I learned that ongoing spine conservation prevented me from consulting the 1880s textile factory wage ledgers. Instead, the archivist located digitized fire-insurance maps and inspector reports documenting the same mill complex. Could you let me know whether analyzing those records would appear to satisfy our seminar's primary-source requirement? Sincerely, Mateo Silva",
        },
        {
          part: "part2_essay",
          id: "d06-writ-p2",
          cefrLevel: "B2",
          title: "Demolishing vs. Adapting Obsolete Industrial Landmarks",
          prompt:
            "Many growing cities contain large, vacant nineteenth- or early twentieth-century industrial structures, such as former textile mills, power stations, and waterfront warehouses. Some urban planners argue that municipalities should demolish these aging structures to build modern high-density housing quickly. Others contend that cities should preserve and adapt historic industrial buildings into public cultural or mixed-use spaces. Which approach do you support? Justify your stance with specific reasons and measured academic reasoning.",
          timeLimitSeconds: 1200,
          minWords: 175,
          maxWords: 225,
          strategyGuideEs:
            "Practica deliberadamente el 'academic hedging' B2 en cada párrafo: evita 'always/never/everybody' y emplea 'tend to', 'may overlook', 'suggests that' y 'can prevent municipalities from -ing'. Incluye al menos una cláusula participial perfecta ('Having withstood...') revisando que el sujeto tras la coma coincida con el participio.",
          recommendedConnectors: [
            "While proponents of rapid redevelopment understandably argue that",
            "Having withstood",
            "tends to overlook",
            "prevent cities from erasing",
            "Ultimately, evidence from urban regeneration suggests that",
          ],
          b2RubricChecklistEs: [
            "Defiende una postura clara dentro del rango estricto de 175 a 225 palabras distribuidas en 4 párrafos equilibrados.",
            "Aplica al menos 3 marcadores de atenuación académica ('hedging': 'tend to', 'may', 'appear to', 'suggests that') evitando generalizaciones absolutas.",
            "Integra correctamente una cláusula participial perfecta o reducida sin incurrir en modificadores colgantes.",
            "Utiliza complementación verbal precisa de nivel B2 ('prevent X from -ing', 'means preserving', 'discourage developers from -ing').",
            "Mantiene ortografía, puntuación y registro universitario impecables sin corrector ortográfico.",
          ],
          modelAnswerB2:
            "Confronting housing shortages and post-industrial blight, municipal officials face understandable pressure to clear vacant factories for new construction. Nevertheless, preserving and adapting historic industrial landmarks into mixed-use civic and residential spaces generally offers a more sustainable urban strategy than wholesale demolition.\n\nWhile proponents of clearance rightly note that retrofitting uninsulated brick mills entails higher upfront engineering costs, their calculation often appears to overlook embodied carbon. Having stood for over a century, heavy masonry and timber warehouses store immense quantities of material energy; demolishing them releases avoidable construction waste and means manufacturing thousands of tons of replacement concrete and steel.\n\nFurthermore, adaptive reuse helps prevent rapidly modernizing cities from erasing their collective architectural identity. Former power stations and maritime depots converted into public libraries, affordable artist studios, and ground-floor markets tend to anchor neighborhood revitalization far more effectively than generic glass apartment blocks. Rather than choosing between housing and heritage, municipalities can zone upper warehouse floors for residential lofts while reserving vaulted ground halls for civic use.\n\nUltimately, urban regeneration experience suggests that cities need not destroy their industrial past to accommodate growth, provided planners pair structural conservation with flexible zoning incentives.",
        },
      ],
    },

    // =========================================================================
    // 5. SPEAKING (15 min study / chained prep + recording official timers)
    // =========================================================================
    speaking: {
      skill: "speaking",
      cefrLevel: "B2",
      title: "Architectural Design Impact & Museum Admission Policy Debate",
      estimatedMinutes: 15,
      timeLimitSeconds: 300,
      focusSummaryEs:
        "En Speaking B2, usar un participio perfecto al narrar ('Having walked into...') y expresiones de matiz al argumentar ('tends to deter lower-income students from visiting') proyecta control gramatical superior sin sacrificar naturalidad oral.",
      tasks: [
        {
          part: "part1_personal",
          id: "d06-speak-p1",
          cefrLevel: "B2",
          title: "A Historical Landmark or Museum Space That Changed Your Perspective",
          prompt:
            "Describe a museum exhibition, historic building, or architectural space you visited that deepened your understanding of history, science, or art. Explain what specific design features stood out and how the visit influenced your perspective.",
          prepSeconds: 30,
          recordSeconds: 45,
          structureTemplate: [
            "0–10s (Place & Core Impression): Identify the specific building/museum and what historical or scientific insight it conveyed.",
            "10–30s (Concrete Spatial Detail): Describe two physical design elements using precise descriptive vocabulary.",
            "30–45s (Intellectual Shift): Explain how experiencing that space reshaped your perspective.",
          ],
          keyPhrasesB2: [
            "Having only studied industrial history through textbooks...",
            "What immediately struck me upon entering was...",
            "Preserving the original overhead cranes prevented the space from feeling sterile.",
            "Visiting that site made me realize that architecture...",
          ],
          selfRubricChecklistEs: [
            "Nombré un edificio o exposición concreta en los primeros 5 segundos sin titubeos genéricos.",
            "Describí detalles arquitectónicos o museográficos específicos en lugar de repetir adjetivos vagos ('nice', 'interesting', 'beautiful').",
            "Integré al menos una estructura del Día 6 ('Having + V3', 'prevent X from -ing' o 'remember seeing').",
            "Cerré la idea reflexiva dentro de los 45 segundos con fluidez constante.",
          ],
          modelTranscriptB2:
            "Two years ago, I visited a contemporary science and design center housed inside a converted nineteenth-century railway foundry. Having only studied industrialization through textbook diagrams, I was immediately struck by how the architects inserted sleek glass laboratories beneath the original blackened steel trusses and overhead bridge cranes. Keeping those massive industrial fixtures intact prevented the museum from feeling like a sterile modern box and made the physical scale of nineteenth-century engineering tangible. Walking through that hall helped me realize that preserving historic structures doesn't mean freezing them in the past; instead, thoughtful design lets past and present technologies illuminate each other.",
        },
        {
          part: "part2_opinion",
          id: "d06-speak-p2",
          cefrLevel: "B2",
          title: "Taxpayer-Funded Free Museum Admission vs. Visitor Entry Fees",
          prompt:
            "Municipal governments often debate how public art and history museums should be financed. Advocates of universal free admission argue that cultural heritage belongs to the entire public and that ticket prices deter students and lower-income families from attending. Conversely, supporters of modest admission fees contend that ticket revenue is essential to fund art conservation, climate upgrades, and educational programming without raising local taxes. Which funding model do you think cities should prioritize, and why?",
          audioPrompt: {
            trackId: "day06-speaking-p2",
            audioUrl: "/audio/day06-speaking-p2.mp3",
            contextSetup: "Official iTEP Speaking Part 2 dual-perspective academic prompt.",
            turns: [
              {
                speakerLabel: "Examiner",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Municipal governments often debate how public art and history museums should be financed. Advocates of universal free admission argue that cultural heritage belongs to the entire public and that ticket prices deter students and lower-income families from attending. Conversely, supporters of modest admission fees contend that ticket revenue is essential to fund art conservation, climate upgrades, and educational programming without raising local taxes. Which funding model do you think cities should prioritize, and why?",
                pauseAfterMs: 600,
              },
            ],
          },
          prepSeconds: 45,
          recordSeconds: 60,
          structureTemplate: [
            "0–12s (Direct Thesis): Endorse one funding model clearly (or a structured core-collection free access model) and state your central reason.",
            "12–30s (Concession + Hedged Rebuttal): Acknowledge conservation costs, then show how ticket barriers undermine civic education.",
            "30–50s (Concrete Mechanism): Explain how frequent, informal visits by students/residents depend on removing entry fees (while special exhibitions generate revenue).",
            "50–60s (Decisive Wrap-Up): Summarize why broad civic access outweighs gate-receipt reliance.",
          ],
          keyPhrasesB2: [
            "In my view, municipalities should prioritize universal free admission to permanent museum collections...",
            "While museum directors understandably worry about funding conservation...",
            "Charging twenty dollars at the door tends to deter university students and working families from...",
            "Ultimately, treating museums as civic libraries strengthens public education.",
          ],
          selfRubricChecklistEs: [
            "Definí mi postura con claridad en los primeros 10 segundos sin repetir palabra por palabra el prompt.",
            "Reconocí el argumento opuesto (costos de conservación/climatización) usando atenuación académica ('understandably', 'tends to').",
            "Utilicé al menos un complemento verbal del Día 6 ('deter/prevent X from visiting', 'means treating').",
            "Sostuve un ritmo articulado durante el minuto completo y concluí antes del corte automático.",
          ],
          modelTranscriptB2:
            "In my view, municipal governments should prioritize universal free admission to permanent museum collections rather than relying on mandatory entry tickets. While museum directors understandably worry about financing delicate conservation labs and climate upgrades, charging fifteen or twenty dollars at the door tends to deter university students and working-class families from engaging with their own cultural heritage. When permanent galleries are free, residents treat museums like public libraries—stopping in for thirty minutes after class to study a single painting or historical archive without financial pressure. Having removed the barrier to entry for permanent halls, museums can still generate supplemental revenue through optional traveling exhibitions, endowment partnerships, and venue rentals. Ultimately, public collections fulfill their educational mission only when price tags never prevent citizens from walking through the door.",
        },
      ],
    },
  },
  dailyChecklistEs: [
    "Resolví los 10 reactivos de Grammar identificando modificadores colgantes, participios perfectos y cambios de significado gerundio/infinitivo.",
    "Completé Listening Parts 1, 2 y 3 (clase sobre el Crystal Palace y Ruskin) en una sola reproducción estricta.",
    "Respondí los 10 reactivos de Reading analizando el propósito retórico de cada ejemplo e insertando la oración cohesiva en `[C]`.",
    "Redacté Writing Part 1 y Part 2 aplicando 'academic hedging' ('tends to', 'appears to', 'suggests that') y participios alineados.",
    "Grabé Speaking Part 1 y Part 2 integrando estructuras con 'Having + participio' y 'deter/prevent X from -ing'.",
  ],
};
