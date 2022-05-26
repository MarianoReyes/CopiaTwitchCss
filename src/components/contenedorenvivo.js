import React, {StyleSheet, useState} from 'react'
import '/public/css/envivo.css'
import dataenvivo from '/src/components/envivo.js'
import Cartaenvivo from '/src/components/cartaenvivo.js'

const ContenedorEnVivo = () => {

  const envivo = dataenvivo.map(item => {
    return(
      <Cartaenvivo
        img={item.img}
        logo={item.logo}
        texto={item.texto}
        nombre={item.nombre}
        actividad={item.actividad}
        tags={item.tags}
      />
    )
  })
  
  return (
    <>
    <div className='titulo-en-vivo'>
      <h3>Canales en vivo que podrían gustarte</h3>
    </div>
    <div className='contenedor-en-vivo'>
      {envivo}
    </div>
    </>
    
  )
}

export default ContenedorEnVivo