'use client'

import { useEffect, useRef } from 'react'

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let mouseX = -9999
    let mouseY = -9999

    const nodeCounts = [
      8 + Math.floor(Math.random() * 5),
      8 + Math.floor(Math.random() * 5),
      8 + Math.floor(Math.random() * 5),
    ]

    interface Node {
      x: number
      y: number
      phase: number
    }

    const layers: Node[][] = [[], [], []]

    const initNodes = () => {
      for (let l = 0; l < 3; l++) {
        const nodes: Node[] = []
        const cx = canvas.width * (0.15 + 0.35 * l)
        const count = nodeCounts[l]
        for (let i = 0; i < count; i++) {
          nodes.push({
            x: cx,
            y: canvas.height * (0.12 + (0.76 * (i + 0.5)) / count),
            phase: Math.random() * Math.PI * 2,
          })
        }
        layers[l] = nodes
      }
    }

    initNodes()

    const connections: { from: Node; to: Node }[] = []
    for (const a of layers[0]) {
      for (const b of layers[1]) {
        connections.push({ from: a, to: b })
      }
    }
    for (const a of layers[1]) {
      for (const b of layers[2]) {
        connections.push({ from: a, to: b })
      }
    }

    interface Signal {
      connIdx: number
      progress: number
      speed: number
    }

    const signals: Signal[] = []
    let signalInterval: ReturnType<typeof setInterval>

    const spawnSignal = () => {
      if (connections.length === 0) return
      const idx = Math.floor(Math.random() * connections.length)
      signals.push({
        connIdx: idx,
        progress: 0,
        speed: 0.002 + Math.random() * 0.004,
      })
    }

    signalInterval = setInterval(spawnSignal, 700)

    for (let i = 0; i < 4; i++) {
      setTimeout(spawnSignal, i * 180)
    }

    const distToSegment = (
      px: number, py: number,
      ax: number, ay: number,
      bx: number, by: number,
    ) => {
      const dx = bx - ax
      const dy = by - ay
      const lenSq = dx * dx + dy * dy
      if (lenSq === 0) return Math.hypot(px - ax, py - ay)
      let t = ((px - ax) * dx + (py - ay) * dy) / lenSq
      t = Math.max(0, Math.min(1, t))
      return Math.hypot(px - (ax + t * dx), py - (ay + t * dy))
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initNodes()
    }

    resize()
    window.addEventListener('resize', resize)

    const onMove = (e: MouseEvent | TouchEvent) => {
      const p = 'touches' in e ? e.touches[0] : e
      mouseX = p.clientX
      mouseY = p.clientY
    }

    const onLeave = () => {
      mouseX = -9999
      mouseY = -9999
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove)
    window.addEventListener('mouseleave', onLeave)

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      initNodes()

      let minDist = 140
      let closestIdx = -1
      for (let i = 0; i < connections.length; i++) {
        const { from, to } = connections[i]
        const d = distToSegment(mouseX, mouseY, from.x, from.y, to.x, to.y)
        if (d < minDist) {
          minDist = d
          closestIdx = i
        }
      }

      for (let i = 0; i < connections.length; i++) {
        const { from, to } = connections[i]
        const isActive = i === closestIdx
        const baseAlpha = isActive ? 0.35 : 0.06
        const pulse = isActive
          ? 0.5 + 0.5 * Math.sin(time * 0.012)
          : 0
        const alpha = Math.min(1, baseAlpha + pulse * 0.65)
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.strokeStyle = `rgba(245, 158, 11, ${alpha})`
        ctx.lineWidth = isActive ? 2.5 : 0.8
        ctx.stroke()
      }

      for (let i = signals.length - 1; i >= 0; i--) {
        const sig = signals[i]
        sig.progress += sig.speed
        if (sig.progress >= 1) {
          signals.splice(i, 1)
          continue
        }
        const { from, to } = connections[sig.connIdx]
        const x = from.x + (to.x - from.x) * sig.progress
        const y = from.y + (to.y - from.y) * sig.progress
        const isActive = sig.connIdx === closestIdx
        ctx.beginPath()
        ctx.arc(x, y, isActive ? 4 : 2.5, 0, Math.PI * 2)
        ctx.fillStyle = '#fbbf24'
        ctx.shadowColor = '#f59e0b'
        ctx.shadowBlur = isActive ? 16 : 8
        ctx.fill()
        ctx.shadowBlur = 0
      }

      for (const layer of layers) {
        for (const node of layer) {
          const pulse = 0.5 + 0.5 * Math.sin(time * 0.002 + node.phase)
          const radius = 2.5 + pulse * 2
          const glow = 4 + pulse * 12

          ctx.beginPath()
          ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
          ctx.fillStyle = '#f59e0b'
          ctx.shadowColor = '#f59e0b'
          ctx.shadowBlur = glow
          ctx.fill()

          ctx.beginPath()
          ctx.arc(node.x, node.y, radius * 0.35, 0, Math.PI * 2)
          ctx.fillStyle = '#fef3c7'
          ctx.shadowBlur = 0
          ctx.fill()
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    animationId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animationId)
      clearInterval(signalInterval)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}
