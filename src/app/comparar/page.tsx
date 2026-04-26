"use client";

import { useMemo, useState } from "react";
import { CandidateCard } from "@/components/CandidateCard";
import { candidates } from "@/data/candidates";
import {
  comparisonTopics,
  dimensions,
  dimensionLabels,
} from "@/data/dimensions";
import type { Candidate, CandidateId } from "@/data/types";

const allTopics = "Todos";

function PercentageExplainer() {
  return (
    <p className="mt-4 text-xs leading-5 text-slateui">
      Los porcentajes de la vista gráfica muestran intensidad de postura: 0
      indica una posición neutral o poco marcada, y 100 una posición muy marcada
      hacia cualquiera de los extremos de esa dimensión. No son intención de
      voto ni probabilidad de ganar.
    </p>
  );
}

function CandidateChart({
  visibleCandidates,
}: {
  visibleCandidates: Candidate[];
}) {
  return (
    <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
      <h2 className="font-semibold">Intensidad de postura por tema</h2>
      <p className="mt-2 text-xs leading-5 text-slateui">
        Esta vista mide qué tan marcada es la postura de cada candidatura en
        cada tema, no si la postura va en una dirección específica.
      </p>
      <div className="mt-5 space-y-5">
        {dimensions.slice(0, 10).map((dimension) => (
          <div key={dimension}>
            <p className="text-sm font-semibold text-ink">
              {dimensionLabels[dimension]}
            </p>
            <div className="mt-2 space-y-2">
              {visibleCandidates.map((candidate) => {
                const value = Math.round(
                  (Math.abs(candidate[dimension]) / 2) * 100,
                );
                return (
                  <div
                    key={`${candidate.id}-${dimension}`}
                    className="grid gap-2 sm:grid-cols-[minmax(180px,260px)_1fr_3rem] sm:items-center"
                  >
                    <span className="truncate text-sm text-slateui">
                      {candidate.presidentialCandidate}
                    </span>
                    <div className="h-3 overflow-hidden rounded-full bg-line">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${value}%`,
                          backgroundColor: candidate.color,
                        }}
                      />
                    </div>
                    <span className="text-right text-xs font-semibold text-slateui">
                      {value}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ComparePage() {
  const [topic, setTopic] = useState(allTopics);
  const [selected, setSelected] = useState<CandidateId[]>(
    candidates.map((candidate) => candidate.id),
  );
  const [view, setView] = useState<"text" | "chart">("text");

  const visibleCandidates = useMemo(
    () => candidates.filter((candidate) => selected.includes(candidate.id)),
    [selected],
  );
  const visibleTopics = topic === allTopics ? comparisonTopics : [topic];

  function toggleCandidate(id: CandidateId) {
    setSelected((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id],
    );
  }

  return (
    <main className="app-container py-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Comparación entre candidatos</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slateui">
            Matriz temática basada solo en las síntesis programáticas cargadas.
            Puedes filtrar por tema y comparar dos o más fórmulas.
          </p>
        </div>
        <label className="text-sm font-semibold">
          Tema
          <select
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            className="mt-2 block min-h-11 w-full rounded-md border border-line bg-white px-3 py-2"
          >
            <option>{allTopics}</option>
            {comparisonTopics.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      <section className="mt-6 rounded-lg border border-line bg-white p-4 shadow-soft">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {candidates.map((candidate) => (
            <button
              key={candidate.id}
              type="button"
              onClick={() => toggleCandidate(candidate.id)}
              className={`min-h-24 rounded-md border px-3 py-3 text-left text-sm ${
                selected.includes(candidate.id)
                  ? "border-civic bg-civic text-white"
                  : "border-line bg-white hover:bg-paper"
              }`}
            >
              <span className="block font-semibold leading-5">
                {candidate.presidentialCandidate}
              </span>
              <span
                className={`mt-1 block text-xs leading-4 ${
                  selected.includes(candidate.id)
                    ? "text-white/85"
                    : "text-slateui"
                }`}
              >
                {candidate.vicePresidentialCandidate}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <div className="grid grid-cols-2 rounded-md border border-line bg-white text-sm">
            <button
              type="button"
              onClick={() => setView("text")}
              className={`min-h-11 px-4 py-2 ${
                view === "text" ? "bg-civic text-white" : "hover:bg-paper"
              }`}
            >
              Ver texto
            </button>
            <button
              type="button"
              onClick={() => setView("chart")}
              className={`min-h-11 px-4 py-2 ${
                view === "chart" ? "bg-civic text-white" : "hover:bg-paper"
              }`}
            >
              Ver gráfico
            </button>
          </div>
        </div>
        <PercentageExplainer />
      </section>

      {view === "chart" ? (
        <div className="mt-8">
          <CandidateChart visibleCandidates={visibleCandidates} />
        </div>
      ) : (
        <div className="mt-8 space-y-8">
          {visibleTopics.map((item) => (
            <section key={item}>
              <h2 className="text-xl font-semibold">{item}</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visibleCandidates.map((candidate) => (
                  <CandidateCard
                    key={candidate.id}
                    candidate={candidate}
                    topic={item}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}
