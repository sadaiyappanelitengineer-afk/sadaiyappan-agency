'use client'

import { useEffect, useRef } from 'react'

export default function OrbBackground() {
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

    const orbs = [
      { x: 0.2, y: 0.3, radius: 200, speed: 0.3, phase: 0 },
      { x: 0.8, y: 0.6, radius: 250, speed: 0.2, phase: 1.5 },
      { x: 0.5, y: 0.8, radius: 180, speed: 0.4, phase: 3 },
    ]

    const draw = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      orbs.forEach((orb) => {
        const x = canvas.width * orb.x + Math.sin(time * orb.speed + orb.phase) * 50
        const y = canvas.height * orb.y + Math.cos(time * orb.speed * 0.7 + orb.phase) * 40
        const r = orb.radius + Math.sin(time * orb.speed + orb.phase) * 20

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r)
        gradient.addColorStop(0, 'rgba(245,158,11,0.08)')
        gradient.addColorStop(0.5, 'rgba(217,119,6,0.04)')
        gradient.addColorStop(1, 'rgba(245,158,11,0)')

        ctx.fillStyle = gradient
        ctx.fillRect(x - r, y - r, r * 2, r * 2)
      })

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}
