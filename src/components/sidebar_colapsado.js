import React from 'react';
import '../../public/css/sidebar.css';
import Expandir from '../../public/img/expandir.svg';
import Corazon from '../../public/img/corazon.svg';
import Recomendados from '../../public/img/camara.svg';
import Amigos from '../../public/img/amigos.svg';
import ibai from '../../public/img/ibai.png';
import rubius from '../../public/img/rubius.jpg';
import ocho from '../../public/img/ocho.png';
import flow from '../../public/img/flow.png';
import auron from '../../public/img/auron.png';
import recomendado1 from '../../public/img/recomendado1.png';
import recomendado2 from '../../public/img/recomendado2.jpg';
import recomendado3 from '../../public/img/recomendado3.png';
import recomendado4 from '../../public/img/recomendado4.jpg';
import recomendado5 from '../../public/img/recomendado5.png';
import recomendado6 from '../../public/img/recomendado6.png';

export default function SidebarNormal(props) {
  return (
    <div className="sidebar-collapsed">
      <div className="sidebar-section-collapsed sidebar-svg mb-custom">
        <Expandir width="20px" height="20px" onClick={props.sidebarToggle} />
      </div>
      <div className="sidebar-section-collapsed sidebar-collapsed-svg ">
        <Corazon className="mb-custom2" width="20px" height="20px" />
        <img src={ibai} />
        <img className="away" src={rubius} />
        <img className="away" src={ocho} />
        <img className="away" src={flow} />
        <img className="away" src={auron} />
      </div>
      <div className="sidebar-section-collapsed sidebar-collapsed-svg">
        <Recomendados width="20px" height="20px" />
        <img src={recomendado1} />
        <img src={recomendado2} />
        <img src={recomendado3} />
        <img src={recomendado4} />
        <img src={recomendado5} />
        <img src={recomendado6} />
      </div>
      <div className="sidebar-section-collapsed sidebar-collapsed-svg">
        <Amigos width="20px" height="20px" />
      </div>
    </div>
  );
}
