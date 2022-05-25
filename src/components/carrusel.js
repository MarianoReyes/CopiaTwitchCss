import { ClassNames } from '@emotion/react'
import React, {StyleSheet, useState} from 'react'
import '/public/css/carrusel.css'
import carruselfoto from '/public/img/carrusel.png'

const Carrusel = () => {

  
  return (
    <div className='contenedor-carrusel'>
      <img src={carruselfoto} />
    </div>
  )
}

export default Carrusel