import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'
// import Edudetu from '../Edu/Edudetail'
// import {useNavigate} from 'react-router-dom';
import { navigateDown } from 'reveal';

export default function navbar() {
    // const handleClickScroll = () => {
    //     const element = document.getElementsByClassName('section-1');
    //     if (element) {
    //       // 👇 Will scroll smoothly to the top of the next section
    //       element.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   };
   
  return (
    <>
    <div>
      <section className='nav-bar'>
        {/* <Link to='/Education'><li>Education</li></Link> */}
        {/* <p>Contact</p>
        <p>Projects</p>
        <p>Languages</p> */}
      </section>
      {/* <div id='section1'><Edudetail/></div> */}
    </div>
    {/* <Edudetu/> */}
    </>
  )
}
