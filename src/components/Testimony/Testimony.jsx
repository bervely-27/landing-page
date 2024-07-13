import React from 'react'
import TestimonyItem from '../TestimonyItem/TestimonyItem'
import './Testimony.css'

const Testimony = () => {
  return (
    <div className='testimony'>

      <div className='item1'>
        <TestimonyItem />
      </div>
      <TestimonyItem />
      <div className='ellipse-review'>
        <div className='ellipse1'></div>
        <div className='ellipse2'></div>
        <div className='ellipse1'></div>
      </div>
      <div className='item1'>
        <TestimonyItem />
      </div>


    </div>
  )
}

export default Testimony