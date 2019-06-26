import React, {Component} from 'react';
import InProgress from "./InProgress";
import about from "./_portfolioInfo/about";
import experience from "./_portfolioInfo/experience"
import contact from "./_portfolioInfo/contact";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {resume: []};
    }

    componentDidMount() {
        fetch('/api/resume')
            .then(res => {
                return res.json()
            })
            .then((resume) => {
                this.setState({resume});
            }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        const resume = this.state.resume;

        const about_info = about();
        const experience_info = experience(resume);
        const contact_info = contact();

        return (
            <div key={'portfolio'}>
                {<InProgress/>}
                <div key={resume.id}>
                    <section className="anchor portfolio-section container-fluid">
                        <h1>Hi, my name is</h1>
                        <h2 key={resume.name}>{resume.name}</h2>
                        <h3>{resume.position}</h3>
                    </section>
                    {about_info}
                    {experience_info}
                    {contact_info}
                </div>
            </div>
        )
    }
}

export default Portfolio;