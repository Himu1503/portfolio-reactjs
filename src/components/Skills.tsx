import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/AnimatedSection"
import { TiltCard } from "@/components/TiltCard"

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "FastAPI", "Django", "REST APIs", "GraphQL"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite"] },
  { category: "Tools", items: ["Git","Kubernetes", "Docker", "AWS", "CI/CD", "Testing", "Grafana", "Prometheus"] },
]

export function Skills() {
  return (
    <AnimatedSection id="skills" className="py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-100 section-heading">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <TiltCard key={skill.category}>
              <Card className="card-aurora border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20 hover:-translate-y-1 transition-transform duration-300" style={{ animationDelay: `${index * 120}ms` }}>
                <CardHeader>
                  <CardTitle className="text-xl text-cyan-200">{skill.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {skill.items.map((item) => (
                      <li key={item} className="text-sm text-slate-300 rounded-md border border-white/10 bg-black/20 px-2.5 py-1.5">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

