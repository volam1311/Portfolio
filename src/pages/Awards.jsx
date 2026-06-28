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
        <div
          className="pointer-events-none absolute -top-2 -right-2 z-10 h-14 w-14 border-t-2 border-r-2 border-gold sm:h-16 sm:w-16"
          aria-hidden="true"
        />
        <div className="border border-border bg-[#F8F8F8] p-6 sm:p-8">
          <img
            src={getAwardImageUrl(award.image)}
            alt={award.title}
            className="mx-auto aspect-3/4 w-full object-contain"
          />
        </div>
      </div>

      <div className="md:px-4">
        <span className="font-mono text-xs tracking-wide text-gold">{award.year}</span>
        <h2 className="mt-3 font-serif text-2xl font-medium leading-snug text-black sm:text-3xl">
          {award.title}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-gray-600">{award.body}</p>
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
          <span className="text-[13px] text-gray-400 italic">
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
