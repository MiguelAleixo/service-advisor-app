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

export function finishSolicitation(idSolicitation) {
    return dispach => {
        dispach({ type: MY_SOLICITATION_REQUESTING })
        return api
            .post(`/services/solicitation/${idSolicitation}`)
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