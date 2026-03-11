/* ============================================================
   Experience.jsx
   Vertical timeline of work experience. Each entry shows
   company logo badge, role, period, and key achievements.
   ============================================================ */
import React, { useState } from "react";
import { experience } from "../data";
import useScrollAnimation from "../components/useScrollAnimation";
import "./Experience.css";

const Experience = () => {
  const headingRef = useScrollAnimation();

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div ref={headingRef} className="fade-in">
          <span className="section-label">My journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            5+ years at PowerSchool delivering secure SaaS solutions for K-12 education districts.
          </p>
        </div>

        {/* Timeline */}
        <div className="exp__timeline">
          {experience.map((job, idx) => (
            <ExperienceCard key={`${job.company}-${job.role}`} job={job} index={idx} />
          ))}
          {/* Timeline end dot */}
          <div className="exp__timeline-end" aria-hidden />
        </div>
      </div>
    </section>
  );
};

/* ---- Individual experience card ---- */
const ExperienceCard = ({ job, index }) => {
  const cardRef = useScrollAnimation(0.1);
  const [expanded, setExpanded] = useState(index === 0); // First card open by default

  return (
    <div
      ref={cardRef}
      className={`exp__card fade-in`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Timeline dot */}
      <div className="exp__dot" style={{ background: job.color }} aria-hidden />
      {/* Connector line drawn via CSS ::before on parent */}

      <div className="exp__card-inner">
        {/* Card header */}
        <div
          className="exp__card-header"
          onClick={() => setExpanded(!expanded)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <div className="exp__meta">
            {/* Company logo badge */}
            <div
              className="exp__logo-badge"
              style={{ background: `${job.color}22`, borderColor: `${job.color}44`, color: job.color }}
            >
              {job.logo}
            </div>

            <div>
              <h3 className="exp__role">{job.role}</h3>
              <p className="exp__company">{job.company}</p>
            </div>
          </div>

          <div className="exp__right">
            <div className="exp__period-wrap">
              <span className="exp__period">{job.period}</span>
              <span className="exp__duration">{job.duration}</span>
            </div>
            <span className={`exp__chevron ${expanded ? "exp__chevron--open" : ""}`}>
              ▾
            </span>
          </div>
        </div>

        {/* Expandable achievements */}
        <div className={`exp__achievements ${expanded ? "exp__achievements--open" : ""}`}>
          <div className="exp__achievements-inner">
            <p className="exp__location">📍 {job.location}</p>
            <ul className="exp__list">
              {job.achievements.map((item, i) => (
                <li key={i} className="exp__list-item">
                  <span className="exp__list-dot" style={{ background: job.color }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
