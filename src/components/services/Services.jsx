import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>User stories.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>User flow charts, diagrams.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Wireframes.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Content strategy.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Information architecture.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Brand and design system development.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Design technology consulting.</p>
          </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Web Application / Business Software.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Mobile Application.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Web Hosting.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Portfolio Showcase.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Portfolio Showcase.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>User Experience (UX) Design.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>User Interface (UI) Design.</p>
          </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPER */}
        {/* <article className="service">
          <div className="service__head">
            <h3>Content Writer</h3>
          </div>
          <ul className="service__list">
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </li>
          </ul>
        </article> */}
        {/* END OF Content writer*/}
      </div>
    </section>
  )
}

export default Services