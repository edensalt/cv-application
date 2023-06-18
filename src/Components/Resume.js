import React, {Component} from "react";

import Bio from "./Bio";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
    render() {
        return (
            <div>
                <Bio />
                <Education />
                <Experience />
                <Skills />
            </div>
        )
    }
}

export default Resume;