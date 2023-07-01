import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Skill from "./Skills";

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
    <div>
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
          <button className="add-button" onClick={addSkill}>
            Add a new skill
          </button>
        ) : null}
      </div>
      <div>
        {skills.map((skill) => (
          <Skill key={skill.key} onDelete={() => handleRemoveEdu(skill.key)} />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
