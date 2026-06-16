import { useEffect } from 'react'
import { introCopy } from '../data'
import { Button } from '../components'
import './IntroPage.css'

interface IntroPageProps {
  onStart: () => void
  onAbout: () => void
}

function Multiline({ text }: { text: string }) {
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

export function IntroPage({ onStart, onAbout }: IntroPageProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') onStart()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onStart])

  return (
    <section className="landing" aria-label="디지털 선택 시뮬레이터">
      <div className="landing__ambient" aria-hidden="true">
        <div className="landing__orb landing__orb--1" />
        <div className="landing__orb landing__orb--2" />
        <div className="landing__grid" />
      </div>

      <div className="landing__content">
        <p className="landing__eyebrow landing__reveal">{introCopy.eyebrow}</p>

        <h1 className="landing__title landing__reveal landing__reveal--1">
          <Multiline text={introCopy.title} />
        </h1>

        <div className="landing__divider landing__reveal landing__reveal--2" aria-hidden="true" />

        <p className="landing__subtitle landing__reveal landing__reveal--2">
          <Multiline text={introCopy.subtitle} />
        </p>

        <div className="landing__cta landing__reveal landing__reveal--3">
          <Button size="lg" onClick={onStart}>
            {introCopy.cta}
          </Button>
        </div>
      </div>

      <footer className="landing__footer landing__reveal landing__reveal--4">
        <button type="button" className="landing__about-link mi-text-link" onClick={onAbout}>
          프로젝트 소개
        </button>
        <span className="landing__footer-divider" aria-hidden="true">
          ·
        </span>
        <span>졸업작품 · 2026</span>
      </footer>
    </section>
  )
}
