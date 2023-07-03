import React from "react";

import BioSection from "./BioSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import SkillSection from "./SkillsSection";

const Resume = () => {
  return (
    <div className="resume">
      <BioSection />
      <EducationSection />
      <ExperienceSection />
      <SkillSection />
    </div>
  );
};

export default Resume;
