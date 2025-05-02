import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section id="hero">
          <Hero name="Kurt Chua" title="Software Engineer" />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>
      </main>
    </>
  )
}
