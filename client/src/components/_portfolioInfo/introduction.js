import React from "react";


function introduction(resume) {
    return (
        <section className="portfolio-section container-fluid">
            <div>
                <h1 id="portfolio-intro-header">
                    <span>Hi, my name is</span>
                </h1>
                <h2 key={resume.name} id="portfolio-name">
                    <span>{resume.name}</span>
                </h2>
                <h3 id="portfolio-intro-summary m-5">
                        <span id="portfolio-intro">
                            I am a {(resume.position && resume.position.toLowerCase())} and I like to break things.
                        </span>
                </h3>
            </div>
        </section>
    )
}

export default introduction;