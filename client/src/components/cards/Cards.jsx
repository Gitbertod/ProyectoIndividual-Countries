import { useState } from 'react'
import Card from '../card/card'
import './cards.css'


function Cards() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card></Card>

    </>
  )
}

export default Cards