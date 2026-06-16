import type { CSSProperties } from 'react'
import './OptionCard.css'

interface OptionCardProps {
  label: string
  description?: string
  emoji?: string
  picked?: boolean
  /** 뒤로가기 등으로 복원된 이전 선택 — picked 애니메이션 없이 표시 */
  saved?: boolean
  dimmed?: boolean
  disabled?: boolean
  index?: number
  onClick: () => void
}

export function OptionCard({
  label,
  description,
  emoji,
  picked = false,
  saved = false,
  dimmed = false,
  disabled = false,
  index = 0,
  onClick,
}: OptionCardProps) {
  const delay = 280 + index * 70

  const classNames = [
    'option-card',
    picked ? 'option-card--picked' : '',
    saved ? 'option-card--saved' : '',
    dimmed ? 'option-card--dimmed' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type="button"
      className={classNames}
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={picked || saved}
    >
      <span className="option-card__inner">
        {emoji && (
          <span className="option-card__emoji" aria-hidden="true">
            {emoji}
          </span>
        )}
        <span className="option-card__content">
          <span className="option-card__label">{label}</span>
          {description && (
            <span className="option-card__description">{description}</span>
          )}
        </span>
        <span className="option-card__chevron" aria-hidden="true">
          →
        </span>
      </span>
    </button>
  )
}

interface ScoreBarProps {
  label: string
  percentage: number
  color?: string
  index?: number
}

export function ScoreBar({ label, percentage, color, index = 0 }: ScoreBarProps) {
  const stagger = Math.min(index + 1, 6)
  const fillDelay = 400 + index * 80

  return (
    <div className={`score-bar animate-fade-in-up stagger-${stagger}`}>
      <div className="score-bar__header">
        <span className="score-bar__label">{label}</span>
        <span className="score-bar__value">{percentage}%</span>
      </div>
      <div className="score-bar__track">
        <div
          className="score-bar__fill"
          style={
            {
              '--score-ratio': percentage / 100,
              backgroundColor: color ?? 'var(--ds-color-accent)',
              animationDelay: `${fillDelay}ms`,
            } as CSSProperties
          }
        />
      </div>
    </div>
  )
}

export function TraitChip({
  children,
  index = 0,
}: {
  children: React.ReactNode
  index?: number
}) {
  const stagger = Math.min(index + 1, 6)

  return (
    <span className={`ds-chip animate-fade-in-up stagger-${stagger}`}>
      {children}
    </span>
  )
}
