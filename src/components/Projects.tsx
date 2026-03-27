import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Sport Betting Application",
    description: "Sports Betting Application deployed using Docker",
    tech: ["React", "FastAPI","Tailwind CSS","TypeScript"],
    github: "https://github.com/Himu1503/Sports-Betting-Admin-Platform",
    gradient: "from-blue-500 via-purple-500 to-pink-500",
  },
  {
    title: "Event Management App",
    description: "A collaborative Event management application for organizations to manage their events and attendees.",
    tech: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/Himu1503/full-stack-technical-test",
    demo: " https://pulse-events-test-solution.vercel.app/",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className="flex flex-col group relative overflow-hidden border-2 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`} />
              <CardHeader className="relative z-10">
                <CardTitle className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-2 py-1 rounded-md font-medium bg-gradient-to-r ${project.gradient} text-white opacity-90 hover:opacity-100 transition-opacity`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`hover:bg-gradient-to-r ${project.gradient} hover:text-white hover:border-transparent transition-all duration-300`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

