import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router";

type Modo = "login" | "registro";

export default function Acceso() {
  const navigate = useNavigate();
  const [modo, setModo] = useState<Modo>("login");

  function enviar(e: FormEvent) {
    e.preventDefault();
    // Aquí iría la llamada a tu API de autenticación
    navigate("/cuenta");
  }

  return (
    <section className="auth">
      <div className="tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={modo === "login"}
          onClick={() => setModo("login")}
        >
          Iniciar sesión
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={modo === "registro"}
          onClick={() => setModo("registro")}
        >
          Crear cuenta
        </button>
      </div>

      <form className="auth__form" onSubmit={enviar}>
        {modo === "registro" && (
          <label>
            Nombre
            <input name="nombre" autoComplete="name" required />
          </label>
        )}
        <label>
          Correo
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Contraseña
          <input
            type="password"
            name="password"
            autoComplete={modo === "login" ? "current-password" : "new-password"}
            minLength={8}
            required
          />
        </label>
        <button type="submit" className="primary">
          {modo === "login" ? "Entrar" : "Registrarme"}
        </button>
      </form>
    </section>
  );
}
