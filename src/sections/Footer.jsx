/* ============================================================
   Footer.jsx
   Minimal footer with name, nav links, social icons,
   and copyright notice.
   ============================================================ */
import React from "react";
import { personal } from "../data";
import "./Footer.css";

const FOOTER_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Contact",    href: "#contact"    },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Logo */}
        <a className="footer__logo" href="#hero" onClick={(e) => scrollTo(e, "#hero")}>
          <span className="footer__logo-bracket">&lt;</span>
          MA
          <span className="footer__logo-bracket">/&gt;</span>
        </a>

        {/* Nav links */}
        <nav className="footer__nav" aria-label="Footer navigation">
          {FOOTER_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="footer__link" onClick={(e) => scrollTo(e, href)}>
              {label}
            </a>
          ))}
        </nav>

        {/* Social links */}
        <div className="footer__socials">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email">
            <EmailIcon />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p>© {year} Mohammed Arshad. Built with React ⚡</p>
        <button
          className="footer__back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          ↑ Top
        </button>
      </div>
    </footer>
  );
};

/* ---- Icons ---- */
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

export default Footer;
