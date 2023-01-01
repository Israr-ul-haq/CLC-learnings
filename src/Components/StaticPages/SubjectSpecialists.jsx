import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel2";
import WOW from "wowjs";
import { Link } from "react-router-dom";
import { APIBaseURL } from "../../shared/APIBaseURL";

class SubjectSpecialists extends Component {
  state = {
    subjectSpecialists: [],
  };
  componentDidMount() {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
    }).init();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Teacher: "", Subject: "", Domain: "" }),
    };

    fetch(`${APIBaseURL}/api/WebApis/GetSpecialists`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          subjectSpecialists: data,
        });
      });
  }
  render() {
    const options = {
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      navContainer: ".specialist-nav-2",
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
      <section
        className="subjectspecialists_main"
        style={{ backgroundImage: `url(./assets/images/doodle.svg)` }}
      >
        <div className="container">
          <div className="testimonial__content">
            <div className="testimonialtop">
              <h2 className="sectiontitle wow focus-in-expand homeheroitem__title--black w_tutortitle">
                Subject <span>Specialists</span>
              </h2>
              <div className="owl-theme">
                <div className="owl-controls">
                  <div
                    id="customNav"
                    className="specialist-nav specialist-nav-2"
                  ></div>
                </div>
              </div>
            </div>
            <div className="testimonialbottom">
              <OwlCarousel options={options}>
                {this.state.subjectSpecialists.length ? (
                  this.state.subjectSpecialists?.map((special) => (
                    <div className="premiumcarouselitem">
                      <div className="subjectcarouselimgs">
                        <img
                          className="subjectcarouselitem__image"
                          src={special.Picture}
                        />
                      </div>
                      <div className="premiumcarouselitem__content">
                        <h3 className="subjectcarouselitem__name">
                          {special.Name}
                        </h3>
                        <p className="special-title-name">{special.Title}</p>
                        <p className="subjectcarouselitem__description">
                          {special.Description}
                          {/* Talha Fazal graduated from the National University
                              of Singapore with a degree in Electrical
                              engineering in 2012. <span id="dots">...</span>
                              <span id="more">
                                He has been teaching for the last 10 years and
                                has taught students from different backgrounds
                                and nationalities. He has worked with Cialfo in
                                Singapore as their head Mathematics trainer for
                                IB, SAT, and GMAT. Since 2016, when he moved
                                back to Pakistan, he has been teaching Cambridge
                                and IGCSE students. He also continues to train
                                students for SAT1, SAT2, and GRE.
                              </span> */}
                        </p>

                        <div className="prem-details_maincontainer">
                          <div className="prem-details_main">
                            <div className="prem-details">
                              <p className="work-title">Experience</p>
                              <p className="work-time">{special.Experience}</p>
                            </div>
                            <div className="prem-2details">
                              <p className="work-title">Subject</p>
                              {/* <p className="work-time "> 2016, he has taught Math  to IB, Cambridge. </p> */}
                              <p className="work-time work-subject">
                                {special.Subject}
                              </p>
                            </div>
                            <div className="tutordomain">
                              <p className="work-title">Domain</p>
                              <p className="work-time">
                                {special.Domain === "" ? "N/A" : special.Domain}
                              </p>
                            </div>
                          </div>
                          <p className="rankname">CLC Ranking</p>
                          <img
                            className="carousel-stars"
                            src="./assets/images/5.svg"
                            alt=""
                          />
                          <p className="ranknum">{special.Ranking}.0</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No Data</p>
                )}
                {/* <div className="subjectcarouselitem">
                      <div className="subjectcarouselimgs">
                        <img
                          className="subjectcarouselitem__image"
                          src="./assets/images/teachimg2.png"
                        />
                        <p className="rankname">CLC Ranking</p>
                        <img
                          className="carousel-stars"
                          src="./assets/images/5.svg"
                          alt=""
                        />
                        <p className="ranknum">5.0</p>
                      </div>
                      <div className="subjectcarouselitem__content">
                        <h3 className="subjectcarouselitem__name">
                          Talha Fazal
                          </h3>
                        <p className="special-title-name">Subject Specialists</p>
                        <p className="subjectcarouselitem__description">
                        Talha Fazal graduated from the National University of Singapore with a degree in Electrical engineering in 2012. He has been teaching for the last 10 years and has taught students from different backgrounds and nationalities. He has worked with Cialfo in Singapore as their head Mathematics trainer for IB, SAT, and GMAT. Since 2016, when he moved back to Pakistan, he has been teaching Cambridge and IGCSE students. He also continues to train students for SAT1, SAT2, and GRE.
                          </p>
                        <p className="work-title">Experience</p>
                        <p className="work-time">10 Years of experience</p>
                        <p className="work-title">Subject</p>
                        <p className="work-time "> 2016, he has taught Math  to IB, Cambridge. </p>
                        <p className="work-time work-subject">He has worked with Cialfo in Singapore as their head Mathematics trainer for IB, SAT, and GMAT.</p>
                      </div>
                    </div> */}
                {/* <div className="subjectcarouselitem">
                      <div className="subjectcarouselimgs">
                        <img
                          className="subjectcarouselitem__image"
                          src="./assets/images/teachimg3.png"
                        />
                        <p className="rankname">CLC Ranking</p>
                        <img
                          className="carousel-stars"
                          src="./assets/images/5.svg"
                          alt=""
                        />
                        <p className="ranknum">5.0</p>
                      </div>
                      <div className="subjectcarouselitem__content">
                        <h3 className="subjectcarouselitem__name">
                          Fraz Ahmed Yousafi
                          </h3>
                        <p className="special-title-name">Subject Specialists</p>
                        <p className="subjectcarouselitem__description">
                          He has always put hard work at the forefront of whatever he has done. From working as a teaching assistant
                          throughout his Undergraduate years to when he began his Teaching Career. His time abroad has increased his exposure to
                          new and cutting edge teaching methodologies, as well as means of getting content out to all types of students.
                          He has over 15 years of teaching experience from Prestigious Institutions like International School of Chouiefat.
                          He has mastered digital and analog teaching techniques, even in the wake of an International Pandemic.
                          Come ready to learn, relate real life to Chemistry and earn a better understanding of Subject Matter than you ever had before.
                          </p>
                        <p className="work-title">Experience</p>
                        <p className="work-time">15 Years of experience</p>
                        <p className="work-title">Subject</p>
                        <p className="work-time work-subject"> BSc Honors in Chemistry from the University of Alabama - Birmingham, U.S.A.</p>
                      </div>
                    </div> */}
                {/* <div className="subjectcarouselitem">
                      <div className="subjectcarouselimgs">
                        <img
                          className="subjectcarouselitem__image"
                          src="./assets/images/teach1img.png"
                        />
                        <p className="rankname">CLC Ranking</p>
                        <img
                          className="carousel-stars"
                          src="./assets/images/5.svg"
                          alt=""
                        />
                        <p className="ranknum">5.0</p>
                      </div>
                      <div className="subjectcarouselitem__content">
                        <h3 className="subjectcarouselitem__name">
                          Mr.Muhammad Ibrahim
                          </h3>
                        <p className="special-title-name">Subject Specialists</p>
                        <p className="subjectcarouselitem__description">
                          An accountant trained, Ibrahim brings a wealth of experience in applied
                          research and teaching, working closely with distinguished professors at NUS for 6 years (2012-2018)
                          in leading research projects, facilitating leadership workshops and driving academic seminars.
                          Ibrahim’s passion is in linking theory to practice, demonstrated through his applied research
                          initiatives at NUS’s Centre for Governance, Institutions and Organizations (CGIO), as well
                          as in sharing knowledge with wider audience, evident from teaching Singapore
                          students’ O/A-Level and public speaking at various investor forums hosted across 6 ASEAN countries.
                          Having a solid financial and business background, Ibrahim’s domains
                          of teaching are in accounting, business studies and finance.
                          </p>
                        <p className="work-title">Experience</p>
                        <p className="work-time">20 Years of experience</p>
                        <p className="work-title">Subject</p>
                      <p className="work-time"> 2011, BBA (Accountancy), National University of Singapore (NUST).</p>
                        <p className="work-time"> 2015, Chartered Accountant (CA) of Singapore. </p>
                        <p className="work-time"> 2020, MBA (Finance), NUS. </p> 
                        <p className="work-time work-subject"> 2021, CFA, Level II.</p>
                      </div>
                    </div> */}
                {/* <div className="subjectcarouselitem">
                      <div className="subjectcarouselimgs">
                        <img
                          className="subjectcarouselitem__image"
                          src="./assets/images/teacher8.jpg"
                        />
                        <p className="rankname">CLC Ranking</p>
                        <img
                          className="carousel-stars"
                          src="./assets/images/5.svg"
                          alt=""
                        />
                        <p className="ranknum">5.0</p>
                      </div>
                      <div className="subjectcarouselitem__content">
                        <h3 className="subjectcarouselitem__name">
                          Abrish Sukhera
                          </h3>
                        <p className="special-title-name">Subject Specialists</p>
                        <p className="subjectcarouselitem__description">
                          Abrish Sukhera graduated from Prince Edward Island, Canada. She has worked
                          internationally with University of Toronto and locally with Aitchison College.
                          She has worked as an A levels Business and Economics teacher here in Pakistan.
                          She has helped many students improve their grades over months.
                          She is currently training students for Economics, Business, Psychology
                          and Sociology alongside working as a curriculum designer.
                          </p>
                        <p className="work-title">Experience</p>
                        <p className="work-time">18 Years of experience</p>
                        <p className="work-title">Subject</p>
                        <p className="work-time"> Currently training students for Economics, Business, Psychology. </p> 
                        <p className="work-time work-subject"> Working as a curriculum designer. </p>
                      </div>
                    </div> */}
                {/* <div className="subjectcarouselitem">
                      <div className="subjectcarouselimgs">
                        <img
                          className="subjectcarouselitem__image"
                          src="./assets/images/teacher10.jpg"
                        />
                        <p className="rankname">CLC Ranking</p>
                        <img
                          className="carousel-stars"
                          src="./assets/images/5.svg"
                          alt=""
                        />
                        <p className="ranknum">5.0</p>
                      </div>
                      <div className="subjectcarouselitem__content">
                        <h3 className="subjectcarouselitem__name">
                          Hira Saeed
                          </h3>
                        <p className="special-title-name">Subject Specialists</p>
                        <p className="subjectcarouselitem__description">
                          Hira Saeed graduated from one of the Prestigious University  with a degree
                          in Finance and Economics in 2011. She has been teaching for the past 6 years
                          and have taught students from different backgrounds and nationalities.
                          She has worked in multiple renowned schools . She is currently teaching
                          Business studies to O and  A level students.
                          </p>
                        <p className="work-title">Experience</p>
                        <p className="work-time">6 Years of experience</p>
                        <p className="work-title">Subject</p>
                        <p className="work-time work-subject"> Currently teaching Business studies to O and  A level students. </p>
                      </div>
                    </div> */}
                {/* <div className="subjectcarouselitem">
                      <div className="subjectcarouselimgs">
                        <img
                          className="subjectcarouselitem__image"
                          src="./assets/images/teacher11.jpg"
                        />
                        <p className="rankname">CLC Ranking</p>
                        <img
                          className="carousel-stars"
                          src="./assets/images/5.svg"
                          alt=""
                        />
                        <p className="ranknum">5.0</p>
                      </div>
                      <div className="subjectcarouselitem__content">
                        <h3 className="subjectcarouselitem__name">
                          Dr. Fareeha Naeem
                          </h3>
                        <p className="special-title-name">Subject Specialists</p>
                        <p className="subjectcarouselitem__description">
                          Dr. Fareeha Naeem graduated from Fatima Jinnah Medical College, did
                          certification from Toronto, Canada. She did diploma courses in Nutrition
                          and Forensic Science from Stanford College,  Quebec, Canada.
                          She is currently working as educationist for the last 14 years
                          in American High School and has experience in teaching Chemistry, Biology
                          and speciality courses of Biology and Chemistry Honors. She also has
                          experience of teaching College Level AP courses and is currently
                          teaching AP Chemistry and AP Environmental Science.
                          She is teaching the students from different backgrounds and nationalities.
                          She has Google Certified Educator Level 1 certification
                          and has extensive experience in online teaching.
                          She has tutored O , A level , and High school  students.
                          </p>
                        <p className="work-title">Experience</p>
                        <p className="work-time">15 Year of experience</p>
                        <p className="work-title">Subject</p>
                      <p className="work-time"> Experience of teaching College Level AP courses and is currently
                          teaching AP Chemistry and AP Environmental Science. </p>
                        <p className="work-time"> She has Google Certified Educator Level 1 certification
                          and has extensive experience in on line teaching.  </p>
                        <p className="work-time"> She has Google Certified Educator Level 1 certification
                          and has extensive experience in on line teaching.  </p> 
                        <p className="work-time work-subject"> She has tutored O , A level , and High school  students.  </p>
                      </div>
                    </div> */}
                {/* <div className="subjectcarouselitem">
                      <div className="subjectcarouselimgs">
                        <img
                          className="subjectcarouselitem__image"
                          src="./assets/images/teacher12.jpg"
                        />
                        <p className="rankname">CLC Ranking</p>
                        <img
                          className="carousel-stars"
                          src="./assets/images/5.svg"
                          alt=""
                        />
                        <p className="ranknum">5.0</p>
                      </div>
                      <div className="subjectcarouselitem__content">
                        <h3 className="subjectcarouselitem__name">
                          Sadaf Haider Khan
                          </h3>
                        <p className="special-title-name">Subject Specialists</p>
                        <p className="subjectcarouselitem__description">
                          Sadaf Haider Khan has an MA in English Literature & a Graduate Diploma
                          in Education from Macquarie University, Sydney, Australia as well as an MA in English.
                          She has over 20 years of teaching experience in Pakistani and
                          Australian schools.She has taught the GCSE A-levels Literature at UCL Grades 7-10 in NSW,
                          Australia, at St. Leo's College, Wahroonga, and the IB MYP and IBDP English Language
                          and literature courses at TNS Beaconhouse.  She is currently the Head of
                          English at TNS Beaconhouse. She is a professionally competent and
                          dedicated teacher who will ensure each student she teaches identifies
                          their learning gaps and will assist them in every possible way
                          to overcome them and reach their full potential. She is equipped
                          with all the tools needed to teach English virtually and is  competently
                          incorporating the latest digital technologies to engage her students in their learning,
                          using Google Drive, Flipgrid, padlet,  Zoom and Google Meet and more
                          She will be available for online tutoring for Grades 6-12 English from the 5th of February 2021 onwards.
                          If you are ready to put in the effort that is needed to  excel in your subject,
                          she is the person who will make sure that you do.
                          </p>
                        <p className="work-title">Experience</p>
                        <p className="work-time">20 Years of experience</p>
                        <p className="work-title">Subject</p>
                        <p className="work-time"> She is a trained IB DP Language and Literature teacher and examiner. </p> 
                        <p className="work-time work-subject"> She has taught the GCSE A-levels Literature at UCL Grades 7-10 in NSW,
                          Australia, at St. Leo's College, Wahroonga, and the IB MYP. </p>
                      </div>
                    </div> */}
                {/* <div className="subjectcarouselitem">
                      <div className="subjectcarouselimgs">
                        <img
                          className="subjectcarouselitem__image"
                          src="./assets/images/teacher7.jpg"
                        />
                        <p className="rankname">CLC Ranking</p>
                        <img
                          className="carousel-stars"
                          src="./assets/images/5.svg"
                          alt=""
                        />
                        <p className="ranknum">5.0</p>
                      </div>
                      <div className="subjectcarouselitem__content">
                        <h3 className="subjectcarouselitem__name">
                          Imran Tahir
                          </h3>
                        <p className="special-title-name">Subject Specialists</p>
                        <p className="subjectcarouselitem__description">
                        He has been teaching for the last 18 years and has taught students from different backgrounds and nationalities. He is currently teaching Biology to O Level,  A-Level, & IB students. He also continues to train students for SAT and MCAT.
                          </p>
                        <p className="work-title">Experience</p>
                        <p className="work-time">18 Years of experience</p>
                        <p className="work-title">Subject</p>
                        <p className="work-time"> Currently teaching Biology to O Level, A Level & IB students.</p> 
                        <p className="work-time work-subject"> Training students for SAT and MCAT. </p>
                      </div>
                    </div> */}
                {/* <div className="subjectcarouselitem">
                                    <div className="subjectcarouselimgs">
                                      <img
                                        className="subjectcarouselitem__image"
                                        src="./assets/images/teacher9.jpg"
                                      />
                                      <p className="rankname">CLC Ranking</p>
                                      <img
                                        className="carousel-stars"
                                        src="./assets/images/5.svg"
                                        alt=""
                                      />
                                      <p className="ranknum">5.0</p>
                                    </div>
                                  <div className="subjectcarouselitem__content">
                                      <h3 className="subjectcarouselitem__name">
                                        Aqeel Haider
                                        </h3>
                                      <p className="special-title-name">Subject Specialists</p>
                                      <p className="subjectcarouselitem__description">
                                      Aqeel Haider has done BBA Honors in Finance, Maths, and Stats from the London School of Economics. He has 5 years of experience as a dedicated teacher of Mathematics to a large and diverse group of students. His proven ability to develop and implement innovative, student-centered teaching strategies and lesson plans has earned him a good reputation in the industry over a short period of time. He has successfully introduced motivational incentives to significantly improve student development and the provision of an encouraging learning environment that supports individual needs has brought laurels to him during his career. Currently, he teaches Mathematics to Grade 9 till Grade 12 in a multi-cultural and varied ability-level student environment. He is recognized as a professional development instructor of Mathematics 4024 conducted by CAIE. He has created comprehensive lesson plans incorporating various methods of teaching to ensure pupils are actively engaged and understand the materials. Moreover, he has developed and introduced an enrichment program for students who were not quite equipped to move onto the next level. Another feather in the cap is his service to the Math Department’s Planning Board.
                                        </p>
                                      <p className="work-title">Experience</p>
                                      <p className="work-time">5 Years of experience</p>
                                      <p className="work-title">Subject</p>
                                      <p className="work-time"> 5 years as a dedicated teacher of Mathematics to large and diverse student groups.</p> 
                                      <p className="work-time work-subject"> He teaches Mathematics to Grades 9 through Grade 12 in a multi-cultural and varied ability-level student </p>
                                    </div> 
                                  </div>*/}
              </OwlCarousel>
              <div className="sub-specialistview-btn">
                <Link to="/subjectspecialists">
                  <button className="viewall-btn">View All</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SubjectSpecialists;
