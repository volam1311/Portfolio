import { getHome } from '../lib/content'
import Container from '../components/ui/Container'
import HeroSection from '../components/home/HeroSection'
import SkillsSection from '../components/home/SkillsSection'

export default function Home() {
  const { hero, skillsSection, skills } = getHome()

  return (
    <Container className="pb-16 pt-8 sm:pt-12 md:pb-20">
      <HeroSection hero={hero} />
      <SkillsSection section={skillsSection} skills={skills} />
    </Container>
  )
}
