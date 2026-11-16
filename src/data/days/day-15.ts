import type { RoadmapDay } from "../../schemas/curriculum.schema.ts";

export const day15: RoadmapDay = {
  dayNumber: 15,
  sprintNumber: 3,
  cefrLevel: "B2",
  title: "Exam-Day Peak Readiness & Anti-Fatigue Protocol",
  subtitleEs:
    "Protocolo de rendimiento máximo sin sobreentrenamiento, calibración de las 10 reglas de mayor retorno y barrido anti-typos",
  b2FocusSummaryEs:
    "Tras el Simulacro Final del Día 14, la víspera del examen real exige precisión quirúrgica y fatiga cero (120 minutos exactos). Hoy consolidarás las 10 estructuras gramaticales de mayor retorno en iTEP B2, afinarás la escucha limpia en una sola toma sin ansiedad, ejecutarás lectura controlada de 20 minutos, automatizarás el barrido anti-typos sin corrector ortográfico y realizarás tu calentamiento vocal definitivo para arrancar mañana con total aplomo.",
  estimatedMinutes: 120,
  isMockExamDay: false,
  sections: {
    // =========================================================================
    // 1. GRAMMAR (20 min study / Top 10 Highest-ROI iTEP B2 Rules Calibration)
    // =========================================================================
    grammar: {
      skill: "grammar",
      cefrLevel: "B2",
      title: "Final Calibration: The 10 Highest-Return iTEP B2 Grammar Rules",
      estimatedMinutes: 20,
      timeLimitSeconds: 300,
      focusSummaryEs:
        "Cada reactivo de esta serie representa uno de los 10 patrones que definen el corte B2 (≥ 3.5) en iTEP: inversión restrictiva, subjuntivo mandativo, condicional mixto invertido, relativo partitivo, conectores concesivos, participios reducidos, concordancia a distancia, orden declarativo incrustado, paralelismo y cuantificadores incontables.",
      questions: [
        {
          part: "part1_fill_blank",
          id: "d15-gram-p1-q01",
          cefrLevel: "B2",
          grammarTopic: "ROI Rule 1: Negative Temporal Inversion (Not until ... did)",
          sentenceWithBlank:
            "Not until delayed retention scores were analyzed six weeks later _____ how deceptive passive lecture fluency had been.",
          options: [
            {
              id: "A",
              text: "the researchers realized",
              explanationEs:
                "Incorrecto: cuando 'Not until...' encabeza la oración, la cláusula principal (que inicia aquí tras la subordinada temporal) exige inversión obligatoria de auxiliar + sujeto.",
            },
            {
              id: "B",
              text: "did the researchers realize",
              explanationEs:
                "Correcto: aplica la inversión sujeto-auxiliar en Past Simple ('did + the researchers + realize') justo donde comienza la cláusula matriz, nunca dentro de la cláusula subordinada previa.",
            },
            {
              id: "C",
              text: "had the researchers realize",
              explanationEs:
                "Incorrecto: aunque invierte el orden, combina el auxiliar 'had' con la forma base 'realize' en lugar del participio pasado 'realized'.",
            },
            {
              id: "D",
              text: "realized the researchers",
              explanationEs:
                "Incorrecto: en inglés contemporáneo los verbos léxicos plenos como 'realize' no pueden invertirse directamente sin el auxiliar 'did'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "En oraciones que abren con 'Not until [cláusula]...' u 'Only after [cláusula]...', deja intacto el primer verbo y aplica la inversión ('did/have/can + sujeto + verbo') al inicio de la segunda cláusula.",
        },
        {
          part: "part1_fill_blank",
          id: "d15-gram-p1-q02",
          cefrLevel: "B2",
          grammarTopic: "ROI Rule 2: Passive Mandative Subjunctive",
          sentenceWithBlank:
            "The accreditation board stipulated that every capstone portfolio _____ independently by two external faculty evaluators prior to graduation.",
          options: [
            {
              id: "A",
              text: "is reviewed",
              explanationEs:
                "Incorrecto: el verbo mandativo 'stipulated' rige modo subjuntivo en inglés académico estadounidense, descartando el presente indicativo 'is'.",
            },
            {
              id: "B",
              text: "was reviewed",
              explanationEs:
                "Incorrecto: calca la concordancia de pasado del español ('estipuló que fuera revisado'), pero el subjuntivo mandativo inglés es invariable en forma base sin importar el tiempo del verbo principal.",
            },
            {
              id: "C",
              text: "be reviewed",
              explanationEs:
                "Correcto: tras 'stipulated that' (igual que 'insist', 'require', 'mandate', 'recommend'), la voz pasiva del subjuntivo se construye con el verbo 'be' invariable + participio ('be reviewed').",
            },
            {
              id: "D",
              text: "to be reviewed",
              explanationEs:
                "Incorrecto: la conjunción 'that' introduce una cláusula finita con sujeto ('every capstone portfolio'), por lo que un infinitivo con 'to' deja la cláusula sin predicado válido.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Tras 'stipulate/require/insist/essential + that + sujeto', usa siempre forma base pura ('review' si es activa, 'be reviewed' si aparece 'by + agente').",
        },
        {
          part: "part1_fill_blank",
          id: "d15-gram-p1-q03",
          cefrLevel: "B2",
          grammarTopic: "ROI Rule 3: Inverted Mixed Conditional (Past Cause, Present Result)",
          sentenceWithBlank:
            "_____ the engineering college piloted diagnostic math modules three years ago, far fewer sophomores would be struggling with differential equations today.",
          options: [
            {
              id: "A",
              text: "Had",
              explanationEs:
                "Correcto: inversión formal del condicional contrafactual de pasado ('Had the college piloted...' = 'If the college had piloted...'), articulada con consecuencia presente ('would be struggling ... today').",
            },
            {
              id: "B",
              text: "Were",
              explanationEs:
                "Incorrecto: 'Were + sujeto' exige infinitivo con 'to' ('Were the college to pilot') o complemento predicativo, nunca el participio activo 'piloted' con marcador pasado 'three years ago'.",
            },
            {
              id: "C",
              text: "Should",
              explanationEs:
                "Incorrecto: 'Should' invertido expresa posibilidad futura ('Should the college pilot'), incompatible tanto con 'piloted' como con 'three years ago'.",
            },
            {
              id: "D",
              text: "Unless",
              explanationEs:
                "Incorrecto: 'Unless piloted' en Past Simple contradice la estructura contrafactual pasada ('had piloted') exigida por 'three years ago' y 'would be struggling'.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Si ves sujeto + participio pasado ('piloted') seguido en la cláusula principal por 'would + verbo', el condicional invertido sin 'if' solo puede abrir con 'Had'.",
        },
        {
          part: "part1_fill_blank",
          id: "d15-gram-p1-q04",
          cefrLevel: "B2",
          grammarTopic: "ROI Rule 4: Human Partitive Non-Defining Relative Clauses",
          sentenceWithBlank:
            "The graduate cohort comprises twenty-eight instructional designers, nearly half _____ previously taught in multilingual public secondary schools.",
          options: [
            {
              id: "A",
              text: "of them",
              explanationEs:
                "Incorrecto: al estar separadas únicamente por coma sin conjunción ('and'), 'of them' produce un 'comma splice' entre los verbos conjugados 'comprises' y 'taught'.",
            },
            {
              id: "B",
              text: "of which",
              explanationEs:
                "Incorrecto: el antecedente 'instructional designers' designa personas, de modo que tras preposición es obligatorio usar 'whom' y no 'which'.",
            },
            {
              id: "C",
              text: "of that",
              explanationEs:
                "Incorrecto: 'that' relativo jamás puede aparecer detrás de una preposición ni tras coma explicativa.",
            },
            {
              id: "D",
              text: "of whom",
              explanationEs:
                "Correcto: subordina legítimamente la cláusula relativa explicativa con antecedente humano plural ('designers') tras la preposición partitiva 'of'.",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Coma + cuantificador ('most', 'many', 'half', 'two') + verbo conjugado sin 'and': elige 'of whom' para personas y 'of which' para objetos o conceptos.",
        },
        {
          part: "part1_fill_blank",
          id: "d15-gram-p1-q05",
          cefrLevel: "B2",
          grammarTopic: "ROI Rule 5: Concessive Preposition vs. Subordinating Conjunction",
          sentenceWithBlank:
            "_____ its substantial upfront licensing cost, the clinical simulation platform reduced diagnostic errors among interns by forty percent within one term.",
          options: [
            {
              id: "A",
              text: "Although",
              explanationEs:
                "Incorrecto: 'Although' es conjunción subordinante y exige sujeto + verbo conjugado, pero 'its substantial upfront licensing cost' es un sintagma nominal sin verbo.",
            },
            {
              id: "B",
              text: "Despite",
              explanationEs:
                "Correcto: la preposición concesiva 'Despite' (sin 'of') introduce directamente un grupo nominal y establece el contraste con el resultado positivo de la cláusula principal.",
            },
            {
              id: "C",
              text: "Whereas",
              explanationEs:
                "Incorrecto: 'Whereas' contrasta dos cláusulas completas con verbo conjugado, nunca un sintagma nominal aislado.",
            },
            {
              id: "D",
              text: "Nevertheless",
              explanationEs:
                "Incorrecto: es un adverbio conjuntivo ('No obstante,') que conecta oraciones independientes seguido de coma, no una preposición ante sustantivo.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Antes de elegir un conector de contraste, busca si hay verbo conjugado antes de la coma: sin verbo = 'Despite' / 'In spite of'; con verbo = 'Although' / 'Even though' / 'Whereas'.",
        },
        {
          part: "part2_error_identification",
          id: "d15-gram-p2-q06",
          cefrLevel: "B2",
          grammarTopic: "ROI Rule 6: Voice Alignment in Reduced Participial Clauses",
          sentenceWithMarkedSegments:
            "[A]{Designing to measure} conceptual transfer [B]{rather than} rote recall, the capstone examination [C]{requires} candidates [D]{to diagnose} unfamiliar circuit faults.",
          correctedSegment: "Designed to measure",
          options: [
            {
              id: "A",
              text: "Designing to measure",
              explanationEs:
                "Incorrecto (contiene el error): el sujeto tras la coma es 'the capstone examination', el cual es diseñado por profesores (no diseña por sí mismo). Debe emplearse el participio pasivo 'Designed to measure'.",
            },
            {
              id: "B",
              text: "rather than",
              explanationEs:
                "Correcto en la oración: conector contrastivo que coordina limpiamente dos sintagmas nominales ('conceptual transfer rather than rote recall').",
            },
            {
              id: "C",
              text: "requires",
              explanationEs:
                "Correcto en la oración: verbo finito en Present Simple singular concordando con 'the capstone examination'.",
            },
            {
              id: "D",
              text: "to diagnose",
              explanationEs:
                "Correcto en la oración: patrón verbal exacto 'require + objeto + to-infinitive'.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Pregunta siempre al participio inicial: '¿el sustantivo detrás de la coma HACE esta acción (-ing) o la RECIBE (-ed)?'.",
        },
        {
          part: "part2_error_identification",
          id: "d15-gram-p2-q07",
          cefrLevel: "B2",
          grammarTopic: "ROI Rule 7: Long-Distance Subject-Verb Agreement",
          sentenceWithMarkedSegments:
            "The alignment [A]{between} automated scoring rubrics and faculty evaluations [B]{across six} humanities departments [C]{confirm} the reliability [D]{of the new} writing benchmark.",
          correctedSegment: "confirms",
          options: [
            {
              id: "A",
              text: "between",
              explanationEs:
                "Correcto en la oración: 'between X and Y' es la preposición exacta para vincular dos conjuntos diferenciados.",
            },
            {
              id: "B",
              text: "across six",
              explanationEs:
                "Correcto en la oración: locución preposicional distributiva seguida de numeral cardinal y sustantivo plural.",
            },
            {
              id: "C",
              text: "confirm",
              explanationEs:
                "Incorrecto (contiene el error): aunque antes del verbo aparecen tres plurales ('rubrics', 'evaluations', 'departments'), todos están dentro de frases preposicionales. El único núcleo del sujeto es singular ('The alignment'), exigiendo 'confirms'.",
            },
            {
              id: "D",
              text: "of the new",
              explanationEs:
                "Correcto en la oración: introduce el complemento nominal posesivo de 'the reliability'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "El núcleo del sujeto NUNCA vive detrás de una preposición ('between', 'across', 'of', 'in'): encierra entre paréntesis todo lo preposicional antes de validar el verbo.",
        },
        {
          part: "part2_error_identification",
          id: "d15-gram-p2-q08",
          cefrLevel: "B2",
          grammarTopic: "ROI Rule 8: Declarative Word Order in Embedded Questions",
          sentenceWithMarkedSegments:
            "Cognitive psychologists [A]{have demonstrated} [B]{why do students} routinely [C]{overestimate} their exam readiness [D]{after rereading} highlighted chapters.",
          correctedSegment: "why students",
          options: [
            {
              id: "A",
              text: "have demonstrated",
              explanationEs:
                "Correcto en la oración: Present Perfect plural apropiado para reportar hallazgos experimentales vigentes.",
            },
            {
              id: "B",
              text: "why do students",
              explanationEs:
                "Incorrecto (contiene el error): al estar incrustada como complemento directo de 'have demonstrated' en una oración afirmativa, la cláusula con 'why' prohíbe el auxiliar interrogativo 'do'. Debe ser 'why students'.",
            },
            {
              id: "C",
              text: "overestimate",
              explanationEs:
                "Correcto en la oración: verbo plural en Present Simple que concuerda con 'students' una vez eliminado el auxiliar intruso.",
            },
            {
              id: "D",
              text: "after rereading",
              explanationEs:
                "Correcto en la oración: preposición temporal 'after' seguida de gerundio con sujeto compartido ('students').",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Si la oración termina en punto (.) y no en signo de interrogación (?), elimina de inmediato 'do/does/did' detrás de 'why', 'how', 'where' o 'what' intermedios.",
        },
        {
          part: "part2_error_identification",
          id: "d15-gram-p2-q09",
          cefrLevel: "B2",
          grammarTopic: "ROI Rule 9: Parallel Structure in Academic Series",
          sentenceWithMarkedSegments:
            "Effective seminar facilitation [A]{depends on} framing open-ended questions, [B]{cultivating} respectful disagreement, and [C]{to synthesize} divergent viewpoints [D]{before class concludes}.",
          correctedSegment: "synthesizing",
          options: [
            {
              id: "A",
              text: "depends on",
              explanationEs:
                "Correcto en la oración: verbo en tercera persona singular con su preposición obligatoria 'on', que rige toda la serie posterior.",
            },
            {
              id: "B",
              text: "cultivating",
              explanationEs:
                "Correcto en la oración: segundo gerundio paralelo a 'framing' bajo el régimen de 'depends on'.",
            },
            {
              id: "C",
              text: "to synthesize",
              explanationEs:
                "Incorrecto (contiene el error): rompe la simetría morfológica de la tríada regida por 'depends on' ('framing..., cultivating..., and...'). Debe ser el gerundio 'synthesizing'.",
            },
            {
              id: "D",
              text: "before class concludes",
              explanationEs:
                "Correcto en la oración: cláusula adverbial de tiempo en Present Simple con valor habitual.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "En toda lista 'A, B, and C', verifica que el tercer elemento tras 'and' conserve exactamente la misma terminación gramatical ('-ing', 'to + verbo' o sustantivo) que los dos primeros.",
        },
        {
          part: "part2_error_identification",
          id: "d15-gram-p2-q10",
          cefrLevel: "B2",
          grammarTopic: "ROI Rule 10: Countable vs. Uncountable Quantifiers",
          sentenceWithMarkedSegments:
            "Instructors [A]{who incorporate} low-stakes retrieval quizzes [B]{throughout the term} report [C]{markedly higher} retention and [D]{fewer student anxiety} during cumulative finals.",
          correctedSegment: "less student anxiety",
          options: [
            {
              id: "A",
              text: "who incorporate",
              explanationEs:
                "Correcto en la oración: cláusula relativa restrictiva plural que concuerda con 'Instructors'.",
            },
            {
              id: "B",
              text: "throughout the term",
              explanationEs:
                "Correcto en la oración: sintagma preposicional de distribución temporal ('a lo largo del semestre').",
            },
            {
              id: "C",
              text: "markedly higher",
              explanationEs:
                "Correcto en la oración: adverbio en '-ly' intensificando correctamente al adjetivo comparativo 'higher'.",
            },
            {
              id: "D",
              text: "fewer student anxiety",
              explanationEs:
                "Incorrecto (contiene el error): el núcleo 'anxiety' (como 'evidence', 'research', 'equipment', 'feedback') es un sustantivo abstracto incontable, por lo que rechaza 'fewer' (exclusivo de plurales contables) y exige 'less student anxiety'.",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Vigila siempre 'fewer/many/number' frente a sustantivos incontables académicos ('evidence', 'research', 'equipment', 'anxiety', 'feedback', 'information'): todos ellos exigen 'less/much/amount'.",
        },
      ],
    },

    // =========================================================================
    // 2. LISTENING (30 min study / Clean Single-Take Focus: Educational Innovation)
    // =========================================================================
    listening: {
      skill: "listening",
      cefrLevel: "B2",
      title: "Interactive Micro-Lectures, Peer-Review Calibration & Productive Failure",
      estimatedMinutes: 30,
      timeLimitSeconds: 900,
      focusSummaryEs:
        "Protocolo anti-fatiga para mañana: no intentes transcribir cada palabra en Listening. Escribe únicamente iniciales de hablantes, flechas de causa (`->`) y símbolos de contraste (`≠`) mientras mantienes tu atención auditiva 100 % en el flujo tonal del hablante.",
      items: [
        {
          part: "part1_short_dialogue",
          id: "d15-list-p1",
          title: "Embedded Prompts in Flipped Bioengineering Videos",
          cefrLevel: "B2",
          audio: {
            trackId: "day15-listening-p1",
            audioUrl: "/audio/day15-listening-p1.mp3",
            contextSetup:
              "A bioengineering professor speaks with an instructional designer after reviewing mid-semester course analytics.",
            turns: [
              {
                speakerLabel: "Professor",
                voice: "en-US-GuyNeural",
                text: "Remember how half my sophomores were skipping the pre-class Fluid Mechanics videos back in September? Look at the dashboard since we split each lecture into four-minute clips with embedded prediction questions.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Instructional Designer",
                voice: "en-GB-SoniaNeural",
                text: "Ninety-two percent completion! And you didn't even attach grade penalties to those prediction prompts, did you?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-GuyNeural",
                text: "Not a single point—they're purely diagnostic. Yet having to guess how fluid pressure changes before the clip continues keeps students from letting the video play passively in the background.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Instructional Designer",
                voice: "en-GB-SoniaNeural",
                text: "I bet your live problem-solving sessions move much faster now that you aren't re-teaching baseline definitions for twenty minutes.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d15-list-p1-q01",
              prompt: "What can be inferred about the changes made to the Fluid Mechanics course?",
              options: [
                {
                  id: "A",
                  text: "Deducting course points for missed videos forced reluctant students to watch them.",
                  explanationEs:
                    "Incorrecto: el profesor aclara explícitamente que las preguntas integradas no tienen penalización ni puntaje ('Not a single point—they're purely diagnostic').",
                },
                {
                  id: "B",
                  text: "Shorter video segments with ungraded prediction checks boosted active engagement without grade pressure.",
                  explanationEs:
                    "Correcto: al dividir las clases en clips de cuatro minutos con preguntas diagnósticas sin calificación, la finalización subió al 92 % y evitó la reproducción pasiva de fondo.",
                },
                {
                  id: "C",
                  text: "The professor eliminated live problem-solving sessions in favor of recorded lectures.",
                  explanationEs:
                    "Incorrecto: en el último turno se confirma que las sesiones presenciales de resolución de problemas continúan y ahora avanzan más rápido.",
                },
                {
                  id: "D",
                  text: "Most sophomores preferred the original longer videos used in September.",
                  explanationEs:
                    "Incorrecto: en septiembre la mitad omitía los videos largos, mientras que el nuevo formato alcanzó 92 % de cumplimiento.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "Presta atención a las preguntas de confirmación ('...did you?' -> 'Not a single point'): suelen desmentir el distractor más predecible (como pensar que el cambio se logró castigando la nota).",
        },
        {
          part: "part2_conversation",
          id: "d15-list-p2",
          title: "Redesigning Studio Peer-Assessment Rubrics",
          cefrLevel: "B2",
          audio: {
            trackId: "day15-listening-p2",
            audioUrl: "/audio/day15-listening-p2.mp3",
            contextSetup:
              "A graduate teaching fellow meets with the School of Architecture's curriculum coordinator regarding peer-review scores.",
            turns: [
              {
                speakerLabel: "Teaching Fellow",
                voice: "en-US-JennyNeural",
                text: "Hi Dr. Morales. Do you have a few minutes to look at the peer-review data from our sustainable housing studio? Something isn't working the way we hoped.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Sure, Hannah. Come on in. Are students missing the Thursday submission window for critiquing their classmates' scale models?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Teaching Fellow",
                voice: "en-US-JennyNeural",
                text: "Actually, everyone submits on time, and that's what fooled me at first. Out of sixty students, fifty-six awarded their peers perfect five-out-of-five ratings across every category, accompanied by generic praise like 'great daylighting concept.'",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Ah, classic grade-inflation reciprocity. Remind me—does the score a student receives from peers count directly toward their midterm project grade?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Teaching Fellow",
                voice: "en-US-JennyNeural",
                text: "Yes, ten percent. Students sit at shared drafting tables all week, so nobody wants to lower a tablemate's GPA by pointing out thermal-bridging flaws.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-US-AndrewMultilingualNeural",
                text: "That social dynamic happens every time peer ratings affect a classmate's grade directly. If you decouple numerical peer scores from the recipient's grade, the incentive to trade inflated ratings vanishes.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Teaching Fellow",
                voice: "en-US-JennyNeural",
                text: "Wait—if peer ratings don't count toward the model's grade, how do I motivate reviewers to write thorough technical critiques instead of rushing through?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Flip the accountability: evaluate each student on the diagnostic quality of the critique they write, not the score they receive. Replace the one-to-five scale with two mandatory prompts—identifying one structural trade-off and proposing one testable revision—and run a twenty-minute calibration exercise on Monday using an anonymous archive project from last year.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Teaching Fellow",
                voice: "en-US-JennyNeural",
                text: "Grading the reviewer's analytical depth makes way more sense. I'll pull two archived projects from last spring so we can practice distinguishing actionable critiques from vague compliments on Monday morning.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d15-list-p2-q01",
              prompt: "What problem did Hannah discover in her sustainable housing studio?",
              options: [
                {
                  id: "A",
                  text: "Nearly half of the sixty students failed to submit peer critiques by Thursday's deadline.",
                  explanationEs:
                    "Incorrecto: Hannah aclara que todos entregan puntualmente ('everyone submits on time').",
                },
                {
                  id: "B",
                  text: "Students were giving one another uniform top scores and superficial comments rather than constructive technical feedback.",
                  explanationEs:
                    "Correcto: 56 de 60 estudiantes otorgaron cinco sobre cinco en todas las categorías con elogios vagos ('great daylighting concept') sin señalar fallos técnicos.",
                },
                {
                  id: "C",
                  text: "Classmates were unfairly lowering competitors' midterm grades at shared drafting tables.",
                  explanationEs:
                    "Incorrecto: ocurría exactamente lo opuesto; inflaban las calificaciones para no perjudicar el promedio de sus compañeros de mesa.",
                },
                {
                  id: "D",
                  text: "Students lacked sufficient training in thermal-bridging calculations to build scale models.",
                  explanationEs:
                    "Incorrecto: el puente térmico se menciona como un defecto que evitaban señalar por cortesía social, no por desconocimiento técnico.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d15-list-p2-q02",
              prompt:
                "According to Dr. Morales, why were students reluctant to critique classmates' models honestly?",
              options: [
                {
                  id: "A",
                  text: "Peer scores directly affected ten percent of the recipient's project grade, encouraging mutual leniency.",
                  explanationEs:
                    "Correcto: al impactar directamente el 10 % de la nota del compañero con quien comparten mesa toda la semana, surge una reciprocidad implícita de inflación de notas.",
                },
                {
                  id: "B",
                  text: "The one-to-five rating form was written in overly technical architectural jargon.",
                  explanationEs:
                    "Incorrecto: el problema de la escala numérica no era de vocabulario incomprensible, sino de incentivos sociales.",
                },
                {
                  id: "C",
                  text: "Students thought Dr. Morales would publish their signed critiques in a public archive.",
                  explanationEs:
                    "Incorrecto: el archivo mencionado al final contiene proyectos anónimos del año anterior para practicar.",
                },
                {
                  id: "D",
                  text: "Ten percent of the course grade was insufficient for students to take the studio seriously.",
                  explanationEs:
                    "Incorrecto: precisamente ese 10 % vinculado a la nota ajena era lo que inhibía la crítica honesta.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d15-list-p2-q03",
              prompt: "How does Dr. Morales recommend restructuring the peer-review assignment?",
              options: [
                {
                  id: "A",
                  text: "Increasing the weight of numerical peer scores from ten percent to twenty-five percent",
                  explanationEs:
                    "Incorrecto: empeoraría el problema; aconseja desvincular los puntajes numéricos de la nota del receptor y eliminar la escala del 1 al 5.",
                },
                {
                  id: "B",
                  text: "Grading reviewers on the specificity of their written diagnostic feedback using structured prompts",
                  explanationEs:
                    "Correcto: propone evaluar a cada estudiante por la calidad diagnóstica de la crítica que redacta (identificar un compromiso estructural y proponer una mejora verificable).",
                },
                {
                  id: "C",
                  text: "Assigning graduate teaching fellows from other departments to grade all sixty models",
                  explanationEs:
                    "Incorrecto: el objetivo sigue siendo que los propios estudiantes desarrollen criterio analítico entre pares.",
                },
                {
                  id: "D",
                  text: "Separating students into isolated cubicles so they no longer share drafting tables",
                  explanationEs:
                    "Incorrecto: no sugiere modificar la disposición física del taller de arquitectura.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d15-list-p2-q04",
              prompt: "What will Hannah prepare for Monday morning's studio session?",
              options: [
                {
                  id: "A",
                  text: "Archived student projects from last spring for a brief critique-calibration exercise",
                  explanationEs:
                    "Correcto: en el cierre indica que seleccionará dos proyectos archivados de la primavera pasada para practicar en clase cómo distinguir críticas útiles de cumplidos vagos.",
                },
                {
                  id: "B",
                  text: "A revised midterm exam testing memorization of daylighting building codes",
                  explanationEs:
                    "Incorrecto: el curso trabaja con maquetas de taller y revisiones de diseño, no con un examen memorístico el lunes.",
                },
                {
                  id: "C",
                  text: "Individual grade penalties for the fifty-six students who gave perfect scores",
                  explanationEs:
                    "Incorrecto: reconoce que el diseño de incentivos previo causó esa conducta y aplicará el nuevo sistema hacia adelante.",
                },
                {
                  id: "D",
                  text: "A survey asking students whether they prefer numerical scales over written comments",
                  explanationEs:
                    "Incorrecto: no planea una encuesta de opinión, sino un taller práctico de calibración de veinte minutos.",
                },
              ],
              correctOptionId: "A",
            },
          ],
          keyTakeawayEs:
            "En conversaciones sobre innovación docente, identifica siempre el cambio de incentivo ('decouple X -> evaluate Y instead'): ahí reside el núcleo de al menos dos preguntas.",
        },
        {
          part: "part3_lecture",
          id: "d15-list-p3",
          title: "Learning Sciences: Productive Failure & The Illusion of Fluency",
          cefrLevel: "B2",
          audio: {
            trackId: "day15-listening-p3",
            audioUrl: "/audio/day15-listening-p3.mp3",
            contextSetup:
              "A professor in a graduate learning-sciences seminar lectures on instructional sequence and conceptual transfer.",
            turns: [
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "For generations, university instruction has followed a seemingly intuitive sequence: first, the professor explains a concept and demonstrates the canonical formula on the board; only afterward do students practice applying it. Yet research in the learning sciences on a paradigm called 'Productive Failure' suggests that reversing those two phases often yields far deeper mastery.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Developed extensively by educational researcher Manu Kapur, Productive Failure reverses the traditional order. Before receiving any formal instruction on a target concept—say, statistical variance—small student teams spend thirty minutes wrestling with a complex, real-world dataset, attempting to invent their own mathematical measure of consistency.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Predictably, almost none of the teams derive the textbook formula on their own; in the short term, their solutions fall short. However, generating multiple imperfect approaches activates students' prior knowledge and makes them acutely aware of specific edge cases where naive averages break down.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "When the instructor steps in during the second phase to compare those student-generated attempts against the canonical equation, learners immediately grasp which structural flaw each term in the formula solves. Controlled studies across calculus, physics, and medical diagnostics show that Productive Failure cohorts score nearly twice as high on delayed transfer tests weeks later.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Why, then, do both students and faculty often resist this sequence? The culprit is a metacognitive trap known as the illusion of fluency. Watching a polished, step-by-step lecture feels effortless, leading learners to mistake smooth comprehension in the moment for durable retention—even rating traditional lecturers higher on end-of-week satisfaction surveys.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Of course, Productive Failure is not unguided discovery. Without two strict design conditions—a problem accessible through multiple intuitive entry points, followed promptly by explicit instructor synthesis—initial struggle merely degenerates into unproductive frustration. What creates lasting expertise is the deliberate pairing of exploratory struggle with structured consolidation.",
                pauseAfterMs: 650,
              },
            ],
          },
          questions: [
            {
              id: "d15-list-p3-q01",
              prompt: "What is the primary focus of the professor's lecture?",
              options: [
                {
                  id: "A",
                  text: "Why attempting ill-structured problems prior to explicit instruction deepens conceptual understanding and long-term transfer",
                  explanationEs:
                    "Correcto: recoge la tesis central sobre 'Productive Failure': invertir la secuencia tradicional mediante exploración previa seguida de síntesis explícita potencia la transferencia duradera pese a la incomodidad inicial.",
                },
                {
                  id: "B",
                  text: "Why universities should abolish instructor lectures altogether in favor of unguided student projects",
                  explanationEs:
                    "Incorrecto: en el cierre el profesor advierte expresamente que NO es descubrimiento sin guía ('not unguided discovery') y que la síntesis explícita del docente es indispensable.",
                },
                {
                  id: "C",
                  text: "How end-of-week student satisfaction surveys accurately predict long-term retention in physics",
                  explanationEs:
                    "Incorrecto: explica precisamente lo contrario: las encuestas inmediatas se dejan engañar por la ilusión de fluidez de clases cómodas.",
                },
                {
                  id: "D",
                  text: "Why statistical variance should be removed from introductory undergraduate curricula",
                  explanationEs:
                    "Incorrecto: la varianza estadística se menciona únicamente como un ejemplo concreto de concepto objetivo.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d15-list-p3-q02",
              prompt:
                "According to the lecture, what typically happens during the initial exploration phase of Productive Failure?",
              options: [
                {
                  id: "A",
                  text: "Most student teams independently rediscover the exact textbook equation within thirty minutes.",
                  explanationEs:
                    "Incorrecto: el profesor subraya que casi ningún equipo deduce la fórmula canónica por sí solo ('almost none of the teams derive the textbook formula on their own').",
                },
                {
                  id: "B",
                  text: "Teams devise incomplete methods that activate prior knowledge and expose the limits of intuitive shortcuts.",
                  explanationEs:
                    "Correcto: aunque sus soluciones iniciales no alcanzan la fórmula exacta, ensayar múltiples enfoques activa conocimientos previos y revela dónde fallan los promedios simples.",
                },
                {
                  id: "C",
                  text: "Students memorize baseline definitions from a recorded lecture before joining teams.",
                  explanationEs:
                    "Incorrecto: la exploración ocurre ANTES de recibir cualquier instrucción formal sobre el concepto ('Before receiving any formal instruction').",
                },
                {
                  id: "D",
                  text: "The instructor intervenes every five minutes to correct calculation mistakes immediately.",
                  explanationEs:
                    "Incorrecto: el docente interviene en la segunda fase para contrastar los intentos estudiantiles con la ecuación canónica.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d15-list-p3-q03",
              prompt:
                "How does struggling with the dataset first change the way students process the professor's later explanation?",
              options: [
                {
                  id: "A",
                  text: "It enables them to recognize the exact conceptual problem that each component of the canonical formula resolves.",
                  explanationEs:
                    "Correcto: al haber chocado antes contra casos límite reales, cuando el docente contrasta sus intentos con la fórmula, comprenden qué fallo estructural corrige cada término.",
                },
                {
                  id: "B",
                  text: "It convinces them that mathematical formulas are unnecessary in medical diagnostics.",
                  explanationEs:
                    "Incorrecto: el diagnóstico médico se cita entre los campos donde este método duplica el desempeño en pruebas de transferencia.",
                },
                {
                  id: "C",
                  text: "It reduces the total class time needed to cover an entire semester syllabus by half.",
                  explanationEs:
                    "Incorrecto: no afirma que recorte el semestre a la mitad, sino que casi duplica el puntaje en evaluaciones diferidas de transferencia.",
                },
                {
                  id: "D",
                  text: "It eliminates all cognitive effort during the second phase of instruction.",
                  explanationEs:
                    "Incorrecto: la segunda fase implica comparación analítica activa y consolidación estructurada.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d15-list-p3-q04",
              prompt: "Why does the professor mention the 'illusion of fluency'?",
              options: [
                {
                  id: "A",
                  text: "To explain why students who speak multiple languages excel in calculus courses",
                  explanationEs:
                    "Incorrecto: falso amigo contextual; en psicología cognitiva 'fluency' se refiere a la sensación subjetiva de facilidad al procesar información, no al bilingüismo.",
                },
                {
                  id: "B",
                  text: "To account for why learners and instructors often prefer smooth traditional lectures despite inferior delayed transfer",
                  explanationEs:
                    "Correcto: responde directamente a 'Why, then, do both students and faculty often resist this sequence?', explicando que una clase pulida se siente fácil en el momento y se confunde con aprendizaje duradero.",
                },
                {
                  id: "C",
                  text: "To prove that step-by-step lectures produce higher scores on delayed transfer exams",
                  explanationEs:
                    "Incorrecto: los grupos de Productive Failure son los que obtienen casi el doble de puntaje semanas después.",
                },
                {
                  id: "D",
                  text: "To criticize Manu Kapur for relying on student satisfaction questionnaires",
                  explanationEs:
                    "Incorrecto: la crítica apunta al sesgo metacognitivo de los cuestionarios de satisfacción inmediatos, no a Kapur.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d15-list-p3-q05",
              prompt:
                "According to the conclusion of the lecture, when does initial struggle become counterproductive?",
              options: [
                {
                  id: "A",
                  text: "Whenever students collaborate in pairs instead of working silently alone",
                  explanationEs:
                    "Incorrecto: en el turno 2 el método se describe precisamente con equipos pequeños colaborativos ('small student teams').",
                },
                {
                  id: "B",
                  text: "When the problem lacks accessible entry points or is not followed by explicit instructor consolidation",
                  explanationEs:
                    "Correcto: el turno final advierte que, sin un problema abordable desde múltiples rutas intuitivas y una síntesis explícita posterior del docente, el esfuerzo degenera en frustración improductiva.",
                },
                {
                  id: "C",
                  text: "Whenever the target discipline involves quantitative equations such as physics",
                  explanationEs:
                    "Incorrecto: cálculo y física figuran expresamente entre las disciplinas donde el método triunfó en estudios controlados.",
                },
                {
                  id: "D",
                  text: "When delayed transfer assessments are administered more than one week after class",
                  explanationEs:
                    "Incorrecto: es justamente en las evaluaciones diferidas semanas después donde el método muestra su mayor ventaja.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d15-list-p3-q06",
              prompt: "What is the professor's overall attitude toward Productive Failure?",
              options: [
                {
                  id: "A",
                  text: "Endorsing its cognitive effectiveness provided instructors pair exploration with structured synthesis",
                  explanationEs:
                    "Correcto: respalda con evidencia empírica su superioridad para la transferencia profunda, pero matiza con rigor las dos condiciones de diseño necesarias para evitar frustración estéril.",
                },
                {
                  id: "B",
                  text: "Dismissive, arguing that thirty minutes of exploration wastes scarce seminar time",
                  explanationEs:
                    "Incorrecto: defiende el valor cognitivo de esos treinta minutos de exploración inicial.",
                },
                {
                  id: "C",
                  text: "Uncertain, noting that no controlled studies have tested the method outside statistics",
                  explanationEs:
                    "Incorrecto: cita estudios controlados en cálculo, física y diagnóstico médico.",
                },
                {
                  id: "D",
                  text: "Unconditional, claiming any difficult problem automatically produces expertise without teacher input",
                  explanationEs:
                    "Incorrecto: rechaza explícitamente el descubrimiento sin guía en el último turno.",
                },
              ],
              correctOptionId: "A",
            },
          ],
          keyTakeawayEs:
            "Observa cómo en iTEP el profesor casi nunca adopta una postura extremista: la respuesta correcta en preguntas de actitud suele combinar respaldo empírico con una condición metodológica precisa.",
        },
      ],
    },

    // =========================================================================
    // 3. READING (30 min study / Controlled 20-Min Pacing: 7 min P1 + 13 min P2)
    // =========================================================================
    reading: {
      skill: "reading",
      cefrLevel: "B2",
      title: "Micro-Credential Governance & Cognitive Load in Simulation Training",
      estimatedMinutes: 30,
      timeLimitSeconds: 1200,
      focusSummaryEs:
        "Ritmo oficial para mañana (20 min totales): dedica máximo 7 minutos a Reading Part 1 (~250 palabras, 4 preguntas) y reserva 13 minutos completos para Reading Part 2 (~450 palabras, 6 preguntas). Lee primero la primera oración de cada párrafo en 35 segundos para fijar el mapa retórico.",
      passages: [
        {
          part: "part1_intermediate",
          id: "d15-read-p1",
          title: "Competency-Based Micro-Credentials in University Curricula",
          cefrLevel: "B2",
          topicDomain: "Higher Education Policy & Curriculum Design",
          paragraphs: [
            "Across North American and European universities, academic faculties are increasingly supplementing traditional four-year degree transcripts with competency-based micro-credentials—verified digital records certifying mastery of discrete analytical or technical skills such as geospatial modeling, regulatory bioethics, archival curation, or clinical data auditing. Unlike conventional course grades, which routinely blend exam scores, classroom attendance, and group participation into a single opaque letter, micro-credentials require candidates to demonstrate individual proficiency through standardized performance artifacts evaluated against transparent faculty rubrics. University career offices report that such granular skill documentation helps humanities and pure-science graduates articulate transferable analytical capabilities to prospective employers who might otherwise overlook non-vocational majors during automated resume screening.",
            "Despite growing institutional enthusiasm, curriculum scholars warn that the uncoordinated proliferation of skill badges can fragment undergraduate education into a disconnected checklist of narrow, short-lived software tasks. When university departments design modules solely around immediate commercial software requests, courses risk becoming obsolete within three years while crowding out foundational theoretical inquiry and critical writing. Moreover, corporate hiring managers frequently dismiss university badges altogether when dozens of colleges invent incompatible assessment standards with wildly uneven rigor.",
            "Consequently, regional accrediting consortia now advocate embedding micro-credentials within cohesive degree pathways rather than offering them as isolated commercial add-ons. Under interoperable metadata standards, each digital credential links directly to the underlying student artifact—such as an audited code repository, laboratory protocol, or quantitative policy brief—allowing external reviewers to inspect real scholarly work while preserving the intellectual breadth of a university degree.",
          ],
          questions: [
            {
              id: "d15-read-p1-q01",
              questionType: "main_idea",
              prompt: "What is the main purpose of the passage?",
              options: [
                {
                  id: "A",
                  text: "To argue that traditional four-year degrees have become obsolete and should be replaced by short software bootcamps",
                  explanationEs:
                    "Incorrecto: el pasaje trata sobre complementar ('supplementing') los títulos universitarios e integrarlos sin perder amplitud intelectual, nunca abolirlos.",
                },
                {
                  id: "B",
                  text: "To evaluate the benefits and curricular pitfalls of university micro-credentials and outline how standards make them credible",
                  explanationEs:
                    "Correcto: sintetiza el recorrido de los tres párrafos: transparencia de competencias frente a notas opacas (P1), riesgos de fragmentación e inconsistencia (P2) e integración bajo estándares verificables (P3).",
                },
                {
                  id: "C",
                  text: "To explain why humanities graduates are ineligible for technical micro-credentials in data auditing",
                  explanationEs:
                    "Incorrecto: el párrafo 1 afirma precisamente que las microcredenciales ayudan a graduados de humanidades y ciencias puras a demostrar capacidades transferibles.",
                },
                {
                  id: "D",
                  text: "To criticize accrediting consortia for prohibiting universities from updating software courses",
                  explanationEs:
                    "Incorrecto: los consorcios acreditadores se presentan en el párrafo 3 como promotores de estándares interoperables constructivos.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d15-read-p1-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'opaque' in paragraph 1 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "uninformative and lacking transparency",
                  explanationEs:
                    "Correcto: al describir una calificación tradicional en letra que mezcla exámenes, asistencia y participación sin detallar habilidades específicas (en contraste con 'transparent rubrics'), 'opaque' significa poco transparente o difícil de interpretar.",
                },
                {
                  id: "B",
                  text: "statistically fraudulent",
                  explanationEs:
                    "Incorrecto: las notas tradicionales no se califican de fraudulentas, sino de demasiado agregadas y poco específicas.",
                },
                {
                  id: "C",
                  text: "confidentially encrypted",
                  explanationEs:
                    "Incorrecto: no alude a cifrado informático, sino a la ambigüedad informativa de una sola letra en el historial académico.",
                },
                {
                  id: "D",
                  text: "excessively lenient",
                  explanationEs:
                    "Incorrecto: una nota global en letra puede ser estricta o alta; el defecto señalado es que oculta qué competencia exacta domina el estudiante.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d15-read-p1-q03",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 2 about micro-credentials designed solely around specific commercial software tools?",
              options: [
                {
                  id: "A",
                  text: "Their practical value can depreciate rapidly as workplace technologies evolve.",
                  explanationEs:
                    "Correcto: el párrafo 2 advierte que diseñar módulos únicamente en torno a solicitudes inmediatas de software conlleva el riesgo de que queden obsoletos en apenas tres años.",
                },
                {
                  id: "B",
                  text: "Corporate hiring managers universally trust them more than four-year transcripts.",
                  explanationEs:
                    "Incorrecto: el final del párrafo 2 señala que los gerentes suelen descartarlas cuando carecen de estándares compatibles y rigor uniforme.",
                },
                {
                  id: "C",
                  text: "They strengthen theoretical inquiry more effectively than traditional seminars.",
                  explanationEs:
                    "Incorrecto: al contrario, se advierte que pueden desplazar ('crowding out') la indagación teórica fundamental.",
                },
                {
                  id: "D",
                  text: "Accrediting consortia require every undergraduate to complete twelve software badges.",
                  explanationEs: "Incorrecto: cifra inventada sin respaldo alguno en el texto.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d15-read-p1-q04",
              questionType: "synthesis",
              prompt:
                "According to paragraph 3, how do interoperable metadata standards address employer skepticism?",
              options: [
                {
                  id: "A",
                  text: "By replacing student performance artifacts with standardized attendance records",
                  explanationEs:
                    "Incorrecto: la asistencia era parte de la opacidad criticada en el párrafo 1; aquí se vincula la credencial al trabajo real.",
                },
                {
                  id: "B",
                  text: "By enabling reviewers to examine the actual evaluated work behind each credential within a coherent degree",
                  explanationEs:
                    "Correcto: cada credencial enlaza directamente con el artefacto auditado (código o informe de políticas), permitiendo a evaluadores externos verificar la evidencia real del desempeño.",
                },
                {
                  id: "C",
                  text: "By allowing corporate recruiters to write university graduation requirements directly",
                  explanationEs:
                    "Incorrecto: subordinar el currículo exclusivamente a peticiones empresariales inmediatas fue la advertencia del párrafo 2.",
                },
                {
                  id: "D",
                  text: "By restricting digital credentials to engineering and computer science departments",
                  explanationEs:
                    "Incorrecto: el texto incluye ejemplos como bioética regulatoria, informes de políticas y graduados de humanidades.",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
        {
          part: "part2_academic",
          id: "d15-read-p2",
          title: "Cognitive Load Architecture and Progressive Fidelity in Simulation Training",
          cefrLevel: "B2",
          topicDomain: "Instructional Neuroscience & Professional Education",
          paragraphs: [
            "Over the past two decades, medical schools, civil aviation academies, and nuclear power-grid training centers have invested heavily in ultra-realistic simulators that replicate every auditory alarm, hydraulic vibration, visual gauge, and environmental distraction of an actual operational crisis. Driven by the intuitive assumption that closer physical resemblance to workplace reality automatically produces superior diagnostic readiness, institutional procurement committees frequently equate technological realism—known in human-factors engineering as physical fidelity—with pedagogical effectiveness. Yet controlled experimental research grounded in Cognitive Load Theory demonstrates that immersing first-year trainees directly into full-scale, high-fidelity emergencies often impairs rather than accelerates foundational skill acquisition.",
            "Human working memory can consciously manipulate only four to five novel information elements simultaneously before becoming saturated, whereas long-term memory stores vast, automated mental blueprints called schemas without measurable capacity limits. Experienced trauma surgeons or veteran airline captains navigate chaotic emergencies effortlessly because decades of deliberate practice have consolidated thousands of subtle diagnostic cues into single retrievable schemas, freeing scarce working memory to monitor unexpected clinical or mechanical anomalies. Novices, by contrast, possess no such compressed mental frameworks; for a beginner still calculating how arterial blood pressure interacts with acute fluid loss, blinking monitor lights, background radio chatter, and realistic team commotion impose heavy 'extraneous cognitive load'—mental effort expended on filtering peripheral sensory clutter rather than constructing core causal models.",
            "Controlled instructional trials comparing multi-semester training sequences illustrate this attentional bottleneck starkly. [A] In a landmark multi-institution clinical study, third-year medical students who practiced cardiac resuscitation first on simplified computer schematics and silent static mannequins diagnosed underlying arrhythmia causes twenty-eight percent more accurately during subsequent hospital rotations than peers trained exclusively inside theatrical, high-stress simulation suites. [B] High-precision eye-tracking recordings revealed that novices placed prematurely into hyper-realistic trauma rooms fixated repeatedly on loud peripheral equipment alarms, leaving insufficient attentional bandwidth to detect subtle shifts in patient vital waveforms. [C] Conversely, senior specialty residents who had already automated foundational diagnostic procedures benefited substantially from high-fidelity scenarios that tested interprofessional team communication under realistic time pressure. [D]",
            "These empirical findings have prompted instructional systems designers to replace one-size-fits-all realism with 'progressive fidelity' curriculum architectures. Rather than maximizing sensory complexity from day one, effective professional programs calibrate task fidelity to the learner's evolving stage of expertise: introductory modules isolate core physiological or mechanical relationships in low-distraction environments, intermediate stages introduce variable clinical cases, and capstone simulations restore full environmental turbulence only after baseline procedural schemas operate automatically. What ultimately governs transfer to high-stakes professions is not how closely a simulator mimics surface appearances, but how deliberately it aligns cognitive demand with the learner's level of schema consolidation.",
          ],
          questions: [
            {
              id: "d15-read-p2-q01",
              questionType: "detail",
              prompt:
                "According to paragraph 1, what assumption often guides institutional spending on training simulators?",
              options: [
                {
                  id: "A",
                  text: "That simplified schematic software costs more to maintain than theatrical simulation suites",
                  explanationEs:
                    "Incorrecto: no se afirma que los esquemas simplificados sean más costosos; la inversión masiva se dirige a simuladores ultrarrealistas.",
                },
                {
                  id: "B",
                  text: "That greater physical resemblance to real-world environments automatically yields better training outcomes",
                  explanationEs:
                    "Correcto: el párrafo 1 identifica explícitamente la suposición intuitiva de que una mayor semejanza física con la realidad ('physical fidelity') equivale automáticamente a mayor eficacia pedagógica.",
                },
                {
                  id: "C",
                  text: "That first-year novices already possess automated diagnostic schemas before entering medical school",
                  explanationEs:
                    "Incorrecto: el párrafo 2 establece exactamente lo opuesto respecto a los principiantes.",
                },
                {
                  id: "D",
                  text: "That aviation academies require less realistic equipment than power-grid training centers",
                  explanationEs:
                    "Incorrecto: ambas instituciones se agrupan en el párrafo 1 como ejemplos paralelos de inversión en alta fidelidad.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d15-read-p2-q02",
              questionType: "rhetorical_purpose",
              prompt:
                "Why does the author contrast experienced trauma surgeons with beginners in paragraph 2?",
              options: [
                {
                  id: "A",
                  text: "To explain why sensory realism overwhelms novices' working memory while leaving experts unaffected",
                  explanationEs:
                    "Correcto: muestra que los expertos comprimen miles de señales en esquemas automatizados de memoria a largo plazo, mientras que en los novatos el ruido sensorial satura la memoria de trabajo como carga cognitiva extrínseca.",
                },
                {
                  id: "B",
                  text: "To argue that airline captains have larger innate working-memory capacity than medical students",
                  explanationEs:
                    "Incorrecto: la capacidad de memoria de trabajo humana es limitada para todos; la ventaja experta proviene de esquemas almacenados en la memoria a largo plazo tras años de práctica.",
                },
                {
                  id: "C",
                  text: "To suggest that hospitals should silence all monitor alarms during cardiac emergencies",
                  explanationEs:
                    "Incorrecto: el argumento versa sobre cómo secuenciar el entrenamiento de novatos, no sobre apagar alarmas hospitalarias reales.",
                },
                {
                  id: "D",
                  text: "To prove that theoretical physiology cannot be taught before hospital rotations begin",
                  explanationEs:
                    "Incorrecto: al contrario, defiende consolidar primero las relaciones causales básicas sin distracciones periféricas.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d15-read-p2-q03",
              questionType: "vocabulary_in_context",
              prompt: "The word 'extraneous' in paragraph 2 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "nonessential and distracting from core learning",
                  explanationEs:
                    "Correcto: el propio texto glosa 'extraneous cognitive load' como el esfuerzo mental gastado en filtrar ruido sensorial ('filtering sensory clutter') en vez de construir modelos causales esenciales.",
                },
                {
                  id: "B",
                  text: "permanently stored in long-term memory",
                  explanationEs:
                    "Incorrecto: eso define a los esquemas consolidados ('schemas'), no a la carga cognitiva extrínseca.",
                },
                {
                  id: "C",
                  text: "clinically life-threatening",
                  explanationEs:
                    "Incorrecto: califica el tipo de carga mental impuesta por estímulos periféricos durante la instrucción.",
                },
                {
                  id: "D",
                  text: "mathematically effortless",
                  explanationEs:
                    "Incorrecto: el texto la describe como una carga pesada ('heavy') que consume recursos limitados de atención.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d15-read-p2-q04",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 3 about high-fidelity, high-stress simulation suites?",
              options: [
                {
                  id: "A",
                  text: "They have zero educational value at any stage of medical or aviation training.",
                  explanationEs:
                    "Incorrecto (distractor absoluto): el final del párrafo 3 demuestra que los residentes avanzados SÍ se beneficiaron sustancialmente de ellos.",
                },
                {
                  id: "B",
                  text: "Their pedagogical value depends on whether trainees have already automated baseline diagnostic procedures.",
                  explanationEs:
                    "Correcto: perjudicaron la precisión diagnóstica de novatos de tercer año distraídos por alarmas periféricas, pero beneficiaron sustancialmente a residentes avanzados que ya habían automatizado los procedimientos base.",
                },
                {
                  id: "C",
                  text: "Eye-tracking cameras distracted third-year students more than peripheral monitor alarms did.",
                  explanationEs:
                    "Incorrecto: el seguimiento ocular fue el instrumento de medición que reveló la fijación visual en las alarmas periféricas.",
                },
                {
                  id: "D",
                  text: "Static mannequins teach team communication under time pressure better than full-scale suites do.",
                  explanationEs:
                    "Incorrecto: la comunicación en equipo bajo presión de tiempo es precisamente la competencia avanzada donde destacaron las salas de alta fidelidad con residentes expertos.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d15-read-p2-q05",
              questionType: "sentence_insertion",
              prompt:
                "Look at the four squares [A], [B], [C], and [D] in paragraph 3. Where would the following sentence best fit?",
              sentenceToInsert:
                "This divergence demonstrates that environmental realism shifts from an obstacle to an asset once foundational skills no longer compete for conscious attention.",
              options: [
                {
                  id: "A",
                  text: "[A]",
                  explanationEs:
                    "Incorrecto: antes de `[A]` aún no se ha presentado ninguna divergencia empírica ('This divergence') entre dos grupos de distinto nivel.",
                },
                {
                  id: "B",
                  text: "[B]",
                  explanationEs:
                    "Incorrecto: antes de `[B]` solo se ha expuesto el resultado de los estudiantes novatos; todavía no aparece el polo positivo ('to an asset') correspondiente a los residentes avanzados.",
                },
                {
                  id: "C",
                  text: "[C]",
                  explanationEs:
                    "Incorrecto: las dos oraciones previas a `[C]` describen únicamente el déficit atencional de los principiantes; falta aún el contraste con los residentes avanzados introducido por 'Conversely...'.",
                },
                {
                  id: "D",
                  text: "[D]",
                  explanationEs:
                    "Correcto: 'This divergence' sintetiza con exactitud el contraste recién completado entre los novatos sobrecargados (antes de `[C]`) y los residentes avanzados que sí aprovechan la alta fidelidad tras automatizar procedimientos base (oración previa a `[D]`).",
                },
              ],
              correctOptionId: "D",
            },
            {
              id: "d15-read-p2-q06",
              questionType: "synthesis",
              prompt:
                "Which curriculum sequence best exemplifies the 'progressive fidelity' model advocated in paragraph 4?",
              options: [
                {
                  id: "A",
                  text: "Training beginners in chaotic emergency suites first so schematic classroom lessons feel easier afterward",
                  explanationEs:
                    "Incorrecto: invierte exactamente el orden progresivo defendido en los párrafos 3 y 4.",
                },
                {
                  id: "B",
                  text: "Beginning with low-distraction conceptual models, adding case variability, and introducing full crisis realism after core schemas become automatic",
                  explanationEs:
                    "Correcto: reproduce fielmente las tres etapas del párrafo 4: aislar relaciones funcionales sin distracciones -> casos variables intermedios -> simulación de turbulencia completa una vez automatizados los esquemas.",
                },
                {
                  id: "C",
                  text: "Eliminating high-fidelity simulators entirely to redirect institutional budgets toward lecture halls",
                  explanationEs:
                    "Incorrecto: las simulaciones de alta fidelidad se conservan como etapa culminante ('capstone simulations').",
                },
                {
                  id: "D",
                  text: "Allowing first-year trainees to choose freely between schematic software and full-scale crisis rooms",
                  explanationEs:
                    "Incorrecto: como vimos en Listening y Reading, los principiantes suelen juzgar mal la carga cognitiva; el diseño calibra deliberadamente la secuencia según el nivel de pericia.",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
      ],
    },

    // =========================================================================
    // 4. WRITING (25 min study / Anti-Typo Protocol Without Spellcheck)
    // =========================================================================
    writing: {
      skill: "writing",
      cefrLevel: "B2",
      title: "Testing Workstation Request & Continuous Portfolio Assessment Essay",
      estimatedMinutes: 25,
      timeLimitSeconds: 1500,
      focusSummaryEs:
        "En el examen real no tendrás subrayados rojos de ortografía (`spellCheck={false}`). Reserva innegociablemente los últimos 45s en Part 1 y los últimos 3 minutos en Part 2 para ejecutar el Barrido Anti-Typos en 3 pasadas: (1) consonantes dobles críticas ('accommodate', 'necessary', 'assessment', 'environment'), (2) '-s' de tercera persona singular y concordancia a distancia, y (3) eliminación de 'comma splices'.",
      tasks: [
        {
          part: "part1_note",
          id: "d15-writ-p1",
          cefrLevel: "B2",
          title: "Confirming Exam Check-In & Requesting a Replacement Keyboard",
          prompt:
            "You are registered to take a computer-based departmental proficiency examination tomorrow morning in Lab 204. During yesterday's brief orientation check, you noticed that the spacebar on Workstation 12 was sticking intermittently. Write a formal note to Ms. Alvarez, the Testing Services Coordinator, in which you: (1) confirm your attendance for tomorrow's morning session, (2) explain the keyboard issue on Workstation 12 and request either an external keyboard or a seat reassignment, and (3) ask how early candidates may enter for ID verification.",
          timeLimitSeconds: 300,
          minWords: 50,
          maxWords: 75,
          strategyGuideEs:
            "Escribe 3 a 4 oraciones limpias en 4 minutos y dedica 60 segundos completos a verificar ortografía letra por letra ('intermittently', 'reassignment', 'verification', 'whether') y orden declarativo en la pregunta indirecta final.",
          recommendedConnectors: ["During yesterday's", "either ... or", "so that", "how early"],
          b2RubricChecklistEs: [
            "Cubre los 3 puntos solicitados (confirmación de asistencia matutina, fallo específico en estación 12 con solicitud de teclado/cambio y hora de ingreso para verificación).",
            "Conteo exacto entre 50 y 75 palabras con tono cortés y administrativo.",
            "Pregunta indirecta final sin inversión ('let me know how early candidates may enter', nunca '*how early may candidates').",
            "Barrido anti-typos completado: cero errores en consonantes dobles o letras mudas.",
          ],
          modelAnswerB2:
            "Dear Ms. Alvarez, I am writing to confirm my attendance for tomorrow morning's proficiency examination in Lab 204. During yesterday's orientation check, I noticed that the spacebar on Workstation 12 was sticking intermittently; therefore, I would appreciate either an external keyboard or a seat reassignment before the timed writing section begins. Could you also confirm how early candidates may enter for identification checks? Sincerely, Elena Rojas",
        },
        {
          part: "part2_essay",
          id: "d15-writ-p2",
          cefrLevel: "B2",
          title: "Continuous Semester Portfolios vs. High-Stakes Final Exams",
          prompt:
            "Many university faculties are debating whether to replace single high-stakes cumulative final examinations with continuous portfolio-based assessments collected throughout the semester. Proponents argue that portfolios reduce acute test anxiety and reflect authentic intellectual growth, whereas critics maintain that standardized proctored final exams remain necessary to verify independent, unassisted mastery. Which assessment model should universities prioritize? Support your position with specific reasons and examples.",
          timeLimitSeconds: 1200,
          minWords: 175,
          maxWords: 225,
          strategyGuideEs:
            "En vez de elegir un extremo ingenuo, demuestra madurez B2+ defendiendo una prioridad clara respaldada por salvaguardas (por ejemplo, priorizar portafolios continuos acompañados de una breve defensa oral o verificación presencial, o priorizar exámenes supervisados moderados por entregas parciales). Reserva los minutos 17 al 20 exclusivamente para tu lista anti-typos.",
          recommendedConnectors: [
            "Despite",
            "Admittedly,",
            "However,",
            "not only ... but also",
            "Ultimately,",
          ],
          b2RubricChecklistEs: [
            "Postura clara desde el primer párrafo que responde directamente a qué modelo deben priorizar las universidades.",
            "Extensión limpia de 175 a 225 palabras organizada en 4 párrafos equilibrados.",
            "Reconoce legítimamente el riesgo de autoría no verificada (o de ansiedad aguda) y lo resuelve con un argumento académico concreto.",
            "Aplica al menos dos reglas de alto retorno del Día 15 ('Despite + sintagma nominal', paralelismo, subjuntivo o cuantificadores incontables como 'less anxiety').",
            "Auditoría final de 3 minutos sin corrector: verifica 'assessment', 'necessary', 'environment', 'independent' y puntuación de conectores ('However,').",
          ],
          modelAnswerB2:
            "University assessment should measure durable competence rather than single-day stamina; therefore, faculties should prioritize continuous portfolio-based evaluation supplemented by brief in-person verification over isolated high-stakes final examinations.\n\nAdmittedly, critics raise a valid concern regarding academic integrity in an era of generative software. If students submit take-home essays without oversight, instructors cannot verify independent authorship reliably. However, relying on a single three-hour exam to guarantee fairness introduces an equally severe distortion: acute performance anxiety and temporary cramming often mask what capable students genuinely understand while rewarding superficial short-term recall.\n\nDespite these integrity challenges, well-designed portfolios capture intellectual growth that no one-off test can measure. In an undergraduate software engineering or public policy seminar, compiling iterative drafts, data audits, and peer-review responses across fourteen weeks demonstrates how a student diagnoses errors and refines complex arguments over time. To safeguard independent mastery without reverting to marathon finals, professors can require students to defend one portfolio artifact orally during a ten-minute classroom check-in.\n\nUltimately, pairing longitudinal portfolios with concise proctored verification reduces unnecessary student anxiety while upholding rigorous academic standards. Universities prepare graduates far better when evaluation mirrors authentic professional work.",
        },
      ],
    },

    // =========================================================================
    // 5. SPEAKING (15 min study / Vocal Warm-Up & Confidence Anchor)
    // =========================================================================
    speaking: {
      skill: "speaking",
      cefrLevel: "B2",
      title: "Pre-Exam Focus Routine & Human Seminars vs. AI Tutors",
      estimatedMinutes: 15,
      timeLimitSeconds: 300,
      focusSummaryEs:
        "Calentamiento vocal de víspera: articula consonantes finales ('-ed', '-s', '-st') a velocidad moderada (135–150 palabras por minuto). En iTEP Speaking un ritmo sereno con pausas limpias al cerrar cláusulas puntúa mucho más alto que hablar rápido atropellando la gramática.",
      tasks: [
        {
          part: "part1_personal",
          id: "d15-speak-p1",
          cefrLevel: "B2",
          title: "Staying Calm and Focused Before a High-Stakes Evaluation",
          prompt:
            "Describe a specific routine or mental strategy you use to remain calm, focused, and articulate immediately before an important academic examination or formal presentation. Explain why this approach works effectively for you.",
          prepSeconds: 30,
          recordSeconds: 45,
          structureTemplate: [
            "0–10s (Direct Anchor): Name your exact pre-exam routine without generic throat-clearing.",
            "10–28s (Mechanism): Explain the two concrete steps you take in the final 30 minutes and how they lower cognitive noise.",
            "28–45s (Transferable Result): Close by stating how this habit protects your pacing under time pressure.",
          ],
          keyPhrasesB2: [
            "Whenever I face a high-stakes academic evaluation, I rely on a deliberate...",
            "Rather than frantically reviewing notes at the last minute, I...",
            "Doing so prevents working-memory overload and stabilizes my...",
            "As a result, I enter the room ready to execute calmly.",
          ],
          selfRubricChecklistEs: [
            "Inicié en el segundo 1 con voz proyectada, pausada y segura.",
            "Articulé claramente las terminaciones de pasado y tercera persona sin apresurarme.",
            "Usé conectores precisos ('Rather than + -ing', 'Doing so...', 'As a result') manteniendo el hilo.",
            "Aterricé la oración final con entonación descendente firme entre los segundos 40 y 44.",
          ],
          modelTranscriptB2:
            "Whenever I face a high-stakes examination or formal presentation, I follow a strict thirty-minute cognitive cooldown routine. Rather than frantically skimming notes right outside the testing room—which only triggers unnecessary anxiety—I put away all study materials half an hour beforehand. Next, I spend five minutes breathing slowly while visualizing my time-management checkpoints for each section, and then I read one short paragraph aloud in English to warm up my pronunciation and vocal pacing. Doing so clears working-memory clutter and prevents that initial rush of adrenaline from speeding up my speech. As a result, I start the assessment feeling grounded, articulate, and fully in control of the clock.",
        },
        {
          part: "part2_opinion",
          id: "d15-speak-p2",
          cefrLevel: "B2",
          title: "Personalized AI Tutoring Systems vs. Live Faculty Seminars",
          prompt:
            "As adaptive artificial-intelligence tutoring platforms grow increasingly sophisticated, some educational technologists predict that individualized AI mentors will largely replace small-group university seminars led by human professors. Others contend that live seminar dialogue with peers and faculty cultivates spontaneous argumentation, ethical judgment, and collaborative reasoning that software cannot replicate. Which perspective do you find more convincing, and why?",
          audioPrompt: {
            trackId: "day15-speaking-p2",
            audioUrl: "/audio/day15-speaking-p2.mp3",
            contextSetup: "Official iTEP Speaking Part 2 final confidence calibration prompt.",
            turns: [
              {
                speakerLabel: "Examiner",
                voice: "en-US-AvaMultilingualNeural",
                text: "As adaptive artificial-intelligence tutoring platforms grow increasingly sophisticated, some educational technologists predict that individualized AI mentors will largely replace small-group university seminars led by human professors. Others contend that live seminar dialogue with peers and faculty cultivates spontaneous argumentation, ethical judgment, and collaborative reasoning that software cannot replicate. Which perspective do you find more convincing, and why?",
                pauseAfterMs: 600,
              },
            ],
          },
          prepSeconds: 45,
          recordSeconds: 60,
          structureTemplate: [
            "0–12s (Clear Stance): Affirm that live human seminars remain irreplaceable even if AI assists outside class.",
            "12–28s (Smart Concession): Acknowledge where AI tutors excel (drilling foundational mechanics privately).",
            "28–50s (Core Seminar Value + Example): Show how defending an idea before diverse peers builds ethical and social reasoning.",
            "50–60s (Decisive Close): Summarize the complementary role of AI support under human mentorship.",
          ],
          keyPhrasesB2: [
            "While adaptive AI platforms excel at personalizing routine practice, I am convinced that...",
            "University education involves far more than absorbing individualized explanations; it requires...",
            "In a live seminar, when a classmate challenges an unstated assumption in your argument...",
            "Therefore, AI tools should complement rather than replace faculty-led inquiry.",
          ],
          selfRubricChecklistEs: [
            "Sostuve un tono firme, pausado y académico digno de nivel B2 sólido (≥ 3.8).",
            "Integré concesión + refutación ('While adaptive AI platforms excel at..., live seminars...') con naturalidad.",
            "Incluí un ejemplo vívido de interacción en seminario universitario para sustentar mi postura.",
            "Pronuncié palabras clave ('individualized', 'assumption', 'collaborative') sin tropiezos.",
            "Cerré antes del segundo 60 con una conclusión rotunda y cero relleno final.",
          ],
          modelTranscriptB2:
            "While adaptive AI platforms excel at personalizing routine practice outside class, I am firmly convinced that live, faculty-led seminars remain irreplaceable at the university level. Admittedly, an automated tutor is remarkably efficient at diagnosing a student's syntax error or walking through calculus steps at midnight without judgment. However, higher education involves far more than absorbing customized explanations in isolation. In a live bioethics or public policy seminar, students must defend tentative positions in real time before peers whose cultural and disciplinary backgrounds differ sharply from their own. Navigating spontaneous disagreement, reading subtle interpersonal cues, and revising one's stance respectfully under a professor's mentorship cultivate civic empathy and intellectual humility that no algorithm can simulate. Therefore, universities should deploy AI tutors to support foundational preparation while preserving human seminars as the core arena of critical thought.",
        },
      ],
    },
  },
  dailyChecklistEs: [
    "Calibré con 100 % de claridad las 10 reglas gramaticales de mayor retorno en menos de 5 minutos.",
    "Completé Listening sobre Innovación Educativa en una sola toma aplicando notas mínimas de flechas y símbolos.",
    "Ejecuté Reading en el ritmo exacto 7 min (Part 1) + 13 min (Part 2) acertando la inserción en `[D]`.",
    "Apliqué el barrido anti-typos de 3 minutos en Writing sin corrector verificando consonantes dobles y concordancia.",
    "Realicé el calentamiento vocal de Speaking Part 1 y Part 2 cerrando dentro del tiempo y cierro estudio hoy para descansar la mente antes del examen.",
  ],
};
