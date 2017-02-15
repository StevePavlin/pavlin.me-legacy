import React, { Component } from 'react';
import './App.css';
import {Splash} from '../Splash';

class App extends Component {
  render() {
    return (
      <div id="content">
        <div id="background" />
        <Splash />
      </div>
    );
  }
}

export default App;
