import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import EduForm from "./EduForm";

const Education = () => {
  const [edu, setEducation] = useState({
    key: uuidv4(),
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
      onClick={() => {
        setEditForm(true);
      }}
      className="edu"
      style={{ backgroundColor: "yellow" }}
    >
      <h2>{edu.school}</h2>
      <p>{edu.degree}</p>
      <p>{edu.study}</p>
      <p>
        {edu.startDate} - {edu.endDate}
      </p>
      <p>{edu.accomplishments}</p>
      <div>
        {editOption ? (
          <button className="edit-button">Edit button</button>
        ) : null}

        {editForm ? (
          <EduForm
            edu={edu}
            onInputChange={setEducation}
            onSave={setEditForm}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Education;
