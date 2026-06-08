'use client'

import { useEffect, useRef } from 'react'

interface RibbonPoint {
  x: number
  y: number
  z: number
}

export default function MobiusKnot() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function mobiusPoint(t: number, s: number) {
      const r = 2
      const w = 0.6
      const cx = Math.cos(t)
      const sy = Math.sin(t / 2)
      const cy = Math.sin(t)
      const sz = Math.cos(t / 2)

      const px = (r + w * s * Math.cos(t / 2)) * Math.cos(t)
      const py = (r + w * s * Math.cos(t / 2)) * Math.sin(t)
      const pz = w * s * Math.sin(t / 2)

      return { x: px, y: py, z: pz }
    }

    function project(p: RibbonPoint, w: number, h: number, rotX: number, rotY: number, rotZ: number) {
      let x = p.x
      let y = p.y
      let z = p.z

      const cx = Math.cos(rotX), sx = Math.sin(rotX)
      const cy = Math.cos(rotY), sy = Math.sin(rotY)
      const cz = Math.cos(rotZ), sz = Math.sin(rotZ)

      let y1 = y * cx - z * sx
      let z1 = y * sx + z * cx
      y = y1; z = z1

      let x1 = x * cy + z * sy
      let z2 = -x * sy + z * cy
      x = x1; z = z2

      let x2 = x * cz - y * sz
      let y2 = x * sz + y * cz
      x = x2; y = y2

      const scale = 80
      const fov = 3
      const factor = fov / (fov + z)
      const sx2 = w / 2 + x * scale * factor
      const sy2 = h / 2 + y * scale * factor

      return { x: sx2, y: sy2, z, factor }
    }

    function draw(time: number) {
      if (!canvas || !ctx) return
      const w = canvas.width
      const h = canvas.height

      ctx.clearRect(0, 0, w, h)

      const rotX = time * 0.0006
      const rotY = time * 0.0008
      const rotZ = time * 0.0004

      const segments = 80
      const ribbonWidth = 12
      const ribbonSegments: { points: { x: number; y: number; z: number; factor: number }[]; avgZ: number }[] = []

      for (let i = 0; i <= segments; i++) {
        const t = (i / segments) * Math.PI * 2
        const pts: { x: number; y: number; z: number; factor: number }[] = []

        for (let j = -ribbonWidth; j <= ribbonWidth; j++) {
          const s = j / ribbonWidth
          const p = mobiusPoint(t, s)
          const proj = project(p, w, h, rotX, rotY, rotZ)
          pts.push(proj)
        }

        const avgZ = pts.reduce((sum, p) => sum + p.z, 0) / pts.length
        ribbonSegments.push({ points: pts, avgZ })
      }

      ribbonSegments.sort((a, b) => a.avgZ - b.avgZ)

      const hue = 35
      const timeOffset = time * 0.001

      for (let i = 0; i < ribbonSegments.length; i++) {
        const seg = ribbonSegments[i]
        const pts = seg.points
        const mid = Math.floor(pts.length / 2)

        ctx.beginPath()
        ctx.moveTo(pts[0].x, pts[0].y)
        for (let j = 1; j < pts.length; j++) {
          ctx.lineTo(pts[j].x, pts[j].y)
        }
        ctx.closePath()

        const gradient = ctx.createLinearGradient(pts[0].x, pts[0].y, pts[pts.length - 1].x, pts[pts.length - 1].y)

        const alpha1 = Math.max(0.1, Math.min(0.5, 0.3 + 0.2 * Math.sin(seg.avgZ + timeOffset)))
        const alpha2 = Math.max(0.05, Math.min(0.35, 0.2 + 0.15 * Math.sin(seg.avgZ + timeOffset + 1)))

        gradient.addColorStop(0, `hsla(${hue}, 100%, 60%, ${alpha1})`)
        gradient.addColorStop(0.3, `hsla(${hue + 10}, 100%, 55%, ${alpha1 * 0.8})`)
        gradient.addColorStop(0.5, `hsla(${hue + 20}, 100%, 65%, ${alpha1 * 0.6})`)
        gradient.addColorStop(0.7, `hsla(${hue + 10}, 100%, 55%, ${alpha1 * 0.8})`)
        gradient.addColorStop(1, `hsla(${hue}, 100%, 60%, ${alpha2})`)

        ctx.fillStyle = gradient
        ctx.fill()

        ctx.strokeStyle = `hsla(${hue}, 80%, 70%, ${alpha1 * 0.3})`
        ctx.lineWidth = 0.5
        ctx.stroke()

        const glowAlpha = 0.08 * Math.sin(seg.avgZ + timeOffset) ** 2
        if (glowAlpha > 0.01) {
          ctx.save()
          ctx.shadowColor = `hsla(${hue}, 100%, 60%, ${glowAlpha})`
          ctx.shadowBlur = 20
          ctx.fillStyle = `hsla(${hue}, 100%, 60%, 0)`
          ctx.fill()
          ctx.restore()
        }

        if (i % 8 === 0) {
          const center = pts[mid]
          const size = 1.5 * (0.5 + 0.5 * Math.sin(seg.avgZ * 2 + timeOffset))
          ctx.save()
          ctx.beginPath()
          ctx.arc(center.x, center.y, size, 0, Math.PI * 2)
          ctx.fillStyle = `hsla(${hue + 15}, 100%, 80%, ${0.6 * (0.5 + 0.5 * Math.sin(seg.avgZ + timeOffset))})`
          ctx.shadowColor = `hsla(${hue}, 100%, 60%, 0.3)`
          ctx.shadowBlur = 8
          ctx.fill()
          ctx.restore()
        }
      }

      const glowGradient = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.min(w, h) * 0.4)
      glowGradient.addColorStop(0, 'rgba(245, 158, 11, 0.04)')
      glowGradient.addColorStop(0.5, 'rgba(245, 158, 11, 0.02)')
      glowGradient.addColorStop(1, 'rgba(245, 158, 11, 0)')
      ctx.fillStyle = glowGradient
      ctx.fillRect(0, 0, w, h)
    }

    function animate(time: number) {
      draw(time)
      animationId = requestAnimationFrame(animate)
    }

    resize()
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
