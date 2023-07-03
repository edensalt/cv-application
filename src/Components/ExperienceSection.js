import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Experience from "./Experience";

const ExperienceSection = () => {
  const [addOption, setAddOption] = useState(false);
  const storedExp = JSON.parse(localStorage.getItem("exps"));

  const [exps, setExps] = useState(
    storedExp || [
      {
        key: uuidv4(),
        company: "Company name",
        position: "Position",
        startDate: "Start date",
        endDate: "End date",
        responsibilities: "List of responsibilities",
      },
    ]
  );

  useEffect(() => {
    console.table(exps);
    localStorage.setItem("exps", JSON.stringify(exps));
  }, [exps]);

  function addExp() {
    setExps((prevExps) => [
      ...prevExps,
      {
        key: uuidv4(),
        company: "Company name",
        position: "Position",
        startDate: "Start date",
        endDate: "End date",
        responsibilities: "List of responsibilities",
      },
    ]);
  }

  const handleRemoveEdu = (expKey) => {
    const updatedExps = exps.filter((exp) => exp.key !== expKey);
    setExps(updatedExps);
  };

  const handleSaveExp = (updatedExp) => {
    setExps((prevExps) =>
      prevExps.map((exp) =>
        exp.key === updatedExp.key
          ? {
              ...exp,
              company: updatedExp.company,
              position: updatedExp.position,
              startDate: updatedExp.startDate,
              endDate: updatedExp.endDate,
              responsibilities: updatedExp.responsibilities,
            }
          : exp
      )
    );
  };

  return (
    <div className="exp">
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
          <div className="add-option">
            <button className="add-button" onClick={addExp}>
              Add new work experience
            </button>
          </div>
        ) : null}
      </div>
      <div>
        {exps.map((exp) => (
          <Experience
            key={exp.key}
            exp={exp}
            onDelete={() => handleRemoveEdu(exp.key)}
            onSaveExp={(updatedExp) =>
              handleSaveExp({
                ...exp,
                company: updatedExp.company,
                position: updatedExp.position,
                startDate: updatedExp.startDate,
                endDate: updatedExp.endDate,
                responsibilities: updatedExp.responsibilities,
              })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
