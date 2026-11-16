import type { RoadmapDay } from "../../schemas/curriculum.schema.ts";

export const day03: RoadmapDay = {
  dayNumber: 3,
  sprintNumber: 1,
  cefrLevel: "B2",
  title: "Advanced Passive, Causative Structures & Textual Cohesion",
  subtitleEs:
    "Pasiva impersonal académica, estructuras causativas, infinitivos perfectos de reporte y cohesión referencial",
  b2FocusSummaryEs:
    "La prosa universitaria de nivel B2 evita el tono coloquial apoyándose en tres mecanismos de objetividad y cohesión: las pasivas impersonales y de sujeto elevado con infinitivo simple o perfecto ('It is widely assumed that...', 'Reef tracts are estimated to have lost...'), las construcciones causativas ('have samples analyzed', 'have technicians recalibrate' vs. 'get technicians to recalibrate') y las cadenas de cohesión referencial ('those of', 'such calcifying organisms', 'the former / the latter'). Dominar estos recursos multiplica tu precisión en Grammar Part 2, acelera el rastreo de procesos científicos en Listening y te da la llave exacta para resolver inserciones `[A][B][C][D]` en Reading.",
  estimatedMinutes: 145,
  isMockExamDay: false,
  sections: {
    // =========================================================================
    // 1. GRAMMAR (25 min study / 8 min official pace for 10 items)
    // =========================================================================
    grammar: {
      skill: "grammar",
      cefrLevel: "B2",
      title: "Reporting Passives, Perfect Infinitives, Causatives & Referential Pronouns",
      estimatedMinutes: 25,
      timeLimitSeconds: 480,
      focusSummaryEs:
        "Ante verbos de reporte en voz pasiva ('is believed', 'are estimated'), comprueba primero si la acción subordinada ocurrió antes que el reporte ('to have + V3') y si es activa o pasiva ('to have been + V3'). En estructuras causativas, distingue receptor inanimado ('have/get something done') de agente humano ('have someone do' vs. 'get someone TO do').",
      questions: [
        {
          part: "part1_fill_blank",
          id: "d03-gram-p1-q01",
          cefrLevel: "B2",
          grammarTopic: "Subject-Raised Passive Reporting + Perfect Infinitive",
          sentenceWithBlank:
            "Submerged limestone terraces off the Yucatan peninsula are estimated _____ more than eight thousand years ago, prior to post-glacial sea-level rise.",
          options: [
            {
              id: "A",
              text: "to form",
              explanationEs:
                "Incorrecto: el infinitivo simple ('to form') expresa simultaneidad o hábito general respecto al verbo presente 'are estimated', lo cual choca con el marcador pasado 'more than eight thousand years ago'.",
            },
            {
              id: "B",
              text: "having formed",
              explanationEs:
                "Incorrecto: las pasivas de reporte con sujeto elevado ('are estimated', 'are thought', 'are known') exigen infinitivo con 'to', jamás gerundio participial.",
            },
            {
              id: "C",
              text: "to have formed",
              explanationEs:
                "Correcto: infinitivo perfecto ('to have + participio pasado') que marca con exactitud que la formación geológica de las terrazas ocurrió en un pasado anterior a la estimación científica actual.",
            },
            {
              id: "D",
              text: "that they formed",
              explanationEs:
                "Incorrecto: cruce sintáctico inválido; una cláusula con 'that' solo es gramatical con sujeto impersonal anticipatorio ('It is estimated that they formed...'), no cuando el sujeto ya fue elevado.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Fórmula B2 infalible: 'Sujeto específico + is/are believed/estimated/reported + TO HAVE + participio' siempre que haya evidencia de tiempo pasado ('ago', 'in the 19th century', 'prior to').",
        },
        {
          part: "part1_fill_blank",
          id: "d03-gram-p1-q02",
          cefrLevel: "B2",
          grammarTopic: "Passive Causative (Have/Get + Object + Past Participle)",
          sentenceWithBlank:
            "Before submitting the paleographic monograph to the university press, the research consortium had every archival citation _____ by an independent classicist.",
          options: [
            {
              id: "A",
              text: "verifying",
              explanationEs:
                "Incorrecto: el participio presente '-ing' implicaría que las citas bibliográficas realizan activamente la acción de verificar.",
            },
            {
              id: "B",
              text: "verified",
              explanationEs:
                "Correcto: estructura causativa pasiva ('had + objeto + participio pasado'), empleada cuando se encarga a un tercero especialista que ejecute una acción sobre el objeto ('every archival citation').",
            },
            {
              id: "C",
              text: "to verify",
              explanationEs:
                "Incorrecto: tras 'have + objeto receptor', el inglés estándar prohíbe el infinitivo activo con 'to'; además la presencia del agente pasivo 'by an independent classicist' exige participio pasado.",
            },
            {
              id: "D",
              text: "verify",
              explanationEs:
                "Incorrecto: 'have + X + verbo base' es la causativa activa reservada para cuando X es la persona que ejecuta la tarea, no el documento verificado.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Tras 'have' o 'get' + sustantivo, pregúntate si ese sustantivo HACE o RECIBE la acción: si recibe la acción (y más aún si ves 'by + agente'), usa siempre participio pasado ('verified').",
        },
        {
          part: "part1_fill_blank",
          id: "d03-gram-p1-q03",
          cefrLevel: "B2",
          grammarTopic: "Impersonal Academic Passive Reporting (Dummy Subject It)",
          sentenceWithBlank:
            "_____ among public-health epidemiologists that municipal wastewater genomic surveillance detects emerging viral variants days before hospital admissions rise.",
          options: [
            {
              id: "A",
              text: "It is widely acknowledged",
              explanationEs:
                "Correcto: pasiva impersonal académica canónica con 'It' anticipatorio ('It is + adverbio + participio + that-clause'), que presenta consenso experto sin recurrir a pronombres informales.",
            },
            {
              id: "B",
              text: "There is widely acknowledged",
              explanationEs:
                "Incorrecto: 'There' existencial introduce sintagmas nominales indefinidos ('There is widespread consensus'), nunca verbos transitivos de reporte seguidos de cláusula con 'that'.",
            },
            {
              id: "C",
              text: "Widely acknowledging",
              explanationEs:
                "Incorrecto: dejaría a toda la oración sin sujeto gramatical ni verbo principal conjugado.",
            },
            {
              id: "D",
              text: "What is widely acknowledged",
              explanationEs:
                "Incorrecto: 'What...' formaría una cláusula nominal de sujeto que exigiría un segundo verbo copulativo ('...is that municipal wastewater...'), ausente en la oración.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Cuando más adelante aparece una cláusula introducida directamente por 'that + sujeto + verbo' sin verbo copulativo 'is' intermedio, el arranque impersonal obligatorio es 'It is [adverbio] + participio' (nunca 'There is' ni 'What is').",
        },
        {
          part: "part1_fill_blank",
          id: "d03-gram-p1-q04",
          cefrLevel: "B2",
          grammarTopic: "Passive Gerunds After Verbs Requiring -ing",
          sentenceWithBlank:
            "Fragile deep-sea sponge specimens require thermally insulated transfer canisters in order to avoid _____ by abrupt pressure and temperature shifts during ascent.",
          options: [
            {
              id: "A",
              text: "damaging",
              explanationEs:
                "Incorrecto: aunque 'avoid' exige gerundio, la forma activa 'damaging' carece de objeto directo e implicaría que las esponjas dañan algo en vez de sufrir el daño.",
            },
            {
              id: "B",
              text: "to be damaged",
              explanationEs:
                "Incorrecto: capta bien la voz pasiva, pero viola el régimen verbal de 'avoid', que rechaza categóricamente el infinitivo y exige forma en '-ing'.",
            },
            {
              id: "C",
              text: "being damaged",
              explanationEs:
                "Correcto: gerundio pasivo ('being + participio pasado'), que satisface tanto la exigencia morfológica del verbo 'avoid' como la relación pasiva indicada por 'by abrupt pressure and temperature shifts'.",
            },
            {
              id: "D",
              text: "having damaged",
              explanationEs:
                "Incorrecto: gerundio perfecto en voz activa; sigue atribuyendo erróneamente la acción de dañar a los especímenes.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Verbos y preposiciones que rigen '-ing' ('avoid', 'risk', 'resent', 'without', 'despite') forman su voz pasiva con 'being + participio pasado' ('avoid being damaged').",
        },
        {
          part: "part1_fill_blank",
          id: "d03-gram-p1-q05",
          cefrLevel: "B2",
          grammarTopic: "Active Causative with Human Agent (Have Someone Do)",
          sentenceWithBlank:
            "To eliminate low-frequency acoustic interference during the whale-vocalization survey, the chief oceanographer had the vessel's engineers _____ all auxiliary generators.",
          options: [
            {
              id: "A",
              text: "to shut down",
              explanationEs:
                "Incorrecto: interferencia clásica con 'get' o 'ask'; el verbo causativo 'have' con agente humano prohíbe la partícula 'to' ('*had the engineers to shut down').",
            },
            {
              id: "B",
              text: "shut down",
              explanationEs:
                "Correcto: causativa activa con 'have + agente + infinitivo sin to' ('bare infinitive'), estructura formal para delegar una instrucción técnica directa.",
            },
            {
              id: "C",
              text: "shutting down",
              explanationEs:
                "Incorrecto: aunque 'have someone -ing' existe en contextos informales de acción continua o consecuencia involuntaria, para una orden técnica puntual completada se exige infinitivo base.",
            },
            {
              id: "D",
              text: "been shut down",
              explanationEs:
                "Incorrecto: fragmento verbal agramatical que mezcla auxiliar pasivo sin verbo conjugado.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Contrasta el par causativo con personas: 'HAVE + persona + verbo base' ('had the engineers shut down') frente a 'GET + persona + TO + verbo base' ('got the engineers to shut down').",
        },
        {
          part: "part2_error_identification",
          id: "d03-gram-p2-q06",
          cefrLevel: "B2",
          grammarTopic: "Intransitive Emergence Verbs Illegally Used in Passive Voice",
          sentenceWithMarkedSegments:
            "A sharp decline in pelagic anchovy populations [A]{was occurred} along the continental shelf [B]{shortly after} subsurface ocean temperatures [C]{exceeded} historical seasonal averages [D]{by three degrees}.",
          correctedSegment: "occurred",
          options: [
            {
              id: "A",
              text: "was occurred",
              explanationEs:
                "Incorrecto (contiene el error): 'occur' (al igual que 'happen', 'emerge', 'arise', 'disappear' y 'consist') es un verbo intransitivo puro y jamás admite voz pasiva en inglés; debe ser Past Simple activo: 'occurred'.",
            },
            {
              id: "B",
              text: "shortly after",
              explanationEs:
                "Correcto en la oración: locución conjuntiva temporal precisa para encadenar la anomalía térmica con el declive poblacional.",
            },
            {
              id: "C",
              text: "exceeded",
              explanationEs:
                "Correcto en la oración: verbo transitivo directo ('superaron los promedios históricos'; nunca '*exceeded than').",
            },
            {
              id: "D",
              text: "by three degrees",
              explanationEs:
                "Correcto en la oración: la preposición 'by' cuantifica con exactitud el margen o diferencia numérica de un incremento.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Alerta roja en iTEP Part 2: formas como '*was occurred', '*has been happened', '*were disappeared' o '*is consisted of' son 100 % erróneas siempre, porque los verbos intransitivos no tienen objeto que pasar a sujeto pasivo.",
        },
        {
          part: "part2_error_identification",
          id: "d03-gram-p2-q07",
          cefrLevel: "B2",
          grammarTopic: "Passive Perfect Infinitive After Reporting Verbs",
          sentenceWithMarkedSegments:
            "The brass navigational astrolabe [A]{displayed in} the maritime gallery [B]{is now believed} [C]{to construct} in sixteenth-century Lisbon [D]{rather than} in Seville.",
          correctedSegment: "to have been constructed",
          options: [
            {
              id: "A",
              text: "displayed in",
              explanationEs:
                "Correcto en la oración: cláusula relativa pasiva reducida ('[which is] displayed in') que identifica al astrolabio.",
            },
            {
              id: "B",
              text: "is now believed",
              explanationEs:
                "Correcto en la oración: pasiva de reporte en presente coherente con el consenso historiográfico actual ('now').",
            },
            {
              id: "C",
              text: "to construct",
              explanationEs:
                "Incorrecto (contiene el error): un astrolabio no construye nada (requiere voz pasiva) y su fabricación ocurrió en el siglo XVI (requiere aspecto perfecto); debe ser infinitivo perfecto pasivo: 'to have been constructed'.",
            },
            {
              id: "D",
              text: "rather than",
              explanationEs:
                "Correcto en la oración: conector contrastivo que mantiene paralelismo preposicional limpio ('in ... Lisbon rather than in Seville').",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Cuando un objeto inanimado precede a 'is believed / thought / known', verifica la voz del infinitivo: el objeto fue fabricado o descubierto, así que exige infinitivo pasivo ('to be built' o 'to have been built').",
        },
        {
          part: "part2_error_identification",
          id: "d03-gram-p2-q08",
          cefrLevel: "B2",
          grammarTopic: "Causative Get + Agent Requiring To-Infinitive",
          sentenceWithMarkedSegments:
            "Following an overnight power fluctuation, the lab director [A]{got} the marine technicians [B]{recalibrate} the dissolved-oxygen sensors [C]{before} any coral larvae [D]{were introduced} into the tanks.",
          correctedSegment: "to recalibrate",
          options: [
            {
              id: "A",
              text: "got",
              explanationEs:
                "Correcto en la oración: verbo causativo válido en Past Simple para indicar que logró que el equipo técnico ejecutara la tarea.",
            },
            {
              id: "B",
              text: "recalibrate",
              explanationEs:
                "Incorrecto (contiene el error): a diferencia de 'had the technicians recalibrate', el verbo causativo 'get' seguido de agente humano exige infinitivo con 'to': 'to recalibrate'.",
            },
            {
              id: "C",
              text: "before",
              explanationEs:
                "Correcto en la oración: conjunción temporal que ordena lógicamente la calibración previa al ingreso de las larvas.",
            },
            {
              id: "D",
              text: "were introduced",
              explanationEs:
                "Correcto en la oración: voz pasiva en Past Simple concordando en plural con 'coral larvae' (plural irregular de 'larva').",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Si ves 'got + persona + verbo' en Part 2, comprueba de inmediato la presencia de 'to': omitirlo ('*got them recalibrate') es una de las trampas favoritas del examen.",
        },
        {
          part: "part2_error_identification",
          id: "d03-gram-p2-q09",
          cefrLevel: "B2",
          grammarTopic: "Demonstrative Pronoun Cohesion in Comparisons (That of vs. Those of)",
          sentenceWithMarkedSegments:
            "Skeletal calcification rates [A]{measured in} heat-adapted coral colonies [B]{remained} noticeably higher than [C]{that of} unacclimated reef patches [D]{exposed to} identical thermal stress.",
          correctedSegment: "those of",
          options: [
            {
              id: "A",
              text: "measured in",
              explanationEs:
                "Correcto en la oración: participio pasado reducido que modifica con exactitud a 'Skeletal calcification rates'.",
            },
            {
              id: "B",
              text: "remained",
              explanationEs:
                "Correcto en la oración: verbo copulativo de estado seguido adecuadamente del sintagma adjetival comparativo 'noticeably higher'.",
            },
            {
              id: "C",
              text: "that of",
              explanationEs:
                "Incorrecto (contiene el error): el pronombre demostrativo de cohesión comparativa sustituye al núcleo plural 'rates' ('the calcification rates of unacclimated reef patches'), por lo que debe concordar en plural: 'those of'.",
            },
            {
              id: "D",
              text: "exposed to",
              explanationEs:
                "Correcto en la oración: participio reducido con su preposición fija ('exposed to') modificando a 'reef patches'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Cada vez que aparezca 'than that of' o 'than those of' subrayado, viaja al inicio de la oración y verifica si el sustantivo comparado es singular ('rate -> that of') o plural ('rates -> those of').",
        },
        {
          part: "part2_error_identification",
          id: "d03-gram-p2-q10",
          cefrLevel: "B2",
          grammarTopic: "Faulty Hybrid Between Impersonal and Subject-Raised Reporting Passives",
          sentenceWithMarkedSegments:
            "The barrier reef system [A]{bordering} the eastern archipelago [B]{is estimated} [C]{that it has lost} nearly a third of its branching coral cover [D]{over the past decade}.",
          correctedSegment: "to have lost",
          options: [
            {
              id: "A",
              text: "bordering",
              explanationEs:
                "Correcto en la oración: cláusula relativa activa reducida ('[which borders]') que delimita geográficamente al sistema arrecifal.",
            },
            {
              id: "B",
              text: "is estimated",
              explanationEs:
                "Correcto en la oración: verbo pasivo de reporte en singular concordando con el núcleo 'system'.",
            },
            {
              id: "C",
              text: "that it has lost",
              explanationEs:
                "Incorrecto (contiene el error): mezcla ilegalmente las dos estructuras pasivas de reporte ('It is estimated that it has lost...' + 'The system is estimated to have lost...'). Con sujeto elevado al inicio se exige infinitivo perfecto: 'to have lost'.",
            },
            {
              id: "D",
              text: "over the past decade",
              explanationEs:
                "Correcto en la oración: marcador temporal durativo plenamente compatible con el aspecto perfecto de pérdida acumulada.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Jamás combines un sustantivo inicial específico + 'is estimated/said/thought' + 'that...'. Si no empieza con 'It', la continuación obligatoria es infinitivo con 'to' ('to have lost').",
        },
      ],
    },

    // =========================================================================
    // 2. LISTENING (35 min study / strict single-play simulation)
    // =========================================================================
    listening: {
      skill: "listening",
      cefrLevel: "B2",
      title: "Marine Wet-Lab Operations, Carbonate Sampling & Coral Reef Ecology Lecture",
      estimatedMinutes: 35,
      timeLimitSeconds: 900,
      focusSummaryEs:
        "En diálogos y clases científicas de nivel B2 abundan las pasivas y causativas habladas ('is having its titrator overhauled', 'are estimated to be supplied by', 'had underwater speakers installed'): identifica quién ejecuta realmente cada procedimiento y cuál es la relación de causa-compensación.",
      items: [
        {
          part: "part1_short_dialogue",
          id: "d03-list-p1",
          title: "Coastal Wet-Lab Seawater Sensor Check",
          cefrLevel: "B2",
          audio: {
            trackId: "day03-listening-p1",
            audioUrl: "/audio/day03-listening-p1.mp3",
            contextSetup:
              "Two marine biology graduate researchers check experimental aquariums at a university marine station.",
            turns: [
              {
                speakerLabel: "Researcher 1",
                voice: "en-US-JennyNeural",
                text: "Marcus, before we transfer the coral planulae into Tank B tonight, did you get the seawater salinity probe recalibrated?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Researcher 2",
                voice: "en-US-AndrewMultilingualNeural",
                text: "I had the instrumentation technician replace the dissolved-oxygen electrode an hour ago, but the salinity module was still reading two parts per thousand higher than our reference sample.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Researcher 1",
                voice: "en-US-JennyNeural",
                text: "Then we can't risk introducing the larvae into Tank B yet—even minor osmotic shock will skew our settlement counts.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Researcher 2",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Agreed. Tank D was serviced and verified yesterday, and it's currently empty, so let's divert the filtered intake line there instead.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d03-list-p1-q01",
              prompt: "What do the researchers decide to do?",
              options: [
                {
                  id: "A",
                  text: "Postpone the coral larval settlement experiment until next week",
                  explanationEs:
                    "Incorrecto: en lugar de posponer el experimento una semana, deciden usar otro tanque verificado esa misma noche.",
                },
                {
                  id: "B",
                  text: "Place the coral larvae in Tank D because Tank B's salinity sensor remains inaccurate",
                  explanationEs:
                    "Correcto: aunque cambiaron el electrodo de oxígeno, el sensor de salinidad del Tanque B sigue desviado; como el Tanque D fue calibrado ayer y está vacío, redirigirán el flujo allí.",
                },
                {
                  id: "C",
                  text: "Ask the technician to replace Tank D's dissolved-oxygen electrode tonight",
                  explanationEs:
                    "Incorrecto: el electrodo de oxígeno ya fue reemplazado hace una hora en el Tanque B, y el Tanque D ya quedó verificado ayer.",
                },
                {
                  id: "D",
                  text: "Raise the salinity of the reference sample by two parts per thousand",
                  explanationEs:
                    "Incorrecto: la muestra de referencia sirve como patrón exacto que reveló la desviación del sensor, no es algo que deban alterar.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "Presta oído a la diferencia entre lo que SÍ se reparó ('had the technician replace the dissolved-oxygen electrode') y lo que sigue fallando tras 'but' ('salinity module was still reading... higher').",
        },
        {
          part: "part2_conversation",
          id: "d03-list-p2",
          title: "Marine Sanctuary Alkalinity Sampling Logistics",
          cefrLevel: "B2",
          audio: {
            trackId: "day03-listening-p2",
            audioUrl: "/audio/day03-listening-p2.mp3",
            contextSetup:
              "An undergraduate marine biology thesis student speaks with the supervisor of the university's coastal marine station.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "Morning, Dr. Thornton. I came to confirm my boat slot on Tuesday to collect seawater alkalinity samples along the outer reef crest for my senior thesis.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Supervisor",
                voice: "en-GB-SoniaNeural",
                text: "Good timing, Lucas. Your Marine Sanctuary collection permit was signed off yesterday, so your spot on the research launch is secure. However, we have a bottleneck in the analytical chemistry wing.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "Wait—is something wrong with the carbonate analyzer? My entire thesis compares daytime and dusk calcification chemistry across bleached and unbleached reef zones.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Supervisor",
                voice: "en-GB-SoniaNeural",
                text: "The department is having the automated titration system overhauled by the manufacturer from Monday through Thursday because a peristaltic pump seal wore out. Raw seawater samples can't sit unanalyzed at room temperature for four days.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "Right—microbial respiration inside the bottle would alter total dissolved carbon within twenty-four hours. Should I give up my Tuesday boat slot and rebook for later in the month?",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Supervisor",
                voice: "en-GB-SoniaNeural",
                text: "I wouldn't advise postponing. Offshore swell forecasts look unusually calm on Tuesday, whereas a strong spring tide and gale system are projected for the following two weeks.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "Is there a way to arrest biological activity in the water samples until Friday, when the titrator is back online? Undergraduates aren't certified to dispense chemical fixatives on our own.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Supervisor",
                voice: "en-GB-SoniaNeural",
                text: "Exactly what I was thinking. I can have Maya Chen, our certified dockside lab chemist, dose and seal your samples under the fume hood as soon as the boat docks Tuesday evening. Once fixed in gas-tight borosilicate bottles, carbonate chemistry stays stable for months.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "That saves my fieldwork! What do I need to prepare beforehand?",
                pauseAfterMs: 400,
              },
              {
                speakerLabel: "Supervisor",
                voice: "en-GB-SoniaNeural",
                text: "Check out twenty-four pre-baked borosilicate bottles from cold storage today, label them with waterproof station codes, and email Maya your estimated docking time so she has the fume hood ready.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d03-list-p2-q01",
              prompt:
                "What unexpected problem threatens Lucas's seawater sampling plan for Tuesday?",
              options: [
                {
                  id: "A",
                  text: "His Marine Sanctuary permit has not yet been signed by coastal authorities.",
                  explanationEs:
                    "Incorrecto: la Dra. Thornton le confirma desde el segundo turno que su permiso fue aprobado ayer.",
                },
                {
                  id: "B",
                  text: "The lab's automated titration unit will be out of service for maintenance through Thursday.",
                  explanationEs:
                    "Correcto: usa una causativa pasiva ('is having the automated titration system overhauled ... from Monday through Thursday') para explicar por qué no podrá analizar las muestras de inmediato.",
                },
                {
                  id: "C",
                  text: "The research boat launch was canceled due to an incoming gale system on Tuesday.",
                  explanationEs:
                    "Incorrecto: el pronóstico para el martes es inusualmente calmado; el temporal se proyecta para las dos semanas siguientes.",
                },
                {
                  id: "D",
                  text: "Cold storage ran out of sterile borosilicate sample containers.",
                  explanationEs:
                    "Incorrecto: al final le indica retirar hoy mismo veinticuatro botellas disponibles del cuarto frío.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d03-list-p2-q02",
              prompt:
                "Why cannot untreated seawater samples simply be stored until Friday for carbonate analysis?",
              options: [
                {
                  id: "A",
                  text: "Microbial respiration inside the containers would change the water's dissolved carbon chemistry.",
                  explanationEs:
                    "Correcto: Lucas explica que la respiración microbiana dentro de la botella alteraría el carbono disuelto total en cuestión de veinticuatro horas.",
                },
                {
                  id: "B",
                  text: "Salt crystals would crack standard glass bottles at room temperature.",
                  explanationEs:
                    "Incorrecto: no se menciona fractura del vidrio por cristales de sal en ningún momento.",
                },
                {
                  id: "C",
                  text: "Sanctuary regulations require all water samples to be returned to the ocean within two days.",
                  explanationEs:
                    "Incorrecto: de hecho, una vez estabilizadas químicamente, las muestras pueden conservarse durante meses.",
                },
                {
                  id: "D",
                  text: "Oxygen escapes instantly through borosilicate glass walls.",
                  explanationEs:
                    "Incorrecto: las botellas de borosilicato se describen expresamente como herméticas a los gases ('gas-tight borosilicate bottles').",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d03-list-p2-q03",
              prompt:
                "Why does Dr. Thornton advise against postponing the boat trip until later in the month?",
              options: [
                {
                  id: "A",
                  text: "Coral reefs only calcify during the first week of the month.",
                  explanationEs:
                    "Incorrecto: no existe tal restricción biológica mensual en la conversación.",
                },
                {
                  id: "B",
                  text: "Rough seas and strong spring tides are forecast for the subsequent two weeks.",
                  explanationEs:
                    "Correcto: advierte que el oleaje del martes será inusualmente tranquilo, mientras que las dos semanas siguientes tendrán mareas vivas fuertes y temporal.",
                },
                {
                  id: "C",
                  text: "Maya Chen is leaving the marine station at the end of the week.",
                  explanationEs:
                    "Incorrecto: no se menciona que la química certificada vaya a dejar la estación marina.",
                },
                {
                  id: "D",
                  text: "Lucas's sanctuary collection permit expires on Wednesday.",
                  explanationEs:
                    "Incorrecto: no se menciona ninguna caducidad del permiso para el miércoles.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d03-list-p2-q04",
              prompt: "How will the sample-preservation issue be resolved?",
              options: [
                {
                  id: "A",
                  text: "Lucas will complete an emergency safety certification today to handle chemical fixatives himself.",
                  explanationEs:
                    "Incorrecto: como los estudiantes de pregrado no están certificados para dispensar fijadores solos, no lo hará él mismo.",
                },
                {
                  id: "B",
                  text: "Dr. Thornton will have a certified station chemist chemically stabilize and seal the samples upon docking.",
                  explanationEs:
                    "Correcto: la supervisora emplea la causativa activa ('I can have Maya Chen ... dose and seal your samples under the fume hood') apenas regrese la embarcación el martes por la tarde.",
                },
                {
                  id: "C",
                  text: "The manufacturer's technician will postpone the titrator overhaul until Friday.",
                  explanationEs:
                    "Incorrecto: el mantenimiento seguirá de lunes a jueves; las muestras preservadas se analizarán cuando el equipo vuelva a operar.",
                },
                {
                  id: "D",
                  text: "Lucas will ship the raw water samples overnight to a commercial inland laboratory.",
                  explanationEs:
                    "Incorrecto: todo el procesamiento se realizará en la propia estación marina con Maya Chen y el titrador reparado el viernes.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "En conversaciones de laboratorio universitario, sigue la cadena causativa: equipo fuera de servicio ('having the system overhauled') -> restricción de seguridad estudiantil -> delegación autorizada ('have Maya Chen dose and seal').",
        },
        {
          part: "part3_lecture",
          id: "d03-list-p3",
          title:
            "Coral Reef Ecology: Holobiont Bleaching, Symbiont Shuffling & Acoustic Restoration",
          cefrLevel: "B2",
          audio: {
            trackId: "day03-listening-p3",
            audioUrl: "/audio/day03-listening-p3.mp3",
            contextSetup:
              "A marine biology professor delivers an upper-level lecture on coral reef physiology and restoration ecology.",
            turns: [
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Good afternoon. Today in marine community ecology, we're examining reef-building corals not as isolated animals, but as nutritional partnerships called holobionts. Up to ninety percent of a tropical coral's metabolic energy is estimated to be supplied by photosynthetic microalgae living inside the coral's gastrodermal cells.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Because this symbiosis operates near tropical thermal limits, it is exquisitely sensitive to marine heatwaves. When sea-surface temperatures exceed summer highs by just one to two degrees Celsius for several weeks, the microalgae's photosynthetic pathways overload and release reactive oxygen molecules that injure host tissue.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "In self-defense, the coral polyp expels its damaged symbionts, exposing the white calcium-carbonate skeleton beneath its transparent flesh. Now, it is widely misunderstood in popular media that a bleached reef has already died. Bleached colonies remain alive initially, yet deprived of their primary energy source, they starve within weeks unless temperatures cool.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Interestingly, certain surviving colonies have been observed to repopulate their tissues with heat-tolerant algal lineages—a process termed adaptive symbiont shuffling. While hosting heat-resistant microalgae raises a coral's bleaching threshold by roughly one degree, that resilience carries a metabolic trade-off: heat-tolerant strains transfer far less carbon, slowing skeletal growth by nearly half.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Even after temperatures stabilize, degraded reefs face a second bottleneck during larval recruitment. Free-swimming coral larvae rely on underwater soundscapes—the crackling of snapping shrimp and calls of reef fish—to locate healthy limestone habitat. Dead, algae-covered rubble zones fall acoustically silent, so drifting larvae swim right past them.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "To break that trap, Australian ecologists had submersible loudspeakers installed on degraded reef patches to broadcast healthy reef recordings, doubling larval settlement rates. Nevertheless, acoustic enrichment is no standalone cure: unless grazing parrotfish are protected to keep fast-growing seaweed cropped, newly settled corals will still be smothered.",
                pauseAfterMs: 650,
              },
            ],
          },
          questions: [
            {
              id: "d03-list-p3-q01",
              prompt: "What is the lecture mainly about?",
              options: [
                {
                  id: "A",
                  text: "The physiological mechanisms of coral bleaching, adaptive trade-offs, and ecological barriers to reef recovery",
                  explanationEs:
                    "Correcto: sintetiza toda la cátedra: la simbiosis coral-microalga y el blanqueamiento térmico, el costo metabólico del 'symbiont shuffling' y el cuello de botella acústico/ecológico en la restauración larval.",
                },
                {
                  id: "B",
                  text: "Why snapping shrimp and parrotfish are migrating from tropical reefs to polar waters",
                  explanationEs:
                    "Incorrecto: los camarones pistola y los peces loro se mencionan por sus funciones acústicas y de pastoreo en el arrecife tropical, no por migración polar.",
                },
                {
                  id: "C",
                  text: "How submersible loudspeakers can permanently cool sea-surface temperatures by two degrees",
                  explanationEs:
                    "Incorrecto: los altavoces submarinos atraen larvas mediante paisaje sonoro, jamás enfrían el agua.",
                },
                {
                  id: "D",
                  text: "Why deep-sea corals grow twice as fast without photosynthetic microalgae",
                  explanationEs:
                    "Incorrecto: la conferencia trata exclusivamente sobre corales tropicales formadores de arrecifes y muestra que perder o cambiar simbiontes reduce la energía y frena el crecimiento.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d03-list-p3-q02",
              prompt:
                "According to the professor, what directly prompts a coral polyp to expel its photosynthetic microalgae during a marine heatwave?",
              options: [
                {
                  id: "A",
                  text: "The microalgae stop absorbing calcium carbonate from surrounding seawater.",
                  explanationEs:
                    "Incorrecto: el esqueleto de carbonato de calcio pertenece al pólipo coralino, no es algo que las microalgas absorban para él.",
                },
                {
                  id: "B",
                  text: "Heat-stressed microalgae generate toxic reactive oxygen molecules that damage the coral's cells.",
                  explanationEs:
                    "Correcto: al sobrecargarse la maquinaria fotosintética con 1–2 °C de exceso térmico, las algas liberan moléculas reactivas de oxígeno dañinas, obligando al coral a expulsarlas en defensa propia.",
                },
                {
                  id: "C",
                  text: "Acoustic noise from reef fish disrupts cellular nutrient exchange.",
                  explanationEs:
                    "Incorrecto: el sonido de peces y camarones es una señal saludable para el reclutamiento larval, no causa de estrés celular.",
                },
                {
                  id: "D",
                  text: "Grazing parrotfish scrape away the coral's outer gastrodermal layer.",
                  explanationEs:
                    "Incorrecto: los peces loro ayudan a los corales jóvenes al recortar macroalgas competidoras, no provocan el blanqueamiento.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d03-list-p3-q03",
              prompt:
                "What popular misconception about coral bleaching does the professor correct?",
              options: [
                {
                  id: "A",
                  text: "That bleached corals are already dead at the moment they turn white",
                  explanationEs:
                    "Correcto: señala mediante pasiva impersonal ('it is widely misunderstood in popular media that a bleached reef has already died') que el coral blanqueado sigue vivo inicialmente, aunque en riesgo de inanición.",
                },
                {
                  id: "B",
                  text: "That coral skeletons are composed of white silica rather than limestone",
                  explanationEs:
                    "Incorrecto: confirma que el esqueleto blanco expuesto es efectivamente carbonato de calcio / piedra caliza.",
                },
                {
                  id: "C",
                  text: "That microalgae supply less than ten percent of a tropical coral's energy",
                  explanationEs:
                    "Incorrecto: el 90 % se presenta como dato científico estimado real, no como mito mediático.",
                },
                {
                  id: "D",
                  text: "That bleaching occurs only when temperatures rise by ten degrees Celsius",
                  explanationEs:
                    "Incorrecto: especifica desde el principio que bastan entre uno y dos grados Celsius por encima del máximo estival.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d03-list-p3-q04",
              prompt: "What limitation is associated with 'adaptive symbiont shuffling'?",
              options: [
                {
                  id: "A",
                  text: "Heat-tolerant microalgae prevent coral colonies from reproducing sexually.",
                  explanationEs:
                    "Incorrecto: no se menciona bloqueo de la reproducción sexual; el costo descrito atañe a la transferencia de carbono y calcificación.",
                },
                {
                  id: "B",
                  text: "Thermally resistant symbionts deliver less carbon, reducing skeletal growth rates by roughly half.",
                  explanationEs:
                    "Correcto: explica el compromiso metabólico ('steep metabolic trade-off'): aunque eleva la tolerancia ~1 °C, transfiere mucho menos carbono al coral y frena el crecimiento esquelético casi a la mitad.",
                },
                {
                  id: "C",
                  text: "Colonies that shuffle symbionts become permanently invisible to snapping shrimp.",
                  explanationEs:
                    "Incorrecto: mezcla sin fundamento el tema fisiológico del turno 4 con el reclutamiento acústico del turno 5.",
                },
                {
                  id: "D",
                  text: "Heat-tolerant strains survive for only forty-eight hours inside gastrodermal cells.",
                  explanationEs:
                    "Incorrecto: no se menciona una supervivencia de 48 horas para los simbiontes termotolerantes.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d03-list-p3-q05",
              prompt:
                "Why do free-swimming coral larvae often fail to settle on severely degraded reefs even after water temperatures return to normal?",
              options: [
                {
                  id: "A",
                  text: "Degraded rubble zones lack the biological soundscapes that guide larvae toward suitable limestone substrate.",
                  explanationEs:
                    "Correcto: las larvas dependen del paisaje acústico (camarones pistola y peces) para orientarse; los escombros degradados quedan en silencio acústico y las larvas pasan de largo.",
                },
                {
                  id: "B",
                  text: "Parrotfish consume nearly all drifting coral larvae before they reach the seabed.",
                  explanationEs:
                    "Incorrecto: los peces loro son herbívoros que controlan algas ('grazing parrotfish ... keep fast-growing seaweed cropped'), no depredadores de larvas en la explicación.",
                },
                {
                  id: "C",
                  text: "Dead coral skeletons release reactive oxygen into the surrounding water column.",
                  explanationEs:
                    "Incorrecto: el oxígeno reactivo ocurre dentro del tejido vivo durante el estrés térmico, no en escombros calcáreos muertos.",
                },
                {
                  id: "D",
                  text: "Underwater loudspeakers repel larvae away from shallow coastal lagoons.",
                  explanationEs:
                    "Incorrecto: los altavoces experimentales duplicaron el asentamiento larval al reproducir sonidos de arrecifes sanos.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d03-list-p3-q06",
              prompt:
                "What does the professor imply about using underwater loudspeakers for reef restoration?",
              options: [
                {
                  id: "A",
                  text: "It eliminates the need to establish marine protected areas for herbivorous fish.",
                  explanationEs:
                    "Incorrecto: afirma explícitamente lo opuesto: sin proteger peces loro herbívoros, las macroalgas asfixiarán a los corales recién asentados.",
                },
                {
                  id: "B",
                  text: "It can jump-start larval settlement, but long-term survival still depends on broader ecosystem management.",
                  explanationEs:
                    "Correcto: reconoce que duplicó el asentamiento inicial, pero advierte ('acoustic enrichment is no standalone cure: unless grazing parrotfish are protected...') que requiere control ecológico integral.",
                },
                {
                  id: "C",
                  text: "It has proven ineffective outside small indoor marine station aquariums.",
                  explanationEs:
                    "Incorrecto: el ensayo australiano se realizó directamente en parches arrecifales degradados en mar abierto.",
                },
                {
                  id: "D",
                  text: "It causes coral polyps to expel heat-tolerant microalgae prematurely.",
                  explanationEs:
                    "Incorrecto: el enriquecimiento acústico actúa sobre larvas nadadoras, sin inducir expulsión de simbiontes.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "En clases de Biología Marina iTEP, sigue la arquitectura 'Mecanismo celular -> Mito corregido ('It is widely misunderstood...') -> Compensación evolutiva (trade-off) -> Intervención experimental con salvedad ecológica'.",
        },
      ],
    },

    // =========================================================================
    // 3. READING (35 min study / 20 min official pace for Part 1 + Part 2)
    // =========================================================================
    reading: {
      skill: "reading",
      cefrLevel: "B2",
      title: "Non-Destructive Art Provenance & Urban Permeable Hydrology",
      estimatedMinutes: 35,
      timeLimitSeconds: 1200,
      focusSummaryEs:
        "Entrena la lectura cohesiva de precisión: subraya mentalmente cada sintagma demostrativo ('this chronological discrepancy', 'those interstitial pores', 'such premature hydraulic failure'). En `sentence_insertion`, la oración encaja únicamente donde tanto su ancla hacia atrás como su puente hacia adelante coinciden sin fisuras.",
      passages: [
        {
          part: "part1_intermediate",
          id: "d03-read-p1",
          title: "Provenance Verification and Non-Destructive Pigment Analysis",
          cefrLevel: "B2",
          topicDomain: "Art Conservation & Materials Science",
          paragraphs: [
            "For much of the twentieth century, authenticating disputed European oil paintings depended primarily on stylistic connoisseurship supplemented by invasive micro-sampling. Museum conservators were routinely required to excise pinpoint flecks of paint from canvas margins so that chemical reagents could identify mineral binders under a polarized microscope. Because gallery trustees understandably resisted having priceless masterworks physically punctured, questionable workshop copies occasionally remained cataloged as autograph originals for decades.",
            "Over the past fifteen years, heritage laboratories have transformed provenance verification by adopting non-destructive spectroscopic imaging. Curators now routinely have fragile wooden panels and delicate canvases scanned via macro X-ray fluorescence and short-wave infrared reflectography without detaching a single pigment grain. As a focused X-ray beam sweeps across the painted surface, each chemical element emits a characteristic energy signature, generating high-resolution elemental maps of both visible brushwork and concealed preparatory underdrawings. Through such subsurface mapping, several portraits long believed to have been painted in seventeenth-century Antwerp were recently shown to contain titanium white—a synthetic compound that was not manufactured commercially until the 1920s.",
            "Even so, conservation scientists emphasize that spectroscopic data cannot entirely replace archival and art-historical scholarship. Whereas detecting an anachronistic twentieth-century compound conclusively disproves an early-modern origin, confirming period-appropriate lead-tin yellow or natural lapis lazuli merely establishes that those pigments existed at the time. Ultimately, reliable attribution is achieved only when elemental evidence is synthesized with documentary workshop records, panel dendrochronology, and radiographic brushstroke analysis.",
          ],
          questions: [
            {
              id: "d03-read-p1-q01",
              questionType: "main_idea",
              prompt: "What is the primary focus of the passage?",
              options: [
                {
                  id: "A",
                  text: "How non-destructive spectroscopic imaging has advanced painting authentication while still requiring complementary historical evidence",
                  explanationEs:
                    "Correcto: articula la progresión completa del texto: límites del muestreo invasivo antiguo (P1), avances no destructivos por rayos X e infrarrojo (P2) y la necesidad de integrar esos datos con evidencia histórica y dendrocronológica (P3).",
                },
                {
                  id: "B",
                  text: "Why seventeenth-century Antwerp workshops invented synthetic titanium white ahead of industrial chemists",
                  explanationEs:
                    "Incorrecto: el hallazgo de blanco de titanio demostró precisamente que esos retratos NO eran del siglo XVII, sino falsificaciones o copias posteriores a 1920.",
                },
                {
                  id: "C",
                  text: "Why museum boards have banned infrared reflectography on wooden panels",
                  explanationEs:
                    "Incorrecto: los museos se resistían a la perforación física ('invasive micro-sampling'), pero hoy emplean de forma rutinaria el escaneo no destructivo.",
                },
                {
                  id: "D",
                  text: "How dendrochronology has made chemical pigment identification obsolete in modern museums",
                  explanationEs:
                    "Incorrecto: la dendrocronología se menciona al final como complemento indispensable de la evidencia elemental, no como su reemplazo.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d03-read-p1-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'excise' in paragraph 1 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "cut out and remove",
                  explanationEs:
                    "Correcto: en 'excise pinpoint flecks of paint from canvas margins', apoyado por 'physically punctured' y contrastado con 'without detaching a single pigment grain', significa extraer o cortar fragmentos diminutos.",
                },
                {
                  id: "B",
                  text: "varnish and seal",
                  explanationEs:
                    "Incorrecto: barnizar protege la superficie, mientras que el párrafo 1 describe un muestreo invasivo que perforaba la obra.",
                },
                {
                  id: "C",
                  text: "tax at customs",
                  explanationEs:
                    "Incorrecto: trampa de homonimia con el sustantivo económico 'excise tax' (impuesto especial); aquí funciona como verbo técnico de extracción física.",
                },
                {
                  id: "D",
                  text: "photograph under ultraviolet light",
                  explanationEs:
                    "Incorrecto: las técnicas ópticas no destructivas se introducen recién en el párrafo 2 como contraste frente a esta práctica invasiva.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d03-read-p1-q03",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 3 about a painting whose pigments consist exclusively of seventeenth-century minerals such as lead-tin yellow and lapis lazuli?",
              options: [
                {
                  id: "A",
                  text: "It is guaranteed to be an autograph masterwork painted by a renowned seventeenth-century artist.",
                  explanationEs:
                    "Incorrecto: el párrafo 3 advierte expresamente contra esa conclusión precipitada ('merely establishes that the materials existed at the time').",
                },
                {
                  id: "B",
                  text: "It could still be an imitation or later copy executed using historically accurate pigments unless corroborated by other evidence.",
                  explanationEs:
                    "Correcto: dado que los pigmentos de época solo prueban compatibilidad material (a diferencia de un pigmento moderno que refuta de plano), un falsificador cuidadoso o un taller menor pudo emplearlos, exigiendo registros históricos y dendrocronología.",
                },
                {
                  id: "C",
                  text: "It cannot be scanned using macro X-ray fluorescence because lapis lazuli blocks X-ray beams.",
                  explanationEs:
                    "Incorrecto: no existe mención alguna de que el lapislázuli bloquee la fluorescencia de rayos X.",
                },
                {
                  id: "D",
                  text: "It must undergo invasive chemical reagent testing before museums can exhibit it.",
                  explanationEs:
                    "Incorrecto: la síntesis final combina evidencia elemental no destructiva con archivos, dendrocronología y radiografía, sin exigir volver al muestreo destructivo.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d03-read-p1-q04",
              questionType: "synthesis",
              prompt:
                "Why did detecting titanium white decisively overturn the attribution of the portraits mentioned in paragraph 2?",
              options: [
                {
                  id: "A",
                  text: "Antwerp guild laws prohibited workshops from importing white pigments during the 1600s.",
                  explanationEs:
                    "Incorrecto: no se mencionan leyes gremiales de importación en Amberes.",
                },
                {
                  id: "B",
                  text: "The compound did not exist in commercial production until roughly three centuries after the supposed date of the portraits.",
                  explanationEs:
                    "Correcto: conecta la pasiva de reporte ('portraits long believed to have been painted in seventeenth-century Antwerp') con el dato cronológico decisivo ('was not manufactured commercially until the 1920s').",
                },
                {
                  id: "C",
                  text: "Titanium white dissolves concealed charcoal underdrawings over time.",
                  explanationEs:
                    "Incorrecto: el texto indica que el mapeo permite visualizar tanto pinceladas como dibujos subyacentes ocultos, no que el pigmento los disuelva.",
                },
                {
                  id: "D",
                  text: "Only Venetian painters had access to synthetic titanium prior to the twentieth century.",
                  explanationEs:
                    "Incorrecto: ningún pintor tuvo acceso comercial al blanco de titanio antes de la década de 1920.",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
        {
          part: "part2_academic",
          id: "d03-read-p2",
          title: "Urban Soil Compaction, Permeable Infrastructure, and Hydrological Connectivity",
          cefrLevel: "B2",
          topicDomain: "Civil Engineering & Urban Hydrology",
          paragraphs: [
            "Flash flooding across rapidly expanding metropolitan basins has long been attributed almost exclusively to impervious surface sealing—the replacement of vegetated valleys with asphalt highways, concrete plazas, and commercial rooftops. While impervious cover undeniably accelerates surface runoff during heavy storms, recent urban hydrology studies indicate that ostensibly green spaces such as municipal parks, roadside lawns, and residential courtyards often absorb far less rainwater than regional flood models assume. During building construction, heavy earth-moving machinery routinely strips away organic topsoil and compresses underlying mineral horizons before thin turfgrass sod is laid back on top. Consequently, many manicured urban lawns exhibit infiltration capacities closer to those of compacted gravel parking lots than to those of undisturbed woodland soils.",
            "In natural forest or prairie ecosystems, soil permeability is maintained continuously through biological activity and root turnover. Burrowing earthworms, mycorrhizal fungi, and decaying plant roots create interconnected macropores that channel stormwater downward into shallow groundwater aquifers, recharging dry-season stream baseflow while filtering dissolved heavy metals. When mechanical compaction crushes these macropores, bulk soil density rises sharply and subsurface hydrological connectivity is severed. Rainwater that cannot percolate beyond the top two centimeters of turf saturates the surface within minutes, sheet-flowing into storm sewers and scouring downstream riverbanks with sudden hydraulic surges.",
            "To restore subsurface infiltration without demolishing dense street grids, civil engineers have increasingly installed permeable interlocking pavements alongside sunken bioretention gardens. [A] In controlled watershed trials, newly constructed porous asphalt lanes absorbed up to eighty percent of intense summer cloudbursts, substantially reducing peak discharge into aging municipal storm drains. [B] Within three to five years, however, fine tire-wear particulates and windblown silt are routinely washed into the pavement's surface voids, sealing the underlying crushed-stone reservoir if maintenance crews neglect periodic extraction. [C] To prevent such premature hydraulic failure, updated municipal engineering codes now require cities to have porous street corridors pressure-washed and vacuum-swept twice annually rather than treating installation as a maintenance-free fix. [D]",
            "Even well-maintained permeable pavements, however, cannot compensate for compacted subgrades if infiltrated water has nowhere to drain beneath the crushed-stone reservoir. Where underlying clay horizons have been compressed during prior land grading, civil engineers are now having deep structural soil cells and compost-amended infiltration trenches excavated prior to paving so street-tree roots can penetrate downward without buckling concrete sidewalks above. Long-term piezometer monitoring across retrofitted Scandinavian and Pacific Northwest districts indicates that pairing porous street surfaces with uncompacted structural subsoils restores seasonal groundwater recharge to nearly seventy percent of pre-urban levels. Ultimately, resilient metropolitan stormwater management depends not on isolated surface materials, but on re-establishing continuous vertical permeability from street level down to the underlying water table.",
          ],
          questions: [
            {
              id: "d03-read-p2-q01",
              questionType: "detail",
              prompt:
                "According to paragraph 1, why do many urban parks and residential lawns fail to absorb stormwater as effectively as flood models predict?",
              options: [
                {
                  id: "A",
                  text: "Turfgrass roots release natural waxes that repel rainwater from organic topsoil.",
                  explanationEs:
                    "Incorrecto: no se mencionan ceras repelentes en el césped; el problema radica en la remoción del suelo orgánico y la compactación mecánica inferior.",
                },
                {
                  id: "B",
                  text: "Construction equipment removes organic topsoil and compacts the mineral soil beneath before turf is installed.",
                  explanationEs:
                    "Correcto: el párrafo 1 explica que durante la urbanización la maquinaria pesada retira la capa orgánica superior y comprime los horizontes minerales subyacentes antes de colocar césped superficial.",
                },
                {
                  id: "C",
                  text: "Municipal authorities line park lawns with concrete slabs to prevent earthworm burrowing.",
                  explanationEs:
                    "Incorrecto: la comparación con estacionamientos de grava compactada ilustra su baja infiltración por densidad mecánica, no porque coloquen losas de concreto bajo los parques.",
                },
                {
                  id: "D",
                  text: "Urban lawns receive significantly higher rainfall totals than surrounding highways.",
                  explanationEs:
                    "Incorrecto: la diferencia no está en cuánta lluvia cae sobre ellos, sino en su reducida capacidad de infiltración ('infiltration capacities').",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d03-read-p2-q02",
              questionType: "rhetorical_purpose",
              prompt:
                "Why does the author discuss 'burrowing earthworms, mycorrhizal fungi, and decaying plant roots' in paragraph 2?",
              options: [
                {
                  id: "A",
                  text: "To explain the biological mechanisms that sustain soil macropores and vertical water percolation in undisturbed ecosystems",
                  explanationEs:
                    "Correcto: describe cómo la biota y el recambio radicular crean macroporos interconectados en ecosistemas naturales, sirviendo de contraste directo con el colapso físico causado por la compactación urbana.",
                },
                {
                  id: "B",
                  text: "To argue that earthworms contaminate shallow groundwater aquifers with dissolved heavy metals",
                  explanationEs:
                    "Incorrecto: contradice el texto, según el cual la infiltración a través del suelo poroso filtra los metales pesados disueltos ('while filtering dissolved heavy metals').",
                },
                {
                  id: "C",
                  text: "To show why forest soils erode downstream riverbanks faster than urban storm sewers do",
                  explanationEs:
                    "Incorrecto: la erosión brusca de riberas ('scouring downstream riverbanks') es consecuencia de la escorrentía superficial urbana cuando los macroporos han sido destruidos.",
                },
                {
                  id: "D",
                  text: "To prove that prairie grasses cannot survive in compost-amended urban trenches",
                  explanationEs:
                    "Incorrecto: en el párrafo 4 las zanjas enmendadas con compost se presentan precisamente como solución favorable para el enraizamiento.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d03-read-p2-q03",
              questionType: "vocabulary_in_context",
              prompt: "The word 'ostensibly' in paragraph 1 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "apparently on the surface, though not necessarily in function",
                  explanationEs:
                    "Correcto: 'ostensibly green spaces' señala lugares que a simple vista parecen áreas verdes permeables (parques y jardines), aunque hidrológicamente se comportan casi como superficies compactadas.",
                },
                {
                  id: "B",
                  text: "permanently protected by law",
                  explanationEs:
                    "Incorrecto: incluye patios residenciales y franjas viales sin referirse a estatus jurídico de conservación.",
                },
                {
                  id: "C",
                  text: "ecologically diverse and native",
                  explanationEs:
                    "Incorrecto: el texto los describe como céspedes podados ('manicured urban lawns') sobre subsuelo compactado, lejos de ecosistemas nativos intactos.",
                },
                {
                  id: "D",
                  text: "recently irrigated",
                  explanationEs:
                    "Incorrecto: no guarda relación semántica con riego artificial reciente.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d03-read-p2-q04",
              questionType: "sentence_insertion",
              prompt:
                "Look at the four squares [A], [B], [C], and [D] in paragraph 3. Where would the following sentence best fit?",
              sentenceToInsert:
                "Once those interstitial pores become obstructed, purportedly permeable roadways shed rainwater almost as rapidly as conventional poured concrete.",
              options: [
                {
                  id: "A",
                  text: "[A]",
                  explanationEs:
                    "Incorrecto: antes de `[A]` aún no se han mencionado poros ni cavidades superficiales ('surface voids'), ni tampoco ningún proceso de obstrucción por partículas.",
                },
                {
                  id: "B",
                  text: "[B]",
                  explanationEs:
                    "Incorrecto: la oración previa a `[B]` destaca el éxito inicial (80 % de absorción en pavimentos recién construidos); aún no se ha introducido el sedimento que obstruye esos poros.",
                },
                {
                  id: "C",
                  text: "[C]",
                  explanationEs:
                    "Correcto: doble anclaje cohesivo perfecto. Hacia atrás, 'those interstitial pores become obstructed' retoma 'the pavement's surface voids, sealing...'; hacia adelante, define el fallo exacto al que alude 'To prevent such premature hydraulic failure' en la oración siguiente.",
                },
                {
                  id: "D",
                  text: "[D]",
                  explanationEs:
                    "Incorrecto: colocarla en `[D]` rompería el vínculo referencial de 'such premature hydraulic failure' en la oración anterior y cerraría el párrafo contradiciendo la solución de lavado al vacío recién explicada.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d03-read-p2-q05",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraphs 3 and 4 about municipalities that install permeable pavements without budgeting for vacuum sweeping or subgrade remediation?",
              options: [
                {
                  id: "A",
                  text: "Their permeable streets will likely lose infiltration performance within a few years or trap water above compacted clay layers.",
                  explanationEs:
                    "Correcto: integra las dos advertencias técnicas: sin limpieza bianual los poros se sellan en 3–5 años (P3), y sin descompactar arcillas inferiores el agua infiltrada no puede drenar bajo el reservorio pétreo (P4).",
                },
                {
                  id: "B",
                  text: "They will still reduce peak storm-sewer discharge by eighty percent indefinitely.",
                  explanationEs:
                    "Incorrecto: el 80 % corresponde a carriles recién construidos ('newly constructed porous asphalt lanes') en ensayos controlados, rendimiento que cae drásticamente si se obstruyen.",
                },
                {
                  id: "C",
                  text: "Tree roots beneath their sidewalks will naturally break up compressed clay horizons without damaging pavement.",
                  explanationEs:
                    "Incorrecto: el párrafo 4 indica que se requieren celdas estructurales y zanjas con compost excavadas previamente para que las raíces penetren sin levantar las aceras ('without buckling sidewalks above').",
                },
                {
                  id: "D",
                  text: "Fine tire-wear particulates will dissolve automatically during intense summer cloudbursts.",
                  explanationEs:
                    "Incorrecto: las lluvias arrastran partículas de neumáticos y limo hacia dentro de los huecos sellándolos, no los disuelven.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d03-read-p2-q06",
              questionType: "synthesis",
              prompt: "Which statement best expresses the overarching thesis of the passage?",
              options: [
                {
                  id: "A",
                  text: "Demolishing asphalt highways and replacing them with turfgrass lawns is sufficient to eliminate metropolitan flash floods.",
                  explanationEs:
                    "Incorrecto: contradice el párrafo 1 (los céspedes urbanos sobre suelo compactado apenas infiltran) y el párrafo 3 (que busca soluciones sin demoler la trama vial).",
                },
                {
                  id: "B",
                  text: "Effective urban flood mitigation requires maintaining connected pore structure across both engineered surfaces and underlying soil horizons.",
                  explanationEs:
                    "Correcto: sintetiza todo el artículo: la falla oculta de los suelos urbanos compactados (P1–P2), el mantenimiento de porosidad en pavimentos permeables (P3) y la reconexión vertical profunda hasta el nivel freático (P4).",
                },
                {
                  id: "C",
                  text: "Permeable interlocking pavements have failed in watershed trials and should be replaced by wider concrete storm sewers.",
                  explanationEs:
                    "Incorrecto: los pavimentos permeables absorbieron hasta el 80 % en ensayos; el autor aboga por mantenerlos y preparar el subsuelo, no por descartarlos.",
                },
                {
                  id: "D",
                  text: "Earthworms and mycorrhizal fungi thrive more readily beneath porous asphalt than in natural woodland soils.",
                  explanationEs:
                    "Incorrecto: jamás se afirma que la fauna edáfica prospere más bajo el asfalto poroso que en bosques naturales.",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
      ],
    },

    // =========================================================================
    // 4. WRITING (35 min study / 25 min official timer without spellcheck)
    // =========================================================================
    writing: {
      skill: "writing",
      cefrLevel: "B2",
      title: "Laboratory Maintenance Causative Note & Open-Access Science Essay",
      estimatedMinutes: 35,
      timeLimitSeconds: 1500,
      focusSummaryEs:
        "Aplica el registro pasivo, causativo y cohesivo del Día 3: en la nota operativa (Part 1) solicita mantenimiento técnico mediante una estructura causativa ('have the unit recalibrated'), y en el ensayo (Part 2) incorpora una pasiva impersonal de reporte ('It is frequently argued that...') junto con sintagmas demostrativos cohesivos ('Such subscription barriers', 'This policy').",
      tasks: [
        {
          part: "part1_note",
          id: "d03-writ-p1",
          cefrLevel: "B2",
          title: "Requesting Urgent Calibration of a Laboratory Centrifuge",
          prompt:
            "During yesterday's marine chemistry lab session in Science Hall Room 204, the refrigerated centrifuge began vibrating excessively and displaying erratic rotor speeds. Write a formal note to Mr. Delgado, the Science Facilities Manager, in which you: (1) describe the specific malfunction observed yesterday, (2) explain which upcoming academic activity depends on the unit, and (3) request having the equipment inspected and recalibrated before Monday.",
          timeLimitSeconds: 300,
          minWords: 50,
          maxWords: 75,
          strategyGuideEs:
            "Redacta 3–4 oraciones concisas y objetivas: usa voz pasiva para describir el estado del equipo ('has been tagged out of service') y emplea una construcción causativa B2 ('Could you have a certified technician inspect and recalibrate the unit...?') para formular la solicitud con máxima naturalidad profesional.",
          recommendedConnectors: [
            "During yesterday's session,",
            "Consequently,",
            "have a technician recalibrate",
            "prior to Monday's",
          ],
          b2RubricChecklistEs: [
            "Cubre los 3 elementos del prompt (falla específica observada, actividad académica afectada y solicitud de inspección antes del lunes).",
            "Respeta el conteo estricto de 50 a 75 palabras con tono institucional respetuoso y directo.",
            "Integra correctamente al menos una estructura causativa ('have the unit recalibrated' / 'have a technician inspect') y una pasiva formal.",
            "Precisión ortográfica sin corrector en términos de laboratorio ('centrifuge', 'recalibrated', 'scheduled', 'excessively').",
          ],
          modelAnswerB2:
            "Dear Mr. Delgado, During yesterday's marine chemistry lab in Room 204, the refrigerated centrifuge vibrated excessively and displayed erratic rotor readings. The unit has been unplugged to prevent sample loss. Because thirty undergraduates are scheduled to process seawater pigment extracts during Monday morning's practical exam, could you please have an instrumentation technician inspect and recalibrate the rotor assembly by Friday afternoon? Sincerely, Lucas Meyer",
        },
        {
          part: "part2_essay",
          id: "d03-writ-p2",
          cefrLevel: "B2",
          title: "Mandatory Open-Access Publishing for Publicly Funded Research",
          prompt:
            "A large proportion of university scientific research is financed through public government grants, yet the resulting peer-reviewed studies are frequently published in commercial journals behind expensive subscription paywalls. Some policy advocates argue that all publicly funded research findings should be made freely accessible online immediately upon publication. Commercial publishers contend that subscription fees remain essential to cover editorial management and rigorous peer review. Which view do you support? Justify your position with specific reasons and examples.",
          timeLimitSeconds: 1200,
          minWords: 175,
          maxWords: 225,
          strategyGuideEs:
            "Construye cohesión académica entre oraciones: en vez de repetir 'paywalls' o 'research' de forma plana, encadena tus ideas con sintagmas demostrativos ('Such subscription barriers', 'This funding reform') y abre tu concesión con una pasiva impersonal ('It is often argued by commercial publishers that...').",
          recommendedConnectors: [
            "It is frequently argued that",
            "However, such fees",
            "Furthermore,",
            "those of wealthier institutions",
            "Ultimately,",
          ],
          b2RubricChecklistEs: [
            "Defiende una postura inequívoca desde el párrafo inicial frente al dilema entre acceso abierto y muros de pago editoriales.",
            "Mantiene la extensión entre 175 y 225 palabras con 4 párrafos claramente delimitados.",
            "Refuta el argumento contrario (costos editoriales y de arbitraje) explicando quién ejecuta realmente el arbitraje o cómo financiar los costos de edición.",
            "Usa con corrección al menos una pasiva académica de reporte ('It is argued that...' / 'are expected to...'), una estructura causativa y un pronombre demostrativo cohesivo ('those of', 'such barriers').",
            "Registro léxico formal libre de coloquialismos y con puntuación impecable.",
          ],
          modelAnswerB2:
            "Scientific breakthroughs financed by public tax revenues belong in the public domain, and governments should mandate immediate open-access publication for all state-funded research. Locking taxpayer-sponsored discoveries behind commercial journal paywalls restricts innovation and deepens global academic inequality.\n\nIt is frequently argued by commercial publishers that steep subscription fees are indispensable to finance rigorous peer review. However, external scholars who evaluate manuscripts and verify statistical methodology ordinarily perform that refereeing unpaid as a professional service, while public grants have already paid for laboratory equipment and researcher salaries. Requiring university libraries and citizens to pay again to read completed findings effectively forces taxpayers to subsidize the same study twice. Instead, funding agencies can allocate a modest publication fee within each grant to have accepted articles copyedited and hosted on open repositories.\n\nFurthermore, subscription paywalls impede urgent problem-solving outside elite universities. Municipal public-health physicians, secondary educators, and researchers at regional institutions in developing nations rarely enjoy database budgets comparable to those of wealthy research universities. Such financial barriers delay clinical and environmental solutions precisely where empirical evidence is needed most.\n\nUltimately, knowledge generated through collective public investment achieves its full societal value only when verified findings can be scrutinized and applied without commercial gatekeeping.",
        },
      ],
    },

    // =========================================================================
    // 5. SPEAKING (15 min study / chained prep + recording official timers)
    // =========================================================================
    speaking: {
      skill: "speaking",
      cefrLevel: "B2",
      title: "Workflow Optimization & Fragile Ecosystem Eco-Tourism Debate",
      estimatedMinutes: 15,
      timeLimitSeconds: 300,
      focusSummaryEs:
        "En Speaking B2, la cohesión auditiva importa tanto como la gramática: conecta cada idea retomando la anterior ('To resolve this bottleneck...', 'Such visitor caps...') e integra de forma natural una estructura causativa ('we had the lab coordinator standardize...') o pasiva de reporte ('Eco-tourism is often credited with...').",
      tasks: [
        {
          part: "part1_personal",
          id: "d03-speak-p1",
          cefrLevel: "B2",
          title: "Streamlining an Inefficient Academic or Workplace Process",
          prompt:
            "Describe a situation in which an inefficient procedure, shared resource system, or group workflow at your school or workplace caused avoidable delays. Explain what was going wrong and what changes were implemented to solve it.",
          prepSeconds: 30,
          recordSeconds: 45,
          structureTemplate: [
            "0–12s (Bottleneck): Identify the setting and the exact procedural delay using precise nouns.",
            "12–30s (Intervention): Explain what you had changed or standardized ('We had...', 'A shared log was set up...').",
            "30–45s (Measurable Impact): State how much time or confusion was saved as a result.",
          ],
          keyPhrasesB2: [
            "Last semester in our shared biology lab, valuable time was routinely wasted because...",
            "To eliminate this bottleneck, our team had the booking calendar...",
            "Once equipment checklists were standardized...",
            "As a result, turnaround times dropped noticeably.",
          ],
          selfRubricChecklistEs: [
            "Describí un problema organizativo concreto y su solución práctica dentro de los 45 segundos.",
            "Incorporé al menos una voz pasiva o construcción causativa ('was wasted', 'had the schedule reorganized').",
            "Enlacé las oraciones con referentes cohesivos claros ('this bottleneck', 'as a result') en lugar de repetir 'and then'.",
            "Hablé con articulación nítida y cerré la idea final sin quedar cortado a mitad de frase.",
          ],
          modelTranscriptB2:
            "Last semester in our undergraduate media studio, recording projects were constantly delayed because audio kits were returned with uncharged batteries and missing cables. Nobody knew who had used a kit last, so the first twenty minutes of every session were wasted hunting for adapters. To resolve this bottleneck, as student coordinator I had barcode labels attached to each case and got the department assistant to add a sixty-second digital sign-out checklist at the desk. Once every borrower was required to verify cable counts before leaving, missing-gear incidents dropped to almost zero, allowing production teams to start filming right on schedule.",
        },
        {
          part: "part2_opinion",
          id: "d03-speak-p2",
          cefrLevel: "B2",
          title: "Strict Visitor Caps vs. Eco-Tourism Funding in Fragile Reef Sanctuaries",
          prompt:
            "Fragile natural environments such as tropical coral reefs and coastal marine sanctuaries face growing pressure from international tourism. Proponents of regulated eco-tourism argue that visitor entrance fees provide indispensable funding for conservation patrols and local livelihoods. Environmental scientists counter that heavy tourist traffic inevitably degrades delicate habitats through boat anchors, chemical sunscreens, and physical contact, and therefore urge governments to impose strict seasonal closures or severe visitor caps. Which policy approach should governments prioritize, and why?",
          audioPrompt: {
            trackId: "day03-speaking-p2",
            audioUrl: "/audio/day03-speaking-p2.mp3",
            contextSetup: "Official iTEP Speaking Part 2 dual-perspective academic prompt.",
            turns: [
              {
                speakerLabel: "Examiner",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Fragile natural environments such as tropical coral reefs and coastal marine sanctuaries face growing pressure from international tourism. Proponents of regulated eco-tourism argue that visitor entrance fees provide indispensable funding for conservation patrols and local livelihoods. Environmental scientists counter that heavy tourist traffic inevitably degrades delicate habitats through boat anchors, chemical sunscreens, and physical contact, and therefore urge governments to impose strict seasonal closures or severe visitor caps. Which policy approach should governments prioritize, and why?",
                pauseAfterMs: 600,
              },
            ],
          },
          prepSeconds: 45,
          recordSeconds: 60,
          structureTemplate: [
            "0–12s (Clear Position): Endorse strict carrying-capacity caps paired with higher conservation permits.",
            "12–30s (Concession + Ecological Reality): Acknowledge tourism revenue ('Eco-tourism is widely credited with...'), then show why destroyed reefs kill tourism anyway.",
            "30–48s (Concrete Policy Mechanism): Explain rotational closures, mooring buoys, and higher per-visitor fees.",
            "48–60s (Synthesis): Conclude decisively that biological recovery must govern visitor volume.",
          ],
          keyPhrasesB2: [
            "Governments must prioritize strict ecological visitor caps and seasonal closures over high-volume tourism.",
            "While eco-tourism fees are widely credited with financing local patrols...",
            "Once slow-growing coral colonies are crushed or bleached, no entrance fee can instantly rebuild them.",
            "By having fewer visitors pay higher conservation permits...",
          ],
          selfRubricChecklistEs: [
            "Defendí una prioridad de política ambiental clara desde la primera oración.",
            "Utilicé al menos una pasiva de reporte ('are credited with', 'is known to') y vocabulario preciso del Día 3.",
            "Reconocí el argumento económico del ecoturismo y demostré cómo conciliar financiamiento con límites estrictos.",
            "Usé conectores y pronombres cohesivos ('Such closures', 'Once...', 'Rather than') sin muletillas excesivas.",
            "Concluí con firmeza dentro del límite exacto de 60 segundos.",
          ],
          modelTranscriptB2:
            "Governments should unequivocally prioritize strict visitor caps and seasonal closures over high-volume eco-tourism when managing fragile coral reefs. While tourism revenues are widely credited with financing marine patrols and coastal jobs, allowing thousands of snorkelers and tour boats into shallow lagoons daily destroys the very ecosystem on which that economy depends. Once slow-growing branching corals are fractured by fins or poisoned by chemical runoff, decades are required for the reef structure to recover, especially during marine heatwaves. Rather than relying on mass ticket volume, authorities should enforce rotational breeding closures and have certified marine guides accompany small, capped groups who pay a higher conservation permit fee. Such low-impact, high-value regulation preserves stable revenue for local rangers while giving vulnerable habitats the physical breathing room needed to regenerate.",
        },
      ],
    },
  },
  dailyChecklistEs: [
    "Completé los 10 reactivos de Grammar en menos de 8 minutos dominando 'to have + V3', causativas ('have/get') y descartando pasivas ilegales ('*was occurred').",
    "Resolví las 3 partes de Listening sobre Ecología Marina en una sola reproducción identificando cadenas causativas y compensaciones biológicas.",
    "Leí los 2 pasajes de Reading en menos de 20 minutos acertando el doble anclaje referencial de la inserción en `[C]`.",
    "Escribí la nota (50–75 palabras) y el ensayo (175–225 palabras) sin corrector ortográfico integrando causativas, pasiva impersonal y sintagmas demostrativos.",
    "Grabé y revisé mis respuestas de Speaking Part 1 (45s) y Part 2 (60s) verificando cohesión entre oraciones y cierre puntual.",
  ],
};
