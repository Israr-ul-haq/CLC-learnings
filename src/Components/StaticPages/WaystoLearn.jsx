import React, { Component } from "react";
import WOW from "wowjs";

class GlobalPresence extends Component {
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
      <div className="ways-learn-contain">
        <div className="container">
          <div className="row">
            <h1 className="clc-learning-head">Three ways to learn at CLCOL</h1>
          </div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                      <ul className="learn-header">
                          <li className="learn-list">
                          <h1 className="learn-title">1 on 1 Tutoring</h1>
                          </li>
                      </ul>
                      <div className="learn-box wow fade-in-bottom">
                      <div className="img-hover">
                         <img src="./assets/images/young-man-waving-colleagues-talking-online-conference-internet-call-using-webcam-communication.png" alt="imag" className="learn-image"/>
                         </div>
                         <div className="learn-text">
                         We strive to provide maximum attention to students with individualized instructions.

                         </div>

                         </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                      <ul className="learn-header">
                          <li className="learn-list">
                          <h1 className="learn-title">Small Group Tutoring</h1>
                          </li>
                      </ul>
                      <div className="learn-box wow fade-in-bottom">
                      <div className="img-hover">
                         <img src="./assets/images/teacher.png" alt="imag" className="learn-image"/>
                         </div>
                         <div className="learn-text">
                         When studying in the setting of a small group there are better chances for in depth discussions

                         </div>

                         </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                      <ul className="learn-header">
                          <li className="learn-list">
                          <h1 className="learn-title">Large Group tutoring</h1>
                          </li>
                      </ul>
                      <div className="learn-box wow fade-in-bottom">
                      <div className="img-hover">
                         <img src="./assets/images/students.png" alt="imag" className="learn-image"/>
                         </div>
                         <div className="learn-text">
                         It cultivate the learning environment different ideas and thoughts which maximum output.
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

export default GlobalPresence;
