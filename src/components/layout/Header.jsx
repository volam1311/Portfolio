import { NavLink } from 'react-router-dom'
import { getSite } from '../../lib/content'
import Container from '../ui/Container'

export default function Header() {
  const { name, nav } = getSite()

  return (
    <header className="border-b border-border">
      <Container className="flex flex-col items-center justify-between gap-4 py-5 sm:h-[72px] sm:flex-row sm:py-0">
        <NavLink
          to="/"
          className="text-[13px] font-semibold tracking-[0.12em] text-black"
        >
          {name.toUpperCase()}
        </NavLink>
        <nav className="flex flex-wrap justify-center gap-5 sm:gap-8" aria-label="Main navigation">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `border-b pb-1 text-[13px] transition-colors ${
                  isActive
                    ? 'border-gold text-black'
                    : 'border-transparent text-gray-600 hover:text-black'
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
