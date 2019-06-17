import React from "react";

function contactInfo(resume) {
    return (
        <div>
            {resume.contact &&
            <ul id='contact-info'>
                <li>{resume.contact.email}</li>
                <li>{resume.contact.phoneNumber}</li>
                <li>{resume.contact.github}</li>
                <li>{resume.contact.portfolio}</li>
            </ul>}
        </div>
    )
}

export default contactInfo;