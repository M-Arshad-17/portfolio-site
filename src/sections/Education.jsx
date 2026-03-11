/* ============================================================
   Education.jsx
   Education timeline and certifications grid.
   ============================================================ */
import React from "react";
import { education, certifications } from "../data";
import useScrollAnimation from "../components/useScrollAnimation";
import "./Education.css";

const Education = () => {
  const headingRef = useScrollAnimation();
  const eduRef     = useScrollAnimation(0.1);
  const certRef    = useScrollAnimation(0.1);

  return (
    <section id="education" className="section education">
      <div className="container">
        <div ref={headingRef} className="fade-in">
          <span className="section-label">Learning & Credentials</span>
          <h2 className="section-title">Education & Certifications</h2>
        </div>

        <div className="education__layout">
          {/* ---- Education column ---- */}
          <div ref={eduRef} className="fade-in delay-1">
            <h3 className="education__col-title">
              <span className="education__col-icon">🎓</span> Academic Background
            </h3>

            <div className="edu__list">
              {education.map((item, idx) => (
                <div
                  key={item.institution}
                  className={`edu__card ${item.highlight ? "edu__card--featured" : ""}`}
                  style={{ transitionDelay: `${idx * 0.08}s` }}
                >
                  <div className="edu__icon">{item.icon}</div>
                  <div className="edu__info">
                    <p className="edu__degree">{item.degree}</p>
                    {item.field && <p className="edu__field">{item.field}</p>}
                    <p className="edu__institution">{item.institution}</p>
                    <span className="edu__period">{item.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---- Certifications column ---- */}
          <div ref={certRef} className="fade-in delay-2">
            <h3 className="education__col-title">
              <span className="education__col-icon">🏅</span> Certifications
            </h3>

            <div className="cert__list">
              {certifications.map((cert, idx) => (
                <div
                  key={cert.title}
                  className="cert__card"
                  style={{ transitionDelay: `${idx * 0.08}s` }}
                >
                  <span className="cert__icon">{cert.icon}</span>
                  <div>
                    <p className="cert__title">{cert.title}</p>
                    <p className="cert__issuer">{cert.issuer}</p>
                    <p className="cert__desc">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
