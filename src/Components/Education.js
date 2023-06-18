import React, { useState } from "react";
import EduForm from "./EduForm";

let initEducation = [
  {
    key: 1,
    school: "School name",
    degree: "Degree",
    study: "Field of study",
    startDate: "Start date",
    endDate: "End date",
    accomplishments: "List of accomplishments",
  },
  {
    key: 2,
    school: "Second school name",
    degree: "Degree",
    study: "Field of study",
    startDate: "Start date",
    endDate: "End date",
    accomplishments: "List of accomplishments",
  },
]

const Education = () => {
  const [education, setEducation] = useState(initEducation);

  function EducationRow({ edu }) {
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
      className="edu">
        <h2>{edu.school}</h2>
        <p>{edu.degree}</p>
        <p>{edu.study}</p>
        <p>
          {edu.startDate} - {edu.endDate}
        </p>
        <p>{edu.accomplishments}</p>
        <div>
          {editOption ? <button className="edit-button">Edit button</button> : null}
          {editForm ? <EduForm edu={edu} onInputChange={setEducation} onSave={setEditForm} /> : null}
        </div>
      </div>
    );
  }

  const educationList = [];

  education.forEach((edu) => {
    educationList.push(<EducationRow edu={edu} key={edu.key} />);
  });

  return (
    <div className="education" style={{ backgroundColor: "yellow" }}>
      <h1>Education</h1>
      <div>{educationList}</div>
    </div>
  );
};

export default Education;
