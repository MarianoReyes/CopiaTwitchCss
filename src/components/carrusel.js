import React, {useState} from 'react'
import '/public/css/carrusel.css'


const Carrusel = () => {
  const [card, setCard] = useState(null);
  const onCardChange = (event) => {
    console.log("Card", event);
  }
  
  return (
    <>
    </>
  )
}
export default Carrusel