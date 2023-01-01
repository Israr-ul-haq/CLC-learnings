import React, { Component } from 'react';
import WOW from 'wowjs';

class OurCompetence extends Component {
  state = {};
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
      <section className='competence'>
        <div className='container'>
          <div className='competence__content'>
            <div className='competencetop'>
              <h2 className='sectiontitle competencetop__title wow focus-in-expand'>
                Our <span>Competence </span>
              </h2>
            </div>
            <div className='competencebottom'>
              <div className='clcfullcard'>
                <div className='row clcfullcard__row '>
                  <div className='col-md-6 clcfullcard__column wow flip-in-ver-left '>
                    <div className='clcfullcard__iamgecontainer'>
                      <img
                        className='clcfullcard__image'
                        src='./assets/images/competance_image.jpg'
                      />
                    </div>
                  </div>
                  <div className='col-md-6 clcfullcard__column'>
                    <div className='clcfullcard__content'>
                      <h3 className='clcfullcard__title wow focus-in-contract'>
                        QUALITY EDUCATION
                      </h3>
                      <p className='clcfullcard__subtitle wow fade-in-bottom'>
                        CLC has been providing quality education since 2000. In
                        2010, noticing a demand for our teachers abroad and
                        seeing how technology is making quality education more
                        accessible, we started providing online learning modules
                        on a small scale in various countries. We now want to
                        extend our services across the globe, making online
                        learning more efficient and cost effective.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='clcfullcard'>
                <div className='row clcfullcard__row clcfullcard__row--reverse'>
                  <div className='col-md-6 clcfullcard__column wow flip-in-ver-right'>
                    <div className='clcfullcard__iamgecontainer'>
                      <img
                        className='clcfullcard__image'
                        src='./assets/images/10.jpg'
                      />
                    </div>
                  </div>
                  <div className='col-md-6 clcfullcard__column '>
                    <div className='clcfullcard__content'>
                      <h3 className='clcfullcard__title wow focus-in-contract '>
                        ONLINE TEACHING
                      </h3>
                      <p className='clcfullcard__subtitle wow fade-in-bottom'>
                        We have dedicated the last 10 years to researching and
                        designing the best models of delivery for online
                        teaching; focusing on knowledge acquisition, and tutor
                        support cycles. Choose from a variety of tutors after
                        free trial lessons and start your online learning with
                        CLC now!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurCompetence;
