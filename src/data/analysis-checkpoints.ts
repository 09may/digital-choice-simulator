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
    label: '습관을 정리하는 중이에요',
    title: '당신의 기본 흐름을 정리하고 있어요',
    subtitle: '앞선 선택들이 하나의 방향으로 이어지고 있어요',
    messages: [
      '선택들을 정리하고 있어요',
      '흐름을 정리하고 있어요',
      '다음 단계로 넘어갑니다',
    ],
  },
  3: {
    label: '상황을 정리하는 중이에요',
    title: '순간의 선택을 정리하고 있어요',
    subtitle: '반복되는 반응 속에서 흐름이 보이고 있어요',
    messages: [
      '선택들을 정리하고 있어요',
      '흐름을 정리하고 있어요',
      '거의 다 왔어요',
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