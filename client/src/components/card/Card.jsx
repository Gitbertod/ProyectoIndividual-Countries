import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './card.css'

function Card({ country }) {
  const { id,nombre, poblacion, imagen_de_la_bandera } = country
  return (
    <NavLink to={`../detail/${id}`}>
      <div className='card-container'>
        <h3>Nombre: {nombre}</h3>
        <h3>poblacion:{poblacion}</h3>
        <img src={imagen_de_la_bandera}></img>
      </div>

    </NavLink>
  )
}

export default Card