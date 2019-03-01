import '../styles/Todo.css';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EditText from './EditText';
import { toggleTodo } from '../thunks';

class Todo extends React.PureComponent {
  render() {
    return (
      <li className="todo">
        <input className="todo__checkbox" type="checkbox" checked={this.props.completed} onChange={() => this.props.toggleTodo(this.props.index)}></input>
        <EditText index={this.props.index} title={this.props.title} className={this.props.completed ? 'todo--completed' : ''} />
      </li>
    )
  }
}

Todo.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = { toggleTodo }

export default connect(null, mapDispatchToProps)(Todo);