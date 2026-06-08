'use client'

import { useEffect, useRef } from 'react'

interface Point {
  lat: number
  lng: number
}

interface City extends Point {
  name: string
}

interface Route {
  from: number
  to: number
  phase: number
}

interface CurvePoints {
  sx: number
  sy: number
  mx: number
  my: number
  ex: number
  ey: number
}

const CITIES: City[] = [
  { name: 'New York', lat: 40.71, lng: -74.01 },
  { name: 'London', lat: 51.51, lng: -0.13 },
  { name: 'Tokyo', lat: 35.68, lng: 139.65 },
  { name: 'Sydney', lat: -33.87, lng: 151.21 },
  { name: 'Sao Paulo', lat: -23.55, lng: -46.63 },
  { name: 'Dubai', lat: 25.2, lng: 55.27 },
  { name: 'Singapore', lat: 1.35, lng: 103.82 },
  { name: 'Mumbai', lat: 19.08, lng: 72.88 },
  { name: 'Shanghai', lat: 31.23, lng: 121.47 },
  { name: 'Los Angeles', lat: 34.05, lng: -118.24 },
  { name: 'Moscow', lat: 55.76, lng: 37.62 },
  { name: 'Cape Town', lat: -33.92, lng: 18.42 },
  { name: 'Cairo', lat: 30.04, lng: 31.24 },
  { name: 'Toronto', lat: 43.65, lng: -79.38 },
  { name: 'Berlin', lat: 52.52, lng: 13.41 },
]

const ROUTES: Route[] = [
  { from: 0, to: 1, phase: 0.0 },
  { from: 1, to: 5, phase: 0.3 },
  { from: 5, to: 6, phase: 0.6 },
  { from: 6, to: 2, phase: 0.9 },
  { from: 2, to: 8, phase: 0.2 },
  { from: 8, to: 7, phase: 0.5 },
  { from: 7, to: 5, phase: 0.8 },
  { from: 1, to: 14, phase: 0.1 },
  { from: 4, to: 0, phase: 0.4 },
  { from: 11, to: 1, phase: 0.7 },
  { from: 12, to: 5, phase: 0.0 },
  { from: 3, to: 6, phase: 0.3 },
  { from: 9, to: 2, phase: 0.6 },
  { from: 0, to: 9, phase: 0.9 },
  { from: 14, to: 10, phase: 0.2 },
  { from: 10, to: 2, phase: 0.5 },
]

const CONTINENTS: Point[][] = [
  [
    { lat: 65, lng: -168 }, { lat: 70, lng: -140 }, { lat: 70, lng: -100 },
    { lat: 72, lng: -60 }, { lat: 60, lng: -45 }, { lat: 50, lng: -55 },
    { lat: 45, lng: -65 }, { lat: 35, lng: -75 }, { lat: 28, lng: -80 },
    { lat: 25, lng: -85 }, { lat: 22, lng: -90 }, { lat: 20, lng: -98 },
    { lat: 22, lng: -105 }, { lat: 28, lng: -110 }, { lat: 32, lng: -115 },
    { lat: 35, lng: -120 }, { lat: 40, lng: -124 }, { lat: 48, lng: -125 },
    { lat: 55, lng: -130 }, { lat: 60, lng: -145 }, { lat: 65, lng: -168 },
  ],
  [
    { lat: 8, lng: -77 }, { lat: 12, lng: -72 }, { lat: 10, lng: -65 },
    { lat: 5, lng: -60 }, { lat: 0, lng: -50 }, { lat: -5, lng: -35 },
    { lat: -10, lng: -36 }, { lat: -15, lng: -39 }, { lat: -23, lng: -43 },
    { lat: -30, lng: -48 }, { lat: -35, lng: -55 }, { lat: -40, lng: -60 },
    { lat: -45, lng: -65 }, { lat: -50, lng: -70 }, { lat: -55, lng: -68 },
    { lat: -50, lng: -75 }, { lat: -45, lng: -73 }, { lat: -40, lng: -73 },
    { lat: -35, lng: -72 }, { lat: -30, lng: -71 }, { lat: -25, lng: -70 },
    { lat: -20, lng: -70 }, { lat: -15, lng: -75 }, { lat: -10, lng: -76 },
    { lat: -5, lng: -78 }, { lat: -2, lng: -80 }, { lat: 2, lng: -78 },
    { lat: 5, lng: -76 }, { lat: 8, lng: -77 },
  ],
  [
    { lat: 52, lng: -10 }, { lat: 55, lng: -3 }, { lat: 58, lng: 5 },
    { lat: 62, lng: 10 }, { lat: 65, lng: 15 }, { lat: 68, lng: 22 },
    { lat: 70, lng: 28 }, { lat: 65, lng: 30 }, { lat: 60, lng: 32 },
    { lat: 55, lng: 30 }, { lat: 50, lng: 28 }, { lat: 48, lng: 32 },
    { lat: 45, lng: 28 }, { lat: 42, lng: 28 }, { lat: 40, lng: 25 },
    { lat: 38, lng: 22 }, { lat: 40, lng: 18 }, { lat: 42, lng: 12 },
    { lat: 44, lng: 10 }, { lat: 46, lng: 8 }, { lat: 48, lng: 5 },
    { lat: 50, lng: 2 }, { lat: 50, lng: -2 }, { lat: 48, lng: -5 },
    { lat: 46, lng: -5 }, { lat: 44, lng: -3 }, { lat: 42, lng: -5 },
    { lat: 40, lng: -3 }, { lat: 38, lng: -9 }, { lat: 40, lng: -9 },
    { lat: 43, lng: -10 }, { lat: 46, lng: -10 }, { lat: 48, lng: -10 },
    { lat: 52, lng: -10 },
  ],
  [
    { lat: 32, lng: -8 }, { lat: 33, lng: -5 }, { lat: 35, lng: 0 },
    { lat: 36, lng: 5 }, { lat: 35, lng: 10 }, { lat: 33, lng: 15 },
    { lat: 32, lng: 20 }, { lat: 30, lng: 25 }, { lat: 30, lng: 30 },
    { lat: 28, lng: 32 }, { lat: 25, lng: 35 }, { lat: 22, lng: 35 },
    { lat: 18, lng: 38 }, { lat: 12, lng: 42 }, { lat: 10, lng: 48 },
    { lat: 5, lng: 50 }, { lat: 2, lng: 48 }, { lat: 0, lng: 45 },
    { lat: -5, lng: 42 }, { lat: -8, lng: 40 }, { lat: -12, lng: 38 },
    { lat: -15, lng: 36 }, { lat: -20, lng: 35 }, { lat: -25, lng: 35 },
    { lat: -30, lng: 32 }, { lat: -33, lng: 25 }, { lat: -35, lng: 20 },
    { lat: -33, lng: 18 }, { lat: -30, lng: 15 }, { lat: -25, lng: 14 },
    { lat: -20, lng: 12 }, { lat: -15, lng: 12 }, { lat: -12, lng: 14 },
    { lat: -8, lng: 13 }, { lat: -5, lng: 10 }, { lat: -2, lng: 8 },
    { lat: 0, lng: 5 }, { lat: 2, lng: 2 }, { lat: 5, lng: -2 },
    { lat: 8, lng: -5 }, { lat: 10, lng: -8 }, { lat: 12, lng: -12 },
    { lat: 15, lng: -15 }, { lat: 18, lng: -16 }, { lat: 20, lng: -17 },
    { lat: 22, lng: -16 }, { lat: 25, lng: -15 }, { lat: 28, lng: -13 },
    { lat: 30, lng: -10 }, { lat: 32, lng: -8 },
  ],
  [
    { lat: 40, lng: 28 }, { lat: 42, lng: 30 }, { lat: 45, lng: 32 },
    { lat: 48, lng: 35 }, { lat: 50, lng: 38 }, { lat: 52, lng: 42 },
    { lat: 55, lng: 48 }, { lat: 55, lng: 55 }, { lat: 55, lng: 60 },
    { lat: 58, lng: 65 }, { lat: 60, lng: 70 }, { lat: 62, lng: 75 },
    { lat: 65, lng: 80 }, { lat: 68, lng: 85 }, { lat: 70, lng: 90 },
    { lat: 72, lng: 100 }, { lat: 72, lng: 110 }, { lat: 70, lng: 120 },
    { lat: 68, lng: 130 }, { lat: 65, lng: 140 }, { lat: 62, lng: 150 },
    { lat: 60, lng: 160 }, { lat: 62, lng: 165 }, { lat: 60, lng: 170 },
    { lat: 55, lng: 135 }, { lat: 50, lng: 130 }, { lat: 45, lng: 132 },
    { lat: 42, lng: 130 }, { lat: 38, lng: 127 }, { lat: 35, lng: 126 },
    { lat: 30, lng: 120 }, { lat: 28, lng: 115 }, { lat: 25, lng: 110 },
    { lat: 22, lng: 108 }, { lat: 18, lng: 105 }, { lat: 15, lng: 108 },
    { lat: 12, lng: 106 }, { lat: 10, lng: 103 }, { lat: 8, lng: 100 },
    { lat: 5, lng: 103 }, { lat: 2, lng: 102 }, { lat: 0, lng: 105 },
    { lat: -5, lng: 105 }, { lat: -8, lng: 115 }, { lat: -5, lng: 120 },
    { lat: -2, lng: 118 }, { lat: 0, lng: 115 }, { lat: 2, lng: 110 },
    { lat: 5, lng: 105 }, { lat: 8, lng: 100 }, { lat: 10, lng: 98 },
    { lat: 12, lng: 95 }, { lat: 15, lng: 92 }, { lat: 18, lng: 95 },
    { lat: 20, lng: 92 }, { lat: 22, lng: 88 }, { lat: 25, lng: 85 },
    { lat: 28, lng: 78 }, { lat: 30, lng: 75 }, { lat: 32, lng: 72 },
    { lat: 35, lng: 68 }, { lat: 38, lng: 65 }, { lat: 40, lng: 60 },
    { lat: 42, lng: 55 }, { lat: 42, lng: 50 }, { lat: 42, lng: 45 },
    { lat: 40, lng: 40 }, { lat: 40, lng: 35 }, { lat: 40, lng: 28 },
  ],
  [
    { lat: -15, lng: 125 }, { lat: -12, lng: 132 }, { lat: -12, lng: 138 },
    { lat: -15, lng: 142 }, { lat: -18, lng: 146 }, { lat: -22, lng: 150 },
    { lat: -26, lng: 152 }, { lat: -30, lng: 153 }, { lat: -33, lng: 152 },
    { lat: -35, lng: 150 }, { lat: -38, lng: 146 }, { lat: -38, lng: 142 },
    { lat: -36, lng: 138 }, { lat: -33, lng: 135 }, { lat: -30, lng: 130 },
    { lat: -28, lng: 125 }, { lat: -25, lng: 115 }, { lat: -22, lng: 114 },
    { lat: -20, lng: 115 }, { lat: -17, lng: 118 }, { lat: -15, lng: 125 },
  ],
]

function project(lat: number, lng: number, w: number, h: number) {
  return {
    x: ((lng + 180) / 360) * w,
    y: ((90 - lat) / 180) * h,
  }
}

function getQuadCurve(from: City, to: City, w: number, h: number): CurvePoints {
  const s = project(from.lat, from.lng, w, h)
  const e = project(to.lat, to.lng, w, h)
  const dx = e.x - s.x
  const dy = e.y - s.y
  const len = Math.sqrt(dx * dx + dy * dy)
  const nx = -dy / (len || 1)
  const ny = dx / (len || 1)
  const offset = len * 0.2
  return {
    sx: s.x, sy: s.y,
    mx: (s.x + e.x) / 2 + nx * offset,
    my: (s.y + e.y) / 2 + ny * offset,
    ex: e.x, ey: e.y,
  }
}

function quadLerp(t: number, c: CurvePoints) {
  const mt = 1 - t
  return {
    x: mt * mt * c.sx + 2 * mt * t * c.mx + t * t * c.ex,
    y: mt * mt * c.sy + 2 * mt * t * c.my + t * t * c.ey,
  }
}

export default function GlobalNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = window.innerWidth
    let h = window.innerHeight
    let curves: CurvePoints[] = []

    function computeCurves() {
      curves = ROUTES.map((r) => getQuadCurve(CITIES[r.from], CITIES[r.to], w, h))
    }

    function handleResize() {
      w = window.innerWidth
      h = window.innerHeight
      const dpr = window.devicePixelRatio || 1
      canvas!.width = w * dpr
      canvas!.height = h * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      computeCurves()
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    let rafId: number

    function render(time: number) {
      ctx!.clearRect(0, 0, w, h)

      ctx!.strokeStyle = '#f59e0b'
      ctx!.lineWidth = 0.8
      ctx!.globalAlpha = 0.25
      for (const pts of CONTINENTS) {
        if (pts.length < 2) continue
        const p0 = project(pts[0].lat, pts[0].lng, w, h)
        ctx!.beginPath()
        ctx!.moveTo(p0.x, p0.y)
        for (let i = 1; i < pts.length; i++) {
          const p = project(pts[i].lat, pts[i].lng, w, h)
          ctx!.lineTo(p.x, p.y)
        }
        ctx!.closePath()
        ctx!.stroke()
      }

      ctx!.strokeStyle = '#d97706'
      ctx!.lineWidth = 0.6
      ctx!.globalAlpha = 0.12
      for (const c of curves) {
        ctx!.beginPath()
        ctx!.moveTo(c.sx, c.sy)
        ctx!.quadraticCurveTo(c.mx, c.my, c.ex, c.ey)
        ctx!.stroke()
      }

      const t = time / 1000
      const speed = 0.15
      ctx!.globalAlpha = 1
      for (let i = 0; i < curves.length; i++) {
        const c = curves[i]
        const route = ROUTES[i]

        for (let p = 0; p < 2; p++) {
          const phase = route.phase + p * 0.5
          const pos = ((t * speed + phase) % 1)

          const pt = quadLerp(pos, c)

          ctx!.beginPath()
          const grad = ctx!.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, 6)
          grad.addColorStop(0, '#fbbf24')
          grad.addColorStop(0.5, '#f59e0b')
          grad.addColorStop(1, 'transparent')
          ctx!.fillStyle = grad
          ctx!.arc(pt.x, pt.y, 6, 0, Math.PI * 2)
          ctx!.fill()

          ctx!.beginPath()
          ctx!.fillStyle = '#fbbf24'
          ctx!.arc(pt.x, pt.y, 1.5, 0, Math.PI * 2)
          ctx!.fill()
        }
      }

      ctx!.globalAlpha = 1
      for (const city of CITIES) {
        const p = project(city.lat, city.lng, w, h)

        ctx!.beginPath()
        const grad = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, 8)
        grad.addColorStop(0, '#fbbf24')
        grad.addColorStop(0.4, '#f59e0b')
        grad.addColorStop(1, 'transparent')
        ctx!.fillStyle = grad
        ctx!.arc(p.x, p.y, 8, 0, Math.PI * 2)
        ctx!.fill()

        ctx!.beginPath()
        ctx!.fillStyle = '#f59e0b'
        ctx!.arc(p.x, p.y, 2.5, 0, Math.PI * 2)
        ctx!.fill()

        ctx!.beginPath()
        ctx!.fillStyle = '#fbbf24'
        ctx!.arc(p.x, p.y, 1, 0, Math.PI * 2)
        ctx!.fill()
      }

      rafId = requestAnimationFrame(render)
    }

    rafId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', handleResize)
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
