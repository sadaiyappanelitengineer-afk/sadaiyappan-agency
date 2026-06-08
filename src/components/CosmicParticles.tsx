'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  color: string
  pulseSpeed: number
  pulsePhase: number
}

interface Star {
  x: number
  y: number
  size: number
  alpha: number
  twinkleSpeed: number
  twinklePhase: number
}

interface Nebula {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  alpha: number
}

const GOLD_COLORS = ['#f59e0b', '#d97706', '#fbbf24', '#fef3c7']

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

function colorToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

export default function CosmicParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = window.innerWidth
    let h = window.innerHeight
    canvas.width = w
    canvas.height = h

    const particles: Particle[] = []
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: randomBetween(0, w),
        y: randomBetween(0, h),
        vx: randomBetween(-0.3, 0.3),
        vy: randomBetween(-0.3, 0.3),
        size: randomBetween(1.5, 4),
        alpha: randomBetween(0.3, 0.9),
        color: GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)],
        pulseSpeed: randomBetween(0.005, 0.02),
        pulsePhase: randomBetween(0, Math.PI * 2),
      })
    }

    const stars: Star[] = []
    for (let i = 0; i < 30; i++) {
      stars.push({
        x: randomBetween(0, w),
        y: randomBetween(0, h),
        size: randomBetween(0.5, 1.2),
        alpha: randomBetween(0.2, 0.8),
        twinkleSpeed: randomBetween(0.01, 0.04),
        twinklePhase: randomBetween(0, Math.PI * 2),
      })
    }

    const nebulae: Nebula[] = []
    for (let i = 0; i < 3; i++) {
      nebulae.push({
        x: randomBetween(0, w),
        y: randomBetween(0, h),
        vx: randomBetween(-0.05, 0.05),
        vy: randomBetween(-0.05, 0.05),
        radius: randomBetween(150, 300),
        color: GOLD_COLORS[i % GOLD_COLORS.length],
        alpha: randomBetween(0.04, 0.08),
      })
    }

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const handleResize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w
      canvas.height = h
    }

    window.addEventListener('mousemove', handleMouse)
    window.addEventListener('resize', handleResize)

    const tick = (time: number) => {
      ctx.clearRect(0, 0, w, h)

      for (const neb of nebulae) {
        neb.x += neb.vx
        neb.y += neb.vy
        if (neb.x < -neb.radius || neb.x > w + neb.radius) neb.vx *= -1
        if (neb.y < -neb.radius || neb.y > h + neb.radius) neb.vy *= -1

        const grad = ctx.createRadialGradient(neb.x, neb.y, 0, neb.x, neb.y, neb.radius)
        grad.addColorStop(0, colorToRgba(neb.color, neb.alpha))
        grad.addColorStop(0.5, colorToRgba(neb.color, neb.alpha * 0.4))
        grad.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = grad
        ctx.fillRect(neb.x - neb.radius, neb.y - neb.radius, neb.radius * 2, neb.radius * 2)
      }

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (const p of particles) {
        const dx = p.x - mx
        const dy = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        const influence = 120

        if (dist < influence && dist > 0) {
          const force = (influence - dist) / influence
          const dirX = dx / dist
          const dirY = dy / dist
          p.vx += dirX * force * 0.03
          p.vy += dirY * force * 0.03
        }

        p.vx += randomBetween(-0.005, 0.005)
        p.vy += randomBetween(-0.005, 0.005)
        p.vx = Math.max(-0.8, Math.min(0.8, p.vx))
        p.vy = Math.max(-0.8, Math.min(0.8, p.vy))

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        const pulseAlpha = p.alpha * (0.6 + 0.4 * Math.sin(time * p.pulseSpeed + p.pulsePhase))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = colorToRgba(p.color, pulseAlpha)
        ctx.fill()
      }

      for (const s of stars) {
        const twinkleAlpha = s.alpha * (0.5 + 0.5 * Math.sin(time * s.twinkleSpeed + s.twinklePhase))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${twinkleAlpha})`
        ctx.fill()
      }

      animFrameRef.current = requestAnimationFrame(tick)
    }

    animFrameRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ display: 'block' }}
    />
  )
}
