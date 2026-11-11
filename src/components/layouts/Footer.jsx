function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-container" id="site-footer">
      <div className="footer-bento-bar">
        <div className="footer-left">
          <span className="footer-brand">ARJUN SANESH</span>
          <span className="footer-sep" aria-hidden="true">/</span>
          <span className="footer-copy">&copy; {year}</span>
        </div>

        <div className="footer-right">
          <a
            href="https://github.com/Simplemindedmoron"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/arjun-sanesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn ↗
          </a>
          <button
            type="button"
            className="footer-top-btn"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
            aria-label="Scroll back to top"
          >
            <span>TOP ↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
