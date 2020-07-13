import {
    SERVICES_REQUESTING,
    SERVICES_SUCCESS,
    SERVICES_FAILURE
} from './constants'
import api from '../../../services/api'

export function getServices(idUser) {
    return dispach => {
        dispach({ type: SERVICES_REQUESTING })
        return api
            .get(`/services/${idUser}`)
            .then(res => {
                dispach({
                    type: SERVICES_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispach({
                    type: SERVICES_FAILURE,
                    payload: err
                })
            })
    }
}