import React, { Component } from "react";
import WOW from "wowjs";
import CountUp from "react-countup";

class CountCLC extends Component {
  state = {};
  componentDidMount() {
    new WOW.WOW({
        boxClass:     'wow',      
        animateClass: 'animated', 
        offset:       0,          
        mobile:       true,       
        live:         true 
    }).init();
  }
  render() {
    return (
      <div>
        <section className="count">
          <div className="container">
            <div className="count__content">
              <h2 className="count__title wow focus-in-expand">Count Of CLC</h2>
              <div className="countblockcontainer">
                <div className="countblock  wow fade-in-bottom">
                  <h2 className="countblock__title">
                    <CountUp end={5000} />
                    <span>+</span>
                  </h2>
                  <h3 className="countblock__subtitle">Over 5000 Students</h3>
                  <div className="countline"></div>
                </div>

                <div className="countblock  wow fade-in-bottom">
                  <h2 className="countblock__title">
                    <CountUp end={250} />
                    <span>+</span>
                  </h2>
                  <h3 className="countblock__subtitle">Over 250 Teachers</h3>
                  <div className="countline"></div>
                </div>

                <div className="countblock  wow fade-in-bottom">
                  <h2 className="countblock__title">
                    <CountUp end={50} />
                    <span>+</span>
                  </h2>
                  <h3 className="countblock__subtitle">Over 50 Courses</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CountCLC;
