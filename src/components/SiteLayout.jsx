import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function SiteLayout() {
  return (
    <div className="site">
      <div className="frame">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
