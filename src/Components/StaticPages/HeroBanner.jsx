import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';

class HeroBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: '',
    };
  }

  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
    }).init();
  }

  render() {
    const options = {
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 10000,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    };

    return (
      <div className='herocarousel'>
        <OwlCarousel options={options}>
          <div
            className='homeheroitem'
            style={{ backgroundImage: `url(./assets/images/banner_home.jpg)` }}
          >
            <div className='container'>
              <div className='homeheroitem__content'>
                <h1 className='homeheroitem__title homeheroitem__title--white wow text-focus-in'>
                  Online Tutoring in <span>Multiple Formats</span> for GCSE,
                  IGCSE, A Levels, IB (DP),{' '}
                  <span>High School & AP Students</span>
                </h1>
                <div className='w_bannerbtns1'>
                  <Link
                    to='/Curriculum'
                    to={{
                      pathname: '/Curriculum',
                    }}
                  >
                    <button className='w_enroll mr-3'>Enroll Now</button>
                  </Link>
                  <button
                    className='w_btnworks1'
                    data-toggle='modal'
                    data-target='#howitworksmodal'
                  >
                    <Link to='/howitswork' style={{ color: 'white' }}>
                      How It Works
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className='homeheroitem'
            style={{ backgroundImage: `url(./assets/images/banner_home_s.jpg)` }}
          >
            <div className='container'>
              <div className='homeheroitem__content w_2ndbannercontent'>
                <h1 className='homeheroitem__title w_2ndbannertxt homeheroitem__title--black wow text-focus-in'>
                  Online Tutoring in Multiple Formats for{' '}
                  <span className='w_boldblack'> Primary , Middle School </span>{' '}
                  (KS2 & KS3),{' '}
                  <span className='w_boldblack'>American Curriculum </span> (6 &
                  8) & IB (PYP & MYP) Students
                </h1>
                <div className='w_bannerbtns2'>
                  <Link
                    to='/Curriculum'
                    to={{
                      pathname: '/Curriculum',
                    }}
                  >
                    <button className='w_enroll'>Enroll Now</button>
                  </Link>
                  <button
                    className='w_btnworks'
                    data-toggle='modal'
                    data-target='#howitworksmodal'
                  >
                    <Link to='/howitswork' style={{ color: 'black' }}>
                      How It Works
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}

export default HeroBanner;
