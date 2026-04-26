import type { Question } from "./types";

export const questions: Question[] = [
  {
    id: "seguridad-grupos-armados",
    category: "Seguridad",
    text: "¿Cuál debe ser la prioridad frente a grupos armados y crimen organizado?",
    options: [
      { label: "Recuperar control territorial con máxima fuerza institucional y castigo severo.", vector: { seguridad_firmeza: 2, negociacion_paz: -2 } },
      { label: "Combinar fuerza pública, justicia, inversión social y prevención.", vector: { seguridad_firmeza: 1, negociacion_paz: 0.5 } },
      { label: "Priorizar negociación, paz territorial, derechos humanos y reparación.", vector: { seguridad_firmeza: -1, negociacion_paz: 2 } },
      { label: "Usar fuerza pública, pero con foco técnico en inteligencia y finanzas criminales.", vector: { seguridad_firmeza: 1.5, negociacion_paz: 0 } }
    ]
  },
  {
    id: "paz-procesos",
    category: "Paz",
    text: "¿Qué postura prefieres frente a procesos de paz?",
    options: [
      { label: "No negociar con estructuras criminales actuales.", vector: { negociacion_paz: -2, seguridad_firmeza: 2 } },
      { label: "Cumplir el Acuerdo de Paz, pero tratar a grupos actuales como crimen organizado.", vector: { negociacion_paz: 0.5, seguridad_firmeza: 1.5 } },
      { label: "Mantener diálogo y negociación como herramienta central para cerrar violencias.", vector: { negociacion_paz: 2, seguridad_firmeza: -1 } },
      { label: "Depende del grupo, pero siempre con verdad, justicia y reparación.", vector: { negociacion_paz: 1, seguridad_firmeza: 0.5 } }
    ]
  },
  {
    id: "drogas",
    category: "Seguridad",
    text: "¿Qué política antidrogas se acerca más a tu visión?",
    options: [
      { label: "Erradicación, fumigación, extradición y persecución financiera.", vector: { seguridad_firmeza: 2, negociacion_paz: -2 } },
      { label: "Sustitución obligatoria con apoyo productivo y acción contra redes criminales.", vector: { seguridad_firmeza: 1.5, mercado_inversion: 1 } },
      { label: "Reforma internacional de drogas, sustitución social y enfoque territorial.", vector: { negociacion_paz: 1.5, estado_social: 1.5 } },
      { label: "Inteligencia financiera y control de economías ilícitas sin priorizar fumigación.", vector: { seguridad_firmeza: 1, anticorrupcion_institucional: 1 } }
    ]
  },
  {
    id: "corrupcion",
    category: "Corrupción",
    text: "¿Cómo debe combatirse principalmente la corrupción?",
    options: [
      { label: "Castigo fuerte, extinción de dominio y persecución directa.", vector: { anticorrupcion_institucional: 2, seguridad_firmeza: 1.5 } },
      { label: "Transparencia en tiempo real, tecnología, blockchain y datos abiertos.", vector: { anticorrupcion_institucional: 2, educacion_ciencia_innovacion: 1 } },
      { label: "Reforma estructural contra redes de macrocorrupción y reparación a víctimas.", vector: { anticorrupcion_institucional: 2, estado_social: 1 } },
      { label: "Mérito, controles institucionales, ley de lobby y protección a denunciantes.", vector: { anticorrupcion_institucional: 2, disciplina_fiscal: 1 } }
    ]
  },
  {
    id: "estado",
    category: "Estado",
    text: "¿Qué tipo de Estado prefieres?",
    options: [
      { label: "Más pequeño, con menos burocracia y menos trámites.", vector: { estado_pequeno_eficiente: 2, mercado_inversion: 2 } },
      { label: "Fuerte en seguridad, justicia y servicios básicos, pero eficiente.", vector: { estado_pequeno_eficiente: 0.5, seguridad_firmeza: 1.5 } },
      { label: "Más activo en derechos sociales, redistribución y transformación territorial.", vector: { estado_social: 2, estado_pequeno_eficiente: -2 } },
      { label: "Técnico, transparente, descentralizado y basado en evidencia.", vector: { estado_pequeno_eficiente: 0.5, disciplina_fiscal: 1.5, descentralizacion: 1 } }
    ]
  },
  {
    id: "economia",
    category: "Economía",
    text: "¿Cuál debería ser el motor principal del crecimiento?",
    options: [
      { label: "Inversión privada, reducción de impuestos y desregulación.", vector: { mercado_inversion: 2, estado_pequeno_eficiente: 2 } },
      { label: "Productividad regional, innovación, exportaciones y alianzas público-privadas.", vector: { mercado_inversion: 1.2, educacion_ciencia_innovacion: 1.5, descentralizacion: 1 } },
      { label: "Economía popular, campesina, redistribución y programas sociales.", vector: { estado_social: 2, mercado_inversion: -1 } },
      { label: "Formalización de micronegocios y empleo privado con apoyo estatal.", vector: { mercado_inversion: 1, estado_social: 1 } }
    ]
  },
  {
    id: "impuestos",
    category: "Finanzas públicas",
    text: "¿Qué postura prefieres sobre impuestos?",
    options: [
      { label: "Bajar impuestos a empresas y eliminar cargas que frenen inversión.", vector: { mercado_inversion: 2, disciplina_fiscal: 1.5 } },
      { label: "Recaudar mejor, combatir evasión y revisar beneficios tributarios.", vector: { disciplina_fiscal: 1.5, anticorrupcion_institucional: 1 } },
      { label: "Usar impuestos para financiar derechos sociales y redistribución.", vector: { estado_social: 2, disciplina_fiscal: -0.5 } },
      { label: "Reglas predecibles: bajar impuestos solo si aumenta el crecimiento.", vector: { mercado_inversion: 1.5, disciplina_fiscal: 1.5 } }
    ]
  },
  {
    id: "gasto-publico",
    category: "Finanzas públicas",
    text: "¿Qué debe hacerse con el gasto público?",
    options: [
      { label: "Reducir drásticamente el tamaño del Estado.", vector: { estado_pequeno_eficiente: 2, disciplina_fiscal: 2 } },
      { label: "Recortar duplicidades y abrir el presupuesto al control ciudadano.", vector: { disciplina_fiscal: 1.5, anticorrupcion_institucional: 1.5 } },
      { label: "Aumentar inversión social y territorial aunque implique más Estado.", vector: { estado_social: 2, estado_pequeno_eficiente: -1.5 } },
      { label: "Ordenar finanzas, pero protegiendo programas sociales prioritarios.", vector: { disciplina_fiscal: 1, estado_social: 1 } }
    ]
  },
  {
    id: "salud-modelo",
    category: "Salud",
    text: "¿Qué modelo de salud prefieres?",
    options: [
      { label: "Recuperar y fortalecer un sistema mixto con EPS mejor reguladas.", vector: { salud_mixta: 2, mercado_inversion: 1 } },
      { label: "Sistema mixto, pero con auditoría pública fuerte e información unificada.", vector: { salud_mixta: 1.5, anticorrupcion_institucional: 1 } },
      { label: "Salud como derecho, menor intermediación privada y más rol público.", vector: { salud_mixta: -2, estado_social: 2 } },
      { label: "Reforma técnica: UPC bien calculada, auditorías, salud digital y atención primaria.", vector: { salud_mixta: 1, educacion_ciencia_innovacion: 1, disciplina_fiscal: 1 } }
    ]
  },
  {
    id: "medicamentos-citas",
    category: "Salud",
    text: "¿Qué enfoque prefieres para resolver demoras en salud?",
    options: [
      { label: "Plan de choque financiero inmediato y pago de deudas.", vector: { salud_mixta: 1.5, disciplina_fiscal: 1 } },
      { label: "Compras centralizadas transitorias y control estatal fuerte.", vector: { salud_mixta: -1, estado_social: 1.5 } },
      { label: "Auditoría, datos, trazabilidad y plataformas digitales.", vector: { salud_mixta: 1, educacion_ciencia_innovacion: 1.5 } },
      { label: "Atención territorial, primaria, preventiva y salud mental.", vector: { estado_social: 1.5, cuidado_genero_diversidad: 1 } }
    ]
  },
  {
    id: "energia",
    category: "Energía",
    text: "¿Qué camino energético prefieres?",
    options: [
      { label: "Reactivar petróleo, gas, carbón y fracking para asegurar crecimiento.", vector: { hidrocarburos_mineria: 2, transicion_energetica: -1 } },
      { label: "Transición gradual: gas y petróleo financian renovables.", vector: { hidrocarburos_mineria: 0.5, transicion_energetica: 1.5 } },
      { label: "Transición energética fuerte, biodiversidad y reducción de extractivismo.", vector: { hidrocarburos_mineria: -2, transicion_energetica: 2, ambiente_biodiversidad: 2 } },
      { label: "Energía barata y confiable usando todas las fuentes disponibles.", vector: { hidrocarburos_mineria: 1.5, transicion_energetica: 0 } }
    ]
  },
  {
    id: "mineria",
    category: "Energía",
    text: "¿Qué postura prefieres sobre minería?",
    options: [
      { label: "Expandir minería legal y perseguir minería criminal.", vector: { hidrocarburos_mineria: 2, seguridad_firmeza: 1 } },
      { label: "Formalizar pequeños mineros con estándares ambientales.", vector: { hidrocarburos_mineria: 1, estado_social: 0.5 } },
      { label: "Limitar actividades extractivas y proteger territorios/ecosistemas.", vector: { hidrocarburos_mineria: -2, ambiente_biodiversidad: 2 } },
      { label: "Usar regalías minero-energéticas para financiar ambiente y regiones.", vector: { hidrocarburos_mineria: 1, ambiente_biodiversidad: 1 } }
    ]
  },
  {
    id: "ambiente",
    category: "Ambiente",
    text: "¿Qué enfoque ambiental prefieres?",
    options: [
      { label: "Biodiversidad, bioeconomía y protección de ecosistemas estratégicos.", vector: { ambiente_biodiversidad: 2, transicion_energetica: 1.5 } },
      { label: "Conservación financiada por crecimiento legal minero-energético.", vector: { ambiente_biodiversidad: 1, hidrocarburos_mineria: 1.5 } },
      { label: "Justicia ambiental, agua, Amazonía y transición pos-extractiva.", vector: { ambiente_biodiversidad: 2, hidrocarburos_mineria: -2 } },
      { label: "Restauración, pagos por servicios ambientales y comunidades guardabosques.", vector: { ambiente_biodiversidad: 1.5, comunidades_etnicas: 1 } }
    ]
  },
  {
    id: "educacion",
    category: "Educación",
    text: "¿Qué prioridad educativa prefieres?",
    options: [
      { label: "Calidad, mérito docente, tecnología, bilingüismo y conexión productiva.", vector: { educacion_ciencia_innovacion: 2, mercado_inversion: 1 } },
      { label: "Educación pública como motor de igualdad y ciudadanía.", vector: { educacion_ciencia_innovacion: 1.5, estado_social: 1.5 } },
      { label: "Un millón de becas y educación conectada con empleo regional.", vector: { educacion_ciencia_innovacion: 1.5, descentralizacion: 1 } },
      { label: "Primera infancia, STEAM, ciencia, arte y pensamiento crítico.", vector: { educacion_ciencia_innovacion: 2, cuidado_genero_diversidad: 0.5 } }
    ]
  },
  {
    id: "jovenes",
    category: "Educación",
    text: "¿Qué política para jóvenes prefieres?",
    options: [
      { label: "Formación en IA y habilidades digitales para empleo global.", vector: { educacion_ciencia_innovacion: 2, mercado_inversion: 1 } },
      { label: "Becas de educación y trabajo con enfoque regional.", vector: { educacion_ciencia_innovacion: 1.5, descentralizacion: 1 } },
      { label: "Educación, cultura, deporte y prevención del reclutamiento.", vector: { estado_social: 1, seguridad_firmeza: 0.5 } },
      { label: "Jóvenes como sujetos de transformación social y participación democrática.", vector: { estado_social: 1.5, negociacion_paz: 1 } }
    ]
  },
  {
    id: "mujeres-cuidado",
    category: "Mujeres, cuidado y diversidad",
    text: "¿Cuál política de género y cuidado prefieres?",
    options: [
      { label: "Sistema Nacional de Cuidado para liberar tiempo de las mujeres.", vector: { cuidado_genero_diversidad: 2, estado_social: 1.5 } },
      { label: "Protección judicial rápida contra violencia y feminicidios.", vector: { cuidado_genero_diversidad: 1.5, seguridad_firmeza: 1.5 } },
      { label: "Autonomía económica, crédito y emprendimientos femeninos.", vector: { cuidado_genero_diversidad: 1.5, mercado_inversion: 1 } },
      { label: "Participación política, derechos, diversidad y enfoque antidiscriminación.", vector: { cuidado_genero_diversidad: 2, comunidades_etnicas: 1 } }
    ]
  },
  {
    id: "diversidad",
    category: "Mujeres, cuidado y diversidad",
    text: "¿Qué postura prefieres sobre población LGBTIQ+ y no discriminación?",
    options: [
      { label: "Garantizar derechos plenos y protección contra crímenes de odio.", vector: { cuidado_genero_diversidad: 2, comunidades_etnicas: 1 } },
      { label: "Enfoque general de igualdad ante la ley sin políticas identitarias fuertes.", vector: { cuidado_genero_diversidad: 0 } },
      { label: "Priorizar familia tradicional como núcleo de la sociedad.", vector: { constitucionalismo_conservador: 2, cuidado_genero_diversidad: -1 } },
      { label: "Incluir diversidad dentro de política social y de justicia.", vector: { cuidado_genero_diversidad: 1.5, estado_social: 1 } }
    ]
  },
  {
    id: "comunidades-etnicas",
    category: "Comunidades étnicas",
    text: "¿Qué enfoque prefieres para pueblos indígenas, afrodescendientes y comunidades étnicas?",
    options: [
      { label: "Reconocimiento territorial, autonomía, derechos colectivos y protección cultural.", vector: { comunidades_etnicas: 2, estado_social: 1.5 } },
      { label: "Consulta previa como alianza para inversión y beneficios compartidos.", vector: { comunidades_etnicas: 0.5, mercado_inversion: 1.5 } },
      { label: "Desarrollo regional con participación comunitaria y enfoque intercultural.", vector: { comunidades_etnicas: 1.5, descentralizacion: 1.5 } },
      { label: "Priorizar seguridad, legalidad e inversión productiva en territorios.", vector: { comunidades_etnicas: 0.5, seguridad_firmeza: 1.5 } }
    ]
  },
  {
    id: "campo",
    category: "Campo y agricultura",
    text: "¿Qué debe priorizarse en el campo?",
    options: [
      { label: "Reforma agraria, economía campesina, tierra, agua y soberanía alimentaria.", vector: { estado_social: 2, mercado_inversion: -0.5 } },
      { label: "Formalización de tierras, crédito, agroindustria y exportación.", vector: { mercado_inversion: 1.5, descentralizacion: 1 } },
      { label: "Expansión productiva, Altillanura, propiedad rural y empleo.", vector: { mercado_inversion: 2, hidrocarburos_mineria: 0.5 } },
      { label: "Productividad rural, asistencia técnica, vías y cadenas de valor.", vector: { mercado_inversion: 1.2, educacion_ciencia_innovacion: 1 } }
    ]
  },
  {
    id: "vivienda",
    category: "Vivienda",
    text: "¿Qué política de vivienda prefieres?",
    options: [
      { label: "Subsidios, arriendo social y mejoramiento de vivienda.", vector: { estado_social: 1.5, cuidado_genero_diversidad: 0.5 } },
      { label: "Vivienda propia con crédito barato y enfoque de propietarios.", vector: { mercado_inversion: 1.5, estado_social: 0.5 } },
      { label: "Urbanismo social, reutilización, vivienda digna y derecho a la ciudad.", vector: { estado_social: 2, ambiente_biodiversidad: 0.5 } },
      { label: "Soluciones masivas VIS/VIP con planeación urbana y servicios.", vector: { estado_social: 1.2, disciplina_fiscal: 0.5 } }
    ]
  },
  {
    id: "agua",
    category: "Ambiente",
    text: "¿Qué enfoque sobre agua prefieres?",
    options: [
      { label: "Agua como derecho humano y bien común.", vector: { estado_social: 2, ambiente_biodiversidad: 1.5 } },
      { label: "Acueductos rurales e inversión regional en servicios públicos.", vector: { descentralizacion: 1.5, estado_social: 1 } },
      { label: "Agua como eje de transformación agraria y territorial.", vector: { estado_social: 2, comunidades_etnicas: 1 } },
      { label: "Eficiencia, regionalización e incentivos a inversión en servicios.", vector: { mercado_inversion: 1, disciplina_fiscal: 1 } }
    ]
  },
  {
    id: "regiones",
    category: "Regionalización",
    text: "¿Qué tan importante es descentralizar el país?",
    options: [
      { label: "Muy importante: regiones con autonomía fiscal y decisión propia.", vector: { descentralizacion: 2 } },
      { label: "Importante, pero con metas y control nacional.", vector: { descentralizacion: 1, disciplina_fiscal: 1 } },
      { label: "Priorizar presencia nacional fuerte para seguridad y servicios.", vector: { descentralizacion: 0, seguridad_firmeza: 1 } },
      { label: "Descentralización desde comunidades y movimientos sociales.", vector: { descentralizacion: 1.5, estado_social: 1.5 } }
    ]
  },
  {
    id: "politica-exterior",
    category: "Política exterior",
    text: "¿Qué política exterior prefieres?",
    options: [
      { label: "Autonomía, paz, solidaridad regional y crítica al orden internacional tradicional.", vector: { negociacion_paz: 1.5, estado_social: 1 } },
      { label: "Cooperación fuerte con Estados Unidos contra narcotráfico y crimen.", vector: { seguridad_firmeza: 2, mercado_inversion: 1 } },
      { label: "Diplomacia comercial, inversión y apertura de mercados.", vector: { mercado_inversion: 1.5, disciplina_fiscal: 0.5 } },
      { label: "Diplomacia profesional, multilateral y pragmática con varios socios.", vector: { educacion_ciencia_innovacion: 1, mercado_inversion: 1 } }
    ]
  },
  {
    id: "venezuela",
    category: "Política exterior",
    text: "¿Qué postura prefieres frente a Venezuela?",
    options: [
      { label: "Rechazo fuerte a dictaduras y apoyo a reconstrucción democrática.", vector: { seguridad_firmeza: 1.5, constitucionalismo_conservador: 1 } },
      { label: "Cero complicidades, pero canales diplomáticos abiertos.", vector: { seguridad_firmeza: 0.5, negociacion_paz: 0.5 } },
      { label: "Política exterior de paz, autonomía y cooperación regional.", vector: { negociacion_paz: 1.5, estado_social: 0.5 } },
      { label: "Política pragmática centrada en frontera, comercio y migración.", vector: { mercado_inversion: 1, descentralizacion: 1 } }
    ]
  },
  {
    id: "justicia",
    category: "Seguridad",
    text: "¿Qué reforma de justicia prefieres?",
    options: [
      { label: "Penas más duras, reincidencia castigada y más cárceles.", vector: { seguridad_firmeza: 2, constitucionalismo_conservador: 1 } },
      { label: "Justicia digital, descongestión y meritocracia judicial.", vector: { educacion_ciencia_innovacion: 1.5, anticorrupcion_institucional: 1.5 } },
      { label: "Justicia contra mafias con régimen especial y máxima sanción.", vector: { seguridad_firmeza: 2, anticorrupcion_institucional: 1 } },
      { label: "Justicia restaurativa, reparación y enfoque de víctimas.", vector: { negociacion_paz: 1.5, estado_social: 1 } }
    ]
  },
  {
    id: "carceles",
    category: "Seguridad",
    text: "¿Qué postura prefieres sobre cárceles?",
    options: [
      { label: "Más cupos, bloqueo de comunicaciones y trabajo obligatorio.", vector: { seguridad_firmeza: 2 } },
      { label: "Cárceles diferenciadas para mafias, delincuencia común y convivencia.", vector: { seguridad_firmeza: 1.5, disciplina_fiscal: 0.5 } },
      { label: "Reforma penitenciaria técnica, menos corrupción y control interno.", vector: { seguridad_firmeza: 1.2, anticorrupcion_institucional: 1 } },
      { label: "Enfoque de resocialización y justicia restaurativa cuando aplique.", vector: { negociacion_paz: 1, estado_social: 0.5 } }
    ]
  },
  {
    id: "cultura",
    category: "Educación",
    text: "¿Qué rol debe tener la cultura?",
    options: [
      { label: "Motor económico, exportación audiovisual, música e industrias creativas.", vector: { mercado_inversion: 1.5, educacion_ciencia_innovacion: 1 } },
      { label: "Derecho cultural, patrimonio, memoria y participación territorial.", vector: { estado_social: 1.2, descentralizacion: 1 } },
      { label: "Herramienta de convivencia, diálogo e inclusión.", vector: { estado_social: 1, negociacion_paz: 1 } },
      { label: "Actividad importante, pero no prioridad central del Estado.", vector: { estado_pequeno_eficiente: 1 } }
    ]
  },
  {
    id: "bienestar-animal",
    category: "Bienestar animal",
    text: "¿Qué política de bienestar animal prefieres?",
    options: [
      { label: "Reconocer animales como sujetos de protección robusta y justicia ambiental.", vector: { ambiente_biodiversidad: 2, estado_social: 1 } },
      { label: "Esterilización, vacunación, adopción y sanción al maltrato.", vector: { ambiente_biodiversidad: 1.2 } },
      { label: "Atención veterinaria usando infraestructura existente sin nueva burocracia.", vector: { ambiente_biodiversidad: 1, estado_pequeno_eficiente: 1 } },
      { label: "Combatir tráfico de fauna como economía ilegal.", vector: { ambiente_biodiversidad: 1.5, seguridad_firmeza: 1 } }
    ]
  },
  {
    id: "democracia",
    category: "Estado",
    text: "¿Qué valor democrático priorizas más?",
    options: [
      { label: "Participación ciudadana y movilización social.", vector: { estado_social: 1.5, negociacion_paz: 1 } },
      { label: "Constitución, separación de poderes y orden institucional.", vector: { constitucionalismo_conservador: 1.5, seguridad_firmeza: 1 } },
      { label: "Instituciones técnicas, mérito y transparencia.", vector: { anticorrupcion_institucional: 1.5, disciplina_fiscal: 1 } },
      { label: "Descentralización y pactos regionales.", vector: { descentralizacion: 2 } }
    ]
  },
  {
    id: "protesta-social",
    category: "Estado",
    text: "¿Qué postura prefieres sobre protesta social?",
    options: [
      { label: "Proteger protesta pacífica y participación social permanente.", vector: { negociacion_paz: 1.5, estado_social: 1 } },
      { label: "Regular protesta y castigar vandalismo con firmeza.", vector: { seguridad_firmeza: 1.5, constitucionalismo_conservador: 1 } },
      { label: "Garantizar derechos, pero con autoridad y convivencia.", vector: { seguridad_firmeza: 0.5, negociacion_paz: 0.5 } },
      { label: "Resolver conflictos sociales con justicia restaurativa y diálogo local.", vector: { negociacion_paz: 1, descentralizacion: 1 } }
    ]
  },
  {
    id: "clase-media",
    category: "Economía",
    text: "¿Qué política ayudaría más a la clase media?",
    options: [
      { label: "Menos impuestos, menos trámites y más inversión privada.", vector: { mercado_inversion: 2, estado_pequeno_eficiente: 1.5 } },
      { label: "Salud, educación, vivienda y empleo con servicios que funcionen.", vector: { estado_social: 1.5, disciplina_fiscal: 0.5 } },
      { label: "Productividad, innovación, educación y emprendimiento.", vector: { educacion_ciencia_innovacion: 1.5, mercado_inversion: 1.2 } },
      { label: "Salario digno, reforma laboral y derechos sociales.", vector: { estado_social: 2, mercado_inversion: -0.5 } }
    ]
  },
  {
    id: "estilo-gobierno",
    category: "Estado",
    text: "¿Qué estilo de gobierno prefieres?",
    options: [
      { label: "Firme, patriótico, de orden y decisiones rápidas.", vector: { seguridad_firmeza: 2, constitucionalismo_conservador: 1.5 } },
      { label: "Técnico, moderado, basado en evidencia y resultados.", vector: { educacion_ciencia_innovacion: 1.5, disciplina_fiscal: 1.5 } },
      { label: "Social, participativo, transformador y de derechos.", vector: { estado_social: 2, negociacion_paz: 1.5 } },
      { label: "Pragmático, regional, anticorrupción y de soluciones.", vector: { descentralizacion: 1.5, anticorrupcion_institucional: 1.5 } }
    ]
  }
];

export const questionsDefault = questions.slice(0, 24);
export const questionsFull = questions;
