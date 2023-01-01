import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <div id='home' className='herocarousel'>
      <div
        className='homeheroitem'
        style={{
          backgroundImage: `url(./assets/images/banner_homelanding.jpg)`,
        }}
      >
        <div className='container'>
          <div className='homeheroitem__content w_2ndbannercontent'>
            <h1 className='homeheroitem__title w_2ndbannertxt homeheroitem__title--black wow text-focus-in'>
              Learn the
              <span className='w_boldblack'> British Curriculum </span>{' '}
              <br></br> (KS1, KS2, KS3, O Level & A Level) <br></br> From
              Anywhere Anytime
            </h1>
            <div className='w_bannerbtns2'>
              <button className='w_enroll'>
                <a href='#enquire' className='nav-scroll'>
                  Enroll Yourself
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
