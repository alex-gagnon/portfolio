import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import InProgress from "./InProgress";

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

        return (
            <div key={'portfolio'}>
                {<InProgress/>}
                <div key={resume.id}>
                    <h1 key={resume.name} style={{color: "#1c1c1c"}}>{resume.name}</h1>
                    <h2>{resume.position}</h2>
                    <div id="about">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor. Eget aliquet
                        nibh praesent tristique magna sit amet. Dignissim suspendisse in est ante in nibh mauris
                        cursus. Elementum integer enim neque volutpat ac tincidunt vitae. Eu tincidunt tortor
                        aliquam nulla facilisi cras. Lobortis elementum nibh tellus molestie nunc non blandit massa
                        enim. Id neque aliquam vestibulum morbi blandit cursus risus. Quam nulla porttitor massa id
                        neque. Orci eu lobortis elementum nibh tellus molestie nunc non. Turpis egestas integer eget
                        aliquet.
                    </div>
                    <div id="experience" style={{marginBottom: "500px" /* delete*/}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor. Eget aliquet
                        nibh praesent tristique magna sit amet. Dignissim suspendisse in est ante in nibh mauris
                        cursus. Elementum integer enim neque volutpat ac tincidunt vitae. Eu tincidunt tortor
                        aliquam nulla facilisi cras. Lobortis elementum nibh tellus molestie nunc non blandit massa
                        enim. Id neque aliquam vestibulum morbi blandit cursus risus. Quam nulla porttitor massa id
                        neque. Orci eu lobortis elementum nibh tellus molestie nunc non. Turpis egestas integer eget
                        aliquet.
                    </div>
                    <footer>
                        <div id="contact">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at
                            tempor. Eget aliquet nibh praesent tristique magna sit amet. Dignissim suspendisse in
                            est ante in nibh mauris cursus. Elementum integer enim neque volutpat ac tincidunt
                            vitae. Eu tincidunt tortor aliquam nulla facilisi cras. Lobortis elementum nibh tellus
                            molestie nunc non blandit massa enim. Id neque aliquam vestibulum morbi blandit cursus
                            risus. Quam nulla porttitor massa id neque. Orci eu lobortis elementum nibh tellus
                            molestie nunc non. Turpis egestas integer eget aliquet.
                        </div>
                        <div>
                            <a href="#"><Button variant="outline-dark">Return to top</Button></a>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Portfolio;