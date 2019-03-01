import '../styles/AddTodoForm.css';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../thunks';

class AddTodoForm extends React.PureComponent {
  state = {
    inputValue: ''
  }

  updateInputValue(ev) {
    this.setState({
      inputValue: ev.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault();

    this.props.addTodo(this.state.inputValue);
    this.setState({
      inputValue: ''
    })
  }

  render() {
    return (
        <form className="add-todo-form" onSubmit={ev => this.handleSubmit(ev)}>
          <input className="add-todo-form__input" type="text" required={true} placeholder="Title" value={this.state.inputValue} onChange={ev => this.updateInputValue(ev)} />
          <input className="add-todo-form__button" type="submit" value="Add task" />
        </form>
    )
  }
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}


const mapDispatchToProps = { addTodo }

export default connect(null, mapDispatchToProps)(AddTodoForm);