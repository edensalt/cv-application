import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Education from "./Education";

const EducationSection = () => {
  const [addOption, setAddOption] = useState(false);
  const [edus, setEdus] = useState([
    {
      key: uuidv4(),
    },
  ]);

  function addEdu() {
    setEdus((prevEdus) => [
      ...prevEdus,
      {
        key: uuidv4(),
      },
    ]);
  }

  const handleRemoveEdu = (eduKey) => {
    const updatedEdus = edus.filter((edu) => edu.key !== eduKey);
    setEdus(updatedEdus);
  };

  return (
    <div className="edu">
      <div
        onMouseEnter={() => {
          setAddOption(true);
        }}
        onMouseLeave={() => {
          setAddOption(false);
        }}
        className="section-header"
      >
        Education
        {addOption ? (
          <div className="add-option">
            <button className="add-button" onClick={addEdu}>
              Add new education
            </button>
          </div>
        ) : null}
      </div>
      <div>
        {edus.map((edu) => (
          <Education key={edu.key} onDelete={() => handleRemoveEdu(edu.key)} />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
