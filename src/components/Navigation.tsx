import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-background/70 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl"> 💻 Himanshu Saxena</div>
        <div className="flex gap-4">
          <a href="#about">
            <Button variant="ghost">About</Button>
          </a>
          <a href="#skills">
            <Button variant="ghost">Skills</Button>
          </a>
          <a href="#projects">
            <Button variant="ghost">Projects</Button>
          </a>
          <a href="#contact">
            <Button variant="ghost">Contact</Button>
          </a>
        </div>
      </div>
    </nav>
  )
}

