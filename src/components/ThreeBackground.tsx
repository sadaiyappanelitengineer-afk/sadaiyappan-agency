'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const count = 500

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (seededRandom(i * 42) - 0.5) * 40
    }
    return pos
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.1
    if (ref.current) {
      ref.current.rotation.y = Math.sin(t) * 0.05
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#f59e0b"
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }} dpr={[0.5, 1.5]} gl={{ antialias: false, powerPreference: 'low-power' }}>
        <ParticleField />
      </Canvas>
    </div>
  )
}
