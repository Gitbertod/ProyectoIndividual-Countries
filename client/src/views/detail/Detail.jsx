import { useState } from 'react'
import './detail.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getDetail } from '../../redux/actions/actions'

function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const country = useSelector((state) => state.countryDetail);
    const { nombre, Imagen_de_la_bandera, continente, capital, subregion, area, poblacion } = country
    

    

    useEffect(() => {
        getDetail(dispatch)
    },[])


    return (
        <>
            <p>Nombre:{nombre}</p>
            <p>Imagen de la bandera: {Imagen_de_la_bandera}</p>
            <p>Continente: {continente}</p>
            <p>Capital:{capital}</p>
            <p>Subregion:{subregion}</p>
            <p>Area:{area}</p>
            <p>Poblacion:{poblacion}</p>

        </>
    )
}

export default Detail