import * as actionNames from '../actions/actionNames';

const me = (state = {}, action) => {
  switch (action.type) {
    case actionNames.RESOLVE_ME:
      return action.me;
    case actionNames.LOGOUT:
      return {};
    default:
      return state;
  }
};

export default me;