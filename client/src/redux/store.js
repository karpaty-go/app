import { createStore,applyMiddleware } from 'redux';
import reducers from './reducers';
import initialState from './initialState';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { setAuthenticatedUserData } from './action-creators';
import { JWT_TOKEN } from '../constants';
import jwtDecode from 'jwt-decode';
// const store = createStore(reducers, initialState);
// import {decode} from '../helpers';
// import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(reducers, initialState,composeWithDevTools(applyMiddleware(thunk)));
const token = localStorage.getItem(JWT_TOKEN)
if(token){
const data = jwtDecode(token)
    data.token = token
    store.dispatch(setAuthenticatedUserData(data))
}



// store.getState().login.jwt_token = localStorage.getItem("jwt_token")
// if(store.getState().login.jwt_token){
    
//     store.getState().login.userData = decode(store.getState().login.jwt_token)
// }

store.subscribe(()=>console.log("STORE ",store.getState()))

export default store;
