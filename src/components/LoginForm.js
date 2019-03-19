import React from 'react';

class LoginForm extends React.PureComponent {
  state = {
    username: '',
    password: ''
  };

  updateInputValue(ev) {
    this.setState({
      [ev.target.id]: ev.target.value
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    return (
      <form className="add-todo-form" onSubmit={ev => this.handleSubmit(ev)}>
        <label>
          Username
          <input
            id="username"
            className="add-todo-form__input"
            type="text"
            required={true}
            value={this.state.username}
            onChange={ev => this.updateInputValue(ev)}
          />
        </label>
        <label>
          Password
          <input
            id="password"
            className="add-todo-form__input"
            type="password"
            required={true}
            value={this.state.password}
            onChange={ev => this.updateInputValue(ev)}
          />
        </label>
        <input
          className="add-todo-form__button"
          type="submit"
          value="Login"
        />
      </form>
    );
  }
}

export default LoginForm;