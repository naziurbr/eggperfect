import { eggSizes } from '../data/cookingTimes.js'
import EggIllustration from './EggIllustration.jsx'

function EggSizeSelector({ value, onChange }) {
  return (
    <div className="setting-block">
      <div className="setting-label">
        <span>What size are they?</span>
        <span className="setting-label__hint">Fridge-cold eggs</span>
      </div>
      <div className="size-options" role="group" aria-label="Egg size">
        {eggSizes.map((eggSize) => (
          <button
            type="button"
            className={`size-option${value === eggSize.id ? ' is-selected' : ''}`}
            key={eggSize.id}
            onClick={() => onChange(eggSize.id)}
            aria-pressed={value === eggSize.id}
          >
            <EggIllustration className={`egg-illustration--${eggSize.id}`} />
            <span>{eggSize.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default EggSizeSelector
