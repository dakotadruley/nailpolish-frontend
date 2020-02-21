import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router, } from 'react-router-dom';
import Home from './Home.js';

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
        <h1>Nail Polishes</h1>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
      </>
    );
  }
}