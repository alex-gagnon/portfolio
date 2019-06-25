import React from "react";
import friendlyDates from "../friendlyDates";

function experience(resume) {
    return (
        <section id="experience" className="anchor portfolio-section container-fluid">
            {resume.employment &&
            resume.employment.map(({name, position, employment_status, experience}, i) =>
                <div>
                    <ul>
                        <li>
                            <button tabIndex={i}>
                                <span>{name}</span>
                            </button>
                        </li>
                    </ul>
                    <div>
                        <h4>{position} <span style={{color: '#888'}}>@ {name}</span></h4>
                        <h5>
                            {`${friendlyDates(employment_status.started)} - ${(
                                (employment_status.current && 'Present') ||
                                (!employment_status.current && friendlyDates(employment_status.ended))
                            )}`}
                        </h5>
                        <div>
                            <ul>
                                {experience.map((item) =>
                                    <li key={item}>
                                        <span className='angle-right-arrows'>&#187;</span> {item}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default experience;