import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import todos from './todos';
import search from './search';
import me from './me';

export default history =>
  combineReducers({
    router: connectRouter(history),
    todos,
    search,
    me
  });
