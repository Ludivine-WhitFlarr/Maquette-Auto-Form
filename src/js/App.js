import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../css/main.min.css';
import Header from './Header';
import Home from './Home.jsx';
import Erreur from './404.jsx';

class App extends Component {
  render() {
    return (
      <Fragment>
      <Header/>
            <Switch>
                <Route exact path="/"                component={Home}/>
                    <Route path="/"                      component={Erreur}/>
            </Switch>
      </Fragment>
    );
  }
}

export default App;
