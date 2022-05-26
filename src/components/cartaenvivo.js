import React from "react"
import '/public/css/envivo.css'
import Trespuntos from '/public/img/3puntos.svg'

export default function cartaenvivo(props) {
    return (
        <div className="carta-en-vivo">
            <div className="imagen">
                <img src={props.img}/>
            </div>        
            <div className="d-flex">                
                <img src={props.logo} className="logo"/>
                <div className="texto">
                    <h4>{props.texto}</h4>
                    <div className="full-texto">{props.texto}</div>
                    <p>{props.nombre}</p>
                    <p>{props.actividad}</p>
                    <div className="tags">
                    {props.tags.map(tag => {
                        return(
                            <a className="tag">{tag}</a>
                        )
                    })}
                    </div>
                </div>
                <div className="vermas">
                    <Trespuntos width="20px" height="20px"/>
                </div>
            </div>
        </div>
    )
}