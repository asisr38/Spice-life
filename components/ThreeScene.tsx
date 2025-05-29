'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text3D, Center } from '@react-three/drei'
import * as THREE from 'three'

// Animated Sautéing Pan Component
function SauteingPan() {
  const panRef = useRef<THREE.Group>(null)
  const handleRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (panRef.current) {
      // Sautéing motion - gentle shake and tilt
      panRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 4) * 0.1
      panRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 3) * 0.05
      panRef.current.position.y = 0.7 + Math.sin(state.clock.elapsedTime * 6) * 0.02
    }
  })

  return (
    <group ref={panRef} position={[0, 0.7, 0]}>
      {/* Pan Base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 0.9, 0.2, 32]} />
        <meshStandardMaterial 
          color="#2c2c2c" 
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      
      {/* Pan Handle */}
      <mesh ref={handleRef} position={[1.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.08, 0.6, 16]} />
        <meshStandardMaterial 
          color="#8B4513" 
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
      
      {/* Cooking Content - colorful spices/vegetables */}
      <mesh position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
        <meshStandardMaterial 
          color="#F28C28" 
          roughness={0.5}
          metalness={0.2}
        />
      </mesh>
      
      {/* Small spice particles */}
      {[...Array(8)].map((_, i) => (
        <mesh 
          key={i}
          position={[
            (Math.cos(i * Math.PI / 4) * 0.6), 
            0.15 + Math.sin(Date.now() * 0.001 + i) * 0.05, 
            (Math.sin(i * Math.PI / 4) * 0.6)
          ]}
        >
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#DC2626" : "#F59E0B"} 
            roughness={0.8}
          />
        </mesh>
      ))}
    </group>
  )
}

// Stove Component
function Stove() {
  const flameRefs = useRef<THREE.Mesh[]>([])
  const burnerGlowRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    // Animate flames
    flameRefs.current.forEach((flame, i) => {
      if (flame) {
        const time = state.clock.elapsedTime
        flame.scale.y = 0.8 + Math.sin(time * 8 + i * 0.5) * 0.3
        flame.scale.x = 0.9 + Math.sin(time * 6 + i * 0.7) * 0.2
        flame.rotation.z = Math.sin(time * 4 + i) * 0.1
        
        // Animate flame material
        const material = flame.material as THREE.MeshStandardMaterial
        material.emissiveIntensity = 0.8 + Math.sin(time * 10 + i) * 0.3
      }
    })

    // Animate burner glow
    if (burnerGlowRef.current) {
      const material = burnerGlowRef.current.material as THREE.MeshStandardMaterial
      const intensity = 0.4 + Math.sin(state.clock.elapsedTime * 3) * 0.2
      material.emissiveIntensity = intensity
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Stove Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.8, 2]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
      
      {/* Stove Top */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[3.2, 0.1, 2.2]} />
        <meshStandardMaterial 
          color="#2c2c2c" 
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      
      {/* Burner Base (Black) */}
      <mesh position={[0, 0.56, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.03, 32]} />
        <meshStandardMaterial 
          color="#111111" 
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
      
      {/* Burner Glow Ring */}
      <mesh ref={burnerGlowRef} position={[0, 0.57, 0]}>
        <torusGeometry args={[0.5, 0.05, 8, 32]} />
        <meshStandardMaterial 
          color="#FF6B35" 
          emissive="#FF6B35"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      
      {/* Horizontal Burner Grates (Cross Pattern) */}
      {/* Main cross supports */}
      <mesh position={[0, 0.58, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1.2, 0.03, 0.03]} />
        <meshStandardMaterial 
          color="#333" 
          roughness={0.6}
          metalness={0.4}
        />
      </mesh>
      <mesh position={[0, 0.58, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[1.2, 0.03, 0.03]} />
        <meshStandardMaterial 
          color="#333" 
          roughness={0.6}
          metalness={0.4}
        />
      </mesh>
      
      {/* Diagonal supports */}
      <mesh position={[0, 0.58, 0]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[1.0, 0.03, 0.03]} />
        <meshStandardMaterial 
          color="#333" 
          roughness={0.6}
          metalness={0.4}
        />
      </mesh>
      <mesh position={[0, 0.58, 0]} rotation={[0, -Math.PI / 4, 0]}>
        <boxGeometry args={[1.0, 0.03, 0.03]} />
        <meshStandardMaterial 
          color="#333" 
          roughness={0.6}
          metalness={0.4}
        />
      </mesh>
      
      {/* Outer circular support ring */}
      <mesh position={[0, 0.58, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.02, 6, 24]} />
        <meshStandardMaterial 
          color="#333" 
          roughness={0.6}
          metalness={0.4}
        />
      </mesh>
      
      {/* Gas Flames */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 0.4
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        
        return (
          <mesh 
            key={i}
            ref={(el) => {
              if (el) flameRefs.current[i] = el
            }}
            position={[x, 0.62, z]}
            rotation={[0, angle, 0]}
          >
            <coneGeometry args={[0.03, 0.15, 6]} />
            <meshStandardMaterial 
              color="#00BFFF"
              emissive="#00BFFF"
              emissiveIntensity={0.8}
              transparent={true}
              opacity={0.8}
              roughness={0.1}
            />
          </mesh>
        )
      })}
      
      {/* Inner Orange Flames */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 0.35
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        
        return (
          <mesh 
            key={`inner-${i}`}
            ref={(el) => {
              if (el) flameRefs.current[i + 8] = el
            }}
            position={[x, 0.64, z]}
            rotation={[0, angle, 0]}
          >
            <coneGeometry args={[0.02, 0.1, 6]} />
            <meshStandardMaterial 
              color="#FF4500"
              emissive="#FF4500"
              emissiveIntensity={1.0}
              transparent={true}
              opacity={0.9}
              roughness={0.1}
            />
          </mesh>
        )
      })}
      
      {/* Control Knobs */}
      {[-0.8, 0.8].map((x, i) => (
        <group key={i} position={[x, 0.2, -0.9]}>
          <mesh>
            <cylinderGeometry args={[0.08, 0.08, 0.1, 16]} />
            <meshStandardMaterial 
              color="#666" 
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>
          {/* Knob indicator */}
          <mesh position={[0, 0.06, 0.06]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.01, 0.01, 0.02, 8]} />
            <meshStandardMaterial 
              color="#FF4500" 
              emissive="#FF4500"
              emissiveIntensity={0.5}
            />
          </mesh>
        </group>
      ))}
    </group>
  )
}

// 3D Text Component
function SpiceLifeText() {
  const textRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (textRef.current) {
      // Subtle floating animation
      textRef.current.position.y = 3.5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Center top>
      <Text3D
        ref={textRef}
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.4}
        height={0.08}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[0, 3.5, 0]}
      >
        Spice Life
        <meshStandardMaterial 
          color="#F28C28" 
          roughness={0.3}
          metalness={0.7}
        />
      </Text3D>
    </Center>
  )
}

// Floating Samosa Component
function FloatingSamosa() {
  const samosaRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (samosaRef.current) {
      // Floating motion in a figure-8 pattern
      const time = state.clock.elapsedTime * 0.5
      samosaRef.current.position.x = Math.sin(time) * 2
      samosaRef.current.position.y = 2.5 + Math.sin(time * 2) * 0.5
      samosaRef.current.position.z = Math.cos(time * 0.7) * 1.5
      
      // Gentle rotation
      samosaRef.current.rotation.x += 0.01
      samosaRef.current.rotation.y += 0.015
      samosaRef.current.rotation.z += 0.008
    }
  })

  return (
    <mesh ref={samosaRef} position={[2, 2.5, 1]}>
      {/* Samosa shape - triangular pyramid */}
      <coneGeometry args={[0.15, 0.25, 3]} />
      <meshStandardMaterial 
        color="#D2691E" // Golden brown samosa color
        roughness={0.7}
        metalness={0.1}
      />
    </mesh>
  )
}

// Steam/Smoke Particles
function SteamParticles() {
  const particlesRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle, i) => {
        const mesh = particle as THREE.Mesh
        if (mesh.isMesh) {
          mesh.position.y += 0.02
          mesh.position.x += Math.sin(state.clock.elapsedTime + i) * 0.01
          mesh.position.z += Math.cos(state.clock.elapsedTime + i) * 0.01
          
          const material = mesh.material as THREE.MeshStandardMaterial
          material.opacity = Math.max(0, 1 - (mesh.position.y - 0.8) / 3)
          
          if (mesh.position.y > 4) {
            mesh.position.y = 0.8 // Start from pan level
            mesh.position.x = (Math.random() - 0.5) * 0.6 // Smaller spread to stay within pan
            mesh.position.z = (Math.random() - 0.5) * 0.6
          }
        }
      })
    }
  })

  return (
    <group ref={particlesRef}>
      {[...Array(12)].map((_, i) => (
        <mesh 
          key={i}
          position={[
            (Math.random() - 0.5) * 0.6, // Smaller spread to stay within pan area
            0.8, // Start from pan level (0.7 + 0.1 for pan rim)
            (Math.random() - 0.5) * 0.6
          ]}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial 
            color="white" 
            transparent
            opacity={0.6}
            roughness={1}
          />
        </mesh>
      ))}
    </group>
  )
}

// Loading fallback
function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-primary text-lg font-medium">Loading Kitchen Scene...</div>
    </div>
  )
}

// Main Scene Component
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[5, 10, 5]} 
        intensity={1.0}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[0, 3, 2]} intensity={0.8} color="#F28C28" />
      <pointLight position={[0, 1, 0]} intensity={0.5} color="#FF4500" />
      
      {/* 3D Content */}
      <Suspense fallback={null}>
        <SpiceLifeText />
        <Stove />
        <SauteingPan />
        <FloatingSamosa />
        <SteamParticles />
      </Suspense>
      
      {/* Controls */}
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 1.5}
        minDistance={4}
        maxDistance={12}
        target={[0, 1, 0]}
      />
    </>
  )
}

// Main Component Export
export default function ThreeScene() {
  return (
    <div className="w-full h-[600px] bg-gradient-to-br from-background to-muted rounded-lg overflow-hidden shadow-xl">
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ 
            position: [3, 3, 6], 
            fov: 75,
            near: 0.1,
            far: 1000
          }}
          shadows
          gl={{ 
            antialias: true,
            alpha: true 
          }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
} 