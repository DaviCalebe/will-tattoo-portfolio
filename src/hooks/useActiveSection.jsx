import { useEffect, useState } from "react"

export function useActiveSection(containerRef) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!containerRef.current) return

    const sections = containerRef.current.children

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(Array.from(sections).indexOf(entry.target))
          }
        })
      },
      { threshold: 0.6 }
    )

    Array.from(sections).forEach(sec => observer.observe(sec))

    return () => observer.disconnect()
  }, [])

  return active
}
