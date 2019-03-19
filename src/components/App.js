import logo from '../images/logo.svg';
import '../styles/App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { setInitialState } from '../actions/thunks';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import Todos from '../pages/Todos';

class App extends Component {
  componentDidMount() {
    this.props.setInitialState();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Login} />
            <Route path="/todos" component={Todos} />
          </Switch>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = { setInitialState };

export default connect(
  null,
  mapDispatchToProps
)(App);
