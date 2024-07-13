import React from 'react'
import logo from './images/logo.png'
import { IoIosSend } from "react-icons/io";
import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <section className='footer'>
                <div>
                    <img className='image-footer' src={logo} alt='brand' />
                </div>
                <div className='brand'>

                    <div className='colums'>
                        <h6>First column</h6>
                        <p>First page</p>
                        <p>Second page</p>
                        <p>Third</p>
                        <p>Fourth</p>
                    </div>
                    <div className='colums'>
                        <h6>Second</h6>
                        <p>Fifth page</p>
                        <p>sixth</p>
                        <p>seventh</p>

                    </div>
                    <div className='colums'>
                        <h6>Third</h6>
                        <p>Fifth page</p>
                        <p>sixth</p>
                        <p>seventh</p>

                    </div>
                </div>

                <div className='look'>
                    <h6>
                        Subscribe
                    </h6>
                    <div className='search'>
                        <input className='mail' type='text' placeholder='Enter email' />
                        <IoIosSend className='icon' />
                    </div>
                    <p>Join our newsletter to stay up to date on features and releases</p>
                </div>
            </section>
        </footer>


    )
}

export default Footer