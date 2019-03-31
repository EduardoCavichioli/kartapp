import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Login, Register } from './index';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    );
  }
}

export default Router;
