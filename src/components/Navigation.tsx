import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 nav-float">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center">
        <div className="flex gap-2 rounded-full border border-amber-200/20 bg-slate-950/45 p-1.5 backdrop-blur-xl shadow-xl shadow-cyan-900/20">
          <a href="#about">
            <Button variant="ghost" className="rounded-full text-slate-200 hover:bg-amber-200/10 hover:text-amber-100">About</Button>
          </a>
          <a href="#skills">
            <Button variant="ghost" className="rounded-full text-slate-200 hover:bg-amber-200/10 hover:text-amber-100">Skills</Button>
          </a>
          <a href="#projects">
            <Button variant="ghost" className="rounded-full text-slate-200 hover:bg-amber-200/10 hover:text-amber-100">Projects</Button>
          </a>
          <a href="#contact">
            <Button variant="ghost" className="rounded-full text-slate-200 hover:bg-amber-200/10 hover:text-amber-100">Contact</Button>
          </a>
        </div>
      </div>
    </nav>
  )
}

