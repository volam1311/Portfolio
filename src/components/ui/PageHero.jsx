import SectionLabel from './SectionLabel'

export default function PageHero({ label, title, description, children }) {
  return (
    <header className="py-8 text-left sm:py-10 md:py-12">
      <SectionLabel>{label}</SectionLabel>
      <h1 className="font-serif text-4xl font-medium tracking-tight text-black sm:text-5xl lg:text-[56px]">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gray-600">
          {description}
        </p>
      )}
      {children}
    </header>
  )
}
