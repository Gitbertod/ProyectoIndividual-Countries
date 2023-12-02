import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './detail.css'
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../redux/actions/actions';

function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const country = useSelector((state) => state.countryDetail);
    const { nombre, imagen_de_la_bandera, continente, capital, subregion, area, poblacion } = country;

    useEffect(() => {
        getDetail(dispatch, id); // Pasar el parámetro id
    }, [dispatch, id]);

    return (
        <div className='detail'>  
            <h3>Detalle de {nombre}</h3>
            <img src={imagen_de_la_bandera}></img>
            <p>Nombre: {nombre}</p>
            <p>Continente: {continente}</p>
            <p>Capital: {capital}</p>
            <p>Subregion: {subregion}</p>
            <p>Area: {area}</p>
            <p>Poblacion: {poblacion}</p>
        </div>
    );
}

export default Detail;