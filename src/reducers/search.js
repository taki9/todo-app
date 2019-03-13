import * as actionNames from '../actions/actionNames';

const search = (state = '', action) => {
  switch (action.type) {
    case actionNames.SET_SEARCH_QUERY:
      return action.query;
    default:
      return state;
  }
};

export default search;
