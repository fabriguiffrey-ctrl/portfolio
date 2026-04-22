import { useEffect, useState } from "react"

function Navbar() {
  const [active, setActive] = useState("")

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const handleScroll = () => {
      let current = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120
        const sectionHeight = section.clientHeight

        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id")
        }
      })

      setActive(current)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo">Fabricio</div>

        <div className="nav-links">
          <a href="#about" className={active === "about" ? "active" : ""}>
            Sobre mí
          </a>
          <a href="#stack" className={active === "stack" ? "active" : ""}>
            Stack
          </a>
          <a href="#projects" className={active === "projects" ? "active" : ""}>
            Proyectos
          </a>
          <a href="#experience" className={active === "experience" ? "active" : ""}>
            Experiencia
          </a>
          <a href="#services" className={active === "services" ? "active" : ""}>
            Servicios
          </a>
          <a href="#contact" className={active === "contact" ? "active" : ""}>
            Contacto
          </a>







        </div>
      </div>
    </nav>
  )
}

export default Navbar