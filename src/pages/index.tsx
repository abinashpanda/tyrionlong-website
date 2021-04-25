import React from 'react'
import dynamic from 'next/dynamic'
import { Leva } from 'leva'

const Carousel = dynamic(() => import('components/carousel'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="fixed top-0 left-0 right-0 z-20 flex items-center px-8 py-4 space-x-4">
        <img
          src="https://mir-s3-cdn-cf.behance.net/user/115/138e6363003133.5963a98d2b663.jpg"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="text-2xl text-white">Asim Khan</div>
          <div className="text-sm font-medium text-green-500">
            Visual & UI Designer
          </div>
        </div>
        <a href="https://www.instagram.com/tyrionlong" target="_blank">
          <img src={require('images/instagram.svg')} className="w-8 h-8" />
        </a>
        <a href="https://www.behance.net/asimkhan1797ae" target="_blank">
          <img src={require('images/behance.svg')} className="w-8 h-8" />
        </a>
      </div>
      <div className="fixed z-10 text-sm text-white transition-opacity ease-in opacity-25 bottom-1 right-1 hover:opacity-100 duration-1500">
        developed by{' '}
        <a
          href="https://github.com/abinashpanda"
          target="_blank"
          className="text-lg text-green-500"
        >
          @abinashpanda
        </a>
      </div>
      <Carousel />
      <Leva hidden />
    </div>
  )
}
