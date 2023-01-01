import React, { Component } from "react";
import WOW from "wowjs";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
class ProgramsOffered extends Component {
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
          <div className="row">
            <div className="col-md-12">
              <div className="head-sec">
                <h1 className="sec-heading">
                  KS2, KS3, O LEVEL/GCSE/IGCSE & A LEVELS
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="counter-wrap">
          <div className="row">
            <div className="col-md-3">
              <div className="countries-icon">
                <img
                  src="./assets/images/earth-globe.png"
                  alt="earth"
                  className="earth-globe"
                />
              </div>
              <div className="country-contain">
                <h1 className="contries-count">
                  <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                    {({ isVisible }) => (
                      <div>{isVisible ? <CountUp end={10} /> : "0"}</div>
                    )}
                  </VisibilitySensor>
                </h1>
                <div className="country-content">Number of countries</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="countries-icon">
                <img
                  src="./assets/images/male-teacher.png"
                  alt="earth"
                  className="earth-globe"
                />
              </div>
              <div className="country-contain">
                <h1 className="contries-count">
                  <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                    {({ isVisible }) => (
                      <div>{isVisible ? <CountUp end={7365} /> : "0"}</div>
                    )}
                  </VisibilitySensor>
                </h1>
                <div className="country-content">Hours of online learning</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="countries-icon">
                <img
                  src="./assets/images/Female teacher.png"
                  alt="earth"
                  className="earth-globe"
                />
              </div>
              <div className="country-contain">
                <h1 className="contries-count">
                  <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                    {({ isVisible }) => (
                      <div>{isVisible ? <CountUp end={1300} /> : "0"}</div>
                    )}
                  </VisibilitySensor>
                </h1>
                <div className="content-contain">
                  <div className="country-content">
                    Competent and qualified instructors
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="countries-icon">
                <img
                  src="./assets/images/Book vectir.png"
                  className="earth-globe"
                  alt="earth"
                />
              </div>
              <div className="country-contain">
                <h1 className="contries-count">
                  <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                    {({ isVisible }) => (
                      <div>{isVisible ? <CountUp end={150} /> : "0"}</div>
                    )}
                  </VisibilitySensor>
                </h1>
                <div className="country-content">Programs offered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgramsOffered;
