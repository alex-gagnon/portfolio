import React, {Component} from 'react';
import {PDFExport} from '@progress/kendo-react-pdf';
import Resume from './Resume'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class GeneratePDF extends Component {
    resume;

    constructor(props) {
        super(props);
    }

    exportPDF = () => {
        this.resume.save()
    };

    render() {

        return (
            <Col id='resume-container' className='justify-content-center'>
                <Row className='justify-content-center'>
                    <Button variant='primary' onClick={this.exportPDF}>download</Button>
                </Row>
                <Row id='pdf-page'>
                    <Col>
                        <PDFExport author="Alexander Gagnon"
                                   paperSize={'letter'}
                                   fileName="Alexander_Gagnon_Resume.pdf"
                                   title="Alexander Gagnon Resume"
                                   subject="Resume"
                                   keywords={"experience, education, skills, " +
                                   "interests, projects, qa, development, javascript, css, html, python," +
                                   "jquery, mongodb, mysql, sql, heroku, git, jira, fiddler, postman, node,js," +
                                   "express, flask, website, software qa"}
                                   ref={(r) => this.resume = r}>
                            {/* Include Resume data */}
                            <Resume/>
                        </PDFExport>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default GeneratePDF;