'use client'

import { useEffect, useRef } from 'react'

type LenisInstance = {
  raf: (time: number) => void
  destroy: () => void
}

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisInstance | null>(null)

  useEffect(() => {
    const initLenis = async () => {
      const LenisModule = await import('lenis')
      const Lenis = LenisModule.default
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        orientation: 'vertical' as const,
        gestureOrientation: 'vertical' as const,
        touchMultiplier: 2,
      })

      lenisRef.current = lenis as unknown as LenisInstance

      const raf = (time: number) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    initLenis()

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
    }
  }, [])

  return <>{children}</>
}
