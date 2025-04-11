import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Vijay. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
