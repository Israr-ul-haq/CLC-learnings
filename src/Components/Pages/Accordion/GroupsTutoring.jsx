import React, { useState } from "react";

function GroupsTutoring() {
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
        <h4 className="accordionitem__title">
        Small and Large Tutoring Groups
        </h4>
        <img
          className={`accordionitem__image ${setRotate}`}
          src="./assets/images/down-arrow.svg"
        />
      </div>
      <div className={`accordionitem__content ${setHeight}`}>
        <p className="accordionitem__description">
          When studying in the setting of a small group there are better chances
          for in depth discussions, a habit that we highly emphasize upon as it
          helps in sustaining the sessions, enhancing the mind frames of
          students with similar abilities and motivations by providing
          customized instructions. Large groups cultivate the learning
          environment with the generation of different ideas and thoughts whose
          amalgamation produces maximum output from which students then derive
          their own Analysis.
        </p>
      </div>
    </div>
  );
}

export default GroupsTutoring;
