import React from 'react'
import Gaurav_garg_Resume from '../../assets/Gaurav_garg_Resume.docx'
function CTA() {
  return (
    <div className='cta'>
    <a href={Gaurav_garg_Resume} download className='btn'>Download CV</a>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA