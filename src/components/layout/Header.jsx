import { NavLink } from 'react-router-dom'
import { getSite } from '../../lib/content'
import Container from '../ui/Container'

export default function Header() {
  const { name, nav } = getSite()

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/75 backdrop-blur-xl">
      <Container className="flex flex-col items-center justify-between gap-4 py-4 sm:h-16 sm:flex-row sm:py-0">
        <NavLink
          to="/"
          className="text-sm font-semibold tracking-tight text-fg transition-opacity hover:opacity-70"
        >
          {name}
        </NavLink>
        <nav className="flex flex-wrap justify-center gap-1 sm:gap-0.5" aria-label="Main navigation">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `rounded-md px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-surface text-fg'
                    : 'text-muted hover:bg-surface hover:text-fg'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  )
}
