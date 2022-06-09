import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Fokhrul Islam Shahid</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/fokhrul-islam-shahid/"><BsLinkedin/></a>
        <a href="https://github.com/FIShahid"><FaGithub/></a>
        <a href="https://www.facebook.com/Undefined.sahid"><BsFacebook/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Fokhrul Islam Shahid. All rights reserved.</small>
      </div>
      </footer>
  )
}

export default Footer