import React, { Component } from 'react';
import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner/>
        <Navbar/>
        <Footer/>
      </div>
    );
  }
}

export default App;
