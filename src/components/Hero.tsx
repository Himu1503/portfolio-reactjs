import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
      <div className="text-center space-y-6 max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight hero-title gradient-text" data-text="Himanshu Saxena">
          Himanshu Saxena
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground hero-subtitle">
          Building software solutions to solve complex problems.
        </p>
        <div className="flex gap-4 justify-center pt-4 hero-actions">
          <Button size="lg" href="#contact">
            Get In Touch
          </Button>
          <Button size="lg" variant="outline" href="#projects">
            View Projects
          </Button>
        </div>
        <div className="flex gap-6 justify-center pt-8 hero-actions">
          <a
            href="https://github.com/Himu1503"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 hover:scale-110 transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshusaxena1503/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 hover:scale-110 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:himanshusaxenaunreal@gmail.com"
            className="hover:opacity-70 hover:scale-110 transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

