import React from 'react';
import '../../public/css/categoriassugeridas.css';
import datacategorias from './datacategorias.js';
import Cartacategorias from './cartacategorias.js';

function CategoriasSugeridas() {
  const categorias = datacategorias.map((item) => (
    <Cartacategorias
      img={item.img}
      texto={item.texto}
      espectadores={item.espectadores}
      tags={item.tags}
    />
  ));

  return (
    <>
      <div className="titulo-en-vivo">
        <h3>
          <span className="titulo-en-vivo-cats">Categorías</span>
          {' '}
          que podrían gustarte
        </h3>
      </div>
      <div className="contenedor-en-vivo-cats">
        {categorias}
      </div>
    </>
  );
}

export default CategoriasSugeridas;
