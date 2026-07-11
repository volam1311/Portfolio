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

      <div className="mt-4 max-w-xl border-t border-border">
        {details.map((item) => (
          <div
            key={item.label}
            className="flex flex-col gap-1.5 border-b border-border py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
          >
            <span className="text-[10px] tracking-widest text-gray-400 uppercase">
              {item.label}
            </span>
            {item.href ? (
              <a
                href={item.href}
                className="text-[15px] text-black transition-colors hover:text-gold sm:text-right"
              >
                {item.value}
              </a>
            ) : (
              <span className="text-[15px] text-black sm:text-right">{item.value}</span>
            )}
          </div>
        ))}
      </div>

      <a
        href={`mailto:${contact.email}`}
        className="mt-10 inline-flex items-center justify-center gap-2 bg-black px-7 py-3.5 text-[13px] font-medium tracking-wide text-white transition-opacity hover:opacity-85"
      >
        Email me ↗
      </a>

      {socialLinks.length > 0 && (
        <div className="mt-14 max-w-xl">
          <p className="mb-5 text-[10px] tracking-widest text-gray-400 uppercase">
            Elsewhere
          </p>
          <ul className="flex flex-col border-t border-border">
            {socialLinks.map((item) => (
              <li key={item.icon} className="border-b border-border">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-4 transition-colors"
                >
                  <span className="flex items-center gap-3 text-[15px] text-black group-hover:text-gold">
                    <SocialIcon name={item.icon} className="text-gray-400 transition-colors group-hover:text-gold" />
                    {item.label}
                  </span>
                  <span className="text-sm text-gray-400 transition-colors group-hover:text-gold" aria-hidden="true">
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
