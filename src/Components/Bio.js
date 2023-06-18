import React, { useState } from "react";

import BioForm from "./BioForm";

const Bio = () => {
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
    <div className="bio" style={{ backgroundColor: "orange" }}>
      <h1>{bio.name}</h1>
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
      >
        <p>{bio.phone}</p>
        <p>{bio.email}</p>
        <p>{bio.location}</p>
        <p>{bio.website}</p>
        <p>{bio.linkedin}</p>
      </div>
      {editOption ? <button className="edit-button">Edit button</button> : null}
      {editForm ? <BioForm bio={bio} onInputChange={setBio} onSave={setEditForm} /> : null}
    </div>
  );
};

export default Bio;
