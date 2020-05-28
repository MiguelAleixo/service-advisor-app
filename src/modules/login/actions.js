import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './constants';

export function signIn(user) {
    dispatch({ type: LOGIN_REQUEST});
    dispatch({ type: LOGIN_SUCCESS});
}