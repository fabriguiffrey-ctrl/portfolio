import { FaGithub } from "react-icons/fa"

function Projects() {
  const projects = [
    { name: "Veterinaria", link: "https://github.com/tu-repo1" },
    { name: "API Servicios", link: "https://github.com/tu-repo2" },
    { name: "Login System", link: "#" },
    { name: "Dashboard", link: "#" },
    { name: "E-commerce", link: "#" },
    { name: "Portfolio", link: "#" },
  ]

  return (
    <section id="projects">
      <div className="container">
        <h2>Proyectos</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-tile"
            >
              <span>{project.name}</span>
              <FaGithub className="project-icon" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects