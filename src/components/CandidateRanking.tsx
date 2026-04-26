import { dimensionLabels } from "@/data/dimensions";
import type { CandidateScore } from "@/data/types";
import { ScoreBar } from "./ScoreBar";

export function CandidateRanking({ scores }: { scores: CandidateScore[] }) {
  return (
    <div className="space-y-4">
      {scores.map((item, index) => (
        <article key={item.candidate.id} className="rounded-lg border border-line bg-white p-5 shadow-soft">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-paper text-sm font-semibold">{index + 1}</span>
              <div>
                <h3 className="font-semibold">{item.candidate.name}</h3>
                <p className="text-sm text-slateui">{item.matches.slice(0, 3).map((dimension) => dimensionLabels[dimension]).join(", ") || "Sin coincidencias fuertes aún"}</p>
              </div>
            </div>
            <strong className="text-xl text-civic">{item.score}%</strong>
          </div>
          <div className="mt-4">
            <ScoreBar value={item.score} />
          </div>
        </article>
      ))}
    </div>
  );
}
