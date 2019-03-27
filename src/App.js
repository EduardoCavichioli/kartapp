import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Router from './components/Router';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>

        <Router />
      </BrowserRouter>
    );
  }
}

export default App;
