'use client'

import { useRef, useEffect } from 'react'

export default function HeroParallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = ref.current?.closest('section')
    function onScroll() {
      if (!ref.current || !section) return
      const { top, height } = section.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -top / height))
      ref.current.style.transform = `translateY(${progress * 25}%)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div ref={ref} className="absolute inset-0">{children}</div>
}
