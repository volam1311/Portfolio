const sizes = {
  default: 'px-3 py-1.5 text-[11px]',
  lg: 'px-4 py-2.5 text-sm',
}

export default function Tag({ children, size = 'default', className = '' }) {
  return (
    <span
      className={`inline-block border border-border bg-white font-mono text-gray-600 ${sizes[size]} ${className}`.trim()}
    >
      {children}
    </span>
  )
}
