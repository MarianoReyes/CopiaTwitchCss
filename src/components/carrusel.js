import React from 'react';
import '../../public/css/carrusel.css';
import carruselfoto from '../../public/img/carrusel.png';

function Carrusel() {
  return (
    <div className="contenedor-carrusel">
      <img src={carruselfoto} />
    </div>
  );
}

export default Carrusel;
