import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Header.css';

function Header() {
  return (
    <div className='hero-container'>
      {/* <img src="/images/build.jpg" alt="background"/> */}
         <h1>INTEGRATED INSTITUTE OF TECHNOLOGY</h1>
      <p>IIT Dwarka was established in the year 2008 by the goverment of NCT Delhi. The college is located at sector-9 Dwarka.
The college records a phenomenal contribution to the world of Engineering and Technology.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Visit Us To enroll Now <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Header;