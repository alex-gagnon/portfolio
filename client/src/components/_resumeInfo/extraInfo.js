import React from "react";

function extraInfo(resume) {
    return (
        <div>
            <div>
                <h3 className="resume-header">Certifications</h3>
                <div className="additional-info">
                    <p>{resume.certifications && resume.certifications.join(', ')}</p>
                </div>
            </div>
            <div>
                <h3 className="resume-header">Interests</h3>
                <div className="additional-info">
                    <p>{resume.interests && resume.interests.join(', ')}</p>
                </div>
            </div>
        </div>
    )
}

export default extraInfo;