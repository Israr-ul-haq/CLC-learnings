import React, { Component } from "react";
import WOW from "wowjs";

class WhyUs extends Component {
  state = {};
  componentDidMount() {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
    }).init();
  }

  render() {
    return (
      <div>
        <section
          className="whyclc"
          style={{ backgroundImage: `url(./assets/images/doodle.svg)` }}
        >
          <div className="container">
            <div className="whyclc__content">
              <div className="whyclctop">
                <h2 className="sectiontitle whyclctop__title wow focus-in-expand ">
                  Why <span>CLC?</span>
                </h2>
                <p className="sectionsubtitle whyclctop__subtitle wow fade-in-bottom">
                  Nurturing a generation of happy, well-informed and resilient
                  pupils, providing them a pathway to greater possibilities!
                </p>
              </div>
              <div className="whyclcbottom">
                <div className="row whyclcbottom__row">
                  <div className="col-lg-3 col-md-4 col-sm-6 whyclcbottom__column wow fade-in-bottom">
                    <div className="clccard">
                      <div className="clccard__imagecontainer">
                        <img src="./assets/images/icon_medal.svg" />
                      </div>
                      <h3 className="clctitle">
                        Customized plan for each student
                      </h3>
                      <p className="clc__subtitle">
                        Each student goes through a testing phase conducted by
                        our experienced tutors to devise the best tutoring plan
                        for the student after analyzing the student’s calibre
                        through a written and oral test.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 whyclcbottom__column wow fade-in-bottom">
                    <div className="clccard">
                      <div className="clccard__imagecontainer">
                        <img src="./assets/images/icon_medal.svg" />
                      </div>
                      <h3 className="clctitle">
                        Quality <br /> experience
                      </h3>
                      <p className="clc__subtitle">
                        Our highly qualified and flexible tutors ensure that
                        their students go all-out, pushing them to do their best
                        according to the Student’s abilities.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 whyclcbottom__column wow fade-in-bottom">
                    <div className="clccard">
                      <div className="clccard__imagecontainer">
                        <img src="./assets/images/icon_tax.svg" />
                      </div>
                      <h3 className="clctitle">Free cost of trial classes</h3>
                      <p className="clc__subtitle">
                        We offer two day free of cost trial classes to students
                        of O/A levels to help them understand the process of
                        online learning and choose from the available tutors.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6 whyclcbottom__column wow fade-in-bottom">
                    <div className="clccard">
                      <div className="clccard__imagecontainer">
                        <img src="./assets/images/icon_insurance.svg" />
                      </div>
                      <h3 className="clctitle">
                        We guarantee self paced learning
                      </h3>
                      <p className="clc__subtitle">
                      One-on-one attention makes it easier for students to
                        grasp concepts and learn at their own pace.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-3 col-md-4 col-sm-6 whyclcbottom__column wow fade-in-bottom"
                    data-wow-delay=".5s"
                  >
                    <div className="clccard">
                      <div className="clccard__imagecontainer">
                        <img src="./assets/images/icon_medal.svg" />
                      </div>
                      <h3 className="clctitle">Flexible study schedules</h3>
                      <p className="clc__subtitle">
                        Set with the mutual understanding of the tutor and
                        student.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 whyclcbottom__column wow fade-in-bottom"
                    data-wow-delay=".5s"
                  >
                    <div className="clccard">
                      <div className="clccard__imagecontainer">
                        <img src="./assets/images/consumer discuss.svg" />
                      </div>
                      <h3 className="clctitle">
                        Years of <br /> expertise
                      </h3>
                      <p className="clc__subtitle">
                      	CLC has been in the education sector for years and providing online classes for a decade, we are already a step ahead of our competitors.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-4 col-sm-6  whyclcbottom__column wow fade-in-bottom "
                    data-wow-delay=".5s"
                  >
                    <div className="clccard">
                      <div className="clccard__imagecontainer">
                        <img src="./assets/images/icon_global-network.svg" />
                      </div>
                      <h3 className="clctitle">
                        Diverse <br /> Learning
                      </h3>
                      <p className="clc__subtitle">
                      .	Our tutors are the most experienced tutors, handpicked from across the globe which not only ensures diversity but also a great learning experience.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-4 col-sm-6  whyclcbottom__column wow fade-in-bottom"
                    data-wow-delay=".5s"
                  >
                    <div className="clccard">
                      <div className="clccard__imagecontainer">
                        <img src="./assets/images/icon_24-hours.svg" />
                      </div>
                      <h3 className="clctitle">
                        24/7 <br /> support
                      </h3>
                      <p className="clc__subtitle">
                        Find a quick fix to your problem, any time of the day.
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

export default WhyUs;
