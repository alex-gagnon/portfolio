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
            <div>
                {this.state.resumes.map(resume =>
                    <div>
                        <h1 key={resume.id}>{resume.name}</h1>
                    </div>
                )}
            </div>
        )
    }
}

export default Portfolio;