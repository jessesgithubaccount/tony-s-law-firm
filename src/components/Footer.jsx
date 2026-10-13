import { Link } from 'react-router-dom'
import { FIRM } from '../data/site.js'

const section = (hash) => ({ pathname: '/', hash })

export default function Footer() {
  return (
    <footer>
      <div className="ft">
        <div className="fbrand">
          <div className="lg">
            <img src="/images/logo-footer.png" alt={FIRM} />
          </div>
          <p>Trusted legal guidance built on integrity and high-precision law.</p>
        </div>
        <div className="fcols">
          <div>
            <h4>About Us</h4>
            <Link to="/">Home</Link>
            <Link to={section('#about')}>About Us</Link>
            <Link to={section('#practice')}>Practice Areas</Link>
            <Link to={section('#team')}>Our Team</Link>
          </div>
          <div>
            <h4>Specialisti</h4>
            <Link to="/corporate-law">Corporate &amp;Commercial</Link>
            <Link to="/family-law">family &amp; Divorce</Link>
            <Link to="/criminal-defense">Criminal Defense</Link>
            <Link to="/real-estate-law">Real Estate &amp; property</Link>
          </div>
        </div>
      </div>
      <div className="fb">
        <span>© {FIRM}. All rights reserved.</span>
        <Link to="/contact">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1.5 2 7.5 5.5L19.5 7z" />
          </svg>
          Contact Us
        </Link>
      </div>
    </footer>
  )
}
