/* ============================================================
   About.jsx
   Professional summary with key highlight cards.
   Uses scroll-triggered fade-in animation.
   ============================================================ */
import React from "react";
import { about, personal } from "../data";
import useScrollAnimation from "../components/useScrollAnimation";
import "./About.css";

const About = () => {
  const headingRef = useScrollAnimation();
  const textRef    = useScrollAnimation(0.1);
  const cardsRef   = useScrollAnimation(0.1);

  return (
    <section id="about" className="section about">
      <div className="container">
        {/* Section heading */}
        <div ref={headingRef} className="fade-in">
          <span className="section-label">Who I am</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about__grid">
          {/* Left: text content */}
          <div ref={textRef} className="about__text fade-in delay-1">
            <p className="about__summary">{about.summary}</p>
            <p className="about__extended">{about.extended}</p>

            {/* Contact pill */}
            <a
              href={`mailto:${personal.email}`}
              className="about__email-btn"
            >
              <span>✉️</span>
              {personal.email}
            </a>
          </div>

          {/* Right: highlight cards */}
          <div ref={cardsRef} className="about__highlights fade-in delay-2">
            {about.highlights.map(({ icon, label, value }) => (
              <div key={label} className="about__highlight-card">
                <span className="about__highlight-icon">{icon}</span>
                <div>
                  <p className="about__highlight-label">{label}</p>
                  <p className="about__highlight-value">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
