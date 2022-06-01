import React from 'react';
import '../../public/css/sidebar.css';
import Expandirinverso from '../../public/img/expandir_inverso.svg';
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
    <div className="sidebar">
      <div className="sidebar-section sidebar-svg">
        <h3>CANALES QUE SIGUES</h3>
        <Expandirinverso width="20px" height="20px" onClick={props.sidebarToggle} />
      </div>
      <div className="sidebar-section-collapsed sidebar-collapsed-svg ">
        <div className="cartas">
          <img src={ibai} />
          <div className="texto-mid">
            <h4>ibai</h4>
            <p>Charlando</p>
          </div>
          <p className="especial">32.4 k</p>
        </div>
        <div className="cartas">
          <img className="away" src={rubius} />
          <div className="texto-mid">
            <h4>rubius</h4>
            <p>3 videos</p>
          </div>
          <p>desconectado</p>
        </div>
        <div className="cartas">
          <img className="away" src={ocho} />
          <div className="texto-mid">
            <h4>8cho</h4>
            <p>2 videos</p>
          </div>
          <p>desconectado</p>
        </div>
        <div className="cartas">
          <img className="away" src={flow} />
          <div className="texto-mid">
            <h4>Flow</h4>
            <p>1 video</p>
          </div>
          <p>desconectado</p>
        </div>
        <div className="cartas">
          <img className="away" src={auron} />
          <div className="texto-mid">
            <h4>Auron</h4>
            <p>5 videos</p>
          </div>
          <p>desconectado</p>
        </div>
      </div>
      <div className="vermas">
        <p>Mostrar más</p>
      </div>
      <div className="sidebar-section sidebar-svg">
        <h3>CANALES RECOMENDADOS</h3>
        <Expandirinverso width="20px" height="20px" onClick={props.sidebarToggle} />
      </div>
      <div className="sidebar-section-collapsed sidebar-collapsed-svg">
        <div className="cartas">
          <img src={recomendado1} />
          <div className="texto-mid">
            <h4>Focus</h4>
            <p>GTA V</p>
          </div>
          <p className="especial">3.2 k</p>
        </div>
        <div className="cartas">
          <img src={recomendado2} />
          <div className="texto-mid">
            <h4>Alexby</h4>
            <p>GTA V</p>
          </div>
          <p className="especial">20 k</p>
        </div>
        <div className="cartas">
          <img src={recomendado3} />
          <div className="texto-mid">
            <h4>Axozer</h4>
            <p>Charlando</p>
          </div>
          <p className="especial">4 k</p>
        </div>
        <div className="cartas">
          <img src={recomendado4} />
          <div className="texto-mid">
            <h4>Dedito</h4>
            <p>Charlando</p>
          </div>
          <p className="especial">4.2 k</p>
        </div>
        <div className="cartas">
          <img src={recomendado5} />
          <div className="texto-mid">
            <h4>Pina</h4>
            <p>Charlando</p>
          </div>
          <p className="especial">1.2 k</p>
        </div>
        <div className="cartas">
          <img src={recomendado6} />
          <div className="texto-mid">
            <h4>Polispol</h4>
            <p>Charlando</p>
          </div>
          <p className="especial">2.4 k</p>
        </div>
      </div>
      <div className="vermas">
        <p>Mostrar más</p>
      </div>
    </div>
  );
}
