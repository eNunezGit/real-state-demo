import { Link } from "react-router";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">
          <Link to="/" aria-label="Ir al inicio">
            {/* <img src={} alt="MiApp" /> */}
          </Link>
        </div>

        <nav className="navbar__links" aria-label="Principal">
          <Link to="/" className="navbar__link">
            Inicio
          </Link>
          <Link to="/propiedades" className="navbar__link">
            Propiedades
          </Link>
          <Link to="/cuenta" className="navbar__link">
            Mi cuenta
          </Link>
          <Link to="/acceso" className="navbar__link navbar__link--cta">
            Acceder
          </Link>
        </nav>
      </div>
    </header>
  );
}