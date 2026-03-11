/* ============================================================
   Hero.jsx
   Full-viewport hero section with name, title, tagline,
   social links, and CTA buttons. Includes animated gradient
   background and staggered text reveal on mount.
   ============================================================ */
import React, { useEffect, useState } from "react";
import { personal } from "../data";
import "./Hero.css";

// Rotating sub-titles to show expertise breadth
const ROLES = [
  "SaaS Implementation Engineer",
  "Identity & Access Management",
  "SSO & Authentication Specialist",
  "Customer Solutions Engineer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible,   setVisible]   = useState(false);

  /* ---- Trigger entrance animation after mount ---- */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* ---- Rotate subtitle every 3 s ---- */
  useEffect(() => {
    const interval = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Decorative background blobs */}
      <div className="hero__blob hero__blob--1" aria-hidden />
      <div className="hero__blob hero__blob--2" aria-hidden />
      <div className="hero__blob hero__blob--3" aria-hidden />

      <div className="container hero__content">
        {/* Status badge */}
        <div className={`hero__badge ${visible ? "hero__badge--visible" : ""}`}>
          <span className="hero__badge-dot" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className={`hero__name ${visible ? "hero__name--visible" : ""}`}>
          {personal.name.split(" ").map((word, i) => (
            <span key={i} className="hero__name-word" style={{ transitionDelay: `${0.15 + i * 0.1}s` }}>
              {word}
            </span>
          ))}
        </h1>

        {/* Rotating role title */}
        <div className={`hero__role-wrapper ${visible ? "hero__role-wrapper--visible" : ""}`}>
          <span className="hero__role-prefix">I work in </span>
          <span className="hero__role-text" key={roleIndex}>
            {ROLES[roleIndex]}
          </span>
        </div>

        {/* Short bio */}
        <p className={`hero__bio ${visible ? "hero__bio--visible" : ""}`}>
          {personal.shortBio}
        </p>

        {/* CTA buttons */}
        <div className={`hero__cta ${visible ? "hero__cta--visible" : ""}`}>
          <a href="#contact" className="btn btn--primary" onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}>
            Get in Touch
          </a>
          <a href="#experience" className="btn btn--secondary" onClick={(e) => {
            e.preventDefault();
            document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
          }}>
            View My Work
          </a>
        </div>

        {/* Social links */}
        <div className={`hero__socials ${visible ? "hero__socials--visible" : ""}`}>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="GitHub profile"
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="hero__social-link"
            aria-label="Send email"
          >
            <EmailIcon />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint" aria-hidden>
        <span />
      </div>
    </section>
  );
};

/* ---- Inline SVG icons (no external dependency) ---- */
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

export default Hero;
