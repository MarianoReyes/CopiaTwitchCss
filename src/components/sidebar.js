import React, { useState } from 'react';
import '/public/css/sidebar.css'
import expandir from '/public/img/expandir.svg'
import Expandirinverso from '/public/img/expandir_inverso.svg'

export default function Sidebar (){

    const[collapsed,setCollapsed] = useState(false)

    const sidebarToggle = () => {
        setCollapsed(!collapsed)
    }
    
    if (collapsed){
        return(
            <>
            <br/>
            <br/>
            <br/>
            <h1 onClick={sidebarToggle}>collapsed</h1>
            </>
            

        )
    }

    return (
        
        <div className="sidebar">
            <div className='sidebar-section'>
                <h3>CANALES QUE SIGUES</h3>
                <Expandirinverso width='20px' height='20px' onClick={sidebarToggle}/>
            </div>
            <a href="#home"> Canal 1</a>
        </div>

    );
}