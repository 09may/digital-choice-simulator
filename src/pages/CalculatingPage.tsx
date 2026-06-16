import { useEffect, useState } from 'react'
import { calculatingCopy } from '../data'
import './CalculatingPage.css'

export function CalculatingPage() {
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((i) => (i + 1) % calculatingCopy.messages.length)
    }, 900)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="calculating-page" aria-label="분석 중" aria-live="polite">
      <div className="calculating-page__ambient" aria-hidden="true">
        <div className="calculating-page__orb" />
      </div>

      <div className="calculating-page__content">
        <div className="calculating-page__loader" aria-hidden="true">
          <div className="calculating-page__ring" />
          <div className="calculating-page__ring calculating-page__ring--inner" />
        </div>

        <h2 className="calculating-page__title">{calculatingCopy.title}</h2>

        <p className="calculating-page__message" key={messageIndex}>
          {calculatingCopy.messages[messageIndex]}
        </p>
      </div>
    </section>
  )
}
