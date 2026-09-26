import { getSite } from '../lib/content'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import { SocialIcon } from '../components/ui/Icons'

export default function Contact() {
  const { pages, contact, social } = getSite()
  const socialLinks = social.filter((item) => item.icon !== 'email')

  const details = [
    {
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      label: 'Based in',
      value: contact.location,
    },
    {
      label: 'Response time',
      value: contact.responseTime,
    },
  ]

  return (
    <Container className="pb-16 md:pb-20">
      <PageHero
        title={pages.contact.title}
        description={pages.contact.description}
      />

      <div className="mt-4 max-w-xl rounded-xl border border-border bg-bg/80 backdrop-blur-sm">
        {details.map((item) => (
          <div
            key={item.label}
            className="flex flex-col gap-1.5 border-b border-border px-5 py-5 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:px-6"
          >
            <span className="font-mono text-[10px] tracking-widest text-subtle uppercase">
              {item.label}
            </span>
            {item.href ? (
              <a
                href={item.href}
                className="text-[15px] text-fg transition-colors hover:text-accent sm:text-right"
              >
                {item.value}
              </a>
            ) : (
              <span className="text-[15px] text-fg sm:text-right">{item.value}</span>
            )}
          </div>
        ))}
      </div>

      <a
        href={`mailto:${contact.email}`}
        className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-fg px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-fg/90"
      >
        Email me ↗
      </a>

      {socialLinks.length > 0 && (
        <div className="mt-14 max-w-xl">
          <p className="mb-4 font-mono text-[10px] tracking-widest text-subtle uppercase">
            Elsewhere
          </p>
          <ul className="flex flex-col overflow-hidden rounded-xl border border-border bg-bg/80 backdrop-blur-sm">
            {socialLinks.map((item) => (
              <li key={item.icon} className="border-b border-border last:border-b-0">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-surface sm:px-6"
                >
                  <span className="flex items-center gap-3 text-[15px] text-fg group-hover:text-accent">
                    <SocialIcon name={item.icon} className="text-subtle transition-colors group-hover:text-accent" />
                    {item.label}
                  </span>
                  <span className="text-sm text-subtle transition-colors group-hover:text-accent" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  )
}
