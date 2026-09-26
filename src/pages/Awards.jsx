import { getAwards, getAwardImageUrl } from '../lib/content'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'

function AwardShowcase({ award, reverse = false }) {
  return (
    <article
      className={`grid grid-cols-1 items-center gap-8 border-b border-border py-12 last:border-b-0 md:grid-cols-2 md:gap-12 lg:gap-16 ${
        reverse ? 'md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1' : ''
      }`}
    >
      <div className="relative mx-auto w-full max-w-sm md:max-w-none">
        <div className="rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur-sm sm:p-8">
          <img
            src={getAwardImageUrl(award.image)}
            alt={award.title}
            className="mx-auto aspect-3/4 w-full object-contain"
          />
        </div>
      </div>

      <div className="md:px-4">
        <span className="font-mono text-xs tracking-wide text-accent">{award.year}</span>
        <h2 className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-fg sm:text-3xl">
          {award.title}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">{award.body}</p>
      </div>
    </article>
  )
}

export default function Awards() {
  const { label, title, description, awards } = getAwards()

  return (
    <Container className="pb-16 md:pb-20">
      <PageHero label={label} title={title} description={description}>
        <div className="mt-8 border-t border-border pt-6">
          <span className="font-mono text-xs text-subtle">
            {awards.length} total recognitions
          </span>
        </div>
      </PageHero>

      <div>
        {awards.map((award, index) => (
          <AwardShowcase key={award.id} award={award} reverse={index % 2 === 1} />
        ))}
      </div>
    </Container>
  )
}
