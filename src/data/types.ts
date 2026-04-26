export type Dimension =
  | "seguridad_firmeza"
  | "negociacion_paz"
  | "mercado_inversion"
  | "estado_social"
  | "disciplina_fiscal"
  | "estado_pequeno_eficiente"
  | "salud_mixta"
  | "transicion_energetica"
  | "hidrocarburos_mineria"
  | "descentralizacion"
  | "cuidado_genero_diversidad"
  | "anticorrupcion_institucional"
  | "educacion_ciencia_innovacion"
  | "comunidades_etnicas"
  | "ambiente_biodiversidad"
  | "constitucionalismo_conservador";

export type DimensionVector = Record<Dimension, number>;
export type PartialVector = Partial<Record<Dimension, number>>;

export type CandidateId =
  | "ivan-cepeda-aida-quilcue"
  | "paloma-valencia-juan-daniel-oviedo"
  | "claudia-lopez-leonardo-huerta"
  | "abelardo-jose-manuel-restrepo"
  | "sergio-fajardo-edna-bonilla";

export type Candidate = DimensionVector & {
  id: CandidateId;
  name: string;
  politicalParty: string;
  presidentialCandidate: string;
  vicePresidentialCandidate: string;
  initials: string;
  color: string;
  profile: string;
  summaries: Record<string, string>;
  readingRisk: string;
};

export type QuizOption = {
  label: string;
  vector: PartialVector;
};

export type Question = {
  id: string;
  category: string;
  text: string;
  options: QuizOption[];
};

export type Importance = "normal" | "important" | "very";

export type QuizAnswer = {
  questionId: string;
  optionIndex: number | null;
  importance: Importance;
};

export type CandidateScore = {
  candidate: Candidate;
  score: number;
  matches: Dimension[];
  differences: Dimension[];
};
