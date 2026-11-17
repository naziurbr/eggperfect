import { cookingMethods, eggSizes } from '../data/cookingTimes.js'
import EggIllustration from './EggIllustration.jsx'

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remaining = seconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(remaining).padStart(2, '0')}`
}

function CookingTimer({
  method,
  size,
  eggCount,
  remainingSeconds,
  totalSeconds,
  isRunning,
  isAlarmPlaying,
}) {
  const isDone = remainingSeconds === 0
  const progress = totalSeconds > 0 ? (totalSeconds - remainingSeconds) / totalSeconds : 0
  const methodLabel = cookingMethods.find((item) => item.id === method)?.label ?? 'Egg'
  const sizeLabel = eggSizes.find((item) => item.id === size)?.label.toLowerCase() ?? 'medium'

  return (
    <div className="timer-card" id="timer">
      <div className="timer-card__topline">
        <span>{isDone ? 'TIME’S UP!' : 'YOUR EGG TIMER'}</span>
        <span className={`timer-card__status${isRunning ? ' is-running' : ''}`}>
          <i /> {isRunning ? 'in progress' : isDone ? 'ready to enjoy' : 'ready when you are'}
        </span>
      </div>
      <div className="timer-card__egg">
        <div className={`timer-card__ring${isRunning ? ' is-running' : ''}`}>
          <svg viewBox="0 0 220 220" aria-hidden="true">
            <circle className="timer-card__track" cx="110" cy="110" r="101" />
            <circle
              className="timer-card__progress"
              cx="110"
              cy="110"
              r="101"
              style={{ strokeDashoffset: `${635.2 * (1 - progress)}` }}
            />
          </svg>
          <div className="timer-card__inner">
            <EggIllustration className="timer-card__illustration" />
            <strong className="timer-card__time" aria-live="off">{formatTime(remainingSeconds)}</strong>
            <span className="timer-card__time-label">MINUTES : SECONDS</span>
          </div>
        </div>
        {isAlarmPlaying && <span className="timer-card__alarm">⟡</span>}
      </div>
      <div className="timer-card__summary">
        <strong>{methodLabel} eggs</strong>
        <span>{eggCount} {sizeLabel} {eggCount === 1 ? 'egg' : 'eggs'} · chilled</span>
      </div>
    </div>
  )
}

export default CookingTimer
