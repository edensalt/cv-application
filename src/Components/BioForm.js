import React from "react";

const BioForm = ({ bio, onInputChange, onSave }) => {
  return (
    <div className="form-div">
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" value={bio.name} id="name" onChange={(e) =>onInputChange({...bio, name: e.target.value})} />
        <label htmlFor="phone">Phone number:</label>
        <input type="text" value={bio.phone} id="phone" onChange={(e) =>onInputChange({...bio, phone: e.target.value})} />
        <label htmlFor="email">Email:</label>
        <input type="email" value={bio.email} id="email" onChange={(e) =>onInputChange({...bio, email: e.target.value})} />
        <label htmlFor="location">Location:</label>
        <input type="text" value={bio.location} id="location" onChange={(e) =>onInputChange({...bio, location: e.target.value})} />
        <label htmlFor="name">Github:</label>
        <input type="text" value={bio.website} id="website" onChange={(e) =>onInputChange({...bio, website: e.target.value})} />
        <label htmlFor="name">LinkedIn:</label>
        <input type="text" value={bio.linkedin} id="linkedin" onChange={(e) =>onInputChange({...bio, linkedin: e.target.value})} />
        <button onClick={(e) => {
          e.stopPropagation();
          onSave(false)}}>Save Changes</button>
      </form>
    </div>
  );
};

export default BioForm;
