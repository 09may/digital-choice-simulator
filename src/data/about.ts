import { brandName } from './brand'

export interface AboutSection {
  id: string
  number: string
  title: string
  /** 감성적 도입 문장 */
  lead: string
  /** 설명 본문 */
  body: string
}

export interface AboutValue {
  icon: string
  title: string
  description: string
}

export const aboutCopy = {
  eyebrow: brandName,
  title: brandName,
  tagline: '당신의 디지털 선택을 읽다',

  sections: [
    {
      id: 'problem',
      number: '01',
      title: '왜 FLOWTYPE인가',
      lead: '사용 시간은 보여주지만, 선택의 이유는 보여주지 않습니다.',
      body: '같은 2시간이라도 의미는 전혀 다릅니다.\n누군가는 연결을 위해, 누군가는 휴식을 위해, 누군가는 무의식적으로 화면을 켭니다.\n\nFLOWTYPE는 "시간"이 아니라\n그 시간을 만든 "선택"을 읽습니다.',
    },
    {
      id: 'intro',
      number: '02',
      title: '우리가 보는 것',
      lead: '중요한 건 사용량이 아니라 선택의 방향입니다.',
      body: '알림, 스크롤, 메시지, 영상 시청.\n이 작은 선택들이 반복되며 하나의 패턴을 만듭니다.\n\n우리는 그 패턴을 통해\n당신의 디지털 경향을 이해합니다.',
    },
    {
      id: 'what',
      number: '03',
      title: '세 가지 흐름',
      lead: '모든 선택은 세 가지 방향 중 하나로 흐릅니다.',
      body: '연결: 사람과 관계를 중심에 둔 선택\n성장: 배우고 정리하며 나아가려는 선택\n즐거움: 쉬고 회복하기 위한 선택\n\n다섯 번의 선택이 모이면\n당신이 어느 쪽에 더 가까운지 드러납니다.',
    },
    {
      id: 'method',
      number: '04',
      title: '다섯 개의 질문',
      lead: '습관에서 시작해, 방향으로 이어집니다.',
      body: '1–2. 습관 — 무의식적인 첫 행동\n3–4. 상황 — 순간 반응\n5. 방향 — 하루를 대표하는 선택\n\n질문이 이어질수록\n당신의 패턴은 더 선명해집니다.',
    },
    {
      id: 'flowtype',
      number: '05',
      title: '선택 → 흐름 → 타입',
      lead: '작은 선택이 모여 하나의 흐름이 됩니다.',
      body: 'Choice: 다섯 번의 선택\nFlow: 선택이 만든 방향성\nType: 그 흐름의 이름\n\n이 결과는 평가가 아니라\n현재 상태의 해석입니다.',
    },
    {
      id: 'value',
      number: '06',
      title: '이 테스트의 태도',
      lead: '이건 테스트가 아니라 해석입니다.',
      body: '정답도 오답도 없습니다.\n좋고 나쁨도 없습니다.\n\n그저 지금의 선택들이\n어떤 흐름을 만들고 있는지 보여줍니다.',
    },
  ] satisfies AboutSection[],

  values: [
    {
      icon: '◇',
      title: 'Choice',
      description: '다섯 번의 선택.',
    },
    {
      icon: '○',
      title: 'Flow',
      description: '선택이 만든 방향성.',
    },
    {
      icon: '△',
      title: 'Type',
      description: '그 흐름의 이름.',
    },
  ] satisfies AboutValue[],

  closing:
    '선택 → 흐름 → 타입.\n지금, 당신의 흐름을 확인해 보세요.',

  backLabel: '돌아가기',
  startLabel: '시작하기',
  linkLabel: '이 경험이 궁금하다면',
}
