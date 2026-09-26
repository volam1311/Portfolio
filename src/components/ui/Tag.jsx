const sizes = {
  default: 'px-2.5 py-1 text-[11px]',
  lg: 'px-3.5 py-1.5 text-sm',
}

export default function Tag({ children, size = 'default', className = '' }) {
  return (
    <span
      className={`inline-block rounded-md border border-border bg-bg font-mono text-muted ${sizes[size]} ${className}`.trim()}
    >
      {children}
    </span>
  )
}
