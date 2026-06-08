'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TorusKnot, Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function CosmicTorusKnot({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const glowRef = useRef<THREE.Mesh>(null!)
  const materialRef = useRef<any>(null!)
  const glowMatRef = useRef<THREE.MeshBasicMaterial>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003
      meshRef.current.rotation.y += 0.005
      meshRef.current.position.x += (mouse.current.x * 0.3 - meshRef.current.position.x) * 0.015
      meshRef.current.position.y += (-mouse.current.y * 0.2 - meshRef.current.position.y) * 0.015
    }
    if (glowRef.current && meshRef.current) {
      glowRef.current.rotation.x = meshRef.current.rotation.x * 0.5
      glowRef.current.rotation.y = meshRef.current.rotation.y * 0.5
      glowRef.current.position.x = meshRef.current.position.x
      glowRef.current.position.y = meshRef.current.position.y
    }
    if (materialRef.current) {
      const hue = (t * 0.08) % 1
      const color = new THREE.Color().setHSL(hue, 1, 0.5)
      materialRef.current.emissive = color
      materialRef.current.color = color
    }
    if (glowMatRef.current) {
      glowMatRef.current.color.setHSL((t * 0.06 + 0.3) % 1, 0.8, 0.5)
    }
  })

  return (
    <group>
      <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.4}>
        <TorusKnot ref={meshRef} args={[0.2, 0.07, 300, 32]} scale={1}>
          <MeshDistortMaterial
            ref={materialRef}
            color="#f59e0b"
            emissive="#f59e0b"
            emissiveIntensity={1.5}
            roughness={0.15}
            metalness={0.95}
            clearcoat={1}
            clearcoatRoughness={0.05}
            distort={0.2}
            speed={3}
          />
        </TorusKnot>
      </Float>
      <TorusKnot ref={glowRef} args={[0.25, 0.09, 100, 12]} scale={1}>
        <meshBasicMaterial
          ref={glowMatRef}
          color="#fbbf24"
          transparent
          opacity={0.15}
          wireframe
        />
      </TorusKnot>
    </group>
  )
}

function NeonCore() {
  const ref = useRef<THREE.Mesh>(null!)
  const matRef = useRef<THREE.MeshBasicMaterial>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.scale.setScalar(1 + 0.2 * Math.sin(t * 1.5))
    }
    if (matRef.current) {
      matRef.current.color.setHSL((t * 0.1) % 1, 1, 0.6)
    }
  })

  return (
    <Sphere ref={ref} args={[0.05, 16, 16]}>
      <meshBasicMaterial ref={matRef} color="#fbbf24" transparent opacity={0.6} />
    </Sphere>
  )
}

function ParticleSystem({ count = 1500, mouse }: { count?: number; mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const ref = useRef<THREE.Points>(null!)

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 0.8 + Math.random() * 1.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.cos(phi)
      pos[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)
      const c = new THREE.Color().setHSL(Math.random(), 1, 0.5)
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return [pos, col]
  }, [count])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = t * 0.05
      ref.current.rotation.x = Math.sin(t * 0.04) * 0.08
      ref.current.position.x += (mouse.current.x * 0.2 - ref.current.position.x) * 0.01
      ref.current.position.y += (-mouse.current.y * 0.15 - ref.current.position.y) * 0.01
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        transparent
        opacity={0.5}
        sizeAttenuation
        vertexColors
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function NeonRings() {
  const groupRef = useRef<THREE.Group>(null!)
  const matRefs = useRef<THREE.MeshBasicMaterial[]>([])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.08
      groupRef.current.rotation.x = Math.sin(t * 0.04) * 0.08
    }
    matRefs.current.forEach((mat, i) => {
      if (mat) mat.color.setHSL((t * 0.05 + i * 0.33) % 1, 0.8, 0.5)
    })
  })

  const rings = useMemo(() => {
      return [
      { radius: 0.3, opacity: 0.1 },
      { radius: 0.4, opacity: 0.07 },
      { radius: 0.5, opacity: 0.05 },
      { radius: 0.6, opacity: 0.03 },
    ]
  }, [])

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh key={i} rotation-x={Math.PI / 2 + i * 0.2}>
          <ringGeometry args={[ring.radius - 0.015, ring.radius + 0.015, 128]} />
          <meshBasicMaterial
            ref={(el) => { matRefs.current[i] = el! }}
            color="#f59e0b"
            transparent
            opacity={ring.opacity}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  )
}

function Lighting() {
  const dirRef1 = useRef<THREE.DirectionalLight>(null!)
  const dirRef2 = useRef<THREE.DirectionalLight>(null!)
  const pointRef1 = useRef<THREE.PointLight>(null!)
  const pointRef2 = useRef<THREE.PointLight>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (dirRef1.current) dirRef1.current.color.setHSL((t * 0.03) % 1, 1, 0.5)
    if (dirRef2.current) dirRef2.current.color.setHSL((t * 0.03 + 0.5) % 1, 1, 0.5)
    if (pointRef1.current) pointRef1.current.color.setHSL((t * 0.04 + 0.2) % 1, 1, 0.5)
    if (pointRef2.current) pointRef2.current.color.setHSL((t * 0.04 + 0.7) % 1, 1, 0.5)
  })

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight ref={dirRef1} position={[5, 5, 5]} intensity={1.5} color="#f59e0b" />
      <directionalLight ref={dirRef2} position={[-5, -3, -5]} intensity={0.8} color="#d97706" />
      <pointLight ref={pointRef1} position={[0, 2, 4]} intensity={2.5} color="#fbbf24" distance={20} decay={2} />
      <pointLight ref={pointRef2} position={[0, -2, -4]} intensity={2} color="#f59e0b" distance={20} decay={2} />
    </>
  )
}

function Scene({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  return (
    <>
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 1.5, 5]} />
      <Lighting />
      <CosmicTorusKnot mouse={mouse} />
      <NeonCore />
      <NeonRings />
      <ParticleSystem count={1500} mouse={mouse} />
    </>
  )
}

export default function QuantumCore() {
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 40 }}
        dpr={[0.5, 1.5]}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: false,
          stencil: false,
          depth: true,
        }}
      >
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  )
}
