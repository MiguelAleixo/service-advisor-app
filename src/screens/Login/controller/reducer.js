import {
    LOGIN_REQUESTING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './constants'

export const INITIAL_STATE = {
        isRequesting: false,
        success: false,
        error: false,
        content: { id_user: 1 }
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
                isResquesting: false,
                content: action.payload,
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