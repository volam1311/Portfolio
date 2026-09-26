import { Link } from 'react-router-dom'
import { IconExternal } from './Icons'

const variants = {
  primary: 'bg-fg text-white hover:bg-fg/90',
  secondary: 'border border-border bg-bg text-fg hover:border-fg/20 hover:bg-surface',
}

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  type = 'button',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-px active:translate-y-0 sm:px-6'
  const classes = `${base} ${variants[variant]} ${className}`.trim()

  const content = (
    <>
      {children}
      {variant === 'primary' && (to || href) && (
        <IconExternal className="shrink-0" />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  )
}
