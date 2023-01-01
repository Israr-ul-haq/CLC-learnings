import React, { Component } from 'react';
import WOW from 'wowjs';
import PremiumTutors from '../StaticPages/PremiumTutors';
import SubjectSpecialists from '../StaticPages/SubjectSpecialists';
import Menu from '../Menu';
class Faculty extends Component {
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
      <>
       <Menu />
        <section className=''>
          <div className='homehero__content'>
            <div
              className='homeheroitem w_facbanner'
              style={{
                backgroundImage:
                  'url(./assets/images/banner_teacher_faculty.jpg)',
              }}
            >
              <div className='container'>
                <div className='homeheroitem__content w_titlefac'>
                  <h1 className='homeheroitem__title homeheroitem__title--white w_lmstitle wow text-focus-in'>
                    <span className='w_bold'>Teaching</span>
                    <span className='w_reg'>Faculty</span>
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
                            src='./assets/images/subject_specialist.jpg'
                          />
                        </div>
                      </div>
                      <div className='col-md-6 clcfullcard__column'>
                        <div className='clcfullcard__content'>
                          <h3 className='clcfullcard__title wow focus-in-contract'>
                            Subject Specialists
                          </h3>
                          <p className='clcfullcard__subtitle wow fade-in-bottom'>
                            Tutors who have more than 10 years of experience in
                            the field of teaching around the world,
                            internationally and on a national level, who have
                            been at service in the top schools and universities
                            in Pakistan, UK, USA, and many more.
                          </p>
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
                          src='./assets/images/subject_specialist1.jpg'
                        />
                      </div>
                    </div>
                    <div className='col-md-6 clcfullcard__column'>
                      <div className='clcfullcard__content'>
                        <h3 className='clcfullcard__title wow focus-in-contract'>
                          Subject Premium Tutors
                        </h3>
                        <p className='clcfullcard__subtitle wow fade-in-bottom'>
                          CLC easily stands out with its highly competent,
                          experienced team of professionals who are readily
                          available for academic assistance at the student’s
                          beck and call, without even a whiff of delay! Our
                          renowned and knowledgeable UK examination board
                          affiliated tutors from across the globe are selected
                          after thorough verification, screening and
                          authenticating results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SubjectSpecialists />
        <PremiumTutors />
      </>
    );
  }
}

export default Faculty;
