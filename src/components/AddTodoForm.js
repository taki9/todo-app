import '../styles/AddTodoForm.css';

import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodoForm extends React.PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      inputValue: ''
    }
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

const mapDispatchToProps = dispatch => ({
  addTodo: title => dispatch(addTodo(title))
})

export default connect(null, mapDispatchToProps)(AddTodoForm);