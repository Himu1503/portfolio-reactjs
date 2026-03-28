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
      <div className="fixed inset-0 -z-20 animated-gradient" />
      <div className="fixed inset-0 -z-10 bg-grid-pattern" />
      <div className="fixed top-0 left-1/4 w-[30rem] h-[30rem] floating-blob bg-gradient-to-br from-cyan-500/25 to-blue-500/20 -z-10" style={{ animationDelay: "0s" }} />
      <div className="fixed bottom-0 right-1/4 w-[26rem] h-[26rem] floating-blob bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 -z-10" style={{ animationDelay: "6s" }} />
      <div className="fixed top-1/2 right-0 w-80 h-80 floating-blob bg-gradient-to-br from-emerald-500/20 to-teal-500/20 -z-10" style={{ animationDelay: "11s" }} />
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
