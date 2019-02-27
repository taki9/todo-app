import '../styles/TodoFilter.css';
import searchIcon from '../images/search.svg';

import React from 'react';
import { connect} from 'react-redux';
import { setSearchQuery } from '../actions';
import PropTypes from 'prop-types';

class TodoFilter extends React.PureComponent {
  render() {
    return (
      <div className="todo-filter">
        <input type="text" className="todo-filter__input" placeholder="Search..." onChange={ev => this.props.setSearchQuery(ev.target.value)} />
        <img className="todo-filter__icon" src={searchIcon} alt="" />
      </div>
    )
  }
}

TodoFilter.propTypes = {
  setSearchQuery: PropTypes.func.isRequired
}

const mapDispatchToProps = { setSearchQuery };

export default connect(null, mapDispatchToProps)(TodoFilter);