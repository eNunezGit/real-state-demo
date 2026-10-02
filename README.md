# MiApp: mockup de portal de propiedades

Prototipo del frontend de un portal inmobiliario. Incluye navegación, una página de inicio con buscador, un hub de propiedades con filtros, acceso (login/registro) y la página de cuenta del usuario.

> **Estado:** mockup. Los datos de propiedades y de usuario son de ejemplo y no hay backend ni autenticación real.

## Stack

| Herramienta | Uso |
|---|---|
| [Vite](https://vite.dev) 8 | Servidor de desarrollo y build |
| React 19 + TypeScript | Interfaz |
| React Compiler | Memoización automática (vía `@rolldown/plugin-babel` y `babel-plugin-react-compiler`) |
| React Router | Enrutamiento del lado del cliente |
| Oxlint | Linter |

## Requisitos

- Node.js (versión LTS reciente)
- npm (o pnpm / yarn / bun)

## Primeros pasos

```bash
npm install
npm install react-router   # si aún no está en las dependencias
npm run dev
```

La app queda en `http://localhost:5173`.

### Cambiar el puerto

En `vite.config.ts`:

```ts
export default defineConfig({
  plugins: [/* ... */],
  server: { port: 3000 },
});
```

O por línea de comandos: `npm run dev -- --port 3000`.

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Genera `dist/` para producción |
| `npm run preview` | Sirve el build localmente |
| `npm run lint` | Ejecuta Oxlint (`oxlint .`) |

## Estructura

```
src/
├── main.tsx              # Punto de entrada; envuelve <App /> en <BrowserRouter>
├── App.tsx               # Rutas y layout (Navbar + Outlet)
├── App.css               # Estilos globales y de páginas
├── assets/
│   └── logo.svg          # Logo del navbar (reemplazar por el real)
├── components/
│   ├── Navbar.tsx
│   └── Navbar.css
└── pages/
    ├── Home.tsx
    ├── Propiedades.tsx
    ├── Acceso.tsx
    └── Cuenta.tsx
```

## Rutas

| Ruta | Página | Descripción |
|---|---|---|
| `/` | `Home` | Mensaje de bienvenida y barra de búsqueda. Al buscar redirige a `/propiedades?q=...` |
| `/propiedades` | `Propiedades` | Listado de propiedades a la izquierda y filtros a la derecha (texto, tipo, precio máximo, habitaciones) |
| `/acceso` | `Acceso` | Formulario con pestañas para iniciar sesión o crear cuenta |
| `/cuenta` | `Cuenta` | Perfil del usuario, propiedades guardadas y cierre de sesión |
| `*` | n/a | Mensaje de página no encontrada |

Todas las rutas comparten el `Layout` definido en `App.tsx`, que mantiene el `Navbar` fijo y renderiza la página activa en `<Outlet />`.

## Datos de ejemplo (qué reemplazar)

| Dónde | Qué es | Cómo sustituirlo |
|---|---|---|
| `pages/Propiedades.tsx` → `DATA` | Lista de propiedades | Cargar desde una API (por ejemplo con `loader` de React Router o `fetch`) |
| `pages/Acceso.tsx` → `enviar()` | Login/registro simulado (solo redirige a `/cuenta`) | Llamar a la API de autenticación |
| `pages/Cuenta.tsx` → `usuario`, `favoritos` | Usuario y favoritos fijos | Leer del usuario autenticado |
| `components/Navbar.tsx` | Logo y `alt` de ejemplo | Poner el logo real en `src/assets/` |

## Estilos

- CSS plano, sin librerías de UI.
- Colores definidos como variables CSS (`:root` en `App.css` y `.navbar` en `Navbar.css`).
- Tema claro/oscuro automático según `prefers-color-scheme`.
- Diseño responsive: en pantallas estrechas los filtros pasan sobre la lista de propiedades.

## Despliegue

Es una SPA con `BrowserRouter`, así que el hosting debe redirigir cualquier ruta a `index.html`. Si no, recargar en `/propiedades` devuelve un 404. En Netlify, Vercel o Cloudflare Pages se resuelve con una regla de rewrite hacia `/index.html`.

## Pendiente / próximos pasos

- [ ] Conectar el hub de propiedades a un backend
- [ ] Autenticación real y estado de sesión (contexto o similar)
- [ ] Proteger `/cuenta` y redirigir a `/acceso` si no hay sesión
- [ ] Página de detalle de propiedad (`/propiedades/:id`)
- [ ] Imágenes reales en las tarjetas
- [ ] Resaltar el link activo del navbar con `NavLink`
- [ ] Menú hamburguesa para móvil
- [ ] Pruebas