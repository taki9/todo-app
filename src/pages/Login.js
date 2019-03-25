import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { withRouter } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);

    if (sessionStorage.getItem('jwtToken')) {
      return this.props.push('/todos');
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>Login</div>
        <LoginForm />
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  push: PropTypes.func.isRequired
};

const mapDispatchToProps = { push };

export default withRouter(connect(
  null,
  mapDispatchToProps
)(Login));
