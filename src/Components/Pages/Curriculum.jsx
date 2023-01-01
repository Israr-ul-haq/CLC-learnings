import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';
import Menu from '../Menu';
class Curriculum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curriculum: '',
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
    return (
      <div>
        <Menu />
        <section>
          <div className='curiculumhero__content'>
            <div
              className='curiculumheroitem'
              style={{
                backgroundImage: 'url(./assets/images/banner_curriculum.jpg)',
              }}
            >
              <div className='container h-100'>
                <div className='curiculumheroitem__content h-100'>
                  <h1 className='curiculumheroitem__title curiculumheroitem__title--white wow text-focus-in'>
                    Curriculum
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='curriculum'
          style={{ backgroundImage: 'url(./assets/images/doodle.svg)' }}
        >
          <div className='container'>
            <div className='curriculum__content'>
              <div className='curriculumtop'>
                <h2
                  className='sectiontitle curriculumtop__title wow focus-in-expand '
                  style={{ fontSize: '40px' }}
                >
                  Please confirm your
                  <span> curriculum</span>
                </h2>
              </div>
              <div className='curriculumbottom'>
                <div className='row curriculum__row'>
                  <div className='col-sm-6 col-lg-4 curriculum__column'>
                    <Link
                      to={{
                        pathname: '/UK',
                        state: {
                          curriculum: 'Cambridge Bridge (UK)',
                        },
                      }}
                      className='curriculumcard'
                    >
                      <h1 className='curriculumcard__backgroundtitle'>UK</h1>
                      <div className='curriculumcard__inner'>
                        <h2 className='curriculumcard__title'>UK</h2>
                        <h4 className='curriculumcard__subtitle'>
                          Cambridge UK
                        </h4>
                      </div>
                    </Link>
                  </div>

                  <div className='col-sm-6 col-lg-4 curriculum__column'>
                    <Link
                      to={{
                        pathname: '/IB',
                        state: {
                          curriculum: 'International Baccaleruate (IB)',
                        },
                      }}
                      className='curriculumcard'
                    >
                      <h1 className='curriculumcard__backgroundtitle'>IB</h1>
                      <div className='curriculumcard__inner'>
                        <h2 className='curriculumcard__title'>IB</h2>
                        <h4 className='curriculumcard__subtitle'>
                          International Baccalaureate
                        </h4>
                      </div>
                    </Link>
                  </div>
                  <div className='col-sm-6 col-lg-4 curriculum__column'>
                    <Link
                      to={{
                        pathname: '/APCOURSES',
                        state: {
                          curriculum: 'Ap Courses',
                        },
                      }}
                      className='curriculumcard'
                    >
                      <h1 className='curriculumcard__backgroundtitle'>AP</h1>
                      <div className='curriculumcard__inner'>
                        <h2 className='curriculumcard__title'>AP Courses</h2>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='row curriculum__rowbottom'>
                  <div className='col-sm-6 col-lg-4 offset-lg-2 offset-md-0 offset-sm-0  curriculum__column'>
                    <Link
                      to={{
                        pathname: '/USA',
                        state: {
                          curriculum: 'American Curriculum (USA)',
                        },
                      }}
                      className='curriculumcard'
                    >
                      <h1 className='curriculumcard__backgroundtitle'>USA</h1>
                      <div className='curriculumcard__inner'>
                        <h2 className='curriculumcard__title'>USA</h2>
                        <h4 className='curriculumcard__subtitle'>
                          American Curriculum
                        </h4>
                      </div>
                    </Link>
                  </div>
                  <div className='col-sm-6 col-lg-4 curriculum__column'>
                    <Link
                      to={{
                        pathname: '/Languages',
                        state: {
                          curriculum: 'Languages',
                        },
                      }}
                      className='curriculumcard'
                    >
                      <h1 className='curriculumcard__backgroundtitle curriculumcard__title--language'>
                        Languages
                      </h1>
                      <div className='curriculumcard__inner'>
                        <h2 className='curriculumcard__title '>Languages</h2>
                      </div>
                    </Link>
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

export default Curriculum;
