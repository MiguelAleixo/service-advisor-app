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
                console.log('RES', res.data)
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

export function createMyService(idUser, data, nav) {
    return dispach => {
        dispach({ type: MY_SERVICES_REQUESTING })
        return api
            .post(`/my-services/${idUser}`, data)
            .then(() => {
                dispach({
                    type: MY_SERVICES_SUCCESS
                })
                nav.reset({
                    index: 0,
                    routes: [{ name: 'MyServices' }]
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

export function acceptSolicitation(idSolicitation, data, nav) {
    return dispach => {
        dispach({ type: MY_SERVICES_REQUESTING })
        return api
            .put(`/my-services/solicitation/${idSolicitation}`, data)
            .then(() => {
                dispach({
                    type: MY_SERVICES_SUCCESS
                })
                nav.reset({
                    index: 0,
                    routes: [{ name: 'MyServices' }]
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