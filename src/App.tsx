import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      <div className="fixed inset-0 -z-10 animated-gradient bg-grid-pattern opacity-60" />
      <div className="fixed top-0 left-1/4 w-96 h-96 floating-blob bg-gradient-to-br from-blue-400/30 to-purple-400/30 -z-10" style={{ animationDelay: '0s' }} />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 floating-blob bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 -z-10" style={{ animationDelay: '5s' }} />
      <div className="fixed top-1/2 right-0 w-80 h-80 floating-blob bg-gradient-to-br from-orange-400/30 to-pink-400/30 -z-10" style={{ animationDelay: '10s' }} />
      <div className="fixed bottom-1/4 left-0 w-72 h-72 floating-blob bg-gradient-to-br from-purple-400/20 to-pink-400/20 -z-10" style={{ animationDelay: '7s' }} />
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
