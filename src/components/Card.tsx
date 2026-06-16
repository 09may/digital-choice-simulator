import type { HTMLAttributes, ReactNode } from 'react'
import type { CardVariant } from '../types/design-system'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  compact?: boolean
  spacious?: boolean
  flat?: boolean
  fullWidth?: boolean
  children: ReactNode
}

const variantClass: Record<CardVariant, string> = {
  default: '',
  interactive: 'ds-card--interactive',
  selected: 'ds-card--selected',
}

export function Card({
  variant = 'default',
  compact = false,
  spacious = false,
  flat = false,
  fullWidth = false,
  className = '',
  children,
  ...props
}: CardProps) {
  const classes = [
    'ds-card',
    variantClass[variant],
    compact ? 'ds-card--compact' : '',
    spacious ? 'ds-card--spacious' : '',
    flat ? 'ds-card--flat' : '',
    fullWidth ? 'ds-card--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

interface ChipProps {
  children: ReactNode
  className?: string
}

export function Chip({ children, className = '' }: ChipProps) {
  return <span className={`ds-chip ${className}`.trim()}>{children}</span>
}
