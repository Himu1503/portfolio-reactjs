import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 nav-float">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center">
        <div className="flex gap-2 rounded-full border border-white/10 bg-black/30 p-1.5 backdrop-blur-xl shadow-xl shadow-black/20">
          <a href="#about">
            <Button variant="ghost" className="rounded-full text-slate-200 hover:bg-white/10">About</Button>
          </a>
          <a href="#skills">
            <Button variant="ghost" className="rounded-full text-slate-200 hover:bg-white/10">Skills</Button>
          </a>
          <a href="#projects">
            <Button variant="ghost" className="rounded-full text-slate-200 hover:bg-white/10">Projects</Button>
          </a>
          <a href="#contact">
            <Button variant="ghost" className="rounded-full text-slate-200 hover:bg-white/10">Contact</Button>
          </a>
        </div>
      </div>
    </nav>
  )
}

