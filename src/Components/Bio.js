import React, { Component } from "react";

class Bio extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      phone: "",
      email: "",
      website: "",
      linkedin: "",
      edit: false,
    };
  }

  toggleEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value,
    });
  };

  handlePhoneChange = e => {
    this.setState({
      phone: e.target.value,
    });
  };

  handleEmailChange = e => {
    this.setState({
      email: e.target.value,
    });
  };

  handleWebsiteChange = e => {
    this.setState({
      website: e.target.value,
    });
  };

  handleLinkedinChange = e => {
    this.setState({
      linkedin: e.target.value,
    });
  };

  render() {
    const { name, phone, email, website, linkedin, edit } = this.state;

    return (
      <div>
        <div>
          <h1>{name ? name : "Your Name"}</h1>
        </div>
        <div>
          <p>{phone ? phone : "555-555-5555"}</p>
        </div>
        <div>
          <p>{email ? email : "youremail@email.com"}</p>
        </div>
        <div>
          <p>{website ? website : "yourportfolio.com"}</p>
        </div>
        <div>
          <p>{linkedin ? linkedin : "linkedin.com/you"}</p>
        </div>
        <button className="edit-toggle" type="button" onClick={this.toggleEdit}>
          Edit
        </button>

        {edit && (
          <form id="bio-edit">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              onChange={this.handleNameChange}
            />
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="text"
              placeholder="Phone number"
              onChange={this.handlePhoneChange}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              onChange={this.handleEmailChange}
            />
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="text"
              placeholder="Website"
              onChange={this.handleWebsiteChange}
            />
            <label htmlFor="linkedin"></label>
            <input
              id="linkedin"
              type="text"
              placeholder="LinkedIn"
              onChange={this.handleLinkedinChange}
            />
            <button type="button" onClick={this.toggleEdit}>
                Close edit
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Bio;