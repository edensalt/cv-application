import React, { Component } from "react";
import "./App.css";

class SectionHeaderRow extends Component {
  render() {
    const { category } = this.props;
    return <h1>{category}</h1>;
  }
}

class SectionRow extends Component {
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

class Preview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFormVisible: false,
    };
  }

  render() {
    const { input } = this.props;
    const rows = [];
    // let lastCategory = null;

    input.forEach((section) => {
      if (section.category === "experience") {
        console.log(section.category);
        rows.push(
          <SectionHeaderRow
            category={section.category}
            key={section.category}
          />
        );
        rows.push(
          <SectionRow
            company={section.company}
            title={section.title}
            key={section.company}
          />
        );
      }
      // lastCategory = section.category;
    });

    return <div>{rows}</div>;
  }
}

const DATA = [
  {
    category: "contact",
    name: "Eden B",
    phone: "555-555-5555",
    email: "eden@eden.com",
  },
  {
    category: "education",
    school: "Tulane",
    degree: "Public Health",
    startDate: "2014",
    endDate: "2017",
  },
  {
    category: "experience",
    company: "Wheel",
    title: "Operations Manager",
    startDate: "2021",
    endDate: "2023",
  },
  {
    category: "experience",
    company: "Ready",
    title: "Talent Acquisition Manager",
    startDate: "2017",
    endDate: "2021",
  },
  {
    category: "skills",
    skills: "React.js, JavaScript, HTML, CSS",
  },
];

class App extends Component {
  render() {
    return <Preview input={DATA} />;
  }
}

export default App;
