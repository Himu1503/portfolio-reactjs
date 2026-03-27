import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "FastAPI", "Django", "REST APIs", "GraphQL"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite"] },
  { category: "Tools", items: ["Git","Kubernetes", "Docker", "AWS", "CI/CD", "Testing", "Grafana", "Prometheus"] },
]

export function Skills() {
  return (
    <section id="skills" className="py-8 px-4 bg-muted/30 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card key={skill.category}>
              <CardHeader>
                <CardTitle>{skill.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

