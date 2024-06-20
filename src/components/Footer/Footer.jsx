import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-container-top">
            <div className="footer-flex">
                <div className="footer-get">
                    <span className='title'>
                        Get In Touch
                    </span>
                    <p>+012-345-6789</p>
                    <p>Pizzalicious@contact.com</p>
                    <p>9889 lorem ipsum street, Pellentesque, CA, USA</p>
                </div>
                <div className="footer-pizza">
                    <img src={assets.pizzalicious} alt="" />
                    
                </div>
                <div className="footer-hours">
                    <span className='title'>
                        Opening Hours
                    </span>
                    <p>Monday/Friday 9:00-23:00</p>
                    <p>Saturday 10:00-21:00</p>
                    <p>Weekend Closed</p>
                </div>
            </div>
        </div>
        <div className="footer-container-mid">
            <div className="footer-pizza-icon">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-tiktok"></i>
                <i class="fa-brands fa-medium"></i>
            </div>
        </div>
        <div className="footer-container-bottom">
            <p>Copyright Dotcreativemarket</p>
        </div>
    </div>
  )
}

export default Footer