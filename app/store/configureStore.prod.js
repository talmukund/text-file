// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxPromise from "redux-promise";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import type { counterStateType } from '../reducers/AddTextReducer';

const history = createBrowserHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router, reduxPromise);

function configureStore(initialState?: counterStateType) {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
