import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel2";
import WOW from "wowjs";
import { Link } from "react-router-dom";
import { APIBaseURL } from "../../shared/APIBaseURL";

class PremiumTutors extends Component {
  state = {
    subjectSpecialists: [],
  };
  componentDidMount() {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
    }).init();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Teacher: "", Subject: "", Domain: "" }),
    };

    fetch(`${APIBaseURL}/api/WebApis/GetPremiumTutors`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          subjectSpecialists: data,
        });
      });
  }
  render() {
    const options = {
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      navContainer: ".premium-nav",
      navText: [
        "<img src='./assets/images/icon_left_arrow.png' />",
        "<img src='./assets/images/icon_right_arrow.png' />",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 3,
        },
      },
    };

    return (
      <section className="premiumtutors_mainfac">
        <div className="premiumtutor-body">
          <div className="container">
            <div className="testimonial__content">
              <div className="testimonialtop">
                <h2 className="sectiontitle wow focus-in-expand homeheroitem__title--black w_tutortitle">
                  Premium <span>Tutors</span>
                </h2>
                <div className="owl-theme">
                  <div className="owl-controls">
                    <div
                      id="customNav"
                      className="specialist-nav premium-nav"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="testimonialbottom">
                <OwlCarousel options={options}>
                  {this.state.subjectSpecialists.length ? (
                    this.state.subjectSpecialists?.map((special) => (
                      <div className="premiumcarouselitem">
                        <div className="subjectcarouselimgs">
                          <img
                            className="subjectcarouselitem__image"
                            src={special.Picture}
                          />
                        </div>
                        <div className="premiumcarouselitem__content">
                          <h3 className="subjectcarouselitem__name">
                            {special.Name}
                          </h3>
                          <p className="special-title-name">{special.Title}</p>
                            <p className="subjectcarouselitem__description">
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

                          <div className="prem-details_maincontainer">
                            <div className="prem-details_main">
                              <div className="prem-details">
                                <p className="work-title">Experience</p>
                                <p className="work-time">
                                  {special.Experience}
                                </p>
                              </div>
                              <div className="prem-2details">
                                <p className="work-title">Subject</p>
                                {/* <p className="work-time "> 2016, he has taught Math  to IB, Cambridge. </p> */}
                                <p className="work-time work-subject">
                                  {special.Subject}
                                </p>
                              </div>
                              <div className="tutordomain">
                                <p className="work-title">Domain</p>
                                <p className="work-time">
                                  {special.Domain === ""
                                    ? "N/A"
                                    : special.Domain}
                                </p>
                              </div>
                            </div>
                            <p className="rankname">CLC Ranking</p>
                            <img
                              className="carousel-stars"
                              src="./assets/images/5.svg"
                              alt=""
                            />
                            <p className="ranknum">{special.Ranking}.0</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No Data</p>
                  )}
                </OwlCarousel>
                <div className="sub-specialistview-btn">
                  <Link to="/premiumtutors">
                    <button className="viewall-btn">View All</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PremiumTutors;
