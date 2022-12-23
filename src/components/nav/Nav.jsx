import {React,useState} from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai' 
import {BiBookAlt} from 'react-icons/bi' 
import {RiServiceLine} from 'react-icons/ri' 
import {TiMessages} from 'react-icons/ti' 

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
    <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a> 
    <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser/></a> 
    <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt/></a> 
    <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a> 
    <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiMessages/></a> 
    </nav>
  )
}

export default Nav