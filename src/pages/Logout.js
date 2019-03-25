import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { logout } from '../actions';

class Logout extends React.PureComponent {
  componentWillMount() {
    this.props.dispatch(logout());
    sessionStorage.removeItem('jwtToken');
  }

  render() {
    return(
      <Redirect to="/" />
    )
  }
}

Logout.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default withRouter(connect()(Logout));