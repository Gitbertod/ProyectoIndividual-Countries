import { useState } from 'react'
import Home from './views/home/home'
import Detail from './views/detail/detail'
import Form from './views/form/Form'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Detail/>
      <Form/>
    </>
  )
}

export default App
