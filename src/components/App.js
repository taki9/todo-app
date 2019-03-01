import logo from '../images/logo.svg';
import '../styles/App.css';

import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import ClearTodo from './ClearTodo';
import { connect } from 'react-redux';
import { setInitialState } from '../thunks';

class App extends Component {
  componentDidMount() {
    this.props.setInitialState();
  }

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

const mapDispatchToProps = { setInitialState }

export default connect(null, mapDispatchToProps)(App);
