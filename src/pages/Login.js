import React from 'react';
import LoginForm from '../components/LoginForm';

class Homepage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div>Login</div>
        <LoginForm />
      </React.Fragment>
    );
  }
}

export default Homepage;
