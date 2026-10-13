import { team } from '../../data/team.js'

export default function Team() {
  return (
    <section className="sec dk" id="team">
      <div className="in">
        <div className="team">
          <div className="txt">
            <div className="lab">Our Team</div>
            <p>
              Our team combines years of experience, deep legal knowledge, and a client-focused approach to
              handle every case.
            </p>
          </div>
          {team.map((member, i) => (
            <div
              key={i}
              className={`ph p card${member.founder ? ' fd' : ''}`}
              style={{
                '--bg': `linear-gradient(160deg,${member.bg},#151515)`,
                '--c': member.accent,
              }}
            >
              {member.founder && <em className="bd">Founder</em>}
              <div className="cap">
                <div>
                  <b>{member.name}</b>
                  <small>{member.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
