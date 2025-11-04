import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10 animated-gradient bg-grid-pattern" />
      <div className="fixed top-0 left-1/4 w-96 h-96 floating-blob bg-primary/20 -z-10" style={{ animationDelay: '0s' }} />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 floating-blob bg-accent/20 -z-10" style={{ animationDelay: '5s' }} />
      <div className="fixed top-1/2 right-0 w-80 h-80 floating-blob bg-secondary/20 -z-10" style={{ animationDelay: '10s' }} />
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
