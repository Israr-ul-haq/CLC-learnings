import React, { Component } from "react";
import WOW from "wowjs";
import OwlCarousel from "react-owl-carousel2";

class Testimonial extends Component {
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
    const options = {
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      center: true,
      navContainer: ".owl-nav",
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
      <section className="testimonials">
        <div className="container">
          <div className="testimonial__content">
            <div className="testimonialtop">
              <h2 className="sectiontitle testimonialtop__title wow focus-in-expand">
                TESTIMONIALS
              </h2>
            </div>
            <div className="testimonialbottom">
              <div className="owl-theme">
                <div className="owl-controls">
                  <div id="customNav" className="owl-nav"></div>
                </div>
              </div>
              <OwlCarousel options={options}>
                <div className="testimonialcarouselitem">
                  <img
                    className="testimonialcarouselitem__image"
                    src="./assets/images/02@2x.png"
                  />
                  <div className="testimonialcarouselitem__content">
                    <img
                      className="testimonialcarouselitem__quotesleft quotegreen"
                      src="./assets/images/quotation-marks_g.svg"
                    />
                    {/* <img
                      className="testimonialcarouselitem__quotesleft quoteregular"
                      src="./assets/images/quotation-marks.svg"
                    /> */}
                    <p className="testimonialcarouselitem__description">
                      At first I thought that online learning might not be as
                      effective so I opted for CLC's trial class. In just
                      three classes, I could see my son developing interest in
                      mathematics after running from it all his life. Hats off
                      to Sir Wahab Sohail who was so helpful and accommodating
                      throughout the classes.
                    </p>
                    <img
                      className="testimonialcarouselitem__quotesright quotegreen"
                      src="./assets/images/quotation-marks_g (1).svg"
                    />
                    {/* <img
                      className="testimonialcarouselitem__quotesright quoteregular"
                      src="./assets/images/quotation-marks_01.svg"
                    /> */}
                  </div>
                  <h3 className="testimonialcarouselitem__name">
                    Waleed Akbar
                  </h3>
                </div>
                <div className="testimonialcarouselitem">
                  <img
                    className="testimonialcarouselitem__image"
                    src="./assets/images/01@2x.png"
                  />
                  <div className="testimonialcarouselitem__content">
                    <img
                      className="testimonialcarouselitem__quotesleft quotegreen"
                      src="./assets/images/quotation-marks_g.svg"
                    />
                    {/* <img
                      className="testimonialcarouselitem__quotesleft quoteregular"
                      src="./assets/images/quotation-marks.svg"
                    /> */}
                    <p className="testimonialcarouselitem__description">
                    CLC established a quick understanding of my child’s
                    requirements and put together a study plan. My child loved
                    each and every session with him.
                    </p>
                    <img
                      className="testimonialcarouselitem__quotesright quotegreen"
                      src="./assets/images/quotation-marks_g (1).svg"
                    />
                    {/* <img
                      className="testimonialcarouselitem__quotesright quoteregular"
                      src="./assets/images/quotation-marks_01.svg"
                    /> */}
                  </div>
                  <h3 className="testimonialcarouselitem__name">Ali Khan</h3>
                </div>
                <div className="testimonialcarouselitem">
                  <img
                    className="testimonialcarouselitem__image"
                    src="./assets/images/03@2x.png"
                  />
                  <div className="testimonialcarouselitem__content">
                    <img
                      className="testimonialcarouselitem__quotesleft quotegreen"
                      src="./assets/images/quotation-marks_g.svg"
                    />
                    {/* <img
                      className="testimonialcarouselitem__quotesleft quoteregular"
                      src="./assets/images/quotation-marks.svg"
                    /> */}
                    <p className="testimonialcarouselitem__description">
                    I chose CLC learning for my daughter for her O' levels
                    Math and Physics, I could see her improving rapidly and
                    she ended up securing an A grade because the tutor was so
                    quick to pick up her weakness and help her to overcome them.
                    </p>
                    <img
                      className="testimonialcarouselitem__quotesright quotegreen"
                      src="./assets/images/quotation-marks_g (1).svg"
                    />
                    {/* <img
                      className="testimonialcarouselitem__quotesright quoteregular"
                      src="./assets/images/quotation-marks_01.svg"
                    /> */}
                  </div>
                  <h3 className="testimonialcarouselitem__name">Mansha Khan</h3>
                </div>
              </OwlCarousel>
              
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonial;
