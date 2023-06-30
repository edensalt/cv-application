import React from "react";

const EduForm = ({ edu, index, onInputChange, onSave }) => {
  return (
    <div>
      <form>
        <label htmlFor="school">School:</label>
        <input type="text" value={edu.school} id="school" onChange={(e) =>onInputChange({...edu, school: e.target.value}, index)} />
        <label htmlFor="degree">Degree:</label>
        <input type="text" value={edu.degree} id="degree" onChange={(e) =>onInputChange({...edu, degree: e.target.value}, index)} />
        <label htmlFor="study">Study:</label>
        <input type="text" value={edu.study} id="study" onChange={(e) =>onInputChange({...edu, study: e.target.value}, index)} />
        <label htmlFor="name">Start date:</label>
        <input type="text" value={edu.startDate} id="start-date" onChange={(e) =>onInputChange({...edu, startDate: e.target.value}, index)} />
        <label htmlFor="endDate">End date:</label>
        <input type="text" value={edu.endDate} id="school" onChange={(e) =>onInputChange({...edu, endDate: e.target.value}, index)} />
        <label htmlFor="accomplishments">List of accomplishments:</label>
        <input type="text" value={edu.accomplishments} id="accomplishments" onChange={(e) =>onInputChange({...edu, accomplishments: e.target.value}, index)} />
        <button onClick={(e) => onSave(false)}>Save Changes</button>
      </form>
    </div>
  );
};

export default EduForm;