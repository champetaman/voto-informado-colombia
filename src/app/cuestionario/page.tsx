"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Circle, CircleDot, Flame, RotateCcw, Star } from "lucide-react";
import { useQuizSettings } from "@/components/QuizSettingsProvider";
import { questionsDefault, questionsFull } from "@/data/questions";
import type { Importance, QuizAnswer } from "@/data/types";
import { answeredCount, createEmptyAnswers } from "@/lib/scoring";
import { clearAnswers, loadAnswers, saveAnswers } from "@/lib/storage";

const importanceOptions: { value: Importance; label: string; helper: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { value: "normal", label: "Normal", helper: "Peso base", icon: Circle },
  { value: "important", label: "Importante", helper: "Pesa más", icon: Star },
  { value: "very", label: "Muy importante", helper: "Máxima prioridad", icon: Flame }
];

export default function QuizPage() {
  const router = useRouter();
  const { useFullQuiz, setUseFullQuiz } = useQuizSettings();
  const [answers, setAnswers] = useState<QuizAnswer[]>(() => loadAnswers() ?? createEmptyAnswers());
  const [current, setCurrent] = useState(0);

  const activeQuestions = useMemo(() => (useFullQuiz ? questionsFull : questionsDefault), [useFullQuiz]);
  const question = activeQuestions[current];
  const answer = answers.find((item) => item.questionId === question.id);
  const activeQuestionIds = useMemo(() => new Set(activeQuestions.map((item) => item.id)), [activeQuestions]);
  const activeAnswers = useMemo(
    () => answers.filter((item) => activeQuestionIds.has(item.questionId)),
    [activeQuestionIds, answers]
  );
  const progress = Math.round(((current + 1) / activeQuestions.length) * 100);
  const count = useMemo(() => answeredCount(activeAnswers), [activeAnswers]);

  useEffect(() => {
    saveAnswers(answers);
  }, [answers]);

  function updateAnswer(next: Partial<QuizAnswer>) {
    setAnswers((previous) => previous.map((item) => (item.questionId === question.id ? { ...item, ...next } : item)));
  }

  function updateQuizMode(next: boolean) {
    setUseFullQuiz(next);
    if (!next) {
      setCurrent((value) => Math.min(value, questionsDefault.length - 1));
    }
  }

  function reset() {
    const empty = createEmptyAnswers();
    clearAnswers();
    setAnswers(empty);
    setCurrent(0);
  }

  return (
    <main className="app-container py-8">
      <section className="mb-6 rounded-lg border border-line bg-white p-5 shadow-soft">
        <h1 className="text-lg font-semibold text-ink">Elige el nivel de precisión</h1>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => updateQuizMode(false)}
            className={`min-h-16 rounded-md border px-4 py-3 text-left text-sm ${!useFullQuiz ? "border-civic bg-civic text-white" : "border-line bg-white hover:bg-paper"}`}
          >
            Versión rápida (24 preguntas)
          </button>
          <button
            type="button"
            onClick={() => updateQuizMode(true)}
            className={`min-h-16 rounded-md border px-4 py-3 text-left text-sm ${useFullQuiz ? "border-civic bg-civic text-white" : "border-line bg-white hover:bg-paper"}`}
          >
            Versión completa (32 preguntas, mayor precisión)
          </button>
        </div>
      </section>

      <div className="sticky top-[105px] z-20 mb-6 bg-paper py-2 sm:top-[73px]">
        <div className="flex items-center justify-between text-sm text-slateui">
          <span>Pregunta {current + 1} de {activeQuestions.length}</span>
          <span>{count} respondidas</span>
        </div>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-line">
          <div className="h-full rounded-full bg-leaf" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <section className="rounded-lg border border-line bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold text-leaf">{question.category}</p>
        <h2 className="mt-2 text-2xl font-bold text-ink">{question.text}</h2>

        <fieldset className="mt-6 space-y-3">
          <legend className="sr-only">Opciones de respuesta</legend>
          {question.options.map((option, index) => (
            <label key={option.label} className="flex min-h-11 cursor-pointer gap-3 rounded-lg border border-line p-4 hover:border-civic">
              <input
                type="radio"
                name={question.id}
                checked={answer?.optionIndex === index}
                onChange={() => updateAnswer({ optionIndex: index })}
                className="mt-1 h-4 w-4"
              />
              <span className="text-sm leading-6">{option.label}</span>
            </label>
          ))}
        </fieldset>

        <div className="mt-6">
          <p className="text-sm font-semibold">Importancia</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {importanceOptions.map((item) => {
              const Icon = answer?.importance === item.value ? CircleDot : item.icon;
              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => updateAnswer({ importance: item.value })}
                  className={`min-h-16 rounded-md border px-4 py-3 text-left text-sm ${answer?.importance === item.value ? "border-civic bg-civic text-white" : "border-line bg-white hover:bg-paper"}`}
                >
                  <span className="flex items-center gap-2 font-semibold">
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </span>
                  <span className={`mt-1 block text-xs ${answer?.importance === item.value ? "text-white/80" : "text-slateui"}`}>
                    {item.helper}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mt-6 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
        <button type="button" onClick={reset} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-line bg-white px-4 py-2 text-sm hover:bg-paper">
          <RotateCcw className="h-4 w-4" /> Reiniciar
        </button>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button type="button" disabled={current === 0} onClick={() => setCurrent((value) => Math.max(0, value - 1))} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-line bg-white px-4 py-2 text-sm disabled:opacity-50">
            <ArrowLeft className="h-4 w-4" /> Anterior
          </button>
          <button type="button" onClick={() => updateAnswer({ optionIndex: null })} className="min-h-11 rounded-md border border-line bg-white px-4 py-2 text-sm hover:bg-paper">
            Saltar pregunta
          </button>
          {current < activeQuestions.length - 1 ? (
            <button type="button" onClick={() => setCurrent((value) => value + 1)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-civic px-4 py-2 text-sm font-semibold text-white hover:bg-ink">
              Siguiente <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button type="button" onClick={() => router.push("/resultado")} className="min-h-11 rounded-md bg-civic px-4 py-2 text-sm font-semibold text-white hover:bg-ink">
              Ver resultado
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
