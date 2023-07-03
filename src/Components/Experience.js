import React, { useState } from "react";
import ExpForm from "./ExpForm";

const Experience = ({ onDelete }) => {
  const [exp, setExperience] = useState({
    company: "Company name",
    position: "Position",
    startDate: "Start date",
    endDate: "End date",
    responsibilities: "List of responsibilities",
  });

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
        className="exp"
      >
        <div className="top">
          <div>
            <div className="entry-header">{exp.company}</div>
          </div>
          <div>
            {exp.startDate} - {exp.endDate}
          </div>
        </div>
        <div className="study">
          <div className="position">{exp.position}</div>
        </div>
        <div>{exp.responsibilities}</div>
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
        <ExpForm exp={exp} onInputChange={setExperience} onSave={setEditForm} />
      ) : null}
    </div>
  );
};

export default Experience;
