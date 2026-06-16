import type { DigitalProfile, ProfileSubtype, ProfileType } from '../types/simulator'

/** 세분화 결과 전체 (10종) */
export const profiles: Record<ProfileSubtype, DigitalProfile> = {
  'social-light': {
    subtype: 'social-light',
    baseType: 'social',
    analysisCode: 'S-L',
    title: '은은한 연결형',
    vibe: '연결보다 고독이 편한 날이 더 많다.\n하지만 연결할 때는 깊이 연결한다.',
    digitalTendency:
      '선택 흐름에서 고독 우선 패턴이 드러납니다. 연결은 적지만 한번 연결하면 진심을 담는 경향이 뚜렷합니다.',
    keyTraits: [
      '연결보다 고독을 더 자주 선택하는 경향',
      '메시지·SNS 사용량은 적지만, 보낼 때는 진심을 담는 패턴',
      '관계의 양보다 관계의 질에 더 무게를 두는 흐름',
    ],
    behaviorPattern:
      '해당 선택 흐름에서는 아침에 알림보다 다른 활동을 먼저 고르는 경향이 보이고, 점심이나 저녁 무렵에 가볍게 연결을 확인하는 패턴이 두드러집니다. 단체 채팅보다 1:1 대화를 선호하는 선택이 반복되며, 스토리 소비는 하지만 업로드 빈도는 낮게 나타납니다. 디지털 연결은 쉬어가는 순간에 가깝게 느껴지는 흐름으로 읽힙니다.',
    recommendedLifestyle:
      '하루 30분 이내의 "연결 타임"을 정해 두고, 그 안에서만 메시지와 SNS를 확인해 보세요. 나머지 시간은 오프라인 활동이나 자기 성찰에 쓰면 에너지 소모 없이 관계를 유지할 수 있습니다.',
    caution:
      '연결을 너무 적게 유지하면, 상대방이 "관심 없다"고 오해할 수 있어요. 가끔은 이유 없이 안부를 전하는 작은 습관이 관계를 따뜻하게 유지합니다.',
    summary: '적당한 거리, 진심 어린 연결 — 깊이보다 온기가 먼저 느껴지는 관계 패턴.',
    color: '#d4a574',
    emoji: '🌤️',
  },

  'social-harmonious': {
    subtype: 'social-harmonious',
    baseType: 'social',
    analysisCode: 'S-M',
    title: '균형 연결형',
    vibe: '관계도 나만의 시간도, 둘 다 소중하다.\n이 균형을 지키는 게 나답다.',
    digitalTendency:
      '선택 흐름에서 연결과 고독이 고르게 분배되는 패턴이 관찰됩니다. 어느 한쪽에 치우치지 않고 자기 조절이 자연스럽게 이루어집니다.',
    keyTraits: [
      '관계와 혼자만의 시간을 거의 동등하게 중시하는 경향',
      'SNS·메시지 사용량이 과하지 않고, 일정한 리듬을 유지하는 패턴',
      '연결에 잠식되지 않으면서도 관계를 소홀히 하지 않는 흐름',
    ],
    behaviorPattern:
      '이번 선택 흐름에서는 하루 중 특정 시간대에 연결 활동을 몰아서 처리하고, 나머지 시간은 오프라인에 집중하는 경향이 관찰됩니다. 좋아요와 댓글은 꾸준히 하지만, 스크롤에 오래 머물지는 않는 패턴이 반복됩니다. "함께함"과 "나만의 시간" 사이의 경계를 스스로 잘 지키는 흐름으로 읽힙니다.',
    recommendedLifestyle:
      '연결과 고독의 비율을 5:5로 유지하는 현재 리듬을 계속 이어가 보세요. 주 1회 "디지털 없는 저녁"을 만들어 오프라인 관계를 강화하면, 디지털 연결의 질도 더 높아질 수 있습니다.',
    caution:
      '균형을 지키려다 보니, 때로는 "애매한 중간"에 머무를 수 있어요. 정말 중요한 관계에는 더 깊은 연결을, 재충전이 필요할 때는 과감히 거리를 두는 것도 도움이 됩니다.',
    summary: '연결과 고독의 균형 — 성숙한 거리감이 느껴지는 디지털 흐름.',
    color: '#c77d58',
    emoji: '🤝',
  },

  'social-heavy': {
    subtype: 'social-heavy',
    baseType: 'social',
    analysisCode: 'S-H',
    title: '깊은 연결형',
    vibe: '연결되어 있을 때 가장 나다운 느낌이 든다.\n관계가 내 에너지의 원천이다.',
    digitalTendency:
      '선택 흐름 전반에서 연결 활동이 두드러집니다. 알림과 메시지에 빠르게 반응하고, 관계로부터 정서적 에너지를 얻는 경향이 강합니다.',
    keyTraits: [
      '알림·메시지에 빠르게 반응하는 연결 민감도',
      'SNS·채팅이 하루의 상당 부분을 차지하는 경향',
      '연결이 끊기면 공허함이나 불안을 느끼는 패턴',
    ],
    behaviorPattern:
      '해당 선택 흐름에서는 기상 직후 알림 확인, 틈날 때마다 메시지 답장, 잠들기 전까지 SNS 스크롤 — 연결 활동이 하루 전체에 걸쳐 분포하는 경향이 두드러집니다. 그룹 채팅과 1:1 대화 모두 활발하게 선택되는 패턴이 보이며, 타인의 반응(좋아요, 답장)에 정서적 가치를 크게 두는 흐름으로 읽힙니다.',
    recommendedLifestyle:
      '연결의 질을 높이기 위해 "깊은 대화 시간"을 하루 1시간 정도 확보해 보세요. 얕은 스크롤 대신, 소수의 중요한 관계에 집중하면 에너지 소모 없이 충족감을 얻을 수 있습니다.',
    caution:
      '연결에 과도하게 의존하면, 혼자만의 시간이 부족해지고 정서적 소진이 올 수 있어요. 하루 1~2시간은 알림을 끄고 자신만을 위한 시간을 가져보세요.',
    summary: '관계가 삶의 중심 — 연결에서 에너지를 얻는 흐름.',
    color: '#b85c38',
    emoji: '💬',
  },

  'productive-learner': {
    subtype: 'productive-learner',
    baseType: 'productive',
    analysisCode: 'P-L',
    title: '잠재 성장형',
    vibe: '배우고 싶다는 마음은 분명하다.\n다만 아직 시작하지 못하고 있을 뿐이다.',
    digitalTendency:
      '선택 흐름에서 성장 지향 신호가 감지되지만 아직 습관화 단계에 이르지 못한 패턴입니다. 동기는 있으나 실행 빈도가 낮은 상태입니다.',
    keyTraits: [
      '스크롤보다 읽기·학습 콘텐츠를 더 자주 선택하는 경향',
      '성장 동기는 있지만, 아직 습관화되지 않은 단계로 보임',
      '소음보다 신호 — 의미 있는 정보를 찾으려는 흐름',
    ],
    behaviorPattern:
      '이번 선택 흐름에서는 무의식적으로 SNS에 들어갔다가, 곧 강의나 글로 전환하는 패턴이 관찰됩니다. 생산성 앱을 설치해 두지만 매일 쓰지는 않고, "언젠가 시작해야지" 하는 마음이 반복되는 경향이 보입니다. 배움에 대한 흥미는 분명하지만, 실행 빈도는 아직 낮은 편으로 읽힙니다.',
    recommendedLifestyle:
      '하루 15분 "성장 타임"을 정해, 작은 학습 목표 하나만 달성해 보세요. 완벽한 시스템보다 작은 습관 하나가 성장의 씨앗을 키웁니다.',
    caution:
      '성장에 대한 기대가 크면, 시작하지 못할 때 죄책감을 느낄 수 있어요. "오늘 5분만"이라도 시작하는 것이 중요합니다.',
    summary: '아직 시작되지 않은 성장 — 가능성이 기다리고 있다.',
    color: '#52b788',
    emoji: '🌱',
  },

  'productive-balanced': {
    subtype: 'productive-balanced',
    baseType: 'productive',
    analysisCode: 'P-M',
    title: '균형 성장형',
    vibe: '성장도 쉼도 내 리듬대로 간다.\n이 속도가 나에게 맞다.',
    digitalTendency:
      '선택 흐름에서 학습과 여가가 고르게 분배되는 패턴이 관찰됩니다. 극단 없이 꾸준히 자신만의 속도를 유지합니다.',
    keyTraits: [
      '학습·성장과 여가·연결을 고르게 분배하는 경향',
      '생산성 앱과 콘텐츠 소비 사이의 자기 조절 패턴',
      '극단 없이 꾸준히 자신만의 속도로 성장하는 흐름',
    ],
    behaviorPattern:
      '해당 선택 흐름에서는 아침에는 뉴스나 학습 콘텐츠, 점심에는 가벼운 SNS, 저녁에는 영상이나 게임 — 시간대별로 디지털 사용 목적을 구분하는 경향이 관찰됩니다. "오늘 뭘 배웠지?"와 "오늘 뭘 쉬었지?"를 모두 의식하는 성숙한 패턴으로 읽힙니다.',
    recommendedLifestyle:
      '현재의 균형 리듬을 유지하면서, 주 1회 "성장 회고" 시간을 가져보세요. 이번 주 배운 것과 쉰 것을 짧게 기록하면, 자기 인식이 더 선명해집니다.',
    caution:
      '균형을 지키려다 보니, 성장과 휴식 모두 "적당히"만 하게 될 수 있어요. 때로는 한쪽에 더 깊이 몰입하는 것도 필요합니다.',
    summary: '성장과 쉼의 조화 — 지혜로운 균형이 느껴지는 패턴.',
    color: '#2d6a4f',
    emoji: '📚',
  },

  'productive-focused': {
    subtype: 'productive-focused',
    baseType: 'productive',
    analysisCode: 'P-H',
    title: '집중 성장형',
    vibe: '배움이 멈추면 무언가 빠진 것 같다.\n성장이 나의 일상이다.',
    digitalTendency:
      '선택 흐름 전반이 학습과 성장으로 채워진 패턴입니다. 디지털의 대부분을 의미 있는 활동에 쓰는 경향이 뚜렷합니다.',
    keyTraits: [
      '강의·글·생산성 도구가 하루의 상당 부분을 차지하는 경향',
      '성취와 학습이 정서적 만족의 핵심 원천에 가까운 패턴',
      '어제의 자신을 조금씩 업데이트하려는 성장 지향',
    ],
    behaviorPattern:
      '이번 선택 흐름에서는 기상 후 생산성 앱 확인, 출퇴근·이동 중 오디오 강의, 저녁에는 독서나 온라인 학습 — 성장 활동이 하루 전체에 걸쳐 분포하는 경향이 두드러집니다. SNS나 영상은 "쉬는 시간"에만 짧게 접하는 선택이 반복되며, 대부분의 디지털 시간을 성장에 쓰는 흐름으로 읽힙니다.',
    recommendedLifestyle:
      '성장에 집중하는 현재 패턴을 유지하되, 주 1회 "아무것도 배우지 않는 날"을 만들어 보세요. 재충전 없이는 성장도 지속되지 않습니다.',
    caution:
      '성장에만 집중하면 번아웃이 올 수 있어요. "쉼"도 성장의 일부임을 기억하고, 가끔은 목적 없이 스크롤하는 시간도 허용해 주세요.',
    summary: '배움이 일상인 흐름 — 성장이 멈추지 않는다.',
    color: '#1b4332',
    emoji: '🎯',
  },

  'entertainment-light': {
    subtype: 'entertainment-light',
    baseType: 'entertainment',
    analysisCode: 'E-L',
    title: '가벼운 휴식형',
    vibe: '필요할 때만, 딱 그만큼만 즐긴다.\n디지털이 나를 지배하지 않는다.',
    digitalTendency:
      '선택 흐름에서 여가 사용이 제한적으로 나타납니다. 스트레스 해소가 필요한 순간에만 디지털 여가를 선택하는 절제된 패턴입니다.',
    keyTraits: [
      '디지털 여가 사용량이 적고, 필요할 때만 접근하는 경향',
      '즐거움 욕구는 낮지만, 스트레스 해소 수단으로 인식하는 패턴',
      '디지털을 지배하지 않고, 필요할 때 활용하는 흐름',
    ],
    behaviorPattern:
      '해당 선택 흐름에서는 힘든 하루 끝, 지루한 순간 — 그때만 영상 하나나 게임 한 판을 즐기는 패턴이 관찰됩니다. 평소에는 SNS나 쇼츠에 오래 머물지 않고, "오늘은 쉬고 싶다"는 마음이 있을 때만 디지털 휴식을 선택하는 경향이 보입니다.',
    recommendedLifestyle:
      '현재의 "필요할 때만" 패턴을 유지하세요. 다만, 가끔은 이유 없이 좋아하는 콘텐츠를 즐기는 "허락된 휴식"도 자신에게 선물해 보세요.',
    caution:
      '휴식을 너무 적게 가져가면, 스트레스가 쌓일 수 있어요. "쉼"도 삶의 필수 요소임을 기억하세요.',
    summary: '필요할 때만 꺼내 쓰는 쉼 — 절제된 여가의 흐름.',
    color: '#b09cd6',
    emoji: '☁️',
  },

  'entertainment-balanced': {
    subtype: 'entertainment-balanced',
    baseType: 'entertainment',
    analysisCode: 'E-M',
    title: '의식적 즐거움형',
    vibe: '즐거움은 정해진 시간에,\n그 안에서 충분히 누린다.',
    digitalTendency:
      '선택 흐름에서 디지털 여가를 계획적으로 배치하는 패턴이 관찰됩니다. 스스로 규칙을 정하고 대체로 지키는 자기 조절력이 드러납니다.',
    keyTraits: [
      '하루의 끝이나 힘든 순간, 디지털로 감정을 조절하는 경향',
      '사용량에 대한 자기 인식이 비교적 높은 패턴',
      '죄책감 없이, 필요한 만큼만 즐기려는 흐름',
    ],
    behaviorPattern:
      '이번 선택 흐름에서는 저녁 시간대에 영상이나 게임으로 하루를 마무리하고, 주말에는 조금 더 길게 몰입하는 패턴이 관찰됩니다. "오늘 1시간만" 같은 자기 규칙을 스스로 정하고, 대체로 지키려고 노력하는 경향이 보입니다.',
    recommendedLifestyle:
      '현재의 "의식적 즐거움" 리듬을 유지하세요. 휴식 시간을 미리 정해 두고, 그 안에서만 디지털 여가를 즐기면 죄책감 없이 충분히 쉴 수 있습니다.',
    caution:
      '규칙을 지키려다 보니, 때로는 "쉬고 싶은데 참는" 순간이 생길 수 있어요. 가끔은 규칙을 깨고 충분히 쉬는 것도 필요합니다.',
    summary: '계획된 즐거움 — 스스로 정한 규칙 안에서 충분히 쉰다.',
    color: '#7b2cbf',
    emoji: '🎬',
  },

  'entertainment-heavy': {
    subtype: 'entertainment-heavy',
    baseType: 'entertainment',
    analysisCode: 'E-H',
    title: '몰입형',
    vibe: '좋아하는 것에 완전히 빠져드는 순간이\n내 하루의 하이라이트다.',
    digitalTendency:
      '선택 흐름 전반에서 콘텐츠 몰입 패턴이 두드러집니다. 디지털 여가가 하루 전체에 걸쳐 분포하고, 정서 회복의 주요 통로로 작동합니다.',
    keyTraits: [
      '디지털 콘텐츠가 정서적 회복의 주요 통로로 보이는 경향',
      '몰입을 통해 스트레스를 해소하는 패턴',
      '영상·게임·스크롤이 하루의 상당 부분을 차지하는 흐름',
    ],
    behaviorPattern:
      '해당 선택 흐름에서는 기상 후 바로 쇼츠나 영상, 틈날 때마다 스크롤, 잠들기 전까지 게임이나 드라마 — 디지털 여가가 하루 전체에 걸쳐 분포하는 경향이 두드러집니다. "한 편만 더"가 반복되고, 시간 가는 줄 모르고 몰입하는 패턴이 관찰됩니다.',
    recommendedLifestyle:
      '몰입의 질을 높이기 위해 "좋아하는 콘텐츠만" 골라 보세요. 알고리즘 추천보다, 직접 선택한 콘텐츠를 즐기면 만족감은 높고 시간은 줄일 수 있습니다.',
    caution:
      '디지털에 과도하게 의존하면, 오프라인 활동과 관계가 줄어들 수 있어요. 하루 30분은 스크린 없이 보내는 시간을 만들어 보세요.',
    summary: '완전한 몰입 — 좋아하는 것에 깊이 빠져드는 흐름.',
    color: '#5a189a',
    emoji: '✨',
  },

  'digital-harmonist': {
    subtype: 'digital-harmonist',
    baseType: 'social',
    analysisCode: 'H-B',
    title: '조화형',
    vibe: '오늘 필요한 것이 내일과 다르다.\n그때그때 유연하게 움직인다.',
    digitalTendency:
      '선택 흐름에서 연결·성장·즐거움 어느 한쪽으로의 쏠림이 나타나지 않습니다. 상황에 따라 디지털 사용 목적을 자유롭게 전환하는 유연한 패턴입니다.',
    keyTraits: [
      '연결·성장·즐거움 중 어느 한쪽으로 치우치지 않는 경향',
      '상황에 따라 디지털 사용 목적을 유연하게 전환하는 패턴',
      '고정된 패턴에 얽매이지 않는 적응력',
    ],
    behaviorPattern:
      '이번 선택 흐름에서는 오늘은 SNS에 많이, 내일은 강의에 집중, 모레는 영상으로 쉼 — 날마다 디지털 사용 패턴이 달라지는 경향이 관찰됩니다. "지금 나에게 필요한 것"을 직관적으로 선택하고, 한 가지에만 몰두하지 않는 흐름으로 읽힙니다.',
    recommendedLifestyle:
      '현재의 유연함을 유지하되, 주 1회 "이번 주 나의 디지털 패턴"을 짧게 돌아보세요. 자기 인식이 높아지면, 더 의식적인 선택이 가능해집니다.',
    caution:
      '유연함이 때로는 "우유부단함"으로 보일 수 있어요. 중요한 순간에는 한 가지에 집중하는 것도 필요합니다.',
    summary: '그때그때 다른 흐름 — 상황에 맞게 자유롭게 전환한다.',
    color: '#6c757d',
    emoji: '⚖️',
  },
}

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

/** 성향 분포 차트용 기본 타입 색상 */
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
