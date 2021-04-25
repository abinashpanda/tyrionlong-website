import React from 'react'
import { Canvas } from '@react-three/fiber'

const images = [
  require('../images/sap-1.png'),
  require('../images/sap-2.png'),
  require('../images/crypto.png'),
  require('../images/prodios-1.png'),
  require('../images/lms-1.png'),
  require('../images/indshine-1.png'),
  require('../images/indshine-2.png'),
  require('../images/somras.png'),
  require('../images/bocs-1.png'),
  require('../images/bocs-2.png'),
  require('../images/prodios-2.png'),
  require('../images/prodios-3.png'),
  require('../images/prodios-4.png'),
  require('../images/prodios-5.png'),
  require('../images/prodios-6.png'),
  require('../images/prodios-7.png'),
  require('../images/prodios-8.png'),
  require('../images/sap-3.png'),
]

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <color attach="background" args={['#000']} />
      </Canvas>
      <div className="fixed text-sm text-white bottom-1 right-1">
        developed by @abinashpanda
      </div>
    </div>
  )
}
