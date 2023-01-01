import React, { Component } from 'react';
import WOW from 'wowjs';
import GroupsTutoring from './Accordion/GroupsTutoring';
import HelpTest from './Accordion/HelpTest';
import HomeworkHelp from './Accordion/HomeworkHelp';
import OnetoOneServices from './Accordion/OnetoOneServices';
import Menu from '../Menu';
class HowItWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    return (
      <div>
        <Menu />
        <section>
          <div className='howitsworkhero__content'>
            <video
              className='banner-video'
              width='100%'
              height='auto'
              poster='./assets/images/video-placeholder.png'
              controls='*'
            >
              <source
                src='./assets/images/VID-20210105-WA0009.mp4'
                type='video/mp4'
              />
              <source
                src='./assets/images/VID-20210105-WA0009.mp4'
                type='video/ogg'
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
        <section
          className='getstarted'
          style={{ backgroundImage: 'url(./assets/images/doodle.svg)' }}
        >
          <div className='container'>
            <div className='getstarted__content'>
              <div className='getstartedtop'>
                <h2 className='sectiontitle getstartedtop__title wow focus-in-expand '>
                  To Get <span>Started</span>
                </h2>
                <p className='sectionsubtitle getstartedtop__subtitle wow fade-in-bottom'>
                  Pick a subject & choose from our range of tutoring formats
                </p>
              </div>
              <div className='col-md-12'>
                <div className='accordionsection__content w_getstarted'>
                  <OnetoOneServices />
                  <GroupsTutoring />
                  <HomeworkHelp />
                  <HelpTest />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HowItWorks;
