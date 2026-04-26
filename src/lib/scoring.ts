import { candidates } from "@/data/candidates";
import { dimensions } from "@/data/dimensions";
import { questionsFull } from "@/data/questions";
import type { CandidateScore, Dimension, Importance, QuizAnswer } from "@/data/types";

export const importanceWeights: Record<Importance, number> = {
  normal: 1,
  important: 1.5,
  very: 2
};

export function answeredCount(answers: QuizAnswer[]) {
  return answers.filter((answer) => answer.optionIndex !== null).length;
}

export function confidenceLabel(count: number) {
  if (count < 12) return "Resultado de baja confianza";
  if (count <= 20) return "Resultado de confianza media";
  return "Resultado de confianza alta";
}

export function calculateUserVector(answers: QuizAnswer[]) {
  const totals = new Map<Dimension, { value: number; weight: number }>();

  for (const answer of answers) {
    if (answer.optionIndex === null) continue;
    const question = questionsFull.find((item) => item.id === answer.questionId);
    const option = question?.options[answer.optionIndex];
    if (!option) continue;

    const weight = importanceWeights[answer.importance];
    for (const [dimension, value] of Object.entries(option.vector) as [Dimension, number][]) {
      const current = totals.get(dimension) ?? { value: 0, weight: 0 };
      totals.set(dimension, {
        value: current.value + value * weight,
        weight: current.weight + weight
      });
    }
  }

  return Object.fromEntries(
    Array.from(totals.entries()).map(([dimension, total]) => [dimension, total.value / total.weight])
  ) as Partial<Record<Dimension, number>>;
}

export function scoreCandidates(answers: QuizAnswer[]): CandidateScore[] {
  const userVector = calculateUserVector(answers);
  const activeDimensions = dimensions.filter((dimension) => userVector[dimension] !== undefined);

  if (activeDimensions.length === 0) {
    return candidates.map((candidate) => ({ candidate, score: 0, matches: [], differences: [] }));
  }

  return candidates
    .map((candidate) => {
      const dimensionScores = activeDimensions.map((dimension) => {
        const distance = Math.abs((userVector[dimension] ?? 0) - candidate[dimension]);
        return 1 - distance / 4;
      });

      const score = (dimensionScores.reduce((sum, value) => sum + value, 0) / dimensionScores.length) * 100;
      const matches = activeDimensions.filter((dimension) => Math.abs((userVector[dimension] ?? 0) - candidate[dimension]) <= 0.75);
      const differences = activeDimensions.filter((dimension) => Math.abs((userVector[dimension] ?? 0) - candidate[dimension]) >= 1.75);

      return { candidate, score: Math.round(score), matches, differences };
    })
    .sort((a, b) => b.score - a.score);
}

export function createEmptyAnswers(): QuizAnswer[] {
  return questionsFull.map((question) => ({
    questionId: question.id,
    optionIndex: null,
    importance: "normal"
  }));
}
