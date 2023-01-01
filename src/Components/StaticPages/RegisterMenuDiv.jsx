import React, { Component } from 'react';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';

class RegisterMenuDiv extends Component {
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
      <section className='register'>
        <div className='register__content'>
          <div
            className='col-md-6 col-sm-12 text-center registerleft wow flip-in-ver-left pt-5 pb-5'
            style={{ backgroundImage: 'url(./assets/images/img.jpg)' }}
          >
            <img
              className='regleftimg wow focus-in-expand'
              src='./assets/images/regicon_student (1).svg'
              alt=''
            />
            <div className='regstudent'>
              <h6 className='sectiontitle registerleft__title wow focus-in-expand'>
                <span className='w_bold'>REGISTER AS</span> A STUDENT
              </h6>
              <Link
                to='/Curriculum'
                to={{
                  pathname: '/Curriculum',
                }}
              >
                <button
                  type='submit'
                  className='btn btn-secondary register__submitbtn'
                >
                  REGISTER
                </button>
              </Link>
            </div>
          </div>
          <div
            className='col-md-6  col-sm-12 text-center registerright wow flip-in-ver-left pt-5 pb-5'
            style={{ backgroundImage: 'url(./assets/images/img_01.jpg)' }}
          >
            <img
              className='regrightimg wow focus-in-expand'
              src='./assets/images/regicon_tutor.svg'
              alt=''
            />
            <div className='regstudent'>
              <h6 className='sectiontitle registerleft__title wow focus-in-expand'>
                <span className='w_bold'>REGISTER AS</span> A TEACHER
              </h6>
              <Link
                to='/Curriculum'
                to={{
                  pathname: '/TutorRegister',
                }}
              >
                <button
                  type='submit'
                  className='btn btn-secondary register__submitbtn'
                >
                  REGISTER
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RegisterMenuDiv;
