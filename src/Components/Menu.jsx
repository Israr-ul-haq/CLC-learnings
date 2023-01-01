import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import $ from 'jquery';

class Menu extends Component {
  state = {
    bool: '',
  };

  componentDidMount() {
    // Jquery here $(...)...
    // let value = 0;
    // window.setInterval(function () {
    //   if (value >= 100) {
    //     value = 0;
    //   } else {
    //     value += 10;
    //   }
    //   $(".progress-bar").css("width", value + "%");
    // }, 900);

  
  }

  

  closeMenu(e) {
    $('.navbar-collapse').removeClass('show');
  }

  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
          <div className='container w_navbars'>
            <NavLink className='navbar-brand' to='/'>
              <img src='./assets/images/clc square_top@2x.png' alt='' />
            </NavLink>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarResponsive'
              aria-controls='navbarResponsive'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarResponsive'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <NavLink
                    onClick={this.closeMenu}
                    className='nav-link'
                    to='/'
                    activeClassName=''
                  >
                    Home
                    <span className='sr-only'>(current)</span>
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    onClick={this.closeMenu}
                    className='nav-link'
                    to='/LMS'
                    activeClassName='active'
                  >
                    LMS
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    onClick={this.closeMenu}
                    className='nav-link'
                    to='/Faculty'
                    activeClassName='active'
                  >
                    Faculty
                  </NavLink>
                </li>
                <li className='nav-item '>
                  <NavLink
                    onClick={this.closeMenu}
                    className='nav-link'
                    to='/howitswork'
                    activeClassName='active'
                  >
                    How It Works
                  </NavLink>
                </li>
                {/* <li className='nav-item '>
                  <NavLink
                    onClick={this.closeMenu}
                    className='nav-link'
                    to='/Test'
                    activeClassName='active'
                  >
                   Test
                  </NavLink>
                </li> */}
                <li className='nav-item '>
                  <NavLink
                    onClick={this.closeMenu}
                    className='nav-link'
                    to='/becomeatutor'
                    activeClassName='active'
                  >
                    Become a Tutor
                  </NavLink>
                </li>
                <li className='nav-item '>
                  <NavLink
                    onClick={this.closeMenu}
                    className='nav-link'
                    activeClassName='active'
                    to={{
                      pathname: '/Curriculum',
                      state: {
                        bool: '1',
                      },
                    }}
                  >
                    Curriculum
                  </NavLink>
                </li>
              </ul>

              <div className='dropdown reg-dropdown'>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'https://app.lovemyskool.com/login/';
                  }}
                  className='loginlmsbtn'
                  // href="https://app.lovemyskool.com/login/"
                  type='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Login (LMS)
                </button>
                <button
                  className='btn btn btn-success  navbarbtn dropdown-toggle ml-1'
                  // href="Register.html"
                  type='button'
                  id='dropdownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Register Now
                </button>
                <div
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuButton'
                >
                  <Link to='/Curriculum' className='dropdown-item'>
                    Register as a Student
                  </Link>
                  <Link to='/TutorRegister' className='dropdown-item'>
                    Register as a Tutor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* <div class="progress">
            <div class="progress-bar" role="progressbar"></div>
            <progress
              style={{ display: "none" }}
              id="progress_bar"
              value="0"
              max="100"
            ></progress>
          </div> */}
      </div>
    );
  }
}

export default Menu;
