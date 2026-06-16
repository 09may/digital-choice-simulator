import { useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import {
  profileTypeOrder,
  profileTypeLabels,
  profileTypeColors,
  subtypeLabels,
  resultCopy,
} from '../data'
import type { DigitalProfile, ProfileScore } from '../types'
import { buildShareUrl } from '../utils/share-result'
import { Button, ScoreBar } from '../components'
import './ResultPage.css'

interface ResultPageProps {
  profile: DigitalProfile
  scores: ProfileScore[]
  isShared?: boolean
  onRestart: () => void
  onAbout: () => void
}

function MultilineText({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line, i, arr) => (
        <span key={i}>
          {line}
          {i < arr.length - 1 && <br />}
        </span>
      ))}
    </>
  )
}

interface ReportCardProps {
  index: number
  title: string
  icon: string
  variant?: 'default' | 'accent' | 'warning' | 'summary' | 'chart'
  revealClass?: string
  children: ReactNode
}

function ReportCard({
  index,
  title,
  icon,
  variant = 'default',
  revealClass = '',
  children,
}: ReportCardProps) {
  return (
    <article
      className={`result-report__card result-report__card--${variant} result-report__reveal ${revealClass}`.trim()}
    >
      <header className="result-report__card-header">
        <span className="result-report__card-index" aria-hidden="true">
          {String(index).padStart(2, '0')}
        </span>
        <span className="result-report__card-icon" aria-hidden="true">
          {icon}
        </span>
        <h2 className="result-report__card-title">{title}</h2>
      </header>
      <div className="result-report__card-body">{children}</div>
    </article>
  )
}

export function ResultPage({
  profile,
  scores,
  isShared = false,
  onRestart,
  onAbout,
}: ResultPageProps) {
  const [shareCopied, setShareCopied] = useState(false)

  const orderedScores = profileTypeOrder
    .map((type) => scores.find((s) => s.type === type))
    .filter(Boolean) as ProfileScore[]

  const primaryScore = orderedScores.find((s) => s.type === profile.baseType)
  const subtypeLabel = subtypeLabels[profile.subtype]

  const handleShare = async () => {
    const url = buildShareUrl(profile.subtype)
    try {
      await navigator.clipboard.writeText(url)
      setShareCopied(true)
      window.setTimeout(() => setShareCopied(false), 2000)
    } catch {
      window.prompt('아래 링크를 복사하세요:', url)
    }
  }

  return (
    <section
      className="result-report"
      aria-label="결과 리포트"
      style={{ '--report-accent': profile.color } as CSSProperties}
    >
      <div className="result-report__ambient" aria-hidden="true">
        <div className="result-report__orb result-report__orb--1" />
        <div className="result-report__orb result-report__orb--2" />
      </div>

      <div className="result-report__scroll ds-scroll-pane">
        <div className="result-report__inner">
          <header className="result-report__cover result-report__reveal">
            <p className="result-report__eyebrow">{resultCopy.eyebrow}</p>
            {resultCopy.intro.map((line) => (
              <p key={line} className="result-report__meta">
                {line}
              </p>
            ))}
            {isShared && (
              <p className="result-report__meta">{resultCopy.sharedNote}</p>
            )}
            <span
              className="result-report__code"
              aria-label={`분석 코드 ${profile.analysisCode}`}
            >
              {profile.analysisCode}
            </span>
            <span className="result-report__emoji" aria-hidden="true">
              {profile.emoji}
            </span>
            <h1 className="result-report__title">
              <MultilineText text={profile.title} />
            </h1>
            <p className="result-report__subtype">{subtypeLabel}</p>
            {primaryScore && (
              <p className="result-report__meta">
                {isShared ? (
                  <>
                    이 유형의 대표 분포 —{' '}
                    <strong>{profileTypeLabels[profile.baseType]}</strong> 성향{' '}
                    <strong>{primaryScore.score}회</strong>
                  </>
                ) : (
                  <>
                    5개의 선택 중{' '}
                    <strong>{profileTypeLabels[profile.baseType]}</strong> 성향이{' '}
                    <strong>{primaryScore.score}회</strong> 나타났습니다.
                  </>
                )}
              </p>
            )}
          </header>

          <figure className="result-report__vibe-card result-report__reveal result-report__reveal--1">
            <p className="result-report__meta">{resultCopy.vibeIntro}</p>
            <blockquote className="result-report__vibe">
              <span className="result-report__vibe-mark" aria-hidden="true">
                "
              </span>
              <MultilineText text={profile.vibe} />
            </blockquote>
          </figure>

          <ReportCard
            index={1}
            title="당신의 디지털 성향"
            icon="◈"
            variant="accent"
            revealClass="result-report__reveal--2"
          >
            <p className="result-report__meta">{resultCopy.sections.digitalTendency}</p>
            <p className="result-report__text">{profile.digitalTendency}</p>
          </ReportCard>

          <ReportCard
            index={2}
            title="핵심 특징 3가지"
            icon="◆"
            revealClass="result-report__reveal--3"
          >
            <p className="result-report__meta">{resultCopy.sections.keyTraits}</p>
            <ul className="result-report__traits">
              {profile.keyTraits.map((trait, i) => (
                <li key={i} className="result-report__trait">
                  <span className="result-report__trait-marker" aria-hidden="true" />
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
          </ReportCard>

          <ReportCard
            index={3}
            title="행동 패턴 분석"
            icon="◎"
            revealClass="result-report__reveal--4"
          >
            <p className="result-report__meta">{resultCopy.sections.behaviorPattern}</p>
            <p className="result-report__text">{profile.behaviorPattern}</p>
          </ReportCard>

          <ReportCard
            index={4}
            title="추천 디지털 라이프 스타일"
            icon="✦"
            variant="accent"
            revealClass="result-report__reveal--5"
          >
            <p className="result-report__meta">{resultCopy.sections.recommendedLifestyle}</p>
            <p className="result-report__text">{profile.recommendedLifestyle}</p>
          </ReportCard>

          <ReportCard
            index={5}
            title="주의해야 할 성향"
            icon="!"
            variant="warning"
            revealClass="result-report__reveal--6"
          >
            <p className="result-report__meta">{resultCopy.sections.caution}</p>
            <p className="result-report__text result-report__text--warning">
              {profile.caution}
            </p>
          </ReportCard>

          <ReportCard
            index={6}
            title="성향 분포"
            icon="▤"
            variant="chart"
            revealClass="result-report__reveal--7"
          >
            <p className="result-report__meta">{resultCopy.sections.distribution}</p>
            <div className="result-report__scores">
              {orderedScores.map((score, i) => (
                <ScoreBar
                  key={score.type}
                  label={profileTypeLabels[score.type]}
                  percentage={score.percentage}
                  color={profileTypeColors[score.type]}
                  index={i}
                />
              ))}
            </div>
          </ReportCard>

          <ReportCard
            index={7}
            title="한 줄 요약"
            icon="—"
            variant="summary"
            revealClass="result-report__reveal--8"
          >
            <p className="result-report__meta">{resultCopy.sections.summary}</p>
            <p className="result-report__summary">{profile.summary}</p>
          </ReportCard>

          <footer className="result-report__footer result-report__reveal result-report__reveal--9">
            <Button size="lg" onClick={onRestart}>
              {isShared ? '나도 분석하기' : '다시 분석하기'}
            </Button>
            <Button variant="secondary" onClick={handleShare}>
              {shareCopied ? resultCopy.shareCopied : resultCopy.shareButton}
            </Button>
            <button type="button" className="result-report__about-link mi-text-link" onClick={onAbout}>
              프로젝트 소개
            </button>
            <p className="result-report__credit">
              디지털 선택 시뮬레이터 · 졸업작품 2026
            </p>
          </footer>
        </div>
      </div>
    </section>
  )
}
