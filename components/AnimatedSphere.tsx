"use client"

import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"

export const AnimatedSphere = () => {
  const sphereRef = useRef<any>(null)
  useEffect(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = 0
      sphereRef.current.rotation.y = 0
      sphereRef.current.rotation.z = 0
    }
  }, [])

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta * 0.1
      sphereRef.current.rotation.y += delta * 0.1
      sphereRef.current.rotation.z += delta * 0.1
    }
  })

  return (
    <Sphere args={[1, 32, 32]} ref={sphereRef}>
      <meshStandardMaterial color="yellow" />
    </Sphere>
  )
}

