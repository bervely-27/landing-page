import React from 'react'
import Button from '../Button/Button'
import img1 from './images/img1.png'
import './Hero.css'
const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-text'>
        <h1>Medium length display headline</h1>
        <p>Separated they live in Bookmarks right at the coast of the famous Semantics, large language </p>
        <div className='btn-hero'>
          <Button />
          <p>5,000 people like you have<br></br> purchased this product!</p>
        </div>
      </div>
      <div className='img-hero'>
        <img src={img1} alt='sofa' />
      </div>
    </section>
  )
}

export default Hero