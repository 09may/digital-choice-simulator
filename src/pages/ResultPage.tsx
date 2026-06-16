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
  const [isInsightOpen, setIsInsightOpen] = useState(false)

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

  const typeCountMap = {
    social: orderedScores.find((s) => s.type === 'social')?.score ?? 0,
    productive: orderedScores.find((s) => s.type === 'productive')?.score ?? 0,
    entertainment: orderedScores.find((s) => s.type === 'entertainment')?.score ?? 0,
  }

  const totalSelections = Math.max(
    1,
    typeCountMap.social + typeCountMap.productive + typeCountMap.entertainment,
  )

  const phaseRows = [
    { label: '습관', questions: 'Q1–Q2', contribution: 40 },
    { label: '상황', questions: 'Q3–Q4', contribution: 40 },
    { label: '방향', questions: 'Q5', contribution: 20 },
  ] as const

  const insightPreviewText = isHarmonist
    ? '당신의 선택은 연결, 성장, 즐거움이 골고루 섞여 있는 편이에요.'
    : `당신은 ${profileTypeLabels[profile.baseType]} 쪽 선택이 좀 더 많았어요.`

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

          <section className="result-insight result-report__reveal result-report__reveal--8" aria-label="분석 근거">
            <p className="result-insight__preview">{insightPreviewText}</p>
            <button
              type="button"
              className="result-insight__toggle"
              aria-expanded={isInsightOpen}
              onClick={() => setIsInsightOpen((prev) => !prev)}
            >
              결과 해석 보기 →
            </button>

            {isInsightOpen && (
              <div className="result-insight__detail" role="region" aria-label="분석 상세">
                <article className="result-insight__block">
                  <h3 className="result-insight__title">Selection Distribution</h3>
                  <p className="result-insight__text">
                    연결 {typeCountMap.social} / 성장 {typeCountMap.productive} / 즐거움{' '}
                    {typeCountMap.entertainment}
                  </p>
                </article>

                <article className="result-insight__block">
                  <h3 className="result-insight__title">Question Influence</h3>
                  <p className="result-insight__text">
                    {isHarmonist
                      ? '여러 문항에서 선택이 고르게 나와서 균형형 특징이 더 뚜렷해졌어요.'
                      : `${profileTypeLabels[profile.baseType]} 선택이 여러 문항에서 반복되면서 최종 결과에 가장 큰 영향을 줬어요.`}
                  </p>
                </article>

                <article className="result-insight__block">
                  <h3 className="result-insight__title">Phase Breakdown</h3>
                  <ul className="result-insight__phase-list">
                    {phaseRows.map((row) => (
                      <li key={row.label} className="result-insight__phase-item">
                        <span>
                          {row.label} ({row.questions})
                        </span>
                        <span>{row.contribution}%</span>
                      </li>
                    ))}
                  </ul>
                  <p className="result-insight__text">
                    초반 습관과 상황 선택이 전체 흐름을 만들고, 마지막 선택이 결과를 정리하는 역할을 해요.
                  </p>
                </article>

                <article className="result-insight__block">
                  <h3 className="result-insight__title">Final Interpretation</h3>
                  <p className="result-insight__text">
                    총 {totalSelections}개 선택 중 {profileTypeLabels[profile.baseType]} 쪽이 더 많아서 {profile.title}으로 나왔어요.
                  </p>
                </article>
              </div>
            )}
          </section>

          <footer className="result-report__footer result-report__reveal result-report__reveal--9">
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
