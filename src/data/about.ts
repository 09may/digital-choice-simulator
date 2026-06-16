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
  eyebrow: 'Digital Behavior Research · Graduation Project 2026',
  title: '디지털 선택\n시뮬레이터',
  tagline:
    '디지털 환경 속 반복되는 선택을 수집·해석하여\n개인의 행동 패턴을 리포트로 반환하는\n인터랙티브 분석 시스템입니다.',

  sections: [
    {
      id: 'problem',
      number: '01',
      title: '문제 정의',
      lead: '디지털 사용 시간은 측정되지만, 선택의 동기와 성향은 거의 설명되지 않습니다.',
      body: '우리는 "스크린 타임"으로 디지털 사용을 평가하지만, 같은 2시간이라도 연결·성장·휴식을 위한 선택은 전혀 다른 심리에서 나옵니다.\n\n디지털 선택과 성향의 관계를 설명할 언어가 부족하기 때문에, 사용자는 자신의 패턴을 이해하기보다 죄책감을 느끼기 쉽습니다. 본 프로젝트는 이 간극을 "선택 패턴 분석"으로 메우는 것을 목표로 합니다.',
    },
    {
      id: 'intro',
      number: '02',
      title: '연구 목적',
      lead: '"얼마나 썼는가"가 아니라, "왜 그렇게 선택하는가"를 탐구합니다.',
      body: '「디지털 선택 시뮬레이터」는 5개의 상황 질문 응답을 분석하여 개인 맞춤 디지털 성향 리포트를 생성하는 연구형 인터랙티브 경험입니다.\n\n임상 진단 도구가 아닙니다. 사용자가 자신의 디지털 행동을 객관적으로 돌아볼 수 있는 해석 프레임을 제공합니다.',
    },
    {
      id: 'what',
      number: '03',
      title: '디지털 선택이란',
      lead: '알림 확인, 영상 선택, 메시지 전송 — 작은 결정의 반복이 행동 패턴을 만듭니다.',
      body: '디지털 선택이란 디지털 환경에서 내리는 의식적·무의식적 결정을 말합니다. 본 시스템은 이를 세 가지 행동 축으로 분류합니다.\n\n연결(Social) — 관계·소통\n성장(Productive) — 학습·생산·정리\n즐거움(Entertainment) — 휴식·자극·감정 조절',
    },
    {
      id: 'method',
      number: '04',
      title: '분석 구조',
      lead: '3 Type · Intensity · Subtype — 3단계 파이프라인으로 결과를 생성합니다.',
      body: 'Step 1 — Type Classification\n5개 응답을 세 축으로 분류하고, 최다 출현 축을 Primary Type으로 결정합니다.\n\nStep 2 — Intensity Calculation\nPrimary Type 출현 빈도로 강도를 산출합니다.\n· 4~5회 Heavy · 3회 Mid · 1~2회 Light\n\nStep 3 — Subtype Matching\nType + Intensity로 9종 세부 유형을 매칭합니다. 세 축이 고르게 분포하면 「디지털 조화형」으로 분류합니다.\n\n최종 출력: 10종 프로필 분석 리포트',
    },
    {
      id: 'ux',
      number: '05',
      title: 'UX 설계 의도',
      lead: '단순 설문이 아니라, 분석 시스템을 경험하도록 설계했습니다.',
      body: '습관(1~2) → 상황 반응(3~4) → 성향 확정(5)의 3단계 질문 구조로 점진적 몰입을 유도합니다. 중간 analyzing 단계와 calculating 단계는 "시스템이 실제로 해석하는 과정"을 체감하게 하며, Result는 각 섹션의 존재 이유를 설명하는 리포트 형식으로 구성했습니다.\n\n목표는 빠른 결과 제공이 아니라, 자기 관찰의 깊이를 확보하는 것입니다.',
    },
    {
      id: 'value',
      number: '06',
      title: '기대 효과',
      lead: '진단이 아닌 해석 — 패턴을 읽고 돌아보는 경험.',
      body: '올바른 사용법을 강요하지 않습니다. 선택 데이터를 바탕으로 성향 분포, 행동 패턴, 라이프스타일 제안, 주의점을 담은 개인 리포트를 제공합니다.\n\n졸업 작품으로서, 디지털 행동 분석을 설득력 있는 UX·카피·리포트 구조로 구현하는 것이 기여점입니다.',
    },
  ] satisfies AboutSection[],

  values: [
    {
      icon: '◇',
      title: '3-Phase 질문',
      description: '습관 → 상황 → 확정. 점진적으로 깊어지는 자기 탐색 구조.',
    },
    {
      icon: '○',
      title: '분석 파이프라인',
      description: 'Type · Intensity · Subtype 3단계로 결과를 생성.',
    },
    {
      icon: '△',
      title: '리포트형 결과',
      description: '섹션별 근거 설명이 포함된 분석 리포트 UX.',
    },
  ] satisfies AboutValue[],

  closing:
    '디지털 선택은 패턴이 됩니다.\n이 프로젝트는 그 패턴을 함께 읽어보는\n인터랙티브 분석 경험입니다.',

  backLabel: '돌아가기',
  startLabel: '분석 시작하기',
}
