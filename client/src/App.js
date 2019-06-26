import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Portfolio from "./components/Portfolio";
import GeneratePDF from "./components/GeneratePDF";

class App extends Component {
    render() {
        return (
            <Router key={'router'}>
                <div>
                    {<Navigation key={'super-navigation'}/>}
                </div>
                <div style={{marginTop: "6rem"}}>
                    <Route path='/' exact component={Portfolio}/>
                    <Route path='/resume' exact component={GeneratePDF}/>
                </div>
            </Router>
        );
    }
}

export default App;