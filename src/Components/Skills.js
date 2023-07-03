import React, { useState } from "react";

import SkillsForm from "./SkillsForm";
import Pencil from "../Assets/Pencil/pencil";

const Skill = ({ onDelete }) => {
  const [skill, setSkill] = useState(["Add a skill here."]);

  const [editOption, setEditOption] = useState(false);
  const [editForm, setEditForm] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => {
          setEditOption(true);
        }}
        onMouseLeave={() => {
          setEditOption(false);
        }}
        className="skills"
      >
        <div>{skill}</div>
        {editOption ? (
          <div className="entry-skill-options">
            <button
              className="edit-skill-button"
              onClick={() => {
                setEditForm(true);
              }}
            >
              <Pencil />
            </button>
            <button onClick={onDelete}>Delete button</button>
          </div>
        ) : null}
      </div>
      {editForm ? (
          <SkillsForm
            skill={skill}
            onInputChange={setSkill}
            onSave={setEditForm}
          />
        ) : null}
    </div>
  );
};

export default Skill;
