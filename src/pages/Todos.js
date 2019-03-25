import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import ClearTodo from '../components/ClearTodo';
import { setInitialState } from '../actions/thunks';

class Todos extends React.PureComponent {
  componentDidMount() {
    this.props.setInitialState();
  }

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

const mapDispatchToProps = { setInitialState };

export default connect(
  null,
  mapDispatchToProps
)(Todos);