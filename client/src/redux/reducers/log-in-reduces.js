import initialState from "../initialState";
import * as types from '../actions';

// const 

export default function logInReducer(state =initialState, action){
    if(action.type === types.SET_AUTHENTICATED_USER_DATA){
      return  action.payload
    }else if(action.type === types.LOG_OUT){
        return  {}
    }else{
        return state
    }
}