import * as types from '../../actions'
import jwtDecode from 'jwt-decode'
import { JWT_TOKEN } from '../../../constants'

export const setWindowWidth = (windowWidth) => {
    return {
        type: types.SET_SCREEN_WIDTH,
        windowWidth
    }
}

export const setAuthenticatedUserData = (data) => {
    return {
        type: types.SET_AUTHENTICATED_USER_DATA,
        payload: data
    }
}

export const logOut = () => {
    localStorage.removeItem(JWT_TOKEN)
    return {
        type: types.LOG_OUT
    }
}
