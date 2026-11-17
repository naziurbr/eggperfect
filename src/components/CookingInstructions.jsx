import { cookingMethods, eggSizes } from '../data/cookingTimes.js'

function CookingInstructions({ method, size, eggCount }) {
  const selectedMethod = cookingMethods.find((item) => item.id === method)
  const selectedSize = eggSizes.find((item) => item.id === size)
  const instructions = selectedMethod?.instructions ?? []

  return (
    <section className="instructions" id="how-it-works">
      <div className="instructions__intro">
        <span className="eyebrow">A FEW LITTLE TIPS</span>
        <h2>Good eggs start<br />with good timing.</h2>
        <p>Keep it simple. We’ll take care of the minutes; you take care of the toast.</p>
      </div>
      <div className="instructions__steps">
        {instructions.map((instruction, index) => (
          <article className="instruction-step" key={instruction.title}>
            <span className="instruction-step__number">0{index + 1}</span>
            <div>
              <h3>{instruction.title}</h3>
              <p>{instruction.body
                .replace('{count}', String(eggCount))
                .replace('{size}', selectedSize?.label.toLowerCase() ?? 'medium')}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CookingInstructions
