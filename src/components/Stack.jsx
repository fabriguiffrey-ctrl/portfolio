function Stack() {
  return (
    <section id="stack" className="stack">
      <div className="container">
        <h2>Stack</h2>

        <div className="stack-block">
          <p className="stack-label">Backend</p>
          <p className="stack-text">
            Python · FastAPI · PostgreSQL
          </p>
        </div>

        <div className="stack-block">
          <p className="stack-label">Frontend</p>
          <p className="stack-text">
            React · HTML · CSS
          </p>
        </div>

        <div className="stack-block">
          <p className="stack-label">Tools</p>
          <p className="stack-text">
            Git · GitHub
          </p>
        </div>
      </div>
    </section>
  )
}

export default Stack