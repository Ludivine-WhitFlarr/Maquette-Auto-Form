import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../css/main.min.css';
import Header from './Header';
import Home from './Home.jsx';
import Erreur from './404.jsx';
import Contact from './Contact.jsx';

class App extends Component {
  render() {
    return (
      <Fragment>
      <Header/>
            <Switch>
                <Route exact path="/"                component={Home}/>
                <Route exact path="/contact"         component={Contact}/>  
                <Route path="/"                      component={Erreur}/>
            </Switch>
      </Fragment>
    );
  }
}

export default App;
