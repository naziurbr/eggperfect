import { Egg, MoveUpRight } from 'lucide-react'

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Eggcellent home">
        <span className="brand__mark">
          <Egg size={20} strokeWidth={2.2} />
        </span>
        <span>eggcellent<span className="brand__period">.</span></span>
      </a>
      <nav className="navbar__links" aria-label="Main navigation">
        <a href="#how-it-works">How it works</a>
        <a className="navbar__cta" href="#timer">
          Get cracking <MoveUpRight size={15} />
        </a>
      </nav>
    </header>
  )
}

export default Navbar
