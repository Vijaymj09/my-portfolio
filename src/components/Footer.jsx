import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <div className="footer__socials">
        <a href="https://github.com/yourusername" target="_blank">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank">
          LinkedIn
        </a>
        <a href="mailto:your@email.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
