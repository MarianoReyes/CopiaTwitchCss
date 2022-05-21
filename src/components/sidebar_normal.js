import React, { useState } from 'react';
import '/public/css/sidebar.css'
import Expandirinverso from '/public/img/expandir_inverso.svg'


export default function SidebarNormal(props){

    return(
        <div className="sidebar">
            <div className='sidebar-section sidebar-svg'>
                <h3>CANALES QUE SIGUES</h3>
                <Expandirinverso width='20px' height='20px' onClick={props.sidebarToggle}/>
            </div>
            <a href="#home"> Canal 1</a>
        </div>
    );
}