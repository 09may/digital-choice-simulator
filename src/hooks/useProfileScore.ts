import { calculateQuizResult } from '../utils/quiz-result'
import type { QuizAnswers } from '../types/quiz-result'

export function calculateProfile(answers: QuizAnswers) {
  const result = calculateQuizResult(answers)

  return {
    primary: result.primaryType,
    subtype: result.subtype,
    intensity: result.intensity,
    scores: result.scores,
    profile: result.profile,
    counts: result.counts,
  }
}

export function getProgress(currentIndex: number, total: number): number {
  if (total === 0) return 0
  return Math.round(((currentIndex + 1) / total) * 100)
}

export {
  calculateQuizResult,
  collectSelectedTypes,
  countTypes,
  resolveWinner,
  resolveSubtype,
  resolveIntensity,
  isHarmonistPattern,
  buildScores,
  explainQuizResult,
  createEmptyCounts,
} from '../utils/quiz-result'
