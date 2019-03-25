import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearAllTodo } from '../actions/thunks';
import { Link } from 'react-router-dom';


class ClearTodo extends React.PureComponent {
  render() {
    const me = this.props.me;
    if (!Object.keys(me).length) {
      return null;
    }

    return (
      <div>
        Logged in as{' '}
        <strong>
          {me.lastName} {me.firstName} ({me.username})
        </strong>

        <div>
          <Link className="link" to="/logout">
            Logout
          </Link>
        </div>
      </div>
    );
  }
}

ClearTodo.propTypes = {
  clearAllTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = { clearAllTodo };

export default connect(
  null,
  mapDispatchToProps
)(ClearTodo);
