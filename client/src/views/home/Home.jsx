import { useState } from 'react'

import Cards from '../../components/cards/Cards';
import Navbar from '../../components/navbar/Navbar';
import './home.css'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Navbar></Navbar>
      <Cards></Cards>
    </div>
  )
}

export default Home