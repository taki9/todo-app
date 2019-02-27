import '../styles/EditText.css';
import rubbishBin from '../images/rubbish-bin.svg';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { patchTodo, deleteTodo } from '../actions';

class EditText extends React.PureComponent {
  state = {
    editing: false,
    inputValue: this.props.title
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

    this.props.patchTodo(this.props.index, this.state.inputValue);

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
        <img className="todo__delete" src={rubbishBin} alt="delete" onClick={() => this.props.deleteTodo(this.props.index)} />
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

EditText.propTypes = {
  className: PropTypes.string,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  patchTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  patchTodo,
  deleteTodo
}

export default connect(null, mapDispatchToProps)(EditText);