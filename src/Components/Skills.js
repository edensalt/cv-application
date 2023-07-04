import React, { useEffect, useState } from "react";

import SkillsForm from "./SkillsForm";
import Pencil from "../Assets/Pencil/pencil";
import Trash from "../Assets/Trash/trash";

const Skill = ({ skill: initialSkill, onDelete, onSaveSkill, isNew }) => {
  
  const [skill, setSkill] = useState([initialSkill]);

  useEffect(() => {
    setSkill(initialSkill)
  }, [initialSkill]);


  const [editOption, setEditOption] = useState(false);
  const [editForm, setEditForm] = useState(isNew);

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
            onSave={() => {
              setEditForm(false);
            onSaveSkill(skill)}}
          />
        ) : null}
    </div>
  );
};

export default Skill;
