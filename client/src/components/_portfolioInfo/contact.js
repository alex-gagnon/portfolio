import React from "react";
import Button from "react-bootstrap/Button";

function contact() {
    return (
        <section id="contact" className="container-fluid">
            <h3 className="text-center">
                <span className="portfolio-section-header">How to get in touch</span>
            </h3>
            <div className="text-center">
                <div>
                    <Button variant="outline-info" href="mailto:alexgagnon227@gmail.com">Shoot me an email!</Button>
                </div>
            </div>
            <hr/>
            <div id="contact-footer">
                <ul>
                    <li><a href="https://github.com/bokoblin-link" className="contact-footer-item">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/agagnon313/" className="contact-footer-item">LinkedIn</a>
                    </li>
                    <li><a href="https://codepen.io/Alex_Gagnon/#" className="contact-footer-item">Codepen</a></li>
                </ul>
            </div>
        </section>
    )
}

export default contact;