import { useState } from 'react'
import './landing.css'
import mapa2 from '../../assets/mapa2.svg'
import bg from '../../assets/bg.jpeg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCountries } from '../../redux/actions/actions'

function Landing() {
    const dispatch = useDispatch()
    const fillUp = (dispatch) => {
        getCountries(dispatch)
    }
    return (
        <div className='landing'>
            <div className='landing'>
                <h1>Bienvenido, Welcome, Benvenuto, Bienvenue</h1>
                <h2>API Country</h2>
                <div className='globo'>
                    <img src={mapa2} />
                </div>

                <Link to='/home'>
                    <button onClick={() => fillUp(dispatch)}>Entrar</button>
                </Link>

            </div>

        </div>
    )
}

export default Landing