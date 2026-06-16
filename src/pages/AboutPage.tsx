import { aboutCopy } from '../data/about'
import { Button } from '../components'
import './AboutPage.css'

interface AboutPageProps {
  onBack: () => void
  onStart?: () => void
  showStart?: boolean
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

export function AboutPage({ onBack, onStart, showStart = false }: AboutPageProps) {
  return (
    <section className="about-page" aria-label="프로젝트 소개">
      <div className="about-page__ambient" aria-hidden="true">
        <div className="about-page__orb about-page__orb--1" />
        <div className="about-page__orb about-page__orb--2" />
      </div>

      <div className="about-page__scroll ds-scroll-pane">
        <div className="about-page__inner">
          <header className="about-page__hero about-page__reveal">
            <p className="about-page__eyebrow">{aboutCopy.eyebrow}</p>
            <h1 className="about-page__title">
              <Multiline text={aboutCopy.title} />
            </h1>
            <p className="about-page__tagline">
              <Multiline text={aboutCopy.tagline} />
            </p>
          </header>

          {aboutCopy.sections.map((section, i) => (
            <article
              key={section.id}
              className={`about-page__section about-page__reveal about-page__reveal--${i + 1}`}
            >
              <header className="about-page__section-header">
                <span className="about-page__section-number">{section.number}</span>
                <h2 className="about-page__section-title">{section.title}</h2>
              </header>
              <p className="about-page__section-lead">{section.lead}</p>
              <div className="about-page__section-body">
                {section.body.split('\n\n').map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>

              {section.id === 'value' && (
                <ul className="about-page__values">
                  {aboutCopy.values.map((value) => (
                    <li key={value.title} className="about-page__value-card">
                      <span className="about-page__value-icon" aria-hidden="true">
                        {value.icon}
                      </span>
                      <div>
                        <h3 className="about-page__value-title">{value.title}</h3>
                        <p className="about-page__value-desc">{value.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          <footer className="about-page__closing about-page__reveal about-page__reveal--7">
            <p className="about-page__closing-text">
              <Multiline text={aboutCopy.closing} />
            </p>
            <div className="about-page__actions">
              <Button variant="ghost" onClick={onBack}>
                {aboutCopy.backLabel}
              </Button>
              {showStart && onStart && (
                <Button size="lg" onClick={onStart}>
                  {aboutCopy.startLabel}
                </Button>
              )}
            </div>
          </footer>
        </div>
      </div>
    </section>
  )
}
