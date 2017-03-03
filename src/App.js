import './App.css';
import {Choropleth} from './Components';
import logo from './logo.png';
import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Plotly Demo</h2>
                    <h4>It's goin' be ssiiiiiccckkkk</h4>
                </div>
                <Choropleth/>
            </div>
        );
    }
}

export default App;
