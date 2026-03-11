/* ============================================================
   App.js
   Root application component.
   Manages dark/light theme state and renders all sections
   in order. Theme is persisted to localStorage.
   ============================================================ */
import React, { useState, useEffect } from "react";

// Global styles
import "./styles/globals.css";

// Layout components
import Navbar from "./components/Navbar";

// Page sections
import Hero       from "./sections/Hero";
import About      from "./sections/About";
import Skills     from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects   from "./sections/Projects";
import Education  from "./sections/Education";
import Contact    from "./sections/Contact";
import Footer     from "./sections/Footer";

function App() {
  /* ---- Theme state: 'dark' | 'light' ---- */
  const [theme, setTheme] = useState(() => {
    // Read from localStorage or default to dark
    return localStorage.getItem("ma-portfolio-theme") || "dark";
  });

  /* Apply theme data-attribute and persist preference */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ma-portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <div className="app">
      {/* Sticky navigation bar */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main content — each section is a React component */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Site footer */}
      <Footer />
    </div>
  );
}

export default App;
