import { Link } from 'react-router-dom'
import { FIRM } from '../../data/site.js'

const stats = [
  { value: '100', suffix: '+', label: 'Clients served' },
  { value: '6', label: 'Practice areas' },
  { value: '98', suffix: '%', label: 'Client satisfaction' },
  { value: '15', suffix: '+', label: 'Years of experience' },
]

export default function About() {
  return (
    <section className="ax" id="about" aria-labelledby="ax-h">
      <div className="ax-card">
        <div className="ax-grid">
          <div className="ax-copy">
            <h2 id="ax-h">About Us</h2>
            <p>
              At {FIRM}, we believe good legal help is more than winning a case. It is about protecting your
              rights and giving you clear answers at every step. Whether you are facing a dispute, starting a
              business or planning for your family, we shape our advice around what matters to you.
            </p>
            <p>
              With experienced advocates, practical solutions and a commitment to integrity, we make the law
              easier to understand and act on.
            </p>
            <Link className="ax-btn" to={{ pathname: '/', hash: '#team' }}>
              Meet our team
            </Link>
          </div>
          <div className="ax-pics">
            <div
              className="ph d ax-a"
              style={{ '--pos': '0% 50%', backgroundSize: '275% auto' }}
              role="img"
              aria-label="Our law office"
            />
          </div>
        </div>
        <dl className="ax-stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>
                <strong>{s.value}</strong>
                {s.suffix && <i>{s.suffix}</i>}
              </dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
