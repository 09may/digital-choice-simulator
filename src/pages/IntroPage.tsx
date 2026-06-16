import { useEffect } from 'react'
import { introCopy } from '../data'
import { Button, Multiline } from '../components'
import './IntroPage.css'

interface IntroPageProps {
  onStart: () => void
  onAbout: () => void
}

function StructureItem({ text }: { text: string }) {
  const [label, description] = text.split(' — ')

  return (
    <li className="landing__structure-item">
      <span className="landing__structure-label">{label}</span>
      {description && (
        <>
          {' — '}
          {description}
        </>
      )}
    </li>
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
    <section className="landing" aria-label="FLOWTYPE">
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

        <p className="landing__hint landing__reveal landing__reveal--2">
          {introCopy.hint}
        </p>

        <ul className="landing__structure landing__reveal landing__reveal--2">
          {introCopy.structure.map((item) => (
            <StructureItem key={item} text={item} />
          ))}
        </ul>

        <p className="landing__detail landing__reveal landing__reveal--3">
          <Multiline text={introCopy.detail} />
        </p>

        <div className="landing__cta landing__reveal landing__reveal--3">
          <Button size="lg" onClick={onStart}>
            {introCopy.cta}
          </Button>
        </div>
      </div>

      <footer className="landing__footer landing__reveal landing__reveal--4">
        <button type="button" className="landing__about-link mi-text-link" onClick={onAbout}>
          {introCopy.aboutLink}
        </button>
      </footer>
    </section>
  )
}
