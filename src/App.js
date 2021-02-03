import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Hero from './Components/Carosels/Hero'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
      </>
    );
  }
}

export default App;
