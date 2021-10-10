import  {getLogInURL, getSignUpURL} from '../constants'
import {createPostRequest } from '../tools'
import {JWT_TOKEN} from '../constants'
import jwtDecode from 'jwt-decode'
import {REGISTER_TYPE } from '../constants'

export const loginOrRegisterUser = async (type, data ) =>{
    const url = type === REGISTER_TYPE ? getSignUpURL() : getLogInURL()
    const responce = await fetch(url,createPostRequest(data))
    if(responce.status < 300){
      const token = await responce.json()
      const {_id, roles} = jwtDecode(token)
      localStorage.setItem(JWT_TOKEN, token)
      return {token, _id, roles}
    }
    
  }
