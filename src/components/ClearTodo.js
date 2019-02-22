import '../styles/ClearTodo.css';

import React from 'react';
import { connect } from 'react-redux';
import { clearAllTodo } from '../actions';

class ClearTodo extends React.PureComponent {
  render() {
    return (
      <button className="clear-todo" onClick={ev => this.props.clearAllTodo()}>Clear</button>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  clearAllTodo: () => dispatch(clearAllTodo())
})

export default connect(null, mapDispatchToProps)(ClearTodo);