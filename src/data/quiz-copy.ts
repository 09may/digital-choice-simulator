 /** 선택 확정 후 subtext 슬롯에 표시되는 의미 반응 (0.5~1초 구간) */
 export const selectionReactions: readonly (readonly string[])[] = [
  ['선택을 정리하고 있어요', '습관적인 흐름을 살펴보고 있어요'],
  ['선택을 정리하고 있어요', '패턴을 살펴보고 있어요'],
  ['선택을 정리하고 있어요', '순간의 반응을 살펴보고 있어요'],
  ['선택을 정리하고 있어요', '흐름의 방향을 살펴보고 있어요'],
  ['선택을 정리하고 있어요', '당신의 FLOWTYPE를 만들고 있어요'],
] as const

export function getSelectionReactions(questionIndex: number): readonly string[] {
  return selectionReactions[questionIndex] ?? selectionReactions[0]
}

/** 질문 심리 단계 라벨 (category 슬롯과 함께 사용) */
export const questionPhases = {
  habit: '습관',
  situational: '상황',
  decisive: '방향',
} as const

/** Phase별 진행 상태 안내 (category 슬롯에 함께 표시) */
export const questionPhaseStatus = {
  habit: '습관을 정리하고 있어요',
  situational: '상황을 정리하고 있어요',
  decisive: '방향을 정리하고 있어요',
} as const