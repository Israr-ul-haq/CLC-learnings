import React, { Component } from 'react';
import WOW from 'wowjs';
import Menu from '../Menu';
class LMS extends Component {
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
      <div>
        <Menu />
        <section className='homehero'>
          <div className='homehero__content'>
            <div
              className='homeheroitem w_lmsbanner'
              style={{
                backgroundImage:
                  'url(./assets/images/banner_Learning_Management_System.jpg)',
              }}
            >
              <div className='container'>
                <div className='homeheroitem__content w_title'>
                  <h1 className='homeheroitem__title homeheroitem__title--white w_lmstitle wow text-focus-in'>
                    <span className='w_bold'>Learning</span>
                    <span className='w_reg'>Management System</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='competence'>
          <div className='container'>
            <div className='competence__content'>
              <div className='competencebottom'>
                <div className='clcfullcard'>
                  <div className='clcfullcard'>
                    <div className='row clcfullcard__row'>
                      <div className='col-md-6 clcfullcard__column wow flip-in-ver-left'>
                        <div className='clcfullcard__iamgecontainer'>
                          <img
                            className='clcfullcard__image'
                            src='./assets/images/lms_about.jpg'
                          />
                        </div>
                      </div>
                      <div className='col-md-6 clcfullcard__column'>
                        <div className='clcfullcard__content'>
                          <h3 className='clcfullcard__title wow focus-in-contract'>
                            About <span className='w_color'>LMS</span>
                          </h3>
                          <p className='clcfullcard__subtitle wow fade-in-bottom'>
                            Our profound Learning Management System (LMS),
                            completely AI based, ensures the provision of an app
                            to the students, as well as their parents, for a
                            thorough tracking of their academic performances,
                            highlighting areas of subjects that need more work,
                            and those topics which the student has gained
                            maximum distinction over. It provides a deep
                            analysis of the complete academic performance of the
                            students.
                            <br />
                            <br /> Our top notch screening process makes sure
                            that every student’s profile is detailed with
                            analysis for deriving a superior teaching structure
                            for them. Coupled with the technologically adept
                            Learning Management System (LMS), rest assured about
                            the incoming series of good grades, and test
                            results, your way.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='clcfullcard'>
                  <div className='row clcfullcard__row clcfullcard__row--reverse w_rowalign'>
                    <div className='col-lg-6 clcfullcard__column w_lmsimg2 wow flip-in-ver-right'>
                      <div className='clcfullcard__iamgecontainer w_imgcntr'>
                        <img
                          className='clcfullcard__image w_lms02'
                          src='./assets/images/personalized.jpg'
                        />
                      </div>
                    </div>
                    <div className='w_container'>
                      <div className='col-md-6 clcfullcard__column w_columns'>
                        <div className='clcfullcard__content'>
                          <h3 className='clcfullcard__title w_feattitle wow focus-in-contract '>
                            Personalised learning app integrated with
                            <span className='w_color'> LMS</span>
                          </h3>
                        </div>
                        <div className='row'>
                          <div className='col-md-3 whyclcbottom__column w_inncol wow fade-in-bottom'>
                            <div className='clccard w_card'>
                              <div className='clccard__imagecontainer'>
                                <img src='./assets/images/icon_24-hours.svg' />
                              </div>
                              <h3 className='clctitle w_cardtitles'>
                                24/7 Connectivity
                              </h3>
                              <p className='clc__subtitle w_cardtitles'>
                                Find a quick fix to your problem, any time of
                                the day.
                              </p>
                            </div>
                          </div>
                          <div className='col-md-3 whyclcbottom__column w_inncol wow fade-in-bottom'>
                            <div className='clccard w_card'>
                              <div className='clccard__imagecontainer'>
                                <img src='./assets/images/icon_hourglass.svg' />
                              </div>
                              <h3 className='clctitle w_cardtitles'>
                                Wall Posts
                              </h3>
                              <p className='clc__subtitle w_cardtitles'>
                                Sending out relevant material to students to
                                avoid information overload.
                              </p>
                            </div>
                          </div>
                          <div className='col-md-3 whyclcbottom__column w_inncol wow fade-in-bottom'>
                            <div className='clccard w_card'>
                              <div className='clccard__imagecontainer'>
                                <img src='./assets/images/icon_clock.svg' />
                              </div>
                              <h3 className='clctitle w_cardtitles'>
                                Reminders
                              </h3>
                              <p className='clc__subtitle w_cardtitles'>
                                Sends out automatic reminders to students for
                                due assignments so they don’t miss out on
                                anything important.
                              </p>
                            </div>
                          </div>
                          <div className='col-md-3 whyclcbottom__column w_inncol wow fade-in-bottom'>
                            <div className='clccard w_card'>
                              <div className='clccard__imagecontainer'>
                                <img src='./assets/images/icon_consumer discuss.svg' />
                              </div>
                              <h3 className='clctitle w_cardtitles'>
                                Personalized Learning
                              </h3>
                              <p className='clc__subtitle w_cardtitles'>
                                CLC ensures self-paced learning. Students can
                                revisit the lectures whenever they want,
                                focusing on the areas where they need more
                                attention
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LMS;
