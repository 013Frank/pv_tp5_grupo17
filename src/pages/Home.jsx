import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero principal */}
      <section className="hero-section text-white text-center">
        <h1 className="display-4">¡Bienvenidos al Sistema de Gestion de Alumnos!</h1>
        <p className="lead">Formulario de Información Personal de Alumnos</p>
        <Link to="/acerca" className="btn btn-outline-light mt-3">
          Para saber más de los creadores →
        </Link>
      </section>

      {/* Sección tipo revista */}
      <section className="info-section container mt-5">
        <h2 className="text-center mb-4">¿Qué hace nuestro sistema?</h2>
        <p className="text-justify">
          Nuestra aplicación web fue desarrollada para gestionar de forma eficiente los datos personales de los alumnos de una institución educativa. Gracias a una interfaz intuitiva, permite agregar, visualizar, editar y eliminar alumnos de forma dinámica.
        </p>

        <hr className="my-4" />

        <div className="row gy-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">📦 Herramientas utilizadas</h5>
                <ul>
                  <li>React + Vite</li>
                  <li>Bootstrap 5</li>
                  <li>React Router DOM</li>
                  <li>CSS personalizado</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">📄 ¿Qué tiene cada página?</h5>
                <ul>
                  <li><strong>Inicio:</strong> Presentación visual e informativa del sistema.</li>
                  <li><strong>Lista de Alumnos:</strong> Tabla interactiva con botones de acción.</li>
                  <li><strong>Nuevo Alumno:</strong> Formulario controlado para agregar datos.</li>
                  <li><strong>Editar:</strong> Formulario precargado.</li>
                  <li><strong>Detalle:</strong> Vista individual del alumno.</li>
                  <li><strong>Acerca de:</strong> Información de los creadores del proyecto.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">⚙️ Funcionalidades y eventos</h5>
                <ul>
                  <li><code>onClick</code> → Para botones de acción (eliminar, editar, navegar).</li>
                  <li><code>onChange</code> → Para capturar inputs del usuario.</li>
                  <li><code>onSubmit</code> → Para manejar envíos de formularios.</li>
                  <li><strong>React Router DOM:</strong> para navegación entre vistas.</li>
                  <li><strong>useParams, useNavigate, Link:</strong> para rutas dinámicas y redirecciones.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
