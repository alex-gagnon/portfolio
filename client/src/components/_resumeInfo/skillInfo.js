import React from "react";

function skillInfo(resume) {
    return (
        <div>
            {resume.skills &&
            resume.skills.map(({name, skillSet}) =>
                <div key={name}>
                    <h4>{name}</h4>
                    <p>{skillSet.join(', ')}</p>
                </div>
            )}
        </div>
    )
}

export default skillInfo;