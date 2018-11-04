import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import JestLand from './containers/JestLand/JestLand';
import AudioLand from './containers/AudioLand/AudioLand';
import StateLand from './containers/StateLand/StateLand';
import CSSLand from './containers/CSSLand/CSSLand';
import CSSLand1 from './containers/CSSLand/CSS1/CSS1';
import CSSLand2 from './containers/CSSLand/CSS2/CSS2';
import AuthorizationLand from './containers/AuthorizationLand/AuthorizationLand';
import APILand from './containers/APILand/APILand';
import Home from './containers/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/jest-land" component={JestLand}/>
            <Route path="/audio-land" component={AudioLand}/>
            <Route path="/state-land" component={StateLand}/>
            <Route path="/css-land/1" component={CSSLand1}/>
            <Route path="/css-land/2" component={CSSLand2}/>
            <Route path="/css-land" component={CSSLand}/>
            <Route path="/authorization-land" component={AuthorizationLand}/>
            <Route path="/api-land" component={APILand}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
