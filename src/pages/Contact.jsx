import usePageTitle from '../hooks/usePageTitle.js'
import { FIRM } from '../data/site.js'

const MAP_SRC =
  'https://www.openstreetmap.org/export/embed.html?bbox=36.77%2C-1.32%2C36.87%2C-1.25&layer=mapnik&marker=-1.2864%2C36.8172'
const MAPS_LINK = 'https://www.google.com/maps/search/?api=1&query=Nairobi%2C+Kenya'

export default function Contact() {
  usePageTitle(`Contact Us | ${FIRM}`)

  // The form has no backend yet; the browser still validates the required fields.
  const handleSubmit = (e) => e.preventDefault()

  return (
    <section className="cw" id="contact">
      <div className="cw-in">
        <form className="cw-form" onSubmit={handleSubmit}>
          <h1>Get in touch</h1>
          <p className="cw-sub">Have a question or need help? We're here for you.</p>
          <div className="cw-row">
            <label>
              <span>
                Your Name <i>*</i>
              </span>
              <input type="text" placeholder="Name" required />
            </label>
            <label>
              <span>
                Email <i>*</i>
              </span>
              <input type="email" placeholder="Email" required />
            </label>
          </div>
          <label>
            <span>
              Your Message <i>*</i>
            </span>
            <textarea placeholder="Enter Here" required />
          </label>
          <button className="cw-btn" type="submit">
            Submit Message
          </button>
        </form>
        <aside className="cw-card">
          <div>
            <h2>Address</h2>
            <p>Nairobi, Kenya</p>
          </div>
          <div>
            <h2>Contact</h2>
            <p>Phone : +254 700 000 000</p>
            <p>Email : info@example.co.ke</p>
          </div>
        </aside>
      </div>
      <div className="cw-map">
        <div className="cw-fb" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.500A2.500 2.500 0 1 1 12 6.500a2.500 2.500 0 0 1 0 5z" />
          </svg>
          <b>Nairobi, Kenya</b>
        </div>
        <iframe
          title="Map of Nairobi, Kenya"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={MAP_SRC}
        />
        <a className="cw-open" href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
          Open in Google Maps ↗
        </a>
      </div>
    </section>
  )
}
