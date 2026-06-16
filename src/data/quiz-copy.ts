/** 선택 확정 후 subtext 슬롯에 표시되는 의미 반응 (0.5~1초 구간) */
export const selectionReactions: readonly (readonly string[])[] = [
  ['당신의 선택을 기록하고 있습니다…', '습관 패턴 데이터를 수집하는 중…'],
  ['선택 신호를 분석하고 있습니다…', '무의식적 반복 경향을 기록하는 중…'],
  ['반응 패턴을 저장하고 있습니다…', '상황 속 디지털 선택을 해석하는 중…'],
  ['교차 응답을 대조하고 있습니다…', '일관된 행동 신호를 찾는 중…'],
  ['최종 성향 데이터를 확정하고 있습니다…', '당신의 디지털 방향성을 기록하는 중…'],
] as const

export function getSelectionReactions(questionIndex: number): readonly string[] {
  return selectionReactions[questionIndex] ?? selectionReactions[0]
}

/** 질문 심리 단계 라벨 (category 슬롯과 함께 사용) */
export const questionPhases = {
  habit: 'Phase 1 · 습관 패턴',
  situational: 'Phase 2 · 상황 반응',
  decisive: 'Phase 3 · 성향 확정',
} as const
