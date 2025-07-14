import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["home", "about", "services", "projects", "contact"];
      let currentSection = "home";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    if (!isNavCollapsed) {
      handleNavCollapse();
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand portfolio-brand"
          href="#home"
          onClick={() => onUpdateActiveLink("home")}
        >
          Nino Barbakadze
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                href="#home"
                className={
                  activeLink === "home" ? "nav-link active" : "nav-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className={
                  activeLink === "about" ? "nav-link active" : "nav-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#services"
                className={
                  activeLink === "services" ? "nav-link active" : "nav-link"
                }
                onClick={() => onUpdateActiveLink("services")}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                className={
                  activeLink === "projects" ? "nav-link active" : "nav-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className={
                  activeLink === "contact" ? "nav-link active" : "nav-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
