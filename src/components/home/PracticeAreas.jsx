import { Link } from 'react-router-dom'
import { practiceAreas } from '../../data/practiceAreas.js'

export default function PracticeAreas() {
  return (
    <section className="sec" id="practice">
      <div className="in">
        <div className="lab">Practice Areas</div>
        <h2>
          Legal Support Across
          <br />
          Every Practice Area
        </h2>
        <div className="vals">
          {practiceAreas.map((area) => (
            <div className="v" key={area.slug}>
              <div>
                <b>{area.name}</b>
                <p>{area.summary}</p>
              </div>
              <Link className="lm2" to={`/${area.slug}`}>
                Learn more <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
