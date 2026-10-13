import { Link } from 'react-router-dom'
import { FIRM } from '../../data/site.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="copy">
        <h1>{FIRM}</h1>
        <p>
          Founded on the principles of integrity and high-precision law,{' '}
          <span style={{ whiteSpace: 'nowrap' }}>{FIRM}</span> has grown from a boutique practice into one of
          Kenya’s most formidable legal pillars.
        </p>
        <div className="cta">
          <Link className="btn gold" to="/contact">
            Schedule a Case Review
          </Link>
          <Link className="btn" to={{ pathname: '/', hash: '#practice' }}>
            View Practice Areas
          </Link>
        </div>
      </div>
    </section>
  )
}
