import React from 'react'
import pin from './Images/pin.svg'
const Card = (props) => {
  return (
    <section className='Card--container'>
      <div className='cards'>
        <img src= {props.item.cardImg} alt=""  width={300}/> 
        <div className='cards--props'>
          <div className='card--location'>
          <img src= {pin} alt="" />
          <h4>{props.item.Location}</h4> 
          <a href={props.item.mapUrl}
          target='_blank'
          rel='nonreferrer'>View on Google Maps Link</a>
          </div>
          <h1>{props.item.title}</h1>
          <h5>{props.item.timePeriod}</h5>
          <p>{props.item.description}</p>
        </div>
      </div>
    </section>
  )
}

export default Card