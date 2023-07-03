import React from "react";

const ExpForm = ({ exp, onInputChange, onSave }) => {
  return (
    <div className="form-div">
      <form>
        <label htmlFor="school">Company:</label>
        <input
          type="text"
          value={exp.company}
          id="company"
          onChange={(e) => onInputChange({ ...exp, company: e.target.value })}
        />
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          value={exp.position}
          id="position"
          onChange={(e) => onInputChange({ ...exp, position: e.target.value })}
        />
        <label htmlFor="name">Start date:</label>
        <input
          type="text"
          value={exp.startDate}
          id="start-date"
          onChange={(e) => onInputChange({ ...exp, startDate: e.target.value })}
        />
        <label htmlFor="endDate">End date:</label>
        <input
          type="text"
          value={exp.endDate}
          id="school"
          onChange={(e) => onInputChange({ ...exp, endDate: e.target.value })}
        />
        <label htmlFor="accomplishments">List of accomplishments:</label>
        <input
          type="text"
          value={exp.responsibilities}
          id="responsibilities"
          onChange={(e) =>
            onInputChange({ ...exp, responsibilities: e.target.value })
          }
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSave(false);
          }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ExpForm;
