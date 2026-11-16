import type { ItepSkill, NeuralVoiceId } from "@/schemas/curriculum.schema.ts";
import {
  type CuratedVocabularyItem,
  CuratedVocabularyItemSchema,
  type PartOfSpeech,
  type VocabCefrLevel,
} from "@/schemas/vocabulary.schema.ts";

const NEURAL_VOICES: readonly NeuralVoiceId[] = [
  "en-US-AvaMultilingualNeural",
  "en-US-AndrewMultilingualNeural",
  "en-GB-SoniaNeural",
  "en-GB-RyanNeural",
  "en-US-JennyNeural",
  "en-US-GuyNeural",
];

interface RawCuratedVocabSeed {
  readonly id: string;
  readonly term: string;
  readonly ipa: string;
  readonly partOfSpeech: PartOfSpeech;
  readonly cefrLevel: VocabCefrLevel;
  readonly meaningEs: string;
  readonly exampleEn: string;
  readonly exampleTranslationEs: string;
  readonly b1SynonymOrTrap: string;
  readonly collocations: readonly string[];
  readonly linkedDayNumbers: readonly number[];
  readonly primarySkill: ItepSkill;
}

function buildCuratedVocabularyItem(
  seed: RawCuratedVocabSeed,
  index: number,
): CuratedVocabularyItem {
  const voice = NEURAL_VOICES[index % NEURAL_VOICES.length] ?? "en-US-AvaMultilingualNeural";
  const capitalizedTerm = `${seed.term.charAt(0).toUpperCase()}${seed.term.slice(1)}`;

  return CuratedVocabularyItemSchema.parse({
    id: seed.id,
    source: "curated",
    term: seed.term,
    ipa: seed.ipa,
    partOfSpeech: seed.partOfSpeech,
    cefrLevel: seed.cefrLevel,
    meaningEs: seed.meaningEs,
    exampleEn: seed.exampleEn,
    exampleTranslationEs: seed.exampleTranslationEs,
    b1SynonymOrTrap: seed.b1SynonymOrTrap,
    collocations: [...seed.collocations],
    linkedDayNumbers: [...seed.linkedDayNumbers],
    primarySkill: seed.primarySkill,
    audio: {
      trackId: seed.id,
      audioUrl: `/audio/${seed.id}.mp3`,
      contextSetup: `Byme Lenguage lexical pronunciation and academic context (${seed.cefrLevel})`,
      turns: [
        {
          speakerLabel: "Lexicographer",
          voice,
          text: `${capitalizedTerm}. ${seed.exampleEn}`,
          pauseAfterMs: 350,
        },
      ],
    },
  });
}

const RAW_CORE_VOCABULARY: readonly RawCuratedVocabSeed[] = [
  // ================= DÍA 1 (B2) =================
  {
    id: "vocab-d01-corroborate",
    term: "corroborate",
    ipa: "/kəˈrɒb.ə.reɪt/",
    partOfSpeech: "verb",
    cefrLevel: "B2",
    meaningEs:
      "Corroborar o respaldar una afirmación o hipótesis mediante evidencia empírica independiente.",
    exampleEn:
      "Isotopic soil measurements corroborate the hypothesis that mature trees transfer carbon to shaded seedlings.",
    exampleTranslationEs:
      "Las mediciones isotópicas del suelo corroboran la hipótesis de que los árboles maduros transfieren carbono a las plántulas en sombra.",
    b1SynonymOrTrap:
      "Eleva 'confirm / prove' a registro científico; no confundir fonéticamente con 'collaborate' (colaborar).",
    collocations: [
      "corroborate a hypothesis",
      "corroborating evidence",
      "independently corroborate",
    ],
    linkedDayNumbers: [1],
    primarySkill: "reading",
  },
  {
    id: "vocab-d01-albeit",
    term: "albeit",
    ipa: "/ɔːlˈbiː.ɪt/",
    partOfSpeech: "connector",
    cefrLevel: "B2",
    meaningEs:
      "Conector concesivo formal equivalente a 'aunque / si bien', seguido de adjetivo, adverbio o frase nominal (nunca de cláusula finita completa).",
    exampleEn:
      "Algorithmic screening accelerates journal peer review, albeit with notable blind spots in interdisciplinary research.",
    exampleTranslationEs:
      "El filtrado algorítmico acelera la revisión por pares, si bien con puntos ciegos notables en la investigación interdisciplinaria.",
    b1SynonymOrTrap:
      "Reemplaza 'although it is' de forma compacta; trampa iTEP Grammar: nunca uses verbo conjugado justo después de 'albeit'.",
    collocations: ["albeit briefly", "albeit with limitations", "albeit at a slower pace"],
    linkedDayNumbers: [1],
    primarySkill: "writing",
  },
  {
    id: "vocab-d01-allocate",
    term: "allocate",
    ipa: "/ˈæl.ə.keɪt/",
    partOfSpeech: "verb",
    cefrLevel: "B2",
    meaningEs:
      "Asignar o distribuir estratégicamente recursos limitados (presupuesto, tiempo, becas o espacio).",
    exampleEn:
      "The dean's office decided to allocate additional fellowship funds to undergraduate laboratory projects.",
    exampleTranslationEs:
      "El decanato decidió asignar fondos adicionales de becas a proyectos de laboratorio de pregrado.",
    b1SynonymOrTrap:
      "Sustituye a 'give / put money' en ensayos universitarios; se construye siempre como 'allocate X to Y'.",
    collocations: ["allocate resources to", "budget allocation", "allocate study time"],
    linkedDayNumbers: [1],
    primarySkill: "listening",
  },

  // ================= DÍA 2 (B2) =================
  {
    id: "vocab-d02-contingent-upon",
    term: "contingent upon",
    ipa: "/kənˈtɪn.dʒənt əˈpɒn/",
    partOfSpeech: "collocation",
    cefrLevel: "B2",
    meaningEs: "Supeditado a o estrictamente dependiente de que se cumpla una condición previa.",
    exampleEn:
      "Renewal of the mobility stipend remains contingent upon maintaining full-time academic enrollment.",
    exampleTranslationEs:
      "La renovación del estipendio de movilidad permanece supeditada a mantener la matrícula académica a tiempo completo.",
    b1SynonymOrTrap:
      "Mejora directa de 'depends on' en condicionales formales de iTEP Grammar y Writing.",
    collocations: ["remain contingent upon", "contingent upon approval", "funding contingent upon"],
    linkedDayNumbers: [2],
    primarySkill: "grammar",
  },
  {
    id: "vocab-d02-mitigate",
    term: "mitigate",
    ipa: "/ˈmɪt.ɪ.ɡeɪt/",
    partOfSpeech: "verb",
    cefrLevel: "B2",
    meaningEs:
      "Mitigar, atenuar o reducir la gravedad, el impacto negativo o el riesgo de un problema.",
    exampleEn:
      "Parametric crop insurance helps smallholder farmers mitigate financial losses after severe droughts.",
    exampleTranslationEs:
      "El seguro agrícola paramétrico ayuda a los pequeños agricultores a mitigar las pérdidas financieras tras sequías severas.",
    b1SynonymOrTrap:
      "Sustituye al genérico 'make less bad / reduce problems'; es verbo transitivo directo (nunca 'mitigate against').",
    collocations: ["mitigate financial risk", "mitigate adverse effects", "mitigation strategy"],
    linkedDayNumbers: [2],
    primarySkill: "writing",
  },
  {
    id: "vocab-d02-viable",
    term: "viable",
    ipa: "/ˈvaɪ.ə.bəl/",
    partOfSpeech: "adjective",
    cefrLevel: "B2",
    meaningEs:
      "Viable y sostenible en la práctica desde el punto de vista económico, técnico o institucional.",
    exampleEn:
      "Need-based tuition grants offer a more viable path to retention than punitive grade thresholds.",
    exampleTranslationEs:
      "Las becas basadas en necesidad económica ofrecen una vía más viable para la retención estudiantil que los umbrales punitivos de notas.",
    b1SynonymOrTrap:
      "Eleva 'possible / can work' en Speaking Part 2 cuando evalúas alternativas de política universitaria.",
    collocations: ["economically viable", "a viable alternative", "long-term viability"],
    linkedDayNumbers: [2],
    primarySkill: "speaking",
  },

  // ================= DÍA 3 (B2) =================
  {
    id: "vocab-d03-disseminate",
    term: "disseminate",
    ipa: "/dɪˈsem.ɪ.neɪt/",
    partOfSpeech: "verb",
    cefrLevel: "B2",
    meaningEs:
      "Difundir o divulgar ampliamente hallazgos científicos, datos o conocimiento especializado.",
    exampleEn:
      "Open-access repositories allow publicly funded universities to disseminate clinical findings without paywalls.",
    exampleTranslationEs:
      "Los repositorios de acceso abierto permiten a las universidades públicas difundir hallazgos clínicos sin muros de pago.",
    b1SynonymOrTrap:
      "Reemplaza 'spread / share information' con precisión académica ideal para ensayos sobre ciencia y educación.",
    collocations: ["disseminate research findings", "widely disseminated", "rapid dissemination"],
    linkedDayNumbers: [3],
    primarySkill: "reading",
  },
  {
    id: "vocab-d03-stringent",
    term: "stringent",
    ipa: "/ˈstrɪn.dʒənt/",
    partOfSpeech: "adjective",
    cefrLevel: "B2",
    meaningEs:
      "Estricto, riguroso e inflexible, aplicado a normativas, controles de seguridad o estándares científicos.",
    exampleEn:
      "Marine sanctuaries must enforce stringent visitor caps to prevent irreversible coral bleaching.",
    exampleTranslationEs:
      "Los santuarios marinos deben aplicar límites estrictos de visitantes para evitar el blanqueamiento irreversible del coral.",
    b1SynonymOrTrap: "Supera el uso repetitivo de 'strict / hard rules' en ensayos persuasivos B2.",
    collocations: [
      "stringent regulations",
      "stringent safety standards",
      "stringent eligibility criteria",
    ],
    linkedDayNumbers: [3],
    primarySkill: "writing",
  },
  {
    id: "vocab-d03-streamline",
    term: "streamline",
    ipa: "/ˈstriːm.laɪn/",
    partOfSpeech: "verb",
    cefrLevel: "B2",
    meaningEs: "Agilizar u optimizar un proceso eliminando pasos burocráticos o redundantes.",
    exampleEn:
      "Digitizing laboratory equipment requests helped the department streamline maintenance scheduling.",
    exampleTranslationEs:
      "Digitalizar las solicitudes de equipo de laboratorio ayudó al departamento a agilizar la programación del mantenimiento.",
    b1SynonymOrTrap:
      "Vocablo estrella para Speaking Part 1 y Writing Part 1 al describir mejoras administrativas o laborales.",
    collocations: [
      "streamline a workflow",
      "streamline administrative procedures",
      "streamlined system",
    ],
    linkedDayNumbers: [3],
    primarySkill: "speaking",
  },

  // ================= DÍA 4 (B2) =================
  {
    id: "vocab-d04-seldom",
    term: "seldom",
    ipa: "/ˈsel.dəm/",
    partOfSpeech: "adverb",
    cefrLevel: "B2",
    meaningEs:
      "Rara vez o casi nunca; adverbio negativo formal que activa inversión sujeto-auxiliar al encabezar la oración.",
    exampleEn:
      "Seldom have urban planners witnessed such rapid recovery in pedestrian air-quality metrics.",
    exampleTranslationEs:
      "Rara vez los urbanistas han presenciado una recuperación tan rápida en los indicadores de calidad del aire peatonal.",
    b1SynonymOrTrap:
      "Reemplaza 'almost never'; clave en iTEP Grammar Part 1: al inicio exige auxiliar invertido ('Seldom do / Seldom have').",
    collocations: ["seldom occur", "seldom have researchers seen", "very seldom"],
    linkedDayNumbers: [4],
    primarySkill: "grammar",
  },
  {
    id: "vocab-d04-underpin",
    term: "underpin",
    ipa: "/ˌʌn.dəˈpɪn/",
    partOfSpeech: "verb",
    cefrLevel: "B2",
    meaningEs:
      "Sustentar, fundamentar o constituir la base teórica o estructural de un argumento o sistema.",
    exampleEn:
      "Rigorous statistical controls underpin every credible longitudinal study in cognitive psychology.",
    exampleTranslationEs:
      "Controles estadísticos rigurosos sustentan todo estudio longitudinal creíble en psicología cognitiva.",
    b1SynonymOrTrap:
      "Sustituye 'is the base of / supports' con elegancia sintáctica propia de puntaje 4.0+.",
    collocations: ["underpin a theory", "principles that underpin", "empirical underpinning"],
    linkedDayNumbers: [4],
    primarySkill: "reading",
  },
  {
    id: "vocab-d04-commensurate",
    term: "commensurate",
    ipa: "/kəˈmen.ʃər.ət/",
    partOfSpeech: "adjective",
    cefrLevel: "B2",
    meaningEs: "Proporcional o acorde en magnitud, remuneración o alcance respecto a otro factor.",
    exampleEn:
      "Graduate teaching stipends should be commensurate with regional housing costs and instructional hours.",
    exampleTranslationEs:
      "Los estipendios de docencia de posgrado deberían ser acordes con los costos regionales de vivienda y las horas lectivas.",
    b1SynonymOrTrap:
      "Eleva 'equal to / matching'; en Grammar recuerda que rige la preposición 'with' ('commensurate with').",
    collocations: [
      "commensurate with experience",
      "commensurate compensation",
      "commensurate penalties",
    ],
    linkedDayNumbers: [4],
    primarySkill: "writing",
  },

  // ================= DÍA 5 (B2) =================
  {
    id: "vocab-d05-stipulate",
    term: "stipulate",
    ipa: "/ˈstɪp.jʊ.leɪt/",
    partOfSpeech: "verb",
    cefrLevel: "B2",
    meaningEs:
      "Estipular o exigir explícitamente una condición obligatoria dentro de un reglamento o contrato (activa subjuntivo mandativo).",
    exampleEn:
      "Ethics guidelines stipulate that every participant sign an informed-consent form prior to testing.",
    exampleTranslationEs:
      "Los lineamientos éticos estipulan que cada participante firme un consentimiento informado antes de la prueba.",
    b1SynonymOrTrap:
      "Trampa clásica iTEP: tras 'stipulate that + sujeto', el verbo va en forma base sin '-s' ('sign', nunca 'signs').",
    collocations: ["stipulate that", "clearly stipulated in", "contractual stipulation"],
    linkedDayNumbers: [5],
    primarySkill: "grammar",
  },
  {
    id: "vocab-d05-imperative",
    term: "imperative",
    ipa: "/ɪmˈper.ə.tɪv/",
    partOfSpeech: "adjective",
    cefrLevel: "B2",
    meaningEs:
      "Imperativo, impostergable o de urgencia crítica; también activa el subjuntivo mandativo en registro formal.",
    exampleEn:
      "It is imperative that municipal authorities modernize aging water distribution pipelines immediately.",
    exampleTranslationEs:
      "Es imperativo que las autoridades municipales modernicen de inmediato las tuberías envejecidas de distribución de agua.",
    b1SynonymOrTrap:
      "Reemplaza 'very important / super necessary'; exige verbo base en 'It is imperative that X be/do'.",
    collocations: ["it is imperative that", "moral imperative", "strategic imperative"],
    linkedDayNumbers: [5],
    primarySkill: "writing",
  },
  {
    id: "vocab-d05-plausible",
    term: "plausible",
    ipa: "/ˈplɔː.zə.bəl/",
    partOfSpeech: "adjective",
    cefrLevel: "B2",
    meaningEs:
      "Plausible, verosímil o razonablemente creíble a la luz de los indicios disponibles.",
    exampleEn:
      "Seasonal thermal expansion offers the most plausible explanation for the micro-fractures in the dome.",
    exampleTranslationEs:
      "La expansión térmica estacional ofrece la explicación más plausible para las microfracturas en la cúpula.",
    b1SynonymOrTrap:
      "Mucho más preciso que 'believable / maybe true' en preguntas de inferencia de Listening Part 3.",
    collocations: ["a plausible explanation", "entirely plausible", "plausible alternative"],
    linkedDayNumbers: [5],
    primarySkill: "listening",
  },

  // ================= DÍA 6 (B2) =================
  {
    id: "vocab-d06-stem-from",
    term: "stem from",
    ipa: "/stem frɒm/",
    partOfSpeech: "collocation",
    cefrLevel: "B2",
    meaningEs:
      "Derivarse de, tener su origen en o ser consecuencia directa de una causa subyacente.",
    exampleEn:
      "Many diagnostic errors in clinical radiology stem from cognitive fatigue during overnight shifts.",
    exampleTranslationEs:
      "Muchos errores diagnósticos en radiología clínica se derivan de la fatiga cognitiva durante los turnos nocturnos.",
    b1SynonymOrTrap:
      "Sustituye a 'come from / happen because of'; ideal también en cláusulas participiales ('Stemming from...').",
    collocations: ["stem directly from", "problems stemming from", "largely stem from"],
    linkedDayNumbers: [6],
    primarySkill: "reading",
  },
  {
    id: "vocab-d06-detrimental",
    term: "detrimental",
    ipa: "/ˌdet.rɪˈmen.təl/",
    partOfSpeech: "adjective",
    cefrLevel: "B2",
    meaningEs:
      "Perjudicial, nocivo o contraproducente para el bienestar, el rendimiento o un ecosistema.",
    exampleEn:
      "Chronic sleep deprivation proves detrimental to working-memory consolidation among first-year students.",
    exampleTranslationEs:
      "La privación crónica del sueño resulta perjudicial para la consolidación de la memoria de trabajo en estudiantes de primer año.",
    b1SynonymOrTrap:
      "Reemplaza 'bad for / harmful'; recuerda que siempre va seguido de la preposición 'to' ('detrimental to').",
    collocations: ["detrimental to health", "detrimental impact on", "prove detrimental"],
    linkedDayNumbers: [6],
    primarySkill: "writing",
  },
  {
    id: "vocab-d06-foster",
    term: "foster",
    ipa: "/ˈfɒs.tər/",
    partOfSpeech: "verb",
    cefrLevel: "B2",
    meaningEs:
      "Fomentar, cultivar o propiciar el desarrollo de habilidades, colaboración o innovación.",
    exampleEn:
      "Interdisciplinary capstone seminars foster critical dialogue between engineering and ethics majors.",
    exampleTranslationEs:
      "Los seminarios integradores interdisciplinarios fomentan el diálogo crítico entre estudiantes de ingeniería y de ética.",
    b1SynonymOrTrap:
      "Eleva 'help create / encourage' en introducciones y conclusiones de Writing y Speaking.",
    collocations: ["foster collaboration", "foster critical thinking", "foster innovation"],
    linkedDayNumbers: [6],
    primarySkill: "speaking",
  },

  // ================= DÍA 7 (B2) =================
  {
    id: "vocab-d07-adhere-to",
    term: "adhere to",
    ipa: "/ədˈhɪər tuː/",
    partOfSpeech: "collocation",
    cefrLevel: "B2",
    meaningEs:
      "Ceñirse estrictamente a o cumplir fielmente un protocolo, pauta ética o cronograma.",
    exampleEn:
      "All external contractors must adhere to the university's cybersecurity encryption standards.",
    exampleTranslationEs:
      "Todos los contratistas externos deben ceñirse a los estándares de cifrado de ciberseguridad de la universidad.",
    b1SynonymOrTrap:
      "Mejora 'follow rules'; trampa en Grammar Part 2: nunca uses 'adhere with', siempre es 'adhere to'.",
    collocations: ["strictly adhere to", "adhere to guidelines", "adherence to protocol"],
    linkedDayNumbers: [7],
    primarySkill: "grammar",
  },
  {
    id: "vocab-d07-comply-with",
    term: "comply with",
    ipa: "/kəmˈplaɪ wɪð/",
    partOfSpeech: "collocation",
    cefrLevel: "B2",
    meaningEs:
      "Acatar o cumplir con requisitos legales, normativas ambientales o disposiciones oficiales.",
    exampleEn:
      "Laboratories that fail to comply with hazardous-waste disposal rules face immediate suspension.",
    exampleTranslationEs:
      "Los laboratorios que no cumplan con las normas de eliminación de residuos peligrosos enfrentan suspensión inmediata.",
    b1SynonymOrTrap:
      "Contraste obligatorio con 'adhere to': se dice 'adhere TO', pero siempre 'comply WITH' (nunca 'comply to').",
    collocations: ["comply with regulations", "fully comply with", "regulatory compliance"],
    linkedDayNumbers: [7],
    primarySkill: "writing",
  },
  {
    id: "vocab-d07-negligible",
    term: "negligible",
    ipa: "/ˈneɡ.lɪ.dʒə.bəl/",
    partOfSpeech: "adjective",
    cefrLevel: "B2",
    meaningEs:
      "Insignificante, ínfimo o tan pequeño en magnitud estadística que puede desestimarse.",
    exampleEn:
      "Switching to LED greenhouse arrays produced a negligible temperature rise alongside major energy savings.",
    exampleTranslationEs:
      "El cambio a paneles LED de invernadero produjo un aumento insignificante de temperatura junto con grandes ahorros de energía.",
    b1SynonymOrTrap:
      "Falso amigo parcial: NO significa 'negligente' ('negligent'), sino 'despreciable/mínimo en cantidad'.",
    collocations: ["a negligible amount", "statistically negligible", "negligible effect on"],
    linkedDayNumbers: [7],
    primarySkill: "reading",
  },

  // ================= DÍA 8 — SIMULACRO #1 (B2) =================
  {
    id: "vocab-d08-scrutinize",
    term: "scrutinize",
    ipa: "/ˈskruː.tɪ.naɪz/",
    partOfSpeech: "verb",
    cefrLevel: "B2",
    meaningEs:
      "Escudriñar o examinar minuciosamente cada detalle en busca de fallos metodológicos o inconsistencias.",
    exampleEn:
      "Auditors were hired to scrutinize municipal procurement contracts awarded over the past decade.",
    exampleTranslationEs:
      "Se contrató a auditores para examinar minuciosamente los contratos de compras municipales adjudicados en la última década.",
    b1SynonymOrTrap:
      "Reemplaza 'check carefully / look closely at' tanto en Reading como en Writing argumentativo.",
    collocations: ["closely scrutinize", "scrutinize data", "under public scrutiny"],
    linkedDayNumbers: [8],
    primarySkill: "reading",
  },
  {
    id: "vocab-d08-consequently",
    term: "consequently",
    ipa: "/ˈkɒn.sɪ.kwənt.li/",
    partOfSpeech: "connector",
    cefrLevel: "B2",
    meaningEs:
      "En consecuencia o por consiguiente; conector adverbial de resultado lógico entre oraciones.",
    exampleEn:
      "Subsurface aquifers were depleted faster than recharge rates; consequently, coastal land began to subside.",
    exampleTranslationEs:
      "Los acuíferos subterráneos se agotaron más rápido que las tasas de recarga; en consecuencia, el terreno costero comenzó a hundirse.",
    b1SynonymOrTrap:
      "Reemplaza el informal 'so' al inicio de frase; en puntuación formal va tras punto o punto y coma y seguido de coma.",
    collocations: ["; consequently,", "consequently lead to", "and consequently"],
    linkedDayNumbers: [8],
    primarySkill: "writing",
  },
  {
    id: "vocab-d08-pragmatic",
    term: "pragmatic",
    ipa: "/præɡˈmæt.ɪk/",
    partOfSpeech: "adjective",
    cefrLevel: "B2",
    meaningEs:
      "Pragmático, realista y enfocado en soluciones prácticas antes que en consideraciones puramente teóricas.",
    exampleEn:
      "Adopting hybrid assessment formats represents a pragmatic compromise between academic integrity and flexibility.",
    exampleTranslationEs:
      "Adoptar formatos de evaluación híbridos representa un compromiso pragmático entre integridad académica y flexibilidad.",
    b1SynonymOrTrap:
      "Excelente adjetivo de cierre en Speaking Part 2 para justificar una postura equilibrada.",
    collocations: ["a pragmatic approach", "pragmatic solution", "pragmatic compromise"],
    linkedDayNumbers: [8],
    primarySkill: "speaking",
  },

  // ================= DÍA 9 (B2) =================
  {
    id: "vocab-d09-conversely",
    term: "conversely",
    ipa: "/ˈkɒn.vɜːs.li/",
    partOfSpeech: "connector",
    cefrLevel: "B2",
    meaningEs:
      "Por el contrario o a la inversa; introduce una relación simétricamente opuesta a la afirmación previa.",
    exampleEn:
      "Early exposure to diverse syntax accelerates reading fluency; conversely, vocabulary isolation slows comprehension.",
    exampleTranslationEs:
      "La exposición temprana a sintaxis diversa acelera la fluidez lectora; a la inversa, aislar el vocabulario frena la comprensión.",
    b1SynonymOrTrap:
      "Más preciso que 'on the other hand' cuando expresas inversión directa causa-efecto.",
    collocations: ["; conversely,", "conversely, when", "or conversely"],
    linkedDayNumbers: [9],
    primarySkill: "writing",
  },
  {
    id: "vocab-d09-whereas",
    term: "whereas",
    ipa: "/weərˈæz/",
    partOfSpeech: "connector",
    cefrLevel: "B2",
    meaningEs:
      "Mientras que (en contraste directo); conjunción subordinante para contraponer dos hechos verificables en una misma oración.",
    exampleEn:
      "Qualitative interviews capture individual motivation, whereas large-scale surveys reveal demographic trends.",
    exampleTranslationEs:
      "Las entrevistas cualitativas capturan la motivación individual, mientras que las encuestas masivas revelan tendencias demográficas.",
    b1SynonymOrTrap:
      "Sustituye el 'while' ambiguo (que puede significar tiempo) cuando contrastas dos grupos o teorías.",
    collocations: ["whereas in contrast", ", whereas traditional models", "whereas the latter"],
    linkedDayNumbers: [9],
    primarySkill: "grammar",
  },
  {
    id: "vocab-d09-outweigh",
    term: "outweigh",
    ipa: "/ˌaʊtˈweɪ/",
    partOfSpeech: "verb",
    cefrLevel: "B2",
    meaningEs:
      "Superar en peso, importancia o beneficio a las desventajas o riesgos contrapuestos.",
    exampleEn:
      "The preventive health benefits of urban cycling lanes far outweigh their initial construction costs.",
    exampleTranslationEs:
      "Los beneficios preventivos en salud de las ciclovías urbanas superan con creces sus costos iniciales de construcción.",
    b1SynonymOrTrap:
      "Estructura reina para tesis de Writing Part 2 y Speaking Part 2 ('far outweigh the drawbacks').",
    collocations: ["far outweigh", "benefits outweigh the costs", "advantages outweigh risks"],
    linkedDayNumbers: [9],
    primarySkill: "speaking",
  },

  // ================= DÍA 10 (B2) =================
  {
    id: "vocab-d10-ambiguous",
    term: "ambiguous",
    ipa: "/æmˈbɪɡ.ju.əs/",
    partOfSpeech: "adjective",
    cefrLevel: "B2",
    meaningEs:
      "Ambiguo o equívoco, susceptible de dos o más interpretaciones por falta de claridad referencial.",
    exampleEn:
      "Survey questions worded in an ambiguous manner inevitably distort longitudinal public-opinion metrics.",
    exampleTranslationEs:
      "Las preguntas de encuesta redactadas de manera ambigua distorsionan inevitablemente las métricas longitudinales de opinión pública.",
    b1SynonymOrTrap:
      "Conecta con morfología B2: adjetivo 'ambiguous', adverbio 'ambiguously', sustantivo 'ambiguity'.",
    collocations: ["ambiguous wording", "remain ambiguous", "morally ambiguous"],
    linkedDayNumbers: [10],
    primarySkill: "reading",
  },
  {
    id: "vocab-d10-coherent",
    term: "coherent",
    ipa: "/kəʊˈhɪə.rənt/",
    partOfSpeech: "adjective",
    cefrLevel: "B2",
    meaningEs: "Coherente, lógicamente articulado y consistente de principio a fin.",
    exampleEn:
      "Without clear pronoun reference, even insightful essays fail to present a coherent policy argument.",
    exampleTranslationEs:
      "Sin una referencia pronominal clara, incluso los ensayos perspicaces no logran presentar un argumento político coherente.",
    b1SynonymOrTrap:
      "Familia morfológica evaluada en iTEP: 'coherent' (adj.), 'coherently' (adv.), 'coherence' (sust.).",
    collocations: ["a coherent argument", "coherent framework", "logically coherent"],
    linkedDayNumbers: [10],
    primarySkill: "writing",
  },
  {
    id: "vocab-d10-precedent",
    term: "precedent",
    ipa: "/ˈpres.ɪ.dənt/",
    partOfSpeech: "noun",
    cefrLevel: "B2",
    meaningEs:
      "Precedente o antecedente institucional o jurídico que sirve de referencia para decisiones futuras.",
    exampleEn:
      "Granting retroactive deadline extensions without documentation would set a problematic academic precedent.",
    exampleTranslationEs:
      "Conceder prórrogas retroactivas sin documentación sentaría un precedente académico problemático.",
    b1SynonymOrTrap:
      "Cuidado ortográfico y auditivo con 'president' (/ˈprez.ɪ.dənt/ con /z/) frente a 'precedent' (/ˈpres.ɪ.dənt/ con /s/).",
    collocations: ["set a precedent", "historical precedent", "without precedent"],
    linkedDayNumbers: [10],
    primarySkill: "listening",
  },

  // ================= DÍA 11 (B2) =================
  {
    id: "vocab-d11-underscore",
    term: "underscore",
    ipa: "/ˌʌn.dəˈskɔːr/",
    partOfSpeech: "verb",
    cefrLevel: "B2",
    meaningEs: "Subrayar, recalcar o poner de relieve la trascendencia de un hecho o evidencia.",
    exampleEn:
      "Recent archival discoveries underscore the role that maritime trade played in early phonetic alphabets.",
    exampleTranslationEs:
      "Los recientes hallazgos de archivo subrayan el papel que desempeñó el comercio marítimo en los primeros alfabetos fonéticos.",
    b1SynonymOrTrap:
      "Reemplaza el gastado 'show / emphasize' para cerrar párrafos argumentativos con autoridad B2.",
    collocations: [
      "underscore the importance of",
      "underscore the need for",
      "findings underscore",
    ],
    linkedDayNumbers: [11],
    primarySkill: "writing",
  },
  {
    id: "vocab-d11-pivotal",
    term: "pivotal",
    ipa: "/ˈpɪv.ə.təl/",
    partOfSpeech: "adjective",
    cefrLevel: "B2",
    meaningEs:
      "Crucial, decisivo o eje central sobre el cual gira un cambio histórico, científico o personal.",
    exampleEn:
      "It was the invention of ultraviolet lithography that proved pivotal in shrinking microprocessor transistors.",
    exampleTranslationEs:
      "Fue la invención de la litografía ultravioleta lo que resultó crucial para reducir los transistores de microprocesadores.",
    b1SynonymOrTrap:
      "Ideal junto a oraciones hendidas ('It was X that played a pivotal role in...') vistas en el Día 11.",
    collocations: ["play a pivotal role", "a pivotal moment", "prove pivotal in"],
    linkedDayNumbers: [11],
    primarySkill: "speaking",
  },
  {
    id: "vocab-d11-entail",
    term: "entail",
    ipa: "/ɪnˈteɪl/",
    partOfSpeech: "verb",
    cefrLevel: "B2",
    meaningEs:
      "Conllevar, implicar necesariamente o exigir como consecuencia inherente (seguido de sustantivo o gerundio `-ing`).",
    exampleEn:
      "Transitioning a campus fleet to hydrogen fuel cells entails upgrading high-pressure storage facilities.",
    exampleTranslationEs:
      "Transicionar una flota universitaria a celdas de hidrógeno conlleva modernizar las instalaciones de almacenamiento de alta presión.",
    b1SynonymOrTrap:
      "Trampa gramatical iTEP: 'entail' exige gerundio ('entails upgrading'), nunca infinitivo ('entails to upgrade' es incorrecto).",
    collocations: ["entail significant costs", "entail restructuring", "what the reform entails"],
    linkedDayNumbers: [11],
    primarySkill: "reading",
  },

  // ================= DÍA 12 (B2) =================
  {
    id: "vocab-d12-expedite",
    term: "expedite",
    ipa: "/ˈek.spə.daɪt/",
    partOfSpeech: "verb",
    cefrLevel: "B2",
    meaningEs:
      "Acelerar o despachar con prontitud un trámite oficial, revisión o proceso logístico.",
    exampleEn:
      "Submitting certified transcripts electronically will expedite your graduate admission review.",
    exampleTranslationEs:
      "Enviar los certificados oficiales electrónicamente acelerará la revisión de tu admisión de posgrado.",
    b1SynonymOrTrap: "Sustituye a 'make faster / speed up' en notas formales de Writing Part 1.",
    collocations: ["expedite the process", "expedite approval", "expedited review"],
    linkedDayNumbers: [12],
    primarySkill: "listening",
  },
  {
    id: "vocab-d12-concise",
    term: "concise",
    ipa: "/kənˈsaɪs/",
    partOfSpeech: "adjective",
    cefrLevel: "B2",
    meaningEs: "Conciso, denso en información relevante y libre de palabrería innecesaria.",
    exampleEn:
      "Effective executive summaries remain concise while preserving every methodological limitation.",
    exampleTranslationEs:
      "Los resúmenes ejecutivos eficaces se mantienen concisos sin omitir ninguna limitación metodológica.",
    b1SynonymOrTrap:
      "Diferencia clave frente a 'short': 'concise' implica brevedad con precisión completa de contenido.",
    collocations: ["clear and concise", "a concise summary", "concise manner"],
    linkedDayNumbers: [12],
    primarySkill: "writing",
  },
  {
    id: "vocab-d12-discern",
    term: "discern",
    ipa: "/dɪˈsɜːn/",
    partOfSpeech: "verb",
    cefrLevel: "B2",
    meaningEs: "Discernir, distinguir o percibir con agudeza una diferencia o patrón sutil.",
    exampleEn:
      "Spectroscopic imaging enables conservators to discern underlying sketches beneath Renaissance oil paint.",
    exampleTranslationEs:
      "La imagenología espectroscópica permite a los restauradores discernir bocetos subyacentes bajo el óleo renacentista.",
    b1SynonymOrTrap:
      "Frecuente en preguntas de vocabulario en contexto de Reading Part 2 como sinónimo culto de 'detect / distinguish'.",
    collocations: ["discern a pattern", "discern between", "barely discernible"],
    linkedDayNumbers: [12],
    primarySkill: "reading",
  },

  // ================= DÍA 13 (B2) =================
  {
    id: "vocab-d13-inherently",
    term: "inherently",
    ipa: "/ɪnˈher.ənt.li/",
    partOfSpeech: "adverb",
    cefrLevel: "B2",
    meaningEs: "Intrínsecamente o por naturaleza propia e inseparable del fenómeno descrito.",
    exampleEn:
      "Predictive policing models are not inherently neutral because they train on historical arrest records.",
    exampleTranslationEs:
      "Los modelos policiales predictivos no son intrínsecamente neutrales porque entrenan con registros históricos de arrestos.",
    b1SynonymOrTrap:
      "Adverbio de altísimo valor para matizar adjetivos en Grammar Part 2 y debates abstractos de Speaking Part 2.",
    collocations: ["inherently flawed", "inherently subjective", "inherently risky"],
    linkedDayNumbers: [13],
    primarySkill: "speaking",
  },
  {
    id: "vocab-d13-discrepancy",
    term: "discrepancy",
    ipa: "/dɪˈskrep.ən.si/",
    partOfSpeech: "noun",
    cefrLevel: "B2",
    meaningEs:
      "Discrepancia o divergencia inesperada entre dos cifras, testimonios o mediciones que deberían coincidir.",
    exampleEn:
      "Lab technicians noticed a sharp discrepancy between satellite surface readings and buoy thermometers.",
    exampleTranslationEs:
      "Los técnicos de laboratorio notaron una marcada discrepancia entre las lecturas satelitales y los termómetros de boya.",
    b1SynonymOrTrap:
      "Vocablo recurrente en Listening Part 1 y Part 2 universitarios (notas, facturas, ediciones de libros, datos).",
    collocations: ["discrepancy between", "account for a discrepancy", "statistical discrepancy"],
    linkedDayNumbers: [13],
    primarySkill: "listening",
  },
  {
    id: "vocab-d13-account-for",
    term: "account for",
    ipa: "/əˈkaʊnt fɔːr/",
    partOfSpeech: "collocation",
    cefrLevel: "B2",
    meaningEs:
      "Doble uso académico crucial: (1) explicar la causa de un fenómeno; (2) representar una proporción estadística del total.",
    exampleEn:
      "Geothermal plants now account for nearly thirty percent of the island's residential electricity supply.",
    exampleTranslationEs:
      "Las plantas geotérmicas representan hoy casi el treinta por ciento del suministro eléctrico residencial de la isla.",
    b1SynonymOrTrap:
      "Uno de los verbos compuestos más evaluados en Reading académico tanto en cifras como en causalidad.",
    collocations: ["account for a majority of", "account for the decline", "fail to account for"],
    linkedDayNumbers: [13],
    primarySkill: "reading",
  },

  // ================= DÍA 14 — SIMULACRO #2 (B2) =================
  {
    id: "vocab-d14-substantiate",
    term: "substantiate",
    ipa: "/səbˈstæn.ʃi.eɪt/",
    partOfSpeech: "verb",
    cefrLevel: "B2",
    meaningEs:
      "Fundamentar o demostrar con pruebas concretas y verificables una afirmación o acusación.",
    exampleEn:
      "Journalists must substantiate every investigative claim with primary documents before publication.",
    exampleTranslationEs:
      "Los periodistas deben fundamentar cada afirmación investigativa con documentos primarios antes de publicar.",
    b1SynonymOrTrap: "Reemplaza el coloquial 'back up' en ensayos formales B2/C1.",
    collocations: [
      "substantiate a claim",
      "empirical substantiation",
      "unsubstantiated allegations",
    ],
    linkedDayNumbers: [14],
    primarySkill: "writing",
  },
  {
    id: "vocab-d14-compelling",
    term: "compelling",
    ipa: "/kəmˈpel.ɪŋ/",
    partOfSpeech: "adjective",
    cefrLevel: "B2",
    meaningEs:
      "Convincente, contundente y capaz de persuadir intelectualmente por la solidez de su lógica.",
    exampleEn:
      "Paleobotanists presented compelling fossil evidence that temperate rainforests once covered Antarctica.",
    exampleTranslationEs:
      "Los paleobotánicos presentaron evidencia fósil contundente de que bosques templados cubrieron alguna vez la Antártida.",
    b1SynonymOrTrap:
      "Eleva 'very convincing / strong argument' en Speaking y Writing sin sonar exagerado.",
    collocations: ["compelling evidence", "a compelling argument", "compelling reason"],
    linkedDayNumbers: [14],
    primarySkill: "speaking",
  },
  {
    id: "vocab-d14-implication",
    term: "implication",
    ipa: "/ˌɪm.plɪˈkeɪ.ʃən/",
    partOfSpeech: "noun",
    cefrLevel: "B2",
    meaningEs:
      "Implicación, consecuencia futura probable o conclusión implícita que se desprende de un hallazgo.",
    exampleEn:
      "Gene-editing breakthroughs carry profound ethical implications for hereditary disease prevention.",
    exampleTranslationEs:
      "Los avances en edición genética conllevan profundas implicaciones éticas para la prevención de enfermedades hereditarias.",
    b1SynonymOrTrap:
      "Palabra clave en enunciados iTEP ('What does the professor imply?' / 'far-reaching implications').",
    collocations: ["profound implications for", "practical implications", "policy implications"],
    linkedDayNumbers: [14],
    primarySkill: "reading",
  },

  // ================= DÍA 15 (B2) =================
  {
    id: "vocab-d15-resilient",
    term: "resilient",
    ipa: "/rɪˈzɪl.jənt/",
    partOfSpeech: "adjective",
    cefrLevel: "B2",
    meaningEs:
      "Resiliente o capaz de adaptarse y recuperarse rápidamente frente a perturbaciones o presión.",
    exampleEn:
      "Biodiverse wetlands remain far more resilient to storm surges than concrete coastal seawalls.",
    exampleTranslationEs:
      "Los humedales biodiversos siguen siendo mucho más resilientes ante marejadas ciclónicas que los muros costeros de concreto.",
    b1SynonymOrTrap:
      "Útil tanto para ecología/economía como para experiencias personales de Speaking Part 1 ('resilient to/against').",
    collocations: ["resilient infrastructure", "highly resilient to", "ecological resilience"],
    linkedDayNumbers: [15],
    primarySkill: "speaking",
  },
  {
    id: "vocab-d15-synthesize",
    term: "synthesize",
    ipa: "/ˈsɪn.θə.saɪz/",
    partOfSpeech: "verb",
    cefrLevel: "B2",
    meaningEs:
      "Sintetizar o integrar coherentemente información proveniente de múltiples fuentes o perspectivas.",
    exampleEn:
      "Doctoral candidates must synthesize conflicting historiographical schools rather than merely summarizing them.",
    exampleTranslationEs:
      "Los doctorandos deben sintetizar escuelas historiográficas contrapuestas en lugar de limitarse a resumirlas.",
    b1SynonymOrTrap:
      "Distingue 'summarize' (resumir una fuente) de 'synthesize' (combinar varias ideas en una visión articulada).",
    collocations: ["synthesize findings", "synthesize perspectives", "comparative synthesis"],
    linkedDayNumbers: [15],
    primarySkill: "reading",
  },
  {
    id: "vocab-d15-nonetheless",
    term: "nonetheless",
    ipa: "/ˌnʌn.ðəˈles/",
    partOfSpeech: "connector",
    cefrLevel: "B2",
    meaningEs:
      "No obstante o aun así; conector concesivo formal para reafirmar tu tesis tras reconocer un contraargumento.",
    exampleEn:
      "Initial battery recycling plants require heavy capital investment; nonetheless, they secure critical mineral supply.",
    exampleTranslationEs:
      "Las plantas iniciales de reciclaje de baterías exigen fuerte inversión de capital; no obstante, aseguran el suministro de minerales críticos.",
    b1SynonymOrTrap:
      "Alternativa elegante a 'but / still' para el párrafo de concesión en Writing Part 2.",
    collocations: ["; nonetheless,", "remain valid nonetheless", "nonetheless essential"],
    linkedDayNumbers: [15],
    primarySkill: "writing",
  },

  // ================= ANCLAS TRANSVERSALES A1–C2 (15 TARJETAS) =================
  // --- Nivel A1 (3) ---
  {
    id: "vocab-a1-attend",
    term: "attend",
    ipa: "/əˈtend/",
    partOfSpeech: "verb",
    cefrLevel: "A1",
    meaningEs:
      "Asistir o acudir presencial o virtualmente a una clase, seminario, reunión o conferencia.",
    exampleEn:
      "All first-year engineering students must attend the laboratory safety orientation on Monday morning.",
    exampleTranslationEs:
      "Todos los estudiantes de primer año de ingeniería deben asistir a la orientación de seguridad de laboratorio el lunes por la mañana.",
    b1SynonymOrTrap:
      "Falso amigo crítico: 'attend' significa ASISTIR (y es transitivo directo: 'attend a lecture', sin 'to'), no 'atender a un cliente'.",
    collocations: ["attend a lecture", "attend a conference", "mandatory attendance"],
    linkedDayNumbers: [1],
    primarySkill: "listening",
  },
  {
    id: "vocab-a1-schedule",
    term: "schedule",
    ipa: "/ˈʃed.juːl/",
    partOfSpeech: "noun",
    cefrLevel: "A1",
    meaningEs:
      "Horario, cronograma académico o programación de actividades; también verbo ('programar una cita').",
    exampleEn:
      "Please check the revised exam schedule posted outside the registrar's office before Friday.",
    exampleTranslationEs:
      "Por favor revisa el cronograma revisado de exámenes publicado afuera de registro académico antes del viernes.",
    b1SynonymOrTrap:
      "Atención auditiva iTEP Listening: se pronuncia /ˈskedʒ.uːl/ en inglés estadounidense y /ˈʃed.juːl/ en británico.",
    collocations: ["ahead of schedule", "academic schedule", "schedule an appointment"],
    linkedDayNumbers: [2],
    primarySkill: "listening",
  },
  {
    id: "vocab-a1-borrow",
    term: "borrow",
    ipa: "/ˈbɒr.əʊ/",
    partOfSpeech: "verb",
    cefrLevel: "A1",
    meaningEs:
      "Tomar prestado algo temporalmente de otra persona o institución (como la biblioteca universitaria).",
    exampleEn:
      "Graduate researchers may borrow reference journals from the archive for up to forty-eight hours.",
    exampleTranslationEs:
      "Los investigadores de posgrado pueden tomar prestadas revistas de consulta del archivo hasta por cuarenta y ocho horas.",
    b1SynonymOrTrap:
      "Contraste direccional básico evaluado en campus: 'borrow X FROM Y' (recibir prestado) vs. 'lend X TO Y' (dar prestado).",
    collocations: ["borrow from the library", "borrowing privileges", "borrow equipment"],
    linkedDayNumbers: [3],
    primarySkill: "grammar",
  },

  // --- Nivel A2 (3) ---
  {
    id: "vocab-a2-actual",
    term: "actual",
    ipa: "/ˈæk.tʃu.əl/",
    partOfSpeech: "adjective",
    cefrLevel: "A2",
    meaningEs:
      "Real, efectivo o exacto (en contraste con lo estimado o teórico); NUNCA significa 'actual / del presente'.",
    exampleEn:
      "The actual renovation cost exceeded the architect's initial estimate by nearly fifteen percent.",
    exampleTranslationEs:
      "El costo real de la renovación superó la estimación inicial del arquitecto en casi un quince por ciento.",
    b1SynonymOrTrap:
      "Falso amigo #1 para hispanohablantes: 'actual' = REAL/EFECTIVO; para decir 'actual (de hoy)' usa siempre 'current' o 'present'.",
    collocations: ["actual cost", "in actual fact", "actual performance"],
    linkedDayNumbers: [4],
    primarySkill: "reading",
  },
  {
    id: "vocab-a2-assist",
    term: "assist",
    ipa: "/əˈsɪst/",
    partOfSpeech: "verb",
    cefrLevel: "A2",
    meaningEs:
      "Ayudar, auxiliar o colaborar técnicamente con alguien en una tarea académica o profesional.",
    exampleEn:
      "Two senior lab assistants will assist visiting scholars with spectrometer calibration.",
    exampleTranslationEs:
      "Dos asistentes sénior de laboratorio ayudarán a los investigadores visitantes con la calibración del espectrómetro.",
    b1SynonymOrTrap:
      "Falso amigo opuesto a 'attend': 'assist' = AYUDAR ('assist someone WITH/IN something'), nunca 'asistir a un lugar'.",
    collocations: ["assist with research", "teaching assistant", "technical assistance"],
    linkedDayNumbers: [5],
    primarySkill: "writing",
  },
  {
    id: "vocab-a2-prevent",
    term: "prevent",
    ipa: "/prɪˈvent/",
    partOfSpeech: "verb",
    cefrLevel: "A2",
    meaningEs: "Impedir, evitar o prevenir que algo ocurra antes de que suceda.",
    exampleEn:
      "Proper ventilation systems prevent moisture buildup from damaging rare manuscripts in the vault.",
    exampleTranslationEs:
      "Los sistemas de ventilación adecuados impiden que la acumulación de humedad dañe los manuscritos raros en la bóveda.",
    b1SynonymOrTrap:
      "Patrón sintáctico clave en Grammar: 'prevent X FROM doing Y' (nunca 'prevent X to do Y').",
    collocations: ["prevent from happening", "preventive measures", "prevent contamination"],
    linkedDayNumbers: [6],
    primarySkill: "grammar",
  },

  // --- Nivel B1 (3) ---
  {
    id: "vocab-b1-sensible",
    term: "sensible",
    ipa: "/ˈsen.sə.bəl/",
    partOfSpeech: "adjective",
    cefrLevel: "B1",
    meaningEs: "Sensato, prudente y guiado por el buen juicio práctico.",
    exampleEn:
      "Backing up thesis datasets on two independent servers is a sensible precaution against hardware failure.",
    exampleTranslationEs:
      "Respaldar los datos de tesis en dos servidores independientes es una precaución sensata contra fallos de hardware.",
    b1SynonymOrTrap:
      "Falso amigo clásico: 'sensible' = SENSATO/PRUDENTE; para decir 'sensible (emocional o físicamente)' usa 'sensitive'.",
    collocations: ["a sensible decision", "sensible precaution", "sensible compromise"],
    linkedDayNumbers: [7],
    primarySkill: "speaking",
  },
  {
    id: "vocab-b1-eventually",
    term: "eventually",
    ipa: "/ɪˈven.tʃu.ə.li/",
    partOfSpeech: "adverb",
    cefrLevel: "B1",
    meaningEs: "Finalmente, a la larga o al cabo de un proceso prolongado o lleno de obstáculos.",
    exampleEn:
      "After three rejected prototypes, the robotics team eventually achieved stable underwater propulsion.",
    exampleTranslationEs:
      "Tras tres prototipos rechazados, el equipo de robótica finalmente logró una propulsión submarina estable.",
    b1SynonymOrTrap:
      "Falso amigo crítico: 'eventually' = FINALMENTE/CON EL TIEMPO (certeza), NO 'posiblemente / quizás' ('potentially' o 'possibly').",
    collocations: ["eventually lead to", "eventually succeed", "will eventually"],
    linkedDayNumbers: [9],
    primarySkill: "reading",
  },
  {
    id: "vocab-b1-feasible",
    term: "feasible",
    ipa: "/ˈfiː.zə.bəl/",
    partOfSpeech: "adjective",
    cefrLevel: "B1",
    meaningEs:
      "Factible o realizable con los medios técnicos, temporales y presupuestarios disponibles.",
    exampleEn:
      "Completing the archaeological survey before winter storms arrive remains technically feasible.",
    exampleTranslationEs:
      "Completar el levantamiento arqueológico antes de que lleguen las tormentas invernales sigue siendo técnicamente factible.",
    b1SynonymOrTrap:
      "Puente directo de B1 a B2: reemplaza 'doable / possible to do' en redacción formal.",
    collocations: ["technically feasible", "feasibility study", "financially feasible"],
    linkedDayNumbers: [10],
    primarySkill: "writing",
  },

  // --- Nivel C1 (3) ---
  {
    id: "vocab-c1-ubiquitous",
    term: "ubiquitous",
    ipa: "/juːˈbɪk.wɪ.təs/",
    partOfSpeech: "adjective",
    cefrLevel: "C1",
    meaningEs:
      "Ubicuo u omnipresente; tan extendido que parece encontrarse en todas partes simultáneamente.",
    exampleEn:
      "Microplastic fibers have become ubiquitous even in remote alpine snowpacks and deep-sea sediments.",
    exampleTranslationEs:
      "Las fibras de microplástico se han vuelto omnipresentes incluso en nieves alpinas remotas y sedimentos abisales.",
    b1SynonymOrTrap:
      "Sustituye 'everywhere / very common everywhere' proyectando vocabulario de nivel C1 inmediato en Writing y Reading.",
    collocations: ["become ubiquitous", "ubiquitous in modern society", "ubiquitous computing"],
    linkedDayNumbers: [8, 11],
    primarySkill: "reading",
  },
  {
    id: "vocab-c1-exacerbate",
    term: "exacerbate",
    ipa: "/ɪɡˈzæs.ə.beɪt/",
    partOfSpeech: "verb",
    cefrLevel: "C1",
    meaningEs:
      "Exacerbar, agravar o empeorar severamente una crisis, desigualdad o condición preexistente.",
    exampleEn:
      "Unregulated groundwater extraction threatens to exacerbate seasonal land subsidence across the valley.",
    exampleTranslationEs:
      "La extracción no regulada de agua subterránea amenaza con agravar el hundimiento estacional del suelo en todo el valle.",
    b1SynonymOrTrap:
      "Antónimo funcional de 'mitigate'; reemplaza 'make much worse' con máxima precisión académica.",
    collocations: ["exacerbate inequalities", "further exacerbate", "exacerbate tensions"],
    linkedDayNumbers: [12],
    primarySkill: "writing",
  },
  {
    id: "vocab-c1-notwithstanding",
    term: "notwithstanding",
    ipa: "/ˌnɒt.wɪðˈstæn.dɪŋ/",
    partOfSpeech: "connector",
    cefrLevel: "C1",
    meaningEs:
      "A pesar de o sin perjuicio de; preposición/conector de registro jurídico-académico superior (puede ir antes o después del sintagma nominal).",
    exampleEn:
      "Notwithstanding initial skepticism from peer reviewers, the replication trial confirmed the enzyme's stability.",
    exampleTranslationEs:
      "A pesar del escepticismo inicial de los revisores, el ensayo de replicación confirmó la estabilidad de la enzima.",
    b1SynonymOrTrap:
      "Equivale a 'despite / in spite of' sin llevar jamás la preposición 'of' ('notwithstanding X' o 'X notwithstanding').",
    collocations: ["notwithstanding these limitations", "evidence to the contrary notwithstanding"],
    linkedDayNumbers: [13],
    primarySkill: "grammar",
  },

  // --- Nivel C2 (3) ---
  {
    id: "vocab-c2-tantamount-to",
    term: "tantamount to",
    ipa: "/ˈtæn.tə.maʊnt tuː/",
    partOfSpeech: "collocation",
    cefrLevel: "C2",
    meaningEs:
      "Equivalente en la práctica o en sus efectos reales a algo grave (seguido de sustantivo o gerundio `-ing`).",
    exampleEn:
      "Suppressing negative clinical trial results is tantamount to distorting medical consensus.",
    exampleTranslationEs:
      "Ocultar resultados negativos de ensayos clínicos equivale en la práctica a distorsionar el consenso médico.",
    b1SynonymOrTrap:
      "Expresión C2 de alto impacto retórico; recuerda que 'to' aquí es preposición ('tantamount to + -ing').",
    collocations: ["tantamount to admitting", "tantamount to censorship", "be tantamount to"],
    linkedDayNumbers: [14],
    primarySkill: "writing",
  },
  {
    id: "vocab-c2-unequivocal",
    term: "unequivocal",
    ipa: "/ˌʌn.ɪˈkwɪv.ə.kəl/",
    partOfSpeech: "adjective",
    cefrLevel: "C2",
    meaningEs: "Inequívoco, categórico y libre de toda duda o ambigüedad interpretativa.",
    exampleEn:
      "Ice-core atmospheric records provide unequivocal proof of rapid greenhouse-gas accumulation.",
    exampleTranslationEs:
      "Los registros atmosféricos de núcleos de hielo aportan prueba inequívoca de la rápida acumulación de gases de efecto invernadero.",
    b1SynonymOrTrap:
      "Antónimo directo de 'ambiguous'; eleva '100% clear / undeniable' a prosa académica superior.",
    collocations: ["unequivocal evidence", "unequivocal support", "state unequivocally"],
    linkedDayNumbers: [14, 15],
    primarySkill: "reading",
  },
  {
    id: "vocab-c2-dichotomy",
    term: "dichotomy",
    ipa: "/daɪˈkɒt.ə.mi/",
    partOfSpeech: "noun",
    cefrLevel: "C2",
    meaningEs:
      "Dicotomía o división tajante entre dos conceptos que suelen presentarse como mutuamente excluyentes.",
    exampleEn:
      "Framing economic growth and environmental conservation as a rigid dichotomy ignores clean-energy innovation.",
    exampleTranslationEs:
      "Plantear el crecimiento económico y la conservación ambiental como una dicotomía rígida ignora la innovación en energías limpias.",
    b1SynonymOrTrap:
      "Herramienta brillante para Speaking Part 2 y Writing Part 2 al desmontar dilemas simplistas ('a false dichotomy').",
    collocations: ["a false dichotomy", "dichotomy between", "reject the dichotomy"],
    linkedDayNumbers: [15],
    primarySkill: "speaking",
  },
];

export const coreVocabulary: readonly CuratedVocabularyItem[] = RAW_CORE_VOCABULARY.map(
  (seed, idx) => buildCuratedVocabularyItem(seed, idx),
);
