import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Skill from "./Skills";
import DynamicGrid from "../Constants/DynamicGrid.js";

const SkillSection = () => {
  const [addOption, setAddOption] = useState(false);
  const [skills, setSkills] = useState([
    {
      key: uuidv4(),
    },
  ]);

  function addSkill() {
    setSkills((prevSkills) => [
      ...prevSkills,
      {
        key: uuidv4(),
      },
    ]);
  }

  const handleRemoveEdu = (skillKey) => {
    const updatedSkills = skills.filter((skill) => skill.key !== skillKey);
    setSkills(updatedSkills);
  };


  return (
    <div className="skills">
      <div
        onMouseEnter={() => {
          setAddOption(true);
        }}
        onMouseLeave={() => {
          setAddOption(false);
        }}
        className="section-header"
      >
        Skills
        {addOption ? (
          <div className="add-option">
            <button className="add-button" onClick={addSkill}>
              Add a new skill
            </button>
          </div>
        ) : null}
      </div>
      <DynamicGrid className="skills-list-1">
        {skills.map((skill) => (
          <Skill key={skill.key} onDelete={() => handleRemoveEdu(skill.key)} />
        ))}
      </DynamicGrid>
    </div>
  );
};

export default SkillSection;
