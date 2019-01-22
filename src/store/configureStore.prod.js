// @flow

// #region imports
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// import { routerMiddleware } from 'react-router-redux';

// #region import createHistory from hashHistory or BrowserHistory:
// import createHistory from 'history/createHashHistory';
// import createHistory from 'history/createBrowserHistory';
// #endregion
import reducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
// #endregion

// let histo = null;
// if (typeof document !== 'undefined') {
//   const createBrowserHistory = require('history/createBrowserHistory').default;
//   histo = createBrowserHistory();
// }

// export const history = histo;

// createStore : enhancer
const enhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware, /*routerMiddleware(history)*/),
);

// export default =  "redux store"
export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
