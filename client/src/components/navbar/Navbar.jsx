import { useState } from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='search-box'>
        <form>
          <input placeholder='Buscar pais'></input>
          <button>Search</button>
        </form>

    </div>

    
  )
}

export default Navbar