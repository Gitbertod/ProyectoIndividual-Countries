import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../components/cards/Cards';
import Navbar from '../../components/navbar/Navbar';
import './home.css'

function Home() {
  const {allCountries} = useSelector((state) => state)
  const dispatch = useDispatch();
  
  console.log("Countries home: ",allCountries)
  return (
    <div className='home'>
      <h2 className='home-title'>Home</h2>
      <Navbar></Navbar>
      <Cards allCountries={allCountries}/>
    </div>
  )
}

export default Home