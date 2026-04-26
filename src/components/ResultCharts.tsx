"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { CandidateScore } from "@/data/types";

const chartColors: Record<string, string> = {
  "ivan-cepeda-aida-quilcue": "#0f766e",
  "paloma-valencia-juan-daniel-oviedo": "#2563eb",
  "claudia-lopez-leonardo-huerta": "#d97706",
  "abelardo-jose-manuel-restrepo": "#7c3aed",
  "sergio-fajardo-edna-bonilla": "#dc2626",
};

const shortCandidateNames: Record<string, string> = {
  "ivan-cepeda-aida-quilcue": "Iván Cepeda",
  "paloma-valencia-juan-daniel-oviedo": "Paloma Valencia",
  "claudia-lopez-leonardo-huerta": "Claudia López",
  "abelardo-jose-manuel-restrepo": "Abelardo de la Espriella",
  "sergio-fajardo-edna-bonilla": "Sergio Fajardo",
};

export function ResultCharts({ scores }: { scores: CandidateScore[] }) {
  const barData = scores.map((item) => ({
    name: item.candidate.initials,
    fullName: item.candidate.name,
    shortName: shortCandidateNames[item.candidate.id],
    score: item.score,
    color: chartColors[item.candidate.id] ?? item.candidate.color,
  }));

  return (
    <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <h2 className="font-semibold">Porcentaje de alineación</h2>
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 24, bottom: 8, left: 0, right: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d7dee8" />
              <XAxis
                dataKey="name"
                interval={0}
                height={32}
                tick={{ fontSize: 12, fontWeight: 700 }}
              />
              <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
              <Tooltip
                formatter={(value, _name, item) => [
                  `${value}%`,
                  item.payload.shortName,
                ]}
              />
              <Bar dataKey="score" radius={[6, 6, 0, 0]}>
                <LabelList
                  dataKey="score"
                  position="top"
                  formatter={(value) => `${value}%`}
                  className="fill-ink text-xs font-bold"
                />
                {barData.map((item) => (
                  <Cell key={item.fullName} fill={item.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs leading-5 text-slateui">
          {barData.map((item) => (
            <p key={item.fullName} className="rounded-md bg-paper px-3 py-1">
              <span className="font-bold text-ink">{item.name}:</span>{" "}
              {item.shortName}
            </p>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <h2 className="font-semibold">Coincidencias vs diferencias</h2>
        <p className="mt-2 text-xs leading-5 text-slateui">
          Cada barra muestra proporción: verde para coincidencias y rojo para
          diferencias fuertes. No se muestran todos los temas, solo los que
          tienen señal clara.
        </p>
        <div className="mt-4 space-y-4">
          {scores.slice(0, 5).map((item) => {
            const matches = item.matches.length;
            const differences = item.differences.length;
            const total = matches + differences;
            const matchWidth = total > 0 ? (matches / total) * 100 : 0;
            const differenceWidth = total > 0 ? (differences / total) * 100 : 0;

            return (
              <div key={item.candidate.id}>
                <div className="flex items-start justify-between gap-3 text-sm">
                  <span className="font-semibold leading-5">
                    {shortCandidateNames[item.candidate.id]}
                  </span>
                  <span className="shrink-0 text-xs font-semibold text-slateui">
                    {matches} coincidencias · {differences} diferencias
                  </span>
                </div>
                <div
                  className="mt-2 flex h-6 overflow-hidden rounded-md bg-line"
                  aria-label={`${matches} coincidencias y ${differences} diferencias para ${item.candidate.name}`}
                >
                  <div
                    className="grid place-items-center bg-emerald-600 text-[11px] font-bold text-white"
                    style={{ width: `${matchWidth}%` }}
                    title={`${matches} coincidencias`}
                  >
                    {matches > 0 ? matches : null}
                  </div>
                  <div
                    className="grid place-items-center bg-rose-600 text-[11px] font-bold text-white"
                    style={{ width: `${differenceWidth}%` }}
                    title={`${differences} diferencias`}
                  >
                    {differences > 0 ? differences : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2 border-t border-line pt-3 text-xs leading-5 text-slateui">
          <p className="rounded-md bg-paper px-3 py-1">
            <span className="inline-block h-3 w-3 rounded-sm bg-emerald-600 align-[-1px]" />{" "}
            <span className="font-bold text-ink">Coincidencias:</span> temas
            donde tus respuestas se alinean.
          </p>
          <p className="rounded-md bg-paper px-3 py-1">
            <span className="inline-block h-3 w-3 rounded-sm bg-rose-600 align-[-1px]" />{" "}
            <span className="font-bold text-ink">Diferencias:</span> temas
            donde hay distancia clara.
          </p>
        </div>
      </section>
    </div>
  );
}
