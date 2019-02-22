import '../styles/Todo.css';

import React from 'react';
import { connect } from 'react-redux';
import EditText from './EditText';
import { toggleTodo } from '../actions';

class Todo extends React.PureComponent {
  render() {
    return (
      <li className="todo">
        <input className="todo__checkbox" type="checkbox" checked={this.props.completed} onChange={() => this.props.toggleTodo(this.props.title)}></input>
        <EditText title={this.props.title} className={this.props.completed ? 'todo--completed' : ''} />
      </li>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
      toggleTodo: title => dispatch(toggleTodo(title))
  }
}

export default connect(null, mapDispatchToProps)(Todo);