import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { practiceAreas } from '../data/practiceAreas.js'
import { FIRM } from '../data/site.js'

const section = (hash) => ({ pathname: '/', hash })

// Must match the breakpoint in site.css where the desktop links are swapped for the menu button.
const DESKTOP = '(min-width: 1181px)'

export default function Navbar() {
  const { pathname, hash, key } = useLocation()
  const onHome = pathname === '/'
  const onContact = pathname === '/contact'

  const [open, setOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const toggleRef = useRef(null)
  const closeRef = useRef(null)
  const panelRef = useRef(null)
  const wasOpen = useRef(false)

  const close = useCallback(() => setOpen(false), [])

  // Any navigation (page change, #section jump, tapping the current page again) closes the sidebar.
  useEffect(() => {
    setOpen(false)
  }, [pathname, hash, key])

  // Lock page scroll while open; move focus into the sidebar, and back to the menu button on close.
  useEffect(() => {
    const root = document.documentElement
    if (open) {
      root.classList.add('nav-open')
      closeRef.current?.focus()
      wasOpen.current = true
    } else if (wasOpen.current) {
      wasOpen.current = false
      toggleRef.current?.focus({ preventScroll: true })
    }
    return () => root.classList.remove('nav-open')
  }, [open])

  // Escape closes; Tab stays inside the sidebar while it is open.
  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key !== 'Tab' || !panelRef.current) return
      const focusable = [...panelRef.current.querySelectorAll('a[href], button')].filter(
        (el) => getComputedStyle(el).visibility !== 'hidden',
      )
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  // If the window grows to desktop width (rotating a tablet, resizing), drop the sidebar.
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP)
    const onChange = (e) => {
      if (e.matches) setOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

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
      <Link className="btn sq nav-cta" aria-current={onContact ? 'page' : undefined} to="/contact">
        Contact us
      </Link>

      {/* Mobile / tablet: menu button + slide-in sidebar (hidden on desktop by CSS) */}
      <button
        ref={toggleRef}
        type="button"
        className="m-toggle"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
      >
        <span className="m-bars" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>

      <div className={`m-drawer${open ? ' open' : ''}`} id="mobile-menu">
        <div className="m-scrim" onClick={close} aria-hidden="true" />
        <div className="m-panel" ref={panelRef} role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="m-head">
            <Link className="m-logo" to="/" aria-label={`${FIRM} home`}>
              <img src="/images/logo-footer.png" alt="" />
            </Link>
            <button ref={closeRef} type="button" className="m-close" aria-label="Close menu" onClick={close}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="m-links">
            <Link className="m-link" aria-current={onHome ? 'page' : undefined} to="/">
              Home
            </Link>
            <Link className="m-link" to={section('#about')}>
              About us
            </Link>

            <div className="m-acc">
              <button
                type="button"
                className="m-link m-acc-t"
                aria-expanded={areasOpen}
                aria-controls="mobile-areas"
                onClick={() => setAreasOpen((v) => !v)}
              >
                Practice areas <span className="m-car" aria-hidden="true">▾</span>
              </button>
              <div className={`m-sub${areasOpen ? ' open' : ''}`} id="mobile-areas">
                <div className="m-sub-in">
                  <Link to={section('#practice')}>All practice areas</Link>
                  {practiceAreas.map((area) => (
                    <Link key={area.slug} to={`/${area.slug}`}>
                      {area.menu}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link className="m-link" to={section('#team')}>
              Our team
            </Link>
          </div>

          <div className="m-foot">
            <Link className="btn gold" aria-current={onContact ? 'page' : undefined} to="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}