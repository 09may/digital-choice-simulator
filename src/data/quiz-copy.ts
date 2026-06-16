/** 선택 확정 후 subtext 슬롯에 표시되는 의미 반응 (0.5~1초 구간) */
export const selectionReactions: readonly (readonly string[])[] = [
  ['선택을 정리하고 있습니다', '습관의 방향을 읽는 중입니다'],
  ['선택을 정리하고 있습니다', '패턴을 읽는 중입니다'],
  ['선택을 정리하고 있습니다', '순간 반응을 읽는 중입니다'],
  ['선택을 정리하고 있습니다', '흐름의 방향을 읽는 중입니다'],
  ['선택을 정리하고 있습니다', '당신의 FLOWTYPE를 생성하고 있습니다'],
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
  habit: '습관을 읽는 중',
  situational: '상황을 읽는 중',
  decisive: '방향을 정리하는 중',
} as const
