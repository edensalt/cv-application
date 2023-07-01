import React, { useState } from "react";

import SkillsForm from "./SkillsForm";

const Skill = ({ onDelete }) => {
  const [skill, setSkill] = useState(["Add a skill here."]);

  const [editOption, setEditOption] = useState(false);
  const [editForm, setEditForm] = useState(false);

  return (
    <div
      style={{ backgroundColor: "pink" }}
      onMouseEnter={() => {
        setEditOption(true);
      }}
      onMouseLeave={() => {
        setEditOption(false);
      }}
    >
      <div>{skill}</div>
      <div>
        {editOption ? (
          <div>
            <button
              className="edit-button"
              onClick={() => {
                setEditForm(true);
              }}
            >
              Edit button
            </button>
            <button onClick={onDelete}>Delete button</button>
          </div>
        ) : null}
        {editForm ? (
          <SkillsForm
            skill={skill}
            onInputChange={setSkill}
            onSave={setEditForm}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Skill;
