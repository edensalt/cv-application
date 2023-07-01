import React, { useState } from "react";

import BioForm from "./BioForm";

const BioSection = () => {
  const [bio, setBio] = useState({
    name: "Full Name",
    phone: "555-555-5555",
    email: "yourname@email.com",
    location: "City, State",
    website: "github.com/yourname",
    linkedin: "linkedin.com/in/yourname",
  });

  const [editOption, setEditOption] = useState(false);
  const [editForm, setEditForm] = useState(false);

  return (
    <div
      className="bio"
      style={{ backgroundColor: "orange" }}
      onMouseEnter={() => {
        setEditOption(true);
      }}
      onMouseLeave={() => {
        setEditOption(false);
      }}
    >
      <div className="name">{bio.name}</div>
      <div className="bio-grid">
        <div>
          <div>{bio.phone}</div>
          <div>{bio.email}</div>
        </div>
        <div>{bio.location}</div>
        <div>
          <div>{bio.website}</div>
          <div>{bio.linkedin}</div>
        </div>
      </div>
      <div>
        {editOption ? (
          <button
            className="edit-button"
            onClick={() => {
              setEditForm(true);
            }}
          >
            Edit button
          </button>
        ) : null}
        {editForm ? (
          <BioForm bio={bio} onInputChange={setBio} onSave={setEditForm} />
        ) : null}
      </div>
    </div>
  );
};

export default BioSection;
