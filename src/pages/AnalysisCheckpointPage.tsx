import { useEffect, useState } from 'react'
import { getMidAnalysisCopy } from '../data/analysis-checkpoints'
import './AnalysisCheckpointPage.css'

interface AnalysisCheckpointPageProps {
  checkpointIndex: number
}

export function AnalysisCheckpointPage({
  checkpointIndex,
}: AnalysisCheckpointPageProps) {
  const copy = getMidAnalysisCopy(checkpointIndex)
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    if (!copy || copy.messages.length <= 1) return

    const interval = setInterval(() => {
      setMessageIndex((i) => (i + 1) % copy.messages.length)
    }, 750)

    return () => clearInterval(interval)
  }, [copy])

  if (!copy) return null

  return (
    <section
      className="analysis-checkpoint"
      aria-label="중간 분석"
      aria-live="polite"
    >
      <div className="analysis-checkpoint__ambient" aria-hidden="true">
        <div className="analysis-checkpoint__orb" />
        <div className="analysis-checkpoint__scanline" />
      </div>

      <div className="analysis-checkpoint__content">
        <div className="analysis-checkpoint__loader" aria-hidden="true">
          <div className="analysis-checkpoint__ring" />
          <div className="analysis-checkpoint__ring analysis-checkpoint__ring--inner" />
        </div>

        <p className="analysis-checkpoint__label">{copy.label}</p>
        <h2 className="analysis-checkpoint__title">{copy.title}</h2>

        <p className="analysis-checkpoint__message" key={messageIndex}>
          {copy.messages[messageIndex]}
        </p>

        <div className="analysis-checkpoint__dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  )
}
