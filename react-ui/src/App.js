import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, Router, Footer } from './components';
import { Provider } from 'react-redux';
import { store } from './storeCreator';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
