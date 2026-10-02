import { Routes, Route, Outlet } from "react-router";
import Navbar from "./components/NavBar/Navbar.jsx";
import Home from "./pages/Home";
import Propiedades from "./pages/Propiedades";
import Acceso from "./pages/Acceso";
import Cuenta from "./pages/Cuenta";
import "./App.css";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="page">
        <Outlet />
      </main>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="propiedades" element={<Propiedades />} />
        <Route path="acceso" element={<Acceso />} />
        <Route path="cuenta" element={<Cuenta />} />
        <Route path="*" element={<p className="empty">Página no encontrada.</p>} />
      </Route>
    </Routes>
  );
}