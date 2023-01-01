import React, { Component } from "react";
import { Link } from "react-router-dom";

class DynamicGrade extends Component {
  constructor(props) {
    super(props);
    this.props.data.forEach((el) => {
      el.isExpended = false;
      el.SubjectsArray.isExpended = false;
    });
    this.state = {
      gradeData: this.props.data,
      selectGradeName: "",
      gradeSubjects: [],
      selectCurriculumName: this.props.curriculum,
      // bool: this.props.bool
    };
  }

  selectSubject(subjects) {
    let arr = [...this.state.gradeSubjects];
    if (subjects.isSelected === false) {
      subjects.isSelected = true;
      this.setState((this.gradeData = subjects));
      arr.push({ id: subjects.id, name: subjects.name });

      this.setState({ gradeSubjects: arr });
    } else {
      subjects.isSelected = false;
      this.setState((this.gradeData = subjects));

      let data = arr.filter((x) => x.id !== subjects.id);
      this.setState({ gradeSubjects: data });
    }
  }

  toggleAccordion(input) {
    if (input.isExpended === false) {
      this.state.gradeData.forEach((element) => {
        element.isExpended = false;
        element.SubjectsArray.forEach((el) => {
          el.isSelected = false;
        });
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
        element.SubjectsArray.forEach((el) => {
          el.isSelected = false;
        });
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
              <div className="row">
                {grade.SubjectsArray.map((subject, index) => (
                  <div className="col-sm-6 col-md-4 curriculumaccordionitem__column">
                    <div
                      className="curriculumaccordionitem__btncontainer"
                      onClick={() => this.selectSubject(subject)}
                      key={index}
                      id={subject.id}
                    >
                      <div
                        className={`${
                          subject.isSelected === false
                            ? "curriculumaccordionitem__btn"
                            : "curriculumaccordionitem__btn curriculumaccordionitem__btn--active"
                        }`}
                      >
                        <img
                          src="assets/images/tick_icon.svg"
                          className="accordiantick"
                        />
                        {subject.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="accordian-proceed">
                {
                  this.state.gradeSubjects.length <= 0 ? null : <Link
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
                }
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default DynamicGrade;
