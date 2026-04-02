import { useEffect, useRef, useState } from "react"
import { SRGBColorSpace, TextureLoader, Vector2 } from "three"
import type { Group } from "three"
import type { Texture } from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Sparkles, Stars } from "@react-three/drei"

function useMoonTextures() {
  const [textures, setTextures] = useState<{ albedo: Texture; normal: Texture } | null>(null)

  useEffect(() => {
    let mounted = true
    const loader = new TextureLoader()
    const albedoPath = `${import.meta.env.BASE_URL}textures/moon_albedo_2k.jpg`
    const normalPath = `${import.meta.env.BASE_URL}textures/moon_normal_2k.jpg`

    loader.load(
      albedoPath,
      (albedo) => {
        loader.load(
          normalPath,
          (normal) => {
            if (!mounted) return
            albedo.colorSpace = SRGBColorSpace
            setTextures({ albedo, normal })
          },
          undefined,
          () => {
            if (mounted) setTextures(null)
          }
        )
      },
      undefined,
      () => {
        if (mounted) setTextures(null)
      }
    )

    return () => {
      mounted = false
    }
  }, [])

  return textures
}

function SceneMeshes() {
  const groupRef = useRef<Group | null>(null)
  const satelliteRef = useRef<Group | null>(null)
  const moonTextures = useMoonTextures()

  useFrame((state, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.06
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.08
    groupRef.current.position.x += (state.mouse.x * 0.35 - groupRef.current.position.x) * 0.04
    groupRef.current.position.y += (state.mouse.y * 0.2 - groupRef.current.position.y) * 0.04

    if (!satelliteRef.current) return
    const t = state.clock.elapsedTime * 0.55
    satelliteRef.current.position.x = Math.cos(t) * 2.2
    satelliteRef.current.position.y = Math.sin(t) * 0.7
    satelliteRef.current.position.z = Math.sin(t * 1.1) * 0.9
  })

  return (
    <group ref={groupRef}>
      <Float speed={0.8} rotationIntensity={0.18} floatIntensity={0.5}>
        <mesh position={[0.2, 0.1, 0.1]}>
          <sphereGeometry args={[1.35, 96, 96]} />
          <meshStandardMaterial
            color="#f8fafc"
            map={moonTextures?.albedo}
            normalMap={moonTextures?.normal}
            normalScale={moonTextures ? new Vector2(0.95, 0.95) : new Vector2(0, 0)}
            roughness={0.98}
            metalness={0}
            emissive="#94a3b8"
            emissiveIntensity={0.02}
          />
        </mesh>
      </Float>

      <mesh position={[0.2, 0.1, -0.65]}>
        <sphereGeometry args={[1.95, 64, 64]} />
        <meshBasicMaterial color="#93c5fd" transparent opacity={0.09} />
      </mesh>

      <mesh position={[0.2, 0.1, -1.4]} rotation={[0.52, 0.25, 0]}>
        <torusGeometry args={[2.25, 0.03, 16, 220]} />
        <meshStandardMaterial color="#f5d46b" emissive="#facc15" emissiveIntensity={0.18} transparent opacity={0.18} />
      </mesh>

      <group ref={satelliteRef}>
        <mesh>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#93c5fd" emissive="#60a5fa" emissiveIntensity={0.55} />
        </mesh>
      </group>
    </group>
  )
}

export function HeroThreeScene() {
  return (
    <div className="hero-three-layer" aria-hidden>
      <Canvas camera={{ position: [0, 0, 5.8], fov: 48 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.12} />
        <directionalLight position={[3, 2.6, 4.2]} intensity={2.6} color="#f8fafc" />
        <pointLight position={[-2.4, -1.2, 3]} intensity={0.8} color="#60a5fa" />
        <pointLight position={[2.4, 1.4, 0.8]} intensity={0.5} color="#facc15" />
        <Stars radius={120} depth={40} count={2200} factor={4} saturation={0} speed={0.35} />
        <SceneMeshes />
        <Sparkles count={64} size={1.8} speed={0.12} color="#f8fafc" scale={[12, 6, 4]} />
      </Canvas>
    </div>
  )
}
