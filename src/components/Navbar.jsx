import { Link, useLocation } from 'react-router-dom'
import { practiceAreas } from '../data/practiceAreas.js'
import { FIRM } from '../data/site.js'

const section = (hash) => ({ pathname: '/', hash })

export default function Navbar() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const onContact = pathname === '/contact'

  return (
    <nav>
      <Link className="logo" to="/" aria-label={FIRM}>
        <img src="/images/logo.png" alt={FIRM} />
      </Link>
      <div className="links">
        <Link className={onHome ? 'on' : undefined} aria-current={onHome ? 'page' : undefined} to="/">
          Home
        </Link>
        <Link to={section('#about')}>About us</Link>
        <div className="dd">
          <Link className="ddt" to={section('#practice')} aria-haspopup="true">
            Practice areas <span className="car" aria-hidden="true">▾</span>
          </Link>
          <div className="ddm">
            {practiceAreas.map((area) => (
              <Link key={area.slug} to={`/${area.slug}`}>
                {area.menu}
              </Link>
            ))}
          </div>
        </div>
        <Link to={section('#team')}>Our team</Link>
      </div>
      <Link className="btn sq" aria-current={onContact ? 'page' : undefined} to="/contact">
        Contact us
      </Link>
    </nav>
  )
}
