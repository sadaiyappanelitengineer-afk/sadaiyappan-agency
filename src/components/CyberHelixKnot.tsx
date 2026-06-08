'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const HELIX_COLORS = {
  strandA: '#00f0ff',
  strandB: '#a855f7',
  core: '#06f',
}

function helixKnotPoint(t: number, strandOffset: number, twist: number) {
  const R = 2.8
  const r = 1.2
  const p = 3
  const q = 2

  const theta = t * Math.PI * 2
  const phi = theta * p / q

  const x = (R + r * Math.cos(phi + strandOffset)) * Math.cos(theta)
  const z = (R + r * Math.cos(phi + strandOffset)) * Math.sin(theta)
  const y = r * Math.sin(phi + strandOffset)

  const helixOffset = 0.25
  const nx = x + helixOffset * Math.cos(theta + twist) * Math.cos(theta)
  const nz = z + helixOffset * Math.cos(theta + twist) * Math.sin(theta)
  const ny = y + helixOffset * Math.sin(theta + twist)

  return new THREE.Vector3(nx, ny, nz)
}

function HelixStrand({ strandOffset, color, twistSpeed }: { strandOffset: number; color: string; twistSpeed: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const pointsRef = useRef<THREE.Vector3[]>([])

  const { geometry, particlePositions } = useMemo(() => {
    const segments = 200
    const pts: THREE.Vector3[] = []
    for (let i = 0; i <= segments; i++) {
      const t = i / segments
      pts.push(helixKnotPoint(t, strandOffset, 0))
    }
    pointsRef.current = pts

    const curve = new THREE.CatmullRomCurve3(pts)
    const tubeGeo = new THREE.TubeGeometry(curve, 180, 0.06, 6, false)

    const particleCount = 120
    const posArray = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const t = i / particleCount
      const pt = helixKnotPoint(t, strandOffset, 0)
      posArray[i * 3] = pt.x
      posArray[i * 3 + 1] = pt.y
      posArray[i * 3 + 2] = pt.z
    }

    return { geometry: tubeGeo, particlePositions: posArray }
  }, [strandOffset])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const twist = time * twistSpeed

    const positions = geometry.attributes.position
    const posArray = positions.array as Float32Array
    const vertexCount = positions.count

    const segments = 180
    const radialSegments = 6

    for (let i = 0; i <= segments; i++) {
      const t = i / segments
      const base = helixKnotPoint(t, strandOffset, twist)

      for (let j = 0; j <= radialSegments; j++) {
        const idx = i * (radialSegments + 1) + j
        if (idx >= vertexCount) continue

        const angle = (j / radialSegments) * Math.PI * 2
        const radius = 0.06

        posArray[idx * 3] = base.x + radius * Math.cos(angle)
        posArray[idx * 3 + 1] = base.y + radius * Math.sin(angle)
        posArray[idx * 3 + 2] = base.z
      }
    }

    positions.needsUpdate = true
    geometry.computeVertexNormals()
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshPhysicalMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        metalness={1}
        roughness={0.2}
        transparent
        opacity={0.9}
        wireframe={false}
      />
    </mesh>
  )
}

function CoreGlow() {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.sin(t * 0.1) * 0.1
    ref.current.rotation.y = t * 0.05
  })

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1, 2]} />
      <meshPhysicalMaterial
        color="#06f"
        emissive="#06f"
        emissiveIntensity={0.3}
        transparent
        opacity={0.15}
        wireframe
      />
    </mesh>
  )
}

function Sparkles() {
  const count = 200
  const ref = useRef<THREE.Points>(null!)

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 3 + Math.random() * 2

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.cos(phi)
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)

      const c = new THREE.Color().setHSL(0.55 + Math.random() * 0.15, 1, 0.6)
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return { positions: pos, colors: col }
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.02
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function CyberHelixScene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#00f0ff" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#a855f7" />

      <HelixStrand strandOffset={0} color={HELIX_COLORS.strandA} twistSpeed={0.3} />
      <HelixStrand strandOffset={Math.PI} color={HELIX_COLORS.strandB} twistSpeed={0.3} />

      <CoreGlow />
      <Sparkles />
    </>
  )
}

export default function CyberHelixKnot() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[0.5, 1.5]}
        gl={{ antialias: true, powerPreference: 'low-power' }}
      >
        <CyberHelixScene />
      </Canvas>
    </div>
  )
}
