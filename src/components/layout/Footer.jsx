import { getSite } from '../../lib/content'
import Container from '../ui/Container'

export default function Footer() {
  const { footer } = getSite()

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border py-8">
      <Container className="grid grid-cols-1 gap-3 text-center text-[11px] tracking-wider text-gray-400 sm:grid-cols-3 sm:items-center sm:text-left">
        <span>{footer.copyright}</span>
        <span className="sm:text-center">{footer.tagline}</span>
        <a
          href="#top"
          className="transition-colors hover:text-black sm:text-right"
          onClick={scrollToTop}
        >
          BACK TO TOP ↑
        </a>
      </Container>
    </footer>
  )
}
