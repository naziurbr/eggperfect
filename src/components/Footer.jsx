import { Heart } from 'lucide-react'

function Footer() {
  return (
    <footer className="footer">
      <a className="brand brand--footer" href="#home">
        <span className="brand__mark"><span>e</span></span>
        <span>eggcellent<span className="brand__period">.</span></span>
      </a>
      <p>Made with <Heart size={13} fill="currentColor" /> and a little butter.</p>
      <span className="footer__copyright">© 2026 eggcellent</span>
    </footer>
  )
}

export default Footer
