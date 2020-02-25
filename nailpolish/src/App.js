import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Switch,
  BrowserRouter as Router, } from 'react-router-dom';
import Home from './Home.js';
import Detail from './Detail.js';
import Form from './Form.js';

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
        <h1>Nail Polishes</h1>
        <h4>by Dakota and Jenna</h4>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/nailpolish/:id' component={Detail} />
          <Route exact path='/nailpolishes' component={Form} />
        </Switch>
      </Router>
      </>
    );
  }
}