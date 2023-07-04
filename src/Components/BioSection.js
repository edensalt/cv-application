import React, { useEffect, useState } from "react";

import BioForm from "./BioForm";

const BioSection = () => {

  const storedBio = JSON.parse(localStorage.getItem('bio'));

  const [bio, setBio] = useState(
    storedBio || {
    name: "Full name",
    phone: "555-555-5555",
    email:  "yourname@email.com",
    location: "City, State",
    website: "github.com/yourname",
    linkedin: "linkedin.com/in/yourname",
  });

  useEffect(() => {
    localStorage.setItem('bio', JSON.stringify(bio))
  }, [bio])

  const [editOption, setEditOption] = useState(false);
  const [editForm, setEditForm] = useState(!storedBio);

  return (
    <div
      className="bio"
      onMouseEnter={() => {
        if (!editForm) {
          setEditOption(true);
        }
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
          <div className="edit-option">
            <button
              className="edit-button bio-edit"
              onClick={() => {
                setEditForm(true);
              }}
            >
              Edit header information
            </button>
          </div>
        ) : null}
        {editForm ? (
          <BioForm bio={bio} onInputChange={setBio} onSave={setEditForm} />
        ) : null}
      </div>
    </div>
  );
};

export default BioSection;
