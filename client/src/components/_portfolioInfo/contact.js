import React from "react";
import Button from "react-bootstrap/Button";

function contact() {
    return (
        <section id="contact" className="container-fluid">
            <h3 className="text-center">
                <span className="portfolio-section-header">How to get in touch</span>
            </h3>
            <div>
                <p>Feel free to get in touch and say hello!</p>
            </div>
            <div>
                <Button variant="outline-info" href="mailto:alexgagnon227@gmail.com">Shoot me an email!</Button>
            </div>
        </section>
    )
}

export default contact;