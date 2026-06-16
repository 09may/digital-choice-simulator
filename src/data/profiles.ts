import type { DigitalProfile, ProfileSubtype, ProfileType } from '../types/simulator'

/** 세분화 결과 전체 (10종) */
export const profiles: Record<ProfileSubtype, DigitalProfile> = {
  'social-light': {
    subtype: 'social-light',
    baseType: 'social',
    analysisCode: 'S-L',
    title: '은은한 연결형',
    vibe: '혼자 있는 시간이 편하지만\n가끔의 연결은 깊게 이어지는 편이에요.',
    digitalTendency:
      '혼자 있는 시간이 편하고, 연결은 필요할 때만 해요.',
    keyTraits: [
      '혼자 있는 시간이 더 편한 편',
      '연결은 적지만 깊게 이어지는 스타일',
      '관계의 양보다 질을 중요하게 생각함',
    ],
    behaviorPattern:
      '아침엔 알림보다 다른 일을 먼저 보고, 필요할 때만 메시지를 확인해요. 단체보다 1:1 대화를 더 편하게 느껴요.',
    recommendedLifestyle:
      '하루 중 짧게라도 연결 시간을 정해두면 관계가 더 편안해질 수 있어요.',
    caution:
      '연결이 너무 적어지면 거리감이 생길 수 있어요. 가벼운 안부가 도움이 됩니다.',
    summary: '가볍게 머물지만 오래 가는 관계',
    color: '#d4a574',
    emoji: '🌤️',
  },

  'social-harmonious': {
    subtype: 'social-harmonious',
    baseType: 'social',
    analysisCode: 'S-M',
    title: '균형 연결형',
    vibe: '사람과 혼자 있는 시간 모두 자연스럽게 균형을 이루는 편이에요.',
    digitalTendency:
      '연결과 혼자 있는 시간이 과하지 않게 균형을 이루는 흐름이에요.',
    keyTraits: [
      '관계와 혼자 시간을 균형 있게 사용',
      '과하지도 부족하지도 않은 소통 스타일',
      '리듬감 있는 디지털 사용 패턴',
    ],
    behaviorPattern:
      '하루 중 필요한 시간에만 연결하고, 나머지는 자연스럽게 혼자 보내는 흐름이에요.',
    recommendedLifestyle:
      '현재 리듬이 안정적이에요. 가끔은 조금 더 깊은 연결을 시도해보는 것도 좋아요.',
    caution:
      '균형을 유지하다 보면 감정 표현이 줄어들 수 있어요.',
    summary: '안정적인 거리감과 균형 잡힌 관계 흐름',
    color: '#c77d58',
    emoji: '🤝',
  },

  'social-heavy': {
    subtype: 'social-heavy',
    baseType: 'social',
    analysisCode: 'S-H',
    title: '깊은 연결형',
    vibe: '사람과 연결될 때 에너지가 자연스럽게 올라오는 타입이에요.',
    digitalTendency:
      '연결 중심의 디지털 사용이 일상 전반에 자연스럽게 이어지는 편이에요.',
    keyTraits: [
      '메시지 반응이 빠른 편',
      '관계 중심의 디지털 사용',
      '연결이 에너지의 중요한 원천',
    ],
    behaviorPattern:
      '아침부터 알림을 확인하고 하루 내내 메시지와 SNS를 오가는 흐름이에요.',
    recommendedLifestyle:
      '깊은 관계 몇 개에 집중하면 더 안정적인 만족감을 얻을 수 있어요.',
    caution:
      '연결이 많아질수록 혼자 있는 시간이 부족해질 수 있어요.',
    summary: '연결에서 에너지를 얻는 흐름',
    color: '#b85c38',
    emoji: '💬',
  },

  'productive-learner': {
    subtype: 'productive-learner',
    baseType: 'productive',
    analysisCode: 'P-L',
    title: '잠재 성장형',
    vibe: '배우고 싶은 마음은 있지만 아직 행동으로 이어지는 단계는 아니에요.',
    digitalTendency:
      '성장 욕구는 있지만 실행으로 이어지는 비율은 낮은 흐름이에요.',
    keyTraits: [
      '배우고 싶은 마음이 강함',
      '실행은 아직 적은 편',
      '정보 탐색은 활발한 스타일',
    ],
    behaviorPattern:
      'SNS를 보다가 학습 콘텐츠로 넘어가지만 꾸준히 이어지진 않는 흐름이에요.',
    recommendedLifestyle:
      '하루 10~15분만 고정해서 시작하면 흐름이 빠르게 바뀔 수 있어요.',
    caution:
      '시작을 미루면 부담이 커질 수 있어요.',
    summary: '가능성은 충분하지만 아직 시작 전 단계',
    color: '#52b788',
    emoji: '🌱',
  },

  'productive-balanced': {
    subtype: 'productive-balanced',
    baseType: 'productive',
    analysisCode: 'P-M',
    title: '균형 성장형',
    vibe: '성장과 휴식이 자연스럽게 균형을 이루는 편이에요.',
    digitalTendency:
      '공부와 휴식이 안정적으로 섞여 있는 패턴이에요.',
    keyTraits: [
      '학습과 여가 균형',
      '무리 없는 성장 스타일',
      '자기 리듬을 잘 지키는 편',
    ],
    behaviorPattern:
      '시간대에 따라 공부, 휴식, 콘텐츠 소비가 자연스럽게 나뉘는 흐름이에요.',
    recommendedLifestyle:
      '현재 리듬을 유지하면서 가끔 집중 시간을 늘려보세요.',
    caution:
      '균형만 유지하면 깊이가 부족해질 수 있어요.',
    summary: '안정적인 성장 리듬',
    color: '#2d6a4f',
    emoji: '📚',
  },

  'productive-focused': {
    subtype: 'productive-focused',
    baseType: 'productive',
    analysisCode: 'P-H',
    title: '집중 성장형',
    vibe: '배움이 일상에 자연스럽게 녹아 있는 타입이에요.',
    digitalTendency:
      '성장이 디지털 사용의 중심에 있는 흐름이에요.',
    keyTraits: [
      '학습 중심 생활',
      '목표 지향적 사용',
      '성장 만족도가 높은 편',
    ],
    behaviorPattern:
      '하루 대부분이 학습이나 생산적인 활동으로 구성되는 흐름이에요.',
    recommendedLifestyle:
      '가끔은 아무 목적 없는 휴식도 필요합니다.',
    caution:
      '계속 달리기만 하면 지칠 수 있어요.',
    summary: '성장이 중심인 라이프스타일',
    color: '#1b4332',
    emoji: '🎯',
  },

  'entertainment-light': {
    subtype: 'entertainment-light',
    baseType: 'entertainment',
    analysisCode: 'E-L',
    title: '가벼운 휴식형',
    vibe: '필요할 때만 즐기고 과하게 머물지 않는 편이에요.',
    digitalTendency:
      '디지털 여가를 절제된 방식으로 사용하는 흐름이에요.',
    keyTraits: [
      '필요할 때만 콘텐츠 소비',
      '과몰입 적음',
      '자기 통제력 있음',
    ],
    behaviorPattern:
      '힘들거나 심심할 때만 영상이나 게임을 가볍게 즐기는 흐름이에요.',
    recommendedLifestyle:
      '가끔은 이유 없이 즐기는 시간도 괜찮습니다.',
    caution:
      '휴식이 너무 적으면 피로가 쌓일 수 있어요.',
    summary: '절제된 휴식 스타일',
    color: '#b09cd6',
    emoji: '☁️',
  },

  'entertainment-balanced': {
    subtype: 'entertainment-balanced',
    baseType: 'entertainment',
    analysisCode: 'E-M',
    title: '의식적 즐거움형',
    vibe: '즐길 때는 즐기고 멈출 때는 멈추는 균형형이에요.',
    digitalTendency:
      '자기 규칙 안에서 즐기는 흐름이에요.',
    keyTraits: [
      '자기 규칙 기반 사용',
      '균형 잡힌 여가',
      '죄책감 없는 소비',
    ],
    behaviorPattern:
      '정해둔 시간 안에서 영상이나 게임을 즐기는 흐름이에요.',
    recommendedLifestyle:
      '현재 방식 그대로 유지하면 좋아요.',
    caution:
      '가끔은 규칙 없이 쉬는 것도 필요합니다.',
    summary: '자기 조절형 즐거움',
    color: '#7b2cbf',
    emoji: '🎬',
  },

  'entertainment-heavy': {
    subtype: 'entertainment-heavy',
    baseType: 'entertainment',
    analysisCode: 'E-H',
    title: '몰입형',
    vibe: '좋아하는 것에 깊게 빠져드는 타입이에요.',
    digitalTendency:
      '콘텐츠 몰입이 일상의 큰 부분을 차지하는 흐름이에요.',
    keyTraits: [
      '몰입 중심 소비',
      '감정 회복형 사용',
      '콘텐츠 소비량 높은 편',
    ],
    behaviorPattern:
      '영상이나 게임에 깊게 몰입하는 시간이 많은 흐름이에요.',
    recommendedLifestyle:
      '가끔은 스크린 밖 시간을 늘려보세요.',
    caution:
      '몰입이 과해지면 리듬이 흐트러질 수 있어요.',
    summary: '깊이 몰입하는 즐거움',
    color: '#5a189a',
    emoji: '✨',
  },

  'digital-harmonist': {
    subtype: 'digital-harmonist',
    baseType: 'social',
    analysisCode: 'H-B',
    title: '조화형',
    vibe: '상황에 따라 자연스럽게 선택이 달라지는 타입이에요.',
    digitalTendency:
      '패턴이 고정되지 않고 유연하게 변하는 흐름이에요.',
    keyTraits: [
      '유연한 디지털 사용',
      '상황 적응력 높음',
      '균형 잡힌 패턴',
    ],
    behaviorPattern:
      '하루마다 사용하는 목적이 달라지는 자연스러운 변화가 있어요.',
    recommendedLifestyle:
      '현재 유연함을 유지하면서 가끔 돌아보는 시간을 가져보세요.',
    caution:
      '너무 자유로우면 방향이 흐려질 수 있어요.',
    summary: '유연하게 흐르는 디지털 스타일',
    color: '#6c757d',
    emoji: '⚖️',
  },
}

/** 세분화 결과 순서 */
export const profileSubtypeOrder: ProfileSubtype[] = [
  'social-light',
  'social-harmonious',
  'social-heavy',
  'productive-learner',
  'productive-balanced',
  'productive-focused',
  'entertainment-light',
  'entertainment-balanced',
  'entertainment-heavy',
  'digital-harmonist',
]

export const profileTypeOrder: ProfileType[] = [
  'social',
  'productive',
  'entertainment',
]

export const profileTypeLabels: Record<ProfileType, string> = {
  social: '연결형',
  productive: '성장형',
  entertainment: '즐거움형',
}

export const profileTypeColors: Record<ProfileType, string> = {
  social: '#c77d58',
  productive: '#2d6a4f',
  entertainment: '#7b2cbf',
}

export const subtypeLabels: Record<ProfileSubtype, string> = {
  'social-light': '은은한 연결형',
  'social-harmonious': '균형 연결형',
  'social-heavy': '깊은 연결형',
  'productive-learner': '잠재 성장형',
  'productive-balanced': '균형 성장형',
  'productive-focused': '집중 성장형',
  'entertainment-light': '가벼운 휴식형',
  'entertainment-balanced': '의식적 즐거움형',
  'entertainment-heavy': '몰입형',
  'digital-harmonist': '조화형',
}