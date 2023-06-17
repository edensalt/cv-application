import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      school: "",
      degree: "",
      study: "",
      startDate: "",
      endDate: "",
      accomplishments: "",
      edit: false,
      add: false,
      education: [
        {
          id: uniqid(),
          school: "Amazing University",
          degree: "Bachelor's",
          study: "Not Computer Science",
          startDate: "2014",
          endDate: "2017",
          accomplishments: "Did some really neat things",
        },
      ],
    };
  }

  toggleEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };

  toggleAdd = () => {
    this.setState((prevState) => ({
      add: !prevState.add,
    }));
  };

  handleSchoolChange = (e) => {
    this.setState({
      school: e.target.value,
    });
  };

  handleDegreeChange = (e) => {
    this.setState({
      degree: e.target.value,
    });
  };

  handleStudyChange = (e) => {
    this.setState({
      study: e.target.value,
    });
  };

  handleStartChange = (e) => {
    this.setState({
      startDate: e.target.value,
    });
  };

  handleEndChange = (e) => {
    this.setState({
      endDate: e.target.value,
    });
  };

  handleAccomplishmentsChange = (e) => {
    this.setState({
      accomplishments: e.target.value,
    });
  };

  handleRemove = (key) => {
    const updateEducation = this.state.education.filter(
      (education) => education.id !== key
    );
    this.setState({
      education: updateEducation,
    });
  };

  render() {
    const {
      school,
      degree,
      study,
      startDate,
      endDate,
      accomplishments,
      edit,
      education,
    } = this.state;

    return (
      <div>
        <h2>Education</h2>
        {education.map((edu) => {
          return (
            <div>
              <h3>{edu.school}</h3>
              <p>{edu.degree}</p>
              <p>{edu.study}</p>
              <p>
                {edu.startDate} - {edu.endDate}
              </p>
              <p>{edu.accomplishments}</p>
              <button className="edit-toggle" type="button" onClick={this.toggleEdit}>
          Edit
        </button>
            </div>
          );
        })}
        <button onClick={this.toggleAdd}>Add</button>

        {edit && (
          <form id="edu-edit">
            <label htmlFor="school">School</label>
            <input
              id="school"
              type="text"
              placeholder="School"
              onChange={this.handleSchoolChange}
            />
            <label htmlFor="degree">Degree</label>
            <input
              id="degree"
              type="text"
              placeholder="Degree"
              onChange={this.handleDegreeChange}
            />
            <label htmlFor="study">Study</label>
            <input
              id="study"
              type="text"
              placeholder="Study"
              onChange={this.handleStudyChange}
            />
            <label htmlFor="startDate">Start Date</label>
            <input
              id="startDate"
              type="text"
              placeholder="Start date"
              onChange={this.handleStartChange}
            />
            <label htmlFor="endDate">End Date</label>
            <input
              id="endDate"
              type="text"
              placeholder="End date"
              onChange={this.handleEndChange}
            />
            <label htmlFor="accomplishments">Accomplishments</label>
            <input
              id="accomplishments"
              type="text"
              placeholder="Accomplishments"
              onChange={this.handleAccomplishmentsChange}
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

export default Education;
