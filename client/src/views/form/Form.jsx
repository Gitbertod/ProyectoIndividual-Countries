import { useState } from 'react'
import './Form.css'

function Form() {

    return (

        <div>
            <h2>Crea tu actividad</h2>
            <form>
                <div>
                    <label>Nombre</label>
                    <input type='text' />
                </div>

                <div>
                    <label for="Dificultad">Dificultad</label>
                    <select name='Dificultad' required size={1}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>

                <div>
                    <label>Duracion</label>

                </div>
                <div>
                    <label for="Temporada">Temporada</label>
                    <select name='Temporada' required size={1}>
                        <option value={"Invierno"}>Invierno</option>
                        <option value={"Verano"}>Verano</option>
                        <option value={"Otoño"}>Otoño</option>
                        <option value={"Primavera"}>Primavera</option>
                    </select>

                </div>
                <button className='btn-search'>Crear actividad</button>

            </form>
        </div>

    )
}

export default Form 