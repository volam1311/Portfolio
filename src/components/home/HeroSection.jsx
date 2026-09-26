import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'
import { getPortraitUrl } from '../../lib/content'

export default function HeroSection({ hero }) {
  return (
    <section className="grid grid-cols-1 items-center gap-10 pb-14 lg:grid-cols-2 lg:gap-16 lg:pb-20">
      <div className="animate-fade-up">
        <SectionLabel>{hero.label}</SectionLabel>
        <h1 className="mb-5 text-5xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl">
          {hero.name}
        </h1>
        <p className="mb-8 max-w-md text-base leading-relaxed text-muted">
          {hero.bio}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button to="/projects">View Work</Button>
          <Button to="/contact" variant="secondary">Get in Touch</Button>
        </div>
      </div>

      <div className="flex justify-center animate-fade-in delay-100">
        <div className="relative w-full max-w-[380px]">
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl bg-linear-to-br from-accent/30 via-border to-transparent"
            aria-hidden="true"
          />
          <img
            src={getPortraitUrl(hero.portrait)}
            alt=""
            className="relative aspect-3/4 w-full rounded-2xl border border-border bg-surface object-cover shadow-[0_0_0_1px_rgba(0,0,0,0.03)]"
          />
        </div>
      </div>
    </section>
  )
}
