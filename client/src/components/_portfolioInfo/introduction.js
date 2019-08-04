import React from "react";


function introduction(resume) {
    return (
        <section className="portfolio-section container-fluid anchor">
            <div className="content">
                <h1 id="portfolio-intro-header">
                    <span>{resume.name}</span>
                </h1>
                <h2 id="portfolio-intro-summary m-5">
                    <span id="portfolio-intro">
                        I am a {(resume.position && resume.position.toLowerCase())} and I like to build
                        quality solutions.
                    </span>
                </h2>
            </div>
        </section>
    )
}

export default introduction;