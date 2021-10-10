import initialState from "../initialState";
import * as types from '../actions';

// const 

export default function passRequestData(state =initialState, action){
    if(action.type === types.SET_SCREEN_WIDTH){
      return  {
        windowWidth: action.windowWidth
      }
    }else{
        return state
    }
}
