import React from 'react'
import logo from './logo.svg';
import Button from './Button';
import './NavBar.css'

import hamburger from './images/hamburger.png'
const NavBar = () => {
  
    return (
        <nav>
            <img src={logo} alt='brand' />
            <div className='links'>
                <div className='link'><a href='#link1'>Home</a> </div>
                <div className='link'><a href='#link2'>Features</a>  </div>
                <div className='link'><a href='#link3'>Products</a>  </div>
                <div className='link'><a href='#link4'>Review</a>  </div>
                <div className='link'><a href='#link5'>Contact</a>  </div>

            </div>
            <img className='menu' src={hamburger} alt='menu'/>
            <div className='btn-nav'>  <Button  /></div>
           
        </nav>
    )
}

export default NavBar