import React, { useState } from 'react';
import '/public/css/style.css'
import Navbar from './components/navbar.js'
import Sidebar from './components/sidebar.js'
import Carrusel from './components/carrusel.js'

export default function App (){
    return (
        <>
            
            <Navbar/> 
            <div>
                <Sidebar/>
                <Carrusel/>
            </div>
            
                
        </>
      );
}

