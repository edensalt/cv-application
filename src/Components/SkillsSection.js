import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Skill from "./Skills";
import DynamicGrid from "../Constants/DynamicGrid.js";

const SkillSection = () => {
  const [addOption, setAddOption] = useState(false);
  const storedSkills = JSON.parse(localStorage.getItem("skills"));

  const [skills, setSkills] = useState(
    storedSkills || [
      {
        key: uuidv4(),
        name: "New skill",
      },
    ]
  );

  useEffect(() => {
    console.table(skills);
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);

  function addSkill() {
    setSkills((prevSkills) => [
      ...prevSkills,
      {
        key: uuidv4(),
        name: "New skill",
      },
    ]);
  }

  const handleRemoveEdu = (skillKey) => {
    const updatedSkills = skills.filter((skill) => skill.key !== skillKey);
    setSkills(updatedSkills);
  };

  const handleSaveSkill = (updatedSkill) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.key === updatedSkill.key
          ? { ...skill, name: updatedSkill.name }
          : skill
      )
    );
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
      <DynamicGrid>
        {skills.map((skill) => (
          <Skill
            key={skill.key}
            skill={skill.name}
            onDelete={() => handleRemoveEdu(skill.key)}
            onSaveSkill={(updatedSkill) =>
              handleSaveSkill({ ...skill, name: updatedSkill })
            }
          />
        ))}
      </DynamicGrid>
    </div>
  );
};

export default SkillSection;
