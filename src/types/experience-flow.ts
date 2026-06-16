export type FlowStep = 'start' | 'about' | 'quiz' | 'analyzing' | 'calculating' | 'result'

export type TransitionPhase = 'idle' | 'exit' | 'enter'
export type TransitionDirection = 'forward' | 'backward'

export interface TransitionState {
  phase: TransitionPhase
  direction: TransitionDirection
}

export interface QuizState {
  index: number
  answers: Record<string, string>
  selection: string | null
}

export interface ExperienceState {
  step: FlowStep
  quiz: QuizState
  /** analyzing 단계 — 방금 답한 질문 index */
  analysisCheckpoint: number | null
  /** about 페이지에서 돌아갈 step */
  returnStep: FlowStep | null
}

export interface FlowProgress {
  /** 현재 질문 번호 (quiz: 1~N, 그 외: 0 또는 total) */
  current: number
  /** 전체 질문 수 */
  total: number
  /** 0–100 progress bar 값 */
  percentage: number
  /** progress bar 노출 여부 */
  visible: boolean
}

export const FLOW_TRANSITION_MS = {
  exit: 320,
  enter: 420,
  /** 퀴즈 중간 분석 화면 노출 시간 */
  midAnalysis: 2000,
  calculating: 3200,
  /** 선택 후 micro-interaction → 다음 질문 */
  selection: 960,
} as const

export const INITIAL_QUIZ_STATE: QuizState = {
  index: 0,
  answers: {},
  selection: null,
}

export const INITIAL_EXPERIENCE_STATE: ExperienceState = {
  step: 'start',
  quiz: INITIAL_QUIZ_STATE,
  analysisCheckpoint: null,
  returnStep: null,
}

export const INITIAL_TRANSITION: TransitionState = {
  phase: 'idle',
  direction: 'forward',
}
