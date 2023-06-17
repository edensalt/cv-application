import React, {Component} from "react";

import Bio from "./Bio";
import Education from "./Education";

class Resume extends Component {
    render() {
        return (
            <div>
                <Bio />
                <Education />
                {/* <Experience />
                <Skills /> */}
            </div>
        )
    }
}

export default Resume;