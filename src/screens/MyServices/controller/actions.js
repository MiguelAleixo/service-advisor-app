import {
    MY_SERVICES_REQUESTING,
    MY_SERVICES_SUCCESS,
    MY_SERVICES_FAILURE
} from './constants'
import api from '../../../services/api'

export function getMyServices(idUser) {
    return dispach => {
        dispach({ type: MY_SERVICES_REQUESTING })
        return api
            .get(`/my-services/${idUser}`)
            .then(res => {
                dispach({
                    type: MY_SERVICES_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispach({
                    type: MY_SERVICES_FAILURE,
                    payload: err
                })
            })
    }
}

export function createMyService(idUser, data) {
    return dispach => {
        dispach({ type: MY_SERVICES_REQUESTING })
        return api
            .post(`/my-services/${idUser}`, data)
            .then(res => {
                dispach({
                    type: MY_SERVICES_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispach({
                    type: MY_SERVICES_FAILURE,
                    payload: err
                })
            })
    }
}