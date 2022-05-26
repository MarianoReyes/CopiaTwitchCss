import React, { useState } from 'react';
import '/public/css/style.css'
import Navbar from './components/navbar.js'
import Sidebar from './components/sidebar.js'
import Carrusel from './components/carrusel.js'
import ContenedorEnVivo from './components/contenedorenvivo.js'

export default function App (){

    const enVivo = () => {

    }

    return (
        <>
            
            <Navbar/> 
            <div className='d-flex'>
                <div className='sidebar-width'>
                    <Sidebar/>
                </div>
                
                <div className='body-principal'>
                    <Carrusel/>
                    <ContenedorEnVivo/>
                </div>  

            </div>
            
                
        </>
      );
}

