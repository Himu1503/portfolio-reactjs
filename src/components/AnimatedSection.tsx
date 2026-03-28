import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

type AnimatedSectionProps = {
  id?: string
  className?: string
  children: ReactNode
}

export function AnimatedSection({ id, className = "", children }: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={`section-reveal ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </section>
  )
}
