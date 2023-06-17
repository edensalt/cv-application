import React, { Component } from "react";
import uniqid from "uniqid";

import "./App.css";

class ContactRow extends Component {
  render() {
    const { name, phone, email } = this.props;

    return (
      <div>
        <h1>{name}</h1>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    );
  }
}

class EducationRow extends Component {
  render() {
    const { school, degree, startDate, endDate } = this.props;

    return (
      <div>
        <h2>{school}</h2>
        <p>{degree}</p>
        <p>{startDate}</p>
        <p>{endDate}</p>
      </div>
    );
  }
}

class ExperienceRow extends Component {
  render() {
    const { company, title } = this.props;

    return (
      <div>
        <h2>{company}</h2>
        <p>{title}</p>
      </div>
    );
  }
}

class SkillsRow extends Component {
  render() {
    const { skills } = this.props;

    return (
      <div>
        <p>{skills}</p>
      </div>
    );
  }
}

class Preview extends Component {
  render() {
    const { input } = this.props;

    const contact = [];
    const education = [];
    const experience = [];
    const skills = [];

    // let lastCategory = null;

    input.forEach((section) => {
      if (section.category === "contact") {
        contact.push(
          <ContactRow
            name={section.name}
            phone={section.phone}
            email={section.email}
            key={section.id}
          />
        );
      }

      if (section.category === "education") {
        education.push(
          <EducationRow
          school={section.school}
          degree={section.degree}
          startDate={section.startDate}
          endDate={section.endDate}
          key={section.id}
          />
        );
      }

      if (section.category === "experience") {
        experience.push(
          <ExperienceRow
            company={section.company}
            title={section.title}
            key={section.id}
          />
        );
      }

      if (section.category === "skills") {
        skills.push(
          <SkillsRow
            skills={section.skills}
            key={section.id}
          />
        );
      }
    });

    return (
      <div>
        <div>{contact}</div>
        <h1>Education</h1>
        <div>{education}</div>
        <h1>Experience</h1>
        <div>{experience}</div>
        <h1>Skills</h1>
        <div>{skills}</div>
      </div>
    );
  }
}

const DATA = [
  {
    category: "contact",
    name: "Eden B",
    phone: "555-555-5555",
    email: "eden@eden.com",
    id: uniqid(),
  },
  {
    category: "education",
    school: "Tulane",
    degree: "Public Health",
    startDate: "2014",
    endDate: "2017",
    id: uniqid(),
  },
  {
    category: "experience",
    company: "Wheel",
    title: "Operations Manager",
    startDate: "2021",
    endDate: "2023",
    id: uniqid(),
  },
  {
    category: "experience",
    company: "Ready",
    title: "Talent Acquisition Manager",
    startDate: "2017",
    endDate: "2021",
    id: uniqid(),
  },
  {
    category: "skills",
    skills: "React.js, JavaScript, HTML, CSS",
    id: uniqid(),
  },
];

class App extends Component {
  render() {
    console.log(DATA);
    return <Preview input={DATA} />;
  }
}

export default App;
