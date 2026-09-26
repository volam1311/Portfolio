import { useMemo, useState } from 'react'
import { getSite, getProjects, getProjectCategories } from '../lib/content'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import ExternalLink from '../components/ui/ExternalLink'
import Tag from '../components/ui/Tag'
import { IconSearch } from '../components/ui/Icons'

export default function Projects() {
  const { pages } = getSite()
  const projects = getProjects()
  const categories = getProjectCategories()
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = filter === 'All' || project.category === filter
      const query = search.toLowerCase().trim()
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query))
      return matchesCategory && matchesSearch
    })
  }, [projects, filter, search])

  const filterClass = (active) =>
    `rounded-md border px-3.5 py-1.5 font-mono text-xs transition-colors ${
      active
        ? 'border-fg bg-fg text-white'
        : 'border-border bg-bg text-muted hover:border-fg/20 hover:text-fg'
    }`

  return (
    <Container className="pb-16 md:pb-20">
      <PageHero
        label={pages.projects.label}
        title={pages.projects.title}
        description={pages.projects.description}
      />

      <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className={filterClass(filter === 'All')}
            onClick={() => setFilter('All')}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={filterClass(filter === cat)}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:w-60">
          <IconSearch className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-subtle" />
          <input
            type="search"
            className="w-full rounded-lg border border-border bg-surface py-2.5 pr-3.5 pl-10 text-sm text-fg outline-none transition-colors placeholder:text-subtle focus:border-fg/30"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search projects"
          />
        </div>
      </div>

      <p className="mb-8 font-mono text-xs text-subtle">
        {filtered.length} project{filtered.length !== 1 ? 's' : ''} found
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="group rounded-xl border border-border bg-bg/80 p-5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-fg/15 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-6"
          >
            <span className="mb-3 inline-block rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-fg">
              {project.category}
            </span>
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <span className="mb-1 block text-xs text-subtle">{project.year}</span>
                <h2 className="text-lg font-semibold tracking-tight text-fg sm:text-xl">
                  {project.title}
                </h2>
              </div>
              <ExternalLink href={project.url} />
            </div>
            <p className="mb-4 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Container>
  )
}
