import React from 'react';
import "./project.css";
const project = () => {
  return (
    <div>
    <div className='proj-outer'>
      <p className='project-title'>Projects</p>
      <div className='cont'>
      <section  className='project-box'>
        <img src='https://harshanl.netlify.app/img/BMS.jpg' width="350" height="220" className='image'/>
        <p>Battery Management System</p>
        <p>Allowing the user to monitor the characteristics such as, monitoring the output voltage and the battery's remaining charge via the application</p>
      </section>
      <section  className='project-box'>
        <img src='https://www.pngitem.com/pimgs/m/519-5194865_html-css-js-html-5-hd-png-download.png' width="350" height="220" className='image'/>
        <p>Web Clones</p>
      </section>
      </div>
    </div>
    </div>
  )
}

export default project
