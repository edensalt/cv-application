import React, { useState } from "react";
import ExpForm from "./ExpForm";

const Experience = ({ onDelete }) => {
    const [exp, setExperience] = useState({
      company: "Company name",
      position: "Position",
      startDate: "Start date",
      endDate: "End date",
      accomplishments: "List of responsibilities",
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
        className="exp"
        style={{ backgroundColor: "aqua" }}
      >
        <h2>{exp.company}</h2>
        <p>{exp.position}</p>
        <p>
          {exp.startDate} - {exp.endDate}
        </p>
        <p>{exp.responsibilities}</p>
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
            <ExpForm
              exp={exp}
              onInputChange={setExperience}
              onSave={setEditForm}
            />
          ) : null}
        </div>
      </div>
    );
  };

export default Experience;