import React, { useEffect, useMemo, useRef, useState } from 'react'
import { extend, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { shaderMaterial, Plane, useTexture } from '@react-three/drei'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import { useControls } from 'leva'
import { useSpring } from '@react-spring/core'
import { animated } from '@react-spring/three'
import { getAspectRatio, images } from 'utils/images'

const defaultConfig = {
  uBumpStrength: 0.01,
  uBumpFrequency: 0.5,
}

const ImageShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uCurrentImage: null,
    uNextImage: null,
    uToNext: false,
    uDisp: null,
    uProg: 0,
    ...defaultConfig,
  },
  vertexShader,
  fragmentShader,
)
extend({ ImageShaderMaterial })
const AnimatedImageShaderMaterial = animated((props) => (
  <imageShaderMaterial {...props} />
))

const AnimatedPlane = animated(Plane)

type ImageProps = {
  index: number
  nextIndex: number
  direction?: 'next' | 'prev'
  baseSize?: number
  onRest: () => void
}

export default function Image({
  index,
  nextIndex,
  direction,
  baseSize = 4,
  onRest,
}: ImageProps) {
  const mesh = useRef<THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>>(
    null,
  )

  const textures = useTexture(images)
  const aspectRatio = textures[0].image ? getAspectRatio(textures[0].image) : 0

  const dispTexture = useTexture(require('images/disp-texture.png'))

  const { uBumpStrength, uBumpFrequency } = useControls(defaultConfig)

  const [isPlaying, setIsPlaying] = useState(true)
  const { bumpStrength } = useSpring({
    bumpStrength: isPlaying ? uBumpStrength : 0,
  })

  const { uProg } = useSpring({
    uProg: 0,
    onRest: () => {
      uProg.set(0)
      onRest()
    },
    config: {
      mass: 2,
      tension: 170,
      restVelocity: 0.1,
    },
  })

  useEffect(() => {
    if (index !== nextIndex) {
      uProg.start({ from: 0, to: 1 })
    }
  }, [index, nextIndex, uProg])

  useFrame(({ clock }) => {
    if (!mesh.current) {
      return
    }
    mesh.current.material.uniforms.uTime.value = clock.getElapsedTime()
  })

  return (
    <AnimatedPlane
      args={[baseSize * aspectRatio, baseSize, 32, 32]}
      ref={mesh}
      onPointerLeave={() => {
        if (index !== nextIndex) {
          return
        }
        setIsPlaying(true)
      }}
      onPointerMove={(event) => {
        if (index !== nextIndex) {
          return
        }
        setIsPlaying(false)
      }}
    >
      <AnimatedImageShaderMaterial
        uDisp={dispTexture}
        uCurrentImage={textures[index]}
        uNextImage={textures[nextIndex]}
        uProg={uProg}
        uToNext={direction === 'next'}
        uBumpStrength={bumpStrength}
        uBumpFrequency={uBumpFrequency}
      />
    </AnimatedPlane>
  )
}
