import React, { useState } from "react";

function OnetoOneServices() {
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
    <div className="accordionitem wow fade-in-bottom">
      <div
        className={`accordionitem__header ${setActive}`}
        onClick={toggleAccordion}
      >
        <h4 className="accordionitem__title">One-to-One Services</h4>
        <img
          className={`accordionitem__image ${setRotate}`}
          src="./assets/images/down-arrow.svg"
        />
      </div>
      <div className={`accordionitem__content ${setHeight}`}>
        <p className="accordionitem__description">
          We strive to provide maximum attention to students with individualized
          instructions to ensure a thorough relay of every concept discussed,
          and to probe the student(s) into dissecting every topic in numerous
          ways for ultimate understanding.
        </p>
      </div>
    </div>
  );
}

export default OnetoOneServices;
