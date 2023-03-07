import React from 'react';
// import Link from '../../images/Link';
import Python from "../../images/python.svg";
import Java from "../../images/java.svg";
import C from "../../images/c.svg"
import javascript from "../../images/javascript.svg";
import reaclogo from "../../images/react (2).svg";
import html5 from "../../images/html5 (1).svg";
import css from "../../images/css3.svg";
import "./Content.css";
const content = () => {
  return (
    <div className='software-div'>
        <p className='Heading'>Software:</p>
        <section className='languages'>
        <div className='java'>
        <img src={Java} alt="JavaLog" className='Javalog' />
          <p>Java</p>
        </div>
        <div className='java'>
        <img src={C} alt="CL" className='Clang'/>
        <p>C</p>
        </div>
        <div className='java'>
        <img src={javascript} alt="Jslogo"  className='JS'/>
          <p>Javascript</p>
        </div>
        <div className='java'>
        <img src={Python} alt="logo" className='PyLogo'/>
          <p>Python</p>
        </div>
        <div className='java'>
        <img src={reaclogo} alt="reactLogo" className='reactLogo'/>
          <p>React</p>
        </div>
        <div className='java'>
        <img src={html5} alt="JavaLog" className='Javalog' />
          <p>HTML</p>
        </div>
        <div className='java'>
        <img src={css} alt="JavaLog" className='Javalog' />
          <p>CSS</p>
        </div>
        </section>
    </div>
  )
}

export default content
