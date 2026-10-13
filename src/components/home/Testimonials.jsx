import { useEffect, useRef, useState } from 'react'
import { testimonials } from '../../data/testimonials.js'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [fading, setFading] = useState(false)
  const timer = useRef(null)
  const current = testimonials[index]

  useEffect(() => () => clearTimeout(timer.current), [])

  // Fade out, swap the quote, fade back in.
  const go = (step) => {
    clearTimeout(timer.current)
    setFading(true)
    timer.current = setTimeout(() => {
      setIndex((i) => (i + step + testimonials.length) % testimonials.length)
      setFading(false)
    }, 180)
  }

  return (
    <section className="sec" id="testimonials">
      <div className="in">
        <div className="hd">
          <div>
            <div className="lab">Testimonial</div>
            <h2>What Our Clients Are say</h2>
            <p style={{ marginTop: 8, fontSize: 12 }}>
              What our clients say reflects our commitment to excellence and trust.
            </p>
          </div>
          <div className="ar">
            <button type="button" aria-label="Previous testimonial" onClick={() => go(-1)}>
              ←
            </button>
            <button type="button" aria-label="Next testimonial" onClick={() => go(1)}>
              →
            </button>
          </div>
        </div>
        <div className={`tm${fading ? ' sw' : ''}`} aria-live="polite">
          <div>
            <blockquote>“{current.quote}”</blockquote>
            <b style={{ font: '500 14px Poppins,sans-serif' }}>{current.name}</b>
            <p style={{ fontSize: 11 }}>{current.role}</p>
            <div className="tc">
              {index + 1} / {testimonials.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
