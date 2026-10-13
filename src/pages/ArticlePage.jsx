import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle.js'
import { practiceAreas } from '../data/practiceAreas.js'

// Each article body is its own chunk, loaded only when that page is opened.
const bodies = {
  CorporateLaw: lazy(() => import('../content/CorporateLaw.jsx')),
  FamilyLaw: lazy(() => import('../content/FamilyLaw.jsx')),
  CriminalDefense: lazy(() => import('../content/CriminalDefense.jsx')),
  RealEstateLaw: lazy(() => import('../content/RealEstateLaw.jsx')),
  ImmigrationLaw: lazy(() => import('../content/ImmigrationLaw.jsx')),
  EmploymentLaw: lazy(() => import('../content/EmploymentLaw.jsx')),
}

export default function ArticlePage({ area }) {
  usePageTitle(area.title)
  const Body = bodies[area.component]
  const i = practiceAreas.findIndex((a) => a.slug === area.slug)
  const prev = practiceAreas[i - 1]
  const next = practiceAreas[i + 1]

  return (
    <div className="article-page">
      <div className="top">
        <Link className="tl back" to="/">
          <span aria-hidden="true">←</span> <span className="lbl">Back to site</span>
        </Link>
      </div>
      <article>
        <h1>{area.heading}</h1>
        <Suspense fallback={null}>
          <Body />
        </Suspense>
      </article>
      <div className="ask">
        <Link className="btn sq" to="/contact">
          Speak to an Advocate
        </Link>
      </div>
      <div className="nav">
        <div className="pn">
          {prev && (
            <Link className="tl back" to={`/${prev.slug}`}>
              <span aria-hidden="true">←</span> <span className="lbl">{prev.name}</span>
            </Link>
          )}
          {next && (
            <Link className="tl next" to={`/${next.slug}`}>
              <span className="lbl">{next.name}</span> <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
