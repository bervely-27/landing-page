import React from 'react'
import './ImgBg.css'
import img4 from './images/img4.png'
import image5 from './images/image5.png'
const ImgBg = () => {
  return (
    <div>
      <div className='headline'>
        <img className='image4' src={img4} alt='bg' />

      </div>
      <div className='last'>
        <img className='image5' src={image5} alt='bg'/>
        </div>
    </div>

  )
}

export default ImgBg