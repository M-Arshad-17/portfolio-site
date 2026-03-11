/* ============================================================
   Navbar.jsx
   Sticky top navigation with smooth-scroll links,
   active section highlighting, mobile hamburger menu,
   and dark/light mode toggle.
   ============================================================ */
import React, { useState, useEffect, useCallback } from "react";
import "./Navbar.css";

// Navigation links — labels map to section IDs in the DOM
const NAV_LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact",  href: "#contact"  },
];

const Navbar = ({ theme, onToggleTheme }) => {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [activeLink,  setActiveLink]  = useState("");

  /* ---- Scroll handler: shrink nav + highlight active section ---- */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);

    // Find which section is currently in view
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && window.scrollY >= el.offsetTop - 120) {
        setActiveLink(sections[i]);
        return;
      }
    }
    setActiveLink("");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ---- Close mobile menu on outside click ---- */
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [menuOpen]);

  /* ---- Smooth-scroll helper ---- */
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        {/* Logo / Name */}
        <a className="navbar__logo" href="#hero" onClick={(e) => handleNavClick(e, "#hero")}>
          <span className="navbar__logo-bracket">&lt;</span>
          MA
          <span className="navbar__logo-bracket">/&gt;</span>
        </a>

        {/* Desktop nav links */}
        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`navbar__link ${activeLink === href.replace("#", "") ? "navbar__link--active" : ""}`}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="navbar__controls">
          {/* Dark / Light mode toggle */}
          <button
            className="navbar__theme-btn"
            onClick={onToggleTheme}
            aria-label="Toggle colour theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Hamburger — mobile only */}
          <button
            className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
            onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
