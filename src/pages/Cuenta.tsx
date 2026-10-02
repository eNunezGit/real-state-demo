import { Link } from "react-router";

// Datos de ejemplo: reemplázalos por el usuario autenticado
const usuario = { nombre: "Enrique", email: "enrique@correo.com", desde: "2026" };
const favoritos = ["Departamento vista al río", "Casa con jardín"];

export default function Cuenta() {
  return (
    <section className="account">
      <h1>Mi cuenta</h1>

      <div className="panel">
        <div className="avatar" aria-hidden="true">
          {usuario.nombre[0]}
        </div>
        <div>
          <h2>{usuario.nombre}</h2>
          <p className="muted">{usuario.email}</p>
          <p className="muted">Miembro desde {usuario.desde}</p>
        </div>
      </div>

      <div className="panel panel--col">
        <h2>Propiedades guardadas</h2>
        <ul>
          {favoritos.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <Link to="/acceso" className="danger">
        Cerrar sesión
      </Link>
    </section>
  );
}
