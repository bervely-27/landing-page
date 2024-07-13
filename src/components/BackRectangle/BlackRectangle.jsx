import React from 'react'
import img2 from './images/img2.png'
import './BlackRectangle.css'
const BlackRectangle = () => {
  return (
    <div className='rectangle'>
        <div className='image'>
            <img className='img2' src={img2} alt='dressing'/>
        </div>
        <div className='rectangle-text'>
            <h4>Long headline on two lines to turn your visitors into users and achieve more</h4>
            <p>Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean</p>
            <ul>
                <li>Showcase and embed your work with </li>
                <li>Publish across social channels in a click </li>
                <li>Sell your videos worldwide </li>
                <li>Embed your work with  </li>
            </ul>
        </div>
    </div>
  )
}

export default BlackRectangle