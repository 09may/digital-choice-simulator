import type { Question } from '../types/simulator'
import { brandName } from './brand'
import { questionPhases } from './quiz-copy'

export const questions: Question[] = [
  {
    id: 'q1',
    category: `${questionPhases.habit} · 1/2`,
    question: '아침에 눈을 뜨자마자\n가장 먼저 하는 행동은\n무엇인가요?',
    subtext: '생각하기 전에 손이 먼저 향하는 곳을 떠올려보세요.',
    options: [
      {
        id: 'q1-a',
        label: '메시지 확인 (연결)',
        description: '누군가와 이어진다',
        emoji: '💬',
        type: 'social',
      },
      {
        id: 'q1-b',
        label: '일정·할 일 확인 (성장)',
        description: '하루를 정리한다',
        emoji: '📋',
        type: 'productive',
      },
      {
        id: 'q1-c',
        label: '영상·피드 열기 (즐거움)',
        description: '생각 없이 시작한다',
        emoji: '🎬',
        type: 'entertainment',
      },
      {
        id: 'q1-d',
        label: '뉴스 확인 (성장)',
        description: '세상을 먼저 본다',
        emoji: '🔍',
        type: 'productive',
      },
    ],
  },
  {
    id: 'q2',
    category: `${questionPhases.habit} · 2/2`,
    question: '하루 중 가장 오래 머무는\n디지털 공간은 어디인가요?',
    subtext: '가장 자주 열리는 앱을 떠올려보세요.',
    options: [
      {
        id: 'q2-a',
        label: '메시지 / SNS (연결)',
        description: '관계 유지',
        emoji: '💬',
        type: 'social',
      },
      {
        id: 'q2-b',
        label: '학습 / 생산성 (성장)',
        description: '기록과 성장',
        emoji: '📚',
        type: 'productive',
      },
      {
        id: 'q2-c',
        label: '영상 / 게임 (즐거움)',
        description: '몰입과 휴식',
        emoji: '🎮',
        type: 'entertainment',
      },
      {
        id: 'q2-d',
        label: '단체 채팅 (연결)',
        description: '함께 머무는 공간',
        emoji: '🫂',
        type: 'social',
      },
    ],
  },
  {
    id: 'q3',
    category: `${questionPhases.situational} · 1/2`,
    question: '알림이 울렸을 때\n가장 먼저 하는 반응은\n무엇인가요?',
    options: [
      {
        id: 'q3-a',
        label: '바로 확인한다 (연결)',
        description: '누군가의 신호에 반응한다',
        emoji: '👀',
        type: 'social',
      },
      {
        id: 'q3-b',
        label: '나중에 처리한다 (성장)',
        description: '지금 하는 일을 마친 뒤 본다',
        emoji: '✅',
        type: 'productive',
      },
      {
        id: 'q3-c',
        label: '무시한다 (즐거움)',
        description: '방해받고 싶지 않다',
        emoji: '📱',
        type: 'entertainment',
      },
      {
        id: 'q3-d',
        label: '부담을 느낀다 (연결)',
        description: '연결의 압박을 느낀다',
        emoji: '😮‍💨',
        type: 'social',
      },
    ],
  },
  {
    id: 'q4',
    category: `${questionPhases.situational} · 2/2`,
    question: '혼자 기다리는 10분,\n무엇을 하나요?',
    options: [
      {
        id: 'q4-a',
        label: '누군가에게 연락한다 (연결)',
        description: '관계로 공백을 채운다',
        emoji: '💌',
        type: 'social',
      },
      {
        id: 'q4-b',
        label: '미뤄둔 일을 처리한다 (성장)',
        description: '남는 시간을 쓴다',
        emoji: '📝',
        type: 'productive',
      },
      {
        id: 'q4-c',
        label: '추천 콘텐츠를 본다 (즐거움)',
        description: '가볍게 스크롤한다',
        emoji: '▶️',
        type: 'entertainment',
      },
      {
        id: 'q4-d',
        label: '아무것도 하지 않는다 (즐거움)',
        description: '디지털 없이 기다린다',
        emoji: '🎧',
        type: 'entertainment',
      },
    ],
  },
  {
    id: 'q5',
    category: questionPhases.decisive,
    question: '내일 하루, 디지털을\n단 하나의 목적으로만 쓴다면\n무엇을 선택하겠나요?',
    options: [
      {
        id: 'q5-a',
        label: '사람과 연결하기 (연결)',
        description: '대화와 관계',
        emoji: '🤝',
        type: 'social',
      },
      {
        id: 'q5-b',
        label: '배우고 성장하기 (성장)',
        description: '배움과 정리',
        emoji: '🌱',
        type: 'productive',
      },
      {
        id: 'q5-c',
        label: '쉬고 회복하기 (즐거움)',
        description: '휴식과 회복',
        emoji: '✨',
        type: 'entertainment',
      },
      {
        id: 'q5-d',
        label: '기록하고 남기기 (연결)',
        description: '사진과 추억',
        emoji: '📸',
        type: 'social',
      },
    ],
  },
]

export const TOTAL_QUESTIONS = questions.length

export const introCopy = {
  eyebrow: brandName,
  title: '당신의 디지털 흐름을\n읽는 5개의 선택',
  subtitle: '우리는 얼마나 쓰는지가 아니라\n어떻게 선택하는지를 봅니다.',
  hint: '지금의 당신은 어떤 흐름에 가까울까요?',
  cta: '시작하기',
  aboutLink: 'FLOWTYPE 소개 보기',
}

export const calculatingCopy = {
  title: '결과를 정리하는 중입니다',
  subtitle: '당신의 선택을 하나의 흐름으로 연결하고 있습니다',
  messages: [
    '선택을 정리하고 있습니다',
    '패턴을 분석하는 중입니다',
    '흐름의 방향을 계산하고 있습니다',
    '당신의 흐름을 완성하고 있습니다',
    '결과가 곧 완성됩니다',
  ],
}
