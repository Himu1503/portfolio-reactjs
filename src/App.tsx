import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import { AuroraCursor } from "@/components/AuroraCursor"

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      <div className="fixed inset-0 -z-40 galaxy-space" />
      <div className="fixed inset-0 -z-30 galaxy-nebula" />
      <div className="fixed inset-0 -z-20 galaxy-stars" />
      <div className="fixed inset-0 -z-[19] galaxy-stars-dense" />
      <div className="fixed inset-0 -z-[15] site-warp-lines" />
      <div className="fixed inset-0 -z-10 galaxy-shooting-stars" />
      <AuroraCursor />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
