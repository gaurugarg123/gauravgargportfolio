import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ewtiz0e', 'template_4asdj79', form.current, 'lKvUuV-VbsKWBe9sF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
          <HiOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>gaurugarg2006@gmail.com</h5>
          <a href="mailto:gaurugarg2006@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
        </article>
        <article className="contact_option">
          <BsWhatsapp className='contact_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+91 7909809129</h5>
          <a href="https://api.whatsapp.com/send?phone=7909809129" target="_blank" rel="noreferrer">Send a message</a>
        </article>
        <article className="contact_option">
          <AiOutlineInstagram className='contact_option-icon'/>
          <h4>Instagram</h4>
          <h5>Gaurav Garg</h5>
          <a href="https://instagram.com/_toxic._.gaurav?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">Send a message</a>
        </article>
      </div>
      {/* END CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" id="" rows="7" required placeholder='Enter Your Message'></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      
    </div>
    </section>
  )
}

export default Contact