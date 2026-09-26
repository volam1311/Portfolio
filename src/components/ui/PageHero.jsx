import SectionLabel from './SectionLabel'

export default function PageHero({ label, title, description, children }) {
  return (
    <header className="animate-fade-up py-8 text-left sm:py-10 md:py-12">
      {label && <SectionLabel>{label}</SectionLabel>}
      <h1 className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl lg:text-[52px]">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          {description}
        </p>
      )}
      {children}
    </header>
  )
}
