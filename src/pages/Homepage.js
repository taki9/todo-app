import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div>Welcome to my first React Application!</div>
        <Link className="link" to="/todos">
          Todo List
        </Link>
        <Link className="link" to="/login">
          Login
        </Link>
      </React.Fragment>
    );
  }
}

export default Homepage;
