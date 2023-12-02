import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../components/cards/Cards';
import Navbar from '../../components/navbar/Navbar';
import { getCountries } from '../../redux/actions/actions';
import './home.css'

function Home() {
  const {allCountries} = useSelector((state) => state)
  const dispatch = useDispatch();

  useEffect (()=>{
    getCountries(dispatch)
  },[])
  
  
  return (
    <div className='home'>
      <h2 className='home-title'>Home</h2>
      <Navbar className = 'searchbar'></Navbar>
      <Cards allCountries={allCountries}/>
    </div>
  )
}

export default Home