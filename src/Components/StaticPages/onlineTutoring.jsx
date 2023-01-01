import React, { Component } from "react";
import WOW from "wowjs";

class OnlineTutoring extends Component {
  render() {
    return (
      <div className="tutoring-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tutoring-column">
                <div className="tutoring-heading">
                  Online tutoring that makes learning easy
                </div>
                <div className="booking-contain">
                  <button className="booking-btn">Book a free trail now</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="tutor-image-contain">
                <div className="tutor-image">
                  <div className="img-hover">
                    <img
                      src="./assets/images/young-man.png"
                      alt="tutor-img"
                      className="online-tutor-image"
                    />
                  </div>
                  <img className="circle-img" alt="circle" src="./assets/images/lines Circle.png"/>
                  <img
                    className="tutor-ring"
                    src="./assets/images/Yellow vector.png"
                    alt="ring"
                  />
                  <img className="vector-tutor" alt="vector" src="./assets/images/Vector.png"/>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OnlineTutoring;
