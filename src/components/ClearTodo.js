import '../styles/ClearTodo.css';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearAllTodo } from '../thunks';

class ClearTodo extends React.PureComponent {
  render() {
    return (
      <button className="clear-todo" onClick={ev => this.props.clearAllTodo()}>Clear</button>
    )
  }
}

ClearTodo.propTypes = {
  clearAllTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = { clearAllTodo }

export default connect(null, mapDispatchToProps)(ClearTodo);