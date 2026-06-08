'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  t: number
  speed: number
  size: number
  opacity: number
  hue: number
}

const GOLD = '#f59e0b'
const LIGHT_GOLD = '#fbbf24'
const DARK_GOLD = '#b45309'

export default function InfinityEnergyKnot() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const particles: Particle[] = []
    const NUM_PARTICLES = 60

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function initParticles() {
      particles.length = 0
      for (let i = 0; i < NUM_PARTICLES; i++) {
        particles.push({
          t: Math.random(),
          speed: 0.001 + Math.random() * 0.003,
          size: 2 + Math.random() * 4,
          opacity: 0.3 + Math.random() * 0.7,
          hue: 35 + Math.random() * 25,
        })
      }
    }

    function getInfinityPoint(t: number, w: number, h: number) {
      const scale = Math.min(w, h) * 0.28
      const cx = w / 2
      const cy = h / 2

      const x =
        cx + scale * Math.cos(t) / (1 + Math.sin(t) ** 2)
      const y =
        cy +
        scale * Math.sin(t) * Math.cos(t) / (1 + Math.sin(t) ** 2)

      return { x, y }
    }

    function drawKnot(time: number, w: number, h: number) {
      if (!ctx) return
      const cx = w / 2
      const cy = h / 2
      const scale = Math.min(w, h) * 0.28
      const glowRadius = Math.min(w, h) * 0.32

      ctx.save()

      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowRadius)
      gradient.addColorStop(0, 'rgba(245, 158, 11, 0.06)')
      gradient.addColorStop(0.5, 'rgba(245, 158, 11, 0.02)')
      gradient.addColorStop(1, 'rgba(245, 158, 11, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, w, h)

      const pulse = 0.7 + 0.3 * Math.sin(time * 0.001)

      ctx.shadowColor = GOLD
      ctx.shadowBlur = 20 * pulse

      ctx.beginPath()
      ctx.strokeStyle = `rgba(245, 158, 11, ${0.15 * pulse})`
      ctx.lineWidth = 2

      for (let t = 0; t < Math.PI * 2; t += 0.02) {
        const px = cx + scale * Math.cos(t) / (1 + Math.sin(t) ** 2)
        const py =
          cy + scale * Math.sin(t) * Math.cos(t) / (1 + Math.sin(t) ** 2)

        if (t === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.stroke()

      ctx.shadowBlur = 40 * pulse
      ctx.beginPath()
      ctx.strokeStyle = `rgba(251, 191, 36, ${0.08 * pulse})`
      ctx.lineWidth = 4

      for (let t = 0; t < Math.PI * 2; t += 0.02) {
        const px = cx + scale * Math.cos(t) / (1 + Math.sin(t) ** 2)
        const py =
          cy + scale * Math.sin(t) * Math.cos(t) / (1 + Math.sin(t) ** 2)

        if (t === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.stroke()

      const dotCount = 8
      for (let i = 0; i < dotCount; i++) {
        const t =
          (i / dotCount) * Math.PI * 2 + time * 0.0005
        const dot = getInfinityPoint(t, w, h)
        const dotPulse = 0.5 + 0.5 * Math.sin(time * 0.002 + i)
        ctx.shadowBlur = 30 * dotPulse
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, 3 * dotPulse, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(251, 191, 36, ${0.4 * dotPulse})`
        ctx.fill()
      }

      ctx.restore()
    }

    function drawParticles(time: number, w: number, h: number) {
      if (!ctx) return
      const scale = Math.min(w, h) * 0.28

      for (const p of particles) {
        p.t += p.speed
        if (p.t > Math.PI * 2) p.t -= Math.PI * 2

        const pt = getInfinityPoint(p.t, w, h)

        const glow = 0.5 + 0.5 * Math.sin(time * 0.003 + p.t * 5)
        const alpha = p.opacity * glow

        ctx.save()
        ctx.shadowColor = `hsl(${p.hue}, 100%, 55%)`
        ctx.shadowBlur = 15

        ctx.beginPath()
        ctx.arc(pt.x, pt.y, p.size * glow, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${alpha})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(pt.x, pt.y, p.size * glow * 2, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${alpha * 0.3})`
        ctx.fill()

        ctx.restore()

        const trailLength = 5
        for (let j = 1; j <= trailLength; j++) {
          const trailT = p.t - j * 0.02
          if (trailT < 0) continue
          const trail = getInfinityPoint(trailT, w, h)
          const trailAlpha = alpha * (1 - j / (trailLength + 1)) * 0.3
          ctx.save()
          ctx.shadowBlur = 0
          ctx.beginPath()
          ctx.arc(trail.x, trail.y, p.size * 0.3 * (1 - j / (trailLength + 1)), 0, Math.PI * 2)
          ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${trailAlpha})`
          ctx.fill()
          ctx.restore()
        }
      }
    }

    function animate(time: number) {
      if (!canvas || !ctx) return
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      drawKnot(time, w, h)
      drawParticles(time, w, h)

      animationId = requestAnimationFrame(animate)
    }

    resize()
    initParticles()
    animate(0)

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
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
