import { useRef } from "react"
import type { MouseEvent, ReactNode } from "react"
import { cn } from "@/lib/utils"

type TiltCardProps = {
  children: ReactNode
  className?: string
}

const MAX_TILT_DEG = 8

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const element = ref.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5

    element.style.setProperty("--tilt-x", `${-py * MAX_TILT_DEG}deg`)
    element.style.setProperty("--tilt-y", `${px * MAX_TILT_DEG}deg`)
    element.style.setProperty("--glow-x", `${(px + 0.5) * 100}%`)
    element.style.setProperty("--glow-y", `${(py + 0.5) * 100}%`)
  }

  const onMouseLeave = () => {
    const element = ref.current
    if (!element) return

    element.style.setProperty("--tilt-x", "0deg")
    element.style.setProperty("--tilt-y", "0deg")
    element.style.setProperty("--glow-x", "50%")
    element.style.setProperty("--glow-y", "50%")
  }

  return (
    <div
      ref={ref}
      className={cn("tilt-wrap", className)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
}
