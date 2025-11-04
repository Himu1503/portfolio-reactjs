import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <Card>
          <CardHeader>
            <CardTitle>Hello there, I'm a Full Stack Developer</CardTitle>
            <CardDescription>
              Passionate about creating beautiful and functional web applications and solving complex problems.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              I specialize in building modern, scalable web applications using
              React, TypeScript, Node.js, Python, FastAPI and various modern technologies. I
              enjoy solving complex problems and turning ideas into reality
              through clean, efficient code.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

