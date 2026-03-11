/* ============================================================
   Skills.jsx
   Categorised skill cards with icon badges and tag chips.
   Each category card has a hover glow effect.
   ============================================================ */
import React from "react";
import { skills } from "../data";
import useScrollAnimation from "../components/useScrollAnimation";
import "./Skills.css";

const Skills = () => {
  const headingRef = useScrollAnimation();
  const gridRef    = useScrollAnimation(0.1);

  return (
    <section id="skills" className="section skills">
      {/* Subtle background grid decoration */}
      <div className="skills__bg-grid" aria-hidden />

      <div className="container">
        <div ref={headingRef} className="fade-in">
          <span className="section-label">What I know</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A cross-functional skill set spanning identity management, cloud platforms,
            SaaS implementation, and modern development tools.
          </p>
        </div>

        {/* Skills category cards */}
        <div ref={gridRef} className="skills__grid fade-in delay-2">
          {skills.map(({ category, icon, items }, idx) => (
            <SkillCard
              key={category}
              category={category}
              icon={icon}
              items={items}
              delay={idx * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---- Single skill category card ---- */
const SkillCard = ({ category, icon, items, delay }) => (
  <div
    className="skill-card"
    style={{ transitionDelay: `${delay}s` }}
  >
    {/* Card header */}
    <div className="skill-card__header">
      <span className="skill-card__icon">{icon}</span>
      <h3 className="skill-card__category">{category}</h3>
    </div>

    {/* Skill chips */}
    <div className="skill-card__chips">
      {items.map((item) => (
        <span key={item} className="skill-chip">{item}</span>
      ))}
    </div>
  </div>
);

export default Skills;
