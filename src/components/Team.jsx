import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { team } from '../data/resume';

// Avatar that shows the member's photo when present, falling back to their
// initials so the card looks complete before images are added.
function MemberAvatar({ member }) {
  const [failed, setFailed] = useState(false);
  const initials = member.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  if (!member.image || failed) {
    return <div className="team__avatar team__avatar--initials">{initials}</div>;
  }
  return (
    <img
      className="team__avatar"
      src={member.image}
      alt={member.name}
      onError={() => setFailed(true)}
      draggable={false}
    />
  );
}

export default function Team() {
  return (
    <section id="team" className="section section--alt">
      <div className="container">
        <SectionHeading index="04" kicker="The people behind the work" title="Our Team" />

        <div className="team__grid">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <motion.article
                className="team__card"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <div className="team__avatar-wrap">
                  <MemberAvatar member={m} />
                </div>
                <h3 className="team__name">{m.name}</h3>
                <p className="team__role">{m.role}</p>
                <div className="team__socials">
                  <span className="team__social" aria-hidden="true">
                    <FiLinkedin />
                  </span>
                  <span className="team__social" aria-hidden="true">
                    <FiMail />
                  </span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
