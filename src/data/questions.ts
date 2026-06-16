import type { Question } from '../types/simulator'
import { brandName } from './brand'
import { questionPhases } from './quiz-copy'

export const questions: Question[] = [
  {
    id: 'q1',
    category: `${questionPhases.habit} · 1/2`,
    question: '아침에 눈을 뜨면\n가장 먼저 뭐부터 보게 되나요?',
    subtext: '생각하기 전에 손이 먼저 가는 걸 떠올려보세요.',
    options: [
      {
        id: 'q1-a',
        label: '메시지 확인',
        description: '누군가와 연결된 느낌을 먼저 확인한다',
        emoji: '💬',
        type: 'social',
      },
      {
        id: 'q1-b',
        label: '일정 확인',
        description: '오늘 할 일을 먼저 정리한다',
        emoji: '📋',
        type: 'productive',
      },
      {
        id: 'q1-c',
        label: '영상 보기',
        description: '아무 생각 없이 바로 시작한다',
        emoji: '🎬',
        type: 'entertainment',
      },
      {
        id: 'q1-d',
        label: '뉴스 보기',
        description: '세상을 먼저 훑어본다',
        emoji: '🔍',
        type: 'productive',
      },
    ],
  },

  {
    id: 'q2',
    category: `${questionPhases.habit} · 2/2`,
    question: '하루 중 가장 오래 머무는 곳은\n어디인가요?',
    subtext: '자주 들어가는 앱을 떠올려보세요.',
    options: [
      {
        id: 'q2-a',
        label: '메시지 / SNS',
        description: '사람들과 계속 연락한다',
        emoji: '💬',
        type: 'social',
      },
      {
        id: 'q2-b',
        label: '학습 / 생산성 앱',
        description: '기록하고 정리하는 편이다',
        emoji: '📚',
        type: 'productive',
      },
      {
        id: 'q2-c',
        label: '영상 / 게임',
        description: '시간을 보내며 쉬는 편이다',
        emoji: '🎮',
        type: 'entertainment',
      },
      {
        id: 'q2-d',
        label: '단체 채팅',
        description: '여럿 속에서 자연스럽게 머문다',
        emoji: '🫂',
        type: 'social',
      },
    ],
  },

  {
    id: 'q3',
    category: `${questionPhases.situational} · 1/2`,
    question: '알림이 울리면\n보통 어떻게 하세요?',
    options: [
      {
        id: 'q3-a',
        label: '바로 확인한다',
        description: '울리면 바로 손이 간다',
        emoji: '👀',
        type: 'social',
      },
      {
        id: 'q3-b',
        label: '나중에 본다',
        description: '하던 일을 먼저 끝낸다',
        emoji: '✅',
        type: 'productive',
      },
      {
        id: 'q3-c',
        label: '그냥 넘긴다',
        description: '지금은 방해받고 싶지 않다',
        emoji: '📱',
        type: 'entertainment',
      },
      {
        id: 'q3-d',
        label: '조금 부담스럽다',
        description: '알림이 은근히 신경 쓰인다',
        emoji: '😮‍💨',
        type: 'social',
      },
    ],
  },

  {
    id: 'q4',
    category: `${questionPhases.situational} · 2/2`,
    question: '혼자 10분 정도 기다리게 되면\n보통 뭘 하나요?',
    options: [
      {
        id: 'q4-a',
        label: '누군가에게 연락한다',
        description: '사람에게 먼저 손이 간다',
        emoji: '💌',
        type: 'social',
      },
      {
        id: 'q4-b',
        label: '미뤄둔 일을 한다',
        description: '짧은 시간도 활용한다',
        emoji: '📝',
        type: 'productive',
      },
      {
        id: 'q4-c',
        label: '추천 콘텐츠를 본다',
        description: '흘러가는 대로 본다',
        emoji: '▶️',
        type: 'entertainment',
      },
      {
        id: 'q4-d',
        label: '아무것도 안 한다',
        description: '그냥 멍하게 시간을 보낸다',
        emoji: '🎧',
        type: 'entertainment',
      },
    ],
  },

  {
    id: 'q5',
    category: questionPhases.decisive,
    question: '내일 하루를 하나로만 채운다면\n무엇을 고르겠어요?',
    options: [
      {
        id: 'q5-a',
        label: '사람과 연결하기',
        description: '대화하고 관계를 나눈다',
        emoji: '🤝',
        type: 'social',
      },
      {
        id: 'q5-b',
        label: '배우고 성장하기',
        description: '새로운 걸 익히고 정리한다',
        emoji: '🌱',
        type: 'productive',
      },
      {
        id: 'q5-c',
        label: '쉬고 회복하기',
        description: '아무것도 하지 않고 쉰다',
        emoji: '✨',
        type: 'entertainment',
      },
      {
        id: 'q5-d',
        label: '기록하고 남기기',
        description: '사진이나 글로 남기는 편이다',
        emoji: '📸',
        type: 'social',
      },
    ],
  },
]

export const TOTAL_QUESTIONS = questions.length

export const introCopy = {
  eyebrow: brandName,
  title: '우리는 하루를 생각보다\n먼저 ‘선택’으로 시작합니다.',
  subtitle:
    'FLOWTYPE는 당신의 선택을 통해\n일상 속 결정 패턴을 읽어내는 테스트입니다.',
  hint: '지금부터 5개의 선택이 이어집니다.',
  structure: [
    '습관 — 무의식적으로 먼저 나오는 선택',
    '상황 — 순간의 조건에 따라 달라지는 선택',
    '방향 — 선택을 이끄는 기준',
  ],
  detail:
    '짧은 선택들을 통해\n지금 당신의 선택 방식이 어떻게 움직이고 있는지 확인해보세요.',
  cta: '시작하기',
  aboutLink: '이 테스트는 뭐예요?',
}

export const calculatingCopy = {
  title: '결과를 정리하고 있어요',
  subtitle: '당신이 고른 선택들을 하나씩 살펴보고 있습니다',
  messages: [
    '조금만 기다려 주세요',
    '선택들을 정리하는 중이에요',
    '패턴을 확인하고 있어요',
    '흐름을 보고 있어요',
    '거의 다 됐어요',
  ],
}