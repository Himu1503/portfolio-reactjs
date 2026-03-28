import { useEffect } from "react"

export function AuroraCursor() {
  useEffect(() => {
    const root = document.documentElement
    let frame = 0

    const onMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--cursor-x", `${event.clientX}px`)
        root.style.setProperty("--cursor-y", `${event.clientY}px`)
      })
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("mousemove", onMove)
    }
  }, [])

  return <div aria-hidden className="aurora-cursor hidden md:block" />
}
