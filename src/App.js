import React, { Component } from 'react';
import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>HELLO</div>
        <Navbar/>
      </div>
    );
  }
}

export default App;
