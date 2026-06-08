'use client'

import { useEffect, useRef } from 'react'

interface Card {
  x: number
  y: number
  width: number
  height: number
  speed: number
  rotation: number
  rotationSpeed: number
  scale: number
  scaleTarget: number
  scaleSpeed: number
  opacity: number
  depth: number
  borderWidth: number
  color: string
  phase: number
}

export default function FloatingCards() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let mouseX = 0
    let mouseY = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener('mousemove', handleMouseMove)

    const colors = ['#f59e0b', '#d97706', '#fbbf24']

    const cards: Card[] = Array.from({ length: 15 }, (_, i) => {
      const emerging = i < 8
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: 60 + Math.random() * 120,
        height: 80 + Math.random() * 160,
        speed: 0.15 + Math.random() * 0.7,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
        scale: emerging ? 0.05 + Math.random() * 0.15 : 0.4 + Math.random() * 0.6,
        scaleTarget: 0.7 + Math.random() * 0.3,
        scaleSpeed: 0.001 + Math.random() * 0.004,
        opacity: emerging ? 0.05 + Math.random() * 0.1 : 0.2 + Math.random() * 0.5,
        depth: 0.2 + Math.random() * 0.8,
        borderWidth: 1 + Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        phase: Math.random() * Math.PI * 2,
      }
    })

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const sorted = [...cards].sort((a, b) => a.depth - b.depth)

      for (const card of sorted) {
        card.y -= card.speed
        card.rotation += card.rotationSpeed

        if (card.scale < card.scaleTarget) {
          card.scale += card.scaleSpeed * (1 - card.scale / card.scaleTarget)
        }

        if (card.opacity < 0.7) {
          card.opacity += 0.002
        }

        if (card.y < -card.height * card.scale - 100) {
          card.y = canvas.height + 100 + Math.random() * 200
          card.x = Math.random() * canvas.width
          card.scale = 0.05 + Math.random() * 0.15
          card.opacity = 0.05 + Math.random() * 0.1
          card.rotation = Math.random() * Math.PI * 2
          card.scaleTarget = 0.7 + Math.random() * 0.3
          card.speed = 0.15 + Math.random() * 0.7
        }

        const parallaxX = mouseX * card.depth * 40
        const parallaxY = mouseY * card.depth * 25

        const cx = card.x + parallaxX
        const cy = card.y + parallaxY
        const w = card.width * card.scale
        const h = card.height * card.scale

        ctx.save()
        ctx.translate(cx, cy)
        ctx.rotate(card.rotation)
        ctx.translate(-w / 2, -h / 2)

        const alpha = Math.min(card.opacity, 1)

        ctx.fillStyle = `rgba(245,158,11,${alpha * 0.08})`
        ctx.fillRect(0, 0, w, h)

        ctx.strokeStyle = card.color
        ctx.lineWidth = Math.max(1, card.borderWidth * card.scale)
        ctx.globalAlpha = alpha * 0.8
        ctx.strokeRect(1, 1, w - 2, h - 2)

        ctx.strokeStyle = 'rgba(245,158,11,0.3)'
        ctx.lineWidth = 1
        ctx.globalAlpha = alpha * 0.4
        ctx.strokeRect(4, 4, w - 8, h - 8)

        ctx.restore()
      }

      animationId = requestAnimationFrame(draw)
    }

    animationId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
