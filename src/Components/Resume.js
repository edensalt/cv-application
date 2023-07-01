import React, { Component } from "react";

import Bio from "./Bio";
import EducationSection from "./EducationSection";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Bio />
        <EducationSection />
        <Experience />
        <Skills />
      </div>
    );
  }
}

export default Resume;
