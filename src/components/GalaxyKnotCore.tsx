'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function galaxyKnotPoint(t: number) {
  const R = 3
  const r = 1.4
  const p = 5
  const q = 3

  const theta = t * Math.PI * 2
  const phi = theta * p / q

  const x = (R + r * Math.cos(phi)) * Math.cos(theta)
  const z = (R + r * Math.cos(phi)) * Math.sin(theta)
  const y = r * Math.sin(phi)

  return new THREE.Vector3(x, y, z)
}

function KnotRibbon() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const matRef = useRef<THREE.MeshPhysicalMaterial>(null!)

  const { geometry } = useMemo(() => {
    const pts: THREE.Vector3[] = []
    const count = 300
    for (let i = 0; i <= count; i++) {
      pts.push(galaxyKnotPoint(i / count))
    }
    const curve = new THREE.CatmullRomCurve3(pts)
    const tube = new THREE.TubeGeometry(curve, 300, 0.04, 8, true)
    return { geometry: tube }
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(t * 0.08) * 0.15
    meshRef.current.rotation.y = t * 0.12

    if (matRef.current) {
      const pulse = 0.6 + 0.4 * Math.sin(t * 0.8)
      matRef.current.emissiveIntensity = 0.3 + 0.7 * pulse
      matRef.current.opacity = 0.7 + 0.3 * pulse
    }
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshPhysicalMaterial
        ref={matRef}
        color="#f0e6d3"
        emissive="#f0e6d3"
        emissiveIntensity={0.8}
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.9}
        clearcoat={0.3}
      />
    </mesh>
  )
}

function KnotGlow() {
  const meshRef = useRef<THREE.Mesh>(null!)

  const geometry = useMemo(() => {
    const pts: THREE.Vector3[] = []
    const count = 300
    for (let i = 0; i <= count; i++) {
      pts.push(galaxyKnotPoint(i / count))
    }
    const curve = new THREE.CatmullRomCurve3(pts)
    return new THREE.TubeGeometry(curve, 200, 0.15, 6, true)
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(t * 0.08) * 0.15
    meshRef.current.rotation.y = t * 0.12
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial
        color="#c8a84e"
        transparent
        opacity={0.06}
        side={THREE.BackSide}
      />
    </mesh>
  )
}

function CosmicParticles({ count = 800 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!)
  const sizesRef = useRef<Float32Array>(null!)

  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const siz = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const radius = 2 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.cos(phi)
      pos[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)

      const brightness = 0.4 + Math.random() * 0.6
      const tint = Math.random()
      if (tint < 0.6) {
        col[i * 3] = brightness
        col[i * 3 + 1] = brightness * 0.9
        col[i * 3 + 2] = brightness * 0.7
      } else if (tint < 0.8) {
        col[i * 3] = brightness * 0.7
        col[i * 3 + 1] = brightness * 0.8
        col[i * 3 + 2] = brightness
      } else {
        col[i * 3] = brightness
        col[i * 3 + 1] = brightness * 0.7
        col[i * 3 + 2] = brightness * 0.8
      }

      siz[i] = 0.02 + Math.random() * 0.06
    }

    sizesRef.current = siz
    return { positions: pos, colors: col, sizes: siz }
  }, [count])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = t * 0.015
      ref.current.rotation.x = Math.sin(t * 0.01) * 0.05
    }

    const sizeAttr = ref.current.geometry.attributes.size as THREE.BufferAttribute
    if (sizeAttr) {
      const arr = sizeAttr.array as Float32Array
      for (let i = 0; i < count; i++) {
        const twinkle = 0.4 + 0.6 * Math.sin(t * (0.5 + Math.random() * 1.5) + i * 1.7)
        arr[i] = (sizesRef.current?.[i] ?? 0.04) * twinkle
      }
      sizeAttr.needsUpdate = true
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function OrbitingRing() {
  const meshRef = useRef<THREE.Mesh>(null!)

  const geometry = useMemo(() => {
    const pts: THREE.Vector3[] = []
    const segments = 120
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2
      const r = 4.2
      pts.push(new THREE.Vector3(r * Math.cos(theta), 0, r * Math.sin(theta)))
    }
    const curve = new THREE.CatmullRomCurve3(pts)
    return new THREE.TubeGeometry(curve, 120, 0.008, 4, true)
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(t * 0.05) * 0.3
    meshRef.current.rotation.z = Math.cos(t * 0.06) * 0.2
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial color="#c8a84e" transparent opacity={0.2} />
    </mesh>
  )
}

function GalaxyScene() {
  return (
    <>
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.1} />
      <directionalLight position={[2, 3, 4]} intensity={0.3} color="#f0e6d3" />

      <KnotGlow />
      <KnotRibbon />
      <OrbitingRing />
      <CosmicParticles count={1200} />
    </>
  )
}

export default function GalaxyKnotCore() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0.5, 7.5], fov: 45 }}
        dpr={[0.5, 1.5]}
        gl={{ antialias: true, powerPreference: 'low-power' }}
      >
        <GalaxyScene />
      </Canvas>
    </div>
  )
}
