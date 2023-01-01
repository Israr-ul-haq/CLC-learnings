import React from 'react';
import Tabs from './Tabs';
function Choose() {
  return (
    <div>
      <div
        id='chooseus'
        className='choose'
        style={{
          backgroundImage: 'url(./assets/images/doodle_landing.svg)',
          backgroundSize: '550px 400px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
        }}
      >
        <div className='container h-100'>
          <div className='choose_content h-100'>
            <div className='choose_top'>
              <h2 className='choose_title'>
                WHY SHOULD YOU CHOOSE <br></br>{' '}
                <span> CLC ONLINE LEARNING?</span>
              </h2>
              <p className='choose_description'>
                CLC Online Learning is unique in its approach towards teaching,
                It offers accessibility and flexibility of timings to all the
                students. It offers access to online lectures anytime at the
                comfort of home or anywhere with a stable internet connection.
              </p>
            </div>
            <div className='choose_bottom'>
              <Tabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
