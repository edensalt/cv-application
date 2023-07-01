import React, { Component } from "react";

import BioSection from "./BioSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import SkillSection from "./SkillsSection";

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <BioSection />
        <EducationSection />
        <ExperienceSection />
        <SkillSection />
      </div>
    );
  }
}

export default Resume;
