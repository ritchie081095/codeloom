import { FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { profile } from '../data/resume';

export default function Contact() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading index="05" kicker="Say hello" title="Get In Touch" />

        <Reveal className="contact__cta">
          <h3 className="contact__headline">
            Let's build something <span className="grad-text">great</span> together.
          </h3>
          <p className="contact__text">
            Have a project in mind? We're open to new web and mobile development
            work — reach out and let's talk.
          </p>
          <div className="contact__links">
            <a className="contact__link" href={`mailto:${profile.email}`}>
              <FiMail /> <span>{profile.email}</span>
            </a>
            <a className="contact__link" href={profile.phoneHref}>
              <FiPhone /> <span>{profile.phone}</span>
            </a>
            <span className="contact__link">
              <FiMapPin /> <span>{profile.location}</span>
            </span>
          </div>
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            <FiMail /> Send us an email
          </a>
        </Reveal>

        <footer className="footer">
          <span>© {new Date().getFullYear()} {profile.team}. All rights reserved.</span>
          <button className="footer__top" onClick={toTop}>
            Back to top <FiArrowUp />
          </button>
        </footer>
      </div>
    </section>
  );
}
