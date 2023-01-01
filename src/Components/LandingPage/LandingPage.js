import TestBanner from "../StaticPages/TestBanner";
import React, { useState } from "react";
import OnlineTutoring from "../StaticPages/onlineTutoring";
import ProgramsOffered from "../StaticPages/ProgramsOffered";
import KeyTutoring from "../StaticPages/KeyTutoring";
import Onlinelearning from "../StaticPages/Onlinelearning";
import ChoroplethMap from "../StaticPages/GlobalPresence";
import WaystoLearn from "../StaticPages/WaystoLearn";
import Enquiry from "../StaticPages/Enquiry";
import ReactTooltip from "react-tooltip";
import Menu from "../Menu";


export default function LandingPage() {
  const [content, setContent] = useState("");
  return (
    <div>
    
      <Menu />
      <TestBanner />
      <OnlineTutoring />
      <ProgramsOffered />
      <KeyTutoring />
      <Onlinelearning />

      <div>
        <ChoroplethMap setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
      <WaystoLearn />
      <Enquiry />
    </div>
  );
}
