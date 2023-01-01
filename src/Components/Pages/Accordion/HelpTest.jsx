import React, { useState } from 'react';

function HelpTest() {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("accordionitem__content");
    const [setRotate, setRotateState] = useState("accordionitem__image");
  
    function toggleAccordion() {
      setActiveState(setActive === "" ? "activeAcc" : "");
      setHeightState(
        setActive === "activeAcc" ? "accordionitem__content" : "accordionitem__content accordionitem__content--active"
      );
      setRotateState(
        setActive === "activeAcc" ? "accordionitem__image" : "accordionitem__image accordionitem__image--active"
      );
    }
  
    return (
      <div
      className="accordionitem wow fade-in-bottom"
      data-wow-delay=".3s"
    >
      <div className={`accordionitem__header ${setActive}`} onClick={toggleAccordion}>
        <h4 className="accordionitem__title">
          Immediate Help Test
        </h4>
        <img
          className={`accordionitem__image ${setRotate}`}
          src="./assets/images/down-arrow.svg"
        />
      </div>
      <div className={`accordionitem__content ${setHeight}`}>
        <p className="accordionitem__description">
          You got a test the next day, week or month, but don’t
          know how to exactly prepare for it? Well, lucky for you
          our services will pull you through your academic
          nightmare by preparing you for your test with the
          provision of maximum resources and assistance to clear
          all concepts and help you develop an analytical approach
          to answering every question.
        </p>
      </div>
    </div>
    );
  }
  
  export default HelpTest;