import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/thunks';
import { push } from 'connected-react-router';
import { withRouter } from 'react-router-dom';

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

  async handleSubmit(ev) {
    ev.preventDefault();

    const token = await this.props.login(this.state.username, this.state.password);

    if (token) {
      sessionStorage.setItem('jwtToken', token);

      return this.props.push('/todos');
    }

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
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired
};

const mapDispatchToProps = { login, push };

export default withRouter(connect(
  null,
  mapDispatchToProps
)(LoginForm));