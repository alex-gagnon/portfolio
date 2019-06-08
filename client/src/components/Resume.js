import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {resumes: []}
    }

    componentDidMount() {
        fetch('/api/resume')
            .then(res => res.json())
            .then(resumes => this.setState({resumes}));
    }

    formatDates = (date) => {
        try {
            let monthName = date.toLocaleString('en-us', {month: 'short'});
            return monthName + ' ' + date.getFullYear()
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        return (
            <Row id='resume'>
                {this.state.resumes.map((resume) =>
                    <div key={resume.id}>
                        <div>
                            <h1 id='name'>{resume.name}</h1>
                            <h2 id='position'>{resume.position}</h2>
                            <ul id='contact-info'>
                                <li id='email'>{resume.contact.email}</li>
                                <li id='phoneNumber'>{resume.contact.phoneNumber}</li>
                                <li id='github'>{resume.contact.github}</li>
                                <li id='portfolio'>{resume.contact.portfolio}</li>
                            </ul>
                        </div>
                        <Row>
                            <Col>
                                <h3>Professional Experience</h3>
                                {resume.employment.map(({_id, name, position, address, employment_status, experience}) =>
                                    <div key={_id}>
                                        <h4>{position + ' @ ' + name}</h4>
                                        <h5>
                                            {
                                                this.formatDates(employment_status.started) + ' - ' +
                                                (
                                                    (employment_status.current && 'Present') ||
                                                    (!employment_status.current && this.formatDates(employment_status.ended))
                                                ) + ' // ' + address
                                            }
                                        </h5>
                                        <ul className='employment-experience'>
                                            {experience.map((item) => <li><span
                                                className='angle-right-arrows'>&#187;</span> {item}</li>)}
                                        </ul>
                                    </div>
                                )}
                            </Col>
                            <Col>
                                <Col>
                                    <h3>Skills</h3>
                                    {resume.skills.map(({name, skillSet}) =>
                                        <div>
                                            <h4>{name}</h4>
                                            <p>{skillSet.join(', ')}</p>
                                        </div>
                                    )}
                                </Col>
                                <Col>
                                    <h3>Education</h3>
                                    {resume.education.map(({name, enrollment, address, degrees}) =>
                                        <div>
                                            <h4>{name}</h4>
                                            <h5>
                                                {this.formatDates(enrollment.started) +
                                                ' - ' + this.formatDates(enrollment.ended) +
                                                ' // ' + address}
                                            </h5>
                                            <ul>
                                                {degrees.map(({name, gpa}) =>
                                                    <li>{name + ' // ' + gpa + ' gpa'}</li>
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </Col>
                                <Col>
                                    <h3>Certifications</h3>
                                    <p>{resume.certifications.join(', ')}</p>
                                </Col>
                                <Col>
                                    <h3>Interests</h3>
                                    <p>{resume.interests.join(', ')}</p>
                                </Col>
                            </Col>
                        </Row>
                    </div>
                )}
            </Row>
        )
    }
}

export default Resume;