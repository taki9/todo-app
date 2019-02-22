import logo from '../images/logo.svg';
import '../styles/App.css';

import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import ClearTodo from './ClearTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <AddTodoForm />
          <TodoList />
          <ClearTodo />
        </header>
      </div>
    );
  }
}

export default App;
