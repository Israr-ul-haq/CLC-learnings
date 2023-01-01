import React, { useState } from "react";

function HomeworkHelp() {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("accordionitem__content");
  const [setRotate, setRotateState] = useState("accordionitem__image");

  function toggleAccordion() {
    setActiveState(setActive === "" ? "activeAcc" : "");
    setHeightState(
      setActive === "activeAcc"
        ? "accordionitem__content"
        : "accordionitem__content accordionitem__content--active"
    );
    setRotateState(
      setActive === "activeAcc"
        ? "accordionitem__image"
        : "accordionitem__image accordionitem__image--active"
    );
  }

  return (
    <div className="accordionitem wow fade-in-bottom" data-wow-delay=".3s">
      <div
        className={`accordionitem__header ${setActive}`}
        onClick={toggleAccordion}
      >
        <h4 className="accordionitem__title">Homework Help</h4>
        <img
          className={`accordionitem__image ${setRotate}`}
          src="./assets/images/down-arrow.svg"
        />
      </div>
      <div className={`accordionitem__content ${setHeight}`}>
        <p className="accordionitem__description">
          We are not just limited to providing curriculum based assistance but
          our readily available learning facilities can help any student to meet
          an approaching deadline! Most of the time concepts discussed in a
          classroom are not thoroughly relayed which accounts for untouched
          homework assignments! We offer services that not only provide
          assistance for getting the work done, but also give clarity in the
          concepts to ensure that the students won’t get entangled in their
          learning journey again.
        </p>
      </div>
    </div>
  );
}

export default HomeworkHelp;
