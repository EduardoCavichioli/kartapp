import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
