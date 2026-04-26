"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";
import { CandidateRanking } from "@/components/CandidateRanking";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { useQuizSettings } from "@/components/QuizSettingsProvider";
import { dimensionLabels } from "@/data/dimensions";
import { questionsDefault, questionsFull } from "@/data/questions";
import type { QuizAnswer } from "@/data/types";
import {
  answeredCount,
  confidenceLabel,
  createEmptyAnswers,
  scoreCandidates,
} from "@/lib/scoring";
import { clearAnswers, parseAnswers, QUIZ_STORAGE_KEY } from "@/lib/storage";

const ResultCharts = dynamic(
  () =>
    import("@/components/ResultCharts").then((module) => module.ResultCharts),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-lg border border-line bg-white p-5 text-sm text-slateui shadow-soft">
        Cargando gráficos...
      </div>
    ),
  },
);

function subscribeAnswers(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getAnswersSnapshot() {
  if (typeof window === "undefined") return null;
  return window.sessionStorage.getItem(QUIZ_STORAGE_KEY);
}

export default function ResultPage() {
  const { useFullQuiz } = useQuizSettings();
  const answersSnapshot = useSyncExternalStore(
    subscribeAnswers,
    getAnswersSnapshot,
    () => null,
  );
  const answers = useMemo<QuizAnswer[]>(
    () => parseAnswers(answersSnapshot) ?? createEmptyAnswers(),
    [answersSnapshot],
  );
  const activeQuestionIds = useMemo(
    () =>
      new Set(
        (useFullQuiz ? questionsFull : questionsDefault).map(
          (question) => question.id,
        ),
      ),
    [useFullQuiz],
  );
  const activeAnswers = useMemo(
    () => answers.filter((answer) => activeQuestionIds.has(answer.questionId)),
    [activeQuestionIds, answers],
  );

  const scores = useMemo(() => scoreCandidates(activeAnswers), [activeAnswers]);
  const count = answeredCount(activeAnswers);
  const top = scores[0];

  return (
    <main className="app-container py-8">
      <DisclaimerBanner />

      <section className="mt-6 rounded-lg border border-line bg-white p-6 shadow-soft">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-leaf">
            {confidenceLabel(count)} · {count} respuestas usadas
          </p>
          <h1 className="mt-3 text-2xl font-semibold leading-tight text-ink sm:text-3xl">
            <span className="block text-base font-semibold uppercase tracking-wide text-slateui">
              Tu fórmula más alineada es:
            </span>
            <span className="mt-2 block text-xl font-bold text-civic sm:text-2xl">
              {top.candidate.name}
            </span>
            <span className="mt-2 block text-xl font-semibold text-ink sm:text-2xl">
              {top.score}% de alineación programática
            </span>
          </h1>
          <p className="mt-4 max-w-4xl text-sm leading-6 text-slateui">
            Este resultado se calcula comparando tus respuestas con los planes
            de gobierno cargados. No representa una recomendación de voto.
          </p>
        </div>
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
              <li key={dimension} className="flex gap-2">
                <span className="font-bold text-leaf">+</span>
                <span>Te alineas en {dimensionLabels[dimension]}.</span>
              </li>
            ))}
            {!top.matches.length ? (
              <li>No hay coincidencias fuertes con las respuestas actuales.</li>
            ) : null}
          </ul>
        </div>
        <div className="rounded-lg border border-line bg-white p-5 shadow-soft">
          <h2 className="font-semibold">Diferencias principales</h2>
          <ul className="mt-3 space-y-2 text-sm text-slateui">
            {top.differences.slice(0, 6).map((dimension) => (
              <li key={dimension} className="flex gap-2">
                <span className="font-bold text-red-700">-</span>
                <span>No te alineas en {dimensionLabels[dimension]}.</span>
              </li>
            ))}
            {!top.differences.length ? (
              <li>No hay diferencias fuertes con las respuestas actuales.</li>
            ) : null}
          </ul>
        </div>
      </section>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <Link
          href="/comparar"
          className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-civic px-4 py-2 text-center text-sm font-semibold text-white hover:bg-ink"
        >
          Ver comparación completa de candidatos
        </Link>
        <Link
          href="/cuestionario"
          onClick={() => clearAnswers()}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-line bg-white px-4 py-2 text-center text-sm font-semibold hover:bg-paper"
        >
          Rehacer cuestionario
        </Link>
        <Link
          href="/metodologia"
          className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-line bg-white px-4 py-2 text-center text-sm font-semibold hover:bg-paper"
        >
          Ver metodología
        </Link>
      </div>
    </main>
  );
}
