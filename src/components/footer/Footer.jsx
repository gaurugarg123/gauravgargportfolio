import React from 'react'
import './footer.css'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'


function Footer() {
  return (
    <footer>
      <a href="/" className='footer_logo'>GAURAV GARG</a>
      <ul className="permalinks">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="socials">
      <a href="https://www.linkedin.com/in/gaurav-garg-6388b1217" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/gaurugarg123" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://instagram.com/_toxic._.gaurav?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><BsInstagram/></a>
      </div>
      <div className="copyright">
        <small>&copy; GAURAV GARG. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer