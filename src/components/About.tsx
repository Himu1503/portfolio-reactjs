import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/AnimatedSection"
import { TiltCard } from "@/components/TiltCard"

export function About() {
  return (
    <AnimatedSection id="about" className="px-4 py-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-100 section-heading">About Me</h2>
        <TiltCard>
          <Card className="card-aurora border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-cyan-900/20">
            <CardHeader>
              <CardTitle className="text-slate-100">Hello there</CardTitle>
              <CardDescription className="text-slate-300">
                I build elegant web experiences that stay reliable at scale.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-7">
              <p className="text-slate-300">
                I’m a software engineer at JP Morgan, passionate about building modern, scalable, and high‑performance web applications. I specialize in technologies like React, TypeScript, Node.js, Python, and FastAPI, creating clean and efficient solutions that turn complex ideas into seamless digital experiences.
              </p>
              <p className="text-slate-300">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </CardContent>
          </Card>
        </TiltCard>
      </div>
    </AnimatedSection>
  )
}

