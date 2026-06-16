import './ProgressBar.css'

interface ProgressBarProps {
  progress: number
  visible?: boolean
}

export function ProgressBar({ progress, visible = true }: ProgressBarProps) {
  return (
    <div
      className={`progress-bar${visible ? ' progress-bar--visible' : ''}`}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`진행률 ${progress}%`}
    >
      <div className="progress-bar__track">
        <div
          className="progress-bar__fill"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </div>
  )
}

interface StepIndicatorProps {
  current: number
  total: number
}

export function StepIndicator({ current, total }: StepIndicatorProps) {
  return (
    <span className="step-indicator" aria-live="polite">
      <span className="step-indicator__current">{current}</span>
      <span className="step-indicator__sep">/</span>
      <span className="step-indicator__total">{total}</span>
    </span>
  )
}

interface QuizProgressProps {
  current: number
  total: number
}

export function QuizProgress({ current, total }: QuizProgressProps) {
  return (
    <div
      className="quiz-progress"
      role="status"
      aria-label={`질문 ${current} / ${total}`}
    >
      <span className="quiz-progress__current">{current}</span>
      <span className="quiz-progress__sep">/</span>
      <span className="quiz-progress__total">{total}</span>
    </div>
  )
}
