import React, { Suspense, useReducer } from 'react'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import Canvas from 'components/canvas'
import Image from 'components/image'
import { ActionType, initialState, reducer } from './reducer'

export default function Carousel() {
  const [{ index, nextIndex, direction }, dispatch] = useReducer(
    reducer,
    initialState,
  )

  return (
    <>
      <button
        className="fixed z-10 flex items-center justify-center w-48 h-48 space-x-4 text-4xl text-white transition-transform duration-150 ease-in origin-right transform scale-50 -translate-y-1/2 bg-gray-500 rounded-full bg-opacity-30 top-1/2 right-4 hover:scale-100 opacity-30 hover:opacity-100 focus:outline-none font-display "
        onClick={() => {
          dispatch({
            type: ActionType.NEXT,
          })
        }}
      >
        <span>Next</span>
        <HiChevronDoubleRight size={40} />
      </button>
      <button
        className="fixed z-10 flex items-center justify-center w-48 h-48 space-x-4 text-4xl text-white transition-transform duration-150 ease-in origin-left transform scale-50 -translate-y-1/2 bg-gray-500 rounded-full bg-opacity-30 top-1/2 left-4 hover:scale-100 opacity-30 hover:opacity-100 focus:outline-none font-display "
        onClick={() => {
          dispatch({
            type: ActionType.PREV,
          })
        }}
      >
        <HiChevronDoubleLeft size={40} />
        <span>Prev</span>
      </button>
      <Canvas>
        <Suspense fallback={null}>
          <Image
            index={index}
            nextIndex={nextIndex}
            direction={direction}
            onRest={() => {
              dispatch({ type: ActionType.UPDATE })
            }}
            baseSize={3.5}
          />
        </Suspense>
      </Canvas>
    </>
  )
}
