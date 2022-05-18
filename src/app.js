import React, { useState } from 'react';
import './style.css'
import trespuntos from '../public/img/3puntos.svg'


export default function App (){
    return (
        <div>
            <div className='header'>
                <div className='header-elemento'>
                    <h1>Siguiendo</h1>
                </div>
                <div className='header-elemento'>
                    <h1>Explorar</h1>
                </div>
                <div className='header-elemento'>
                <img width='20px' height='20px' src={trespuntos}/>
            </div>
        
            </div>
                     
        </div>
      );
}

