import React from 'react'
import './portfolio.css'
import Grocery from '../../assets/grocery.JPG'
import Firstfiddle from '../../assets/firstfiddle.JPG'
import Textutils from '../../assets/textutils.JPG'
import Internship from '../../assets/internship.JPG'
import Search from '../../assets/searchenginebar.JPG'
import Guess from '../../assets/guess.JPG'
import Calculator from '../../assets/calculator.JPG'

function Portfolio() {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio_container">
      <article className='portfolio_item'>
        <div className="portfolio_item-img">
          <img src={Firstfiddle} alt="" />
        </div>
        <h3>This is a most popular resurant FirstFiddle clone Using React Js</h3>
        <div className="btns">
        <a href="https://github.com/gaurugarg123" className='btn' target="_blank">Github</a>
        <a href="https://firstfiddleclone.netlify.app/" target="_blank" className='btn btn-primary' >Visit Website</a>
        </div>
      </article>
      <article className='portfolio_item'>
        <div className="portfolio_item-img">
          <img src={Grocery} alt="" />
        </div>
        <h3>This a Grocery Store Website Using HTML,CSS and JS. You should visit there</h3>
        <div className="btns">
        <a href="https://github.com/gaurugarg123" className='btn' target="_blank">Github</a>
        <a href="https://gaurugarg123.github.io/mahakaligrocery.github.io/" target="_blank" className='btn btn-primary' >Visit Website</a>
        </div>
      </article>
      <article className='portfolio_item'>
        <div className="portfolio_item-img">
          <img src={Textutils} alt="" />
        </div>
        <h3>This TextUtils Help You to convert your text into diffrent facilities.</h3>
        <div className="btns">
        <a href="https://github.com/gaurugarg123" className='btn' target="_blank">Github</a>
        <a href="https://textutilsreact.netlify.app/" target="_blank" className='btn btn-primary' >Visit Website</a>
        </div>
      </article>
      <article className='portfolio_item'>
        <div className="portfolio_item-img">
          <img src={Internship} alt="" />
        </div>
        <h3>This is a Internship Clone of PNINFOSYS Software Company Using HTML and CSS</h3>
        <div className="btns">
        <a href="https://github.com/gaurugarg123" className='btn' target="_blank">Github</a>
        <a href="https://gaurugarg123.github.io/Internship__Form/" target="_blank" className='btn btn-primary' >Visit Website</a>
        </div>
      </article>
      <article className='portfolio_item'>
        <div className="portfolio_item-img">
          <img src={Search} alt="" />
        </div>
        <h3>This is a Product Search engine Bar Using HTML,CSS and JS</h3>
        <div className="btns">
        <a href="https://github.com/gaurugarg123" className='btn' target="_blank">Github</a>
        <a href="https://gaurugarg123.github.io/ProductSearchengineBar/" target="_blank" className='btn btn-primary' >Visit Website</a>
        </div>
      </article>
      <article className='portfolio_item'>
        <div className="portfolio_item-img">
          <img src={Guess} alt="" />
        </div>
        <h3>This is a Guess The Number Game Using HTML,CSS and JS</h3>
        <div className="btns">
        <a href="https://github.com/gaurugarg123" className='btn' target="_blank">Github</a>
        <a href="https://gaurugarg123.github.io/Guess_The_Number_Game/" target="_blank" className='btn btn-primary' >Visit Website</a>
        </div>
      </article>
      <article className='portfolio_item'>
        <div className="portfolio_item-img">
          <img src={Calculator} alt="" />
        </div>
        <h3>This is a Classic Calculator Using HTML,CSS and JS</h3>
        <div className="btns">
        <a href="https://github.com/gaurugarg123" className='btn' target="_blank">Github</a>
        <a href="https://gaurugarg123.github.io/Calculator/" target="_blank" className='btn btn-primary' >Visit Website</a>
        </div>
      </article>
      
    </div>
    </section>
  )
}

export default Portfolio