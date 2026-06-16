import { brandName } from './brand'

export const resultCopy = {
  eyebrow: 'FLOW PROFILE',

  intro: [
    '다섯 번의 선택으로 완성된 당신의 흐름입니다.',
    '이 결과는 평가가 아닌 해석입니다.',
  ],

  evidenceNote:
    '습관과 상황 단계의 선택 변화가 이 해석에 함께 반영되었습니다.',

  disclaimer:
    '정답도 오답도 없습니다. 지금의 선택들이 만든 흐름을 보여줍니다.',

  sharedNote:
    '공유된 FLOW PROFILE입니다. 같은 타입을 함께 보고 있어요.',

  vibeIntro:
    '전체 선택에서 느껴지는 당신의 흐름은\n한 문장으로 이렇게 요약됩니다.',

  shareButton: '공유하기',
  shareCopied: '링크가 복사되었습니다',

  scoreLine: {
    personal: (type: string, count: number) =>
      `${type} 중\n${count}번의 선택이 가장 많이 나타났습니다.`,
    shared: (type: string, count: number) =>
      `${type} 중 ${count}번의 선택이 가장 많이 나타났습니다.`,
  },

  cardTitles: {
    digitalTendency: '흐름 요약',
    keyTraits: '선택 패턴',
    behaviorPattern: '디지털 리듬',
    balancePoint: '균형 포인트',
    distribution: '비율 분석',
    summary: '한 줄 요약',
  },

  sections: {
    digitalTendency: '반복된 선택에서 드러난 경향.',
    keyTraits: '자주 나타난 행동 3가지.',
    behaviorPattern: '하루의 사용 구조.',
    balancePoint: '과도함 없이 유지하기 위한 제안.',
    distribution: '연결 / 성장 / 즐거움 비중.',
    summary: '당신의 흐름을 한 문장으로.',
  },

  restartButton: '다시 하기',
  sharedStartButton: '나도 해보기',
  credit: brandName,
}
