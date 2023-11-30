import { useState } from 'react'
import './landing.css'
import mapa from '../../assets/mapa.mp4'
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
            <video src={mapa} autoPlay loop></video>
            <div className='landing'>

                <h1>Welcome</h1>
                <Link to='/home'>
                    <button onClick={()=>fillUp(dispatch)}>Entrar</button>
                </Link>

            </div>

        </div>
    )
}

export default Landing