'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Crystal() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const matRef = useRef<THREE.MeshPhysicalMaterial>(null!)

  const geometry = useMemo(() => {
    const geo = new THREE.OctahedronGeometry(1.2, 0)
    const pos = geo.attributes.position
    const vertex = new THREE.Vector3()
    const verts: THREE.Vector3[] = []
    for (let i = 0; i < pos.count; i++) {
      vertex.fromBufferAttribute(pos, i)
      verts.push(vertex.clone().normalize().multiplyScalar(1.2 + Math.random() * 0.15))
    }
    const newPos = new Float32Array(verts.length * 3)
    verts.forEach((v, i) => {
      newPos[i * 3] = v.x
      newPos[i * 3 + 1] = v.y
      newPos[i * 3 + 2] = v.z
    })
    geo.setAttribute('position', new THREE.BufferAttribute(newPos, 3))
    geo.computeVertexNormals()
    return geo
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.3
    meshRef.current.rotation.y = t * 0.15
    meshRef.current.position.y = Math.sin(t * 0.4) * 0.15

    if (matRef.current) {
      const pulse = 0.7 + 0.3 * Math.sin(t * 0.6)
      matRef.current.emissiveIntensity = 0.1 * pulse
    }
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshPhysicalMaterial
        ref={matRef}
        color="#f5f0eb"
        emissive="#ffffff"
        emissiveIntensity={0.1}
        metalness={0.3}
        roughness={0.05}
        transparent
        opacity={0.92}
        clearcoat={1}
        clearcoatRoughness={0.1}
        reflectivity={1}
        envMapIntensity={1.5}
        ior={2.5}
      />
    </mesh>
  )
}

function InnerGem() {
  const meshRef = useRef<THREE.Mesh>(null!)

  const geometry = useMemo(() => {
    return new THREE.OctahedronGeometry(0.6, 0)
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = -Math.sin(t * 0.25) * 0.4
    meshRef.current.rotation.y = -t * 0.2
    meshRef.current.position.y = Math.sin(t * 0.4) * 0.15
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshPhysicalMaterial
        color="#d4c5b0"
        emissive="#c8a84e"
        emissiveIntensity={0.15}
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.4}
        wireframe
      />
    </mesh>
  )
}

function GlowRing() {
  const meshRef = useRef<THREE.Mesh>(null!)

  const geometry = useMemo(() => {
    const shape = new THREE.RingGeometry(1.8, 2.2, 64)
    return shape
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.2
    meshRef.current.rotation.y = t * 0.08
    meshRef.current.position.y = Math.sin(t * 0.4) * 0.15
    meshRef.current.scale.setScalar(1 + 0.05 * Math.sin(t * 0.5))
  })

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]}>
      <meshBasicMaterial
        color="#c8a84e"
        transparent
        opacity={0.15}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  )
}

function GlowRing2() {
  const meshRef = useRef<THREE.Mesh>(null!)

  const geometry = useMemo(() => {
    return new THREE.RingGeometry(2.4, 2.5, 64)
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.cos(t * 0.15) * 0.3
    meshRef.current.rotation.z = t * 0.06
    meshRef.current.position.y = Math.sin(t * 0.4) * 0.15
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={0.06}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  )
}

function AmbientParticles({ count = 150 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!)
  const speedsRef = useRef<number[]>([])

  const { positions, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const siz = new Float32Array(count)
    const spds: number[] = []
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.5 + Math.random() * 3
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.cos(phi)
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
      siz[i] = 0.01 + Math.random() * 0.03
      spds.push(0.2 + Math.random() * 0.8)
    }
    speedsRef.current = spds
    return { positions: pos, sizes: siz }
  }, [count])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = t * 0.01
    }
    const sizeAttr = ref.current.geometry.attributes.size as THREE.BufferAttribute
    const arr = sizeAttr.array as Float32Array
    for (let i = 0; i < count; i++) {
      const twinkle = 0.3 + 0.7 * Math.sin(t * speedsRef.current[i] + i * 2.3)
      arr[i] = (sizes[i] ?? 0.02) * twinkle
    }
    sizeAttr.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#c8a84e"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function CrystalScene() {
  return (
    <>
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 4, 5]} intensity={0.8} color="#f5f0eb" />
      <directionalLight position={[-3, -2, -4]} intensity={0.3} color="#c8a84e" />
      <pointLight position={[0, 2, 3]} intensity={0.5} color="#ffffff" />

      <GlowRing />
      <GlowRing2 />
      <Crystal />
      <InnerGem />
      <AmbientParticles />
    </>
  )
}

export default function FloatingCrystalGem() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        dpr={[0.5, 1.5]}
        gl={{ antialias: true, powerPreference: 'low-power', toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
      >
        <CrystalScene />
      </Canvas>
    </div>
  )
}
