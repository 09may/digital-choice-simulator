import { useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import {
  profileTypeOrder,
  profileTypeLabels,
  profileTypeColors,
  resultCopy,
  aboutCopy,
} from '../data'
import type { DigitalProfile, ProfileScore } from '../types'
import { buildShareUrl } from '../utils/share-result'
import { Button, Multiline, ScoreBar } from '../components'
import './ResultPage.css'

interface ResultPageProps {
  profile: DigitalProfile
  scores: ProfileScore[]
  isShared?: boolean
  onRestart: () => void
  onAbout: () => void
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

  const isHarmonist = profile.subtype === 'digital-harmonist'
  const primaryScore = isHarmonist
    ? undefined
    : orderedScores.find((s) => s.type === profile.baseType)
  const subtypeLabel = isHarmonist
    ? '조화형'
    : profileTypeLabels[profile.baseType]

  const handleShare = async () => {
    const url = buildShareUrl(profile.subtype)
    try {
      await navigator.clipboard.writeText(url)
      setShareCopied(true)
      window.setTimeout(() => setShareCopied(false), 2000)
    } catch {
      // Legacy fallback: create a temporary input to copy from
      const el = document.createElement('input')
      el.value = url
      el.style.position = 'fixed'
      el.style.opacity = '0'
      document.body.appendChild(el)
      el.select()
      try {
        document.execCommand('copy')
        setShareCopied(true)
        window.setTimeout(() => setShareCopied(false), 2000)
      } catch {
        window.prompt('아래 링크를 복사하세요:', url)
      } finally {
        document.body.removeChild(el)
      }
    }
  }

  return (
    <section
      className="result-report"
      aria-label="FLOW PROFILE"
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
              aria-label={`유형 코드 ${profile.analysisCode}`}
            >
              {profile.analysisCode}
            </span>
            <span className="result-report__emoji" aria-hidden="true">
              {profile.emoji}
            </span>
            <h1 className="result-report__title">
              <Multiline text={profile.title} />
            </h1>
            <p className="result-report__subtype">{subtypeLabel}</p>
            {primaryScore && (
              <p className="result-report__meta">
                <Multiline
                  text={
                    isShared
                      ? resultCopy.scoreLine.shared(
                          profileTypeLabels[profile.baseType],
                          primaryScore.score,
                        )
                      : resultCopy.scoreLine.personal(
                          profileTypeLabels[profile.baseType],
                          primaryScore.score,
                        )
                  }
                />
              </p>
            )}
            <p className="result-report__meta result-report__evidence">
              {resultCopy.evidenceNote}
            </p>
          </header>

          <figure className="result-report__vibe-card result-report__reveal result-report__reveal--1">
            <p className="result-report__meta">{resultCopy.vibeIntro}</p>
            <blockquote className="result-report__vibe">
              <span className="result-report__vibe-mark" aria-hidden="true">
                “
              </span>
              <Multiline text={profile.vibe} />
              <span className="result-report__vibe-mark result-report__vibe-mark--end" aria-hidden="true">
                ”
              </span>
            </blockquote>
          </figure>

          <ReportCard
            index={1}
            title={resultCopy.cardTitles.digitalTendency}
            icon="◈"
            variant="accent"
            revealClass="result-report__reveal--2"
          >
            <p className="result-report__meta">{resultCopy.sections.digitalTendency}</p>
            <p className="result-report__text">{profile.digitalTendency}</p>
          </ReportCard>

          <ReportCard
            index={2}
            title={resultCopy.cardTitles.keyTraits}
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
            title={resultCopy.cardTitles.behaviorPattern}
            icon="◎"
            revealClass="result-report__reveal--4"
          >
            <p className="result-report__meta">{resultCopy.sections.behaviorPattern}</p>
            <p className="result-report__text">{profile.behaviorPattern}</p>
          </ReportCard>

          <ReportCard
            index={4}
            title={resultCopy.cardTitles.balancePoint}
            icon="✦"
            variant="accent"
            revealClass="result-report__reveal--5"
          >
            <p className="result-report__meta">{resultCopy.sections.balancePoint}</p>
            <p className="result-report__text">{profile.recommendedLifestyle}</p>
            <p className="result-report__text result-report__text--warning">
              {profile.caution}
            </p>
          </ReportCard>

          <ReportCard
            index={5}
            title={resultCopy.cardTitles.distribution}
            icon="▤"
            variant="chart"
            revealClass="result-report__reveal--6"
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
            index={6}
            title={resultCopy.cardTitles.summary}
            icon="—"
            variant="summary"
            revealClass="result-report__reveal--7"
          >
            <p className="result-report__meta">{resultCopy.sections.summary}</p>
            <p className="result-report__summary">{profile.summary}</p>
          </ReportCard>

          <footer className="result-report__footer result-report__reveal result-report__reveal--8">
            <Button size="lg" onClick={handleShare}>
              {shareCopied ? resultCopy.shareCopied : resultCopy.shareButton}
            </Button>
            <Button variant="secondary" onClick={onRestart}>
              {isShared ? resultCopy.sharedStartButton : resultCopy.restartButton}
            </Button>
            <button type="button" className="result-report__about-link mi-text-link" onClick={onAbout}>
              {aboutCopy.linkLabel}
            </button>
            <p className="result-report__disclaimer">{resultCopy.disclaimer}</p>
            <p className="result-report__credit">
              {resultCopy.credit}
            </p>
          </footer>
        </div>
      </div>
    </section>
  )
}
