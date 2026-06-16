import { useEffect, useState } from 'react'
import { questions, getSelectionReactions } from '../data'
import { OptionCard, QuizProgress } from '../components'
import type { FlowProgress } from '../types'
import './QuestionPage.css'

interface QuestionPageProps {
  questionIndex: number
  selectedOption: string | null
  savedOptionId: string | null
  progress: FlowProgress
  isLocked: boolean
  onChoose: (questionId: string, optionId: string) => void
  onBack: () => void
}

export function QuestionPage({
  questionIndex,
  selectedOption,
  savedOptionId,
  progress,
  isLocked,
  onChoose,
  onBack,
}: QuestionPageProps) {
  const question = questions[questionIndex]
  const reactions = getSelectionReactions(questionIndex)
  const [reactionIndex, setReactionIndex] = useState(0)

  const isConfirming = selectedOption !== null
  const activePick = selectedOption ?? savedOptionId

  useEffect(() => {
    if (!isConfirming) {
      setReactionIndex(0)
      return
    }

    const interval = setInterval(() => {
      setReactionIndex((i) => (i + 1) % reactions.length)
    }, 480)

    return () => clearInterval(interval)
  }, [isConfirming, reactions.length])

  if (!question) return null

  return (
    <section className="quiz-page" aria-label={`질문 ${questionIndex + 1}`}>
      <nav className="quiz-page__nav">
        <button
          type="button"
          className="ds-btn ds-btn--icon quiz-page__back"
          onClick={onBack}
          disabled={isLocked}
          aria-label="이전으로"
        >
          <span className="ds-btn__label">←</span>
        </button>
        <QuizProgress current={progress.current} total={progress.total} />
        <div className="quiz-page__nav-spacer" aria-hidden="true" />
      </nav>

      <div className="quiz-page__scroll ds-scroll-pane">
        <div
          className={`quiz-page__scene${isConfirming ? ' quiz-page__scene--confirmed' : ''}`}
          key={question.id}
        >
          <header className="quiz-page__header">
            <p className="quiz-page__category">{question.category}</p>

            <h2 className="quiz-page__question">
              {question.question.split('\n').map((line, i, arr) => (
                <span key={i} className="quiz-page__question-line">
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>

            {(question.subtext || isConfirming) && (
              <p
                className={`quiz-page__subtext${isConfirming ? ' quiz-page__subtext--reaction' : ''}`}
                aria-live={isConfirming ? 'polite' : undefined}
                key={isConfirming ? reactionIndex : 'prompt'}
              >
                {isConfirming ? reactions[reactionIndex] : question.subtext}
              </p>
            )}
          </header>

          <div
            className="quiz-page__options"
            role="listbox"
            aria-label="선택지"
          >
            {question.options.map((option, index) => {
              const isPicked = activePick === option.id
              const isSavedPick = isPicked && !isConfirming
              const isActivePick = isPicked && isConfirming
              const isDimmed = isConfirming && !isPicked

              return (
                <OptionCard
                  key={option.id}
                  label={option.label}
                  description={option.description}
                  emoji={option.emoji}
                  picked={isActivePick}
                  saved={isSavedPick}
                  dimmed={isDimmed}
                  disabled={isLocked && !isPicked}
                  index={index}
                  onClick={() => onChoose(question.id, option.id)}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
