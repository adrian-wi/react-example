import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import '../../css/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App" id="page">
        <Link to="/"><h1 >Google Powered Site Search</h1></Link>
        { this.props.children }
      </div>
    );
  }
}