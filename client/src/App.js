import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <span>
      <Navbar/>
      <Footer/>
      </span>
    );
  }
}

export default App;
