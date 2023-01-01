import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import $ from "jquery";

class LandingHeader extends Component {
  state = {
    bool: "",
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
    document.querySelectorAll(".nav-scroll").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }

  closeMenu(e) {
    $(".navbar-collapse").removeClass("show");
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container w_navbars">
            <NavLink className="navbar-brand" to="/">
              <img src="./assets/images/clc square_top@2x.png" alt="" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="nav-link nav-scroll"
                    to="/"
                    activeClassName=""
                  >
                    Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#whoweare"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="nav-link nav-scroll"
                    to="section1"
                    activeClassName="active"
                  >
                    Who We Are
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#chooseus"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="nav-link nav-scroll"
                    to="/Faculty"
                    activeClassName="active"
                  >
                    Choose US
                  </a>
                </li>
                
              </ul>

              <div className="dropdown reg-dropdown">
                {/* <button
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
                </button> */}
                <a
                  href="#enquire"
                  className="btn btn btn-success  navbarbtn dropdown-toggle ml-1 nav-scroll"
                  // href="Register.html"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                >
                  Enquire Now
                </a>
                {/* <div
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuButton'
                >
                  <Link to='/Curriculum' className='dropdown-item'>
                    Register as a Student
                  </Link>
                  <Link to='/TutorRegister' className='dropdown-item'>
                    Register as a Tutor
                  </Link>
                </div> */}
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

export default LandingHeader;
