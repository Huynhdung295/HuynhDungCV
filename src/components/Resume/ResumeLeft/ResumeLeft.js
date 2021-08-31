import React from "react";
import EducationRS from "./Education/Education";
import HomeRS from "./Home/Home";
import ProfileRS from "./Profile/Profile";
import "./ResumeLeft.css";
import SkillRS from "./Skills/Skills";
import SocialRS from "./Social/Social";
import Work from "./Work/Work";

function ResumeLeft(props) {
  
  return (
    <div className="resume__left">
      <HomeRS />
      <SocialRS />
      <ProfileRS />
      <EducationRS />
      <Work />
      <SkillRS />
  
    </div>
  );
}

export default ResumeLeft;
