import type { RoadmapDay } from "../../schemas/curriculum.schema.ts";

export const day04: RoadmapDay = {
  dayNumber: 4,
  sprintNumber: 1,
  cefrLevel: "B2",
  title: "Negative Inversion & Syntactic Parallelism",
  subtitleEs:
    "Inversión sujeto-auxiliar tras adverbiales negativos/restrictivos y paralelismo sintáctico correlativo",
  b2FocusSummaryEs:
    "En iTEP Academic-Plus, dos marcadores sintácticos separan de inmediato un perfil B1 de un B2 sólido: la inversión sujeto-auxiliar tras expresiones negativas o restrictivas iniciales ('Not only did...', 'Seldom have...', 'No sooner had... than', 'Only after... did') y la simetría estricta en estructuras paralelas correlativas ('not only... but also', 'both... and', 'neither... nor'). Dominar ambos patrones neutraliza las trampas más frecuentes de Grammar Part 1 y Part 2, acelera la lectura de prosa académica enfática y eleva notablemente el puntaje de rango gramatical en Writing y Speaking.",
  estimatedMinutes: 135,
  isMockExamDay: false,
  sections: {
    // =========================================================================
    // 1. GRAMMAR (25 min study / 8 min official pace for 10 items)
    // =========================================================================
    grammar: {
      skill: "grammar",
      cefrLevel: "B2",
      title: "Negative Adverbial Inversion & Correlative Parallelism",
      estimatedMinutes: 25,
      timeLimitSeconds: 480,
      focusSummaryEs:
        "Cuando un adverbio negativo ('Seldom', 'Rarely', 'Never', 'Not only') abre la oración, invierte auxiliar + sujeto como en una pregunta; pero si la frase empieza con 'Only after/when/if + cláusula subordinada', conserva el orden normal en la primera cláusula e invierte únicamente el verbo principal.",
      questions: [
        {
          part: "part1_fill_blank",
          id: "d04-gram-p1-q01",
          cefrLevel: "B2",
          grammarTopic: "Initial Negative Inversion with 'Not only'",
          sentenceWithBlank:
            "Not only _____ peak-hour bus delays by forty percent, but the dedicated transit corridor also lowered nitrogen-dioxide levels along commercial avenues.",
          options: [
            {
              id: "A",
              text: "the municipal redesign reduced",
              explanationEs:
                "Incorrecto: al encabezar la oración con el operador negativo-enfático 'Not only', mantener el orden declarativo sujeto + verbo ('the municipal redesign reduced') es agramatical.",
            },
            {
              id: "B",
              text: "did the municipal redesign reduce",
              explanationEs:
                "Correcto: 'Not only' inicial exige inversión sujeto-auxiliar en pasado ('did + sujeto + verbo en forma base'), guardando concordancia temporal con 'lowered' en la segunda cláusula.",
            },
            {
              id: "C",
              text: "did the municipal redesign reduced",
              explanationEs:
                "Incorrecto: tras el auxiliar invertido 'did', el verbo léxico debe aparecer obligatoriamente en infinitivo sin 'to' ('reduce'), nunca flexionado en pasado ('reduced').",
            },
            {
              id: "D",
              text: "was the municipal redesign reducing",
              explanationEs:
                "Incorrecto: aunque aplica inversión, el pasado progresivo ('was ... reducing') rompe la simetría aspectual de logro puntual completado ('by forty percent ... lowered').",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Si 'Not only' abre una cláusula completa, aplica de inmediato la fórmula interrogativa: Auxiliar ('do/does/did/have/had/can') + Sujeto + Verbo base/participio.",
        },
        {
          part: "part1_fill_blank",
          id: "d04-gram-p1-q02",
          cefrLevel: "B2",
          grammarTopic: "Delayed Main-Clause Inversion After 'Only after'",
          sentenceWithBlank:
            "Only after structural engineers recalibrated the wind-tunnel sensors _____ why the suspension cables vibrated during coastal gales.",
          options: [
            {
              id: "A",
              text: "they could determine",
              explanationEs:
                "Incorrecto: cuando una cláusula adverbial introducida por 'Only after' precede a la cláusula principal, la cláusula matriz exige inversión modal ('could they determine'), no orden declarativo.",
            },
            {
              id: "B",
              text: "could they determine",
              explanationEs:
                "Correcto: la cláusula subordinada ('engineers recalibrated') mantiene orden declarativo normal, y la inversión recae exactamente sobre el auxiliar modal de la cláusula principal ('could they determine').",
            },
            {
              id: "C",
              text: "did they could determine",
              explanationEs:
                "Incorrecto: los verbos modales ('could') funcionan como sus propios operadores de inversión y jamás admiten el auxiliar 'did'.",
            },
            {
              id: "D",
              text: "determined they",
              explanationEs:
                "Incorrecto: en inglés contemporáneo un verbo léxico como 'determine' no puede invertirse directamente delante del pronombre sujeto sin auxiliar.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "En estructuras con 'Only after / Only when / Only if + cláusula', deja intacto el primer verbo y aplica la inversión exclusivamente al comienzo de la segunda cláusula (la matriz).",
        },
        {
          part: "part1_fill_blank",
          id: "d04-gram-p1-q03",
          cefrLevel: "B2",
          grammarTopic: "Temporal Negative Inversion ('Hardly ... when')",
          sentenceWithBlank:
            "Hardly _____ the regional commuter rail expansion opened when suburban housing densities near the new stations began to surge.",
          options: [
            {
              id: "A",
              text: "had",
              explanationEs:
                "Correcto: la construcción correlativa de inmediatez en pasado exige 'Hardly/Scarcely + had + sujeto + participio pasado ('opened') ... when + Past Simple ('began')'.",
            },
            {
              id: "B",
              text: "did",
              explanationEs:
                "Incorrecto: el verbo principal tras el sujeto está en participio pasado ('opened'); combinar 'did' con una forma en '-ed' produce un error morfológico grave.",
            },
            {
              id: "C",
              text: "was",
              explanationEs:
                "Incorrecto: 'open' aquí funciona intransitivamente ('la ampliación ferroviaria se inauguró/abrió'); 'was ... opened' alteraría la correlación aspectual de anterioridad inmediata respecto a 'when ... began'.",
            },
            {
              id: "D",
              text: "has",
              explanationEs:
                "Incorrecto: el auxiliar en presente 'has' choca temporalmente con la cláusula subordinada en pasado definido ('when ... densities ... began').",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Memoriza los dos pares fijos de sucesión inmediata con Past Perfect invertido: 'Hardly / Scarcely had + S + V3 ... when' y 'No sooner had + S + V3 ... than'.",
        },
        {
          part: "part1_fill_blank",
          id: "d04-gram-p1-q04",
          cefrLevel: "B2",
          grammarTopic: "Frequency Negative Adverbials ('Seldom')",
          sentenceWithBlank:
            "Seldom _____ such rapid industrial urbanization without experiencing severe strain on municipal water infrastructure.",
          options: [
            {
              id: "A",
              text: "agrarian provinces have undergone",
              explanationEs:
                "Incorrecto: 'Seldom' tiene valor semántico negativo ('rara vez') y, al situarse en posición inicial absoluta, invalida el orden sujeto + auxiliar.",
            },
            {
              id: "B",
              text: "do agrarian provinces undergone",
              explanationEs:
                "Incorrecto: aunque invierte el auxiliar, 'do' no puede combinarse con el participio pasado 'undergone' (requeriría 'undergo').",
            },
            {
              id: "C",
              text: "have agrarian provinces undergone",
              explanationEs:
                "Correcto: el adverbio restrictivo 'Seldom' desencadena la inversión del auxiliar perfecto 'have' delante del sujeto plural 'agrarian provinces', seguido del participio 'undergone'.",
            },
            {
              id: "D",
              text: "has agrarian provinces undergone",
              explanationEs:
                "Incorrecto: invierte la estructura pero falla en concordancia de número, pues 'has' es singular mientras que el sujeto 'agrarian provinces' es plural.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Al invertir un tiempo compuesto tras 'Seldom', 'Rarely' o 'Little', comprueba siempre dos cosas: concordancia en número con el sujeto pospuesto y forma exacta del participio ('undergone').",
        },
        {
          part: "part1_fill_blank",
          id: "d04-gram-p1-q05",
          cefrLevel: "B2",
          grammarTopic: "Correlative Syntactic Parallelism ('both ... and')",
          sentenceWithBlank:
            "The updated metropolitan mobility plan seeks both to subsidize off-peak commuter passes and _____ protected bicycle lanes around university districts.",
          options: [
            {
              id: "A",
              text: "expanding",
              explanationEs:
                "Incorrecto: rompe el paralelismo sintáctico al emparejar un infinitivo ('to subsidize') detrás de 'both' con un gerundio ('expanding') detrás de 'and'.",
            },
            {
              id: "B",
              text: "the expansion of",
              explanationEs:
                "Incorrecto: introduce un sintagma nominal ('the expansion of') que destruye la simetría con la cláusula de infinitivo 'to subsidize'.",
            },
            {
              id: "C",
              text: "it expands",
              explanationEs:
                "Incorrecto: inserta una cláusula finita con pronombre sujeto ('it expands') incompatible con el complemento infinitivo de 'seeks'.",
            },
            {
              id: "D",
              text: "to expand",
              explanationEs:
                "Correcto: preserva un paralelismo correlativo impecable ('both + to-infinitive ... and + to-infinitive') dependiente del verbo matriz 'seeks'.",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "En correlativas ('both X and Y', 'not only X but also Y', 'either X or Y'), mira la palabra exacta que sigue al primer miembro ('both to subsidize') y replica esa misma categoría gramatical tras el segundo.",
        },
        {
          part: "part2_error_identification",
          id: "d04-gram-p2-q06",
          cefrLevel: "B2",
          grammarTopic: "Broken Parallelism in 'not only ... but also'",
          sentenceWithMarkedSegments:
            "The architectural heritage board voted not only [A]{to restore} the limestone arcade [B]{of the} nineteenth-century terminal [C]{but also} [D]{modernizing} its subterranean drainage conduits.",
          correctedSegment: "to modernize",
          options: [
            {
              id: "A",
              text: "to restore",
              explanationEs:
                "Correcto en la oración: complemento de infinitivo exigido por el verbo 'voted' ('voted ... to restore') y colocado justamente tras 'not only'.",
            },
            {
              id: "B",
              text: "of the",
              explanationEs:
                "Correcto en la oración: enlace preposicional posesivo estándar entre 'the limestone arcade' y 'nineteenth-century terminal'.",
            },
            {
              id: "C",
              text: "but also",
              explanationEs:
                "Correcto en la oración: segundo miembro legítimo de la correlación 'not only ... but also'.",
            },
            {
              id: "D",
              text: "modernizing",
              explanationEs:
                "Incorrecto (contiene el error): dado que después de 'not only' aparece un infinitivo ('to restore'), colocar el gerundio 'modernizing' tras 'but also' rompe el paralelismo sintáctico; debe corregirse a 'to modernize'.",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "En Grammar Part 2, cada vez que detectes 'not only ... but also', encierra mentalmente lo que sigue a cada conector: infinitivo exige infinitivo; gerundio exige gerundio; preposición exige la misma preposición.",
        },
        {
          part: "part2_error_identification",
          id: "d04-gram-p2-q07",
          cefrLevel: "B2",
          grammarTopic: "Correlative Conjunction Mismatch ('No sooner ... than')",
          sentenceWithMarkedSegments:
            "[A]{No sooner had} the metallurgical treatise [B]{been translated} into French [C]{when} civil engineers across Europe [D]{adopted} its wrought-iron truss calculations.",
          correctedSegment: "than",
          options: [
            {
              id: "A",
              text: "No sooner had",
              explanationEs:
                "Correcto en la oración: inversión perfecta del auxiliar 'had' delante del sujeto tras la locución comparativa negativa 'No sooner'.",
            },
            {
              id: "B",
              text: "been translated",
              explanationEs:
                "Correcto en la oración: participio pasivo ('had ... been translated') exigido porque el tratado recibe la acción de ser traducido.",
            },
            {
              id: "C",
              text: "when",
              explanationEs:
                "Incorrecto (contiene el error): 'sooner' es morfológicamente un comparativo, por lo que exige obligatoriamente la conjunción comparativa 'than' ('No sooner had ... than'), nunca 'when' (que corresponde a 'Hardly/Scarcely').",
            },
            {
              id: "D",
              text: "adopted",
              explanationEs:
                "Correcto en la oración: verbo en Past Simple para el segundo evento consecutivo en el pasado.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "No confundas los enlaces temporales en Part 2: 'sooner' termina en '-er' comparativo -> exige 'than'; 'hardly/scarcely/barely' son adverbios -> exigen 'when'.",
        },
        {
          part: "part2_error_identification",
          id: "d04-gram-p2-q08",
          cefrLevel: "B2",
          grammarTopic: "Missing Inversion After Negative Prepositional Phrase",
          sentenceWithMarkedSegments:
            "[A]{Under no circumstances} [B]{municipal planners should} approve high-density residential towers [C]{without first assessing} [D]{regional} aquifer capacity.",
          correctedSegment: "should municipal planners",
          options: [
            {
              id: "A",
              text: "Under no circumstances",
              explanationEs:
                "Correcto en la oración: locución preposicional enfática de negación absoluta ('bajo ninguna circunstancia') perfectamente idiomática al inicio de oración.",
            },
            {
              id: "B",
              text: "municipal planners should",
              explanationEs:
                "Incorrecto (contiene el error): una frase preposicional con 'no' adelantada al inicio con alcance sobre toda la cláusula ('Under no circumstances', 'At no time', 'In no way') obliga a invertir el modal antes del sujeto: 'should municipal planners'.",
            },
            {
              id: "C",
              text: "without first assessing",
              explanationEs:
                "Correcto en la oración: tras la preposición 'without', el verbo debe ir en gerundio ('assessing'), modificado limpiamente por el adverbio 'first'.",
            },
            {
              id: "D",
              text: "regional",
              explanationEs:
                "Correcto en la oración: adjetivo atributivo que modifica correctamente al grupo nominal 'aquifer capacity'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Distingue frases preposicionales neutras ('In many cities, planners should...') de frases preposicionales negativas ('In no case / At no point / Under no circumstances -> should planners...').",
        },
        {
          part: "part2_error_identification",
          id: "d04-gram-p2-q09",
          cefrLevel: "B2",
          grammarTopic: "Correlative Pairing in 'Neither ... nor'",
          sentenceWithMarkedSegments:
            "Neither [A]{widening} suburban ring roads [B]{or} subsidizing downtown parking structures [C]{has reduced} commuter travel times [D]{in comparable} metropolitan areas.",
          correctedSegment: "nor",
          options: [
            {
              id: "A",
              text: "widening",
              explanationEs:
                "Correcto en la oración: gerundio nominalizado que guarda simetría paralela exacta con el segundo gerundio 'subsidizing'.",
            },
            {
              id: "B",
              text: "or",
              explanationEs:
                "Incorrecto (contiene el error): el correlativo negativo 'Neither' exige inexcusablemente 'nor' como par coordinador, jamás 'or' (reservado para 'Either ... or').",
            },
            {
              id: "C",
              text: "has reduced",
              explanationEs:
                "Correcto en la oración: en 'Neither X nor Y', el verbo concuerda con el núcleo más cercano; aquí 'subsidizing downtown parking structures' es una cláusula de gerundio singular, por lo que 'has reduced' es impecable.",
            },
            {
              id: "D",
              text: "in comparable",
              explanationEs:
                "Correcto en la oración: sintagma preposicional con adjetivo ('comparable metropolitan areas') bien formado.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Revisa siempre dos reglas con 'Neither': (1) su pareja obligatoria es 'nor' (nunca 'or'), y (2) el verbo concuerda en número con el elemento situado después de 'nor'.",
        },
        {
          part: "part2_error_identification",
          id: "d04-gram-p2-q10",
          cefrLevel: "B2",
          grammarTopic: "Parallelism in Comparative Academic Structures",
          sentenceWithMarkedSegments:
            "Demographic historians note that [A]{tracking} nineteenth-century seasonal migration through parish registers [B]{is far more} reliable [C]{than} [D]{to rely on} incomplete census tallies.",
          correctedSegment: "relying on",
          options: [
            {
              id: "A",
              text: "tracking",
              explanationEs:
                "Correcto en la oración: sujeto en gerundio ('tracking ... migration') de la cláusula nominal introducida por 'that'.",
            },
            {
              id: "B",
              text: "is far more",
              explanationEs:
                "Correcto en la oración: verbo singular 'is' concordando con el sujeto en gerundio 'tracking', intensificado por el adverbio de grado 'far' ante 'more reliable'.",
            },
            {
              id: "C",
              text: "than",
              explanationEs:
                "Correcto en la oración: conjunción comparativa estándar exigida por 'more reliable'.",
            },
            {
              id: "D",
              text: "to rely on",
              explanationEs:
                "Incorrecto (contiene el error): las comparaciones académicas con 'more ... than' exigen paralelismo estricto entre los términos comparados; como el primer término es un gerundio ('tracking'), el segundo debe ser también gerundio ('relying on'), no infinitivo ('to rely on').",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Las estructuras comparativas ('more/less ... than', 'as ... as', 'prefer X to Y') obedecen la misma ley de paralelismo que las conjunciones correlativas: gerundio se compara con gerundio.",
        },
      ],
    },

    // =========================================================================
    // 2. LISTENING (35 min study / strict single-play simulation)
    // =========================================================================
    listening: {
      skill: "listening",
      cefrLevel: "B2",
      title: "Campus Transit Rerouting, Commuter Equity Capstone & Induced Demand Lecture",
      estimatedMinutes: 35,
      timeLimitSeconds: 900,
      focusSummaryEs:
        "En discursos académicos sobre sociología urbana y transporte, capta las inversiones enfáticas ('Not only did...', 'Seldom do...') porque los profesores las usan deliberadamente en iTEP Listening Part 3 para subrayar hallazgos contraintuitivos que luego aparecen en las preguntas.",
      items: [
        {
          part: "part1_short_dialogue",
          id: "d04-list-p1",
          title: "Inter-Campus Shuttle Rerouting & Bike Locker Access",
          cefrLevel: "B2",
          audio: {
            trackId: "day04-listening-p1",
            audioUrl: "/audio/day04-listening-p1.mp3",
            contextSetup:
              "A graduate student speaks with a coordinator at the university transportation services desk.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Hi—I waited twenty minutes at the West Hall stop for the engineering shuttle this morning, only to hear from a classmate that the stop was suspended.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-US-GuyNeural",
                text: "Yes, municipal crews closed Elm Avenue last night to lay light-rail tracks, so the shuttle now boards behind the chemistry annex until November thirtieth.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "That adds a fifteen-minute walk from the commuter train station. I'd cycle from the station instead, but secure bike lockers at the engineering quad usually have a semester-long waitlist.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-US-GuyNeural",
                text: "Not anymore—we just installed thirty temporary electronic pods next to the robotics lab specifically for rail commuters affected by the detour, and I can activate your ID card for one right now at no charge.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d04-list-p1-q01",
              prompt: "What will the student most likely do next?",
              options: [
                {
                  id: "A",
                  text: "Have her student ID card registered for a temporary bicycle locker near the robotics lab",
                  explanationEs:
                    "Correcto: la estudiante prefería ir en bicicleta desde la estación salvo por la lista de espera de casilleros, y el coordinador le ofrece activar en ese mismo instante uno de los nuevos módulos gratuitos.",
                },
                {
                  id: "B",
                  text: "Submit a formal complaint to the city regarding the light-rail construction on Elm Avenue",
                  explanationEs:
                    "Incorrecto: en ningún momento manifiesta intención de presentar una queja municipal; busca una alternativa práctica de traslado diario.",
                },
                {
                  id: "C",
                  text: "Pay a semester fee to join the standard bicycle-locker waitlist at West Hall",
                  explanationEs:
                    "Incorrecto: contradice dos datos explícitos del coordinador: ya no hay lista de espera para los módulos temporales y la activación no tiene costo ('at no charge').",
                },
                {
                  id: "D",
                  text: "Wait until November thirtieth before commuting to the engineering campus again",
                  explanationEs:
                    "Incorrecto: necesita asistir regularmente a su campus y por eso evalúa cómo cubrir el trayecto desde la estación durante las obras.",
                },
              ],
              correctOptionId: "A",
            },
          ],
          keyTakeawayEs:
            "En diálogos breves con giro correctivo ('Not anymore—we just installed...'), la solución ofrecida en la última línea resuelve exactamente la objeción que el estudiante acaba de plantear.",
        },
        {
          part: "part2_conversation",
          id: "d04-list-p2",
          title: "Urban Sociology Capstone: Sampling Bias in Bus Rapid Transit Surveys",
          cefrLevel: "B2",
          audio: {
            trackId: "day04-listening-p2",
            audioUrl: "/audio/day04-listening-p2.mp3",
            contextSetup:
              "An undergraduate urban sociology student meets with her thesis advisor to review preliminary fieldwork data on a regional bus rapid transit line.",
            turns: [
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Come in, Nadia. I read your preliminary chapter on the Crosstown Bus Rapid Transit corridor. Your spatial maps of feeder-sidewalk gaps in outer-ring neighborhoods are very sharp.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Thanks, Professor Sterling. Actually, I'm puzzled by my rider survey results. Eighty-two percent of the passengers I interviewed rated transfer wait times as 'highly convenient,' yet neighborhood associations still claim the new corridor underserves hospital and warehouse shift workers.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Interesting discrepancy. Walk me through your sampling schedule—what hours were you administering questionnaires on the platforms?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Mostly Tuesdays and Thursdays between eleven in the morning and two-thirty in the afternoon, right between my morning seminar and my statistics lab.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "There's your methodological blind spot. Not only do midday riders consist disproportionately of university students and flexible remote professionals, but the regional transit agency also runs feeder buses on different headways before six a.m. and after ten p.m.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Oh, of course! Logistics and hospital technicians changing shifts at five-thirty in the morning weren't in my sample at all, and that's probably when suburban feeder connections drop to once every forty-five minutes.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Precisely. Seldom can a single time-window survey capture transit equity across occupational groups. Fortunately, you don't have to throw out your midday interviews—you can reframe them as a baseline comparison group.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "So if I add early-morning and late-evening platform interviews next week, would that be enough to balance the dataset before the draft deadline?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Do two early-morning sessions for qualitative context, and pair them with the transit authority's open-data smart-card tap logs. Those anonymized timestamps show exact transfer intervals by hour across thirty thousand trips, giving you both statistical breadth and rider voices.",
                pauseAfterMs: 550,
              },
            ],
          },
          questions: [
            {
              id: "d04-list-p2-q01",
              prompt: "What contradiction prompted Nadia to seek her advisor's feedback?",
              options: [
                {
                  id: "A",
                  text: "Her sidewalk maps showed wide pedestrian walkways where city blueprints indicated none.",
                  explanationEs:
                    "Incorrecto: el profesor elogia sus mapas de brechas peatonales ('feeder-sidewalk gaps') sin señalar contradicción alguna en ellos.",
                },
                {
                  id: "B",
                  text: "Her survey respondents praised transfer convenience despite community complaints from shift workers.",
                  explanationEs:
                    "Correcto: Nadia explica que el 82 % de sus encuestados calificó los transbordos como muy convenientes, mientras las asociaciones vecinales denuncian mal servicio para trabajadores por turnos.",
                },
                {
                  id: "C",
                  text: "Hospital and warehouse workers refused to participate in her platform interviews.",
                  explanationEs:
                    "Incorrecto: esos trabajadores no rechazaron la encuesta; simplemente no estaban en las plataformas en el horario de mediodía en que Nadia encuestó.",
                },
                {
                  id: "D",
                  text: "The transit authority canceled the Crosstown Bus Rapid Transit line during midday hours.",
                  explanationEs:
                    "Incorrecto: al contrario, Nadia realizó todas sus entrevistas al mediodía mientras la línea operaba normalmente.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d04-list-p2-q02",
              prompt: "What flaw does Professor Sterling identify in Nadia's data collection?",
              options: [
                {
                  id: "A",
                  text: "She interviewed passengers on only one station platform instead of across the entire corridor.",
                  explanationEs:
                    "Incorrecto: el sesgo señalado no es geográfico de una sola estación, sino temporal por encuestar exclusivamente entre las 11:00 a. m. y las 2:30 p. m.",
                },
                {
                  id: "B",
                  text: "Her questionnaire used overly technical sociological jargon that confused commuters.",
                  explanationEs:
                    "Incorrecto: el profesor nunca critica la redacción de las preguntas del cuestionario.",
                },
                {
                  id: "C",
                  text: "Conducting surveys solely around midday excluded early-morning and late-night shift commuters.",
                  explanationEs:
                    "Correcto: encuestar entre clases al mediodía sobrerrepresentó a estudiantes y profesionales con horario flexible, omitiendo las franjas antes de las 6:00 a. m. y después de las 10:00 p. m., cuando los buses alimentadores pasan con menor frecuencia.",
                },
                {
                  id: "D",
                  text: "Her sample included too few university students to be statistically valid.",
                  explanationEs:
                    "Incorrecto: el problema fue exactamente el opuesto: su muestra de mediodía contenía una proporción excesiva de estudiantes universitarios.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d04-list-p2-q03",
              prompt:
                "What does Professor Sterling suggest Nadia do with her existing midday survey data?",
              options: [
                {
                  id: "A",
                  text: "Discard the questionnaires completely to avoid contaminating her regression model",
                  explanationEs:
                    "Incorrecto: le dice expresamente que no tiene que desecharlas ('you don't have to throw out your midday interviews').",
                },
                {
                  id: "B",
                  text: "Retain them as an off-peak comparison group against off-hour commuter experiences",
                  explanationEs:
                    "Correcto: recomienda reencuadrar las entrevistas de mediodía como grupo base de comparación ('reframe them as a baseline comparison group').",
                },
                {
                  id: "C",
                  text: "Submit them to the neighborhood association for independent verification",
                  explanationEs:
                    "Incorrecto: las asociaciones vecinales solo se mencionaron como fuente inicial de las quejas comunitarias.",
                },
                {
                  id: "D",
                  text: "Merge them with survey responses collected by her statistics lab classmates",
                  explanationEs:
                    "Incorrecto: su laboratorio de estadística solo se mencionó para explicar su hueco de horario los martes y jueves.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d04-list-p2-q04",
              prompt:
                "Why does Professor Sterling recommend using the transit authority's smart-card logs?",
              options: [
                {
                  id: "A",
                  text: "They identify the names and employers of individual hospital and warehouse workers.",
                  explanationEs:
                    "Incorrecto: el profesor aclara explícitamente que los registros son anónimos ('anonymized timestamps').",
                },
                {
                  id: "B",
                  text: "They provide large-scale hourly transfer durations to complement a small set of early-morning interviews.",
                  explanationEs:
                    "Correcto: combinan amplitud estadística ('exact transfer intervals by hour across thirty thousand trips') con el contexto cualitativo de dos sesiones matutinas de entrevistas.",
                },
                {
                  id: "C",
                  text: "They replace the need to conduct any further in-person interviews on transit platforms.",
                  explanationEs:
                    "Incorrecto: el profesor le indica realizar dos sesiones temprano por la mañana ('Do two early-morning sessions') además de usar los registros digitales.",
                },
                {
                  id: "D",
                  text: "They calculate the municipal cost of paving feeder sidewalks in outer-ring districts.",
                  explanationEs:
                    "Incorrecto: las tarjetas inteligentes registran marcas de tiempo de viaje y transbordo, no presupuestos de pavimentación.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "Cuando una conversación académica gira en torno a una anomalía empírica, identifica el sesgo de muestreo ('who/when was left out') y fíjate en cómo el asesor combina métodos mixtos (cualitativo + cuantitativo) como solución.",
        },
        {
          part: "part3_lecture",
          id: "d04-list-p3",
          title: "Urban Sociology: Induced Travel Demand, Braess's Paradox & Highway Removal",
          cefrLevel: "B2",
          audio: {
            trackId: "day04-listening-p3",
            audioUrl: "/audio/day04-listening-p3.mp3",
            contextSetup:
              "A sociology professor delivers a lecture on urban transportation networks and spatial behavior.",
            turns: [
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Let's turn today to one of the most persistent puzzles in urban sociology and transport planning: why adding lanes to congested metropolitan expressways almost never delivers lasting traffic relief.",
                pauseAfterMs: 700,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Intuitively, municipal officials often treat automobile traffic like water flowing through a pipe—assuming that if a six-lane highway backs up, widening it to ten lanes will clear the bottleneck. Yet traffic isn't a fixed volume of liquid; it's an adaptive social behavior governed by perceived time costs.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Economists call the resulting rebound 'induced travel demand.' No sooner does a widened highway cut commute times than latent trips materialize: drivers who traveled before dawn return to peak hours, rail commuters switch to solo driving, and households relocate to farther suburbs. Within five to seven years, studies show an elasticity near one-to-one—a ten percent lane increase generates a ten percent traffic increase, restoring congestion.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Even more counterintuitive is the reverse. Mathematician Dietrich Braess proved that adding a fast shortcut to a selfishly routed network can slow everyone down when drivers converge on shared feeder bottlenecks—known as Braess's Paradox. Conversely, removing an overburdened arterial link can improve overall network flow.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Seoul provided a dramatic real-world test in two thousand three when planners demolished the elevated Cheonggyecheon freeway—which carried over one hundred sixty thousand vehicles daily—to uncover a buried historic stream and build a six-kilometer linear park. Critics predicted gridlock. Instead, not only did surrounding arterial speeds remain stable or improve as trips dispersed onto expanded subway and bus lanes, but downtown summer temperatures along the corridor also dropped by more than three degrees Celsius.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Of course, seldom does highway removal succeed in isolation; Seoul simultaneously upgraded bus rapid transit before dismantling a single ramp. Still, the sociological takeaway is clear: transport infrastructure doesn't merely accommodate existing travel habits—it actively shapes how urban residents choose to move and congregate.",
                pauseAfterMs: 650,
              },
            ],
          },
          questions: [
            {
              id: "d04-list-p3-q01",
              prompt: "What is the central thesis of the professor's lecture?",
              options: [
                {
                  id: "A",
                  text: "Road capacity actively molds commuter behavior, explaining why highway expansion fuels new traffic while strategic removal paired with transit can succeed.",
                  explanationEs:
                    "Correcto: recoge la tesis global de la clase: el tráfico es una conducta social adaptativa (demanda inducida al ampliar vías y redistribución exitosa al retirar autopistas junto con mejoras de transporte público).",
                },
                {
                  id: "B",
                  text: "Metropolitan expressways should be widened every five to seven years to keep pace with suburban population growth.",
                  explanationEs:
                    "Incorrecto: invierte por completo el argumento; el plazo de cinco a siete años se cita para mostrar cómo la demanda inducida anula cualquier ampliación.",
                },
                {
                  id: "C",
                  text: "Fluid-dynamics engineering models predict commuter choices more accurately than sociological surveys.",
                  explanationEs:
                    "Incorrecto: el profesor refuta explícitamente la analogía hidráulica ('traffic isn't a fixed volume of liquid').",
                },
                {
                  id: "D",
                  text: "Removing urban highways reduces congestion even when cities cut public bus and subway service.",
                  explanationEs:
                    "Incorrecto: al final advierte expresamente que la demolición rara vez funciona aislada y que Seúl amplió antes sus carriles de bus y metro.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d04-list-p3-q02",
              prompt:
                "Why does the professor compare automobile traffic to water flowing through a pipe?",
              options: [
                {
                  id: "A",
                  text: "To explain how rainwater drainage systems were integrated under Seoul's linear park",
                  explanationEs:
                    "Incorrecto: aunque menciona el arroyo restaurado en Seúl más adelante, la metáfora de la tubería aparece al inicio para ilustrar una falacia de planificación vial.",
                },
                {
                  id: "B",
                  text: "To illustrate a common misconception that treats trip volume as fixed rather than behaviorally elastic",
                  explanationEs:
                    "Correcto: introduce la intuición errónea de muchos funcionarios que asumen un volumen fijo de autos, para luego contrastarla con la conducta adaptativa de los viajeros.",
                },
                {
                  id: "C",
                  text: "To show how Dietrich Braess originally formulated his mathematical network theorem",
                  explanationEs:
                    "Incorrecto: Braess formuló su paradoja mediante teoría de redes con rutas egoístas, no mediante hidráulica de tuberías.",
                },
                {
                  id: "D",
                  text: "To argue that narrower suburban streets suffer greater flood damage than six-lane highways",
                  explanationEs:
                    "Incorrecto: interpretación literalista ajena al contenido sociológico de la exposición.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d04-list-p3-q03",
              prompt:
                "According to the lecture, which of the following contributes to 'induced travel demand' after a highway is widened?",
              options: [
                {
                  id: "A",
                  text: "Municipal governments raising commuter rail fares to finance highway maintenance",
                  explanationEs:
                    "Incorrecto: no se menciona ningún incremento de tarifas ferroviarias en la clase.",
                },
                {
                  id: "B",
                  text: "Commercial freight trucks being legally restricted from using surrounding surface streets",
                  explanationEs:
                    "Incorrecto: el transporte de carga pesada no figura entre las tres fuentes de viajes latentes explicadas.",
                },
                {
                  id: "C",
                  text: "Commuters shifting back into rush hour, switching from rail to driving, and moving to farther suburbs",
                  explanationEs:
                    "Correcto: resume con exactitud las tres fuentes citadas por el profesor cuando caen temporalmente los tiempos de viaje ('return to peak hours, switch from rail to solo driving, and ... relocate to farther suburbs').",
                },
                {
                  id: "D",
                  text: "Tourists visiting newly constructed linear parks adjacent to downtown expressways",
                  explanationEs:
                    "Incorrecto: el parque lineal corresponde al caso posterior de demolición vial en Seúl, no a la ampliación de autopistas.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d04-list-p3-q04",
              prompt: "What does Braess's Paradox demonstrate about transportation networks?",
              options: [
                {
                  id: "A",
                  text: "Adding a high-speed link can degrade overall travel times when drivers converge on shared bottlenecks.",
                  explanationEs:
                    "Correcto: explica que añadir un atajo rápido en una red donde cada conductor elige su ruta individualmente puede ralentizar a todos al saturar las intersecciones alimentadoras.",
                },
                {
                  id: "B",
                  text: "Subway networks become less efficient whenever cities add new transfer stations.",
                  explanationEs:
                    "Incorrecto: la paradoja se aplica al enrutamiento egoísta de conductores que convergen en cuellos de botella viales, no a estaciones de metro.",
                },
                {
                  id: "C",
                  text: "Drivers consistently choose scenic boulevards even when expressways are completely empty.",
                  explanationEs:
                    "Incorrecto: el modelo de Braess parte de lo contrario: conductores que eligen egoístamente el atajo más rápido percibido.",
                },
                {
                  id: "D",
                  text: "Traffic elasticity drops to zero once a highway exceeds ten lanes in width.",
                  explanationEs:
                    "Incorrecto: contradice el dato de elasticidad cercana a 1:1 en ampliaciones de autopistas.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d04-list-p3-q05",
              prompt:
                "What happened in Seoul after the elevated Cheonggyecheon freeway was demolished?",
              options: [
                {
                  id: "A",
                  text: "Severe downtown gridlock persisted for seven years until a replacement tunnel opened.",
                  explanationEs:
                    "Incorrecto: los críticos predijeron colapso vial, pero en realidad las velocidades arteriales se mantuvieron estables o mejoraron.",
                },
                {
                  id: "B",
                  text: "Nearby traffic speeds held steady or improved while local summer temperatures along the corridor fell.",
                  explanationEs:
                    "Correcto: el profesor destaca mediante 'not only ... but also' que las velocidades arteriales se estabilizaron o mejoraron al migrar viajes al transporte público y que la temperatura estival bajó más de 3 °C.",
                },
                {
                  id: "C",
                  text: "Over one hundred sixty thousand daily commuters permanently left the metropolitan region.",
                  explanationEs:
                    "Incorrecto: los viajes se redistribuyeron hacia líneas ampliadas de metro y autobús, no por éxodo poblacional.",
                },
                {
                  id: "D",
                  text: "The city postponed upgrading its bus network until five years after the park was completed.",
                  explanationEs:
                    "Incorrecto: el cierre subraya que Seúl mejoró el bus de tránsito rápido ANTES de desmontar siquiera una rampa ('before dismantling a single ramp').",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d04-list-p3-q06",
              prompt:
                "Why does the professor mention Seoul's bus rapid transit upgrades in the final segment?",
              options: [
                {
                  id: "A",
                  text: "To qualify the case study by noting that successful highway removal requires viable transit alternatives",
                  explanationEs:
                    "Correcto: matiza con rigor académico ('seldom does highway removal succeed in isolation') que el éxito de Seúl dependió de ofrecer capacidad previa de transporte público.",
                },
                {
                  id: "B",
                  text: "To criticize municipal planners for spending excessive funds on surface buses instead of subways",
                  explanationEs:
                    "Incorrecto: el tono del profesor hacia la planificación integrada de Seúl es positivo y analítico, nunca reprobatorio.",
                },
                {
                  id: "C",
                  text: "To retract his earlier explanation of induced travel demand",
                  explanationEs:
                    "Incorrecto: no se retracta; al contrario, refuerza su conclusión de que la oferta de infraestructura moldea las decisiones de movilidad.",
                },
                {
                  id: "D",
                  text: "To suggest that linear parks are financially viable only in Asian megacities",
                  explanationEs:
                    "Incorrecto: no establece ninguna limitación geográfica continental para aplicar estos principios.",
                },
              ],
              correctOptionId: "A",
            },
          ],
          keyTakeawayEs:
            "Fíjate en cómo el profesor usa 'Not only did...' para empaquetar dos efectos empíricos del caso de Seúl y 'Seldom does...' al final para introducir una condición necesaria: ambos giros fueron objeto directo de preguntas.",
        },
      ],
    },

    // =========================================================================
    // 3. READING (30 min study / 20 min official pace for Part 1 + Part 2)
    // =========================================================================
    reading: {
      skill: "reading",
      cefrLevel: "B2",
      title: "Eighteenth-Century Marine Chronometers & Iron-and-Glass Passive Architecture",
      estimatedMinutes: 30,
      timeLimitSeconds: 1200,
      focusSummaryEs:
        "Entrena la lectura de transiciones de contraste e inversión ('Only after independent watchmakers...', 'Not only did designers...') y rastrea los anclajes léxicos hacia atrás y hacia adelante antes de colocar la oración en `[A][B][C][D]`.",
      passages: [
        {
          part: "part1_intermediate",
          id: "d04-read-p1",
          title: "Precision Timekeeping and the Eighteenth-Century Longitude Problem",
          cefrLevel: "B2",
          topicDomain: "History of Science & Maritime Technology",
          paragraphs: [
            "For centuries, transoceanic navigation suffered from a perilous asymmetry: although mariners could determine latitude readily by measuring the altitude of the sun or pole star, calculating longitude at sea remained stubbornly elusive. Because Earth rotates fifteen degrees every hour, establishing a vessel's east-west position required comparing local solar time on deck against the simultaneous time at a fixed reference meridian. Pendulum clocks, which kept reliable time in seventeenth-century observatories, failed catastrophically aboard pitching ships, where erratic wave motion, fluctuating cabin humidity, and extreme temperature shifts distorted metallic gears and altered pendulum oscillation.",
            "Consequently, European scientific academies favored an astronomical solution known as the lunar-distance method, which demanded arduous trigonometric calculations based on the moon's shifting position relative to background stars. Working outside the university establishment, English carpenter and horologist John Harrison challenged this consensus by arguing that mechanical innovation could render celestial computation unnecessary. Over three decades, Harrison engineered a sequence of spring-driven marine chronometers incorporating bimetallic strips that bent automatically in response to heat or cold—thereby neutralizing thermal expansion—alongside caged roller bearings that virtually eliminated internal friction without requiring liquid lubricants that thickened in subarctic waters.",
            "Despite decisive sea trials to Jamaica and Barbados in the 1760s, during which Harrison's pocket-sized fourth timekeeper lost fewer than six seconds across eighty-one days, astronomers dominating Britain's Board of Longitude resisted awarding him full recognition. Critics insisted that a solitary handcrafted instrument proved nothing unless ordinary workshops could reproduce it affordably. Only after independent watchmakers simplified Harrison's escapement design late in the century did naval fleets adopt chronometers universally, pairing portable mechanical precision with printed lunar tables to transform maritime cartography.",
          ],
          questions: [
            {
              id: "d04-read-p1-q01",
              questionType: "main_idea",
              prompt: "What is the main focus of the passage?",
              options: [
                {
                  id: "A",
                  text: "Why seventeenth-century observatories abandoned pendulum clocks in favor of solar sundials",
                  explanationEs:
                    "Incorrecto: el párrafo 1 afirma que los relojes de péndulo sí eran fiables en los observatorios terrestres; solo fallaban a bordo de barcos en movimiento.",
                },
                {
                  id: "B",
                  text: "How John Harrison's mechanical chronometers overcame physical and institutional barriers to solve maritime longitude measurement",
                  explanationEs:
                    "Correcto: integra el problema físico inicial (P1), las innovaciones mecánicas de Harrison frente al consenso astronómico (P2) y la resistencia institucional superada al abaratarse su fabricación (P3).",
                },
                {
                  id: "C",
                  text: "How British astronomers proved that lunar-distance tables were more accurate than spring-driven watches",
                  explanationEs:
                    "Incorrecto: los ensayos en el mar demostraron una precisión extraordinaria del cronómetro de Harrison, y finalmente ambas herramientas se emplearon de forma complementaria.",
                },
                {
                  id: "D",
                  text: "Why subarctic naval expeditions were suspended throughout the eighteenth century",
                  explanationEs:
                    "Incorrecto: las aguas subárticas se mencionan únicamente para explicar por qué los lubricantes líquidos se espesaban con el frío.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d04-read-p1-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'elusive' in paragraph 1 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "difficult to achieve reliably",
                  explanationEs:
                    "Correcto: en oposición directa a 'determine latitude readily' ('con facilidad'), 'remained stubbornly elusive' significa que calcular la longitud seguía siendo esquivo o difícil de lograr con fiabilidad.",
                },
                {
                  id: "B",
                  text: "legally restricted",
                  explanationEs:
                    "Incorrecto: la dificultad radicaba en limitaciones físicas y mecánicas en alta mar, no en prohibiciones legales.",
                },
                {
                  id: "C",
                  text: "mathematically irrelevant",
                  explanationEs:
                    "Incorrecto: era un problema crítico cuya falta de solución provocaba una 'perilous asymmetry' en la navegación transoceánica.",
                },
                {
                  id: "D",
                  text: "visually deceptive",
                  explanationEs:
                    "Incorrecto: confunde 'elusive' ('esquivo/difícil de alcanzar') con 'illusive/illusory' ('ilusorio/engañoso'), una trampa clásica de parónimos en iTEP B2.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d04-read-p1-q03",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 2 about standard eighteenth-century mechanical clocks prior to Harrison's designs?",
              options: [
                {
                  id: "A",
                  text: "They relied on animal or mineral oils whose viscosity changed across climate zones, impairing timekeeping accuracy.",
                  explanationEs:
                    "Correcto: dado que Harrison diseñó rodamientos enjaulados para eliminar la fricción 'without requiring liquid lubricants that thickened in subarctic waters', se infiere que los relojes convencionales dependían de lubricantes líquidos vulnerables al frío.",
                },
                {
                  id: "B",
                  text: "They could only be constructed by university-trained astronomers using imported brass.",
                  explanationEs:
                    "Incorrecto: los astrónomos universitarios promovían cálculos lunares, no la fabricación relojera.",
                },
                {
                  id: "C",
                  text: "They operated accurately in cold northern seas but malfunctioned near the tropical islands of Jamaica and Barbados.",
                  explanationEs:
                    "Incorrecto: contradice el texto, que señala tanto la dilatación térmica como el espesamiento de lubricantes en aguas subárticas.",
                },
                {
                  id: "D",
                  text: "They used bimetallic strips exclusively to measure cabin humidity rather than temperature.",
                  explanationEs:
                    "Incorrecto: fue precisamente Harrison quien incorporó las tiras bimetálicas para compensar el calor y el frío ('neutralizing thermal expansion').",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d04-read-p1-q04",
              questionType: "synthesis",
              prompt:
                "According to paragraph 3, what condition had to be met before marine chronometers achieved widespread naval adoption?",
              options: [
                {
                  id: "A",
                  text: "Britain's Board of Longitude had to ban the publication of astronomical lunar tables.",
                  explanationEs:
                    "Incorrecto: las flotas navales no prohibieron las tablas lunares, sino que las combinaron con los cronómetros ('pairing portable mechanical precision with printed lunar tables').",
                },
                {
                  id: "B",
                  text: "Independent horologists had to streamline Harrison's mechanism so it could be manufactured at scale.",
                  explanationEs:
                    "Correcto: la estructura con inversión 'Only after independent watchmakers simplified Harrison's escapement design ... did naval fleets adopt chronometers universally' responde directamente a la objeción de reproducibilidad y costo.",
                },
                {
                  id: "C",
                  text: "Harrison had to reduce his fourth timekeeper's error margin to zero seconds over eighty-one days.",
                  explanationEs:
                    "Incorrecto: perder menos de seis segundos en ochenta y un días ya fue un ensayo decisivo; el freno fue la escalabilidad económica, no la exactitud.",
                },
                {
                  id: "D",
                  text: "Shipbuilders had to install temperature-controlled observatory cabins on naval vessels.",
                  explanationEs:
                    "Incorrecto: el cronómetro era de tamaño de bolsillo ('pocket-sized') y compensaba internamente los cambios térmicos sin requerir cabinas climatizadas.",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
        {
          part: "part2_academic",
          id: "d04-read-p2",
          title:
            "Structural Rationalism and Microclimate Control in Nineteenth-Century Iron-and-Glass Architecture",
          cefrLevel: "B2",
          topicDomain: "History of Architecture & Environmental Engineering",
          paragraphs: [
            "Throughout the early nineteenth century, European civic architecture maintained an uneasy division between aesthetic representation and industrial engineering. While foundry masters cast iron trusses for textile mills, canal aqueducts, and railway sheds, academic architects routinely concealed metal framing behind thick masonry facades modeled on classical antiquity. This stylistic hierarchy fractured dramatically during the 1840s and 1850s, when theorists of structural rationalism argued that architectural form should express—rather than disguise—the tensile properties of industrial materials. Landmark projects such as Henri Labrouste's Bibliothèque Sainte-Geneviève in Paris and Joseph Paxton's Crystal Palace in London demonstrated that slender cast-iron columns and prefabricated glass panes could enclose vast, sunlit public interiors at a fraction of the weight and construction time required by load-bearing stone.",
            "Yet scaling botanical conservatory technology to civic monuments introduced severe microclimatic liabilities that masonry buildings had largely avoided. Traditional stone walls possessed high thermal mass, absorbing daytime heat slowly and buffering occupants against sudden outdoor temperature swings. Thin sheet glass, by contrast, transmitted shortwave solar radiation directly into exhibition halls while trapping outgoing longwave heat, creating stifling interior greenhouses even during mild spring afternoons. Simultaneously, respiration from thousands of visitors combined with cool evening glass surfaces generated relentless overhead condensation that threatened priceless manuscripts, textiles, and precision machinery displayed below.",
            "Confronted with these thermodynamic hazards, Victorian engineers pioneered passive environmental systems integrated directly into structural ironwork. [A] At the Crystal Palace, Paxton devised a modular ridge-and-furrow roof whose angled glazing maximized low morning light while reflecting intense midday rays, supplemented by miles of adjustable canvas awnings stretched externally across the upper galleries. [B] Beneath the exhibition floor, raised timber floorboards with narrow gaps allowed cool air drawn through shaded ground-level louvers to rise naturally as it warmed, exhausting stagnant heat through synchronized roof vents via buoyancy-driven stack ventilation. [C] Hollow cast-iron columns served a dual mechanical role as well, supporting overhead lattice girders while channeling rainwater and interior condensation gutters silently into subterranean municipal drains. [D]",
            "Although twentieth-century modernism later replaced passive ventilation with hermetically sealed curtain walls reliant on mechanical air-conditioning, architectural historians increasingly view nineteenth-century iron-and-glass halls as sophisticated ecological prototypes. Not only did designers like Paxton standardize modular prefabrication—allowing components cast in distant foundries to be bolted together rapidly on site—but they also treated structural framing, daylighting, and airflow as a single interdependent system. Contemporary sustainable architects revisiting double-skin glass facades and solar chimneys are, in effect, refining thermodynamic strategies first tested in Victorian conservatories and exhibition pavilions.",
          ],
          questions: [
            {
              id: "d04-read-p2-q01",
              questionType: "detail",
              prompt:
                "According to paragraph 1, how did early nineteenth-century academic architects typically treat structural iron?",
              options: [
                {
                  id: "A",
                  text: "They restricted its use entirely to botanical conservatories and royal libraries.",
                  explanationEs:
                    "Incorrecto: en las primeras décadas se empleaba en fábricas textiles, acueductos y estaciones, mientras que las bibliotecas racionalistas como la de Labrouste rompieron la jerarquía en los años 1840–1850.",
                },
                {
                  id: "B",
                  text: "They hid metallic structural elements behind traditional stone exteriors inspired by classical forms.",
                  explanationEs:
                    "Correcto: el párrafo 1 señala explícitamente que los arquitectos académicos ocultaban de forma rutinaria las armaduras metálicas detrás de gruesas fachadas de mampostería ('concealed metal framing behind thick masonry facades modeled on classical antiquity').",
                },
                {
                  id: "C",
                  text: "They rejected iron trusses because cast iron weighed significantly more than load-bearing stone.",
                  explanationEs:
                    "Incorrecto: el final del párrafo 1 indica exactamente lo contrario: las columnas de hierro y el vidrio pesaban una fracción de la piedra portante.",
                },
                {
                  id: "D",
                  text: "They bolted prefabricated glass panels directly onto ancient Roman aqueducts.",
                  explanationEs:
                    "Incorrecto: distorsiona el texto mezclando acueductos industriales de canales con la referencia a la antigüedad clásica.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d04-read-p2-q02",
              questionType: "rhetorical_purpose",
              prompt: "Why does the author discuss 'Traditional stone walls' in paragraph 2?",
              options: [
                {
                  id: "A",
                  text: "To explain why nineteenth-century railway sheds collapsed during sudden temperature swings",
                  explanationEs:
                    "Incorrecto: no se menciona ningún derrumbe de cobertizos ferroviarios en el pasaje.",
                },
                {
                  id: "B",
                  text: "To contrast the thermal buffering capacity of masonry with the rapid solar overheating of sheet-glass enclosures",
                  explanationEs:
                    "Correcto: mencionar la elevada masa térmica de la piedra sirve como contrapunto físico ('by contrast') para explicar por qué el vidrio fino generaba sobrecalentamiento tipo invernadero.",
                },
                {
                  id: "C",
                  text: "To argue that Henri Labrouste should have used solid granite instead of iron in his Paris library",
                  explanationEs:
                    "Incorrecto: el autor valora positivamente estos edificios como prototipos ecológicos sofisticados, sin abogar por volver al granito.",
                },
                {
                  id: "D",
                  text: "To demonstrate how porous limestone prevented visitors from generating indoor humidity",
                  explanationEs:
                    "Incorrecto: la piedra se analiza por su inercia térmica ('thermal mass'), no por absorber humedad respiratoria.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d04-read-p2-q03",
              questionType: "vocabulary_in_context",
              prompt: "The word 'liabilities' in paragraph 2 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "financial debts",
                  explanationEs:
                    "Incorrecto: aunque 'liabilities' significa 'pasivos/deudas' en contabilidad, aquí está calificado por 'microclimatic' y describe sobrecalentamiento y condensación.",
                },
                {
                  id: "B",
                  text: "legal obligations",
                  explanationEs:
                    "Incorrecto: otra acepción jurídica fuera de contexto; el párrafo 2 no trata litigios ni normativas legales.",
                },
                {
                  id: "C",
                  text: "vulnerabilities and drawbacks",
                  explanationEs:
                    "Correcto: 'severe microclimatic liabilities' se refiere a las desventajas o vulnerabilidades ambientales (efecto invernadero y condensación) derivadas de escalar invernaderos a monumentos públicos.",
                },
                {
                  id: "D",
                  text: "measurement instruments",
                  explanationEs:
                    "Incorrecto: carece de relación semántica con 'liabilities' y confunde el término con la maquinaria exhibida dentro del pabellón.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d04-read-p2-q04",
              questionType: "sentence_insertion",
              prompt:
                "Look at the four squares [A], [B], [C], and [D] in paragraph 3. Where would the following sentence best fit?",
              sentenceToInsert:
                "When ambient winds dropped on cloudless afternoons, however, exterior shading alone proved insufficient to prevent heat from accumulating near the ceiling.",
              options: [
                {
                  id: "A",
                  text: "[A]",
                  explanationEs:
                    "Incorrecto: antes de `[A]` aún no se ha mencionado ningún sistema de sombreado exterior ('exterior shading'), por lo que el anclaje anafórico quedaría colgado.",
                },
                {
                  id: "B",
                  text: "[B]",
                  explanationEs:
                    "Correcto: 'exterior shading alone' retoma directamente los toldos exteriores de lona ('adjustable canvas awnings stretched externally') de la oración previa, mientras que el calor acumulado cerca del techo introduce con precisión la ventilación ascendente por suelo y rejillas cenitales descrita tras `[B]`.",
                },
                {
                  id: "C",
                  text: "[C]",
                  explanationEs:
                    "Incorrecto: la oración anterior a `[C]` ya resolvió la evacuación del calor estancado mediante ventilación por efecto chimenea, y la oración posterior pasa a hablar de columnas huecas y drenaje pluvial.",
                },
                {
                  id: "D",
                  text: "[D]",
                  explanationEs:
                    "Incorrecto: colocarla al cierre del párrafo tras las canaletas de lluvia y condensación rompería la progresión temática hacia el párrafo 4.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d04-read-p2-q05",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 4 about many twentieth-century modernist glass buildings?",
              options: [
                {
                  id: "A",
                  text: "They achieved interior comfort primarily through energy-intensive mechanical cooling rather than airflow through operable vents.",
                  explanationEs:
                    "Correcto: al indicar que el modernismo del siglo XX reemplazó la ventilación pasiva por muros cortina herméticamente sellados dependientes del aire acondicionado mecánico ('hermetically sealed curtain walls reliant on mechanical air-conditioning'), se infiere que regularon el clima con gasto mecánico en vez de aberturas pasivas.",
                },
                {
                  id: "B",
                  text: "They abandoned prefabrication and returned to hand-carved load-bearing limestone.",
                  explanationEs:
                    "Incorrecto: empleaban muros cortina ('curtain walls'), no piedra portante tallada a mano.",
                },
                {
                  id: "C",
                  text: "They copied Joseph Paxton's slatted timber floors to drain rainwater into city sewers.",
                  explanationEs:
                    "Incorrecto: los pisos ranurados eran para entrada de aire fresco (las columnas huecas drenaban el agua), y los edificios herméticos del siglo XX prescindieron de esa ventilación pasiva.",
                },
                {
                  id: "D",
                  text: "They prohibited the use of structural iron in favor of timber lattice girders.",
                  explanationEs:
                    "Incorrecto: no existe mención alguna a sustituir el metal por vigas de madera en el siglo XX.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d04-read-p2-q06",
              questionType: "synthesis",
              prompt:
                "Which statement best summarizes the broader historical significance that the author attributes to Victorian iron-and-glass halls?",
              options: [
                {
                  id: "A",
                  text: "They proved that classical stone facades were essential for protecting museum collections from indoor condensation.",
                  explanationEs:
                    "Incorrecto: los ingenieros victorianos resolvieron la condensación con canaletas integradas en columnas huecas y ventilación pasiva sin volver a fachadas pétreas.",
                },
                {
                  id: "B",
                  text: "They unified modular prefabrication, structural expression, and passive climate engineering in ways that anticipate modern sustainable design.",
                  explanationEs:
                    "Correcto: sintetiza el eje completo del artículo y el cierre del párrafo 4 ('Not only did designers ... standardize modular prefabrication ... but they also treated structural framing, daylighting, and airflow as a single interdependent system' que hoy inspira fachadas sostenibles).",
                },
                {
                  id: "C",
                  text: "They demonstrated that botanical conservatories were unsuitable models for large-scale public architecture.",
                  explanationEs:
                    "Incorrecto: aunque presentaron retos térmicos iniciales (P2), las soluciones pasivas (P3) los convirtieron en modelos pioneros de arquitectura sostenible (P4).",
                },
                {
                  id: "D",
                  text: "They convinced contemporary architects to eliminate glass entirely from public libraries and exhibition centers.",
                  explanationEs:
                    "Incorrecto: los arquitectos sostenibles actuales siguen usando fachadas de vidrio de doble piel ('double-skin glass facades'), refinando las estrategias victorianas.",
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
      title: "Studio Critique Rescheduling Note & Urban Mobility Investment Essay",
      estimatedMinutes: 30,
      timeLimitSeconds: 1500,
      focusSummaryEs:
        "Transfiere de forma deliberada la gramática del Día 4 a tu escritura cronometrada: usa una estructura correlativa ('either ... or' / 'not only ... but also') en la nota de reprogramación (Part 1) e inserta al menos una inversión negativa ('Seldom do...', 'Not only does...') en tu ensayo persuasivo (Part 2).",
      tasks: [
        {
          part: "part1_note",
          id: "d04-writ-p1",
          cefrLevel: "B2",
          title: "Rescheduling an Urban-Design Studio Critique",
          prompt:
            "You are scheduled to meet with Professor Keaton on Wednesday at 2:00 p.m. for an urban-design studio critique of your team's harbor-district maps. However, an unexpected transit disruption will delay your return from fieldwork. Write a formal note to Professor Keaton in which you: (1) explain the specific transit disruption delaying your team, (2) propose two alternative meeting times later this week, and (3) confirm that your preliminary spatial maps will still be uploaded on schedule.",
          timeLimitSeconds: 300,
          minWords: 50,
          maxWords: 75,
          strategyGuideEs:
            "Resuelve los 3 puntos en exactamente 4 oraciones concisas (55–72 palabras). Emplea 'either [opción 1] or [opción 2]' con preposiciones/estructuras paralelas para proponer los horarios alternativos y cierra con una inversión enfática ('Not only are...') o confirmación directa del envío puntual.",
          recommendedConnectors: [
            "Because",
            "either ... or ...",
            "Not only ... but ...",
            "on schedule",
          ],
          b2RubricChecklistEs: [
            "Responde con precisión a las 3 exigencias del enunciado (causa concreta de transporte, dos horarios alternativos específicos y entrega puntual de mapas).",
            "Respeta estrictamente el margen oficial de 50 a 75 palabras en tono académico cortés.",
            "Aplica paralelismo sintáctico limpio en las opciones horarias ('either Thursday at ... or Friday at ...') o inversión con 'Not only'.",
            "Ortografía y puntuación impecables sin depender de corrector automático.",
          ],
          modelAnswerB2:
            "Dear Professor Keaton, I am writing to reschedule our studio critique set for Wednesday at 2:00 p.m. Because regional transit crews closed the commuter rail line for emergency repairs, my survey team will not return from the harbor site until evening. Could we meet either Thursday at 10:00 a.m. or Friday at 1:30 p.m. instead? Not only are our spatial maps complete, but I will upload them tonight. Sincerely, Elena",
        },
        {
          part: "part2_essay",
          id: "d04-writ-p2",
          cefrLevel: "B2",
          title: "Municipal Transport Budgets: Highway Expansion vs. Public Transit & Cycling",
          prompt:
            "As metropolitan populations grow, municipal governments must decide how to allocate limited transportation budgets. Some policymakers argue that cities should prioritize widening existing highways and building downtown parking structures to relieve congestion for drivers. Others contend that public funds should be invested primarily in rapid public transit and protected pedestrian and cycling corridors. Which policy do you support? Use specific arguments and examples to defend your position.",
          timeLimitSeconds: 1200,
          minWords: 175,
          maxWords: 225,
          strategyGuideEs:
            "Diseña 4 párrafos equilibrados (190–220 palabras): P1 Tesis directa a favor del transporte masivo y movilidad activa; P2 Concesión breve sobre conductores suburbanos + refutación mediante demanda inducida usando 'Seldom does...'; P3 Beneficios económicos, ambientales y de equidad usando 'Not only does ... but it also...'; P4 Cierre con 'neither ... nor' o paralelismo sintáctico firme.",
          recommendedConnectors: [
            "Granted,",
            "Seldom does",
            "Not only does ... but it also",
            "neither ... nor",
            "Consequently,",
          ],
          b2RubricChecklistEs: [
            "Postura clara y sostenida desde la introducción respondiendo directamente a la asignación presupuestaria municipal.",
            "Extensión controlada entre 175 y 225 palabras con desarrollo argumentativo concreto (eficiencia espacial, demanda inducida, equidad laboral).",
            "Integra con exactitud al menos una inversión sujeto-auxiliar negativa ('Seldom does...', 'Not only does...') sin errores de verbo base.",
            "Mantiene paralelismo riguroso en listas y correlativas ('widening ... and building ...', 'both ... and ...', 'neither ... nor ...').",
            "Léxico académico de nivel B2 ('allocate', 'alleviate', 'commuters', 'emissions', 'equitable') sin repeticiones mecánicas.",
          ],
          modelAnswerB2:
            "Rapidly growing cities face intense pressure to ease traffic bottlenecks, yet channeling scarce municipal budgets into wider highways and downtown parking garages is fiscally and environmentally counterproductive. Metropolitan governments should prioritize high-frequency public transit alongside protected cycling and pedestrian networks.\n\nGranted, suburban residents who currently lack rail access rely on private vehicles for daily errands. Seldom, however, does widening urban expressways deliver lasting congestion relief. Transportation research consistently shows that newly added lanes attract latent car trips until rush-hour delays return to previous levels, leaving taxpayers with costly asphalt maintenance and no time savings.\n\nInvesting in dedicated bus lanes, commuter rail, and safe cycling corridors, by contrast, moves far more people within existing street space. Not only does reliable public transit cut greenhouse-gas emissions and urban heat, but it also expands economic mobility for hospital, retail, and logistics workers who cannot afford private cars or downtown parking fees. In cities that paired bus rapid transit with shaded bikeways, neighborhood businesses saw higher foot traffic while household commuting expenses declined.\n\nUltimately, neither paving wider highways nor subsidizing multi-story garages can sustain a dense twenty-first-century metropolis. Funding multimodal public transit creates cleaner, fairer, and genuinely fluid cities.",
        },
      ],
    },

    // =========================================================================
    // 5. SPEAKING (15 min study / chained prep + recording official timers)
    // =========================================================================
    speaking: {
      skill: "speaking",
      cefrLevel: "B2",
      title: "Study Environment Optimization & Historic Preservation vs. High-Density Housing",
      estimatedMinutes: 15,
      timeLimitSeconds: 300,
      focusSummaryEs:
        "En producción oral cronometrada, una sola oración con inversión ('Not only did that change save me an hour...') y una correlativa paralela ('both quieter and better lit') elevan de inmediato la percepción de control sintáctico B2 ante el evaluador iTEP.",
      tasks: [
        {
          part: "part1_personal",
          id: "d04-speak-p1",
          cefrLevel: "B2",
          title: "Restructuring a Daily Commute or Study Environment",
          prompt:
            "Describe a specific change you made to your daily commute, schedule, or study environment that significantly improved your academic or professional focus. Explain why the previous arrangement was ineffective and what concrete benefits followed.",
          prepSeconds: 30,
          recordSeconds: 45,
          structureTemplate: [
            "0–10s (Problem & Shift): Identify the old habit/space that drained your focus and the exact adjustment you made.",
            "10–30s (Dual Impact with Inversion): Use 'Not only did...' to highlight time/energy saved plus quality improvement.",
            "30–45s (Takeaway): Conclude with how you maintain that routine under heavy deadlines.",
          ],
          keyPhrasesB2: [
            "Until last semester, I wasted nearly an hour each morning...",
            "Not only did switching to ... cut my travel fatigue, but it also...",
            "The new workspace proved both quieter and far more structured...",
            "Seldom do I struggle with afternoon distractions anymore.",
          ],
          selfRubricChecklistEs: [
            "Arranqué sin titubeos describiendo un cambio concreto de traslado, horario o espacio de estudio.",
            "Contrasté con claridad por qué fallaba el esquema previo frente a los beneficios medibles del nuevo.",
            "Pronuncié con fluidez al menos una inversión con 'Not only did...' o una estructura correlativa paralela.",
            "Cerré la idea completa dentro de la ventana oficial de 45 segundos.",
          ],
          modelTranscriptB2:
            "Until last year, I tried to study in my apartment right after returning on a crowded evening bus, which left me mentally exhausted and prone to constant phone distractions. To fix this, I shifted my schedule to arrive on campus ninety minutes before morning lectures and reserved a quiet carrel in the architecture library's upper reading room. Not only did commuting before peak traffic cut my travel time in half, but the sunlit, phone-free reading room also doubled my reading retention. Within a month, I was finishing dense research articles before noon, leaving my evenings genuinely free for rest.",
        },
        {
          part: "part2_opinion",
          id: "d04-speak-p2",
          cefrLevel: "B2",
          title: "Historic District Preservation vs. High-Density Transit Housing",
          prompt:
            "Many university cities face severe housing shortages near campus and major transit stations. Historic preservation advocates argue that municipalities should strictly protect low-rise nineteenth-century neighborhoods to safeguard architectural heritage and civic identity. Urban housing reformers contend that cities should rezone those districts to allow modern, energy-efficient apartment buildings so students and workers can live near public transit. Which priority should guide municipal zoning policy, and why?",
          audioPrompt: {
            trackId: "day04-speaking-p2",
            audioUrl: "/audio/day04-speaking-p2.mp3",
            contextSetup: "Official iTEP Speaking Part 2 dual-perspective academic prompt.",
            turns: [
              {
                speakerLabel: "Examiner",
                voice: "en-GB-SoniaNeural",
                text: "Many university cities face severe housing shortages near campus and major transit stations. Historic preservation advocates argue that municipalities should strictly protect low-rise nineteenth-century neighborhoods to safeguard architectural heritage and civic identity. Urban housing reformers contend that cities should rezone those districts to allow modern, energy-efficient apartment buildings so students and workers can live near public transit. Which priority should guide municipal zoning policy, and why?",
                pauseAfterMs: 600,
              },
            ],
          },
          prepSeconds: 45,
          recordSeconds: 60,
          structureTemplate: [
            "0–12s (Decisive Stance): Endorse targeted transit-oriented rezoning (with adaptive reuse of truly landmark facades).",
            "12–30s (Concession + Rebuttal): Acknowledge heritage value, then explain the social/environmental cost of freezing entire districts.",
            "30–50s (Concrete Mechanism): Show how mid-rise infill near rail hubs lowers both rents and commuter emissions.",
            "50–60s (Crisp Synthesis): Summarize why living cities must evolve rather than freeze in time.",
          ],
          keyPhrasesB2: [
            "While safeguarding genuine architectural landmarks matters, municipal zoning should prioritize...",
            "Not only does freezing entire low-rise districts near transit inflate rents, but it also...",
            "By combining facade preservation on historic corners with energy-efficient mid-rise apartments...",
            "Ultimately, cities serve residents best when they balance cultural memory with accessible housing.",
          ],
          selfRubricChecklistEs: [
            "Defendí una postura clara desde los primeros segundos respondiendo directamente al dilema de zonificación urbana.",
            "Reconocí brevemente el valor del patrimonio arquitectónico antes de refutar la congelación total de barrios céntricos.",
            "Utilicé al menos una inversión negativa ('Not only does...') y paralelismo limpio sin perder naturalidad oral.",
            "Sostuve ritmo continuo, articulación clara y conclusión completa dentro de los 60 segundos.",
          ],
          modelTranscriptB2:
            "While safeguarding genuine architectural landmarks is worthwhile, I believe municipal zoning near campuses and transit hubs must prioritize modern, energy-efficient housing. When cities freeze entire low-rise districts within walking distance of rail stations, they treat living neighborhoods like open-air museums. Not only does that restriction drive rents beyond the reach of students and essential workers, but it also forces thousands of commuters into distant suburbs, increasing both highway congestion and carbon emissions. Moreover, architectural heritage and housing density are not mutually exclusive. Cities can protect truly distinctive nineteenth-century civic buildings or integrate historic brick facades at street level while permitting well-insulated mid-rise apartments above. Ultimately, urban policy should ensure that historic neighborhoods remain inclusive, sustainable communities rather than exclusive enclaves.",
        },
      ],
    },
  },
  dailyChecklistEs: [
    "Resolví los 10 reactivos de Grammar en menos de 8 minutos verificando inversión tras adverbios negativos ('Not only', 'Seldom', 'No sooner...than') y paralelismo correlativo.",
    "Completé las 3 pistas de Listening en una sola reproducción estricta identificando el sesgo de muestreo en Part 2 y la paradoja de Braess en Part 3.",
    "Leí ambos pasajes de Reading dentro de 20 minutos y acerté la inserción de oración en `[B]` rastreando 'exterior shading alone'.",
    "Escribí la nota de 50–75 palabras y el ensayo de 175–225 palabras sin corrector ortográfico aplicando 'Not only', 'Seldom' y 'neither...nor'.",
    "Grabé mis respuestas de Speaking Part 1 (45s) y Part 2 (60s) integrando inversión enfática sin pausas prolongadas.",
  ],
};
