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
];

const Education = () => {
  const [education, setEducation] = useState(initEducation);


  function EducationRow({ edu, index }) {
    const [editOption, setEditOption] = useState(false);
    const [editForm, setEditForm] = useState(false);

    function handleInputChange(updatedEdu, index) {
    setEducation((prevEducation) => {
      const updatedEducation = [...prevEducation];
      updatedEducation[index] = updatedEdu;
      return updatedEducation;
    })
  }

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
        index={index}
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
              index={index}
              onInputChange={handleInputChange}
              onSave={setEditForm}
            />
          ) : null}
        </div>
      </div>
    );
  }

  const educationList = education.map((edu, index) => (
    <EducationRow edu={edu} key={edu.key} index={index} />
  ));

  return (
    <div className="education" style={{ backgroundColor: "yellow" }}>
      <h1>Education</h1>
      <div>{educationList}</div>
    </div>
  );
};

export default Education;
