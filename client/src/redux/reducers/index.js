import { combineReducers } from 'redux';
import innerDataReducer from './inner-data-reducer';
import promiseReducer from './promise-reducer';
import logInReducer from './log-in-reduces';

const reducers = combineReducers({
    innerDataReducer,
    promiseReducer,
    authenticationData: logInReducer
});

export default reducers;