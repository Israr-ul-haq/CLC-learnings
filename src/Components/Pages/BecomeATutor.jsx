import React, { Component } from 'react';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';
import Menu from '../Menu';
class BecomeATutor extends Component {
  state = {
    bool: '',
  };
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
          <div className='getstartedhero__content'>
            <div
              className='getstartedheroitem'
              style={{
                backgroundImage:
                  'url(./assets/images/banner_become_a_tutor.jpg)',
              }}
            >
              <div className='container h-100'>
                <div className='getstartedheroitem__content h-100'>
                  <h1 className='getstartedheroitem__title getstartedheroitem__title--black wow text-focus-in'>
                    <span className='w_boldblack'>Work</span> on your terms,
                    we’ll have you <span className='w_boldblack'>tutoring</span>{' '}
                    in no time!
                  </h1>
                  <p className='homeheroitem__subtitle homeheroitem__subtitle--black wow fade-in-bottom'>
                    Join our cause today and help children improve their studies
                    drastically.
                  </p>
                  <Link to='/TutorRegister'>
                    <div className='w_bannerbtns'>
                      <button className='w_enroll mt-4'>Apply Now</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='getstartedcard'>
          <div className='container'>
            <div className='getstartedcard__content'>
              <div className='clcfullcard'>
                <div className='row clcfullcard__row '>
                  <div className='col-md-6 clcfullcard__column wow flip-in-ver-left'>
                    <div className='clcfullcard__iamgecontainer'>
                      <img
                        className='clcfullcard__image'
                        src='./assets/images/getstarted1.jpg'
                      />
                    </div>
                  </div>
                  <div className='col-md-6 clcfullcard__column'>
                    <div className='clcfullcard__content'>
                      <h3 className='clcfullcard__title wow focus-in-contract'>
                        Flexibility like never before
                      </h3>
                      <p className='clcfullcard__subtitle wow fade-in-bottom'>
                        Classes, Assignments, Exams, Get Togethers and What not.
                        Students fight on these different fronts all the way
                        through University, CLC Online Learning understands this
                        and allows the tutors to fit classes into their
                        schedule, Be it day or night, whenever you see fit for
                        as long as you like.
                      </p>
                      <div className='w_bannerbtns'>
                        <Link to='/TutorRegister'>
                          <button className='w_reg mt-3'>Register</button>
                        </Link>
                      </div>
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
                        src='./assets/images/getstarted2.jpg'
                      />
                    </div>
                  </div>
                  <div className='col-md-6 clcfullcard__column '>
                    <div className='clcfullcard__content'>
                      <h3 className='clcfullcard__title wow focus-in-contract '>
                        Become someone's role model
                      </h3>
                      <p className='clcfullcard__subtitle wow fade-in-bottom'>
                        With the help of our service, you can help confused
                        students who are looking for guidance they would
                        normally not gain from elsewhere. Your wisdom will go a
                        long way in leading the student to a bright future.
                      </p>
                      <div className='w_bannerbtns'>
                        <Link to='/TutorRegister'>
                          <button className='w_reg mt-3'>Register</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='clcfullcard'>
                <div className='row clcfullcard__row '>
                  <div className='col-md-6 clcfullcard__column wow flip-in-ver-left'>
                    <div className='clcfullcard__iamgecontainer'>
                      <img
                        className='clcfullcard__image'
                        src='./assets/images/getstarted3.jpg'
                      />
                    </div>
                  </div>
                  <div className='col-md-6 clcfullcard__column'>
                    <div className='clcfullcard__content'>
                      <h3 className='clcfullcard__title wow focus-in-contract'>
                        Earn experience and something great to add to your CV
                      </h3>
                      <p className='clcfullcard__subtitle wow fade-in-bottom'>
                        As a private tutor, you are the sailor of your own ship.
                        You will earn experience with students and hone your
                        scheduling capabilities. Communication is another skill
                        you can earn from tutoring online. All these skills will
                        shape you into a suitable future employee wherever you
                        work.
                      </p>
                      <div className='w_bannerbtns'>
                        <Link to='/TutorRegister'>
                          <button className='w_reg mt-3'>Register</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='clcfullcard clcfullcard--fullwidth'>
                <div className='row clcfullcard__row clcfullcard__row--reverse'>
                  <div className='col-md-12 clcfullcard__column wow fade-in-bottom'>
                    <div className='clcfullcard__iamgecontainer'>
                      <img
                        className='clcfullcard__image'
                        src='./assets/images/getstarted4.jpg'
                      />
                    </div>
                  </div>
                  <div className='col-md-12 clcfullcard__column'>
                    <div className='clcfullcard__content'>
                      <h3 className='clcfullcard__title wow focus-in-contract'>
                        Our support will always…
                      </h3>
                      <p className='clcfullcard__subtitle wow fade-in-bottom'>
                        We hope for you to become an outstanding tutor, and so
                        we will support you every step of the way. Our clients
                        are waiting for your guidance, and the learning space we
                        have nurtured makes teaching feel like second nature to
                        aspiring tutors. Have a problem you can’t seem to fix?
                        We are always a mouse click away to answer your queries.
                      </p>
                      <div className='w_bannerbtns'>
                        <Link to='/TutorRegister'>
                          <button className='w_reg mt-3'>Register</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='howstarted'
          style={{ backgroundImage: 'url(./assets/images/doodle.svg)' }}
        >
          <div className='container'>
            <div className='howstarted__content'>
              <div className='howstartedtop'>
                <h2 className='sectiontitle howstartedtop__title wow focus-in-expand '>
                  Great, how do I get <span>started</span>
                </h2>
                <p className='sectionsubtitle howstartedtop__subtitle wow fade-in-bottom'>
                  Our recruitment journey is very easy, just follow these 4
                  steps and you are on your way to teach the first student we
                  find for you.
                </p>
              </div>
              <div className='howstartedbottom'>
                <div className='row howstartedbottom__row'>
                  <div className='col-lg-4 col-md-4 col-sm-6 howstartedbottom__column wow fade-in-bottom'>
                    <div className='clccard'>
                      <div className='clccard__imagecontainer'>
                        <img src='./assets/images/icon_application.svg' />
                      </div>
                      <h3 className='clctitle'>Online Application</h3>
                      <p className='clc__subtitle'>
                        Make your Account and choose what subject you have an
                        affinity with.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-6 howstartedbottom__column wow fade-in-bottom'>
                    <div className='clccard'>
                      <div className='clccard__imagecontainer'>
                        <img src='./assets/images/icon_demo_class.svg' />
                      </div>
                      <h3 className='clctitle'>Demo class</h3>
                      <p className='clc__subtitle'>
                        Conduct a demo class with our students which will be
                        monitored by our team of professionals.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-6 howstartedbottom__column wow fade-in-bottom'>
                    <div className='clccard'>
                      <div className='clccard__imagecontainer'>
                        <img src='./assets/images/icon_review.svg' />
                      </div>
                      <h3 className='clctitle'>CLC Review</h3>
                      <p className='clc__subtitle'>
                        A formal interview with our panel of experts
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-6 howstartedbottom__column wow fade-in-bottom'>
                    <div className='clccard'>
                      <div className='clccard__imagecontainer'>
                        <img src='./assets/images/icon_teaching.svg' />
                      </div>
                      <h3 className='clctitle'>Begin Teaching</h3>
                      <p className='clc__subtitle'>
                        Finish our training course online, and undergo a
                        background check
                      </p>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 col-md-4 col-sm-6 howstartedbottom__column wow fade-in-bottom'
                    data-wow-delay='.5s'
                  >
                    <div className='clccard'>
                      <div className='clccard__imagecontainer'>
                        <img src='./assets/images/icon_work.svg' />
                      </div>
                      <h3 className='clctitle'>Get to work</h3>
                      <p className='clc__subtitle'>
                        Your tutor profile is now complete, start tutoring at
                        your own time.
                      </p>
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

export default BecomeATutor;
