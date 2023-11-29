import { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Cards from '../../components/cards/Cards'
import './home.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Home</h1>
     <Navbar></Navbar>
     <Cards></Cards>

    </>
  )
}

export default Home