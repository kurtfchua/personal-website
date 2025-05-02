import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'

export default function Home(){
  return (
    <main>
      <Hero name="Kurt" title="Software Engineer" />
      <About />
      <Projects />
    </main>
  )
}

