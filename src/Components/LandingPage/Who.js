import React from 'react';
import { Link } from 'react-router-dom';
function Who() {
  return (
    <div
      id='whoweare'
      className='who'
      style={{
        backgroundImage: 'url(./assets/images/whoimg.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='container h-100'>
        <div className='who_content h-100'>
          <div className='who_left'>
            <h2 className='who_title'>
              Who <span>We Are</span>
            </h2>
            <p className='who_description'>
              At CLC Online Learning, We follow the internationally accepted
              curriculum of O Levels and A Levels for it's students. We make
              sure that the students learn from one of the best and top most
              teachers of the all subjects. Our teachers deliver live sessions
              for the students on a chedule designed and tailored exclusively
              for them. We provide our students with the utmost ease and
              convenience to learn from anywhere and anytime with flexible
              timings and schedule.
            </p>
            <div className='w_bannerbtns1'>
              <button className='w_enroll mr-3'>
                {' '}
                <a href='#enquire' className='nav-scroll'>
                  Enroll Yourself
                </a>
              </button>
            </div>
          </div>
          <div className='who_right'></div>
        </div>
      </div>
    </div>
  );
}

export default Who;
