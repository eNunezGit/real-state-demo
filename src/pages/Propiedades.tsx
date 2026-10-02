import { useState } from "react";
import { useSearchParams } from "react-router";

type Tipo = "Casa" | "Departamento" | "Terreno";
type Propiedad = {
  id: number;
  titulo: string;
  ciudad: string;
  tipo: Tipo;
  precio: number;
  hab: number;
  area: number;
};

// Datos de ejemplo: reemplázalos por tu API
const DATA: Propiedad[] = [
  { id: 1, titulo: "Casa con jardín", ciudad: "Samborondón", tipo: "Casa", precio: 185000, hab: 4, area: 220 },
  { id: 2, titulo: "Departamento vista al río", ciudad: "Guayaquil", tipo: "Departamento", precio: 96000, hab: 2, area: 85 },
  { id: 3, titulo: "Terreno esquinero", ciudad: "Daule", tipo: "Terreno", precio: 54000, hab: 0, area: 400 },
  { id: 4, titulo: "Suite moderna", ciudad: "Guayaquil", tipo: "Departamento", precio: 68000, hab: 1, area: 48 },
  { id: 5, titulo: "Casa en urbanización", ciudad: "Durán", tipo: "Casa", precio: 112000, hab: 3, area: 150 },
  { id: 6, titulo: "Penthouse con terraza", ciudad: "Guayaquil", tipo: "Departamento", precio: 240000, hab: 3, area: 190 },
];

export default function Propiedades() {
  const [params] = useSearchParams();
  const [texto, setTexto] = useState(params.get("q") ?? "");
  const [tipo, setTipo] = useState<"" | Tipo>("");
  const [precioMax, setPrecioMax] = useState(300000);
  const [hab, setHab] = useState(0);

  const resultados = DATA.filter(
    (p) =>
      (!tipo || p.tipo === tipo) &&
      p.precio <= precioMax &&
      p.hab >= hab &&
      `${p.titulo} ${p.ciudad} ${p.tipo}`.toLowerCase().includes(texto.toLowerCase()),
  );

  return (
    <div className="hub">
      <section className="hub__list" aria-live="polite">
        <h1>Propiedades</h1>
        <p className="muted">{resultados.length} resultado(s)</p>

        {resultados.length === 0 ? (
          <p className="empty">No hay propiedades con esos filtros.</p>
        ) : (
          <div className="grid">
            {resultados.map((p) => (
              <article key={p.id} className="card">
                <div className="card__img" aria-hidden="true">
                  {p.tipo}
                </div>
                <div className="card__body">
                  <h2>{p.titulo}</h2>
                  <p className="muted">{p.ciudad}</p>
                  <p className="card__price">${p.precio.toLocaleString("es-EC")}</p>
                  <p className="muted">
                    {p.hab > 0 ? `${p.hab} hab · ` : ""}
                    {p.area} m²
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <aside className="filters" aria-label="Filtros">
        <h2>Filtros</h2>

        <label>
          Buscar
          <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Ciudad o nombre" />
        </label>

        <label>
          Tipo
          <select value={tipo} onChange={(e) => setTipo(e.target.value as "" | Tipo)}>
            <option value="">Todos</option>
            <option value="Casa">Casa</option>
            <option value="Departamento">Departamento</option>
            <option value="Terreno">Terreno</option>
          </select>
        </label>

        <label>
          Precio máximo: ${precioMax.toLocaleString("es-EC")}
          <input
            type="range"
            min={30000}
            max={300000}
            step={5000}
            value={precioMax}
            onChange={(e) => setPrecioMax(Number(e.target.value))}
          />
        </label>

        <label>
          Habitaciones (mín.)
          <select value={hab} onChange={(e) => setHab(Number(e.target.value))}>
            <option value={0}>Cualquiera</option>
            <option value={1}>1+</option>
            <option value={2}>2+</option>
            <option value={3}>3+</option>
            <option value={4}>4+</option>
          </select>
        </label>
      </aside>
    </div>
  );
}
