import type { Dimension } from "./types";

export const dimensions: Dimension[] = [
  "seguridad_firmeza",
  "negociacion_paz",
  "mercado_inversion",
  "estado_social",
  "disciplina_fiscal",
  "estado_pequeno_eficiente",
  "salud_mixta",
  "transicion_energetica",
  "hidrocarburos_mineria",
  "descentralizacion",
  "cuidado_genero_diversidad",
  "anticorrupcion_institucional",
  "educacion_ciencia_innovacion",
  "comunidades_etnicas",
  "ambiente_biodiversidad",
  "constitucionalismo_conservador"
];

export const dimensionLabels: Record<Dimension, string> = {
  seguridad_firmeza: "seguridad y autoridad institucional",
  negociacion_paz: "paz, diálogo y reparación",
  mercado_inversion: "mercado, inversión y crecimiento",
  estado_social: "Estado social y redistribución",
  disciplina_fiscal: "disciplina fiscal",
  estado_pequeno_eficiente: "Estado pequeño y eficiente",
  salud_mixta: "sistema de salud mixto",
  transicion_energetica: "transición energética",
  hidrocarburos_mineria: "hidrocarburos y minería",
  descentralizacion: "descentralización y regiones",
  cuidado_genero_diversidad: "cuidado, género y diversidad",
  anticorrupcion_institucional: "anticorrupción institucional",
  educacion_ciencia_innovacion: "educación, ciencia e innovación",
  comunidades_etnicas: "comunidades étnicas",
  ambiente_biodiversidad: "ambiente y biodiversidad",
  constitucionalismo_conservador: "constitucionalismo conservador"
};

export const comparisonTopics = [
  "Seguridad y justicia",
  "Paz y crimen organizado",
  "Corrupción",
  "Salud",
  "Economía",
  "Finanzas públicas",
  "Energía",
  "Educación",
  "Campo y agricultura",
  "Mujeres, cuidado y diversidad",
  "Ambiente",
  "Regionalización",
  "Vivienda",
  "Política exterior",
  "Bienestar animal"
];
