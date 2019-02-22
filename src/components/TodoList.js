import '../styles/TodoList.css';

import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodoList extends React.PureComponent {
  numberOfCompleted() {
    return this.props.todos.reduce((accumulator, currentValue) => {
      return currentValue.completed ? accumulator + 1 : accumulator;
    }, 0)
  }

  numberOfTodos() {
    return this.props.todos.length;
  }

  render() {
    return (
      <React.Fragment>
      <ul className="todolist">
        {this.props.todos.map((todo, index) => (
          <Todo key={index} {...todo} />
        ))}
      </ul>
      <div className="summarize">{this.numberOfCompleted()} / {this.numberOfTodos()} completed</div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList);