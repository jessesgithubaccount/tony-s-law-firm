import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to the #section in the URL, or back to the top on a new page.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const lastPath = useRef(pathname)

  useEffect(() => {
    const changedPage = lastPath.current !== pathname
    lastPath.current = pathname

    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    if (changedPage || !target) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    if (target) target.scrollIntoView() // smooth scrolling + offset come from the CSS on <html>
  }, [pathname, hash, key])

  return null
}
