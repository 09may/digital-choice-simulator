/** 이 질문(0-index)에 답한 직후 중간 전환 화면 표시 */
export const MID_ANALYSIS_CHECKPOINTS = [1, 3] as const

export type MidAnalysisCheckpoint = (typeof MID_ANALYSIS_CHECKPOINTS)[number]

export interface MidAnalysisCopy {
  label: string
  title: string
  subtitle: string
  messages: string[]
}

export const midAnalysisCopy: Record<MidAnalysisCheckpoint, MidAnalysisCopy> = {
  1: {
    label: '습관을 읽는 중',
    title: '당신의 기본 흐름을 정리하고 있습니다',
    subtitle: '선택들이 하나의 방향으로 모이고 있습니다',
    messages: [
      '선택을 정리하고 있습니다',
      '패턴을 읽는 중입니다',
      '다음 선택으로',
    ],
  },
  3: {
    label: '상황을 읽는 중',
    title: '순간의 선택을 정리하고 있습니다',
    subtitle: '반응의 패턴이 드러나고 있습니다',
    messages: [
      '선택을 정리하고 있습니다',
      '흐름의 방향을 읽는 중입니다',
      '마지막 선택으로',
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
