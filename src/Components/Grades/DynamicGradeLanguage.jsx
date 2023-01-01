import React, { Component } from "react";
import { Link } from "react-router-dom";
import StudentRegister from "../StudentRegister";

class DynamicGradeLanguage extends Component {
  constructor(props) {
    super(props);
    this.props.data.forEach((el) => {
      el.isExpended = false;
    });
    this.state = {
      gradeData: this.props.data,
      selectGradeName: "",
      gradeSubjects: [],
      selectCurriculumName: this.props.curriculum,
      // bool: this.props.bool
    };
  }

  toggleAccordion(input) {
    if (input.isExpended === false) {
      this.state.gradeData.forEach((element) => {
        element.isExpended = false;
      });
      this.setState({ gradeSubjects: [] });
      input.isExpended = true;
      this.setState((this.gradeData = input));
      this.setState(
        {
          selectGradeName: input.gradeName,
        },
        () => {}
      );
    } else {
      this.state.gradeData.forEach((element) => {
        element.isExpended = false;
      });
      this.setState({ gradeSubjects: [] });

      input.isExpended = false;
      this.setState((this.gradeData = input));
      this.setState(
        {
          selectGradeName: "",
        },
        () => {}
      );
    }
  }

  render() {
    return (
      <>
        {this.state.gradeData.map((grade, index) => (
          <div className="curriculumaccordionitem wow fade-in-bottom">
            <div
              className={`${
                grade.isExpended === true
                  ? "curriculumaccordionitem__header curriculumaccordionitem__header--active"
                  : "curriculumaccordionitem__header"
              }`}
              onClick={() => this.toggleAccordion(grade)}
              key={index}
              id={grade.id}
            >
              <h4 className="curriculumaccordionitem__title">
                {grade.gradeName}
              </h4>
              <img
                className="curriculumaccordionitem__image "
                src="./assets/images/Icon awesome-angle-down.svg"
              />
            </div>
            <div
              className={`${
                grade.isExpended === true
                  ? "curriculumaccordionitem__content curriculumaccordionitem__content--active"
                  : "curriculumaccordionitem__content"
              }`}
            >
              <div className="accordian-proceed">
                <Link
                  to={{
                    pathname: "/StudentRegister",
                    state: {
                      selectedCurriculum: this.state.selectCurriculumName,
                      selectedGrade: this.state.selectGradeName,
                      selectedSubjects: this.state.gradeSubjects,
                    },
                  }}
                >
                  <button className="accordian-proceed_btn" type="button">
                    Proceed Next
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default DynamicGradeLanguage;
