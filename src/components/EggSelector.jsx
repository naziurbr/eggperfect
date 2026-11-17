import { Plus, Minus } from 'lucide-react'
import EggIllustration from './EggIllustration.jsx'

const MIN_EGGS = 1
const MAX_EGGS = 6

function EggSelector({ value, onChange }) {
  return (
    <div className="setting-block">
      <div className="setting-label">
        <span>How many?</span>
        <span className="setting-label__hint">Up to {MAX_EGGS} eggs</span>
      </div>
      <div className="egg-quantity">
        <button
          type="button"
          className="icon-button"
          onClick={() => onChange(Math.max(MIN_EGGS, value - 1))}
          disabled={value <= MIN_EGGS}
          aria-label="Remove one egg"
        >
          <Minus size={16} />
        </button>
        <div className="egg-quantity__display" aria-live="polite">
          <div className="egg-quantity__illustrations" aria-hidden="true">
            {Array.from({ length: Math.min(value, 3) }, (_, index) => (
              <EggIllustration key={index} />
            ))}
          </div>
          <strong>{value}</strong>
          <span>{value === 1 ? 'egg' : 'eggs'}</span>
        </div>
        <button
          type="button"
          className="icon-button"
          onClick={() => onChange(Math.min(MAX_EGGS, value + 1))}
          disabled={value >= MAX_EGGS}
          aria-label="Add one egg"
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  )
}

export default EggSelector
