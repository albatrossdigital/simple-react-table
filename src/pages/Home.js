import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <h1>Home</h1>
        <p>Some content for the homepage.</p>
        <Link to="/main" className="btn btn-primary">Main Table</Link>
      </div>
    );
  }
}

export default Home;
