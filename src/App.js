import React, { Component } from 'react';
import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import Banner from './components/Banner';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner/>
        <Navbar/>
      </div>
    );
  }
}

export default App;
