"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo, useState } from "react";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { CandidateRanking } from "@/components/CandidateRanking";
import { useQuizSettings } from "@/components/QuizSettingsProvider";
import { dimensionLabels } from "@/data/dimensions";
import { questionsDefault, questionsFull } from "@/data/questions";
import type { QuizAnswer } from "@/data/types";
import { answeredCount, confidenceLabel, createEmptyAnswers, scoreCandidates } from "@/lib/scoring";
import { clearAnswers, loadAnswers } from "@/lib/storage";

const ResultCharts = dynamic(() => import("@/components/ResultCharts").then((module) => module.ResultCharts), {
  ssr: false,
  loading: () => <div className="rounded-lg border border-line bg-white p-5 text-sm text-slateui shadow-soft">Cargando graficos...</div>
});

export default function ResultPage() {
  const { useFullQuiz } = useQuizSettings();
  const [answers] = useState<QuizAnswer[]>(() => loadAnswers() ?? createEmptyAnswers());
  const activeQuestionIds = useMemo(
    () => new Set((useFullQuiz ? questionsFull : questionsDefault).map((question) => question.id)),
    [useFullQuiz]
  );
  const activeAnswers = useMemo(
    () => answers.filter((answer) => activeQuestionIds.has(answer.questionId)),
    [activeQuestionIds, answers]
  );

  const scores = useMemo(() => scoreCandidates(activeAnswers), [activeAnswers]);
  const count = answeredCount(activeAnswers);
  const top = scores[0];

  return (
    <main className="app-container py-8">
      <DisclaimerBanner />

      <section className="mt-6 rounded-lg border border-line bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold text-leaf">{confidenceLabel(count)} · {count} respuestas usadas</p>
        <h1 className="mt-3 text-3xl font-bold text-ink">
          Tu formula mas alineada es: {top.candidate.name} - {top.score}% de alineacion programatica.
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-slateui">
          Este resultado se calcula comparando tus respuestas con los planes de gobierno cargados. No representa una recomendacion de voto.
        </p>
      </section>

      <section className="mt-8">
        <ResultCharts scores={scores} />
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Ranking completo</h2>
        <div className="mt-4">
          <CandidateRanking scores={scores} />
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-lg border border-line bg-white p-5 shadow-soft">
          <h2 className="font-semibold">Coincidencias principales</h2>
          <ul className="mt-3 space-y-2 text-sm text-slateui">
            {top.matches.slice(0, 6).map((dimension) => (
              <li key={dimension}>Coincides en {dimensionLabels[dimension]}.</li>
            ))}
            {!top.matches.length ? <li>No hay coincidencias fuertes con las respuestas actuales.</li> : null}
          </ul>
        </div>
        <div className="rounded-lg border border-line bg-white p-5 shadow-soft">
          <h2 className="font-semibold">Diferencias principales</h2>
          <ul className="mt-3 space-y-2 text-sm text-slateui">
            {top.differences.slice(0, 6).map((dimension) => (
              <li key={dimension}>Tienes menor coincidencia en {dimensionLabels[dimension]}.</li>
            ))}
            {!top.differences.length ? <li>No hay diferencias fuertes con las respuestas actuales.</li> : null}
          </ul>
        </div>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link href="/comparar" className="min-h-11 rounded-md bg-civic px-4 py-2 text-center text-sm font-semibold text-white hover:bg-ink">Ver comparacion completa</Link>
        <Link
          href="/cuestionario"
          onClick={() => clearAnswers()}
          className="min-h-11 rounded-md border border-line bg-white px-4 py-2 text-center text-sm font-semibold hover:bg-paper"
        >
          Rehacer cuestionario
        </Link>
        <Link href="/metodologia" className="min-h-11 rounded-md border border-line bg-white px-4 py-2 text-center text-sm font-semibold hover:bg-paper">Ver metodologia</Link>
      </div>
    </main>
  );
}
