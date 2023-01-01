import React, { Component } from "react";
import Menu from "./Menu";
import Home from "./Pages/Home";
import LMS from "./Pages/LMS";
import Faculty from "./Pages/Faculty";
import BecomeATutor from "./Pages/BecomeATutor";
import HowItWorks from "./Pages/HowItWorks";
import Curriculum from "./Pages/Curriculum";
import { Redirect, Route, Switch } from "react-router-dom";
import StudentRegister from "./StudentRegister";
import TutorRegister from "./TutorRegister";
import ShareButton from "./ShareButton";
import Footer from "./Footer";
import UK from "./Grades/UK";
import IB from "./Grades/IB";
import APCourses from "./Grades/APCourses";
import USA from "./Grades/USA";
import Languages from "./Grades/Languages";
import StudentChallan from "./StudentChallan";
import StudentPayment from "./StudentPayment";
import StripWrapper from "./StripJS/StripWrapper";
import CheckoutForm from "./StripJS/CheckOutForm";
import PremiumTutors from "./Pages/premiumtutors";
import SubjectSpecialists from "./Pages/SubjectSpecialists";
import Register from "./Register";
import ThankYou from "./StaticPages/ThankYou";
import LandingPage from "./LandingPage/LandingPage";
import PrivacyPolicy from "./StaticPages/PrivacyPolicy";
import Test from "./Pages/Test";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/learn-the-british-curiculum" component={LandingPage} />
          <Route exact path="/" component={Home} />
          <Route path="/LMS" component={LMS} />
          <Route path="/Faculty" component={Faculty} />
          <Route path="/howitswork" component={HowItWorks} />
          <Route path="/becomeatutor" component={BecomeATutor} />
          <Route path="/Curriculum" component={Curriculum} />
          <Route path="/StudentRegister" component={StudentRegister} />
          <Route path="/TutorRegister" component={TutorRegister} />
          <Route path="/UK" component={UK} />
          <Route path="/IB" component={IB} />
          <Route path="/APCourses" component={APCourses} />
          <Route path="/USA" component={USA} />
          <Route path="/Languages" component={Languages} />
          <Route path="/StudentChallan" component={StudentChallan} />
          <Route path="/StudentPayment" component={StudentPayment} />
          <Route path="/StripWrapper" component={StripWrapper} />
          <Route path="/checkoutform" component={CheckoutForm} />
          <Route path="/premiumtutors" component={PremiumTutors} />
          <Route path="/SubjectSpecialists" component={SubjectSpecialists} />
          <Route path="/register" component={Register} />
          <Route path="/thank-you" component={ThankYou} />
          <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
          <Route path="/Test" component={Test} />

          <Redirect to="/" />
        </Switch>
        <Footer />
        <ShareButton />
      </div>
    );
  }
}

export default Main;
