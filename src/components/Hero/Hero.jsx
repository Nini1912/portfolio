import "./Hero.css";
import profilePic from "../../assets/portfolio-image.jpg";

const Hero = () => {
  return (
    <section className="hero-section text-center text-lg-start">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold animate animate-flow-from-left">
              Hello! I&apos;m Nino Barbakadze,
            </h1>
            <p className="lead my-4 animate animate-flow-from-left">
              a passionate full-stack web developer with a solid foundation in
              modern web technologies and a growing curiosity for everything
              tech-related.
            </p>
            <a
              href="/CV.pdf"
              className="btn btn-lg btn-gradient animate animate-flow-from-left"
              style={{ transitionDelay: "400ms" }}
              download
            >
              Download CV
            </a>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src={profilePic}
              alt="John Doe"
              className="img-fluid hero-image animate animate-flow-from-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
