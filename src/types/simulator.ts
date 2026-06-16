export type ProfileType = 'social' | 'productive' | 'entertainment'

/** 기본 3타입을 intensity·균형도로 세분화한 10종 결과 */
export type ProfileSubtype =
  | 'social-light'
  | 'social-harmonious'
  | 'social-heavy'
  | 'productive-learner'
  | 'productive-balanced'
  | 'productive-focused'
  | 'entertainment-light'
  | 'entertainment-balanced'
  | 'entertainment-heavy'
  | 'digital-harmonist'

export interface QuestionOption {
  id: string
  label: string
  description?: string
  emoji?: string
  type: ProfileType
}

export interface Question {
  id: string
  category: string
  question: string
  subtext?: string
  options: QuestionOption[]
}

export interface DigitalProfile {
  subtype: ProfileSubtype
  baseType: ProfileType
  /** 심리 분석 리포트 코드 (예: S-H) */
  analysisCode: string
  title: string
  vibe: string
  /** 1. 당신의 디지털 성향 */
  digitalTendency: string
  /** 2. 핵심 특징 3가지 */
  keyTraits: [string, string, string]
  /** 3. 행동 패턴 분석 */
  behaviorPattern: string
  /** 4. 추천 디지털 라이프 스타일 */
  recommendedLifestyle: string
  /** 5. 주의해야 할 성향 */
  caution: string
  /** 6. 한 줄 요약 */
  summary: string
  color: string
  emoji: string
}

export type ScreenPhase = 'intro' | 'question' | 'calculating' | 'result'

export interface SimulatorState {
  phase: ScreenPhase
  currentQuestionIndex: number
  answers: Record<string, string>
}

export interface ProfileScore {
  type: ProfileType
  score: number
  percentage: number
}

export type IntensityTier = 'light' | 'mid' | 'heavy'
