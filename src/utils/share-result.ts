import { profiles, profileSubtypeOrder } from '../data/profiles'
import { buildScores } from './quiz-result'
import type { ProfileSubtype } from '../types/simulator'
import type { TypeCountMap } from '../types/quiz-result'

export const SHARE_QUERY_KEY = 'type'

const SUBTYPE_SET = new Set<string>(profileSubtypeOrder)

export function isValidShareSubtype(value: string): value is ProfileSubtype {
  return SUBTYPE_SET.has(value)
}

export function parseShareSubtypeFromUrl(
  search = window.location.search,
): ProfileSubtype | null {
  const raw = new URLSearchParams(search).get(SHARE_QUERY_KEY)
  if (!raw || !isValidShareSubtype(raw)) return null
  return raw
}

export function buildShareUrl(subtype: ProfileSubtype): string {
  const url = new URL(window.location.href)
  url.search = ''
  url.searchParams.set(SHARE_QUERY_KEY, subtype)
  return url.toString()
}

export function clearShareUrl(): void {
  const url = new URL(window.location.href)
  url.search = ''
  window.history.replaceState(null, '', url.toString())
}

/** 공유 링크용 대표 분포 — 리포트 시각화에 사용 */
const SHARE_COUNTS: Record<ProfileSubtype, TypeCountMap> = {
  'social-light': { social: 2, productive: 2, entertainment: 1 },
  'social-harmonious': { social: 3, productive: 1, entertainment: 1 },
  'social-heavy': { social: 4, productive: 1, entertainment: 0 },
  'productive-learner': { social: 1, productive: 2, entertainment: 2 },
  'productive-balanced': { social: 1, productive: 3, entertainment: 1 },
  'productive-focused': { social: 0, productive: 4, entertainment: 1 },
  'entertainment-light': { social: 2, productive: 1, entertainment: 2 },
  'entertainment-balanced': { social: 1, productive: 1, entertainment: 3 },
  'entertainment-heavy': { social: 0, productive: 1, entertainment: 4 },
  'digital-harmonist': { social: 2, productive: 2, entertainment: 1 },
}

export function getSharedProfileResult(subtype: ProfileSubtype) {
  const profile = profiles[subtype]
  const counts = SHARE_COUNTS[subtype]
  const scores = buildScores(counts)

  return {
    primary: profile.baseType,
    subtype,
    intensity: null,
    scores,
    profile,
    counts,
    isShared: true as const,
  }
}
