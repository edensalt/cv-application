import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Education from "./Education";

const EducationSection = () => {
  const [addOption, setAddOption] = useState(false);
  const [edus, setEdus] = useState([
    {
      key: uuidv4(),
      display: <Education />,
    },
  ]);

  function addEdu() {
    setEdus([...edus, {
      key: uuidv4(),
      display: <Education />,
    },]);
  }

  console.table(edus);

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
        Education
        {addOption ? (
          <button className="add-button" onClick={addEdu}>
            Add new education
          </button>
        ) : null}
      </div>
      <div>{edus.map((edu) => (
        <div key={edu.key}>{edu.display}</div>
      ))}</div>
    </div>
  );
};

export default EducationSection;
