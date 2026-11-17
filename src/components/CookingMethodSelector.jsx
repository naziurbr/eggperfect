import { cookingMethods } from '../data/cookingTimes.js'

function CookingMethodSelector({ value, onChange }) {
  return (
    <div className="setting-block setting-block--method">
      <div className="setting-label">
        <span>How do you like your yolk?</span>
      </div>
      <div className="method-options" role="group" aria-label="Yolk doneness">
        {cookingMethods.map((method) => (
          <button
            type="button"
            className={`method-option${value === method.id ? ' is-selected' : ''}`}
            key={method.id}
            onClick={() => onChange(method.id)}
            aria-pressed={value === method.id}
          >
            <span className={`method-option__yolk method-option__yolk--${method.id}`} />
            <span className="method-option__text">
              <strong>{method.label}</strong>
              <small>{method.description}</small>
            </span>
            <span className="method-option__time">{method.baseSeconds / 60} min</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default CookingMethodSelector
