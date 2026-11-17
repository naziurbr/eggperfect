import { ArrowDown } from 'lucide-react'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__copy">
        <span className="eyebrow"><span className="eyebrow__dot" /> YOUR LITTLE KITCHEN SIDEKICK</span>
        <h1>The perfect egg.<br /><span>Every single time.</span></h1>
        <p>From gloriously gooey to perfectly set, your ideal egg is just a timer away.</p>
        <a className="hero__link" href="#timer">
          Let’s make breakfast <ArrowDown size={16} />
        </a>
      </div>
      <div className="hero__art" aria-hidden="true">
        <div className="hero__sun" />
        <div className="hero__spark hero__spark--one">✳</div>
        <div className="hero__spark hero__spark--two">✳</div>
        <div className="hero__egg">
          <div className="hero__yolk" />
        </div>
        <div className="hero__plate" />
        <span className="hero__caption">a sunny-side kind of day</span>
      </div>
      <span className="hero__index">01 — 03</span>
    </section>
  )
}

export default Hero
