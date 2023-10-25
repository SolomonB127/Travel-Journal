import React from 'react'
import Globe from './Images/globe.png'
const NavBar = () => {
  return (
    <section>
      <div className='nav--bar'>
        <img src= { Globe } alt="" />
        <h3>Travel Journal</h3>
      </div>
    </section>
  )
}

export default NavBar