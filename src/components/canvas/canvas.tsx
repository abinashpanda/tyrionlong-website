import React, { useRef } from 'react'
import { Canvas as R3FCanvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

type CanvasProps = {
  children: React.ReactNode
}

export default function Canvas({ children }: CanvasProps) {
  const camera = useRef<THREE.PerspectiveCamera>(null)
  return (
    <R3FCanvas>
      <color attach="background" args={['#000']} />
      {children}
      <PerspectiveCamera makeDefault position={[0, 0, 5]} ref={camera} />
      <OrbitControls camera={camera.current} />
    </R3FCanvas>
  )
}
