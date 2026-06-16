import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { ButtonSize, ButtonVariant } from '../types/design-system'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  fullWidth?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = [
    'ds-btn',
    `ds-btn--${variant}`,
    `ds-btn--${size}`,
    fullWidth ? 'ds-btn--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type="button" className={classes} {...props}>
      <span className="ds-btn__label">{children}</span>
      <span className="ds-btn__ripple" aria-hidden="true" />
    </button>
  )
}
