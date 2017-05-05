import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Home, MainTable } from './pages';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <div className="header">
            Some header stuff
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/main" component={MainTable} />
        </div>
      </Router>
    );
  }
}

export default App;
