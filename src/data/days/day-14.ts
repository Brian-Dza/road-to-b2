import type { RoadmapDay } from "../../schemas/curriculum.schema.ts";

export const day14: RoadmapDay = {
  dayNumber: 14,
  sprintNumber: 3,
  cefrLevel: "B2",
  title: "Full-Length Official Mock Exam #2: Dress Rehearsal & B2 Audit",
  subtitleEs:
    "Simulacro Final Oficial #2: Ensayo general cronometrado de 80 minutos + 60 minutos de auditoría quirúrgica B2",
  b2FocusSummaryEs:
    "Este Día 14 constituye tu ensayo general definitivo en condiciones idénticas al examen iTEP Academic-Plus real: 80 minutos continuos de reloj oficial sin pausas (Grammar 10 min, Listening 20 min en una sola toma estricta, Reading 20 min, Writing 25 min sin corrector ortográfico y Speaking 5 min con grabación encadenada), seguidos de 60 minutos de auditoría diagnóstica profunda para consolidar un margen seguro de 3.8 a 4.4 puntos sobre 6.0.",
  estimatedMinutes: 140,
  isMockExamDay: true,
  mockExamId: "mock-final-day14",
  sections: {
    // =========================================================================
    // 1. GRAMMAR (10 min official clock = 600s / 25 min with post-mock B2 audit)
    // =========================================================================
    grammar: {
      skill: "grammar",
      cefrLevel: "B2",
      title: "Official Mock #2 — Grammar (Parts 1 & 2: 25 Questions)",
      estimatedMinutes: 25,
      timeLimitSeconds: 600,
      focusSummaryEs:
        "Mantén una cadencia estricta de 24 segundos por reactivo durante los 10 minutos oficiales: resuelve las 13 preguntas de completar estructura en 5 minutos y dedica los 5 minutos restantes a auditar concordancia a distancia, régimen preposicional, comparaciones elípticas y voz verbal en las 12 preguntas de identificación de error.",
      questions: [
        {
          part: "part1_fill_blank",
          id: "d14-gram-p1-q01",
          cefrLevel: "B2",
          grammarTopic: "Negative Adverbial Inversion in Academic Prose",
          sentenceWithBlank:
            "Seldom _____ such a complete stratigraphic sequence of Paleogene marine fossils along an uplifted continental margin.",
          options: [
            {
              id: "A",
              text: "paleontologists have documented",
              explanationEs:
                "Incorrecto: cuando un adverbio restrictivo o negativo como 'Seldom' encabeza la oración, el inglés formal exige invertir el auxiliar antes del sujeto ('have paleontologists documented'), nunca mantener orden declarativo.",
            },
            {
              id: "B",
              text: "have paleontologists documented",
              explanationEs:
                "Correcto: 'Seldom' en posición inicial desencadena inversión sujeto-auxiliar obligatoria ('have + sujeto + participio pasado') en registro académico B2/C1.",
            },
            {
              id: "C",
              text: "did paleontologists documented",
              explanationEs:
                "Incorrecto: tras el auxiliar 'did' el verbo léxico debe aparecer en forma base ('document'), jamás conjugado en pasado o participio ('*did ... documented').",
            },
            {
              id: "D",
              text: "are paleontologists documenting with",
              explanationEs:
                "Incorrecto: introduce una preposición colgante 'with' incompatible con el objeto directo 'such a complete stratigraphic sequence' y rompe el sentido experiencial del adverbio 'Seldom'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Al detectar 'Seldom', 'Rarely', 'Never' o 'Little' como primera palabra de la cláusula principal, aplica de inmediato la fórmula 'auxiliar + sujeto + verbo' como en una interrogativa.",
        },
        {
          part: "part1_fill_blank",
          id: "d14-gram-p1-q02",
          cefrLevel: "B2",
          grammarTopic: "Passive Mandative Subjunctive",
          sentenceWithBlank:
            "The institutional review board stipulated that every participant's genomic profile _____ prior to cross-university data transmission.",
          options: [
            {
              id: "A",
              text: "be anonymized",
              explanationEs:
                "Correcto: el verbo mandativo 'stipulated' seguido de 'that' exige subjuntivo presente invariable; al ser el perfil genómico receptor de la acción, se emplea la forma pasiva base 'be anonymized'.",
            },
            {
              id: "B",
              text: "is anonymizing",
              explanationEs:
                "Incorrecto: usa indicativo en lugar de subjuntivo mandativo y además voz activa progresiva, como si el perfil anonimizara algo por sí mismo.",
            },
            {
              id: "C",
              text: "was anonymized",
              explanationEs:
                "Incorrecto: en inglés académico estadounidense evaluado por iTEP, las cláusulas mandativas tras 'stipulate/require/insist that' no admiten concordancia de pasado ('was'), sino la raíz verbal 'be'.",
            },
            {
              id: "D",
              text: "to be anonymized",
              explanationEs:
                "Incorrecto: la conjunción subordinante 'that' requiere una cláusula con sujeto y forma verbal de subjuntivo, nunca un infinitivo con 'to' sin verbo finito.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Tras 'stipulate/mandate/insist/require that + sujeto', descarta verbos conjugados ('is/was/-s') e infinitivos ('to be'): elige raíz pura ('anonymize' activa o 'be anonymized' pasiva).",
        },
        {
          part: "part1_fill_blank",
          id: "d14-gram-p1-q03",
          cefrLevel: "B2",
          grammarTopic: "Inverted Mixed Conditional (Past Counterfactual Cause -> Present Result)",
          sentenceWithBlank:
            "Had the regional water authority replaced its aging cast-iron mains a decade ago, downtown districts _____ chronic pressure drops today.",
          options: [
            {
              id: "A",
              text: "will not experience",
              explanationEs:
                "Incorrecto: 'Had + sujeto + participio' equivale a 'If ... had replaced' (condición irreal pasada), lo cual es incompatible con el futuro real 'will'.",
            },
            {
              id: "B",
              text: "would not have experienced",
              explanationEs:
                "Incorrecto: 'would not have experienced' cerraría un tercer condicional referido exclusivamente al pasado, chocando con el marcador de presente actual 'today'.",
            },
            {
              id: "C",
              text: "would not be experiencing",
              explanationEs:
                "Correcto: condicional mixto donde una causa contrafactual en el pasado ('Had ... replaced ... a decade ago') proyecta una consecuencia contrafactual vigente hoy ('would not be experiencing ... today').",
            },
            {
              id: "D",
              text: "had not experienced",
              explanationEs:
                "Incorrecto: el Past Perfect pertenece a la prótasis condicional ('if-clause'), nunca a la cláusula principal de resultado.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Cruza siempre los dos marcadores temporales del condicional: pasado irreal ('a decade ago') + presente ('today') exige 'would + (be + -ing / verbo base)', no 'would have + participio'.",
        },
        {
          part: "part1_fill_blank",
          id: "d14-gram-p1-q04",
          cefrLevel: "B2",
          grammarTopic: "Quantifying Partitive Relative Clauses",
          sentenceWithBlank:
            "The paleobotany symposium featured twenty-four peer-reviewed monographs, _____ reconstructed ancient wetland flora from fossilized pollen grains.",
          options: [
            {
              id: "A",
              text: "nearly half of them",
              explanationEs:
                "Incorrecto: el pronombre personal 'them' carece de valor conjuntivo; unir dos cláusulas independientes con verbo conjugado ('featured' y 'reconstructed') solo mediante una coma produce un 'comma splice'.",
            },
            {
              id: "B",
              text: "of which nearly half they",
              explanationEs:
                "Incorrecto: duplica ilegítimamente el sujeto al combinar el relativo 'which' con el pronombre pleonástico 'they'.",
            },
            {
              id: "C",
              text: "nearly half of that",
              explanationEs:
                "Incorrecto: el relativo 'that' no puede ser término de la preposición 'of' en construcciones partitivas ('*of that').",
            },
            {
              id: "D",
              text: "nearly half of which",
              explanationEs:
                "Correcto: cláusula relativa partitiva ('cuantificador + of which') que enlaza subordinadamente la segunda cláusula con el antecedente inanimado 'twenty-four peer-reviewed monographs'.",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Si ves una coma entre dos verbos conjugados sin conjunción ('and', 'but', 'whereas'), elige siempre 'of which / of whom', nunca 'of them'.",
        },
        {
          part: "part1_fill_blank",
          id: "d14-gram-p1-q05",
          cefrLevel: "B2",
          grammarTopic: "Formal Prepositions of Concession vs. Subordinating Conjunctions",
          sentenceWithBlank:
            "_____ the impressive energy density achieved in laboratory prototypes, solid-state lithium-sulfur cells remain too brittle for commercial aviation.",
          options: [
            {
              id: "A",
              text: "Even though",
              explanationEs:
                "Incorrecto: 'Even though' es una conjunción subordinante que exige sujeto + verbo finito; aquí 'achieved in laboratory prototypes' es solo un participio reducido que modifica al sintagma nominal 'the impressive energy density'.",
            },
            {
              id: "B",
              text: "Notwithstanding",
              explanationEs:
                "Correcto: 'Notwithstanding' funciona como preposición concesiva de alto registro ('a pesar de') seguida directamente de un sintagma nominal complejo sin verbo conjugado.",
            },
            {
              id: "C",
              text: "Whereas",
              explanationEs:
                "Incorrecto: 'Whereas' introduce una cláusula completa con verbo conjugado para contrastar dos sujetos, por lo que no puede regir únicamente un grupo nominal.",
            },
            {
              id: "D",
              text: "Nevertheless",
              explanationEs:
                "Incorrecto: 'Nevertheless' es un adverbio conjuntivo ('sin embargo') que requiere punto y coma previo o coma posterior, jamás un objeto nominal directo.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Cuidado con los participios pasados engañosos ('achieved in...'): si no hay auxiliar ('was/has been'), todo el bloque antes de la coma es un sintagma nominal y exige preposición ('Notwithstanding', 'Despite').",
        },
        {
          part: "part1_fill_blank",
          id: "d14-gram-p1-q06",
          cefrLevel: "B2",
          grammarTopic: "Perfect Participial Clauses Expressing Prior Completion",
          sentenceWithBlank:
            "_____ three independent rounds of double-blind external auditing, the multicenter oncology dataset was cleared for public release.",
          options: [
            {
              id: "A",
              text: "Undergone",
              explanationEs:
                "Incorrecto: 'undergo' es un verbo transitivo que el conjunto de datos experimenta activamente ('the dataset underwent three rounds'), por lo que el participio pasado pasivo 'Undergone' con objeto directo resulta agramatical.",
            },
            {
              id: "B",
              text: "Having been undergone",
              explanationEs:
                "Incorrecto: 'undergo' no admite pasivización cuando su sujeto es la entidad que atraviesa el proceso ('*the dataset was undergone').",
            },
            {
              id: "C",
              text: "Having undergone",
              explanationEs:
                "Correcto: participio perfecto activo ('Having + participio pasado') cuyo sujeto implícito coincide con 'the multicenter oncology dataset' y marca anterioridad respecto a 'was cleared'.",
            },
            {
              id: "D",
              text: "To undergo",
              explanationEs:
                "Incorrecto: un infinitivo inicial expresaría propósito futuro ('para someterse a...'), contradiciendo la secuencia lógica de haber superado primero las tres auditorías antes de liberarse.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Recuerda el comportamiento especial de 'undergo': aunque en español se traduce como 'ser sometido a', en inglés es activo transitivo ('the dataset underwent auditing' -> 'Having undergone auditing').",
        },
        {
          part: "part1_fill_blank",
          id: "d14-gram-p1-q07",
          cefrLevel: "B2",
          grammarTopic: "Correlative Inversion with Initial 'Not only'",
          sentenceWithBlank:
            "Not only _____ barrier-island erosion along exposed coastlines, but it also disrupts juvenile fish nurseries in adjacent estuaries.",
          options: [
            {
              id: "A",
              text: "offshore dredging accelerates",
              explanationEs:
                "Incorrecto: colocar 'Not only' al inicio de la cláusula completa obliga a invertir auxiliar y sujeto; el orden declarativo directo es incorrecto.",
            },
            {
              id: "B",
              text: "accelerates offshore dredging",
              explanationEs:
                "Incorrecto: en inglés moderno los verbos léxicos como 'accelerate' no se invierten directamente sin el auxiliar 'do/does/did'.",
            },
            {
              id: "C",
              text: "is offshore dredging accelerated",
              explanationEs:
                "Incorrecto: la voz pasiva destruiría la transitividad sobre el objeto directo 'barrier-island erosion' y rompería la referencia del pronombre activo 'it' ('offshore dredging') en la segunda cláusula.",
            },
            {
              id: "D",
              text: "does offshore dredging accelerate",
              explanationEs:
                "Correcto: inversión correlativa impecable ('Not only + does + sujeto singular incontable + verbo base') concordando con 'offshore dredging' y manteniendo transitividad activa.",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Ante 'Not only _____ ... , but ... also', verifica tres pasos: (1) inversión con auxiliar ('does/did/has'), (2) número del sujeto y (3) verbo en forma base si usas 'do/does/did'.",
        },
        {
          part: "part1_fill_blank",
          id: "d14-gram-p1-q08",
          cefrLevel: "B2",
          grammarTopic: "Nominal Relative Clefts ('What' Clauses as Subject)",
          sentenceWithBlank:
            "_____ baffled nineteenth-century maritime historians was the accuracy with which Polynesian navigators crossed open ocean swells without magnetic instruments.",
          options: [
            {
              id: "A",
              text: "What",
              explanationEs:
                "Correcto: 'What' ('aquello que') actúa simultáneamente como sujeto interno del verbo 'baffled' y como núcleo de toda la cláusula nominal sujeto del verbo copulativo 'was'.",
            },
            {
              id: "B",
              text: "That",
              explanationEs:
                "Incorrecto: la conjunción nominal 'That' no puede desempeñar función de sujeto dentro de su propia cláusula, dejando al verbo 'baffled' sin sujeto ('*That baffled historians').",
            },
            {
              id: "C",
              text: "Which",
              explanationEs:
                "Incorrecto: 'Which' requiere un antecedente nominal previo o un sustantivo interrogativo acompañante, y no puede abrir una seudo-hendida afirmativa.",
            },
            {
              id: "D",
              text: "It",
              explanationEs:
                "Incorrecto: si el sujeto fuera 'It' ('It baffled...'), quedarían dos verbos principales conjugados ('baffled' y 'was') sin pronombre relativo que subordine el primero.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Si tras el espacio inicial aparece inmediatamente un verbo conjugado ('_____ baffled ...') y más adelante otro verbo principal ('was'), el hueco exige el relativo fusionado 'What'.",
        },
        {
          part: "part1_fill_blank",
          id: "d14-gram-p1-q09",
          cefrLevel: "B2",
          grammarTopic: "Modal Perfect Passive of Past Logical Deduction",
          sentenceWithBlank:
            "Trace-element analysis proves that the manuscript's ultramarine pigment _____ imported from Badakhshan mines, as no European quarry yielded lapis lazuli in the twelfth century.",
          options: [
            {
              id: "A",
              text: "should have",
              explanationEs:
                "Incorrecto: 'should have imported' expresa reproche o expectativa incumplida en voz activa, como si el pigmento hubiera debido importar algo.",
            },
            {
              id: "B",
              text: "must have",
              explanationEs:
                "Incorrecto: omite el participio pasivo 'been', formando la voz activa 'must have imported', como si el pigmento mismo hubiera importado algo desde las minas.",
            },
            {
              id: "C",
              text: "might be",
              explanationEs:
                "Incorrecto: además de expresar mera posibilidad débil frente a 'proves', sitúa la importación en presente/futuro en vez del siglo XII.",
            },
            {
              id: "D",
              text: "must have been",
              explanationEs:
                "Correcto: deducción lógica de alta certeza sobre un evento pasado ('must have') combinada con voz pasiva ('been + imported') porque el pigmento fue importado.",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Cuando la oración aporta evidencia científica concluyente sobre cómo ocurrió un hecho histórico ('as no European quarry yielded...'), emplea deducción epistémica pasada 'must have been + participio'.",
        },
        {
          part: "part1_fill_blank",
          id: "d14-gram-p1-q10",
          cefrLevel: "B2",
          grammarTopic: "Collocational Preposition + Relative Pronoun ('the extent to which')",
          sentenceWithBlank:
            "Soil microbiologists are quantifying the extent _____ multi-species cover cropping accelerates carbon sequestration in depleted agricultural plains.",
          options: [
            {
              id: "A",
              text: "in that",
              explanationEs:
                "Incorrecto: 'in that' introduce una justificación explicativa ('en el sentido de que'), pero no constituye la colocación relativa exigida por 'extent'.",
            },
            {
              id: "B",
              text: "by where",
              explanationEs:
                "Incorrecto: combinación preposicional impropia; 'extent' expresa grado o alcance abstracto, no ubicación espacial.",
            },
            {
              id: "C",
              text: "to which",
              explanationEs:
                "Correcto: en inglés académico el sustantivo 'extent' (igual que 'degree') rige la preposición 'to' ('to a certain extent'), originando la estructura relativa 'the extent to which'.",
            },
            {
              id: "D",
              text: "which",
              explanationEs:
                "Incorrecto: la cláusula subordinada ya tiene sujeto ('multi-species cover cropping') y objeto directo ('carbon sequestration'), por lo que 'which' sin preposición carece de función sintáctica.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Memoriza los binomios fijos de grado y medio en iTEP: 'the extent/degree TO which', 'the mechanism/process BY which' y 'the framework WITHIN which'.",
        },
        {
          part: "part1_fill_blank",
          id: "d14-gram-p1-q11",
          cefrLevel: "B2",
          grammarTopic: "Fronted 'So + Adjective' Resultative Inversion",
          sentenceWithBlank:
            "So interdependent _____ between alpine bumblebees and early-blooming sedges that even a six-day advance in spring snowmelt lowers seed viability.",
          options: [
            {
              id: "A",
              text: "are the mutualistic cycles",
              explanationEs:
                "Correcto: al anteponer el predicado intensificado 'So interdependent' al inicio de la oración ('So + adjetivo + verbo copulativo invertido + sujeto plural + that'), 'are' precede y concuerda con 'cycles'.",
            },
            {
              id: "B",
              text: "the mutualistic cycles are",
              explanationEs:
                "Incorrecto: omite la inversión obligatoria del verbo 'be' tras un predicado adjetival adelantado con 'So'.",
            },
            {
              id: "C",
              text: "is the mutualistic cycles",
              explanationEs:
                "Incorrecto: respeta la inversión pero falla en la concordancia sujeto-verbo, pues el núcleo pospuesto 'cycles' es plural y exige 'are'.",
            },
            {
              id: "D",
              text: "do the mutualistic cycles",
              explanationEs:
                "Incorrecto: 'interdependent' es un adjetivo predicativo que requiere el verbo copulativo 'be' ('cycles are interdependent'), nunca el auxiliar 'do' sin verbo léxico.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "En estructuras invertidas 'So + adjetivo + _____ + sujeto + that', mira hacia la derecha del espacio para hallar el sujeto real ('cycles') y elegir el verbo copulativo en número plural o singular.",
        },
        {
          part: "part1_fill_blank",
          id: "d14-gram-p1-q12",
          cefrLevel: "B2",
          grammarTopic: "Restrictive Conditional Conjunctions ('provided that' vs. 'unless')",
          sentenceWithBlank:
            "Municipal green bonds attract institutional pension funds _____ independent auditors verify emissions reductions annually across financed infrastructure.",
          options: [
            {
              id: "A",
              text: "unless",
              explanationEs:
                "Incorrecto: 'unless' ('a menos que') invertiría absurdamente la lógica financiera, implicando que los fondos invierten solo si nadie audita las reducciones.",
            },
            {
              id: "B",
              text: "in case of",
              explanationEs:
                "Incorrecto: 'in case of' es una locución preposicional que no puede preceder a una cláusula finita con sujeto ('independent auditors') y verbo ('verify').",
            },
            {
              id: "C",
              text: "provided that",
              explanationEs:
                "Correcto: conjunción condicional restrictiva ('siempre y cuando / con la condición de que') seguida de presente simple ('verify') para establecer el requisito indispensable.",
            },
            {
              id: "D",
              text: "regardless",
              explanationEs:
                "Incorrecto: 'regardless' es adverbio; para introducir complemento requeriría 'regardless of whether', nunca una cláusula declarativa directa.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Distingue con precisión semántica y sintáctica: 'provided that + cláusula' = condición necesaria positiva; 'unless + cláusula' = excepción negativa; 'in case of + sustantivo' = precaución.",
        },
        {
          part: "part1_fill_blank",
          id: "d14-gram-p1-q13",
          cefrLevel: "B2",
          grammarTopic: "Active Causative Construction ('have + agent + bare infinitive')",
          sentenceWithBlank:
            "Prior to resubmitting the clinical manuscript, the principal investigator had the biostatistics unit _____ confidence intervals using non-parametric bootstrap methods.",
          options: [
            {
              id: "A",
              text: "to recalculate",
              explanationEs:
                "Incorrecto: a diferencia de 'get + agente + to-infinitive', el causativo activo 'have + agente' prohíbe la partícula 'to'.",
            },
            {
              id: "B",
              text: "recalculating",
              explanationEs:
                "Incorrecto: para encargar la ejecución puntual y completa de una revisión técnica previa al envío se emplea el infinitivo desnudo 'recalculate'.",
            },
            {
              id: "C",
              text: "recalculated",
              explanationEs:
                "Incorrecto: 'had + objeto + participio pasado' es causativo pasivo; aquí 'the biostatistics unit' no fue recalculada, sino que ejecutó el cálculo sobre 'confidence intervals'.",
            },
            {
              id: "D",
              text: "recalculate",
              explanationEs:
                "Correcto: estructura causativa activa de encargo profesional ('had + agente ejecutor + infinitivo sin to': 'had the biostatistics unit recalculate').",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Contrasta las tres fórmulas causativas de iTEP: 'have + persona + verbo base', 'get + persona + to + verbo' y 'have/get + cosa + participio pasado'.",
        },
        {
          part: "part2_error_identification",
          id: "d14-gram-p2-q14",
          cefrLevel: "B2",
          grammarTopic: "Subject-Verb Agreement with 'The number of' vs. 'A number of'",
          sentenceWithMarkedSegments:
            "The number of scholarly journals [A]{adopting} mandatory open-code policies [B]{have increased} substantially [C]{since} federal research councils [D]{revised} their grant criteria.",
          correctedSegment: "has increased",
          options: [
            {
              id: "A",
              text: "adopting",
              explanationEs:
                "Correcto en la oración: participio activo reducido ('[that are] adopting') que modifica legítimamente a 'scholarly journals'.",
            },
            {
              id: "B",
              text: "have increased",
              explanationEs:
                "Incorrecto (contiene el error): mientras 'a number of + plural' toma verbo plural, la expresión 'The number of...' tiene como núcleo el sustantivo singular 'number' y exige 'has increased'.",
            },
            {
              id: "C",
              text: "since",
              explanationEs:
                "Correcto en la oración: conjunción temporal ('desde que') que vincula adecuadamente un Present Perfect en la cláusula matriz con un Past Simple puntual.",
            },
            {
              id: "D",
              text: "revised",
              explanationEs:
                "Correcto en la oración: verbo en Past Simple que sitúa el punto de partida temporal dentro de la cláusula encabezada por 'since'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Regla automática en Part 2: 'THE number of + sustantivo plural' -> verbo SINGULAR ('has/is'); 'A number of + sustantivo plural' -> verbo PLURAL ('have/are').",
        },
        {
          part: "part2_error_identification",
          id: "d14-gram-p2-q15",
          cefrLevel: "B2",
          grammarTopic: "Prepositional 'to' Requiring Gerund ('object to + -ing')",
          sentenceWithMarkedSegments:
            "Although coastal merchants [A]{initially objected to} [B]{relocate} the municipal ferry terminal, hydrodynamic models [C]{eventually persuaded} them [D]{to endorse} the harbor plan.",
          correctedSegment: "relocating",
          options: [
            {
              id: "A",
              text: "initially objected to",
              explanationEs:
                "Correcto en la oración: adverbio en posición preverbal estándar junto al verbo preposicional 'object to'.",
            },
            {
              id: "B",
              text: "relocate",
              explanationEs:
                "Incorrecto (contiene el error): en 'object to', la palabra 'to' es una preposición genuina y no marca de infinitivo, por lo que su complemento verbal debe ir en gerundio ('relocating').",
            },
            {
              id: "C",
              text: "eventually persuaded",
              explanationEs:
                "Correcto en la oración: verbo transitivo en Past Simple precedido correctamente por el adverbio 'eventually'.",
            },
            {
              id: "D",
              text: "to endorse",
              explanationEs:
                "Correcto en la oración: el verbo 'persuade' rige la estructura 'persuade + objeto + to-infinitive' ('persuaded them to endorse').",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Si puedes colocar un sustantivo después de 'to' ('objected to the relocation'), entonces 'to' es preposición y obliga a usar '-ing' ('objected to relocating').",
        },
        {
          part: "part2_error_identification",
          id: "d14-gram-p2-q16",
          cefrLevel: "B2",
          grammarTopic: "Parallel Referents in Academic Comparisons ('that of' / 'those of')",
          sentenceWithMarkedSegments:
            "The thermal conductivity of graphene films [A]{deposited} on copper foil [B]{far surpasses} [C]{conventional silicon wafers} [D]{under} ambient operating temperatures.",
          correctedSegment: "that of conventional silicon wafers",
          options: [
            {
              id: "A",
              text: "deposited",
              explanationEs:
                "Correcto en la oración: participio pasado pasivo reducido que especifica cómo fueron depositadas las películas de grafeno.",
            },
            {
              id: "B",
              text: "far surpasses",
              explanationEs:
                "Correcto en la oración: el intensificador 'far' modifica apropiadamente al verbo transitivo singular 'surpasses', concordando con 'conductivity'.",
            },
            {
              id: "C",
              text: "conventional silicon wafers",
              explanationEs:
                "Incorrecto (contiene el error): compara ilógicamente una propiedad física abstracta ('The thermal conductivity') con un objeto físico ('wafers'); exige el pronombre demostrativo singular 'that of conventional silicon wafers'.",
            },
            {
              id: "D",
              text: "under",
              explanationEs:
                "Correcto en la oración: preposición estándar para indicar condiciones físicas o experimentales ('under ambient operating temperatures').",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Tras 'exceeds', 'surpasses' o 'than', verifica que ambas entidades sean de la misma categoría semántica; si comparas una propiedad poseída, inserta 'that of' (singular) o 'those of' (plural).",
        },
        {
          part: "part2_error_identification",
          id: "d14-gram-p2-q17",
          cefrLevel: "B2",
          grammarTopic: "Voice in Reduced Adverbial Clauses ('When exposed to')",
          sentenceWithMarkedSegments:
            "[A]{When} [B]{exposing} to intense ultraviolet radiation above the tree line, alpine lichens [C]{synthesize} dark phenolic compounds [D]{that protect} their algal symbionts.",
          correctedSegment: "exposed",
          options: [
            {
              id: "A",
              text: "When",
              explanationEs:
                "Correcto en la oración: conjunción temporal que puede conservarse ante un participio reducido para explicitar la relación temporal.",
            },
            {
              id: "B",
              text: "exposing",
              explanationEs:
                "Incorrecto (contiene el error): los líquenes alpinos no exponen algo ('exposing' exigiría objeto directo), sino que son expuestos ('[they are] exposed to') a la radiación; debe usarse el participio pasivo 'exposed'.",
            },
            {
              id: "C",
              text: "synthesize",
              explanationEs:
                "Correcto en la oración: verbo principal en Present Simple científico concordando con el sujeto plural 'alpine lichens'.",
            },
            {
              id: "D",
              text: "that protect",
              explanationEs:
                "Correcto en la oración: cláusula relativa especificativa cuyo verbo plural 'protect' concuerda con el antecedente 'compounds'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "En cláusulas reducidas tras 'When/While/If/Once', si inmediatamente sigue una preposición ('to', 'in', 'by') en vez de un objeto directo de un verbo transitivo, casi siempre se requiere participio pasado '-ed'.",
        },
        {
          part: "part2_error_identification",
          id: "d14-gram-p2-q18",
          cefrLevel: "B2",
          grammarTopic: "Declarative Word Order in Embedded Indirect Questions",
          sentenceWithMarkedSegments:
            "Parliamentary auditors [A]{have not yet} [B]{clarified} [C]{why did the procurement agency waive} competitive bidding [D]{prior to awarding} the satellite communications contract.",
          correctedSegment: "why the procurement agency waived",
          options: [
            {
              id: "A",
              text: "have not yet",
              explanationEs:
                "Correcto en la oración: auxiliar de Present Perfect negativo con 'yet' colocado adecuadamente antes del participio pasado.",
            },
            {
              id: "B",
              text: "clarified",
              explanationEs:
                "Correcto en la oración: participio pasado transitivo que completa el Present Perfect 'have not yet clarified' e introduce la interrogativa indirecta.",
            },
            {
              id: "C",
              text: "why did the procurement agency waive",
              explanationEs:
                "Incorrecto (contiene el error): al ser una interrogativa indirecta incrustada como objeto de 'clarified', prohíbe el auxiliar 'did' e inversión; debe emplear orden declarativo ('why the procurement agency waived').",
            },
            {
              id: "D",
              text: "prior to awarding",
              explanationEs:
                "Correcto en la oración: la locución preposicional 'prior to' va seguida correctamente del gerundio 'awarding'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Ninguna cláusula subordinada encabezada por 'why/how/where/when/what' dentro de una oración terminada en punto lleva jamás el auxiliar interrogativo 'do/does/did'.",
        },
        {
          part: "part2_error_identification",
          id: "d14-gram-p2-q19",
          cefrLevel: "B2",
          grammarTopic: "Correlative Parallelism ('not only + gerund ... but also + gerund')",
          sentenceWithMarkedSegments:
            "Mitigating urban flash floods [A]{entails} not only [B]{restoring} riparian wetlands upstream [C]{but also} [D]{to replace} impermeable asphalt parking lots with porous pavers.",
          correctedSegment: "replacing",
          options: [
            {
              id: "A",
              text: "entails",
              explanationEs:
                "Correcto en la oración: el sujeto gerundial 'Mitigating urban flash floods' es singular y rige un verbo transitivo que toma gerundio como objeto ('entails restoring...').",
            },
            {
              id: "B",
              text: "restoring",
              explanationEs:
                "Correcto en la oración: primer complemento en gerundio regido directamente por el verbo 'entails'.",
            },
            {
              id: "C",
              text: "but also",
              explanationEs:
                "Correcto en la oración: segunda mitad exacta del par correlativo 'not only ... but also'.",
            },
            {
              id: "D",
              text: "to replace",
              explanationEs:
                "Incorrecto (contiene el error): rompe tanto el paralelismo correlativo con '[B]{restoring}' como el régimen verbal de 'entails' (que no admite infinitivo); debe ser 'replacing'.",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "En estructuras 'not only X but also Y' o 'either X or Y', verifica que X e Y tengan idéntica categoría morfosintáctica ('-ing' con '-ing', 'to-infinitive' con 'to-infinitive').",
        },
        {
          part: "part2_error_identification",
          id: "d14-gram-p2-q20",
          cefrLevel: "B2",
          grammarTopic: "Uncountable Academic Nouns ('evidence', 'research', 'equipment')",
          sentenceWithMarkedSegments:
            "Recent archaeobotanical [A]{excavations} across the Fertile Crescent have yielded [B]{compelling} [C]{evidences} that wild cereals [D]{were cultivated} millennia before full domestication.",
          correctedSegment: "evidence",
          options: [
            {
              id: "A",
              text: "excavations",
              explanationEs:
                "Correcto en la oración: 'excavation' es contable cuando se refiere a campañas o yacimientos concretos y concuerda con el verbo plural 'have yielded'.",
            },
            {
              id: "B",
              text: "compelling",
              explanationEs:
                "Correcto en la oración: adjetivo participial estándar en colocación académica ('compelling evidence' = evidencia contundente).",
            },
            {
              id: "C",
              text: "evidences",
              explanationEs:
                "Incorrecto (contiene el error): en inglés estándar académico, 'evidence' es un sustantivo estrictamente incontable y carece de plural en '-s'; debe escribirse 'evidence'.",
            },
            {
              id: "D",
              text: "were cultivated",
              explanationEs:
                "Correcto en la oración: voz pasiva en Past Simple concordando con el sujeto plural 'wild cereals'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Alerta máxima para hispanohablantes: 'evidences', 'researches', 'informations', 'equipments' y 'advices' son siempre errores en iTEP Grammar Part 2.",
        },
        {
          part: "part2_error_identification",
          id: "d14-gram-p2-q21",
          cefrLevel: "B2",
          grammarTopic: "Intransitive Academic Verbs Illegally Used in the Passive Voice",
          sentenceWithMarkedSegments:
            "Unexpected thermal instabilities [A]{were arisen} inside the vacuum chamber [B]{shortly after} technicians [C]{initiated} the high-energy plasma [D]{containment} trial.",
          correctedSegment: "arose",
          options: [
            {
              id: "A",
              text: "were arisen",
              explanationEs:
                "Incorrecto (contiene el error): 'arise' ('surgir / presentarse') es un verbo intransitivo puro y jamás admite voz pasiva; la forma activa correcta en pasado es 'arose'.",
            },
            {
              id: "B",
              text: "shortly after",
              explanationEs:
                "Correcto en la oración: locución conjuntiva temporal precisa para introducir una secuencia inmediata.",
            },
            {
              id: "C",
              text: "initiated",
              explanationEs:
                "Correcto en la oración: verbo transitivo en Past Simple coherente con el marco narrativo del ensayo experimental.",
            },
            {
              id: "D",
              text: "containment",
              explanationEs:
                "Correcto en la oración: sustantivo usado atributivamente para calificar a 'trial' ('plasma containment trial').",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Los verbos intransitivos de aparición o suceso ('occur', 'arise', 'happen', 'emerge', 'consist of', 'result from') nunca pueden ir en pasiva ('be + participio').",
        },
        {
          part: "part2_error_identification",
          id: "d14-gram-p2-q22",
          cefrLevel: "B2",
          grammarTopic: "Prohibition of 'that' in Non-Restrictive Relative Clauses",
          sentenceWithMarkedSegments:
            "The central bank's liquidity facility, [A]{that was established} [B]{to stabilize} regional credit unions, [C]{expired} at the end of the third [D]{fiscal quarter}.",
          correctedSegment: "which was established",
          options: [
            {
              id: "A",
              text: "that was established",
              explanationEs:
                "Incorrecto (contiene el error): las cláusulas relativas explicativas delimitadas entre comas no admiten el pronombre 'that'; debe sustituirse por 'which was established'.",
            },
            {
              id: "B",
              text: "to stabilize",
              explanationEs:
                "Correcto en la oración: infinitivo de propósito ('con el fin de estabilizar') bien construido.",
            },
            {
              id: "C",
              text: "expired",
              explanationEs:
                "Correcto en la oración: verbo principal en Past Simple cuyo sujeto es 'The central bank's liquidity facility'.",
            },
            {
              id: "D",
              text: "fiscal quarter",
              explanationEs:
                "Correcto en la oración: colocación económica estándar precedida por el ordinal 'the third'.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Siempre que observes un inciso relativo entre dos comas (', ... ,'), comprueba que comience con 'which', 'who' o 'whose', nunca con 'that'.",
        },
        {
          part: "part2_error_identification",
          id: "d14-gram-p2-q23",
          cefrLevel: "B2",
          grammarTopic: "Adverbial Modification of Comparative Adjectives",
          sentenceWithMarkedSegments:
            "Autonomous ocean gliders [A]{deployed across} the North Atlantic recorded [B]{marked} lower salinity levels [C]{than} decadal hydrographic models [D]{had predicted}.",
          correctedSegment: "markedly",
          options: [
            {
              id: "A",
              text: "deployed across",
              explanationEs:
                "Correcto en la oración: participio pasivo reducido ('[which were] deployed across') que modifica a 'gliders'.",
            },
            {
              id: "B",
              text: "marked",
              explanationEs:
                "Incorrecto (contiene el error): para intensificar o cuantificar al adjetivo comparativo 'lower' se requiere un adverbio ('markedly lower'), nunca el adjetivo 'marked'.",
            },
            {
              id: "C",
              text: "than",
              explanationEs:
                "Correcto en la oración: conjunción comparativa exigida por el comparativo 'lower'.",
            },
            {
              id: "D",
              text: "had predicted",
              explanationEs:
                "Correcto en la oración: Past Perfect que indica que las proyecciones de los modelos fueron anteriores a la medición real de los planeadores oceánicos.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Ante un adjetivo comparativo ('lower', 'higher', 'more efficient'), solo un adverbio ('markedly', 'considerably', 'significantly') puede modificarlo, jamás otro adjetivo.",
        },
        {
          part: "part2_error_identification",
          id: "d14-gram-p2-q24",
          cefrLevel: "B2",
          grammarTopic: "Mandative Subjunctive After 'make it imperative that'",
          sentenceWithMarkedSegments:
            "[A]{Updated} biosafety standards [B]{make it imperative} [C]{that} every visiting researcher [D]{completes} containment training before magnetic keycard access is activated.",
          correctedSegment: "complete",
          options: [
            {
              id: "A",
              text: "Updated",
              explanationEs:
                "Correcto en la oración: participio pasado con función adjetival que modifica apropiadamente al grupo nominal 'biosafety standards'.",
            },
            {
              id: "B",
              text: "make it imperative",
              explanationEs:
                "Correcto en la oración: construcción con objeto formal anticipatorio 'it' ('make it + adjetivo + that-clause') perfectamente idiomática en registro normativo.",
            },
            {
              id: "C",
              text: "that",
              explanationEs:
                "Correcto en la oración: conjunción subordinante obligatoria para introducir la cláusula nominal pospuesta a 'make it imperative'.",
            },
            {
              id: "D",
              text: "completes",
              explanationEs:
                "Incorrecto (contiene el error): el adjetivo de obligatoriedad 'imperative' seguido de 'that' rige subjuntivo mandativo sin desinencia '-s' de tercera persona ('complete', no 'completes').",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Adjetivos como 'imperative', 'essential', 'vital', 'mandatory' y 'crucial' seguidos de 'that' activan la misma regla de subjuntivo invariable que los verbos mandativos.",
        },
        {
          part: "part2_error_identification",
          id: "d14-gram-p2-q25",
          cefrLevel: "B2",
          grammarTopic: "Preposition 'Despite' vs. Conjunction 'Although' Before Finite Clauses",
          sentenceWithMarkedSegments:
            "[A]{Despite} fiber-optic infrastructure [B]{has expanded} across provincial towns, high subscription fees [C]{still prevent} many rural clinics [D]{from adopting} synchronous diagnostic imaging.",
          correctedSegment: "Although",
          options: [
            {
              id: "A",
              text: "Despite",
              explanationEs:
                "Incorrecto (contiene el error): 'Despite' es preposición y no puede encabezar directamente una cláusula con sujeto ('infrastructure') y verbo finito ('has expanded'); debe usarse la conjunción 'Although' (o 'Despite the fact that').",
            },
            {
              id: "B",
              text: "has expanded",
              explanationEs:
                "Correcto en la oración: Present Perfect activo concordando con el sujeto singular 'infrastructure' para señalar una expansión acumulada hasta el presente.",
            },
            {
              id: "C",
              text: "still prevent",
              explanationEs:
                "Correcto en la oración: verbo plural concordando con 'high subscription fees' y precedido por el adverbio aspectual 'still'.",
            },
            {
              id: "D",
              text: "from adopting",
              explanationEs:
                "Correcto en la oración: régimen verbal exacto de 'prevent' ('prevent + objeto + from + -ing').",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Si después del conector concesivo hay verbo conjugado ('has expanded'), 'Despite' y 'In spite of' están descartados a menos que vayan seguidos de 'the fact that'.",
        },
      ],
    },

    // =========================================================================
    // 2. LISTENING (20 min official clock = 1200s / 35 min with post-mock B2 audit)
    // =========================================================================
    listening: {
      skill: "listening",
      cefrLevel: "B2",
      title: "Official Mock #2 — Listening (Parts 1, 2 & 3: Single-Play Simulation)",
      estimatedMinutes: 35,
      timeLimitSeconds: 1200,
      focusSummaryEs:
        "Simula el protocolo oficial de una sola reproducción sin pausa ni retroceso: capta la inferencia operativa en los dos diálogos breves (Part 1), mapea obstáculo + restricción técnica + plan de acción en la coordinación de tesis/laboratorio (Part 2) y toma notas estructuradas de contraste causal en la clase magistral de Epidemiología Histórica (Part 3).",
      items: [
        {
          part: "part1_short_dialogue",
          id: "d14-list-p1a",
          title: "Auditorium Lecture-Capture Audio Issue",
          cefrLevel: "B2",
          audio: {
            trackId: "day14-listening-p1a",
            audioUrl: "/audio/day14-listening-p1a.mp3",
            contextSetup:
              "A graduate teaching assistant speaks with a campus audiovisual technician outside a lecture hall.",
            turns: [
              {
                speakerLabel: "Teaching Assistant",
                voice: "en-US-AvaMultilingualNeural",
                text: "Hi, several students in Dr. Patel's econometrics section mentioned that yesterday's recorded lecture has a loud static hum whenever she walks over to the chalkboard.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "AV Technician",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Right, Auditorium B still uses a fixed podium condenser mic, so the automatic gain boosts background ventilation noise whenever the speaker steps more than two meters away.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Teaching Assistant",
                voice: "en-US-AvaMultilingualNeural",
                text: "She derives proofs on the board for half the class, so staying behind the lectern isn't really an option.",
                pauseAfterMs: 400,
              },
              {
                speakerLabel: "AV Technician",
                voice: "en-US-AndrewMultilingualNeural",
                text: "In that case, stop by the media desk fifteen minutes before Thursday's lecture and sign out a wireless lapel transmitter synced to Room B's receiver.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d14-list-p1a-q01",
              prompt: "What does the technician suggest the teaching assistant do on Thursday?",
              options: [
                {
                  id: "A",
                  text: "Ask the facilities crew to turn off the auditorium's ventilation system during class",
                  explanationEs:
                    "Incorrecto: el técnico menciona la ventilación solo para explicar por qué la ganancia automática del micrófono fijo amplifica el ruido de fondo, nunca sugiere apagarla.",
                },
                {
                  id: "B",
                  text: "Re-record yesterday's mathematical derivations in an empty studio",
                  explanationEs:
                    "Incorrecto: la solución apunta a evitar la distorsión en la clase del jueves, sin mencionar regrabar la sesión anterior.",
                },
                {
                  id: "C",
                  text: "Move the econometrics section to a smaller classroom with digital whiteboards",
                  explanationEs:
                    "Incorrecto: no se propone ningún cambio de aula; el transmisor sugerido ya está sincronizado con el receptor del Auditorio B.",
                },
                {
                  id: "D",
                  text: "Check out a clip-on wireless microphone shortly before the next lecture begins",
                  explanationEs:
                    "Correcto: dado que la profesora necesita desplazarse al pizarrón, el técnico le indica pasar por el mostrador audiovisual quince minutos antes del jueves para retirar un transmisor inalámbrico de solapa ('wireless lapel transmitter').",
                },
              ],
              correctOptionId: "D",
            },
          ],
          keyTakeawayEs:
            "En diálogos breves sobre fallos técnicos, identifica por qué la solución obvia queda descartada ('staying behind the lectern isn't really an option') para anticipar la alternativa práctica final.",
        },
        {
          part: "part1_short_dialogue",
          id: "d14-list-p1b",
          title: "Departmental Conference Travel Reimbursement",
          cefrLevel: "B2",
          audio: {
            trackId: "day14-listening-p1b",
            audioUrl: "/audio/day14-listening-p1b.mp3",
            contextSetup:
              "A graduate student checks with the department administrator about a conference expense claim.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "Excuse me, Ms. Reynolds. I submitted my travel receipts from the regional linguistics symposium two weeks ago, and my portal status still says 'pending verification.'",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Administrator",
                voice: "en-GB-SoniaNeural",
                text: "Let me pull up your file, Marcus. Your rail ticket and lodging cleared right away, but central accounting paused the claim because the print-shop invoice for your research poster only shows a credit-card summary slip.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "Oh, I didn't realize they needed more than the payment confirmation.",
                pauseAfterMs: 400,
              },
              {
                speakerLabel: "Administrator",
                voice: "en-GB-SoniaNeural",
                text: "For grant-funded reimbursements, they require an itemized receipt listing dimensions and paper stock so they can confirm no personal printing was bundled in.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d14-list-p1b-q01",
              prompt: "Why has Marcus's reimbursement request been delayed?",
              options: [
                {
                  id: "A",
                  text: "He booked rail travel and lodging without obtaining prior departmental approval.",
                  explanationEs:
                    "Incorrecto: la administradora aclara expresamente que tanto el boleto de tren como el alojamiento fueron aprobados de inmediato ('cleared right away').",
                },
                {
                  id: "B",
                  text: "Grant funds cover transportation costs but exclude academic poster printing.",
                  explanationEs:
                    "Incorrecto: la beca sí cubre la impresión del póster académico siempre que una factura detallada confirme que no se incluyeron impresiones personales.",
                },
                {
                  id: "C",
                  text: "His poster-printing documentation lacks a detailed breakdown of the charges.",
                  explanationEs:
                    "Correcto: contabilidad central detuvo el trámite porque el comprobante de imprenta solo muestra el resumen de tarjeta, cuando las becas exigen factura desglosada ('itemized receipt').",
                },
                {
                  id: "D",
                  text: "He accidentally submitted his expense claim after the two-week deadline.",
                  explanationEs:
                    "Incorrecto: 'two weeks ago' indica cuándo entregó sus recibos, no el vencimiento de ningún plazo.",
                },
              ],
              correctOptionId: "C",
            },
          ],
          keyTakeawayEs:
            "Distingue lo que ya fue aprobado ('cleared right away') del cuello de botella administrativo real introducido tras 'but central accounting paused...'.",
        },
        {
          part: "part2_conversation",
          id: "d14-list-p2",
          title: "Coordinating Environmental Chamber Access for an Honors Thesis",
          cefrLevel: "B2",
          audio: {
            trackId: "day14-listening-p2",
            audioUrl: "/audio/day14-listening-p2.mp3",
            contextSetup:
              "A senior biochemistry student meets with the materials laboratory director regarding her honors thesis experiments.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Good morning, Dr. Vance. Do you have five minutes to discuss the environmental testing chamber schedule? My senior honors thesis draft is due to the biochemistry committee in three weeks.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Lab Director",
                voice: "en-GB-RyanNeural",
                text: "Come in, Nadia. You're testing biodegradable starch-polymer films for cold-chain vaccine packaging, right? I saw your reservation block canceled yesterday when Chamber Two went offline.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Exactly. A faulty humidity valve caused condensation spikes during Tuesday's run, which invalidated my forty-eight-hour tensile-strength trials. Now Chamber One—the only backup unit—is booked solid during daytime hours by the civil engineering concrete group.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Lab Director",
                voice: "en-GB-RyanNeural",
                text: "Yes, their replacement valve for Chamber Two is back-ordered from Germany until next month, so everyone migrated to Chamber One. How many continuous hours do your polymer samples actually require?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Each batch needs thirty-six uninterrupted hours at eighty-five percent relative humidity and four degrees Celsius, and I still need two replicate batches to verify statistical significance.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Lab Director",
                voice: "en-GB-RyanNeural",
                text: "Wait—the concrete group runs freeze-thaw cycles at minus ten degrees Monday through Thursday, but they pull their cylinders out every Friday at noon to cure at room temperature over the weekend.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "That fifty-four-hour window between Friday afternoon and Sunday evening would easily fit a thirty-six-hour batch! The only catch is undergraduate keycards deactivate in the research wing after seven p.m. on weekends, and I have to log manual tension readings every twelve hours.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Lab Director",
                voice: "en-GB-RyanNeural",
                text: "Actually, you won't need after-hours building access if we mount the digital load-cell logger inside Chamber One. It records tensile strain automatically every ten minutes and uploads the curve straight to the lab server.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "I didn't know Chamber One supported automated strain logging! Is there any residue risk from the concrete samples before I load my biodegradable films?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Lab Director",
                voice: "en-GB-RyanNeural",
                text: "Alkaline dust from cured concrete can skew polymer degradation rates, so run a two-hour deionized steam purge Friday at noon right after they clear out, and calibrate the load cell with my postdoctoral fellow, Dr. Sato, before five o'clock.",
                pauseAfterMs: 550,
              },
            ],
          },
          questions: [
            {
              id: "d14-list-p2-q01",
              prompt: "Why does Nadia need urgent access to Chamber One?",
              options: [
                {
                  id: "A",
                  text: "Her thesis committee recently asked her to switch from starch polymers to concrete composites.",
                  explanationEs:
                    "Incorrecto: el grupo de hormigón pertenece a ingeniería civil; Nadia continúa investigando películas biodegradables de polímero de almidón.",
                },
                {
                  id: "B",
                  text: "A valve malfunction ruined her previous humidity trials and the faulty chamber will not be repaired before her thesis deadline.",
                  explanationEs:
                    "Correcto: una válvula defectuosa en la Cámara Dos invalidó su corrida del martes, la pieza tardará hasta el mes próximo y su borrador de tesis vence en tres semanas.",
                },
                {
                  id: "C",
                  text: "She forgot to reserve laboratory time earlier in the semester.",
                  explanationEs:
                    "Incorrecto: sí tenía un bloque reservado ('your reservation block canceled yesterday'), el cual se canceló por la avería de la Cámara Dos.",
                },
                {
                  id: "D",
                  text: "Chamber Two cannot reach the subzero temperatures required for her vaccine films.",
                  explanationEs:
                    "Incorrecto: sus películas se prueban a +4 °C, mientras que los ciclos bajo cero (-10 °C) corresponden a los cilindros de hormigón.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d14-list-p2-q02",
              prompt: "Why is Chamber One available for Nadia's experiments on weekends?",
              options: [
                {
                  id: "A",
                  text: "University safety rules prohibit the civil engineering department from running minus-ten-degree tests on Fridays.",
                  explanationEs:
                    "Incorrecto: la razón no es una prohibición de seguridad, sino el protocolo experimental del propio grupo de ingeniería civil.",
                },
                {
                  id: "B",
                  text: "Dr. Sato reserved the weekend slots specifically for biochemistry undergraduates.",
                  explanationEs:
                    "Incorrecto: el Dr. Sato solo ayudará a calibrar la celda de carga el viernes antes de las cinco.",
                },
                {
                  id: "C",
                  text: "The replacement valve from Germany is scheduled to arrive this Friday afternoon.",
                  explanationEs:
                    "Incorrecto: la válvula de repuesto está en espera de envío ('back-ordered') hasta el mes siguiente.",
                },
                {
                  id: "D",
                  text: "The civil engineering team removes its concrete cylinders every Friday at noon for ambient-temperature curing.",
                  explanationEs:
                    "Correcto: el Dr. Vance explica que el equipo de hormigón retira sus muestras cada viernes al mediodía para curarlas a temperatura ambiente durante el fin de semana.",
                },
              ],
              correctOptionId: "D",
            },
            {
              id: "d14-list-p2-q03",
              prompt:
                "How does Dr. Vance solve Nadia's concern about restricted weekend keycard access?",
              options: [
                {
                  id: "A",
                  text: "By issuing her a temporary graduate-level security badge valid after seven p.m.",
                  explanationEs:
                    "Incorrecto: aclara explícitamente que no necesitará ingreso nocturno al edificio ('you won't need after-hours building access').",
                },
                {
                  id: "B",
                  text: "By reducing each humidity test from thirty-six hours to twelve daytime hours",
                  explanationEs:
                    "Incorrecto: el ensayo sigue durando treinta y seis horas continuas para preservar su validez estadística.",
                },
                {
                  id: "C",
                  text: "By installing an automated digital sensor inside the chamber that uploads strain data remotely",
                  explanationEs:
                    "Correcto: propone montar el registrador digital de celda de carga ('digital load-cell logger'), que mide la deformación cada diez minutos y sube los datos al servidor sin intervención manual.",
                },
                {
                  id: "D",
                  text: "By asking Dr. Sato to come into the lab every twelve hours to record manual measurements",
                  explanationEs:
                    "Incorrecto: Dr. Sato solo participará en la calibración inicial del viernes por la tarde.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d14-list-p2-q04",
              prompt:
                "Why must Nadia run a deionized steam purge before placing her samples in Chamber One?",
              options: [
                {
                  id: "A",
                  text: "To remove alkaline concrete particles that could distort how fast her polymer films degrade",
                  explanationEs:
                    "Correcto: en el turno final el director advierte que el polvo alcalino del hormigón curado puede alterar las tasas de degradación del polímero ('skew polymer degradation rates').",
                },
                {
                  id: "B",
                  text: "To defrost ice buildup blocking the chamber's humidity valve",
                  explanationEs:
                    "Incorrecto: el problema de la válvula de humedad ocurrió en la Cámara Dos, no por acumulación de hielo sino por fallo mecánico.",
                },
                {
                  id: "C",
                  text: "To sterilize live vaccine vials stored inside the packaging",
                  explanationEs:
                    "Incorrecto: Nadia evalúa únicamente la resistencia a la tracción de las películas de empaque, no viales con vacunas vivas.",
                },
                {
                  id: "D",
                  text: "To test whether the lab server can detect sudden spikes in temperature",
                  explanationEs:
                    "Incorrecto: la purga de vapor de dos horas tiene finalidad química de descontaminación previa a la calibración del sensor.",
                },
              ],
              correctOptionId: "A",
            },
          ],
          keyTakeawayEs:
            "En conversaciones de laboratorio universitario, sigue la cadena de restricciones encadenadas: avería -> ventana horaria alternativa -> bloqueo de tarjeta -> automatización -> protocolo de descontaminación.",
        },
        {
          part: "part3_lecture",
          id: "d14-list-p3",
          title:
            "Historical Epidemiology: John Snow, Miasma Orthodoxy & the 1854 London Cholera Natural Experiment",
          cefrLevel: "B2",
          audio: {
            trackId: "day14-listening-p3",
            audioUrl: "/audio/day14-listening-p3.mp3",
            contextSetup:
              "A university professor delivers a lecture in an epidemiology and public health history seminar.",
            turns: [
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Good afternoon. In today's public health history lecture, we're examining why nineteenth-century urban sanitation reforms lagged behind empirical evidence—focusing on Dr. John Snow's landmark investigation of the eighteen fifty-four Soho cholera outbreak in London.",
                pauseAfterMs: 700,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "At the time, Britain's medical establishment overwhelmingly endorsed miasma theory, the belief that epidemic diseases were transmitted by inhaling foul vapors rising from decaying organic matter. Under that framework, municipal engineers prioritized venting sewer gases into the Thames rather than protecting neighborhood drinking water.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Snow suspected an entirely different mechanism: ingesting microscopic pathogens through contaminated water. During the Soho outbreak, he plotted every fatal case onto a street-level map and noticed deaths clustering tightly around the public hand pump on Broad Street. Yet two local anomalies proved even more decisive than the map itself.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Workers at a nearby brewery directly adjacent to the pump suffered almost no fatalities because they drank fermented malt liquor drawn from a private deep well. Conversely, an elderly widow living miles away in Hampstead died of cholera after having jugs of Broad Street water delivered daily because she preferred its taste.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "To silence skeptics on a metropolitan scale, Snow conducted what epidemiologists now call a natural experiment across South London, where two rival water companies served intermingled households along the very same streets—thereby holding climate, elevation, and air quality constant. Households supplied with sewage-tainted river water experienced mortality rates nearly nine times higher than neighbors receiving water filtered upstream.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Remarkably, health commissioners still dismissed Snow's waterborne hypothesis for over a decade, fearing the fiscal cost of rebuilding subterranean infrastructure without laboratory proof of a specific bacterium. What ultimately transformed public health policy was the convergence of statistical spatial mapping with Robert Koch's later isolation of Vibrio cholerae.",
                pauseAfterMs: 650,
              },
            ],
          },
          questions: [
            {
              id: "d14-list-p3-q01",
              prompt: "What is the central theme of the professor's lecture?",
              options: [
                {
                  id: "A",
                  text: "How John Snow's spatial and statistical evidence challenged miasma theory, yet required later bacteriological proof to overhaul sanitation policy",
                  explanationEs:
                    "Correcto: abarca la tesis íntegra de la conferencia: el contraste con la teoría miasmática, las pruebas espaciales y el experimento natural de Snow, y por qué la reforma institucional tardó hasta converger con la bacteriología de Koch.",
                },
                {
                  id: "B",
                  text: "Why nineteenth-century London breweries developed industrial water-filtration patents before municipal governments did",
                  explanationEs:
                    "Incorrecto: la cervecería se cita únicamente como anomalía epidemiológica local porque tenía un pozo profundo privado, no por patentar tecnología de filtración.",
                },
                {
                  id: "C",
                  text: "How Robert Koch collaborated directly with John Snow in Soho to isolate Vibrio cholerae under a microscope",
                  explanationEs:
                    "Incorrecto: distorsión cronológica; la profesora señala que los comisionados rechazaron la hipótesis durante más de una década por carecer de prueba de laboratorio y que el aislamiento de Koch ocurrió posteriormente ('later isolation').",
                },
                {
                  id: "D",
                  text: "Why airborne sewer vapors caused higher mortality in Hampstead than in South London",
                  explanationEs:
                    "Incorrecto: el caso de Hampstead refutó precisamente la transmisión aérea, demostrando que una sola residente enfermó por beber agua llevada desde Broad Street.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d14-list-p3-q02",
              prompt:
                "According to the lecture, what mistaken municipal policy resulted from miasma theory?",
              options: [
                {
                  id: "A",
                  text: "Closing private deep wells across commercial districts during summer months",
                  explanationEs:
                    "Incorrecto: los pozos privados no fueron clausurados; de hecho, el pozo privado de la cervecería salvó a sus trabajadores.",
                },
                {
                  id: "B",
                  text: "Banning cart deliveries of spring water between suburban neighborhoods",
                  explanationEs:
                    "Incorrecto: la viuda de Hampstead recibía jarras diarias desde Broad Street sin prohibición alguna.",
                },
                {
                  id: "C",
                  text: "Focusing on flushing sewer fumes toward the river instead of safeguarding drinking-water supplies",
                  explanationEs:
                    "Correcto: bajo la creencia de que los vapores fétidos transmitían la epidemia, los ingenieros municipales priorizaron evacuar gases cloacales hacia el Támesis en lugar de proteger el agua potable.",
                },
                {
                  id: "D",
                  text: "Requiring competing water companies to merge their underground pipe networks",
                  explanationEs:
                    "Incorrecto: las dos compañías rivales operaban tuberías separadas pero entrelazadas en las mismas calles, circunstancia fortuita que permitió el estudio de Snow.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d14-list-p3-q03",
              prompt:
                "Why does the professor state that the brewery workers and the Hampstead widow were 'even more decisive than the map itself'?",
              options: [
                {
                  id: "A",
                  text: "They proved that fermented beverages cured cholera symptoms after infection.",
                  explanationEs:
                    "Incorrecto: los trabajadores no se curaron tras infectarse, sino que evitaron ingerir el agua contaminada de la bomba pública.",
                },
                {
                  id: "B",
                  text: "They showed that the Broad Street map contained inaccurate street measurements.",
                  explanationEs:
                    "Incorrecto: ambos casos reforzaron y perfeccionaron la conclusión del mapa, jamás la invalidaron.",
                },
                {
                  id: "C",
                  text: "They demonstrated that elderly suburban residents had weaker immunity than industrial laborers.",
                  explanationEs:
                    "Incorrecto: la variable determinante destacada por Snow fue el origen del agua ingerida, no la edad ni el estado inmunológico.",
                },
                {
                  id: "D",
                  text: "They separated water consumption from geographic proximity, ruling out localized foul air as the cause.",
                  explanationEs:
                    "Correcto: quienes respiraban el mismo aire junto a la bomba pero no bebían su agua sobrevivieron (cervecería), mientras quien vivía lejos del aire de Soho pero sí bebía esa agua murió (viuda en Hampstead), refutando el miasma local.",
                },
              ],
              correctOptionId: "D",
            },
            {
              id: "d14-list-p3-q04",
              prompt:
                "What made Snow's South London comparison a particularly rigorous 'natural experiment'?",
              options: [
                {
                  id: "A",
                  text: "Snow randomly assigned households to boil their water before drinking it.",
                  explanationEs:
                    "Incorrecto: en un experimento natural el investigador no asigna tratamientos; aprovecha una división preexistente de proveedores.",
                },
                {
                  id: "B",
                  text: "Neighboring homes on identical streets received water from different sources, eliminating environmental confounders like air and elevation.",
                  explanationEs:
                    "Correcto: al abastecer dos empresas rivales a hogares entremezclados en las mismas calles, quedaron constantes el clima, la altitud y la calidad del aire, aislando la pureza del agua como única diferencia.",
                },
                {
                  id: "C",
                  text: "Both water companies filtered their supply upstream of London's sewer outlets.",
                  explanationEs:
                    "Incorrecto: solo una empresa filtraba aguas arriba, mientras la otra extraía agua contaminada con desechos cloacales, generando una mortalidad casi nueve veces mayor.",
                },
                {
                  id: "D",
                  text: "Health commissioners funded laboratory cultures of water samples from every household.",
                  explanationEs:
                    "Incorrecto: aún no existían pruebas bacteriológicas de laboratorio para el cólera y los comisionados se mostraron escépticos.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d14-list-p3-q05",
              prompt:
                "What can be inferred from the professor's remarks about nineteenth-century health commissioners?",
              options: [
                {
                  id: "A",
                  text: "Economic reluctance to finance costly pipe reconstruction reinforced their resistance to unfamiliar scientific claims.",
                  explanationEs:
                    "Correcto: la profesora señala que descartaron la hipótesis de Snow durante más de diez años temiendo el costo fiscal ('fearing the fiscal cost') de reconstruir infraestructura subterránea sin contar aún con una bacteria aislada en laboratorio.",
                },
                {
                  id: "B",
                  text: "They were unaware of Snow's South London mortality statistics until Robert Koch republished them.",
                  explanationEs:
                    "Incorrecto: conocían su hipótesis ('dismissed Snow's waterborne hypothesis'), pero la rechazaron pese a la evidencia estadística.",
                },
                {
                  id: "C",
                  text: "They immediately replaced the Broad Street infrastructure with upstream filtration plants in eighteen fifty-four.",
                  explanationEs:
                    "Incorrecto: contradice frontalmente la demora de más de una década mencionada al cierre.",
                },
                {
                  id: "D",
                  text: "They rejected laboratory microbiology even after Vibrio cholerae was isolated.",
                  explanationEs:
                    "Incorrecto: precisamente la convergencia con el aislamiento bacteriano de Koch fue lo que finalmente transformó la política sanitaria.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d14-list-p3-q06",
              prompt: "How does the professor organize the main body of the lecture?",
              options: [
                {
                  id: "A",
                  text: "By comparing cholera mortality across four European capitals in chronological order",
                  explanationEs:
                    "Incorrecto: toda la exposición se concentra en Londres (Soho, Hampstead y el sur de Londres).",
                },
                {
                  id: "B",
                  text: "By detailing the chemical engineering steps used to purify Thames river water",
                  explanationEs:
                    "Incorrecto: no detalla procesos químicos de potabilización, sino inferencia epidemiológica e historia institucional.",
                },
                {
                  id: "C",
                  text: "By contrasting the dominant paradigm with Snow's hypothesis, escalating from neighborhood anomalies to citywide statistical proof, and explaining delayed policy adoption",
                  explanationEs:
                    "Correcto: describe con exactitud la progresión retórica: ortodoxia miasmática -> hipótesis hídrica y mapa de Soho -> dos anomalías decisivas -> experimento natural en el sur de Londres -> resistencia fiscal y cierre con Koch.",
                },
                {
                  id: "D",
                  text: "By arguing that statistical mapping is obsolete in modern laboratory epidemiology",
                  explanationEs:
                    "Incorrecto: concluye destacando la convergencia complementaria entre mapeo estadístico espacial y microbiología de laboratorio.",
                },
              ],
              correctOptionId: "C",
            },
          ],
          keyTakeawayEs:
            "En clases magistrales históricas (Part 3), distingue siempre tres planos: (1) el paradigma dominante equivocado, (2) el diseño empírico que controla variables confusoras ('holding air quality constant') y (3) la barrera económica o institucional que retrasa el cambio.",
        },
      ],
    },

    // =========================================================================
    // 3. READING (20 min official clock = 1200s / 35 min with post-mock B2 audit)
    // =========================================================================
    reading: {
      skill: "reading",
      cefrLevel: "B2",
      title: "Official Mock #2 — Reading (Part 1 Intermediate & Part 2 Academic)",
      estimatedMinutes: 35,
      timeLimitSeconds: 1200,
      focusSummaryEs:
        "Administra tus 20 minutos oficiales con disciplina quirúrgica: invierte máximo 7 minutos en el pasaje intermedio de logística urbana (~255 palabras, 4 preguntas) y reserva 13 minutos para el pasaje académico de paleoclimatología (~460 palabras, 6 preguntas), verificando anclajes léxicos hacia atrás y hacia adelante antes de marcar la inserción en `[A]..[D]`.",
      passages: [
        {
          part: "part1_intermediate",
          id: "d14-read-p1",
          title: "Off-Peak Urban Freight Consolidation and Curbside Micro-Hubs",
          cefrLevel: "B2",
          topicDomain: "Urban Economics & Transportation Policy",
          paragraphs: [
            "Rapid growth in direct-to-consumer e-commerce has intensified curbside congestion across dense metropolitan districts, where commercial delivery vans routinely double-park along arterial transit lanes during morning rush hours. Historically, municipal transportation departments attempted to deter illegal stopping by raising parking fines, yet parcel carriers largely absorbed those financial penalties as a predictable operating expense rather than altering daytime dispatch schedules. Because uncoordinated freight traffic also delays public transit buses and degrades local air quality, urban planners have increasingly shifted from punitive ticketing toward structural freight consolidation.",
            "Under this emerging logistics framework, municipal authorities repurpose underutilized public parking garages into neighborhood micro-hubs that receive consolidated bulk shipments from suburban warehouses overnight, when regional highway capacity remains abundant. During daytime business hours, low-emission cargo tricycles and compact electric shuttles complete final-mile deliveries within a one-kilometer radius, substantially reducing diesel engine idling, ambient noise levels, and intersection bottlenecks. Simultaneously, sensor-equipped digital curbside permits price commercial loading-zone access according to real-time traffic volume, rewarding fleet operators that schedule drop-offs outside peak commuter windows.",
            "Despite encouraging pilot outcomes across several European and North American cities, scaling off-peak consolidation requires balancing competing neighborhood interests. Residential associations frequently oppose nocturnal warehouse deliveries because of hydraulic liftgate noise, whereas small independent retailers rarely employ early-morning staff to receive inventory before dawn. Evaluations of metropolitan pilot programs indicate that cities sustaining long-term adoption overcome this impasse by subsidizing sound-insulated unloading equipment and installing secure, temperature-controlled smart lockers that decouple overnight freight arrival from daytime store staffing.",
          ],
          questions: [
            {
              id: "d14-read-p1-q01",
              questionType: "main_idea",
              prompt: "What is the main purpose of the passage?",
              options: [
                {
                  id: "A",
                  text: "To explain why higher municipal parking fines have successfully eliminated double-parking by parcel carriers",
                  explanationEs:
                    "Incorrecto: contradice directamente el párrafo 1, según el cual las empresas absorbieron las multas como un gasto operativo previsible sin cambiar sus horarios.",
                },
                {
                  id: "B",
                  text: "To examine how urban micro-hubs and off-peak freight policies reduce congestion, along with practical measures that resolve implementation barriers",
                  explanationEs:
                    "Correcto: integra con fidelidad el fracaso de las multas aisladas (P1), el funcionamiento de micro-hubs y permisos dinámicos (P2) y las soluciones técnicas frente al ruido nocturno y la falta de personal matutino (P3).",
                },
                {
                  id: "C",
                  text: "To argue that suburban warehouses should be relocated inside downtown residential parking garages",
                  explanationEs:
                    "Incorrecto: los almacenes suburbanos permanecen fuera y envían carga consolidada de noche a pequeños centros barriales en estacionamientos subutilizados.",
                },
                {
                  id: "D",
                  text: "To compare European e-commerce consumer habits with North American public transit ridership",
                  explanationEs:
                    "Incorrecto: Europa y Norteamérica se mencionan brevemente como escenarios de programas piloto logísticos, no para comparar hábitos de consumo.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d14-read-p1-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'impasse' in paragraph 3 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "deadlock",
                  explanationEs:
                    "Correcto: tras describir el choque entre vecinos que rechazan el ruido nocturno y comercios sin personal antes del amanecer, 'overcome this impasse' significa superar este estancamiento o punto muerto ('deadlock').",
                },
                {
                  id: "B",
                  text: "subsidy",
                  explanationEs:
                    "Incorrecto: el subsidio ('subsidizing sound-insulated unloading equipment') es una de las herramientas empleadas para resolver el 'impasse', no el bloqueo mismo.",
                },
                {
                  id: "C",
                  text: "corridor",
                  explanationEs:
                    "Incorrecto: trampa fonética por similitud visual con 'pass'; 'impasse' designa un conflicto o bloqueo sin salida aparente, no un corredor vial.",
                },
                {
                  id: "D",
                  text: "surplus",
                  explanationEs:
                    "Incorrecto: no existe referencia alguna a excedente económico o de inventario en esa oración.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d14-read-p1-q03",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 1 about commercial parcel carriers operating in dense cities?",
              options: [
                {
                  id: "A",
                  text: "They lacked legal permission to use regional highways between midnight and dawn.",
                  explanationEs:
                    "Incorrecto: el párrafo 2 indica que las autopistas regionales tienen abundante capacidad disponible durante la noche.",
                },
                {
                  id: "B",
                  text: "They preferred electric cargo tricycles long before municipalities created micro-hubs.",
                  explanationEs:
                    "Incorrecto: los triciclos eléctricos operan dentro del radio de un kilómetro habilitado por el nuevo modelo municipal de micro-hubs.",
                },
                {
                  id: "C",
                  text: "They voluntarily funded dedicated bus lanes to offset curbside traffic delays.",
                  explanationEs:
                    "Incorrecto: el texto afirma que su estacionamiento en doble fila retrasa a los autobuses públicos, sin mencionar aportes financieros a carriles exclusivos.",
                },
                {
                  id: "D",
                  text: "Paying occasional parking citations cost them less than reorganizing their daytime delivery operations.",
                  explanationEs:
                    "Correcto: si absorbían las multas más altas como un gasto operativo previsible en lugar de modificar sus despachos diurnos, se infiere que asumir la sanción les resultaba económicamente menos costoso o complejo que reestructurar rutas.",
                },
              ],
              correctOptionId: "D",
            },
            {
              id: "d14-read-p1-q04",
              questionType: "synthesis",
              prompt:
                "According to paragraph 3, what specific role do temperature-controlled smart lockers play in off-peak freight programs?",
              options: [
                {
                  id: "A",
                  text: "They measure real-time curbside traffic volume to calculate dynamic loading-zone fees.",
                  explanationEs:
                    "Incorrecto: esa función corresponde a los permisos digitales con sensores descritos en el párrafo 2, no a los casilleros inteligentes.",
                },
                {
                  id: "B",
                  text: "They muffle the mechanical noise produced by hydraulic truck liftgates on residential streets.",
                  explanationEs:
                    "Incorrecto: el ruido de las plataformas hidráulicas se mitiga subsidiando equipos de descarga insonorizados ('sound-insulated unloading equipment').",
                },
                {
                  id: "C",
                  text: "They allow carriers to deposit goods overnight without requiring small shopkeepers to be present before opening hours.",
                  explanationEs:
                    "Correcto: el cierre explica que estos casilleros seguros desvinculan ('decouple') la llegada nocturna de mercancía de la presencia diurna de personal en las tiendas pequeñas.",
                },
                {
                  id: "D",
                  text: "They recharge compact electric shuttles inside repurposed municipal garages.",
                  explanationEs:
                    "Incorrecto: el texto jamás atribuye funciones de recarga vehicular a los casilleros inteligentes.",
                },
              ],
              correctOptionId: "C",
            },
          ],
        },
        {
          part: "part2_academic",
          id: "d14-read-p2",
          title: "Speleothem Geochemistry and Sub-Decadal Monsoon Reconstruction",
          cefrLevel: "B2",
          topicDomain: "Paleoclimatology & Isotope Geochemistry",
          paragraphs: [
            "Reconstructing pre-industrial hydroclimate variability requires geological archives capable of preserving continuous chemical records across tens of thousands of years. Throughout the late twentieth century, paleoclimatologists relied predominantly on polar ice cores extracted from Greenland and Antarctica alongside deep-marine sediment layers to chart planetary glacial cycles. Although indispensable for tracking global greenhouse gas concentrations and high-latitude temperatures, polar and abyssal repositories poorly resolve localized rainfall shifts across tropical and subtropical continents, where dense agrarian societies have long depended on seasonal monsoon circulation. Over the past two decades, isotope geochemists have bridged this spatial blind spot by analyzing speleothems—secondary calcium carbonate cave formations, most notably stalagmites, that accrete layer by layer as mineral-laden rainwater percolates through fractured limestone bedrock into subterranean caverns.",
            "Stalagmites offer two analytical strengths that rival even annual tree rings in chronological and climatic fidelity. First, trace quantities of water-soluble uranium incorporated into precipitating calcite crystals decay at a strictly invariant physical rate into insoluble thorium, enabling multicollector mass spectrometers to date individual growth laminae back nearly six hundred thousand years with margins of error below one percent. Second, the ratio of heavy oxygen-eighteen isotopes to lighter oxygen-sixteen isotopes locked within each microscopic carbonate band archives the isotopic signature of ancient surface precipitation. During eras of vigorous monsoon convection, water molecules containing heavier oxygen-eighteen condense and fall out preferentially earlier along inland storm tracks, leaving interior rainwater—and the stalagmites nourished by it—measurably depleted in heavy oxygen.",
            "Translating cave oxygen profiles directly into ancient rainfall totals, however, demands rigorous screening for localized subterranean microclimates. [A] As meteoric water seeps slowly through sun-baked soil fissures above a cavern, surface evaporation in semi-arid landscapes can enrich heavy isotopes before droplets ever reach a stalagmite apex. [B] Furthermore, brisk seasonal air exchange inside shallow caves strips dissolved carbon dioxide from ceiling drip water, inducing kinetic isotope fractionation that closely mimics the geochemical signature of a severe continental megadrought. [C] To avoid mistaking internal cave aerodynamics for atmospheric circulation shifts, contemporary researchers restrict core extraction to deep, poorly ventilated chambers maintaining near-saturated humidity year-round and cross-check oxygen curves against magnesium-to-calcium trace-element ratios within the exact same crystal layer. [D]",
            "Once purged of microclimatic artifacts, multi-cave speleothem networks have substantially revised historical models of agrarian resilience and political vulnerability. Sub-decadal stalagmite timelines from northern China, Mesoamerica, and the eastern Mediterranean Levant reveal that prolonged monsoon failures—triggered by subtle orbital shifts in solar insolation and tropical sea-surface temperatures—repeatedly coincided with irrigation canal collapse, grain price spikes, and dynastic fragmentation. Equally consequential for modern climate science, these subterranean records demonstrate that regional monsoon systems rarely weaken smoothly under thermal forcing; instead, they can cross abrupt hydrological tipping points within just a few decades, supplying indispensable empirical benchmarks for calibrating twenty-first-century regional precipitation models.",
          ],
          questions: [
            {
              id: "d14-read-p2-q01",
              questionType: "detail",
              prompt:
                "According to paragraph 1, what limitation of polar ice cores and deep-marine sediments motivated paleoclimatologists to study stalagmites?",
              options: [
                {
                  id: "A",
                  text: "Ice cores and marine sediments cannot preserve chemical records older than a few centuries.",
                  explanationEs:
                    "Incorrecto: el párrafo 1 reconoce que sí registran ciclos glaciales planetarios a largo plazo, pero carecen de resolución espacial sobre lluvias continentales bajas.",
                },
                {
                  id: "B",
                  text: "They fail to capture localized precipitation patterns across low-latitude continental monsoon regions.",
                  explanationEs:
                    "Correcto: el texto explica que los archivos polares y abisales resuelven deficientemente los cambios hidrológicos locales en continentes tropicales y subtropicales dependientes del monzón.",
                },
                {
                  id: "C",
                  text: "They cannot measure historical concentrations of atmospheric greenhouse gases.",
                  explanationEs:
                    "Incorrecto: el párrafo 1 afirma explícitamente que son indispensables ('indispensable') para rastrear gases de efecto invernadero globales.",
                },
                {
                  id: "D",
                  text: "Limestone caves are easier to drill mechanically than Antarctic ice sheets.",
                  explanationEs:
                    "Incorrecto: la ventaja descrita es geográfica e hidrológica, nunca de facilidad mecánica de perforación.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d14-read-p2-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'invariant' in paragraph 2 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "unchanging and constant",
                  explanationEs:
                    "Correcto: la desintegración radiactiva del uranio en torio ocurre a una tasa física estrictamente constante ('strictly invariant physical rate'), lo que permite fechar láminas con error menor al 1 %.",
                },
                {
                  id: "B",
                  text: "microscopically invisible",
                  explanationEs:
                    "Incorrecto: aunque las cantidades de uranio son traza, 'invariant' califica a 'physical rate' (velocidad o tasa física), no al tamaño visual.",
                },
                {
                  id: "C",
                  text: "seasonally reversible",
                  explanationEs:
                    "Incorrecto: es el opuesto lógico; si la tasa de decaimiento fuera reversible según la estación, el reloj radiométrico no serviría para fechar 600,000 años.",
                },
                {
                  id: "D",
                  text: "chemically hazardous",
                  explanationEs:
                    "Incorrecto: el pasaje analiza precisión geocronológica mediante espectrometría de masas, sin aludir a peligrosidad química.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d14-read-p2-q03",
              questionType: "rhetorical_purpose",
              prompt:
                "Why does the author mention 'magnesium-to-calcium trace-element ratios' at the end of paragraph 3?",
              options: [
                {
                  id: "A",
                  text: "To explain how uranium dissolves in rainwater before entering limestone bedrock",
                  explanationEs:
                    "Incorrecto: la química del uranio y el torio fue abordada en el párrafo 2 para fechado radiométrico, no para validar ventilación de cuevas.",
                },
                {
                  id: "B",
                  text: "To argue that oxygen-isotope analysis has been completely abandoned by modern geochemists",
                  explanationEs:
                    "Incorrecto: los investigadores no abandonan las curvas de oxígeno; las validan cruzándolas con elementos traza dentro de la misma capa cristalina.",
                },
                {
                  id: "C",
                  text: "To show why stalagmites in semi-arid caves grow faster than those in humid tropical caves",
                  explanationEs:
                    "Incorrecto: no se comparan velocidades de crecimiento entre cuevas semiáridas y húmedas mediante magnesio/calcio.",
                },
                {
                  id: "D",
                  text: "To illustrate an independent geochemical check that helps researchers confirm genuine climate signals over local cave distortions",
                  explanationEs:
                    "Correcto: se menciona junto con el muestreo en cámaras profundas como verificación cruzada ('cross-check oxygen curves against magnesium-to-calcium trace-element ratios') para descartar artefactos aerodinámicos internos.",
                },
              ],
              correctOptionId: "D",
            },
            {
              id: "d14-read-p2-q04",
              questionType: "inference",
              prompt:
                "Based on paragraph 2, what chemical characteristic would a stalagmite layer formed during an unusually strong monsoon period exhibit?",
              options: [
                {
                  id: "A",
                  text: "An abnormally high concentration of insoluble thorium absorbed directly from rainwater",
                  explanationEs:
                    "Incorrecto: el agua incorpora uranio soluble, mientras que el torio es insoluble y se acumula gradualmente por desintegración radiactiva a lo largo del tiempo.",
                },
                {
                  id: "B",
                  text: "Identical oxygen-isotope ratios to those recorded during continental megadroughts",
                  explanationEs:
                    "Incorrecto: las megasequías (y los efectos evaporativos o cinéticos que las imitan en P3) enriquecen isótopos pesados, el patrón opuesto a un monzón intenso.",
                },
                {
                  id: "C",
                  text: "Complete absence of calcium carbonate laminae due to excessive cave flooding",
                  explanationEs:
                    "Incorrecto: el texto indica que la estalagmita sí se nutre de esa lluvia y registra la proporción isotópica dentro de cada banda de carbonato.",
                },
                {
                  id: "D",
                  text: "A lower proportion of oxygen-eighteen relative to oxygen-sixteen",
                  explanationEs:
                    "Correcto: el cierre del párrafo 2 explica que durante una convección monzónica vigorosa el oxígeno-18 condensa y precipita antes en el trayecto, dejando al agua interior y a la estalagmita empobrecidas ('measurably depleted') en oxígeno-18.",
                },
              ],
              correctOptionId: "D",
            },
            {
              id: "d14-read-p2-q05",
              questionType: "sentence_insertion",
              prompt:
                "Look at the four squares [A], [B], [C], and [D] in paragraph 3. Where would the following sentence best fit?",
              sentenceToInsert:
                "Without accounting for this rapid degassing effect, analysts risk attributing localized cave-air fluctuations to a collapse in regional monsoon intensity.",
              options: [
                {
                  id: "A",
                  text: "[A]",
                  explanationEs:
                    "Incorrecto: antes de `[A]` aún no se ha introducido ningún efecto de desgasificación rápida ('this rapid degassing effect').",
                },
                {
                  id: "B",
                  text: "[B]",
                  explanationEs:
                    "Incorrecto: la oración previa a `[B]` describe evaporación superficial en fisuras del suelo, no pérdida de gas disuelto ni circulación de aire dentro de la cueva.",
                },
                {
                  id: "C",
                  text: "[C]",
                  explanationEs:
                    "Correcto: 'this rapid degassing effect' remite directamente a 'strips dissolved carbon dioxide from ceiling drip water' antes de `[C]`, y 'attributing localized cave-air fluctuations to a collapse...' enlaza de forma impecable con 'To avoid mistaking internal cave aerodynamics...' después de `[C]`.",
                },
                {
                  id: "D",
                  text: "[D]",
                  explanationEs:
                    "Incorrecto: antes de `[D]` los investigadores ya resolvieron el problema seleccionando cámaras profundas sin ventilación y verificando magnesio/calcio, por lo que advertir del riesgo allí rompería el cierre metodológico.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d14-read-p2-q06",
              questionType: "synthesis",
              prompt:
                "Which statement best captures the broader significance of calibrated speleothem records discussed in paragraph 4?",
              options: [
                {
                  id: "A",
                  text: "They link historical monsoon megadroughts to societal disruptions and show that regional rainfall regimes can shift abruptly, informing modern climate projections.",
                  explanationEs:
                    "Correcto: sintetiza los dos aportes centrales del párrafo 4: la correlación histórica con colapsos agrícolas/dinásticos y la demostración de umbrales hidrológicos abruptos útiles para calibrar modelos climáticos del siglo XXI.",
                },
                {
                  id: "B",
                  text: "They prove that ancient irrigation failures in China and Mesoamerica were caused solely by deforestation rather than orbital climate forcing.",
                  explanationEs:
                    "Incorrecto: el párrafo 4 atribuye explícitamente las fallas del monzón a variaciones orbitales de insolación solar y temperaturas oceánicas tropicales.",
                },
                {
                  id: "C",
                  text: "They reassure contemporary planners that monsoon rainfall weakens only gradually over several millennia.",
                  explanationEs:
                    "Incorrecto: afirma exactamente lo contrario: los sistemas monzónicos rara vez se debilitan suavemente y pueden cruzar puntos de inflexión abruptos en pocas décadas.",
                },
                {
                  id: "D",
                  text: "They demonstrate that twenty-first-century computer models no longer require empirical paleoclimatic benchmarks.",
                  explanationEs:
                    "Incorrecto: cierra subrayando que estos archivos aportan puntos de referencia empíricos indispensables ('indispensable empirical benchmarks') para calibrar los modelos actuales.",
                },
              ],
              correctOptionId: "A",
            },
          ],
        },
      ],
    },

    // =========================================================================
    // 4. WRITING (25 min official clock = 1500s / 30 min with post-mock B2 audit)
    // =========================================================================
    writing: {
      skill: "writing",
      cefrLevel: "B2",
      title: "Official Mock #2 — Writing (Part 1 Formal Note & Part 2 Persuasive Essay)",
      estimatedMinutes: 30,
      timeLimitSeconds: 1500,
      focusSummaryEs:
        "Ejecuta los 25 minutos oficiales sin corrector ortográfico ni autocompletado (5 min para la nota administrativa de 50–75 palabras + 20 min para el ensayo persuasivo de 175–225 palabras). Reserva obligatoriamente los últimos 2 minutos de cada tarea para auditar concordancia de tercera persona, ortografía académica y conteo dentro de rango.",
      tasks: [
        {
          part: "part1_note",
          id: "d14-writ-p1",
          cefrLevel: "B2",
          title: "Grant Budget Reallocation for Archival Conservation",
          prompt:
            "You are assisting with a university library digitization project funded by a departmental grant. During inspection, a nineteenth-century municipal tax ledger was found to be too fragile for high-resolution scanning without conservation repair first. Write a formal note to Ms. Holloway, the Grant Coordinator, in which you: (1) describe the physical issue discovered with the ledger, (2) request permission to reallocate $180 from unused travel funds to purchase conservation binding supplies, and (3) ask whether the November interim progress report deadline remains unchanged.",
          timeLimitSeconds: 300,
          minWords: 50,
          maxWords: 75,
          strategyGuideEs:
            "En este simulacro final, comprueba que tu nota cubra los 3 puntos numerados en exactamente 3–4 oraciones compactas: (1) motivo + hallazgo físico concreto, (2) solicitud presupuestaria exacta ($180 desde fondos de viaje no usados) y (3) cláusula indirecta doble o coordinada con 'whether' sin signo de interrogación interno invertido.",
          recommendedConnectors: [
            "regarding",
            "unless stabilized first",
            "whether we may reallocate",
            "and whether",
          ],
          b2RubricChecklistEs: [
            "Responde con precisión a los 3 puntos exigidos (estado frágil del libro contable, reasignación de $180 de viajes a insumos de conservación y consulta sobre la fecha límite de noviembre).",
            "Se mantiene estrictamente dentro del rango oficial de 50 a 75 palabras con saludo y cierre formales.",
            "Emplea subordinación fluida de nivel B2 (cláusula condicional reducida con 'unless' e interrogativa indirecta con 'whether').",
            "Presenta ortografía impecable ('nineteenth-century', 'preliminary', 'reallocate', 'unchanged') sin apoyo de corrector.",
          ],
          modelAnswerB2:
            "Dear Ms. Holloway, I am writing regarding the nineteenth-century municipal tax ledger scheduled for high-resolution scanning next week under our archival digitization grant. During preliminary inspection, our conservator discovered brittle spine stitching that could tear under cradle pressure unless stabilized first. Could you confirm whether we may reallocate $180 from unused travel funds toward acid-free binding materials, and whether our November interim report deadline remains unchanged? Sincerely, Elena Vance",
        },
        {
          part: "part2_essay",
          id: "d14-writ-p2",
          cefrLevel: "B2",
          title: "Immediate Open-Data Mandates vs. Exclusive Research Embargoes",
          prompt:
            "Some science policy makers argue that researchers whose studies are funded by public tax revenue should be required to release all raw experimental datasets immediately upon journal publication so independent teams can verify and extend their work. Others contend that principal investigators deserve an exclusive two-year data embargo to publish follow-up analyses before competitors access the datasets they labored to collect. Which policy do you support? Support your position with specific reasons and examples.",
          timeLimitSeconds: 1200,
          minWords: 175,
          maxWords: 225,
          strategyGuideEs:
            "Aplica tu plantilla cronometrada de 20 minutos: 2m30s para planificar tesis + concesión + 2 argumentos con ejemplos reales; 15m para escribir 4 párrafos equilibrados (~205 palabras); y 2m30s de barrido anti-typos verificando sustantivos incontables ('research', 'evidence') y variedad sintáctica (al menos un condicional invertido 'Had...' o hendida 'what...').",
          recommendedConnectors: [
            "consequently,",
            "Admittedly,",
            "Nevertheless,",
            "Had clinical and genomic datasets remained...",
            "Ultimately, what accelerates",
          ],
          b2RubricChecklistEs: [
            "Formula una postura categórica desde el primer párrafo frente al dilema entre apertura inmediata y embargo de dos años.",
            "Cumple el rango meta de 175 a 225 palabras distribuidas en 4 párrafos cohesionados y lógicamente progresivos.",
            "Reconoce legítimamente la objeción de la parte contraria ('Admittedly, principal investigators invest...') y la neutraliza con un mecanismo institucional concreto (citación formal / DOI).",
            "Exhibe estructuras de alto retorno B2 (condicional contrafactual invertido 'Had...', cláusula nominal 'what accelerates...', vocabulario académico preciso).",
            "Evita repeticiones léxicas, oraciones truncas y errores ortográficos o de puntuación.",
          ],
          modelAnswerB2:
            "Publicly funded scientific research exists to advance collective knowledge rather than safeguard private academic monopolies; consequently, funding agencies should mandate immediate open-data release upon journal publication instead of granting two-year embargoes.\n\nAdmittedly, principal investigators invest substantial labor designing protocols and curating raw measurements, leading some scholars to fear that competitors might publish secondary analyses before the original laboratory exhausts its dataset. Nevertheless, modern citation standards and persistent digital identifiers allow institutions to credit data creators formally whenever external teams reuse their repositories, protecting career advancement without withholding public assets.\n\nMore importantly, immediate data transparency is indispensable for scientific self-correction and urgent policy decisions. Across epidemiology, climate modeling, and pharmacology, independent replication frequently uncovers coding errors or sampling biases that peer reviewers cannot detect from summary tables alone. Had clinical and genomic datasets remained locked behind multi-year embargoes during recent infectious-disease outbreaks, vaccine optimization and hospital treatment protocols would have been dangerously delayed. Furthermore, open repositories enable underfunded regional universities to conduct rigorous computational studies without duplicating expensive laboratory collection already financed by taxpayers.\n\nUltimately, what accelerates scientific reliability is collaborative scrutiny rather than prolonged secrecy. Mandating immediate dataset publication ensures that public tax revenue yields maximum empirical and societal return.",
        },
      ],
    },

    // =========================================================================
    // 5. SPEAKING (5 min official clock = 300s / 15 min with post-mock B2 audit)
    // =========================================================================
    speaking: {
      skill: "speaking",
      cefrLevel: "B2",
      title: "Official Mock #2 — Speaking (Part 1 Personal & Part 2 Dual-Viewpoint Opinion)",
      estimatedMinutes: 15,
      timeLimitSeconds: 300,
      focusSummaryEs:
        "Ejecuta ambos turnos con temporizadores encadenados reales sin reiniciar la grabación: usa los 30s/45s de preparación para trazar 3 anclas léxicas, entra con voz firme desde el primer segundo y aterriza tu oración de cierre al menos 3 segundos antes del corte automático.",
      tasks: [
        {
          part: "part1_personal",
          id: "d14-speak-p1",
          cefrLevel: "B2",
          title: "Revising an Initial Assumption Based on New Evidence",
          prompt:
            "Describe a specific situation in a university course, research project, or workplace team when unexpected data or constructive feedback convinced you to revise your initial plan. Explain why you changed your approach and what outcome resulted.",
          prepSeconds: 30,
          recordSeconds: 45,
          structureTemplate: [
            "0–10s (Context & Initial Assumption): Identify the project/team and state concisely what your original plan assumed.",
            "10–28s (Turning-Point Evidence & Pivot): Explain the unexpected data/feedback and the concrete methodological adjustment you made.",
            "28–45s (Outcome & Takeaway): State the measurable result and close cleanly before the 45-second mark.",
          ],
          keyPhrasesB2: [
            "Initially, our team had assumed that...",
            "Once preliminary survey data revealed..., however, we realized...",
            "Rather than defending a flawed assumption, I proposed...",
            "That adjustment ultimately enabled us to...",
          ],
          selfRubricChecklistEs: [
            "Arranqué sin vacilaciones nombrando un contexto académico o profesional concreto y la suposición inicial.",
            "Expliqué con claridad qué evidencia o retroalimentación motivó el giro y qué acción específica tomé.",
            "Integré contrastes temporales y sintácticos B2 ('had assumed', 'Once... revealed', 'Rather than + -ing').",
            "Cerré la idea completa dentro de los 45 segundos con ritmo estable y articulación nítida.",
          ],
          modelTranscriptB2:
            "During a junior-year urban planning studio, our team initially assumed that low ridership on a campus shuttle route stemmed from infrequent evening departures, so we drafted a proposal to add two extra buses. Once our rider survey came back, however, nearly seventy percent of respondents reported avoiding the shuttle not because of wait times, but because poorly lit stops near the science complex felt unsafe after dark. Rather than defending our original hypothesis, I proposed reallocating the budget toward solar LED shelter lighting and real-time arrival displays. When we presented the revised cost-benefit analysis to campus transit coordinators, they adopted our lighting pilot for the fall semester. That experience taught me to let empirical evidence override early assumptions.",
        },
        {
          part: "part2_opinion",
          id: "d14-speak-p2",
          cefrLevel: "B2",
          title: "Mandatory Community-Engaged Internships for University Graduation",
          prompt:
            "Some universities now require every undergraduate student, regardless of major, to complete a one-semester civic or community-service internship in order to graduate. Advocates argue that applied community placements cultivate civic responsibility and practical problem-solving skills that classroom lectures cannot replicate. Critics counter that mandatory unpaid or off-campus placements impose unfair financial and scheduling burdens on working students. Should universities require a community-engaged internship for graduation? Justify your stance with specific reasons.",
          audioPrompt: {
            trackId: "day14-speaking-p2",
            audioUrl: "/audio/day14-speaking-p2.mp3",
            contextSetup: "Official iTEP Speaking Part 2 dual-perspective academic prompt.",
            turns: [
              {
                speakerLabel: "Examiner",
                voice: "en-GB-RyanNeural",
                text: "Some universities now require every undergraduate student, regardless of major, to complete a one-semester civic or community-service internship in order to graduate. Advocates argue that applied community placements cultivate civic responsibility and practical problem-solving skills that classroom lectures cannot replicate. Critics counter that mandatory unpaid or off-campus placements impose unfair financial and scheduling burdens on working students. Should universities require a community-engaged internship for graduation? Justify your stance with specific reasons.",
                pauseAfterMs: 600,
              },
            ],
          },
          prepSeconds: 45,
          recordSeconds: 60,
          structureTemplate: [
            "0–12s (Decisive Thesis): State clearly whether community internships should be mandatory or optional/stipend-backed, and why.",
            "12–30s (Concession + Structural Safeguard/Rebuttal): Acknowledge the opposite concern fairly, then counter it with concrete institutional analysis.",
            "30–50s (Concrete Academic/Social Example): Provide a specific example showing the real impact on working students or disciplinary training.",
            "50–60s (Crisp Synthesis): Deliver a complete concluding sentence before 60s expires.",
          ],
          keyPhrasesB2: [
            "While community engagement is undeniably valuable, I oppose making off-campus internships a blanket graduation mandate...",
            "Admittedly, applied placements help students translate abstract theory into...",
            "Nevertheless, unless universities fully fund stipends and transit costs...",
            "Ultimately, experiential learning thrives when incentivized through paid fellowships rather than imposed rigidly.",
          ],
          selfRubricChecklistEs: [
            "Adopté una postura inequívoca en los primeros 10 segundos en vez de limitarme a describir ambos lados.",
            "Abordé directamente la objeción opuesta usando conectores concesivos y adversativos B2 ('Admittedly...', 'Nevertheless...').",
            "Sustenté mi postura con un ejemplo universitario realista (estudiantes que trabajan, carga de laboratorio, becas remuneradas).",
            "Mantuve fluidez continua sin pausas largas ni autocorrecciones caóticas durante el minuto completo.",
            "Concluí con una oración sintética antes del corte de los 60 segundos.",
          ],
          modelTranscriptB2:
            "While community engagement is undeniably valuable, I oppose making a one-semester civic internship a blanket graduation requirement for every undergraduate. Admittedly, applied placements allow students to test classroom theories against real municipal challenges, such as assisting public health clinics or tutoring local schools. Nevertheless, imposing a mandatory off-campus commitment without guaranteed compensation places a disproportionate burden on students who already work twenty hours a week to pay tuition and rent. An engineering or nursing major juggling lab courses and evening shifts cannot easily sacrifice paid employment for an uncompensated placement, which risks delaying graduation for lower-income students. Furthermore, coerced volunteerism rarely fosters genuine civic commitment. Rather than enforcing a rigid mandate, universities should integrate community-based projects directly into existing credit-bearing seminars and expand paid summer civic fellowships. Ultimately, experiential learning succeeds best when institutions remove financial barriers instead of adding another hurdle to degree completion.",
        },
      ],
    },
  },
  dailyChecklistEs: [
    "Completé los 80 minutos continuos del Simulacro Final #2 respetando estrictamente los relojes oficiales de las 5 secciones sin pausas intermedias.",
    "Resolví las 25 preguntas de Grammar en ≤ 10 minutos superando el 84 % de acierto (≥ 21/25) y clasifiqué cualquier fallo en mi bitácora de errores.",
    "Ejecuté las 4 pistas de Listening en una sola reproducción estricta acertando al menos 10 de las 12 preguntas de inferencia, detalle y estructura retórica.",
    "Completé ambos pasajes de Reading en ≤ 20 minutos acertando la inserción en `[C]` y las preguntas de síntesis paleoclimática y logística.",
    "Redacté Writing Part 1 (50–75w) y Part 2 (175–225w) sin corrector y grabé Speaking Part 1 y Part 2 verificando cierre limpio antes de 00:00.",
  ],
};
