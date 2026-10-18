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
    }, 600);
  };

  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="section-header-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="section-kicker">04 // CONNECT</span>
        <h2 className="section-heading">
          Let's Build Something <span>Together.</span>
        </h2>
        <p className="section-desc">
          Have a project idea, question, or want to collaborate on hardware/software? Reach out below.
        </p>
      </motion.div>

      <motion.div
        className="contact-neo-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Left Column: Direct Links & Info */}
        <div className="contact-info-col">
          <span className="neo-pill pill-yellow">● DIRECT CHANNELS</span>
          <h3 className="contact-callout-title">
            Reach out directly or send a message.
          </h3>
          <p className="contact-callout-desc">
            Based in Bangalore, India. Always open to discussing interesting robotics projects, embedded systems, or web applications.
          </p>

          <div className="direct-profiles-list">
            <a
              href="https://github.com/Simplemindedmoron"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-neo-btn"
            >
              <span>GitHub Profile</span>
              <span className="btn-arrow">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/arjun-sanesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-neo-btn"
            >
              <span>LinkedIn Network</span>
              <span className="btn-arrow">↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Dispatch Form */}
        <form onSubmit={handleSubmit} className="contact-form-col">
          <div className="neo-form-group">
            <label className="form-label" htmlFor="contact-name">YOUR NAME</label>
            <input
              id="contact-name"
              type="text"
              className="neo-input-box"
              placeholder="Arjun"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="neo-form-group">
            <label className="form-label" htmlFor="contact-email">EMAIL ADDRESS</label>
            <input
              id="contact-email"
              type="email"
              className="neo-input-box"
              placeholder="arjun@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="neo-form-group">
            <label className="form-label" htmlFor="contact-message">PROJECT DETAILS / MESSAGE</label>
            <textarea
              id="contact-message"
              className="neo-input-box"
              placeholder="Tell me about your project, idea, or questions..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="neo-btn"
            disabled={isSubmitting}
            style={{ width: "100%", marginTop: "6px" }}
          >
            <span>{isSubmitting ? "Dispatching..." : isSent ? "MESSAGE SENT // SUCCESS ↗" : "Send Message →"}</span>
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
