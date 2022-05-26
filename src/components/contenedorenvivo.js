import React from 'react';
import '../../public/css/envivo.css';
import dataenvivo from './dataenvivo.js';
import Cartaenvivo from './cartaenvivo.js';

function ContenedorEnVivo() {
  const envivo = dataenvivo.map((item) => (
    <Cartaenvivo
      img={item.img}
      logo={item.logo}
      texto={item.texto}
      nombre={item.nombre}
      actividad={item.actividad}
      tags={item.tags}
    />
  ));

  return (
    <>
      <div className="titulo-en-vivo">
        <h3>Canales en vivo que podrían gustarte</h3>
      </div>
      <div className="contenedor-en-vivo">
        {envivo}
      </div>
    </>
  );
}

export default ContenedorEnVivo;
