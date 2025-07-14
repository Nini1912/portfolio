import aboutImage from "../../assets/portfolio-image.jpg";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 text-center">
            <img
              src={aboutImage}
              className="img-fluid about-image animate animate-flow-from-left"
              alt="About Me"
            />
          </div>
          <div className="col-lg-7">
            <h2 className="section-title animate animate-flow-from-right">
              About Me
            </h2>
            <p className="section-text animate animate-flow-from-right">
              My journey began at Mziuri College, where I dedicated two years to
              learning the fundamentals of web development. That experience
              sparked a deeper interest in software and digital systems, which
              led me to pursue a degree in Computer Science at Kutaisi
              International University, where I&apos;m currently a second-year
              student.
            </p>
            <p className="section-text animate animate-flow-from-right">
              Over the years, I&apos;ve built a diverse skill set focused on the
              MERN stack and full-stack development. My toolkit includes HTML,
              CSS, JavaScript, React, Node.js, Express.js, MongoDB, Bootstrap,
              jQuery, Mongoose, and MySQL, along with experience using npm and
              other essential development tools. I enjoy both the logic of
              backend development and the creativity of designing responsive,
              user-friendly interfaces.
            </p>
            <p className="section-text animate animate-flow-from-right">
              Why web development? Because I’ve always been curious about how
              things work behind the screen. Watching a project grow from a
              simple idea to a fully working site is what keeps me going. I love
              the process — writing code, solving problems, learning something
              new every day.
            </p>
            <p className="section-text animate animate-flow-from-right">
              Right now, I&apos;m focused on personal projects and continuing to
              expand my knowledge in the field. I&apos;m always exploring new
              technologies, best practices, and innovative solutions to become a
              better developer every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
