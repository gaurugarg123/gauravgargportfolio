import React from 'react'
import {BsLinkedin,BsInstagram,BsGithub} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/gaurav-garg-6388b1217" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/gaurugarg123" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://instagram.com/_toxic._.gaurav?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials