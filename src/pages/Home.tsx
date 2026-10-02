import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  function buscar(e: FormEvent) {
    e.preventDefault();
    const texto = q.trim();
    navigate(texto ? `/propiedades?q=${encodeURIComponent(texto)}` : "/propiedades");
  }

  return (
    <section className="hero">
      <h1 className="hero__title">
        Encuentra el lugar donde <span>empieza tu historia</span>
      </h1>
      <p className="hero__sub">
        Casas, departamentos y terrenos en un solo lugar. Busca por ciudad o por nombre.
      </p>

      <form className="search" onSubmit={buscar} role="search">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ej: Guayaquil, departamento, Samborondón…"
          aria-label="Buscar propiedades"
        />
        <button type="submit">Buscar</button>
      </form>
    </section>
  );
}
