import { useCallback, useEffect, useRef, useState } from 'react'

function useTimer(initialSeconds, onComplete) {
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds)
  const [isRunning, setIsRunning] = useState(false)
  const remainingRef = useRef(initialSeconds)
  const completionRef = useRef(onComplete)

  useEffect(() => {
    completionRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    if (!isRunning) return undefined

    const intervalId = window.setInterval(() => {
      const next = Math.max(remainingRef.current - 1, 0)
      remainingRef.current = next
      setRemainingSeconds(next)

      if (next === 0) {
        window.clearInterval(intervalId)
        setIsRunning(false)
        completionRef.current?.()
      }
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [isRunning])

  const start = useCallback(() => {
    if (remainingRef.current > 0) setIsRunning(true)
  }, [])

  const pause = useCallback(() => setIsRunning(false), [])

  const reset = useCallback((nextSeconds = initialSeconds) => {
    remainingRef.current = nextSeconds
    setRemainingSeconds(nextSeconds)
    setIsRunning(false)
  }, [initialSeconds])

  return { remainingSeconds, isRunning, start, pause, reset }
}

export default useTimer
