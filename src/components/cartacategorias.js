import React from 'react';
import '../../public/css/envivo.css';
import Trespuntos from '../../public/img/3puntos.svg';

export default function cartagacegorias(props) {
  return (
    <div className="carta-en-vivo-cats">
      <div className="imagen">
        <img src={props.img} />
      </div>
      <div className="d-flex">
        <div className="texto">
          <h4>{props.texto}</h4>
          <p>{props.espectadores}</p>
          <div className="tags">
            {props.tags.map((tag) => (
              <a className="tag">{tag}</a>
            ))}
          </div>
        </div>
        <div className="vermas">
          <Trespuntos width="20px" height="20px" />
        </div>
      </div>
    </div>
  );
}
