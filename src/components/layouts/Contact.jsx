import { useState } from "react";
import { motion } from "motion/react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    }, 500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-bento-grid">
        <motion.div
          className="bento-cell contact-info-cell"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bento-cell-top">
            <span className="bento-index">03 // CONTACT</span>
            <span className="bento-meta-label">DIRECT CHANNELS</span>
          </div>

          <div className="contact-info-body">
            <h2 className="section-heading">Get in Touch</h2>
            <p className="contact-lead">
              Available for collaborations and conversations around embedded
              systems, robotics, and software engineering.
            </p>
          </div>

          <div className="contact-links-list">
            <a
              href="https://github.com/Simplemindedmoron"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-link"
            >
              <span className="channel-name">GitHub</span>
              <span className="channel-handle">
                github.com/Simplemindedmoron
                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" />
                </svg>
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/arjun-sanesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-link"
            >
              <span className="channel-name">LinkedIn</span>
              <span className="channel-handle">
                linkedin.com/in/arjun-sanesh
                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" />
                </svg>
              </span>
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bento-cell contact-form-cell"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bento-cell-top">
            <span className="bento-index">MESSAGE DISPATCH</span>
          </div>

          <div className="form-row-two-col">
            <div className="form-group">
              <label className="form-label" htmlFor="contact-name">
                NAME
              </label>
              <input
                id="contact-name"
                type="text"
                className="form-input"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-email">
                EMAIL
              </label>
              <input
                id="contact-email"
                type="email"
                className="form-input"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-message">
              MESSAGE
            </label>
            <textarea
              id="contact-message"
              className="form-input"
              placeholder="Project details or inquiry..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          <div className="form-submit-row">
            <button
              type="submit"
              className="btn-solid-white"
              disabled={isSubmitting}
            >
              <span>
                {isSubmitting ? "Sending..." : isSent ? "Message Sent" : "Send Message"}
              </span>
              <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" />
              </svg>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
