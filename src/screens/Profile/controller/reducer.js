import {
    MY_SOLICITATION_REQUESTING,
    MY_SOLICITATION_SUCCESS,
    MY_SOLICITATION_FAILURE
} from './constants'

export const INITIAL_STATE = {
    isRequesting: false,
    success: false,
    error: false,
    content: {}
}

export default function mySolicitation(state = INITIAL_STATE, action) {
    switch (action.type) {
        case MY_SOLICITATION_REQUESTING:
            return {
                ...state,
                isRequesting: true
            }
        case MY_SOLICITATION_SUCCESS:
            return {
                ...state,
                isRequesting: false,
                content: action.payload,
                error: false
            }
        case MY_SOLICITATION_FAILURE:
            return {
                ...state,
                isRequesting: false,
                error: true
            }
        default:
            return state
    }
}