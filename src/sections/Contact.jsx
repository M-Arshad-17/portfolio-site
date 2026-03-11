/* ============================================================
   Contact.jsx
   Contact section with info cards and a functional
   mailto form. All form data goes straight to the user's
   default mail client — no backend needed.
   ============================================================ */
import React, { useState } from "react";
import { personal } from "../data";
import useScrollAnimation from "../components/useScrollAnimation";
import "./Contact.css";

const Contact = () => {
  const headingRef = useScrollAnimation();
  const leftRef    = useScrollAnimation(0.1);
  const rightRef   = useScrollAnimation(0.1);

  /* ---- Form state ---- */
  const [form,    setForm]    = useState({ name: "", email: "", subject: "", message: "" });
  const [sent,    setSent]    = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  /* Build a mailto link and open it */
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Hi Mohammed,\n\nMy name is ${form.name} (${form.email}).\n\n${form.message}`
    );
    const subject = encodeURIComponent(form.subject || "Portfolio Enquiry");
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div ref={headingRef} className="fade-in">
          <span className="section-label">Get in touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Whether you have a project in mind, an opportunity to share, or just want to say hello —
            my inbox is always open.
          </p>
        </div>

        <div className="contact__grid">
          {/* ---- Left: contact info ---- */}
          <div ref={leftRef} className="contact__info fade-in delay-1">
            <ContactItem
              icon="✉️"
              label="Email"
              value={personal.email}
              href={`mailto:${personal.email}`}
            />
            <ContactItem
              icon="💼"
              label="LinkedIn"
              value="mohammed-arshad"
              href={personal.linkedin}
              external
            />
            <ContactItem
              icon="🐙"
              label="GitHub"
              value="github.com (add your handle)"
              href={personal.github}
              external
            />
            <ContactItem
              icon="📍"
              label="Location"
              value={personal.location}
              href={null}
            />

            {/* Availability banner */}
            <div className="contact__availability">
              <span className="contact__avail-dot" />
              <p>
                <strong>Currently open</strong> to new opportunities, consulting work,
                and interesting collaborations.
              </p>
            </div>
          </div>

          {/* ---- Right: contact form ---- */}
          <div ref={rightRef} className="contact__form-wrap fade-in delay-2">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className={`contact__submit ${sent ? "contact__submit--sent" : ""}`}>
                {sent ? "✅ Opening your mail client…" : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---- Contact info row item ---- */
const ContactItem = ({ icon, label, value, href, external }) => {
  const Tag = href ? "a" : "div";
  const props = href
    ? { href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
    : {};

  return (
    <Tag className="contact__item" {...props}>
      <span className="contact__item-icon">{icon}</span>
      <div>
        <p className="contact__item-label">{label}</p>
        <p className="contact__item-value">{value}</p>
      </div>
    </Tag>
  );
};

export default Contact;
