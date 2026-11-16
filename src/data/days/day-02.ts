import type { RoadmapDay } from "../../schemas/curriculum.schema.ts";

export const day02: RoadmapDay = {
  dayNumber: 2,
  sprintNumber: 1,
  cefrLevel: "B2",
  title: "Unreal Conditionals, Mixed Hypotheticals & Academic Register",
  subtitleEs:
    "Condicionales irreales, hipótesis mixtas (pasado→presente), inversiones formales y conectores restrictivos",
  b2FocusSummaryEs:
    "En iTEP Academic-Plus, la frontera entre B1 y B2 se vuelve evidente al razonar sobre escenarios contrafactuales y condiciones estrictas: tercer condicional, condicionales mixtos que conectan causas pasadas con efectos actuales, inversiones formales sin 'if' ('Had the committee approved...', 'Were the agency to...'), estructuras con 'wish / if only' y conectores restrictivos ('unless', 'provided that', 'as long as', 'only if'). Dominar esta arquitectura te blindará contra las trampas más frecuentes de Grammar, te permitirá captar requisitos condicionales en Listening y elevará la sofisticación argumentativa de tu Writing y Speaking.",
  estimatedMinutes: 135,
  isMockExamDay: false,
  sections: {
    // =========================================================================
    // 1. GRAMMAR (25 min study / 8 min official pace for 10 items)
    // =========================================================================
    grammar: {
      skill: "grammar",
      cefrLevel: "B2",
      title: "Counterfactual Conditionals, Formal Inversion & Restrictive Connectors",
      estimatedMinutes: 25,
      timeLimitSeconds: 480,
      focusSummaryEs:
        "Rastrea primero el marco temporal de cada cláusula antes de elegir el auxiliar: jamás uses 'would' dentro de la cláusula condicional, distingue entre consecuencia pasada ('would have + V3') y presente ('would + verbo base / be -ing'), y reconoce las inversiones formales que omiten 'if' ('Had...', 'Were...', 'Should...').",
      questions: [
        {
          part: "part1_fill_blank",
          id: "d02-gram-p1-q01",
          cefrLevel: "B2",
          grammarTopic: "Inverted Third Conditional (Omitting If)",
          sentenceWithBlank:
            "_____ the municipal water authority replaced the aging filtration membranes five years ago, last month's manganese contamination alert could have been averted.",
          options: [
            {
              id: "A",
              text: "If had",
              explanationEs:
                "Incorrecto: al invertir el auxiliar 'had' delante del sujeto, la conjunción 'if' debe eliminarse obligatoriamente; combinar ambos ('*If had the authority...') es agramatical.",
            },
            {
              id: "B",
              text: "Had",
              explanationEs:
                "Correcto: inversión formal de tercer condicional ('Had + sujeto + participio pasado'), equivalente en registro académico a 'If the municipal water authority had replaced...'.",
            },
            {
              id: "C",
              text: "Were",
              explanationEs:
                "Incorrecto: la inversión con 'Were' exige infinitivo con 'to' ('Were the authority to replace...') para hipótesis presentes o futuras, no un participio pasado con marcador de hace cinco años.",
            },
            {
              id: "D",
              text: "Should",
              explanationEs:
                "Incorrecto: la inversión con 'Should' introduce condiciones posibles en presente o futuro seguida de verbo base ('Should the authority replace...'), incompatible con 'five years ago' y 'could have been averted'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Si el espacio inicial precede directamente a 'sujeto + participio pasado' y la cláusula principal lleva 'would/could have + participio', selecciona 'Had' (inversión de 3er condicional sin 'if').",
        },
        {
          part: "part1_fill_blank",
          id: "d02-gram-p1-q02",
          cefrLevel: "B2",
          grammarTopic: "Mixed Conditional (Past Counterfactual Cause -> Present Result)",
          sentenceWithBlank:
            "If the pharmacology research team had secured ethics board clearance in September, they _____ phase-two clinical data right now instead of revising consent forms.",
          options: [
            {
              id: "A",
              text: "would be analyzing",
              explanationEs:
                "Correcto: condicional mixto (causa contrafactual pasada 'had secured' -> resultado continuo irreal en el presente 'would be analyzing'), exigido por el marcador temporal 'right now'.",
            },
            {
              id: "B",
              text: "would have analyzed",
              explanationEs:
                "Incorrecto: trampa mecánica de tercer condicional puro; 'would have analyzed' sitúa la acción como terminada en el pasado y choca con 'right now instead of revising'.",
            },
            {
              id: "C",
              text: "will analyze",
              explanationEs:
                "Incorrecto: 'will' expresa certeza futura real (primer condicional), incompatible con una condición pasada irreal ('had secured') que no ocurrió en septiembre.",
            },
            {
              id: "D",
              text: "had been analyzing",
              explanationEs:
                "Incorrecto: carece del verbo modal ('would/could/might') indispensable en la apódosis o cláusula de resultado de una hipótesis contrafactual.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "No completes por inercia un 'If + had + V3' con 'would have + V3': busca marcadores de presente al final de la oración ('now', 'today', 'currently') que obliguen a usar un condicional mixto ('would + base / would be -ing').",
        },
        {
          part: "part1_fill_blank",
          id: "d02-gram-p1-q03",
          cefrLevel: "B2",
          grammarTopic: "Restrictive Conditional Conjunctions (Provided that vs. Unless)",
          sentenceWithBlank:
            "Visiting doctoral fellows may operate the cryogenic electron microscope after hours _____ they have completed the mandatory radiation safety certification.",
          options: [
            {
              id: "A",
              text: "unless",
              explanationEs:
                "Incorrecto: 'unless' equivale a 'except if'; diría absurdamente que pueden operar el microscopio salvo que hayan completado la certificación obligatoria de seguridad.",
            },
            {
              id: "B",
              text: "despite",
              explanationEs:
                "Incorrecto: 'despite' es una preposición concesiva que exige un sintagma nominal o gerundio ('despite completing'), jamás una cláusula finita con sujeto y verbo ('they have completed').",
            },
            {
              id: "C",
              text: "provided that",
              explanationEs:
                "Correcto: conjunción condicional restrictiva de registro formal ('siempre y cuando / a condición de que') que introduce un requisito indispensable mediante cláusula completa.",
            },
            {
              id: "D",
              text: "otherwise",
              explanationEs:
                "Incorrecto: 'otherwise' es un adverbio conjuntivo ('de lo contrario'), no una conjunción subordinante condicional, y además invertiría la lógica de autorización.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Sustituye mentalmente 'unless' por 'except if' y 'provided that / as long as' por 'only on condition that' para verificar que la lógica regulatoria de la oración no quede invertida.",
        },
        {
          part: "part1_fill_blank",
          id: "d02-gram-p1-q04",
          cefrLevel: "B2",
          grammarTopic: "Counterfactual Past Regret with Wish",
          sentenceWithBlank:
            "Several metropolitan planners now wish the transit commission _____ dedicated bus rapid-transit lanes before commercial land values doubled along the avenue.",
          options: [
            {
              id: "A",
              text: "reserved",
              explanationEs:
                "Incorrecto: tras 'wish', el Past Simple expresa un deseo contrafactual sobre el presente, pero la cláusula 'before commercial land values doubled' ancla el hecho en un pasado irreversible.",
            },
            {
              id: "B",
              text: "would reserve",
              explanationEs:
                "Incorrecto: 'wish + would' proyecta queja o deseo de cambio hacia el futuro, por lo que no puede referirse a una oportunidad previa a que los terrenos se duplicaran en el pasado.",
            },
            {
              id: "C",
              text: "has reserved",
              explanationEs:
                "Incorrecto: el verbo 'wish' exige retroceso modal ('backshift') para marcar irrealidad; jamás admite tiempos de indicativo presente como Present Perfect.",
            },
            {
              id: "D",
              text: "had reserved",
              explanationEs:
                "Correcto: 'wish + Past Perfect' ('had reserved') expresa arrepentimiento o lamento actual ('now wish') respecto a una decisión que no se tomó en el pasado.",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Con 'wish' o 'if only', aplica siempre un paso atrás en el tiempo: deseo irreal en el presente -> Past Simple ('knew / were'); lamento sobre el pasado -> Past Perfect ('had reserved').",
        },
        {
          part: "part1_fill_blank",
          id: "d02-gram-p1-q05",
          cefrLevel: "B2",
          grammarTopic: "Inverted Second Conditional (Were + Subject + to-infinitive)",
          sentenceWithBlank:
            "_____ major shipping lines to reroute container vessels around the southern cape indefinitely, global maritime freight rates would rise by nearly twenty percent.",
          options: [
            {
              id: "A",
              text: "Were",
              explanationEs:
                "Correcto: inversión formal de segundo condicional ('Were + sujeto + to + verbo base'), utilizada en prosa económica y jurídica para plantear escenarios futuros improbables o tentativos.",
            },
            {
              id: "B",
              text: "Had",
              explanationEs:
                "Incorrecto: la inversión condicional con 'Had' requiere participio pasado ('Had major shipping lines rerouted...'), no un infinitivo con 'to' ('to reroute').",
            },
            {
              id: "C",
              text: "If were",
              explanationEs:
                "Incorrecto: secuencia sintácticamente inválida; o se usa orden normal con conjunción ('If major shipping lines were to reroute...') o inversión pura sin 'if' ('Were major shipping lines to reroute...').",
            },
            {
              id: "D",
              text: "Should",
              explanationEs:
                "Incorrecto: la inversión con 'Should' va seguida de infinitivo sin 'to' ('Should major shipping lines reroute...'), por lo que choca gramaticalmente con 'to reroute'.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Memoriza la firma morfológica de las 3 inversiones condicionales sin 'if': 'Should + S + base', 'Were + S + to + base' y 'Had + S + participio pasado'.",
        },
        {
          part: "part2_error_identification",
          id: "d02-gram-p2-q06",
          cefrLevel: "B2",
          grammarTopic: "Prohibition of Would Have Inside If-Clauses",
          sentenceWithMarkedSegments:
            "If the paleobotany expedition [A]{would have documented} soil salinity levels [B]{at each excavation trench}, researchers [C]{could reconstruct} the basin's ancient drought cycles [D]{with far greater precision} today.",
          correctedSegment: "had documented",
          options: [
            {
              id: "A",
              text: "would have documented",
              explanationEs:
                "Incorrecto (contiene el error): en inglés académico estándar está estrictamente prohibido usar 'would have + participio' dentro de la prótasis introducida por 'If'; debe emplearse Past Perfect: 'had documented'.",
            },
            {
              id: "B",
              text: "at each excavation trench",
              explanationEs:
                "Correcto en la oración: 'each' va seguido adecuadamente por un sustantivo contable en singular ('excavation trench').",
            },
            {
              id: "C",
              text: "could reconstruct",
              explanationEs:
                "Correcto en la oración: forma el resultado presente de un condicional mixto ('could reconstruct ... today') derivado de la omisión pasada.",
            },
            {
              id: "D",
              text: "with far greater precision",
              explanationEs:
                "Correcto en la oración: el intensificador 'far' modifica de forma idiomática y formal al comparativo 'greater'.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "En iTEP Part 2, cada vez que veas 'If + sujeto + would / would have', márcalo sin dudar: la cláusula con 'if' exige tiempo verbal simple o perfecto ('had documented'), nunca auxiliar condicional.",
        },
        {
          part: "part2_error_identification",
          id: "d02-gram-p2-q07",
          cefrLevel: "B2",
          grammarTopic: "Avoiding Double Negation After Unless",
          sentenceWithMarkedSegments:
            "The accreditation council [A]{will withhold} institutional renewal [B]{unless} the engineering faculty [C]{does not submit} an audited laboratory safety report [D]{by November 30}.",
          correctedSegment: "submits",
          options: [
            {
              id: "A",
              text: "will withhold",
              explanationEs:
                "Correcto en la oración: cláusula matriz de futuro real apropiada para una advertencia administrativa formal.",
            },
            {
              id: "B",
              text: "unless",
              explanationEs:
                "Correcto en la oración: conector condicional negativo ('a menos que') perfectamente ubicado para introducir la única excepción al bloqueo.",
            },
            {
              id: "C",
              text: "does not submit",
              explanationEs:
                "Incorrecto (contiene el error): dado que 'unless' ya contiene negación semántica ('if ... not'), añadir 'does not submit' crea una doble negación ilógica; requiere verbo afirmativo en presente: 'submits'.",
            },
            {
              id: "D",
              text: "by November 30",
              explanationEs:
                "Correcto en la oración: la preposición 'by' indica con exactitud fecha límite ('a más tardar el 30 de noviembre').",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Recuerda que 'unless' ya incluye el 'not': nunca aceptes una negación verbal ('don't / doesn't / didn't') dentro de la misma cláusula gobernada por 'unless'.",
        },
        {
          part: "part2_error_identification",
          id: "d02-gram-p2-q08",
          cefrLevel: "B2",
          grammarTopic: "Main-Clause Inversion After Initial Only If",
          sentenceWithMarkedSegments:
            "Only if independent replication trials [A]{confirm} the initial superconductivity measurements [B]{the journal's editorial board will} authorize [C]{accelerated publication} [D]{next quarter}.",
          correctedSegment: "will the journal's editorial board",
          options: [
            {
              id: "A",
              text: "confirm",
              explanationEs:
                "Correcto en la oración: dentro de la cláusula subordinada encabezada por 'Only if', el verbo permanece en Present Simple con orden normal sin inversión.",
            },
            {
              id: "B",
              text: "the journal's editorial board will",
              explanationEs:
                "Incorrecto (contiene el error): cuando 'Only if + cláusula subordinada' abre la oración, la cláusula principal exige inversión sujeto-auxiliar obligatoria: 'will the journal's editorial board'.",
            },
            {
              id: "C",
              text: "accelerated publication",
              explanationEs:
                "Correcto en la oración: adjetivo participial 'accelerated' que califica con precisión al sustantivo abstracto 'publication'.",
            },
            {
              id: "D",
              text: "next quarter",
              explanationEs:
                "Correcto en la oración: expresión temporal futura de registro económico y editorial que no requiere preposición.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "¡Cuidado dónde inviertes con 'Only if' inicial! NO inviertas el primer verbo (el de la condición); invierte el auxiliar de la SEGUNDA cláusula (la cláusula principal).",
        },
        {
          part: "part2_error_identification",
          id: "d02-gram-p2-q09",
          cefrLevel: "B2",
          grammarTopic: "Present Tense Requirement After As Long As / Provided That",
          sentenceWithMarkedSegments:
            "The university archives [A]{will grant} external historians digital reproduction rights [B]{as long as} the resulting monograph [C]{will remain} freely accessible [D]{through an open-access repository}.",
          correctedSegment: "remains",
          options: [
            {
              id: "A",
              text: "will grant",
              explanationEs:
                "Correcto en la oración: el futuro con 'will' pertenece legítimamente a la cláusula matriz de resultado.",
            },
            {
              id: "B",
              text: "as long as",
              explanationEs:
                "Correcto en la oración: conjunción condicional restrictiva ('siempre que') equivalente a 'provided that'.",
            },
            {
              id: "C",
              text: "will remain",
              explanationEs:
                "Incorrecto (contiene el error): en cláusulas subordinadas condicionales y temporales ('if', 'unless', 'as long as', 'provided that') con referencia futura se emplea Present Simple ('remains'), nunca 'will remain'.",
            },
            {
              id: "D",
              text: "through an open-access repository",
              explanationEs:
                "Correcto en la oración: sintagma preposicional de medio correctamente formado con adjetivo compuesto con guion ('open-access').",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Trata a 'as long as', 'provided that', 'in case' y 'unless' exactamente igual que a 'if' o 'when': si expresan condición futura, su verbo va en Present Simple, jamás con 'will'.",
        },
        {
          part: "part2_error_identification",
          id: "d02-gram-p2-q10",
          cefrLevel: "B2",
          grammarTopic: "Mixed Conditional (Timeless Property -> Past Consequence)",
          sentenceWithMarkedSegments:
            "If titanium alloys [A]{were not} exceptionally resistant [B]{to saltwater corrosion}, deep-sea oceanographic submersibles [C]{could never withstand} the extreme pressures [D]{recorded during} the 1960 Mariana Trench expedition.",
          correctedSegment: "could never have withstood",
          options: [
            {
              id: "A",
              text: "were not",
              explanationEs:
                "Correcto en la oración: el subjuntivo pasado 'were not' expresa correctamente la negación hipotética de una propiedad física permanente del titanio.",
            },
            {
              id: "B",
              text: "to saltwater corrosion",
              explanationEs:
                "Correcto en la oración: el adjetivo 'resistant' rige obligatoriamente la preposición 'to'.",
            },
            {
              id: "C",
              text: "could never withstand",
              explanationEs:
                "Incorrecto (contiene el error): dado que la consecuencia se refiere a un evento histórico concluido ('the 1960 Mariana Trench expedition'), el resultado exige modal perfecto: 'could never have withstood'.",
            },
            {
              id: "D",
              text: "recorded during",
              explanationEs:
                "Correcto en la oración: cláusula relativa pasiva reducida ('[which were] recorded during') que modifica a 'pressures'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Existe un segundo condicional mixto inverso muy evaluado en B2: propiedad científica permanente ('If X were not...') + evento histórico fechado ('in 1960') = modal perfecto en el resultado ('could/would have + participio').",
        },
      ],
    },

    // =========================================================================
    // 2. LISTENING (35 min study / strict single-play simulation)
    // =========================================================================
    listening: {
      skill: "listening",
      cefrLevel: "B2",
      title: "Conditional Restrictions, Exchange Scholarship Advising & Behavioral Economics",
      estimatedMinutes: 35,
      timeLimitSeconds: 900,
      focusSummaryEs:
        "Afina el oído para captar estructuras condicionales habladas ('Had Delft announced...', 'unless the host department certifies...', 'provided that you upload...'): en iTEP Listening definen exactamente qué opción administrativa sigue abierta y cuál ya quedó descartada.",
      items: [
        {
          part: "part1_short_dialogue",
          id: "d02-list-p1",
          title: "Symposium Auditorium Audiovisual Request",
          cefrLevel: "B2",
          audio: {
            trackId: "day02-listening-p1",
            audioUrl: "/audio/day02-listening-p1.mp3",
            contextSetup:
              "A graduate teaching assistant speaks with the campus events coordinator about Friday's visiting speaker colloquium.",
            turns: [
              {
                speakerLabel: "Teaching Assistant",
                voice: "en-US-GuyNeural",
                text: "Hi Nora. Dr. Patel just asked whether we can record Friday's econometrics lecture in Hall B using the dual-camera lecture-capture rig.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-US-JennyNeural",
                text: "Oh, I wish you'd let me know earlier. Had your department submitted a media-tech request before Tuesday's cutoff, our crew could have reserved the mobile cameras, which are now booked for the medical school symposium.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Teaching Assistant",
                voice: "en-US-GuyNeural",
                text: "Is there any way to capture her slides and audio at least?",
                pauseAfterMs: 400,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-US-JennyNeural",
                text: "Provided that she runs her presentation from the built-in podium desktop rather than her personal laptop, the automated ceiling feed will record both her screen and the lapel microphone.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d02-list-p1-q01",
              prompt: "What must happen for Dr. Patel's lecture to be recorded on Friday?",
              options: [
                {
                  id: "A",
                  text: "The teaching assistant must borrow a mobile camera rig from the medical school.",
                  explanationEs:
                    "Incorrecto: las cámaras móviles ya están reservadas para el simposio de medicina y no están disponibles.",
                },
                {
                  id: "B",
                  text: "Dr. Patel must present using the auditorium's integrated podium computer.",
                  explanationEs:
                    "Correcto: la coordinadora establece con 'Provided that...' que el sistema automático grabará pantalla y micrófono siempre y cuando use la computadora integrada del podio en vez de su portátil.",
                },
                {
                  id: "C",
                  text: "The department must file a late audiovisual waiver before Tuesday afternoon.",
                  explanationEs:
                    "Incorrecto: el martes fue la fecha límite pasada ('Had your department submitted ... before Tuesday's cutoff'), como indica el tercer condicional invertido.",
                },
                {
                  id: "D",
                  text: "The lecture must be relocated from Hall B to a smaller media studio.",
                  explanationEs:
                    "Incorrecto: en ningún momento se propone cambiar de salón; Hall B ya cuenta con grabación automática en el podio.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "Distingue de inmediato entre lo que ya se perdió (tercer condicional: 'Had your department submitted... could have reserved') y la solución viable condicionada ('Provided that she runs...').",
        },
        {
          part: "part2_conversation",
          id: "d02-list-p2",
          title: "International Exchange Mobility Stipend Advising",
          cefrLevel: "B2",
          audio: {
            trackId: "day02-listening-p2",
            audioUrl: "/audio/day02-listening-p2.mp3",
            contextSetup:
              "An undergraduate civil engineering student meets with an advisor in the Office of Global Programs about her upcoming semester exchange scholarship.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Good afternoon, Mr. Hawthorne. Thanks for seeing me on such short notice—I just received an urgent course update from Delft University of Technology for my autumn exchange.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Advisor",
                voice: "en-GB-RyanNeural",
                text: "Come on in, Elena. Congratulations again on winning the Global Mobility Stipend last month. What happened with your Delft course schedule?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Their civil engineering faculty emailed this morning to say that Urban Flood Modeling was canceled because the lead professor took emergency medical leave. That drops my approved autumn load from sixteen transfer credits down to twelve.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Advisor",
                voice: "en-GB-RyanNeural",
                text: "I see why you rushed over. Our stipend terms stipulate that recipients retain full funding only if they stay enrolled in at least fifteen transferable degree credits abroad.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Exactly! Had Delft announced that cancellation three weeks ago, I would have registered for their Coastal Estuarine Seminar, which still had seats back then. Now every upper-level water resources elective at Delft is completely capped.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Advisor",
                voice: "en-GB-RyanNeural",
                text: "Take a breath—your stipend isn't lost. The scholarship committee won't reduce an award unless a student voluntarily drops below fifteen credits without academic cause. Still, you do need fifteen credits if you want to graduate on schedule next spring.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Definitely. If I fell behind by a course now, I'd have to stay an extra summer term. Are there any hybrid options?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Advisor",
                voice: "en-GB-RyanNeural",
                text: "Under our bilateral engineering agreement, you can add a three-credit Directed Comparative Research module co-supervised remotely by your home faculty advisor here, provided that you attach Delft's official cancellation notice and submit a revised Learning Agreement by Monday at noon.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "That solves both problems! Professor Morales is already advising my senior capstone on stormwater basins, so I'll visit her office hours right now to draft the research scope before Monday's deadline.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d02-list-p2-q01",
              prompt: "Why is Elena worried about her Global Mobility Stipend?",
              options: [
                {
                  id: "A",
                  text: "Her visa appointment for the Netherlands was postponed until after classes begin.",
                  explanationEs:
                    "Incorrecto: en ningún momento de la asesoría se mencionan trámites consulares ni demoras de visado.",
                },
                {
                  id: "B",
                  text: "A sudden course cancellation at the host university reduced her planned credit total below the scholarship threshold.",
                  explanationEs:
                    "Correcto: la cancelación de Urban Flood Modeling redujo su carga de 16 a 12 créditos, por debajo del mínimo de 15 créditos exigido por la beca de movilidad.",
                },
                {
                  id: "C",
                  text: "Her home engineering department refused to recognize credits from Delft University of Technology.",
                  explanationEs:
                    "Incorrecto: existe un convenio bilateral activo y sus créditos ya estaban aprobados previamente.",
                },
                {
                  id: "D",
                  text: "She missed last month's deadline to accept the Global Mobility Stipend.",
                  explanationEs:
                    "Incorrecto: el asesor la felicita al inicio por haber ganado ya la beca el mes pasado.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d02-list-p2-q02",
              prompt: "Why was Elena unable to enroll in the Coastal Estuarine Seminar at Delft?",
              options: [
                {
                  id: "A",
                  text: "She had not completed the fluid mechanics prerequisite required by Delft.",
                  explanationEs:
                    "Incorrecto: no se menciona ningún prerrequisito incumplido para ese seminario.",
                },
                {
                  id: "B",
                  text: "The seminar is restricted exclusively to master's degree candidates.",
                  explanationEs:
                    "Incorrecto: Elena indica que habría podido inscribirse hace tres semanas cuando aún quedaban cupos.",
                },
                {
                  id: "C",
                  text: "All seats filled up before she learned that Urban Flood Modeling had been canceled.",
                  explanationEs:
                    "Correcto: usa un tercer condicional invertido ('Had Delft announced that cancellation three weeks ago, I would have registered...') para explicar que ahora todos los cupos están llenos ('completely capped').",
                },
                {
                  id: "D",
                  text: "Its lecture schedule conflicted with her senior capstone project.",
                  explanationEs:
                    "Incorrecto: el proyecto terminal lo asesora la profesora Morales en su universidad de origen, no era un choque de horario en Delft.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d02-list-p2-q03",
              prompt:
                "What does Mr. Hawthorne clarify regarding the scholarship committee's policy?",
              options: [
                {
                  id: "A",
                  text: "Funding is penalized only when a student voluntarily drops below fifteen credits without institutional cause.",
                  explanationEs:
                    "Correcto: explica con 'unless' ('won't reduce an award unless a student voluntarily drops below fifteen credits without academic cause') que una cancelación imprevista no anula la beca.",
                },
                {
                  id: "B",
                  text: "Students may transfer scholarship funds to a summer term if an autumn course is canceled.",
                  explanationEs:
                    "Incorrecto: Elena menciona el verano como una demora indeseada de graduación que quiere evitar, no como transferencia de beca.",
                },
                {
                  id: "C",
                  text: "Exchange recipients must audit two non-credit Dutch language seminars to maintain eligibility.",
                  explanationEs:
                    "Incorrecto: no existe referencia alguna a cursos de idioma neerlandés en la conversación.",
                },
                {
                  id: "D",
                  text: "Remote supervision by home-campus faculty is prohibited during an international exchange.",
                  explanationEs:
                    "Incorrecto: contradice directamente la solución propuesta bajo el acuerdo bilateral de ingeniería.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d02-list-p2-q04",
              prompt: "What must Elena submit by Monday at noon to finalize the solution?",
              options: [
                {
                  id: "A",
                  text: "A tuition refund petition signed by the dean of Delft's engineering faculty",
                  explanationEs:
                    "Incorrecto: no necesita gestionar reembolsos de matrícula, sino reemplazar los tres créditos faltantes.",
                },
                {
                  id: "B",
                  text: "An updated Learning Agreement accompanied by Delft's official course-cancellation notice",
                  explanationEs:
                    "Correcto: el asesor condiciona el módulo de investigación dirigida ('provided that you attach Delft's official cancellation notice and submit a revised Learning Agreement by Monday at noon').",
                },
                {
                  id: "C",
                  text: "A completed thirty-page comparative paper on European stormwater basins",
                  explanationEs:
                    "Incorrecto: apenas redactará el alcance ('draft the research scope') con la profesora Morales para inscribir el módulo de otoño.",
                },
                {
                  id: "D",
                  text: "A formal appeal asking Delft to reopen enrollment in the Coastal Estuarine Seminar",
                  explanationEs:
                    "Incorrecto: en lugar de pedir sobrecupo en Delft, optan por el módulo de investigación comparada de tres créditos.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "En asesorías de becas o intercambio, distingue entre la regla general ('only if they stay enrolled in 15 credits'), la cláusula de excepción ('unless a student voluntarily drops...') y la condición documental con plazo ('provided that... by Monday at noon').",
        },
        {
          part: "part3_lecture",
          id: "d02-list-p3",
          title: "Behavioral Economics: Loss Aversion, the Endowment Effect & Choice Architecture",
          cefrLevel: "B2",
          audio: {
            trackId: "day02-listening-p3",
            audioUrl: "/audio/day02-listening-p3.mp3",
            contextSetup:
              "A professor delivers an undergraduate lecture in a behavioral economics course.",
            turns: [
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Welcome back. Today we're shifting from neoclassical microeconomics to behavioral economics, examining why consumers systematically deviate from rational utility models. Had traditional theory been entirely accurate, people possessing identical information would weigh financial gains and equivalent losses symmetrically.",
                pauseAfterMs: 700,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Yet psychologists Daniel Kahneman and Amos Tversky demonstrated under Prospect Theory that human valuation is strikingly asymmetrical. Through lottery trials, they identified loss aversion: losing one hundred dollars generates roughly twice as much psychological distress as winning that same hundred dollars produces satisfaction.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Loss aversion explains a market anomaly called the endowment effect. In a classic campus experiment, half the seminar students were randomly gifted a university coffee mug, while the rest received none. Mug owners demanded nearly seven dollars to sell, whereas non-owners offered only three dollars and fifty cents—even though ownership had lasted barely ten minutes.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Once individuals view an item as theirs, giving it up registers as a painful loss rather than a neutral trade. Outside the lab, that same bias reinforces status-quo inertia in employee retirement plans.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Historically, corporations offered generous retirement matching only if new hires actively completed opt-in paperwork, and participation lingered below fifty percent. When economists redesigned the choice architecture—enrolling hires automatically while allowing penalty-free opt-outs—participation surged near ninety percent, with zero change in tax incentives.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Still, default nudges require careful calibration. If an employer sets the automatic savings rate at a minimal two percent, passive workers remain anchored at that insufficient figure for years unless automatic annual escalation is built into the contract.",
                pauseAfterMs: 650,
              },
            ],
          },
          questions: [
            {
              id: "d02-list-p3-q01",
              prompt: "What is the central theme of the lecture?",
              options: [
                {
                  id: "A",
                  text: "How psychological asymmetry toward losses shapes economic valuation, inertia, and policy design",
                  explanationEs:
                    "Correcto: abarca todo el hilo argumental de la clase: aversión a la pérdida, efecto dotación, sesgo de statu quo en pensiones y diseño de opciones por defecto ('choice architecture').",
                },
                {
                  id: "B",
                  text: "Why corporate tax incentives are more effective than automatic enrollment in boosting savings",
                  explanationEs:
                    "Incorrecto: la clase demuestra exactamente lo contrario: la participación subió a casi 90 % sin cambiar en absoluto los incentivos fiscales.",
                },
                {
                  id: "C",
                  text: "How university bookstores calculate retail markups for branded campus merchandise",
                  explanationEs:
                    "Incorrecto: la taza universitaria se emplea únicamente como experimento controlado para medir el efecto dotación.",
                },
                {
                  id: "D",
                  text: "Why neoclassical utility theory predicts irrational panic during stock-market downturns",
                  explanationEs:
                    "Incorrecto: la teoría neoclásica asumía valoración racional y simétrica; fue la economía conductual la que documentó la asimetría.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d02-list-p3-q02",
              prompt:
                "According to the professor, what would classical economic theory predict about a hundred-dollar gain versus a hundred-dollar loss?",
              options: [
                {
                  id: "A",
                  text: "Individuals would react with roughly equal intensity in opposite directions.",
                  explanationEs:
                    "Correcto: al inicio plantea con un tercer condicional invertido ('Had traditional theory been entirely accurate...') que los consumidores ponderarían ganancias y pérdidas equivalentes de manera simétrica.",
                },
                {
                  id: "B",
                  text: "Consumers would ignore losses below one hundred dollars unless inflation rises.",
                  explanationEs:
                    "Incorrecto: la inflación no forma parte del argumento expuesto en la conferencia.",
                },
                {
                  id: "C",
                  text: "Winning one hundred dollars would feel twice as rewarding as losing the same sum feels painful.",
                  explanationEs:
                    "Incorrecto: invierte tanto la teoría clásica (que predecía simetría) como la Teoría de las Perspectivas (donde la pérdida duele el doble que la ganancia).",
                },
                {
                  id: "D",
                  text: "People would value cash prizes less than physical objects of identical price.",
                  explanationEs:
                    "Incorrecto: esa divergencia entre poseer y comprar un objeto corresponde al hallazgo conductual del efecto dotación, no al modelo clásico.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d02-list-p3-q03",
              prompt:
                "Why does the professor discuss the experiment involving university coffee mugs?",
              options: [
                {
                  id: "A",
                  text: "To show that sentimental attachment requires years of habitual product use",
                  explanationEs:
                    "Incorrecto: subraya explícitamente que el diferencial de precio surgió aunque la posesión había durado apenas diez minutos ('barely ten minutes').",
                },
                {
                  id: "B",
                  text: "To illustrate how brief ownership triggers loss aversion and inflates selling prices above buying prices",
                  explanationEs:
                    "Correcto: ejemplifica el efecto dotación mostrando que los dueños aleatorios exigían casi $7 para ceder la taza mientras los no propietarios solo ofrecían $3.50.",
                },
                {
                  id: "C",
                  text: "To prove that undergraduate students lack bargaining experience in competitive markets",
                  explanationEs:
                    "Incorrecto: el fenómeno no se atribuye a inexperiencia estudiantil, sino a un sesgo cognitivo universal que también afecta planes de retiro laborales.",
                },
                {
                  id: "D",
                  text: "To criticize randomized laboratory experiments for lacking real-world applications",
                  explanationEs:
                    "Incorrecto: el profesor enlaza directamente el experimento de laboratorio con decisiones financieras reales de alto impacto.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d02-list-p3-q04",
              prompt:
                "What happened when corporations switched employee retirement plans from active opt-in to automatic enrollment?",
              options: [
                {
                  id: "A",
                  text: "Nearly half of newly hired employees filed complaints about losing freedom of choice.",
                  explanationEs:
                    "Incorrecto: los trabajadores conservaban plena libertad de salirse sin penalización ('letting anyone opt out without penalty') y casi el 90 % permaneció inscrito.",
                },
                {
                  id: "B",
                  text: "Employers had to double their matching contributions to keep workers enrolled.",
                  explanationEs:
                    "Incorrecto: el profesor recalca que el salto ocurrió sin modificar los incentivos económicos ('despite zero change in tax incentives').",
                },
                {
                  id: "C",
                  text: "Plan participation rose from below fifty percent to roughly ninety percent.",
                  explanationEs:
                    "Correcto: al cambiar la regla predeterminada en la arquitectura de decisión, la afiliación pasó de menos del 50 % a cerca del 90 %.",
                },
                {
                  id: "D",
                  text: "Employees began trading retirement accounts more frequently than before.",
                  explanationEs:
                    "Incorrecto: el cambio aprovechó precisamente la inercia del statu quo, no el comercio frecuente de cuentas.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d02-list-p3-q05",
              prompt:
                "What caution does the professor express at the end of the lecture regarding automatic enrollment?",
              options: [
                {
                  id: "A",
                  text: "Low default savings rates can inadvertently anchor passive workers at inadequate contribution levels.",
                  explanationEs:
                    "Correcto: advierte que si la tasa automática inicial se fija en un mínimo como 2 %, la misma inercia deja a los empleados estancados allí por años salvo que exista escalamiento anual automático.",
                },
                {
                  id: "B",
                  text: "Automatic escalation clauses are illegal in most corporate employment contracts.",
                  explanationEs:
                    "Incorrecto: lejos de ser ilegales, las presenta como la herramienta contractual necesaria ('unless automatic annual escalation is built into the contract').",
                },
                {
                  id: "C",
                  text: "Default nudges work only for short-term consumer goods rather than long-term investments.",
                  explanationEs:
                    "Incorrecto: los planes de jubilación son el ejemplo principal del enorme impacto en inversiones de largo plazo.",
                },
                {
                  id: "D",
                  text: "Workers who are enrolled automatically tend to withdraw all their savings within ten months.",
                  explanationEs:
                    "Incorrecto: no se menciona retiro anticipado a los diez meses; el riesgo señalado es permanecer anclado en un porcentaje bajo.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d02-list-p3-q06",
              prompt: "How does the professor structure the presentation of ideas?",
              options: [
                {
                  id: "A",
                  text: "By contrasting a classical assumption with psychological theory, illustrating it via an experiment, and evaluating a policy application",
                  explanationEs:
                    "Correcto: contrasta la simetría neoclásica con Prospect Theory, la ilustra con el experimento de las tazas y finalmente analiza su aplicación y límites en planes de retiro.",
                },
                {
                  id: "B",
                  text: "By listing five unrelated cognitive biases in alphabetical order without empirical data",
                  explanationEs:
                    "Incorrecto: los conceptos están causalmente encadenados (aversión a la pérdida -> efecto dotación -> inercia -> reglas por defecto) y respaldados con cifras.",
                },
                {
                  id: "C",
                  text: "By debating two rival guest speakers on government pension privatization",
                  explanationEs:
                    "Incorrecto: es una exposición monológica de cátedra, sin debate entre oradores invitados ni tema de privatización estatal.",
                },
                {
                  id: "D",
                  text: "By refuting Kahneman and Tversky's lottery trials using recent stock-market surveys",
                  explanationEs:
                    "Incorrecto: valida los hallazgos de Kahneman y Tversky y muestra su vigencia práctica.",
                },
              ],
              correctOptionId: "A",
            },
          ],
          keyTakeawayEs:
            "Observa cómo una clase magistral de Economía en iTEP sigue siempre la ruta Teoría -> Experimento cuantificado ($7 vs. $3.50; <50 % vs. ~90 %) -> Matiz crítico ('Still, default nudges must be calibrated...').",
        },
      ],
    },

    // =========================================================================
    // 3. READING (30 min study / 20 min official pace for Part 1 + Part 2)
    // =========================================================================
    reading: {
      skill: "reading",
      cefrLevel: "B2",
      title: "Parametric Risk Insurance & Counterfactual Paleoclimatology",
      estimatedMinutes: 30,
      timeLimitSeconds: 1200,
      focusSummaryEs:
        "Rastrea las oraciones contrafactuales dentro de textos científicos ('Had rural insurers attempted...', 'Had post-glacial warming proceeded...'): los autores académicos las emplean para demostrar por qué un modelo tradicional fracasa o por qué una hipótesis exigía un mecanismo adicional.",
      passages: [
        {
          part: "part1_intermediate",
          id: "d02-read-p1",
          title: "Parametric Crop Insurance in Smallholder Agriculture",
          cefrLevel: "B2",
          topicDomain: "Development Economics & Climate Risk Management",
          paragraphs: [
            "Across rain-fed agricultural regions in Latin America and sub-Saharan Africa, smallholder farmers have historically lacked affordable financial protection against severe drought. Under conventional indemnity insurance, policyholders receive compensation only after a claims adjuster visits each farm to verify physical harvest losses. Had rural insurers attempted to apply this labor-intensive verification model to millions of dispersed two-hectare plots, administrative inspection expenses alone would have exceeded the monetary value of the policies themselves. Consequently, even a single failed rainy season has routinely forced vulnerable farming households to liquidate productive livestock or withdraw children from secondary school.",
            "To overcome this structural bottleneck, development economists have increasingly promoted parametric, or index-based, crop insurance. Rather than inspecting individual fields after crops wither, parametric contracts trigger automatic mobile-money payouts whenever an objective environmental indicator—such as cumulative satellite-estimated rainfall or soil moisture during seed germination—falls below an established historical threshold. Provided that regional meteorological stations remain accurately calibrated, compensation reaches farmers within days, enabling families to purchase fast-maturing replacement seeds before the planting window closes.",
            "Nevertheless, parametric programs achieve lasting adoption only if insurers minimize what economists term basis risk: the statistical mismatch between weather-station measurements and actual growing conditions on a specific hillside plot. In mountainous microclimates, a valley rain gauge may register adequate precipitation even while nearby upland terraces suffer acute moisture deficits. Unless satellite spatial resolution is combined with denser ground-sensor networks, farmers who experience uncompensated crop failures quickly lose confidence and abandon coverage in subsequent seasons.",
          ],
          questions: [
            {
              id: "d02-read-p1-q01",
              questionType: "main_idea",
              prompt: "What is the main purpose of the passage?",
              options: [
                {
                  id: "A",
                  text: "To explain how parametric crop insurance addresses traditional verification barriers while highlighting the technical challenge of basis risk",
                  explanationEs:
                    "Correcto: integra los tres párrafos: la inviabilidad de costos del seguro tradicional en minifundios (P1), el mecanismo automático del seguro paramétrico (P2) y la necesidad de reducir el 'basis risk' para sostener su adopción (P3).",
                },
                {
                  id: "B",
                  text: "To argue that conventional claims adjusters are more reliable than meteorological satellites in mountainous regions",
                  explanationEs:
                    "Incorrecto: el párrafo 1 explica que enviar ajustadores físicos a millones de parcelas pequeñas sería económicamente inviable.",
                },
                {
                  id: "C",
                  text: "To persuade governments in Latin America to replace rain-fed farming with industrial irrigation systems",
                  explanationEs:
                    "Incorrecto: el texto analiza instrumentos financieros de transferencia de riesgo climático, no obras de irrigación industrial.",
                },
                {
                  id: "D",
                  text: "To show why mobile-money networks have eliminated rural poverty across sub-Saharan Africa",
                  explanationEs:
                    "Incorrecto: exageración sin respaldo textual; los pagos móviles se mencionan solo como canal ágil de desembolso.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d02-read-p1-q02",
              questionType: "inference",
              prompt:
                "Why has conventional indemnity insurance largely failed to serve smallholder farmers?",
              options: [
                {
                  id: "A",
                  text: "Smallholder farmers legally own too much livestock to qualify for agricultural compensation.",
                  explanationEs:
                    "Incorrecto: vender el ganado se menciona como medida desesperada ante la falta de seguro tras una sequía, no como impedimento legal.",
                },
                {
                  id: "B",
                  text: "Conducting on-site damage inspections across countless tiny, scattered farms makes policies prohibitively expensive.",
                  explanationEs:
                    "Correcto: la oración contrafactual ('Had rural insurers attempted to apply this labor-intensive verification model... administrative inspection expenses alone would have exceeded...') demuestra que el costo operativo supera el valor asegurado.",
                },
                {
                  id: "C",
                  text: "Conventional policies prohibit payouts during seed germination periods.",
                  explanationEs:
                    "Incorrecto: la germinación se cita en el párrafo 2 como ejemplo de ventana crítica monitoreada por índices climáticos.",
                },
                {
                  id: "D",
                  text: "Rural banks refuse to process insurance claims submitted via mobile telephones.",
                  explanationEs:
                    "Incorrecto: el obstáculo del modelo tradicional es la verificación presencial en campo ('visits each farm'), no la banca móvil.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d02-read-p1-q03",
              questionType: "vocabulary_in_context",
              prompt: "The word 'liquidate' in paragraph 1 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "sell off for immediate cash",
                  explanationEs:
                    "Correcto: en contexto económico y financiero ('liquidate productive livestock'), 'liquidate' significa vender activos productivos rápidamente para obtener liquidez ante una emergencia.",
                },
                {
                  id: "B",
                  text: "relocate to higher pastures",
                  explanationEs:
                    "Incorrecto: no alude a trasladar el ganado geográficamente, sino a perder patrimonio productivo junto con sacar a los hijos de la escuela.",
                },
                {
                  id: "C",
                  text: "hydrate during dry spells",
                  explanationEs:
                    "Incorrecto: trampa de falso amigo visual por asociación superficial con 'liquid' (líquido); en economía significa convertir bienes en efectivo.",
                },
                {
                  id: "D",
                  text: "insure through state subsidies",
                  explanationEs:
                    "Incorrecto: ocurre precisamente porque esos hogares carecen de cobertura aseguradora asequible.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d02-read-p1-q04",
              questionType: "synthesis",
              prompt:
                "According to paragraph 3, under what condition might a farmer insured under a parametric contract fail to receive a payout despite losing a harvest?",
              options: [
                {
                  id: "A",
                  text: "If the farmer purchases fast-maturing replacement seeds before an adjuster arrives",
                  explanationEs:
                    "Incorrecto: los contratos paramétricos no emplean ajustadores de campo y precisamente buscan financiar semillas de reemplazo.",
                },
                {
                  id: "B",
                  text: "If a nearby reference weather gauge records normal rainfall while the farmer's upland plot experiences localized drought",
                  explanationEs:
                    "Correcto: ilustra con exactitud el 'basis risk' en zonas montañosas: el pluviómetro del valle registra lluvia suficiente (no activa el umbral) aunque las terrazas altas vecinas se sequen.",
                },
                {
                  id: "C",
                  text: "If cumulative regional rainfall drops significantly below the historical benchmark",
                  explanationEs:
                    "Incorrecto: cuando la lluvia cae por debajo del umbral histórico es justamente cuando SÍ se dispara el pago automático.",
                },
                {
                  id: "D",
                  text: "If dense local ground sensors are integrated with high-resolution satellite imagery",
                  explanationEs:
                    "Incorrecto: esa combinación tecnológica es la solución propuesta ('Unless satellite spatial resolution is combined...') para evitar pérdidas sin compensación.",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
        {
          part: "part2_academic",
          id: "d02-read-p2",
          title: "Counterfactual Paleoclimatology and the Younger Dryas Cooling Event",
          cefrLevel: "B2",
          topicDomain: "Paleoclimatology & Earth System Science",
          paragraphs: [
            "Approximately 12,900 years ago, as the Northern Hemisphere was steadily emerging from the Last Glacial Maximum, air temperatures across Greenland and western Europe plummeted abruptly by nearly eight degrees Celsius within a few decades. Known to paleoclimatologists as the Younger Dryas stadial, this millennium-long return to near-glacial conditions reversed early boreal forest expansion and reshaped Late Pleistocene human settlement patterns. Had post-glacial warming proceeded solely according to gradual solar-orbital cycles, continental ice sheets would have retreated continuously without interruption. Explaining why an already warming planet suddenly snapped back into severe cold has therefore remained a central question in Earth system science.",
            "For decades, the prevailing hypothesis centered on a sudden reorganization of continental meltwater drainage in North America. As the massive Laurentide Ice Sheet melted northward, glacial runoff accumulated in proglacial Lake Agassiz, which initially drained southward down the Mississippi River into the Gulf of Mexico. Oceanographers proposed that once retreating ice unblocked a lower eastern outlet across the St. Lawrence Valley, immense volumes of buoyant freshwater surged directly into the subpolar North Atlantic. By diluting surface salinity, that freshwater cap would have prevented cold winter surface waters from sinking, effectively stalling the Atlantic Meridional Overturning Circulation that transports tropical heat northward.",
            "Despite the physical elegance of this oceanic conveyor model, field geologists long struggled to find unmistakable sedimentary proof of an eastern megaflood dated precisely to 12,900 years ago. [A] Surveys of ancient terraces along the St. Lawrence corridor uncovered surprisingly few flood-scoured boulders from that interval, prompting skeptics to question whether Lake Agassiz could have triggered the cooling at all. [B] Subsequent geochemical core analyses from the Mackenzie River delta in the Canadian Arctic resolved much of that mystery by identifying a major northern flood pulse into the Beaufort Sea at the exact onset of the stadial. [C] Coupled ocean-atmosphere simulations confirm that freshwater exported from the Arctic through the narrow Fram Strait suppresses North Atlantic deep-water formation even more efficiently than an eastern St. Lawrence discharge would have. [D]",
            "Contemporary paleoclimate syntheses further emphasize that ocean circulation shifts operated alongside powerful sea-ice feedbacks rather than in isolation. Once North Atlantic heat delivery weakened, winter sea ice expanded rapidly southward across subpolar latitudes, reflecting incoming solar radiation back into space and locking northern Europe into extreme winter aridity long after the initial meltwater pulse subsided. Ice-core dust records from central Greenland corroborate this prolonged atmospheric reorganization. Ultimately, the Younger Dryas demonstrates that Earth's climate responds nonlinearly whenever critical salinity thresholds are crossed: provided that high-latitude freshwater inputs exceed oceanic mixing capacity, even a steadily warming planet can experience abrupt regional cooling.",
          ],
          questions: [
            {
              id: "d02-read-p2-q01",
              questionType: "rhetorical_purpose",
              prompt:
                "Why does the author include the sentence 'Had post-glacial warming proceeded solely according to gradual solar-orbital cycles, continental ice sheets would have retreated continuously without interruption' in paragraph 1?",
              options: [
                {
                  id: "A",
                  text: "To prove that solar-orbital cycles played no role whatsoever in ending the Last Glacial Maximum",
                  explanationEs:
                    "Incorrecto: la palabra clave 'solely' ('únicamente') indica que los ciclos orbitales sí impulsaban el deshielo general, pero no bastan por sí solos para explicar una reversión abrupta.",
                },
                {
                  id: "B",
                  text: "To highlight why the sudden Younger Dryas freeze constituted an unexpected anomaly requiring an additional causal mechanism",
                  explanationEs:
                    "Correcto: la oración contrafactual contrasta la trayectoria continua esperada bajo ciclos orbitales graduales con el enfriamiento súbito real de ocho grados, justificando el enigma científico.",
                },
                {
                  id: "C",
                  text: "To argue that Greenland experienced warmer temperatures than western Europe during the Late Pleistocene",
                  explanationEs:
                    "Incorrecto: menciona a Groenlandia y Europa occidental conjuntamente como regiones afectadas por la caída térmica.",
                },
                {
                  id: "D",
                  text: "To suggest that Late Pleistocene human populations caused boreal forest retreat through land clearing",
                  explanationEs:
                    "Incorrecto: invierte la relación causal; fue el retorno a condiciones cuasi glaciares lo que revirtió el bosque y alteró los asentamientos humanos.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d02-read-p2-q02",
              questionType: "detail",
              prompt:
                "According to paragraph 2, how would a massive influx of glacial freshwater disrupt heat transport in the North Atlantic?",
              options: [
                {
                  id: "A",
                  text: "By freezing the Gulf of Mexico before warm currents could exit the tropics",
                  explanationEs:
                    "Incorrecto: el desagüe inicial hacia el Golfo de México era la ruta previa; el bloqueo circulatorio ocurre cuando el agua dulce entra al Atlántico Norte subpolar.",
                },
                {
                  id: "B",
                  text: "By lowering surface water salinity and density enough to stop winter surface waters from sinking",
                  explanationEs:
                    "Correcto: el párrafo 2 detalla que el agua dulce flotante ('buoyant freshwater'), al diluir la salinidad superficial, impide el hundimiento invernal de aguas densas y frena la circulación termohalina.",
                },
                {
                  id: "C",
                  text: "By raising deep-ocean salinity levels along the St. Lawrence riverbed",
                  explanationEs:
                    "Incorrecto: el agua de deshielo glacial carece de sal y por tanto diluye ('diluting surface salinity'), no incrementa, la salinidad.",
                },
                {
                  id: "D",
                  text: "By carving a submarine canyon that deflected tropical winds toward the Canadian Arctic",
                  explanationEs:
                    "Incorrecto: el mecanismo descrito en el párrafo 2 es hidrodinámico (densidad y salinidad oceánica), no erosión submarina que desvíe vientos.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d02-read-p2-q03",
              questionType: "vocabulary_in_context",
              prompt: "The word 'buoyant' in paragraph 2 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "low-density and tending to stay afloat",
                  explanationEs:
                    "Correcto: en oceanografía física, 'buoyant freshwater' describe agua menos densa que el agua marina salada, por lo que flota formando una capa superficial ('freshwater cap') que no se hunde.",
                },
                {
                  id: "B",
                  text: "turbulent and sediment-laden",
                  explanationEs:
                    "Incorrecto: si estuviera cargada de sedimento pesado se hundiría en lugar de impedir la convección invernal por baja salinidad.",
                },
                {
                  id: "C",
                  text: "geothermally heated",
                  explanationEs:
                    "Incorrecto: proviene del deshielo glacial del manto Laurentino ('glacial runoff'), por lo que era agua fría, no calentada geotérmicamente.",
                },
                {
                  id: "D",
                  text: "chemically acidic",
                  explanationEs:
                    "Incorrecto: la propiedad física relevante en el párrafo es la salinidad y flotabilidad ('salinity / sinking'), no la acidez química.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d02-read-p2-q04",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 3 about the skeptics who doubted Lake Agassiz's role in the Younger Dryas?",
              options: [
                {
                  id: "A",
                  text: "They mistakenly assumed the St. Lawrence Valley was the only viable route by which meltwater could reach and disrupt the North Atlantic.",
                  explanationEs:
                    "Correcto: al no hallar cantos rodados de megainundación en el corredor del San Lorenzo, pusieron en duda toda la hipótesis de Lake Agassiz sin contemplar la ruta ártica del río Mackenzie hacia el estrecho de Fram.",
                },
                {
                  id: "B",
                  text: "They fabricated radiocarbon dates along eastern Canadian shorelines to discredit oceanographers.",
                  explanationEs:
                    "Incorrecto: sus observaciones de campo en el San Lorenzo eran legítimas; lo incompleto era asumir que no existía un desagüe septentrional alternativo.",
                },
                {
                  id: "C",
                  text: "They proved that coupled ocean-atmosphere simulations exaggerate the width of the Fram Strait.",
                  explanationEs:
                    "Incorrecto: las simulaciones acopladas posteriores respaldaron la eficacia de la ruta ártica a través del estrecho de Fram, no a los escépticos.",
                },
                {
                  id: "D",
                  text: "They discovered that the Mackenzie River flowed southward into the Mississippi basin 12,900 years ago.",
                  explanationEs:
                    "Incorrecto: el río Mackenzie desemboca al norte en el mar de Beaufort (Ártico canadiense), no hacia el Misisipi.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d02-read-p2-q05",
              questionType: "sentence_insertion",
              prompt:
                "Look at the four squares [A], [B], [C], and [D] in paragraph 3. Where would the following sentence best fit?",
              sentenceToInsert:
                "Had early field surveys examined Arctic delta sediments alongside eastern river valleys, the freshwater-trigger model might have avoided years of geological skepticism.",
              options: [
                {
                  id: "A",
                  text: "[A]",
                  explanationEs:
                    "Incorrecto: antes de `[A]` aún no se han mencionado ni los estudios de terrazas fluviales orientales ni los escépticos ni los sedimentos deltaicos del Ártico.",
                },
                {
                  id: "B",
                  text: "[B]",
                  explanationEs:
                    "Incorrecto: en `[B]` todavía no se ha introducido el hallazgo geoquímico en el delta del río Mackenzie en el Ártico ('Arctic delta sediments'), por lo que carecería de referente previo.",
                },
                {
                  id: "C",
                  text: "[C]",
                  explanationEs:
                    "Incorrecto: aunque antes de `[C]` ya se menciona el delta del Mackenzie en el mar de Beaufort, aún falta demostrar mediante las simulaciones acopladas que el agua del Ártico realmente llega al Atlántico Norte y frena la circulación profunda.",
                },
                {
                  id: "D",
                  text: "[D]",
                  explanationEs:
                    "Correcto: cierra el párrafo 3 sintetizando los tres eslabones previos: la ausencia inicial en valles orientales, el hallazgo en sedimentos deltaicos árticos y la confirmación por simulación de que esa ruta basta como disparador ('freshwater-trigger model').",
                },
              ],
              correctOptionId: "D",
            },
            {
              id: "d02-read-p2-q06",
              questionType: "synthesis",
              prompt:
                "According to paragraph 4, why did severe cold persist across northern Europe even after the initial glacial meltwater surge diminished?",
              options: [
                {
                  id: "A",
                  text: "Expanded winter sea ice reflected sunlight back into space, reinforcing regional cooling and aridity.",
                  explanationEs:
                    "Correcto: el párrafo 4 explica que, al debilitarse el transporte de calor oceánico, el hielo marino invernal se expandió al sur reflejando radiación solar ('sea-ice feedbacks') y prolongando el frío seco.",
                },
                {
                  id: "B",
                  text: "Lake Agassiz resumed draining continuously down the Mississippi River for another thousand years.",
                  explanationEs:
                    "Incorrecto: el desagüe hacia el Misisipi no enfría Europa septentrional y no se menciona como causa de persistencia en el párrafo 4.",
                },
                {
                  id: "C",
                  text: "Solar-orbital radiation dropped abruptly to Last Glacial Maximum minimums.",
                  explanationEs:
                    "Incorrecto: el párrafo 1 estableció que los ciclos orbitales eran graduales y apuntaban al calentamiento, no a una caída solar abrupta.",
                },
                {
                  id: "D",
                  text: "Expanding boreal forests absorbed excessive atmospheric carbon dioxide across Greenland.",
                  explanationEs:
                    "Incorrecto: la expansión de bosques boreales se revirtió durante el Younger Dryas, además de que Groenlandia permanecía helada.",
                },
              ],
              correctOptionId: "A",
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
      title: "Conditional Research Access Note & Financial-Aid Policy Essay",
      estimatedMinutes: 30,
      timeLimitSeconds: 1500,
      focusSummaryEs:
        "Transfiere las estructuras del Día 2 directamente a tu escritura: incluye una inversión condicional ('Had...') y un conector restrictivo ('Provided that...') en tu nota formal (Part 1), y articula una tesis concesiva más un escenario hipotético bien puntuado en tu ensayo (Part 2).",
      tasks: [
        {
          part: "part1_note",
          id: "d02-writ-p1",
          cefrLevel: "B2",
          title: "Requesting Conditional Access to Restricted Census Microdata",
          prompt:
            "You are writing your senior undergraduate economics thesis on municipal transit subsidies and need access to restricted household microdata housed in the Applied Econometrics Lab. Write a formal note to Professor Alvarez, the Lab Director, in which you: (1) explain why the publicly available summary tables are insufficient for your analysis, (2) state the data-security condition you will follow, and (3) propose a specific time to sign the non-disclosure form.",
          timeLimitSeconds: 300,
          minWords: 50,
          maxWords: 75,
          strategyGuideEs:
            "Usa la segunda oración para brillar en rango gramatical B2 con un condicional invertido ('Had the public summary tables disaggregated..., I would not need...') y la tercera con 'Provided that...' en Present Simple para garantizar el protocolo de seguridad.",
          recommendedConnectors: [
            "Had the public tables...",
            "Provided that",
            "exclusively on",
            "to sign",
          ],
          b2RubricChecklistEs: [
            "Responde con precisión a los 3 puntos exigidos (limitación de tablas públicas, compromiso de seguridad y hora concreta para firmar).",
            "Se mantiene estrictamente entre 50 y 75 palabras con saludo y despedida académicos formales.",
            "Emplea correctamente al menos una estructura condicional B2 ('Had...', 'Provided that...' o 'As long as...' sin usar 'will' en la cláusula condicional).",
            "Ortografía limpia en vocabulario técnico ('restricted', 'confidentiality', 'authorization', 'exclusively').",
          ],
          modelAnswerB2:
            "Dear Professor Alvarez, I am writing to request temporary access to the restricted municipal census microdata for my senior thesis on commuter transit subsidies. Had the public summary tables disaggregated household income by postal zone, I would not need raw records. Provided that authorization is granted, I will analyze all files exclusively on offline lab terminals. May I visit Thursday at 2:00 p.m. to sign the non-disclosure form? Sincerely, Sofia Mendez",
        },
        {
          part: "part2_essay",
          id: "d02-writ-p2",
          cefrLevel: "B2",
          title: "Strict GPA Renewal Conditions vs. Need-Based University Grants",
          prompt:
            "Universities distribute substantial financial aid to undergraduate students every year. Some policy analysts argue that institutions should tie most financial aid to strict grade-point-average (GPA) renewal cutoffs in order to reward effort and maintain high academic standards. Others contend that unconditional need-based grants—provided students maintain basic satisfactory progress—produce fairer and stronger graduation outcomes. Which financial-aid policy do you support? Give specific reasons and concrete examples.",
          timeLimitSeconds: 1200,
          minWords: 175,
          maxWords: 225,
          strategyGuideEs:
            "Abre con una tesis concesiva B2 ('While tying financial aid to high GPA thresholds appears to incentivize diligence, ...') que tome partido sin ambigüedad. En los párrafos de desarrollo, integra un condicional irreal o mixto para mostrar qué ocurriría si un estudiante de bajos ingresos perdiera su beca tras un semestre difícil o si evitara materias rigurosas.",
          recommendedConnectors: [
            "While tying...",
            "Were universities to revoke...",
            "Furthermore,",
            "unless",
            "Provided that",
          ],
          b2RubricChecklistEs: [
            "Presenta una tesis concesiva clara en el párrafo introductorio defendiendo una postura definida sobre las becas universitarias.",
            "Cumple el rango oficial de 175 a 225 palabras distribuidas en 4 párrafos cohesionados.",
            "Desarrolla dos argumentos distintos (ej. deserción financiera ante tropiezos iniciales y evasión de cursos rigurosos/inflación de notas) con ejemplos concretos.",
            "Integra con exactitud gramatical al menos un condicional irreal/invertido ('Were universities to...', 'If a student lost...') y un conector restrictivo ('provided that', 'unless').",
            "Evita errores de transferencia ('*if students would lose', '*unless they don't') y mantiene vocabulario universitario preciso.",
          ],
          modelAnswerB2:
            "While tying financial aid to strict grade-point-average cutoffs appears to reward academic diligence, universities achieve far stronger educational outcomes through need-based grants anchored only to basic satisfactory progress. Rigid GPA renewal thresholds penalize intellectual risk-taking and disproportionately push lower-income undergraduates out of higher education.\n\nFirst, transitioning to university-level coursework involves an uneven adjustment curve, particularly for first-generation students arriving from underfunded secondary schools. Were institutions to revoke tuition support after a single challenging first-year calculus or organic chemistry exam, capable students would be forced to work full-time off-campus shifts or withdraw entirely rather than utilizing faculty tutoring to recover during sophomore year.\n\nFurthermore, punitive GPA cutoffs systematically distort course selection across majors. If scholarship retention hinges on preserving a 3.5 average every term, rational students will avoid demanding quantitative electives or unfamiliar laboratory seminars unless those classes guarantee high grades. Predictable need-based stability, by contrast, encourages undergraduates to tackle rigorous analytical curricula without fearing sudden financial ruin.\n\nUltimately, institutional aid should widen social mobility rather than amplify socioeconomic vulnerability. Provided that recipients complete required degree credits and attend academic advising whenever grades dip, stable need-based grants cultivate resilient graduates instead of cautious grade-collectors.",
        },
      ],
    },

    // =========================================================================
    // 5. SPEAKING (15 min study / chained prep + recording official timers)
    // =========================================================================
    speaking: {
      skill: "speaking",
      cefrLevel: "B2",
      title: "Counterfactual Career Reflection & Mandatory Study-Abroad Debate",
      estimatedMinutes: 15,
      timeLimitSeconds: 300,
      focusSummaryEs:
        "Usa tus 30s/45s de preparación para anotar una sola estructura contrafactual ancla ('Had I chosen...', 'Unless universities subsidize...'). Producir un condicional complejo con naturalidad fonética en Speaking dispara tu calificación de rango gramatical por encima de 3.8.",
      tasks: [
        {
          part: "part1_personal",
          id: "d02-speak-p1",
          cefrLevel: "B2",
          title: "Evaluating an Important Past Academic or Career Choice",
          prompt:
            "Think about a significant academic or professional decision you made that turned out differently than you initially anticipated. Explain what path you chose, how your current situation would differ if you had chosen the alternative, and what you learned.",
          prepSeconds: 30,
          recordSeconds: 45,
          structureTemplate: [
            "0–12s (Decision & Surprise): State the exact choice you made and what unexpected turn occurred.",
            "12–30s (Mixed/3rd Conditional Contrast): Use 'Had I chosen...' to contrast how your present skills would differ.",
            "30–45s (Takeaway): Summarize the practical lesson clearly before the 45-second mark.",
          ],
          keyPhrasesB2: [
            "Two years ago, I faced a choice between...",
            "Had I opted for the more comfortable option, I wouldn't possess...",
            "If it hadn't been for that demanding schedule...",
            "Looking back, that decision taught me that...",
          ],
          selfRubricChecklistEs: [
            "Respondí las tres partes del prompt (decisión tomada, contraste hipotético con el presente y aprendizaje).",
            "Utilicé correctamente un condicional mixto o tercer condicional sin meter 'would' en la cláusula condicional.",
            "Mantuve fluidez continua durante los 45 segundos sin silencios prolongados ni autocorrecciones repetitivas.",
            "Cerré la última oración con entonación descendente firme antes de agotarse el tiempo.",
          ],
          modelTranscriptB2:
            "Two years ago, I had to choose between an easy summer administrative internship and an unpaid environmental data assistantship that required learning Python from scratch. Initially, I worried the coding workload would overwhelm me, and the first three weeks were far tougher than I had expected. However, had I opted for the routine office role back then, I wouldn't have the quantitative data-cleaning skills that I rely on in my senior research seminars right now. Moreover, working alongside graduate mentors showed me how empirical field studies are actually designed. Looking back, that choice taught me that short-term discomfort pays lasting academic dividends provided that you seek feedback early.",
        },
        {
          part: "part2_opinion",
          id: "d02-speak-p2",
          cefrLevel: "B2",
          title: "Mandatory International Study Semesters vs. Optional Programs",
          prompt:
            "Some university leaders propose requiring every undergraduate student to complete at least one semester of international study or global field research prior to graduation in order to build cross-cultural competence. Critics argue that international terms should remain optional because mandatory travel imposes unfair financial and scheduling burdens on working students and rigorous technical majors. Should universities make study abroad a graduation requirement? Defend your position with clear arguments.",
          audioPrompt: {
            trackId: "day02-speaking-p2",
            audioUrl: "/audio/day02-speaking-p2.mp3",
            contextSetup: "Official iTEP Speaking Part 2 dual-perspective academic prompt.",
            turns: [
              {
                speakerLabel: "Examiner",
                voice: "en-GB-SoniaNeural",
                text: "Some university leaders propose requiring every undergraduate student to complete at least one semester of international study or global field research prior to graduation in order to build cross-cultural competence. Critics argue that international terms should remain optional because mandatory travel imposes unfair financial and scheduling burdens on working students and rigorous technical majors. Should universities make study abroad a graduation requirement? Defend your position with clear arguments.",
                pauseAfterMs: 600,
              },
            ],
          },
          prepSeconds: 45,
          recordSeconds: 60,
          structureTemplate: [
            "0–12s (Thesis): Take a decisive stance immediately with a clear condition or rationale.",
            "12–32s (Argument 1 + Counterfactual): Explain the financial/curricular impact on working or STEM students ('Were universities to mandate...').",
            "32–50s (Concession + Better Alternative): Acknowledge the value of global competence and offer an inclusive on-campus/virtual alternative.",
            "50–60s (Conclusion): Deliver a concise closing rule ('Unless institutions fully fund...') before 60s ends.",
          ],
          keyPhrasesB2: [
            "While cross-cultural competence is undeniably valuable, study abroad should remain optional unless...",
            "Were universities to mandate an overseas semester without full funding...",
            "Furthermore, students in sequential laboratory majors would delay graduation if...",
            "Therefore, expanding funded summer exchanges is far fairer than imposing a blanket mandate.",
          ],
          selfRubricChecklistEs: [
            "Expresé mi postura desde los primeros 10 segundos sin repetir palabra por palabra el enunciado.",
            "Abordé la postura contraria mediante una concesión breve ('While cross-cultural competence is valuable...').",
            "Integré al menos dos estructuras condicionales o restrictivas B2 ('Were universities to...', 'unless', 'provided that').",
            "Ilustré mi postura con ejemplos concretos (estudiantes que trabajan, secuencias de laboratorio o becas totales).",
            "Completé mi conclusión dentro de los 60 segundos manteniendo pronunciación clara y ritmo académico.",
          ],
          modelTranscriptB2:
            "While cross-cultural competence is undeniably valuable in today's interconnected economy, I firmly believe that studying abroad should remain optional rather than a universal graduation requirement. Were universities to mandate an overseas semester without covering living expenses and lost wages, undergraduates who work part-time or support family members would face severe financial hardship. Furthermore, students in tightly sequenced majors such as nursing or chemical engineering often cannot find equivalent laboratory courses abroad; if a host university cancels a single prerequisite, their graduation could be delayed by an entire year. Instead of imposing a rigid mandate, institutions can foster global awareness inclusively through collaborative international seminars online and fully funded short-term research fellowships. Ultimately, unless a university guarantees full financial parity and seamless credit transfer for every student, international travel must remain an opportunity rather than an obligation.",
        },
      ],
    },
  },
  dailyChecklistEs: [
    "Resolví los 10 reactivos de Grammar en menos de 8 minutos verificando inversiones ('Had...', 'Were...') y eliminando 'would' o dobles negaciones en cláusulas condicionales.",
    "Completé las 3 partes de Listening en una sola reproducción identificando requisitos con 'provided that', 'only if' y 'unless'.",
    "Analicé los 2 pasajes de Reading en menos de 20 minutos acertando el propósito retórico contrafactual y la inserción en `[D]`.",
    "Redacté la nota (50–75 palabras) y el ensayo (175–225 palabras) sin corrector ortográfico usando tesis concesiva e inversión condicional.",
    "Grabé y evalué mis respuestas de Speaking Part 1 (45s) y Part 2 (60s) integrando al menos un condicional mixto o invertido con fluidez.",
  ],
};
