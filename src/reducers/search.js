const search = (state = "", action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return action.query;
    default:
      return state;
  }
}

export default search;