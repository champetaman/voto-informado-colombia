"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { dimensionLabels } from "@/data/dimensions";
import type { CandidateScore } from "@/data/types";

export function ResultCharts({ scores }: { scores: CandidateScore[] }) {
  const barData = scores.map((item) => ({
    name: item.candidate.initials,
    fullName: item.candidate.name,
    score: item.score,
    color: item.score > 70 ? "#3a7d58" : item.score < 45 ? "#b42318" : item.candidate.color
  }));

  return (
    <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <h2 className="font-semibold">Porcentaje de alineacion</h2>
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d7dee8" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
              <Tooltip formatter={(value, _name, item) => [`${value}%`, item.payload.fullName]} />
              <Bar dataKey="score" radius={[6, 6, 0, 0]}>
                {barData.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <h2 className="font-semibold">Coincidencias vs diferencias</h2>
        <div className="mt-4 space-y-3">
          {scores.slice(0, 5).map((item) => (
            <div key={item.candidate.id}>
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="font-semibold">{item.candidate.initials}</span>
                <span className="text-slateui">{item.matches.length} / {item.differences.length}</span>
              </div>
              <div className="mt-2 grid grid-cols-6 gap-1" aria-label={`Mapa de coincidencias de ${item.candidate.name}`}>
                {[...item.matches.slice(0, 3), ...item.differences.slice(0, 3)].map((dimension) => {
                  const isMatch = item.matches.includes(dimension);
                  return (
                    <span
                      key={`${item.candidate.id}-${dimension}`}
                      title={dimensionLabels[dimension]}
                      className={`h-5 rounded-sm ${isMatch ? "bg-leaf" : "bg-red-700"}`}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
