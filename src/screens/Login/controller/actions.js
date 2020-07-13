import {
    LOGIN_REQUESTING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './constants'
import api from '../../../services/api'

export function authUser(login, password) {
    return dispach => {
        dispach({ type: LOGIN_REQUESTING })
        return api
            .post(`/user`,
                {
                    login,
                    password
                })
            .then(res => {
                dispach({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispach({
                    type: LOGIN_FAILURE,
                    payload: err
                })
            })
    }
}