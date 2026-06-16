import { brandName } from './brand'

export const resultCopy = {
  eyebrow: 'FLOW PROFILE',

  intro: [
    '다섯 번의 선택으로 당신의 흐름이 만들어졌어요.',
    '이 결과는 평가가 아니라, 지금의 당신을 읽어낸 기록입니다.',
  ],

  evidenceNote:
    '습관과 상황에서 나온 선택 패턴이 함께 반영됐어요.',

  sharedNote:
    '같은 FLOW PROFILE을 보고 있는 사람들이 있어요.',

  vibeIntro:
    '전체 선택을 종합하면\n당신의 흐름은 이렇게 정리됩니다.',

  shareButton: '공유하기',
  shareCopied: '링크가 복사됐어요',

  scoreLine: {
    personal: (type: string, count: number) =>
      `${type} 선택이\n${count}번으로 가장 많아요.`,

    shared: (type: string, count: number) =>
      `${type} 선택이 ${count}번으로 가장 많아요.`,
  },

  cardTitles: {
    digitalTendency: '흐름 요약',
    keyTraits: '주요 선택 패턴',
    behaviorPattern: '사용 흐름',
    balancePoint: '균형 포인트',
    distribution: '비율 분석',
    summary: '한 줄 정리',
  },

  sections: {
    digitalTendency: '반복된 선택에서 드러난 흐름입니다.',
    keyTraits: '자주 반복된 행동 3가지를 골라봤어요.',
    behaviorPattern: '하루 동안의 디지털 사용 흐름입니다.',
    balancePoint: '과하지 않게 유지하기 위한 작은 제안입니다.',
    distribution: '연결 / 성장 / 즐거움의 비율입니다.',
    summary: '당신의 흐름을 한 문장으로 정리합니다.',
  },

  restartButton: '다시 하기',
  sharedStartButton: '나도 해보기',
  credit: brandName,
}