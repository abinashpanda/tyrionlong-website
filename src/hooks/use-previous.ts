import { useRef, useEffect } from 'react'

export function usePrevious<T extends any>(value: T, defaultValue?: T) {
  const prev = useRef<T>(defaultValue ?? value)

  useEffect(() => {
    prev.current = value
  }, [value])

  return prev.current
}
