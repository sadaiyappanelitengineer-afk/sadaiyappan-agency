'use client'

import { useEffect, useRef } from 'react'

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient.addColorStop(0, 'rgba(245,158,11,0.03)')
      gradient.addColorStop(0.5, 'rgba(217,119,6,0.06)')
      gradient.addColorStop(1, 'rgba(245,158,11,0.03)')

      ctx.strokeStyle = gradient
      ctx.lineWidth = 1.5

      for (let row = 0; row < 3; row++) {
        ctx.beginPath()
        const baseY = canvas.height * (0.25 + row * 0.25)
        for (let x = 0; x <= canvas.width; x += 2) {
          const y = baseY + Math.sin(x * 0.008 + time + row * 2) * 30 + Math.sin(x * 0.015 + time * 0.7 + row) * 15
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-60" />
}
