import { useCallback, useEffect, useRef, useState } from 'react'

function useAlarm() {
  const [isPlaying, setIsPlaying] = useState(false)
  const contextRef = useRef(null)
  const intervalRef = useRef(null)

  const prepareAlarm = useCallback(() => {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    if (!AudioContextClass) return

    if (!contextRef.current) contextRef.current = new AudioContextClass()
    if (contextRef.current.state === 'suspended') {
      contextRef.current.resume()
    }
  }, [])

  const playTone = useCallback(() => {
    const context = contextRef.current
    if (!context || context.state !== 'running') return

    const oscillator = context.createOscillator()
    const gain = context.createGain()
    oscillator.type = 'sine'
    oscillator.frequency.value = 880
    gain.gain.setValueAtTime(0.0001, context.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.16, context.currentTime + 0.03)
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.42)
    oscillator.connect(gain)
    gain.connect(context.destination)
    oscillator.start()
    oscillator.stop(context.currentTime + 0.44)
  }, [])

  const stopAlarm = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIsPlaying(false)
  }, [])

  const playAlarm = useCallback(() => {
    stopAlarm()
    setIsPlaying(true)
    playTone()
    intervalRef.current = window.setInterval(playTone, 900)
    if (navigator.vibrate) navigator.vibrate([180, 90, 180])
  }, [playTone, stopAlarm])

  useEffect(() => () => {
    if (intervalRef.current !== null) window.clearInterval(intervalRef.current)
    if (contextRef.current) contextRef.current.close()
  }, [])

  return { playAlarm, stopAlarm, prepareAlarm, isPlaying }
}

export default useAlarm
