import type { Question } from '../types/simulator'
import { questionPhases } from './quiz-copy'

export const questions: Question[] = [
  {
    id: 'q1',
    category: `${questionPhases.habit} · 1/2`,
    question: '잠에서 깬 직후,\n손이 먼저 향하는 곳은\n어디인가요?',
    subtext:
      '의식하기 전의 첫 선택이 당신의 디지털 습관을 가장 솔직하게 드러냅니다. 잠깐 떠올려보세요.',
    options: [
      {
        id: 'q1-a',
        label: '메시지와 알림',
        description: '누군가의 소식, 연결의 시작',
        emoji: '💬',
        type: 'social',
      },
      {
        id: 'q1-b',
        label: '할 일과 캘린더',
        description: '오늘을 정리하고 통제감을 회복',
        emoji: '📋',
        type: 'productive',
      },
      {
        id: 'q1-c',
        label: '영상·쇼츠·피드',
        description: '생각 없이 스크롤하며 하루를 깨우기',
        emoji: '🎬',
        type: 'entertainment',
      },
      {
        id: 'q1-d',
        label: '뉴스와 트렌드',
        description: '세상이 어떻게 돌아가는지 먼저 확인',
        emoji: '🔍',
        type: 'productive',
      },
    ],
  },
  {
    id: 'q2',
    category: `${questionPhases.habit} · 2/2`,
    question: '하루 중 가장 많은\n디지털 시간을 보내는\n곳은 어디인가요?',
    subtext:
      '자주 가는 곳이 곧 당신의 디지털 거점입니다. 생각하지 않고 열게 되는 앱을 떠올려보세요.',
    options: [
      {
        id: 'q2-a',
        label: '메시지와 SNS',
        description: '대화, 스토리, 관계의 유지',
        emoji: '💬',
        type: 'social',
      },
      {
        id: 'q2-b',
        label: '강의·독서·생산성 앱',
        description: '배우고, 정리하고, 성장하는 시간',
        emoji: '📚',
        type: 'productive',
      },
      {
        id: 'q2-c',
        label: '영상·게임·스트리밍',
        description: '웃고, 쉬고, 빠져드는 시간',
        emoji: '🎮',
        type: 'entertainment',
      },
      {
        id: 'q2-d',
        label: '친구와의 단체 채팅',
        description: '함께 있을 때 가장 오래 머무는 공간',
        emoji: '🫂',
        type: 'social',
      },
    ],
  },
  {
    id: 'q3',
    category: `${questionPhases.situational} · 1/2`,
    question: '갑자기 알림이 울릴 때,\n당신의 첫 반응은?',
    subtext:
      '예상치 못한 순간의 반응이, 습관과 다른 진짜 성향을 보여줍니다.',
    options: [
      {
        id: 'q3-a',
        label: '바로 확인한다',
        description: '누군가 나를 필요로 하는지 먼저 본다',
        emoji: '👀',
        type: 'social',
      },
      {
        id: 'q3-b',
        label: '나중에 처리한다',
        description: '지금 하는 일을 마치고 확인',
        emoji: '✅',
        type: 'productive',
      },
      {
        id: 'q3-c',
        label: '무시하고 넘긴다',
        description: '흐름을 끊기 싫어서 미룬다',
        emoji: '📱',
        type: 'entertainment',
      },
      {
        id: 'q3-d',
        label: '스트레스를 받는다',
        description: '또 연결되어야 한다는 부담감',
        emoji: '😮‍💨',
        type: 'social',
      },
    ],
  },
  {
    id: 'q4',
    category: `${questionPhases.situational} · 2/2`,
    question: '혼자 기다리는 10분,\n당신은 무엇을 하나요?',
    subtext:
      '공백의 순간 — 심심함, 불안, 혹은 자유. 그때의 선택이 당신을 말해줍니다.',
    options: [
      {
        id: 'q4-a',
        label: '누군가에게 연락한다',
        description: '혼자 있는 시간이 길게 느껴질 때',
        emoji: '💌',
        type: 'social',
      },
      {
        id: 'q4-b',
        label: '미뤄둔 글·강의를 본다',
        description: '남는 시간을 성장에 쓰려는 습관',
        emoji: '📝',
        type: 'productive',
      },
      {
        id: 'q4-c',
        label: '알고리즘 추천 콘텐츠',
        description: '생각 없이 다음, 다음, 다음',
        emoji: '▶️',
        type: 'entertainment',
      },
      {
        id: 'q4-d',
        label: '아무것도 하지 않는다',
        description: '디지털 없이 공백을 버티거나 음악만 듣는다',
        emoji: '🎧',
        type: 'entertainment',
      },
    ],
  },
  {
    id: 'q5',
    category: questionPhases.decisive,
    question: '내일 하루,\n디지털을 단 하나의\n목적만 위해 쓴다면?',
    subtext:
      '마지막 질문입니다. 선택을 줄였을 때 남는 것 — 그것이 당신의 핵심 성향입니다.',
    options: [
      {
        id: 'q5-a',
        label: '사람과 연결하기',
        description: '대화, 공유, 함께함',
        emoji: '🤝',
        type: 'social',
      },
      {
        id: 'q5-b',
        label: '배우고 성장하기',
        description: '지식, 정리, 자기계발',
        emoji: '🌱',
        type: 'productive',
      },
      {
        id: 'q5-c',
        label: '쉬고 즐기기',
        description: '웃음, 휴식, 감정 회복',
        emoji: '✨',
        type: 'entertainment',
      },
      {
        id: 'q5-d',
        label: '추억을 남기기',
        description: '사진, 기록, 공유된 순간',
        emoji: '📸',
        type: 'social',
      },
    ],
  },
]

export const TOTAL_QUESTIONS = questions.length

export const introCopy = {
  eyebrow: 'Digital Behavior Analysis',
  title: '디지털 선택\n시뮬레이터',
  subtitle:
    '5개의 디지털 선택을 분석하여\n당신만의 행동 패턴 리포트를 생성합니다.',
  cta: '분석 시작하기',
}

export const calculatingCopy = {
  title: '디지털 성향 분석 리포트를 생성하고 있습니다',
  messages: [
    '수집된 5개 응답을 행동 패턴 데이터로 변환하는 중…',
    '연결·성장·즐거움 축 분포와 강도(intensity)를 계산하는 중…',
    '세부 유형(subtype) 매칭 및 교차 검증을 수행하는 중…',
    '행동 패턴·라이프스타일·주의점 섹션을 작성하는 중…',
    '개인 맞춤 분석 리포트 생성이 완료되었습니다',
  ],
}
