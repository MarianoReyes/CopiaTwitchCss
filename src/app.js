import React from 'react';
import '../public/css/style.css';
import Navbar from './components/navbar.js';
import Sidebar from './components/sidebar.js';
import Carrusel from './components/carrusel.js';
import ContenedorEnVivo from './components/contenedorenvivo.js';
import Vermas from './components/vermas.js';
import CategoriasSugeridas from './components/categoriassugeridas.js';
import CuadrosCategorias from './components/cuadroscategorias.js';

export default function App() {
  return (
    <>

      <Navbar />
      <div className="d-flex">
        <div className="sidebar-width">
          <Sidebar />
        </div>

        <div className="body-principal">
          <Carrusel />
          <ContenedorEnVivo title="Canales en vivo que podrían gustarte" />
          <Vermas />
          <CategoriasSugeridas />
          <div className="linea-full" />
          <CuadrosCategorias />
          <ContenedorEnVivo title="Comunidades más pequeñas recomendadas" />
          <Vermas />
          <ContenedorEnVivo title="Reconocer a los creadores de API" />
          <Vermas />
        </div>

      </div>
    </>
  );
}
