import { BellOff, Pause, Play, RotateCcw } from 'lucide-react'

function TimerControls({
  isRunning,
  onStart,
  onPause,
  onReset,
  onStopAlarm,
  isAlarmPlaying,
}) {
  return (
    <div className="timer-controls">
      {isAlarmPlaying ? (
        <button className="timer-controls__main" type="button" onClick={onStopAlarm}>
          <BellOff size={17} /> Silence alarm
        </button>
      ) : (
        <button
          className="timer-controls__main"
          type="button"
          onClick={isRunning ? onPause : onStart}
        >
          {isRunning ? <Pause size={17} fill="currentColor" /> : <Play size={17} fill="currentColor" />}
          {isRunning ? 'Pause timer' : 'Start timer'}
        </button>
      )}
      <button className="timer-controls__reset" type="button" onClick={onReset}>
        <RotateCcw size={15} /> Reset
      </button>
    </div>
  )
}

export default TimerControls
