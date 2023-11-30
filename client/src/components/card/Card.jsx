import { useState } from 'react'
import './card.css'

function Card({country}) {
  const {nombre,poblacion } = country
  return (
    <div className='card-container'>
      <h3>Nombre: {nombre}</h3>
      <h3>poblacion:{poblacion}</h3>

    </div>
  )
}

export default Card