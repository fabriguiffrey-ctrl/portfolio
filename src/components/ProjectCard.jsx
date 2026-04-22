import { FaGithub } from "react-icons/fa"

function ProjectCard({ title, description, github }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="project-buttons">
        <a href={github} target="_blank" rel="noreferrer">
          <FaGithub style={{ marginRight: "6px" }} />
          Ver código
        </a>
      </div>
    </div>
  )
}

export default ProjectCard