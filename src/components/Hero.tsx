import { lazy, Suspense, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

const HeroThreeScene = lazy(() =>
  import("@/components/HeroThreeScene").then((module) => ({ default: module.HeroThreeScene }))
)

export function Hero() {
  const fullName = "Himanshu Saxena"
  const randomChars = "<>/{}[]*+$#@!?0123456789"
  const [displayName, setDisplayName] = useState("")

  useEffect(() => {
    let frame = 0
    const totalFrames = 24

    const interval = setInterval(() => {
      frame += 1
      const solved = Math.floor((frame / totalFrames) * fullName.length)

      const next = fullName
        .split("")
        .map((char, index) => {
          if (char === " ") return " "
          if (index < solved) return char
          return randomChars[Math.floor(Math.random() * randomChars.length)]
        })
        .join("")

      setDisplayName(next)

      if (frame >= totalFrames) {
        clearInterval(interval)
        setDisplayName(fullName)
      }
    }, 65)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
      <Suspense fallback={null}>
        <HeroThreeScene />
      </Suspense>
      <div className="text-center space-y-7 max-w-4xl relative z-10">
        <p className="hero-chip inline-flex items-center rounded-full border border-amber-200/25 bg-slate-900/50 px-4 py-2 text-sm text-amber-100 backdrop-blur">
          Software Engineer • React • TypeScript • FastAPI
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight hero-title">
          <span className="code-rain-name">{displayName}</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 hero-subtitle max-w-2xl mx-auto leading-relaxed">
          Turning ideas into sleek, high-performance digital products with modern engineering.
        </p>
        <div className="flex gap-4 justify-center pt-2 hero-actions flex-wrap">
          <Button size="lg" className="shadow-lg shadow-amber-400/20" href="#contact">
            Get In Touch
          </Button>
          <Button size="lg" variant="outline" className="border-amber-200/30 bg-slate-900/45 hover:bg-amber-100/10 hover:text-amber-100" href="#projects">
            View Projects
          </Button>
        </div>
        <div className="flex gap-4 justify-center pt-6 hero-actions">
          <a
            href="https://github.com/Himu1503"
            target="_blank"
            rel="noopener noreferrer"
            className="social-orb rounded-full border border-white/10 bg-white/5 p-3 hover:opacity-90 hover:scale-105 hover:border-cyan-300/40 transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshusaxena1503/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-orb rounded-full border border-white/10 bg-white/5 p-3 hover:opacity-90 hover:scale-105 hover:border-cyan-300/40 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:himanshusaxenaunreal@gmail.com"
            className="social-orb rounded-full border border-white/10 bg-white/5 p-3 hover:opacity-90 hover:scale-105 hover:border-cyan-300/40 transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

