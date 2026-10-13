import usePageTitle from '../hooks/usePageTitle.js'
import { HOME_TITLE } from '../data/site.js'
import Hero from '../components/home/Hero.jsx'
import About from '../components/home/About.jsx'
import Team from '../components/home/Team.jsx'
import PracticeAreas from '../components/home/PracticeAreas.jsx'
import Faq from '../components/home/Faq.jsx'
import Testimonials from '../components/home/Testimonials.jsx'

export default function Home() {
  usePageTitle(HOME_TITLE)
  return (
    <>
      <Hero />
      <About />
      <Team />
      <PracticeAreas />
      <Faq />
      <Testimonials />
    </>
  )
}
