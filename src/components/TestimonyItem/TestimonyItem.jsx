import React from 'react'
import img3 from './images/img3.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './TestimonyItem.css'
const Testimony = () => {
  return (
    <div className='item'>
        <p>“A testimonial describing what the person thinks about this service, product or startup in general.”</p>
      <div className='pic'>
      <img src={img3} alt='a girl'/>
            <h6>Name Surname</h6>
            <div className='description'>
            <span>Description</span>
            <div className='media'>
            <FaFacebookSquare />
            <FaTwitter />
            </div>
      </div>
            
            
       
            </div>
           
    </div>
    
  )
}

export default Testimony