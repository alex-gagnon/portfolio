import React from "react";

function about() {
    return (
        <section id="about" className="anchor portfolio-section container-fluid">
            <h3>About me</h3>
            <p>
                Hello! I'm Alex, a software quality assurance specialist in Newburyport, MA who has
                been working towards becoming a junior software developer. I develop automation scripts,
                full-stack websites, and am always looking to learn more.
            </p>
            <p>
                After high school I enlisted into the US Army, where I served for around 4 years before
                deciding to pursue higher education full-time. I attended the University of Massachusetts -
                Boston, graduating with highest honors. Shortly after, I joined the Transparent Language QA
                team where I worked on manual and automated testing web applications and mysql and mongodb
                databases.
            </p>
            <p>
                Here are some of the technologies I have been working with lately:
                <div>
                    <ul>
                        <li>Python</li>
                        <li>Javascript (ES6+)</li>
                        <li>React</li>
                        <li>Node.js</li>
                    </ul>
                    <ul>
                        <li>HTML & CSS</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                    </ul>
                </div>
            </p>
        </section>
    )
}

export default about;