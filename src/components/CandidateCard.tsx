import type { Candidate, Dimension } from "@/data/types";

const topicDimensions: Record<string, Dimension[]> = {
  "Seguridad y justicia": ["seguridad_firmeza", "anticorrupcion_institucional"],
  "Paz y crimen organizado": ["negociacion_paz", "seguridad_firmeza"],
  Corrupción: ["anticorrupcion_institucional"],
  Salud: ["salud_mixta", "estado_social"],
  Economía: ["mercado_inversion", "estado_social"],
  "Finanzas públicas": ["disciplina_fiscal", "estado_pequeno_eficiente"],
  Energía: ["transicion_energetica", "hidrocarburos_mineria"],
  Educación: ["educacion_ciencia_innovacion"],
  "Campo y agricultura": ["mercado_inversion", "estado_social", "descentralizacion"],
  "Mujeres, cuidado y diversidad": ["cuidado_genero_diversidad"],
  Ambiente: ["ambiente_biodiversidad", "transicion_energetica"],
  Regionalización: ["descentralizacion"],
  Vivienda: ["estado_social", "mercado_inversion"],
  "Política exterior": ["negociacion_paz", "mercado_inversion", "seguridad_firmeza"],
  "Bienestar animal": ["ambiente_biodiversidad"]
};

function topicPercent(candidate: Candidate, topic?: string) {
  if (!topic) return null;
  const dimensions = topicDimensions[topic];
  if (!dimensions?.length) return null;
  const average = dimensions.reduce((sum, dimension) => sum + candidate[dimension], 0) / dimensions.length;
  return Math.round(((average + 2) / 4) * 100);
}

export function CandidateCard({ candidate, topic }: { candidate: Candidate; topic?: string }) {
  const percent = topicPercent(candidate, topic);

  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-white p-5 shadow-soft">
      <div className="grid grid-cols-[2.75rem_1fr] items-start gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: candidate.color }}>
          {candidate.initials}
        </div>
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-semibold text-ink">{candidate.name}</h3>
            {percent !== null ? (
              <span className="shrink-0 rounded-full bg-paper px-2 py-1 text-xs font-bold text-civic">{percent}%</span>
            ) : null}
          </div>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-leaf">{candidate.politicalParty}</p>
          <p className="mt-1 text-sm text-slateui">{candidate.profile}</p>
          {topic ? <p className="mt-4 text-sm font-semibold leading-6 text-ink">{candidate.summaries[topic]}</p> : null}
        </div>
      </div>
      <div className="mt-auto pt-4">
        <p className="border-t border-line pt-3 text-xs leading-5 text-slateui">
          Riesgo de lectura: {candidate.readingRisk}
        </p>
      </div>
    </article>
  );
}
