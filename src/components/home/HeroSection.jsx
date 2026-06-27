import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'
import { getPortraitUrl } from '../../lib/content'

export default function HeroSection({ hero }) {
  return (
    <section className="grid grid-cols-1 items-center gap-10 pb-12 lg:grid-cols-2 lg:gap-16 lg:pb-16">
      <div className="order-2 lg:order-1">
        <SectionLabel>{hero.label}</SectionLabel>
        <h1 className="mb-6 font-serif text-5xl font-medium tracking-tight text-black sm:text-6xl lg:text-7xl">
          {hero.name}
        </h1>
        <p className="mb-8 max-w-md text-base leading-relaxed">
          {hero.bio}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button to="/projects">View Work</Button>
          <Button to="/contact" variant="secondary">Get in Touch</Button>
        </div>
      </div>

      <div className="order-1 flex justify-center lg:order-2">
        <div className="relative w-full max-w-[380px]">
          <div
            className="pointer-events-none absolute -top-2 -right-2 z-10 h-16 w-16 border-t-2 border-r-2 border-gold sm:h-20 sm:w-20"
            aria-hidden="true"
          />
          <img
            src={getPortraitUrl(hero.portrait)}
            alt=""
            className="aspect-3/4 w-full bg-border object-cover"
          />
        </div>
      </div>
    </section>
  )
}
