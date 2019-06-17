import React from "react";
import friendlyDates from "../friendlyDates";

function educationInfo(resume) {
    return (
        <div className='education'>
            {resume.education &&
            resume.education.map(({name, enrollment, address, degrees}) =>
                <div key={name}>
                    <h4>{name}</h4>
                    <h5>
                        {
                            `${friendlyDates(enrollment.started)} - ${friendlyDates(enrollment.ended)} // ${address}`
                        }
                    </h5>
                    <ul>
                        {degrees.map(({name, gpa}) =>
                            <li key={name}>{`${name} // ${gpa} gpa`}</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default educationInfo;