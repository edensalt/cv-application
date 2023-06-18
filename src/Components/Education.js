import React, { useState } from "react";

const Education = () => {
  const [education, setEducation] = useState([
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
      school: "School name",
      degree: "Degree",
      study: "Field of study",
      startDate: "Start date",
      endDate: "End date",
      accomplishments: "List of accomplishments",
    },
  ]);

  const [editOption, setEditOption] = useState(false);
  const [editForm, setEditForm] = useState(false);

  function EducationRow({ edu }) {
    return (
      <div>
        <h2>{edu.school}</h2>
        <p>{edu.degree}</p>
        <p>{edu.study}</p>
        <p>
          {edu.startDate} - {edu.endDate}
        </p>
        <p>{edu.accomplishments}</p>
      </div>
    );
  }

  const educationList = [];

  education.forEach((edu) => {
    educationList.push(<EducationRow edu={edu} />);
  });

  return (
    <div className="education" style={{ backgroundColor: "yellow" }}>
      <h1>Education</h1>
      <div>{educationList}</div>
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
      ></div>
      {editOption ? <button className="edit-button">Edit button</button> : null}
      {/* {editForm ? <BioForm bio={bio} onInputChange={setBio} onSave={setEditForm} /> : null} */}
    </div>
  );
};

export default Education;
