import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="social-icons">
          <a
            href="https://github.com/Nini1912"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nino-barbakadze-bb554231a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="copyright-text">
          Copyright © {currentYear} | Designed by Nino Barbakadze
        </p>
      </div>
    </footer>
  );
};

export default Footer;
