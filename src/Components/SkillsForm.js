import React from "react";

const SkillsForm = ({ skill, onInputChange, onSave }) => {
  return (
    <div className="form-skills-div">
      <form>
        <label htmlFor="skills">Skills:</label>
        <input
          value={skill}
          id="skill"
          onChange={(e) => onInputChange(e.target.value )}
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

export default SkillsForm;
