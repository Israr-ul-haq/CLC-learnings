import React, { Component } from "react";
import WOW from "wowjs";

class KeyTutoring extends Component {
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
            <div className="key-tutoring-header">Our key tutoring programs</div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="ks2-box wow fade-in-bottom">
                <div className="ks2-align">
                  <div className="ks2-content">
                    <h1 className="ks2-text">
                      KS2 <span className="ks2-subjects">Yr 4,5&6</span>
                    </h1>
                    <span className="ks2-subjects">Eng - Math - Sci</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="ks2-box wow fade-in-bottom">
                <div className="ks2-align">
                  <div className="ks2-content">
                    <h1 className="ks2-text">
                      KS3 <span className="ks2-subjects">Yr 7,8&9</span>
                    </h1>
                    <span className="ks2-subjects">Eng - Math - Sci</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="ks2-box wow fade-in-bottom">
                <div className="ks2-align">
                  <div className="ks2-content3">
                    <h1 className="ks2-text2">GCSE/IGCSE </h1>
                    <div className="ks2-subjects3">All Subjects</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="ks2-box wow fade-in-bottom">
                <div className="ks2-align">
                  <div className="ks2-contentall">
                    <h1 className="ks2-text2">A Levels </h1>
                    <div className="ks2-subjects4">All Subjects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-key-wrap">
          <div className="row">
            <div className="key-tutoring-content">
              Our tutoring programs are unmatched- conducted by some of the best
              tutors across the globe, with years of experience in the field.
            </div>
          </div>
        </div>
        <div className="tutor-video-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-sm-6">
                <h1 className="tutor-video-head"> Watch our trial video</h1>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="free-trial-button">
                  <button className="trial-btn">Book a free trial now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tutor-video-section1">
          <div className="container">
            <div className="row">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  width="853"
                  height="350"
                  src="https://www.youtube.com/embed/QaDK_4R2M1c"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="allowfullscreen"
                  mozallowfullscreen="mozallowfullscreen"
                  msallowfullscreen="msallowfullscreen"
                  oallowfullscreen="oallowfullscreen"
                  webkitallowfullscreen="webkitallowfullscreen"
                ></iframe>
                {/* <video
                  className="embed-responsive-item iframe-video"
                  poster="/assets/images/Watch trial image.png"
                  allowfullscreen
                  controls
                >
                  <source src="https://www.youtube.com/watch?v=QaDK_4R2M1c&ab_channel=CLCOnlineLearning" />
                  Your browser does not support the video tag.
                </video> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KeyTutoring;
