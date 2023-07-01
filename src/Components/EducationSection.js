import React, { useState } from "react";

import Education from "./Education";

const EducationSection = () => {
  const [addOption, setAddOption] = useState(false);
  const [edus, setEdus] = useState([<Education />])

  function addEdu() {
    setEdus([...edus, <Education />])
  }

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
            <button
              className="add-button"
              onClick={addEdu}
            >
              Add new education
            </button>
          ) : null}
        </div>
        <div>{edus}</div>
    </div>
  );
};

export default EducationSection;
