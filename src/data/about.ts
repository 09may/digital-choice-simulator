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
  tagline: '당신의 디지털 선택을 읽습니다',

  sections: [
    {
      id: 'problem',
      number: '01',
      title: '왜 FLOWTYPE인가',
      lead: '같은 시간을 써도, 그 이유는 모두 다릅니다.',
      body:
        '누군가는 사람과 연결되기 위해 화면을 켜고\n누군가는 잠깐의 여유를 위해 스크롤을 내립니다.\n\n하지만 기록에 남는 건 늘 “사용 시간”뿐이죠.\n\nFLOWTYPE는 그 시간보다, 그 시간을 만든 “선택”에 더 가까이 다가갑니다.',
    },

    {
      id: 'intro',
      number: '02',
      title: '우리가 바라보는 것',
      lead: '중요한 건 얼마나 썼는지가 아니라, 어떻게 썼는지입니다.',
      body:
        '알림을 확인하고, 스크롤을 내리고, 메시지를 보내고, 영상을 재생하는 순간들.\n\n이 작은 선택들이 쌓여\n하루의 흐름을 만듭니다.\n\n우리는 그 흐름 속에서 디지털 습관을 읽어냅니다.',
    },

    {
      id: 'what',
      number: '03',
      title: '세 가지 흐름',
      lead: '모든 선택은 결국 세 가지 방향으로 모입니다.',
      body:
        '연결 — 사람과 이어지려는 선택\n성장 — 배우고 정리하려는 선택\n즐거움 — 쉬고 회복하려는 선택\n\n다섯 번의 선택이 쌓이면\n당신이 어느 쪽에 더 자연스럽게 기울어 있는지 드러납니다.',
    },

    {
      id: 'method',
      number: '04',
      title: '다섯 개의 질문',
      lead: '습관에서 시작해, 방향으로 이어집니다.',
      body:
        '1~2번은 무의식적인 습관\n3~4번은 순간적인 반응\n5번은 하루 전체를 비추는 선택\n\n뒤로 갈수록 당신의 흐름은 더 선명해집니다.',
    },

    {
      id: 'flowtype',
      number: '05',
      title: '선택 → 흐름 → 타입',
      lead: '작은 선택들이 모여 하나의 패턴이 됩니다.',
      body:
        'Choice : 다섯 번의 선택\nFlow : 선택이 만들어낸 방향\nType : 그 흐름의 이름\n\n이 결과는 평가가 아니라\n지금의 상태를 읽어낸 해석입니다.',
    },

    {
      id: 'value',
      number: '06',
      title: '이 테스트의 태도',
      lead: '이건 정답을 맞히는 테스트가 아닙니다.',
      body:
        '맞고 틀린 답은 없습니다.\n좋고 나쁨으로 나뉘지도 않습니다.\n\n그저 지금 당신의 선택들이\n어떤 흐름을 만들고 있는지 보여줄 뿐입니다.',
    },
  ] satisfies AboutSection[],

  values: [
    {
      icon: '◇',
      title: 'Choice',
      description: '다섯 번의 선택',
    },
    {
      icon: '○',
      title: 'Flow',
      description: '선택이 만든 흐름',
    },
    {
      icon: '△',
      title: 'Type',
      description: '그 흐름의 이름',
    },
  ] satisfies AboutValue[],

  closing:
    'Choice → Flow → Type\n지금, 당신의 흐름을 확인해보세요.',

  backLabel: '돌아가기',
  startLabel: '시작하기',
  linkLabel: '이 경험이 궁금하다면',
}