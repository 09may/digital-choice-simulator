/**
 * 디지털 선택 시뮬레이터 — Design System
 *
 * TypeScript 토큰 정의. CSS 변수(--ds-*)와 1:1 대응.
 * 컴포넌트/페이지에서 프로그래밍적으로 참조할 때 사용.
 */

export const colors = {
  accent: '#2d6a4f',
  accentHover: '#245a42',
  accentMuted: '#40916c',
  accentSoft: 'rgba(45, 106, 79, 0.1)',

  background: {
    base: '#f7f6f3',
    elevated: '#ffffff',
    muted: '#efede8',
  },

  surface: '#ffffff',

  text: {
    /** 제목, 본문 강조 */
    primary: '#1a1a1a',
    /** 설명, 부제 */
    secondary: '#6b6b6b',
    /** 힌트, 메타, 캡션 */
    tertiary: '#9a9a9a',
    /** accent 배경 위 텍스트 */
    inverse: '#ffffff',
    /** eyebrow, 카테고리 라벨 */
    accent: '#40916c',
  },

  border: {
    default: 'rgba(0, 0, 0, 0.08)',
    strong: 'rgba(0, 0, 0, 0.14)',
  },
} as const

export const spacing = {
  unit: 4,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
  '2xl': 64,
  '3xl': 96,

  /** 페이지 좌우 패딩 */
  pageX: 24,
  /** 페이지 상하 패딩 */
  pageY: 64,
  /** 섹션 간 간격 */
  section: 40,
  /** 수직 스택 gap */
  stack: 16,
} as const

export const typography = {
  fontFamily:
    "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",

  size: {
    xs: '0.8125rem',
    sm: '0.9375rem',
    base: '1.0625rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '2.75rem',
    '4xl': '3.5rem',
  },

  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.6,
    relaxed: 1.75,
  },
} as const

export const button = {
  variants: ['primary', 'secondary', 'ghost'] as const,
  sizes: ['md', 'lg'] as const,

  rules: {
    borderRadius: '9999px',
    minHeight: { md: 44, lg: 52 },
    padding: {
      md: '12px 28px',
      lg: '16px 36px',
    },
    hover: 'translateY(-1px)',
    active: 'scale(0.98)',
    disabledOpacity: 0.4,
  },
} as const

export const card = {
  variants: ['default', 'interactive', 'selected'] as const,

  rules: {
    borderRadius: '20px',
    padding: {
      compact: 16,
      default: 24,
      spacious: 40,
    },
    shadow: '0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.04)',
    hoverLift: 'translateY(-2px)',
    selectedOutline: '2px solid accent',
  },
} as const

export const layout = {
  contentMaxWidth: 640,
  wideMaxWidth: 760,
} as const

export const designSystem = {
  colors,
  spacing,
  typography,
  button,
  card,
  layout,
} as const

export type ButtonVariant = (typeof button.variants)[number]
export type ButtonSize = (typeof button.sizes)[number]
export type CardVariant = (typeof card.variants)[number]

export type TextHierarchy = keyof typeof colors.text
