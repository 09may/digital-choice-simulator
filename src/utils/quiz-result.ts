import { questions } from '../data/questions'
import { profiles } from '../data/profiles'
import type {
  IntensityTier,
  ProfileScore,
  ProfileSubtype,
  ProfileType,
  QuestionOption,
} from '../types/simulator'
import type {
  QuizAnswers,
  QuizResult,
  QuizResultBreakdown,
  TypeCountMap,
} from '../types/quiz-result'
import { PROFILE_TYPES } from '../types/quiz-result'

const SUBTYPE_MAP: Record<
  ProfileType,
  Record<IntensityTier, ProfileSubtype>
> = {
  social: {
    light: 'social-light',
    mid: 'social-harmonious',
    heavy: 'social-heavy',
  },
  productive: {
    light: 'productive-learner',
    mid: 'productive-balanced',
    heavy: 'productive-focused',
  },
  entertainment: {
    light: 'entertainment-light',
    mid: 'entertainment-balanced',
    heavy: 'entertainment-heavy',
  },
}

export function createEmptyCounts(): TypeCountMap {
  return { social: 0, productive: 0, entertainment: 0 }
}

export function collectSelectedTypes(answers: QuizAnswers): ProfileType[] {
  const types: ProfileType[] = []

  for (const question of questions) {
    const option = findSelectedOption(question.id, answers[question.id])
    if (option) types.push(option.type)
  }

  return types
}

export function countTypes(selectedTypes: ProfileType[]): TypeCountMap {
  const counts = createEmptyCounts()
  for (const type of selectedTypes) counts[type] += 1
  return counts
}

export function resolveWinner(counts: TypeCountMap): ProfileType {
  let winner: ProfileType = PROFILE_TYPES[0]
  let highest = counts[winner]

  for (const type of PROFILE_TYPES) {
    if (counts[type] > highest) {
      highest = counts[type]
      winner = type
    }
  }

  return winner
}

/**
 * 선택 횟수 → intensity tier
 * 4~5: heavy · 3: mid · 1~2: light
 */
export function resolveIntensity(count: number): IntensityTier {
  if (count >= 4) return 'heavy'
  if (count === 3) return 'mid'
  return 'light'
}

/**
 * 균형형 판정 — 3타입이 고르게 분포 (최대 2, 편차 1 이하)
 */
export function isHarmonistPattern(counts: TypeCountMap): boolean {
  const values = PROFILE_TYPES.map((t) => counts[t])
  const max = Math.max(...values)
  const min = Math.min(...values)
  return max <= 2 && max - min <= 1
}

/**
 * Step 5 — primary + intensity → 세분화 subtype
 * 균형 패턴이면 digital-harmonist
 */
export function resolveSubtype(
  counts: TypeCountMap,
  primary: ProfileType,
): { subtype: ProfileSubtype; intensity: IntensityTier | null } {
  if (isHarmonistPattern(counts)) {
    return { subtype: 'digital-harmonist', intensity: null }
  }

  const intensity = resolveIntensity(counts[primary])
  return { subtype: SUBTYPE_MAP[primary][intensity], intensity }
}

export function buildScores(counts: TypeCountMap): ProfileScore[] {
  const highest = Math.max(...PROFILE_TYPES.map((t) => counts[t]), 1)

  return PROFILE_TYPES.map((type) => ({
    type,
    score: counts[type],
    percentage: Math.round((counts[type] / highest) * 100),
  }))
}

export function explainQuizResult(answers: QuizAnswers): QuizResultBreakdown {
  const selectedTypes = collectSelectedTypes(answers)
  const counts = countTypes(selectedTypes)
  const primaryType = resolveWinner(counts)
  const { subtype, intensity } = resolveSubtype(counts, primaryType)

  return { selectedTypes, counts, primaryType, subtype, intensity }
}

export function calculateQuizResult(answers: QuizAnswers): QuizResult {
  const selectedTypes = collectSelectedTypes(answers)
  const counts = countTypes(selectedTypes)
  const primaryType = resolveWinner(counts)
  const { subtype, intensity } = resolveSubtype(counts, primaryType)
  const scores = buildScores(counts)

  return {
    primaryType,
    subtype,
    counts,
    scores,
    intensity,
    profile: profiles[subtype],
  }
}

function findSelectedOption(
  questionId: string,
  optionId: string | undefined,
): QuestionOption | undefined {
  if (!optionId) return undefined
  const question = questions.find((q) => q.id === questionId)
  return question?.options.find((o) => o.id === optionId)
}
