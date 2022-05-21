import React, { useState } from 'react';
import '/public/css/sidebar.css'
import Expandir from '/public/img/expandir.svg'


export default function SidebarNormal(props){

    return(
        <div className="sidebar-collapsed">
            <div className='sidebar-section-collapsed sidebar-svg'>
                <Expandir width='20px' height='20px' onClick={props.sidebarToggle}/>
            </div>
        </div>
    );
}