function StepHeading({ number, title, description }) {
  return (
    <div className="step-heading">
      <span className="step-heading__number">{number}</span>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default StepHeading
