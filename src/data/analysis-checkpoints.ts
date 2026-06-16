/** 이 질문(0-index)에 답한 직후 중간 분석 화면 표시 */
export const MID_ANALYSIS_CHECKPOINTS = [1, 3] as const

export type MidAnalysisCheckpoint = (typeof MID_ANALYSIS_CHECKPOINTS)[number]

export interface MidAnalysisCopy {
  label: string
  title: string
  messages: string[]
}

export const midAnalysisCopy: Record<MidAnalysisCheckpoint, MidAnalysisCopy> = {
  1: {
    label: 'Habit Pattern Scan',
    title: '1차 패턴 분석 — 습관 레이어',
    messages: [
      'Phase 1 응답에서 무의식적 디지털 습관의 방향성을 추출하고 있습니다…',
      '연결·성장·즐거움 축 중 1차 편향 신호를 계산하는 중…',
      '습관 패턴 데이터 수집 완료 — 상황 반응 분석으로 이동합니다',
    ],
  },
  3: {
    label: 'Cross-Response Analysis',
    title: '2차 패턴 분석 — 상황 레이어',
    messages: [
      '습관 데이터와 상황 반응 데이터를 교차 대조하고 있습니다…',
      '일관된 행동 신호와 예외 반응의 비율을 분석하는 중…',
      '성향 윤곽 확정 — 최종 결정형 질문 데이터를 대기합니다',
    ],
  },
}

export function isMidAnalysisCheckpoint(
  questionIndex: number,
): questionIndex is MidAnalysisCheckpoint {
  return (MID_ANALYSIS_CHECKPOINTS as readonly number[]).includes(questionIndex)
}

export function getMidAnalysisCopy(questionIndex: number): MidAnalysisCopy | null {
  if (!isMidAnalysisCheckpoint(questionIndex)) return null
  return midAnalysisCopy[questionIndex]
}
