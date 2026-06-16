import type {
  DigitalProfile,
  IntensityTier,
  ProfileScore,
  ProfileSubtype,
  ProfileType,
} from './simulator'

/** 질문 ID → 선택한 option ID */
export type QuizAnswers = Record<string, string>

/** ProfileType별 선택 횟수 */
export type TypeCountMap = Record<ProfileType, number>

export const PROFILE_TYPES = [
  'social',
  'productive',
  'entertainment',
] as const satisfies readonly ProfileType[]

export interface QuizResult {
  /** 기본 3타입 중 최다 득점 */
  primaryType: ProfileType
  /** 세분화된 10종 결과 타입 */
  subtype: ProfileSubtype
  counts: TypeCountMap
  scores: ProfileScore[]
  profile: DigitalProfile
  /** 분석 강도 (light / mid / heavy) — harmonist는 null */
  intensity: IntensityTier | null
}

export interface QuizResultBreakdown {
  selectedTypes: ProfileType[]
  counts: TypeCountMap
  primaryType: ProfileType
  subtype: ProfileSubtype
  intensity: IntensityTier | null
}
