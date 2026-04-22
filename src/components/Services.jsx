function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Servicios</h2>

        <div className="services-list">

          <div className="service-item">
            <h3>Desarrollo de APIs</h3>
            <p>
              Construcción de APIs REST robustas con FastAPI, incluyendo autenticación,
              validación de datos y conexión a base de datos.
            </p>
          </div>

          <div className="service-item">
            <h3>Modelado de Base de Datos</h3>
            <p>
              Diseño de esquemas en PostgreSQL orientados a aplicaciones reales,
              priorizando consistencia y rendimiento.
            </p>
          </div>

          <div className="service-item">
            <h3>Integración Frontend</h3>
            <p>
              Conexión de APIs con interfaces en React, construyendo aplicaciones funcionales
              de punta a punta.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services