import React, {Component} from 'react';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {resumes: []};
    }

    componentDidMount() {
        fetch('/api/resume')
            .then(res => res.json())
            .then(resumes => this.setState({resumes}));
    }

    render() {
        return (
            <div key={'portfolio'}>
                {this.state.resumes.map(resume =>
                    <div key={resume.id}>
                        <h1 key={resume.name} id='portfolio-name'>{resume.name}</h1>
                    </div>
                )}
            </div>
        )
    }
}

export default Portfolio;