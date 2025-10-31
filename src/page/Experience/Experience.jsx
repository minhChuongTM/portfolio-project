import Certifications from "@/components/ContentComponents/Education/Certifications";
import Degrees from "@/components/ContentComponents/Education/Degrees";
import Education from "@/components/ContentComponents/Education/Education";
import React from "react";

function Experience() {
    return (
        <div>
            <Education />
            <Degrees />
            <Certifications />
        </div>
    );
}

export default Experience;
