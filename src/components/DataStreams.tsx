'use client'

import { useEffect, useRef } from 'react'

interface StreamLine {
  y: number
  speed: number
  amplitude: number
  frequency: number
  phase: number
  opacity: number
  color: string
  segments: { x: number; y: number }[]
}

interface DataNumber {
  x: number
  y: number
  value: number
  opacity: number
  life: number
  maxLife: number
}

const COLORS = ['#f59e0b', '#d97706', '#fbbf24']

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function DataStreams() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let streamLines: StreamLine[] = []
    let dataNumbers: DataNumber[] = []
    const GRID_SIZE = 60

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function initLines() {
      streamLines = []
      for (let i = 0; i < 20; i++) {
        const points: { x: number; y: number }[] = []
        const y = randomInRange(0, canvas!.height)
        const amp = randomInRange(20, 80)
        const freq = randomInRange(0.002, 0.008)
        points.push({ x: -50, y })
        for (let x = 0; x <= canvas!.width + 50; x += 30) {
          points.push({
            x,
            y: y + Math.sin(x * freq) * amp,
          })
        }
        streamLines.push({
          y,
          speed: randomInRange(0.3, 1.2),
          amplitude: amp,
          frequency: freq,
          phase: randomInRange(0, Math.PI * 2),
          opacity: randomInRange(0.08, 0.35),
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          segments: points,
        })
      }
    }

    function initLine(index: number) {
      const amp = randomInRange(20, 80)
      const freq = randomInRange(0.002, 0.008)
      const y = randomInRange(0, canvas!.height)
      const points: { x: number; y: number }[] = []
      points.push({ x: -50, y })
      for (let x = 0; x <= canvas!.width + 50; x += 30) {
        points.push({
          x,
          y: y + Math.sin(x * freq) * amp,
        })
      }
      streamLines[index] = {
        y,
        speed: randomInRange(0.3, 1.2),
        amplitude: amp,
        frequency: freq,
        phase: randomInRange(0, Math.PI * 2),
        opacity: randomInRange(0.08, 0.35),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        segments: points,
      }
    }

    function spawnDataNumber() {
      if (dataNumbers.length > 15) return
      dataNumbers.push({
        x: randomInRange(0, canvas!.width),
        y: randomInRange(0, canvas!.height),
        value: Math.floor(Math.random() * 10),
        opacity: 0,
        life: 0,
        maxLife: randomInRange(60, 180),
      })
    }

    function drawGrid() {
      if (!canvas || !ctx) return
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.05)'
      ctx.lineWidth = 1

      for (let x = 0; x <= canvas.width; x += GRID_SIZE) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y <= canvas.height; y += GRID_SIZE) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    function drawStreamLines(time: number) {
      if (!canvas || !ctx) return

      for (let i = 0; i < streamLines.length; i++) {
        const line = streamLines[i]
        const offset = (time * line.speed * 0.02) % (canvas.width + 100)

        ctx.beginPath()
        ctx.strokeStyle = line.color
        ctx.globalAlpha = line.opacity
        ctx.lineWidth = 1.5

        for (let j = 0; j < line.segments.length; j++) {
          const seg = line.segments[j]
          const x = seg.x - offset
          const yShift =
            Math.sin(seg.x * line.frequency + time * 0.001 + line.phase) *
            line.amplitude
          const yPos = line.y + yShift

          if (j === 0) {
            ctx.moveTo(x, yPos)
          } else {
            const prev = line.segments[j - 1]
            const prevYShift =
              Math.sin(prev.x * line.frequency + time * 0.001 + line.phase) *
              line.amplitude
            const cpx = (prev.x - offset + x) / 2
            const cpy = (line.y + prevYShift + line.y + yShift) / 2
            ctx.quadraticCurveTo(cpx, cpy, x, yPos)
          }
        }

        ctx.stroke()
        ctx.globalAlpha = 1

        if (offset > canvas.width + 150) {
          initLine(i)
        }
      }
    }

    function drawDataNumbers() {
      if (!ctx) return

      for (let i = dataNumbers.length - 1; i >= 0; i--) {
        const dn = dataNumbers[i]
        dn.life++

        if (dn.life < 30) {
          dn.opacity = dn.life / 30
        } else if (dn.life > dn.maxLife - 30) {
          dn.opacity = (dn.maxLife - dn.life) / 30
        } else {
          dn.opacity = 0.8
        }

        if (dn.life >= dn.maxLife) {
          dataNumbers.splice(i, 1)
          continue
        }

        ctx.font = '12px monospace'
        ctx.fillStyle = `rgba(251, 191, 36, ${dn.opacity * 0.6})`
        ctx.fillText(String(dn.value), dn.x, dn.y)
      }
    }

    function animate(time: number) {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawGrid()
      drawStreamLines(time)
      drawDataNumbers()

      if (Math.random() < 0.05) {
        spawnDataNumber()
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    initLines()
    animate(0)

    window.addEventListener('resize', resize)
    window.addEventListener('resize', initLines)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('resize', initLines)
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
