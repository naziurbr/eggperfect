import { useCallback, useMemo, useState } from 'react'
import CookingInstructions from './components/CookingInstructions.jsx'
import CookingMethodSelector from './components/CookingMethodSelector.jsx'
import CookingTimer from './components/CookingTimer.jsx'
import EggSelector from './components/EggSelector.jsx'
import EggSizeSelector from './components/EggSizeSelector.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import StepHeading from './components/StepHeading.jsx'
import TimerControls from './components/TimerControls.jsx'
import { cookingMethods, eggSizes, getCookingTime } from './data/cookingTimes.js'
import useAlarm from './hooks/useAlarm.js'
import useTimer from './hooks/useTimer.js'

function App() {
  const [method, setMethod] = useState(cookingMethods[1].id)
  const [size, setSize] = useState(eggSizes[1].id)
  const [eggCount, setEggCount] = useState(2)
  const duration = useMemo(() => getCookingTime(method, size), [method, size])
  const { playAlarm, stopAlarm, prepareAlarm, isPlaying } = useAlarm()
  const { remainingSeconds, isRunning, start, pause, reset } = useTimer(duration, playAlarm)

  const handleStart = useCallback(() => {
    stopAlarm()
    prepareAlarm()
    start()
  }, [prepareAlarm, start, stopAlarm])

  const handleMethodChange = useCallback((nextMethod) => {
    stopAlarm()
    reset(getCookingTime(nextMethod, size))
    setMethod(nextMethod)
  }, [reset, size, stopAlarm])

  const handleSizeChange = useCallback((nextSize) => {
    stopAlarm()
    reset(getCookingTime(method, nextSize))
    setSize(nextSize)
  }, [method, reset, stopAlarm])

  const handleReset = useCallback(() => {
    stopAlarm()
    reset()
  }, [reset, stopAlarm])

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />

        <section className="planner" aria-label="Egg cooking timer">
          <div className="planner__settings">
            <StepHeading
              number="01"
              title="Make it yours"
              description="Pick your eggs and the kind of yolk you love."
            />
            <EggSelector value={eggCount} onChange={setEggCount} />
            <EggSizeSelector value={size} onChange={handleSizeChange} />
            <CookingMethodSelector value={method} onChange={handleMethodChange} />
          </div>

          <div className="planner__timer">
            <CookingTimer
              method={method}
              size={size}
              eggCount={eggCount}
              remainingSeconds={remainingSeconds}
              totalSeconds={duration}
              isRunning={isRunning}
              isAlarmPlaying={isPlaying}
            />
            <TimerControls
              isRunning={isRunning}
              onStart={handleStart}
              onPause={pause}
              onReset={handleReset}
              onStopAlarm={stopAlarm}
              isAlarmPlaying={isPlaying}
            />
            <p className="timer-note">
              {isRunning
                ? 'Your timer is running. We’ll let you know when it’s ready.'
                : 'Set your eggs in gently once the water is boiling.'}
            </p>
          </div>
        </section>

        <CookingInstructions method={method} size={size} eggCount={eggCount} />
      </main>
      <Footer />
    </div>
  )
}

export default App
