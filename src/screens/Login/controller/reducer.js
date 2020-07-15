import {
    LOGIN_REQUESTING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './constants'

export const INITIAL_STATE = {
        isRequesting: false,
        success: false,
        error: false
}

export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_REQUESTING:
            return {
                ...state,
                isRequesting: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isResquesting: false,
                error: false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isRequesting: false,
                content: false,
                error: true
            }
        default:
            return state
    }
}