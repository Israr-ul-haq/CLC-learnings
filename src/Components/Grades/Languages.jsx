import React, { Component } from 'react';
import WOW from 'wowjs';
import { LanguagesList } from '../../shared/LanguagesList';
import DynamicGradeLanguage from './DynamicGradeLanguage';
import Menu from '../Menu';
class Languages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: LanguagesList,
      curriculum: this.props.history.location.state.curriculum,
      // bool: this.props.history.location.state.bool
    };
  }

  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
    }).init();
  }
  render() {
    return (
      <>
        <Menu />

        <section className='curriculumaccordion mt-0'>
          <div className='container'>
            <div className='curriculumaccordion__content'>
              <div className='curriculumaccordiontop'>
                <h2 className='sectiontitle curriculumaccordiontop__title wow focus-in-expand'>
                  Language
                </h2>
              </div>
              <div className='curriculumaccordionbottom'>
                <div className='curriculumaccordionsection'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='curriculumaccordionsection__content'>
                        <DynamicGradeLanguage
                          data={this.state.data}
                          curriculum={this.state.curriculum}
                          // bool={this.state.bool}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Languages;
