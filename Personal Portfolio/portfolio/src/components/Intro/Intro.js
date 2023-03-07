import React from 'react'
import "./Intro.css"
import image from "../../images/Image.jpg"

const Intro = () => {
  return (
    <div className='outer'>
      {/* <div className='Pic-Box'>

      </div> */}
      <div className='profile'>
        <img  className='profile' src={image}  alt="profile"/>
      </div>
      <div className='Basic-content'>
        {/* <p className='Head'>Hi!</p> */}
        <p className='hey'>HEY THERE!</p>
        <p className='Name'>I AM SANJAY J B</p>
        </div>
        <p className='Intro-Description' >Currently pursuing my  Bachelor's Degree in Electronics and Communication Engineering at Sri Eshwar College of Engineering.
My  short time goal is to get placed in a good company and my long time goal is to be in a good position in a company.</p>
<a href="https://drive.google.com/drive/folders/1jeLI8msUbL-KmiocWJferEXZO2sJtaPy?usp=sharing"><button className="Resume-link">Resume</button></a>
    </div>
  )
}

export default Intro
