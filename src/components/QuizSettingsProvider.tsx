"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";
import { QUIZ_MODE_STORAGE_KEY } from "@/lib/storage";

type QuizSettingsContextValue = {
  useFullQuiz: boolean;
  setUseFullQuiz: (value: boolean) => void;
};

const QuizSettingsContext = createContext<QuizSettingsContextValue | null>(null);
const quizModeEvent = "quiz-mode-change";

function getSnapshot() {
  if (typeof window === "undefined") return false;
  return window.sessionStorage.getItem(QUIZ_MODE_STORAGE_KEY) === "true";
}

function subscribe(callback: () => void) {
  window.addEventListener(quizModeEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(quizModeEvent, callback);
    window.removeEventListener("storage", callback);
  };
}

export function QuizSettingsProvider({ children }: { children: React.ReactNode }) {
  const useFullQuiz = useSyncExternalStore(subscribe, getSnapshot, () => false);

  const setUseFullQuiz = useCallback((next: boolean) => {
    window.sessionStorage.setItem(QUIZ_MODE_STORAGE_KEY, String(next));
    window.dispatchEvent(new Event(quizModeEvent));
  }, []);

  const value = useMemo<QuizSettingsContextValue>(
    () => ({ useFullQuiz, setUseFullQuiz }),
    [setUseFullQuiz, useFullQuiz]
  );

  return <QuizSettingsContext.Provider value={value}>{children}</QuizSettingsContext.Provider>;
}

export function useQuizSettings() {
  const context = useContext(QuizSettingsContext);
  if (!context) {
    throw new Error("useQuizSettings must be used inside QuizSettingsProvider");
  }
  return context;
}
