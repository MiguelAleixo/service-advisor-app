import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './constants';

export const INITIAL_STATE = {
    isRequesting: false,
    userAuth: false,
    success: false,
    error: false,
    errorDetails: {}
}

export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isRequesting: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isRequesting: false,
                userAuth: true,
                success: true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isRequesting: false,
                error: true,
                errorDetails: { text: 'Erro ao logar!'}
            }
    }
}