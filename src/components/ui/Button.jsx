import { Link } from 'react-router-dom'
import { IconExternal } from './Icons'

const variants = {
  primary: 'bg-black text-white',
  secondary: 'border border-border bg-white text-black',
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
    'inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[13px] font-medium tracking-wide transition-opacity hover:opacity-85 sm:px-7'
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
