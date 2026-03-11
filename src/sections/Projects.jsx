/* ============================================================
   Projects.jsx
   Project cards with hover overlay, tech tags,
   and GitHub / live-demo links.
   ============================================================ */
import React from "react";
import { projects } from "../data";
import useScrollAnimation from "../components/useScrollAnimation";
import "./Projects.css";

const Projects = () => {
  const headingRef = useScrollAnimation();
  const gridRef    = useScrollAnimation(0.08);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div ref={headingRef} className="fade-in">
          <span className="section-label">What I've built</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of tools, integrations, and systems I've designed or contributed to.
            GitHub links will be updated as repositories go public.
          </p>
        </div>

        <div ref={gridRef} className="projects__grid fade-in delay-2">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---- Single project card ---- */
const ProjectCard = ({ project, idx }) => (
  <div
    className={`project-card ${project.highlight ? "project-card--featured" : ""}`}
    style={{ transitionDelay: `${idx * 0.08}s` }}
  >
    {/* Category badge */}
    <span className="project-card__category">{project.category}</span>

    {/* Title */}
    <h3 className="project-card__title">{project.title}</h3>

    {/* Description */}
    <p className="project-card__desc">{project.description}</p>

    {/* Technology tags */}
    <div className="project-card__tech">
      {project.tech.map((t) => (
        <span key={t} className="project-card__tech-tag">{t}</span>
      ))}
    </div>

    {/* Links */}
    <div className="project-card__links">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card__link"
        title="View on GitHub (update URL in data.js)"
      >
        <GitHubIcon /> GitHub
      </a>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link project-card__link--live"
        >
          <ExternalLinkIcon /> Live Demo
        </a>
      )}
    </div>

    {/* Hover accent bar */}
    <div className="project-card__accent-bar" aria-hidden />
  </div>
);

/* ---- Icons ---- */
const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

export default Projects;
