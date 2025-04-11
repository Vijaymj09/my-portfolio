import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Vijay. All rights reserved.</p>
      <div className="footer__socials">
        <a href="https://github.com/Vijaymj09" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/vijay-m-j-097088249" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:karthimj09@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
