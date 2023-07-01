import React, { Component } from "react";

import Bio from "./Bio";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import SkillSection from "./SkillsSection";

class Resume extends Component {
  render() {
    return (
      <div>
        <Bio />
        <EducationSection />
        <ExperienceSection />
        <SkillSection />
      </div>
    );
  }
}

export default Resume;
