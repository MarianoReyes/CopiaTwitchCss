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
                <div className='w-siderbar'>
                    <Sidebar/>
                </div>
                
                <div className='w-body body-principal'>
                    <Carrusel/>
                    <ContenedorEnVivo/>
                </div>  

            </div>
            
                
        </>
      );
}

