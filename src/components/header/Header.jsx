import React from 'react'
import './header.css'
import CTA from './CTA'
import ME1 from "../../assets/Me1.jpg"
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Gaurav Garg</h1>
        <h4 className="text-light">
          Fullstack Developer
        </h4>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME1} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>&gt;&gt;&gt; Scroll Down &gt;&gt;&gt;</a>

      </div>
    </header>
  )
}

export default Header