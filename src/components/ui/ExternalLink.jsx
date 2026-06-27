import { IconExternal } from './Icons'

export default function ExternalLink({ href, className = '' }) {
  return (
    <a
      href={href}
      className={`flex h-8 w-8 shrink-0 items-center justify-center text-gray-400 transition-colors hover:text-black ${className}`.trim()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open external link"
    >
      <IconExternal />
    </a>
  )
}
