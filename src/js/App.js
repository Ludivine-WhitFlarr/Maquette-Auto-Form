import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../css/main.min.css';
import Header from './Header';
import Home from './Home.jsx';

class App extends Component {
  render() {
    return (
      <Fragment>
      <Header/>
            <Switch>
                <Route exact path="/"                component={Home}/>
            </Switch>
      </Fragment>
    );
  }
}

export default App;
