import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Router from './components/Router';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
