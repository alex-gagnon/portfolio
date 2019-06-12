import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Portfolio from "./components/Portfolio";
import GeneratePDF from "./components/GeneratePDF";

class App extends Component {
    render() {
        return (
            <Router key={'router'}>
                {<Navigation key={'super-navigation'}/>}
                <div>
                    <Route key={'super-portfolio'} path='/' exact component={Portfolio}/>
                    <Route key={'super-pdf'} path='/resume' exact component={GeneratePDF}/>
                </div>
            </Router>
        );
    }
}

export default App;