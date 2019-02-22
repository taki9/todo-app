import '../styles/EditText.css';
import rubbishBin from '../images/rubbish-bin.svg';

import React from 'react';
import { connect } from 'react-redux';
import { patchTodo, deleteTodo } from '../actions';

class EditText extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      inputValue: this.props.title
    }
  }

  handleChange(ev) {
    this.setState({
      inputValue: ev.target.value
    })
  }

  handleInputExit(ev) {
    if (ev.relatedTarget=== this.saveButton) {
      return false;
    }

    this.setState({
      editing: false,
      inputValue: this.props.title
    })
  }

  handleSave(ev) {
    ev.preventDefault()

    this.props.patchTodo(this.state.inputValue, this.props.title);

    this.setState({
      editing: false
    })
  }

  activateEditMode() {
    this.setState({
      editing: true
    })
  }

  renderViewMode() {
    return(
      <React.Fragment>
        <span className={this.props.className} onClick={ev => this.activateEditMode()}>{this.props.title}</span>
        <img className="todo__delete" src={rubbishBin} alt="delete" onClick={() => this.props.deleteTodo(this.props.title)} />
      </React.Fragment>
    )
  }

  renderEditMode() {
    return(
      <form className="edit-text" onSubmit={ev => this.handleSave(ev)}>
        <input className="edit-text__input"type="text" autoFocus={true} required={true} value={this.state.inputValue}
          onChange={ev => this.handleChange(ev)} onBlur={ev => this.handleInputExit(ev)} />

        <button className="edit-text__button" type="submit" ref={node => this.saveButton = node}>Save</button>
      </form>
    )
  }

  render() {
    return this.state.editing ? this.renderEditMode() : this.renderViewMode();
  }
}

const mapDispatchToProps = dispatch => {
  return {
      patchTodo: (title, previousTodo) => dispatch(patchTodo(title, previousTodo)),
      deleteTodo: title => dispatch(deleteTodo(title))
  }
}

export default connect(null, mapDispatchToProps)(EditText);