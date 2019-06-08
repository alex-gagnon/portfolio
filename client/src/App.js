import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation'
import Users from './components/Users'
import Portfolio from "./components/Portfolio";
import GeneratePDF from "./components/GeneratePDF";

class App extends Component {
    render() {
        return (
            <Router>
                {<Navigation/>}
                <Container>
                    <Route path='/' exact component={Portfolio}/>
                    <Route path='/resume' exact component={GeneratePDF}/>
                    <Route path='/users' exact component={Users}/>
                </Container>
            </Router>
        );
    }
}

export default App;