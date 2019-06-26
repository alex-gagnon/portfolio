import React from "react";
import Button from "react-bootstrap/Button";

function contact() {
    return (
        <section id="contact" className="container-fluid">
            <h3>How to get in touch</h3>
            <div>
                <p>Feel free to get in touch and say hello!</p>
            </div>
            <div>
                <a href="mailto:alexgagnon227@gmail.com"><Button variant="outline-info">Shoot me an email!</Button></a>
            </div>
            <div>
                <a href="/"><Button variant="outline-dark">Return to top</Button></a>
            </div>
        </section>
    )
}

export default contact;