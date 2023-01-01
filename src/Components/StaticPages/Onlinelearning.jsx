import React, { Component } from "react";
import WOW from "wowjs";
import CountUp from "react-countup";

class onlineTutoring extends Component {
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
        <div className="container">
          <div className="clc-learning-head">
            Why choose CLC online learning
          </div>
        </div>
        <div className="clc-learning-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <ul>
                  <li className="clc-list">
                    <div className="clc-icon-contain">
                      <img src="./assets/images/LMS.png" alt="lms"  className="learn-image-size"/>
                      <h1 className="clc-icon-text">LMS with AI </h1>
                    </div>
                  </li>
                  <li className="clc-list">
                    <div className="clc-icon-contain">
                      <img src="./assets/images/Personalized.png" alt="lms" className="learn-image-size"/>
                      <h1 className="clc-icon-text">
                        Personalized learning experience{" "}
                      </h1>
                    </div>
                  </li>
                  <li className="clc-list">
                    <div className="clc-icon-contain">
                      <img
                        src="./assets/images/Competent.png"
                        className="learn-image-size"
                        alt="lms"

                      />
                      <h1 className="clc-icon-text clc-icon-text-md">
                        Competent and accomplished teachers and tutors{" "}
                      </h1>
                    </div>
                  </li>
                  <li className="clc-list">
                    <div className="clc-icon-contain">
                      <img src="./assets/images/Docs.png" alt="lms" className="learn-image-size"/>
                      <h1 className="clc-icon-text">
                        Personalized worksheets and quizzes
                      </h1>
                    </div>
                  </li>
                  <li className="clc-list">
                    <div className="clc-icon-contain">
                      <img src="./assets/images/Consistent.png" alt="lms" className="learn-image-size" />
                      <h1 className="clc-icon-text">
                        Consistent monitoring and counselling{" "}
                      </h1>
                    </div>
                  </li>
                  <li className="clc-list">
                    <div className="clc-icon-contain">
                      <img
                        src="./assets/images/free-trial.png"
                        alt="lms"
                        className="learn-image-size"
                      />
                      <h1 className="clc-icon-text clc-icon-text-md">
                        Weigh your own comfort with free trials
                      </h1>
                    </div>
                  </li>
                  <li className="clc-list">
                    <div className="clc-icon-contain">
                      <img
                        src="./assets/images/Parental.png"
                        alt="lms"
                        className="learn-image-size"
                      />
                      <h1 className="clc-icon-text clc-icon-text-md">
                        Highest parental involvement
                      </h1>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="clc-icon-contain">
                  <div className="clc-learning-image">
                    <img
                      className="chooseclc"
                      src="./assets/images/Choose CLC.png"
                      alt="clc"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default onlineTutoring;
