import React from "react";

function extraInfo(resume) {
    return (
        <div>
            <div>
                <h3>Certifications</h3>
                <p>{resume.certifications && resume.certifications.join(', ')}</p>
            </div>
            <div>
                <h3>Interests</h3>
                <p>{resume.interests && resume.interests.join(', ')}</p>
            </div>
        </div>
    )
}

export default extraInfo;