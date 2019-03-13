import React from 'react';
import { Link } from 'react-router-dom';

import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import ClearTodo from '../components/ClearTodo';

class Todos extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <AddTodoForm />
        <TodoList />
        <ClearTodo />

        <Link className="link" to="/">
          Back to homepage
        </Link>
      </React.Fragment>
    );
  }
}

export default Todos;
