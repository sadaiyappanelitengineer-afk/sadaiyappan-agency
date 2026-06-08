'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ELITE_COLORS = [
  '#f5f0eb', '#f43f5e', '#a855f7', '#06b6d4',
  '#22c55e', '#eab308', '#f97316', '#ec4899',
]

function getEliteColor(t: number, speed: number) {
  const idx = Math.floor(t * speed) % ELITE_COLORS.length
  const nextIdx = (idx + 1) % ELITE_COLORS.length
  const frac = (t * speed) % 1
  return new THREE.Color(ELITE_COLORS[idx]).lerp(new THREE.Color(ELITE_COLORS[nextIdx]), frac)
}

function Gemstone() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const matRef = useRef<THREE.MeshPhysicalMaterial>(null!)

  const geometry = useMemo(() => {
    return new THREE.OctahedronGeometry(0.5, 0)
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2
    meshRef.current.rotation.y = t * 0.2

    if (matRef.current) {
      const col = getEliteColor(t, 0.12)
      matRef.current.color = col
      matRef.current.emissive = col
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.8)
      matRef.current.emissiveIntensity = 0.1 + 0.3 * pulse
    }
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshPhysicalMaterial
        ref={matRef}
        color="#f5f0eb"
        emissive="#c8a84e"
        emissiveIntensity={0.2}
        metalness={0.4}
        roughness={0.1}
        clearcoat={0.8}
        clearcoatRoughness={0.1}
        transparent
        opacity={0.95}
      />
    </mesh>
  )
}

function OrbitalRing({ radius, tiltX, tiltZ, speed, color, opacity, colorOffset }: { radius: number; tiltX: number; tiltZ: number; speed: number; color: string; opacity: number; colorOffset?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const matRef = useRef<THREE.MeshBasicMaterial>(null!)

  const geometry = useMemo(() => {
    const pts: THREE.Vector3[] = []
    const segs = 80
    for (let i = 0; i <= segs; i++) {
      const theta = (i / segs) * Math.PI * 2
      pts.push(new THREE.Vector3(radius * Math.cos(theta), 0, radius * Math.sin(theta)))
    }
    const curve = new THREE.CatmullRomCurve3(pts)
    return new THREE.TubeGeometry(curve, 80, 0.008, 4, true)
  }, [radius])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = tiltX + Math.sin(t * 0.1) * 0.05
    meshRef.current.rotation.z = tiltZ + Math.cos(t * 0.12) * 0.05
    meshRef.current.rotation.y = t * speed

    if (matRef.current) {
      const col = getEliteColor(t + (colorOffset ?? 0), 0.08)
      matRef.current.color = col
    }
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial ref={matRef} color={color} transparent opacity={opacity} />
    </mesh>
  )
}

function OrbitalParticles({ count = 60, radius, speed, colorOffset }: { count?: number; radius: number; speed: number; colorOffset?: number }) {
  const ref = useRef<THREE.Points>(null!)
  const matRef = useRef<THREE.PointsMaterial>(null!)

  const { positions, offsets } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const offs: number[] = []
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      pos[i * 3] = radius * Math.cos(angle)
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.1
      pos[i * 3 + 2] = radius * Math.sin(angle)
      offs.push(angle)
    }
    return { positions: pos, offsets: offs }
  }, [count, radius])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!ref.current) return
    const pos = ref.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      const angle = offsets[i] + t * speed
      pos[i * 3] = radius * Math.cos(angle)
      pos[i * 3 + 2] = radius * Math.sin(angle)
    }
    ref.current.geometry.attributes.position.needsUpdate = true

    if (matRef.current) {
      const col = getEliteColor(t + (colorOffset ?? 0), 0.08)
      matRef.current.color = col
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        ref={matRef}
        size={0.03}
        color="#c8a84e"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function FloatingParticles({ count = 100 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!)

  const { positions, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const spds: number[] = []
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 1 + Math.random() * 2.5
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.cos(phi)
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
      spds.push(0.2 + Math.random() * 0.5)
    }
    return { positions: pos, speeds: spds }
  }, [count])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!ref.current) return
    ref.current.rotation.y = t * 0.02

    const sizeAttr = ref.current.geometry.attributes.size as THREE.BufferAttribute
    if (sizeAttr) {
      const arr = sizeAttr.array as Float32Array
      for (let i = 0; i < count; i++) {
        arr[i] = (0.015 + 0.025 * Math.sin(t * speeds[i] + i * 1.7))
      }
      sizeAttr.needsUpdate = true
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[new Float32Array(count).fill(0.02), 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#f5f0eb"
        transparent
        opacity={0.3}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function GemScene({ seed }: { seed: number }) {
  const ref = useRef<THREE.Group>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = t * 0.03 + seed
    }
  })

  return (
    <group ref={ref}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[2, 3, 4]} intensity={0.5} color="#f5f0eb" />
      <directionalLight position={[-2, -1, -3]} intensity={0.2} color="#c8a84e" />

      <Gemstone />

      <OrbitalRing radius={0.9} tiltX={0.3} tiltZ={0.1} speed={0.15} color="#c8a84e" opacity={0.2} colorOffset={0} />
      <OrbitalRing radius={1.1} tiltX={-0.4} tiltZ={0.2} speed={-0.12} color="#f5f0eb" opacity={0.15} colorOffset={2} />
      <OrbitalRing radius={1.3} tiltX={0.2} tiltZ={-0.3} speed={0.1} color="#c8a84e" opacity={0.1} colorOffset={4} />

      <OrbitalParticles count={30} radius={0.9} speed={0.15} colorOffset={1} />
      <OrbitalParticles count={25} radius={1.1} speed={-0.12} colorOffset={3} />
      <OrbitalParticles count={20} radius={1.3} speed={0.1} colorOffset={5} />

      <FloatingParticles count={80} />
    </group>
  )
}

export default function EliteGemOrbit({ position = 'center' }: { position?: 'left' | 'right' | 'center' }) {
  const posClass = position === 'left'
    ? 'left-0 top-1/2 -translate-y-1/2'
    : position === 'right'
    ? 'right-0 top-1/2 -translate-y-1/2'
    : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'

  return (
    <div className={`fixed ${posClass} z-10 pointer-events-none w-[200px] h-[200px]`}>
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 35 }}
        dpr={[0.5, 1.5]}
        gl={{ antialias: true, powerPreference: 'low-power' }}
      >
        <GemScene seed={position === 'left' ? 0 : Math.PI} />
      </Canvas>
    </div>
  )
}
