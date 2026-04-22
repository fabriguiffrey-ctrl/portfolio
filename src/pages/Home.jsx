import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Stack from '../components/Stack'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Experience from "../components/Experience"
import Services from "../components/Services"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      
    </>
  )
}

export default Home