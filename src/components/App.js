import logo from '../images/logo.svg';
import '../styles/App.css';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Todos from '../pages/Todos';
import Welcome from './Welcome';
import { renewToken } from '../actions/thunks'

class App extends Component {
  async componentDidMount() {
    const prevToken = sessionStorage.getItem('jwtToken');

    if(!prevToken) {
      return false;
    }

    const token = await this.props.renewToken(prevToken);

    if (token) {
      sessionStorage.setItem('jwtToken', token);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Welcome me={this.props.me} />
          <img src={logo} className="App-logo" alt="logo" />

          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/todos" component={Todos} />
            </Switch>
          </ConnectedRouter>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  me: PropTypes.object.isRequired,
  renewToken: PropTypes.func.isRequired
};


const mapStateToProps = state => {
  return {
    me: state.me
  };
};

const mapDispatchToProps = { renewToken };


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// export default App;

