import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';
import { APIBaseURL } from '../../shared/APIBaseURL';
import Menu from '../Menu';
class SubjectSpecialists extends Component {
  state = {
    readmore: true,
    dropdown: true,
    showdiv: true,
    subjectSpecialists: [],
    filterSpecialists: [],
  };

  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
    }).init();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Teacher: '', Subject: '', Domain: '' }),
    };

    fetch(`${APIBaseURL}/api/WebApis/GetSpecialists`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          subjectSpecialists: data,
        });
      });
  }

  readMore = (e) => {
    let clickedButton = e.target;

    if (!clickedButton.parentElement.children[2].classList.contains('active')) {
      clickedButton.parentElement.children[2].classList.add('active');
      clickedButton.parentElement.children[3].innerText = 'Read Less';
      clickedButton.parentElement.children[4].style.display = 'none';
    } else {
      clickedButton.parentElement.children[2].classList.remove('active');
      clickedButton.parentElement.children[3].innerText = 'Read More';
      clickedButton.parentElement.children[4].style.display = 'block';
    }
  };

  showFilerDropdown = (e) => {
    let clickedButton = e.target;

    if (this.state.dropdown) {
      clickedButton.parentElement.children[1].classList.add('active');
      this.setState({
        dropdown: false,
      });
    } else {
      clickedButton.parentElement.children[1].classList.remove('active');
      this.setState({
        dropdown: true,
      });
    }
  };

  handleSearch = (e) => {
    e.preventDefault();

    const teacher = e.target[0].value;
    const subject = e.target[1].value;
    const domain = e.target[2].value;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Teacher: teacher,
        Subject: subject,
        Domain: domain,
      }),
    };

    fetch(`${APIBaseURL}/api/WebApis/GetSpecialists`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          subjectSpecialists: data,
        });
      });
  };

  render() {
    return (
      <div>
        <Menu />
        <section className='premiumtutors_main prem-tutor'>
          <div className='premiumtutor-body'>
            <div className='container'>
              <div className='premiumtutor-main-title'>
                <div className='prem-top'>
                  <Link to='/'>
                    <span className='bck-arrow-prem'>
                      <img
                        src='/assets/images/icon_right_arrow_manage_transporter (2).svg'
                        alt=''
                      />{' '}
                      Back
                    </span>
                  </Link>
                  <h2
                    className='sectiontitle wow focus-in-exp
                    and homeheroitem__title--black w_tutortitle'
                  >
                    Subject <span> Specialists</span>
                  </h2>
                </div>
              </div>
              <div className='dropdown-filter'>
                <button
                  onClick={this.showFilerDropdown}
                  className='dropbtn-filter'
                >
                  Filter
                </button>
                <div id='myDropdown' className='dropdown-content-filter'>
                  <form className='search filter' onSubmit={this.handleSearch}>
                    <div className='filter-box'>
                      <label for='fname'>Teacher</label>
                      <input
                        type='text'
                        id='teacher'
                        className='form-filter'
                        name='teacher'
                        placeholder='Enter'
                      />
                    </div>
                    <div className='filter-box'>
                      <label for='lname'>Subject</label>
                      <input
                        type='text'
                        id='subject'
                        className='form-filter'
                        name='subject'
                        placeholder='Enter'
                      />
                    </div>
                    <div className='filter-box'>
                      <label for='lname'>Domain</label>
                      <input
                        type='text'
                        id='domain'
                        className='form-filter'
                        name='domain'
                        placeholder='Enter'
                      />
                    </div>
                    <button className='filter-sub-btn'>submit</button>
                  </form>
                </div>
              </div>

              <div className='premiumitembody'>
                {this.state.subjectSpecialists.length ? (
                  this.state.subjectSpecialists?.map((special) => (
                    <div className='premiumsinglepageitem'>
                      <div className='premiumcarouselitem'>
                        <div className='subjectcarouselimgs'>
                          <img
                            className='subjectcarouselitem__image'
                            src={special.Picture}
                          />
                        </div>
                        <div className='premiumcarouselitem__content'>
                          <h3 className='subjectcarouselitem__name'>
                            {special.Name}
                          </h3>
                          <p className='special-title-name'>{special.Title}</p>
                          <p className='subjectcarouselitem__description'>
                            {special.Description}
                            {/* Talha Fazal graduated from the National University
                              of Singapore with a degree in Electrical
                              engineering in 2012. <span id="dots">...</span>
                              <span id="more">
                                He has been teaching for the last 10 years and
                                has taught students from different backgrounds
                                and nationalities. He has worked with Cialfo in
                                Singapore as their head Mathematics trainer for
                                IB, SAT, and GMAT. Since 2016, when he moved
                                back to Pakistan, he has been teaching Cambridge
                                and IGCSE students. He also continues to train
                                students for SAT1, SAT2, and GRE.
                              </span> */}
                          </p>
                          <button
                            className='detail-read-more'
                            onClick={this.readMore}
                          >
                            Read More
                          </button>
                          <div className='prem-details_maincontainer'>
                            <div className='prem-details_main'>
                              <div className='prem-details'>
                                <p className='work-title'>Experience</p>
                                <p className='work-time'>
                                  {special.Experience}
                                </p>
                              </div>
                              <div className='prem-2details'>
                                <p className='work-title'>Subject</p>
                                {/* <p className="work-time "> 2016, he has taught Math  to IB, Cambridge. </p> */}
                                <p className='work-time work-subject'>
                                  {special.Subject}
                                </p>
                              </div>
                              <div className='tutordomain'>
                                <p className='work-title'>Domain</p>
                                <p className='work-time'>
                                  {special.Domain === ''
                                    ? 'N/A'
                                    : special.Domain}
                                </p>
                              </div>
                            </div>
                            <p className='rankname'>CLC Ranking</p>
                            <img
                              className='carousel-stars'
                              src='./assets/images/5.svg'
                              alt=''
                            />
                            <p className='ranknum'>{special.Ranking}.0</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No Data</p>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* <section class="bottomnav ">
          <div class="container">
            <ul class="numberscroll wow fade-in-bottom">
              <li class="numitems">
                <a class="num-link" href="#">
                  <img src="./assets/images/icon_right_arrow_manage_transporter.svg" />
                </a>
              </li>
              <li class="numitems">
                <a class="num-link" href="#">
                  1<span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="numitems">
                <a class="num-link" href="#">
                  2
                </a>
              </li>
              <li class="numitems active">
                <a class="num-link" href="#">
                  3
                </a>
              </li>
              <li class="numitems ">
                <a class="num-link" href="#">
                  4
                </a>
              </li>
              <li class="numitems ">
                <a class="num-link" href="#">
                  5
                </a>
              </li>
              <li class="numitems">
                <a class="num-link" href="#">
                  6
                </a>
              </li>
              <li class="numitems">
                <a class="num-link" href="#">
                  <img src="./assets/images/icon_right_arrow_manage_transporter (1).svg" />
                </a>
              </li>
            </ul>
          </div>
        </section> */}
      </div>
    );
  }
}

export default SubjectSpecialists;
