import { IconExternal } from './Icons'

export default function ExternalLink({ href, className = '' }) {
  return (
    <a
      href={href}
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-subtle transition-colors hover:bg-surface hover:text-fg ${className}`.trim()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open external link"
    >
      <IconExternal />
    </a>
  )
}
