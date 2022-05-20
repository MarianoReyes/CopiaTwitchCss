import React, { useState } from 'react';
import '/public/css/navbar.css'
import Trespuntos from '/public/img/3puntos.svg'

export default function Navbar (){
    return (
        <>
            <div className='header'>
                <div className='header-elemento'>
                    <h1>Siguiendo</h1>
                </div>
                <div className='header-elemento'>
                    <h1>Explorar</h1>
                </div>
                <div className='header-elemento-svg'>
                    <Trespuntos width="20px" height="20px"/>
                </div>
        
            </div>
                     
        </>
      );
}