import React from 'react';
import '../public/css/style.css';
import Navbar from './components/navbar.js';
import Sidebar from './components/sidebar.js';
import Carrusel from './components/carrusel.js';
import ContenedorEnVivo from './components/contenedorenvivo.js';
import Vermas from './components/vermas.js';
import CategoriasSugeridas from './components/categoriassugeridas.js';

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
          <ContenedorEnVivo />
          <Vermas />
          <CategoriasSugeridas />
          <div className="linea-full" />
        </div>

      </div>

    </>
  );
}
