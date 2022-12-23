import React from 'react'
import './about.css'
import Me from '../../assets/Me.jpg'
import {TbAward} from 'react-icons/tb'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
         <div className="about__me-img">
          <img src={Me} alt="Me1" />
         </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Clients</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>
          <p>Hye ! This is Gaurav Garg. I am a Front-end Web Developer & Designer. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations. I intend to be a part of an organization where I can constantly learn and develop my technical skills and make best use of it for the growth of the organization. I look forward to establishing myself by adapting new technologies as well.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About