import React, { useEffect, useState } from "react";

import EduForm from "./EduForm";

const Education = ({ edu: initialEdu, onDelete, onSaveEdu }) => {
  const [edu, setEducation] = useState(initialEdu);


  useEffect(() => {
    setEducation(initialEdu)
  }, [initialEdu]);

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
            <button className="delete-button" onClick={onDelete}>
              Delete entry
            </button>
          </div>
        ) : null}
      </div>
      {editForm ? (
        <EduForm edu={edu} onInputChange={setEducation} onSave={() => {
          setEditForm(false);
        onSaveEdu(edu)}} />
      ) : null}
    </div>
  );
};

export default Education;
