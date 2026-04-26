"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { dimensions, dimensionLabels } from "@/data/dimensions";
import type { Candidate } from "@/data/types";

const shortLabels = {
  seguridad_firmeza: "Seguridad",
  negociacion_paz: "Paz",
  mercado_inversion: "Mercado",
  estado_social: "Social",
  disciplina_fiscal: "Fiscal",
  estado_pequeno_eficiente: "Estado",
  salud_mixta: "Salud",
  transicion_energetica: "Energia",
  hidrocarburos_mineria: "Mineria",
  descentralizacion: "Regiones",
  cuidado_genero_diversidad: "Cuidado",
  anticorrupcion_institucional: "Corrupcion",
  educacion_ciencia_innovacion: "Educacion",
  comunidades_etnicas: "Etnias",
  ambiente_biodiversidad: "Ambiente",
  constitucionalismo_conservador: "Constitucion",
} satisfies Record<(typeof dimensions)[number], string>;

export function ComparisonCharts({ candidates }: { candidates: Candidate[] }) {
  const data = dimensions.map((dimension) => ({
    dimension,
    label: shortLabels[dimension],
    fullLabel: dimensionLabels[dimension],
    ...Object.fromEntries(
      candidates.map((candidate) => [
        candidate.id,
        Math.round((Math.abs(candidate[dimension]) / 2) * 100),
      ]),
    ),
  }));

  return (
    <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
      <h2 className="font-semibold">Radar programático por candidato</h2>
      <div className="mt-4 h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} outerRadius="72%">
            <PolarGrid stroke="#d7dee8" />
            <PolarAngleAxis dataKey="label" tick={{ fontSize: 11 }} />
            <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
            <Tooltip
              labelFormatter={(_label, payload) =>
                payload?.[0]?.payload.fullLabel ?? ""
              }
            />
            {candidates.map((candidate) => (
              <Radar
                key={candidate.id}
                name={candidate.name}
                dataKey={candidate.id}
                stroke={candidate.color}
                fill={candidate.color}
                fillOpacity={0.12}
                strokeWidth={2}
              />
            ))}
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
