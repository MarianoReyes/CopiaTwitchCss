import React from 'react';
import '../../public/css/cuadroscategorias.css';
import Juegos from '../../public/img/juegos.svg';
import Microfono from '../../public/img/microfono.svg';
import Audifonos from '../../public/img/audifonos.svg';
import Trofeo from '../../public/img/trofeo.svg';
import Pintura from '../../public/img/pintura.svg';

function ContenedorEnVivo() {
  return (
    <div className="contenedor-categorias">
      <div className="elemento">
        <h3>Juegos</h3>
        <Juegos />
      </div>
      <div className="elemento">
        <h3>IRL</h3>
        <Microfono />
      </div>
      <div className="elemento">
        <h3>Música</h3>
        <Audifonos />
      </div>
      <div className="elemento">
        <h3>Esports</h3>
        <Trofeo />
      </div>
      <div className="elemento">
        <h3>Creative</h3>
        <Pintura />
      </div>
    </div>
  );
}

export default ContenedorEnVivo;
