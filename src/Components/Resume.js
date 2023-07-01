import React, { Component } from "react";

import Bio from "./Bio";
import EducationSection from "./EducationSection";
import Skills from "./Skills";
import ExperienceSection from "./ExperienceSection";

class Resume extends Component {
  render() {
    return (
      <div>
        <Bio />
        <EducationSection />
        <ExperienceSection />
        <Skills />
      </div>
    );
  }
}

export default Resume;
