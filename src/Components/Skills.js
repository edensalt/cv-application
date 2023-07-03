import React, { useState } from "react";

import SkillsForm from "./SkillsForm";
import Pencil from "../Assets/Pencil/pencil";
import Trash from "../Assets/Trash/trash";

const Skill = ({ onDelete }) => {
  const [skill, setSkill] = useState(["New skill"]);

  const [editOption, setEditOption] = useState(false);
  const [editForm, setEditForm] = useState(true);

  return (
    <div>
      <div
        onMouseEnter={() => {
          if (!editForm) {
            setEditOption(true);
          }
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
            title="Edit entry"
              className="edit-skill-button"
              onClick={() => {
                setEditForm(true);
              }}
            >
              <Pencil />
            </button>
            <button title="Delete entry" onClick={onDelete}><Trash /></button>
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
