import React, { Component } from 'react';
import WhyUs from '../StaticPages/WhyUs';
import HeroBanner from '../StaticPages/HeroBanner';
import OurCompetence from '../StaticPages/Competence';
import CountCLC from '../StaticPages/CountCLC';
import RegisterMenuDiv from '../StaticPages/RegisterMenuDiv';
import Testimonial from '../StaticPages/Testimonial';
import SubjectSpecialists from '../StaticPages/SubjectSpecialists';
import PremiumTutors from '../StaticPages/PremiumTutors';
import ContactUs from './ContactUs';
import Menu from '../Menu';

class Home extends Component {
  render() {
    return (
      <>
        <Menu />
        <HeroBanner />
        <WhyUs />
        <OurCompetence />
        <CountCLC />
        <RegisterMenuDiv />
        <Testimonial />
        <SubjectSpecialists />
        <PremiumTutors />
        <ContactUs />
      </>
    );
  }
}

export default Home;
