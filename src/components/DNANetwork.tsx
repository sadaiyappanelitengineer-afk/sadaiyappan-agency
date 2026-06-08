'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
}

const NODE_COUNT = 40
const CONNECTION_DIST = 150
const DRIFT_SPEED = 0.3
const COLORS = {
  node: '#f59e0b',
  glow: '#d97706',
  line: (dist: number) => {
    const opacity = Math.max(0, 1 - dist / CONNECTION_DIST)
    return `rgba(245, 158, 11, ${opacity * 0.5})`
  },
  lineBright: (dist: number) => {
    const opacity = Math.max(0, 1 - dist / CONNECTION_DIST)
    return `rgba(251, 191, 36, ${opacity})`
  },
}

export default function DNANetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let mouseX = -9999
    let mouseY = -9999

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * DRIFT_SPEED,
      vy: (Math.random() - 0.5) * DRIFT_SPEED,
    }))

    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    const onLeave = () => {
      mouseX = -9999
      mouseY = -9999
    }
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('mouseleave', onLeave)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DIST) {
            const nearMouse =
              Math.abs(nodes[i].x - mouseX) < CONNECTION_DIST &&
              Math.abs(nodes[i].y - mouseY) < CONNECTION_DIST &&
              Math.abs(nodes[j].x - mouseX) < CONNECTION_DIST &&
              Math.abs(nodes[j].y - mouseY) < CONNECTION_DIST

            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = nearMouse
              ? COLORS.lineBright(dist)
              : COLORS.line(dist)
            ctx.lineWidth = nearMouse ? 1.5 : 0.8
            ctx.stroke()
          }
        }
      }

      for (const node of nodes) {
        const grd = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, 8,
        )
        grd.addColorStop(0, 'rgba(245, 158, 11, 0.9)')
        grd.addColorStop(1, 'rgba(217, 119, 6, 0)')
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(node.x, node.y, 8, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = COLORS.node
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}
