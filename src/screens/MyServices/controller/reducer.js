import {
    MY_SERVICES_REQUESTING,
    MY_SERVICES_SUCCESS,
    MY_SERVICES_FAILURE
} from './constants'

export const INITIAL_STATE = {
    isRequesting: false,
    success: false,
    error: false,
    content: []
}

export default function myServices(state = INITIAL_STATE, action) {
    switch (action.type) {
        case MY_SERVICES_REQUESTING:
            return {
                ...state,
                isRequesting: true
            }
        case MY_SERVICES_SUCCESS:
            return {
                ...state,
                isRequesting: false,
                content: action.payload,
                error: false
            }
        case MY_SERVICES_FAILURE:
            return {
                ...state,
                isRequesting: false,
                error: true
            }
        default:
            return state
    }
}