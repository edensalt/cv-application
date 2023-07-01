import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Experience from "./Experience";

const ExperienceSection = () => {
  const [addOption, setAddOption] = useState(false);
  const [exps, setExps] = useState([
    {
      key: uuidv4(),
    },
  ]);

  function addExp() {
    setExps((prevExps) => [
      ...prevExps,
      {
        key: uuidv4(),
      },
    ]);
  }

  const handleRemoveEdu = (expKey) => {
    const updatedExps = exps.filter((exp) => exp.key !== expKey);
    setExps(updatedExps);
  };

  return (
    <div>
      <div
        onMouseEnter={() => {
          setAddOption(true);
        }}
        onMouseLeave={() => {
          setAddOption(false);
        }}
        className="section-header"
      >
        Work experience
        {addOption ? (
          <button className="add-button" onClick={addExp}>
            Add new work experience
          </button>
        ) : null}
      </div>
      <div>
        {exps.map((exp) => (
          <Experience key={exp.key} onDelete={() => handleRemoveEdu(exp.key)} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
