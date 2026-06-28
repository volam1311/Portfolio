import site from '../../content/site.json'
import home from '../../content/home.json'
import awards from '../../content/awards.json'
import experience from '../../content/experience.json'

const projectModules = import.meta.glob('../../content/projects/*.json', {
  eager: true,
})

export function getSite() {
  return site
}

export function getHome() {
  return home
}

export function getAwards() {
  return awards
}

export function getExperience() {
  return experience
}

export function getProjects() {
  return Object.entries(projectModules)
    .filter(([path]) => !path.includes('_template'))
    .map(([, mod]) => mod.default ?? mod)
    .sort((a, b) => b.year - a.year)
}

export function getProjectCategories() {
  const categories = [...new Set(getProjects().map((p) => p.category))]
  return categories.sort()
}

export function getPortraitUrl(filename) {
  return `/images/${filename}`
}

export function getAwardImageUrl(filename) {
  return `/images/awards/${filename}`
}
