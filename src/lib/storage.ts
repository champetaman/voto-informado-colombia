import { questionsFull } from "@/data/questions";
import type { Importance, QuizAnswer } from "@/data/types";

export const QUIZ_STORAGE_KEY = "voto-programatico-respuestas";
export const QUIZ_MODE_STORAGE_KEY = "voto-programatico-version-completa";

const importances = new Set<Importance>(["normal", "important", "very"]);
const questionIds = new Set(questionsFull.map((question) => question.id));

function isQuizAnswer(value: unknown): value is QuizAnswer {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<QuizAnswer>;
  if (typeof candidate.questionId !== "string" || !questionIds.has(candidate.questionId)) return false;
  if (!importances.has(candidate.importance as Importance)) return false;
  const { optionIndex } = candidate;
  if (optionIndex === undefined) return false;
  return optionIndex === null || (Number.isInteger(optionIndex) && optionIndex >= 0 && optionIndex <= 3);
}

export function loadAnswers() {
  if (typeof window === "undefined") return null;
  const raw = window.sessionStorage.getItem(QUIZ_STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed) || parsed.length !== questionsFull.length) return null;
    return parsed.every(isQuizAnswer) ? parsed : null;
  } catch {
    return null;
  }
}

export function saveAnswers(answers: QuizAnswer[]) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(answers));
}

export function clearAnswers() {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem(QUIZ_STORAGE_KEY);
}
