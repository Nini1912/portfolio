import "./Projects.css";
import projectsData from "./projectsData";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title text-center animate animate-flow-from-bottom">
          My Projects
        </h2>
        <div className="row">
          {projectsData.map((project, index) => (
            <div
              className="col-md-4 mb-4 animate animate-flow-from-bottom"
              key={index}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                <div className="project-card">
                  <img
                    src={project.imgUrl}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
