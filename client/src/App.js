import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import JestLand from './containers/JestLand/JestLand';
import AudioLand from './containers/AudioLand/AudioLand';
import StateLand from './containers/StateLand/StateLand';
import CSSLand from './containers/CSSLand/CSSLand';
import AuthorizationLand from './containers/AuthorizationLand/AuthorizationLand';
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
            <Route path="/css-land" component={CSSLand}/>
            <Route path="/authorization-land" component={AuthorizationLand}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
