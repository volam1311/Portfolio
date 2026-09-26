import { getSite, getExperience } from '../lib/content'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import { IconGraduation, IconBriefcase } from '../components/ui/Icons'

function TimelineItem({ title, subtitle, detail, metrics, period, isLast }) {
  return (
    <li className={`relative ${isLast ? '' : 'pb-10 md:pb-12'}`}>
      <div
        className="absolute top-1.5 left-0 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-accent bg-bg md:top-2"
        aria-hidden="true"
      />
      <div className="pl-8 md:pl-10">
        <time className="mb-2 block font-mono text-xs tracking-wide text-accent">{period}</time>
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-fg md:text-xl">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-1.5 text-sm text-muted">{subtitle}</p>
        )}
        {detail && (
          <p className="mt-1 text-sm text-subtle">{detail}</p>
        )}
        {metrics && (
          <p className="mt-1.5 font-mono text-xs tracking-wide text-muted">{metrics}</p>
        )}
      </div>
    </li>
  )
}

function TimelineSection({ label, icon: Icon, items, type }) {
  return (
    <section className="mb-14 last:mb-0 md:mb-20">
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-accent">
          <Icon className="h-4 w-4" />
        </div>
        <h2 className="font-mono text-xs font-medium tracking-wide text-accent uppercase">
          {label}
        </h2>
        <div className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>

      <div className="relative ml-4 md:ml-5">
        <div
          className="absolute top-2 bottom-2 left-0 w-px bg-linear-to-b from-accent/40 via-border to-border"
          aria-hidden="true"
        />
        <ul>
          {items.map((item, index) => (
            <TimelineItem
              key={item.id}
              title={type === 'education' ? item.institution : item.role}
              subtitle={type === 'education' ? item.qualification : item.organization}
              detail={type === 'education' ? item.detail : null}
              metrics={type === 'education' ? item.metrics : null}
              period={item.period}
              isLast={index === items.length - 1}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function Experience() {
  const { pages } = getSite()
  const { education, work } = getExperience()

  return (
    <Container className="pb-16 md:pb-20">
      <PageHero
        title={pages.experience.title}
        description={pages.experience.description}
      />

      <TimelineSection
        label={education.label}
        icon={IconGraduation}
        items={education.items}
        type="education"
      />

      <TimelineSection
        label={work.label}
        icon={IconBriefcase}
        items={work.items}
        type="work"
      />
    </Container>
  )
}
