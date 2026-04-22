function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          Desarrollo aplicaciones y APIs que funcionan en el mundo real
        </h1>

        <p className="hero-subtitle">
          Backend con Python + FastAPI. Expandiéndome a frontend con React.
        </p>

        <div className="hero-buttons">
          <a href="#projects">Ver proyectos</a>
          <a
            href="https://github.com/fabriguiffrey-ctrl"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="/cv fabricio guiffrey.pdf" download>
          Descargar CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero