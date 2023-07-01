import React, { useState } from "react";

import EduForm from "./EduForm";

const Education = ({ onDelete }) => {
  const [edu, setEducation] = useState({
    school: "School name",
    degree: "Degree",
    study: "Field of study",
    startDate: "Start date",
    endDate: "End date",
    accomplishments: "List of accomplishments",
  });

  const [editOption, setEditOption] = useState(false);
  const [editForm, setEditForm] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setEditOption(true);
      }}
      onMouseLeave={() => {
        setEditOption(false);
      }}
      className="edu"
    >
      <div className="top">
        <div>
          <div className="entry-header">{edu.school}</div>
        </div>
        <div>
          {edu.startDate} - {edu.endDate}
        </div>
      </div>
      <div className="study">
            <div className="degree">{edu.degree}</div>
            <div>{edu.study}</div>
          </div>
      <div>{edu.accomplishments}</div>
      {editOption ? (
        <div className="entry-options">
          <button
            className="edit-button"
            onClick={() => {
              setEditForm(true);
            }}
          >
            Edit entry
          </button>
          <button className="delete-button" onClick={onDelete}>Delete entry</button>
        </div>
      ) : null}

      {editForm ? (
        <EduForm
          edu={edu}
          onInputChange={setEducation}
          onSave={setEditForm}
        />
      ) : null}
    </div>
  );
};

export default Education;
