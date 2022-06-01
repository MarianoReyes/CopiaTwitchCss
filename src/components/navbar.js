import React from 'react';
import '../../public/css/navbar.css';
import twitch from '../../public/img/twitch.png';
import Trespuntos from '../../public/img/3puntos.svg';
import Corona from '../../public/img/corona.svg';
import Caja from '../../public/img/caja.svg';
import Mensajes from '../../public/img/mensajes.svg';
import Bits from '../../public/img/bits.svg';
import perfil from '../../public/img/perfil.png';
import Buscar from '../../public/img/buscar2.svg';

export default function Navbar() {
  return (
    <div className="header">
      <div className="izquierda">
        <div className="header-logo">
          <img src={twitch} width="25px" height="25px" />
        </div>
        <div className="header-elemento">
          <h1>Siguiendo</h1>
        </div>
        <div className="header-elemento">
          <h1>Explorar</h1>
        </div>
        <div className="header-elemento-svg">
          <Trespuntos width="20px" height="20px" />
        </div>
      </div>
      <div className="centro">
        <input type="text" value="Buscar" />
        <Buscar width="20px" height="20px" />
      </div>
      <div className="derecha">
        <div className="header-elemento-svg">
          <Corona width="20px" height="20px" />
        </div>
        <div className="header-elemento-svg">
          <Caja width="20px" height="20px" />
        </div>
        <div className="header-elemento-svg">
          <Mensajes width="20px" height="20px" />
        </div>
        <div className="header-bits">
          <Bits width="20px" height="20px" />
          <h4>Comprar Bits</h4>
        </div>
        <div className="header-elemento-perfil">
          <img src={perfil} width="20px" height="20px" />
        </div>
      </div>
    </div>
  );
}
