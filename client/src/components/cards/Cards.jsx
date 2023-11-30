import { useState } from 'react'
import Card from '../card/Card'
import './cards.css'


function Cards({ allCountries }) {
  console.log("allCountries[0] " , allCountries[0])
  const countryList = allCountries

  return (
    <div className='cards-list'>
      {countryList.map((country) => (
        <Card country={country} />
      )
      )}


      {/* {countryList?.map((country)=>(
        <Card country={country}/>
      ))} */}

    </div>
  )
}

export default Cards;