import {
    SERVICES_REQUESTING,
    SERVICES_SUCCESS,
    SERVICES_FAILURE
} from './constants'

export const INITIAL_STATE = {
    isRequesting: false,
    success: false,
    error: false,
    content: []
}

export default function services(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SERVICES_REQUESTING:
            return {
                ...state,
                isRequesting: true
            }
        case SERVICES_SUCCESS:
            return {
                ...state,
                isResquesting: false,
                content: action.payload,
                error: false
            }
        case SERVICES_FAILURE:
            return {
                ...state,
                isRequesting: false,
                error: true
            }
        default:
            return state
    }
}