import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import api from './api';
// import * as localStorage from './localStorage';

export const history = createBrowserHistory();

export default () => {
  const store = createStore(
    rootReducer(history),
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        thunk.withExtraArgument(/* localStorage, */ api)
      )
    )
  );

  return store;
};
