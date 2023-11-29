import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/home/Home'
import Detail from './views/detail/detail'
import Form from './views/form/Form'

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/detail/:id' element={<Detail></Detail>}></Route>
        <Route path='/form' element={<Form></Form>}></Route>
      </Routes>
    </>
  )
}
export default App
