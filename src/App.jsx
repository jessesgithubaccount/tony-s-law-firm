import { Navigate, Route, Routes } from 'react-router-dom'
import ScrollManager from './components/ScrollManager.jsx'
import SiteLayout from './components/SiteLayout.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import { practiceAreas } from './data/practiceAreas.js'

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {practiceAreas.map((area) => (
          <Route key={area.slug} path={area.slug} element={<ArticlePage area={area} />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
