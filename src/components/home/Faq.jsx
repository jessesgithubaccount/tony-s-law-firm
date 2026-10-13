import { Link } from 'react-router-dom'
import { faqs } from '../../data/faqs.js'

export default function Faq() {
  return (
    <section className="sec dk" id="faq">
      <div className="faq">
        <h2>Find Answers to Your Legal Questions.</h2>
        <p>
          Our team provides clear, reliable solutions to help you understand your rights and make informed
          decisions.
        </p>
        <div>
          {faqs.map((group) => (
            <details key={group.category}>
              <summary>{group.category}</summary>
              <div className="qs">
                {group.items.map((item) => (
                  <div className="qa" key={item.question}>
                    <div className="qh">
                      <div className="qt">
                        <b>{item.question}</b>
                        <span>{item.answer}</span>
                      </div>
                      <Link className="qm" to="/contact">
                        Learn more <i>→</i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
