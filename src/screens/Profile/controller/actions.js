import {
    MY_SOLICITATION_REQUESTING,
    MY_SOLICITATION_SUCCESS,
    MY_SOLICITATION_FAILURE
} from './constants'
import api from '../../../services/api'

export function getMySolicitation(idUser) {
    return dispach => {
        dispach({ type: MY_SOLICITATION_REQUESTING })
        return api
            .get(`/services/solicitation/${idUser}`)
            .then(res => {
                dispach({
                    type: MY_SOLICITATION_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispach({
                    type: MY_SOLICITATION_FAILURE,
                    payload: err
                })
            })
    }
}

export function finishSolicitation(idSolicitation, data, nav) {
    return dispach => {
        dispach({ type: MY_SOLICITATION_REQUESTING })
        return api
            .post(`/services/solicitation/finish/${idSolicitation}`, data)
            .then(res => {
                dispach({
                    type: MY_SOLICITATION_SUCCESS,
                    payload: res.data
                })
                nav.reset({
                    index: 0,
                    routes: [{ name: 'Profile' }]
                })
            })
            .catch(err => {
                dispach({
                    type: MY_SOLICITATION_FAILURE,
                    payload: err
                })
            })
    }
}