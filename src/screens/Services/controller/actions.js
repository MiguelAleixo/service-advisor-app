import {
    SERVICES_REQUESTING,
    SERVICES_SUCCESS,
    SERVICES_FAILURE
} from './constants'
import api from '../../../services/api'

export function getServices(idUser, idCategory) {
    return dispach => {
        dispach({ type: SERVICES_REQUESTING })
        return api
            .get(`/services/${idUser}/${idCategory}`)
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

export function registerSolicitation(idUser, data, nav) {
    return dispach => {
        dispach({ type: SERVICES_REQUESTING })
        return api
            .post(`/services/solicitation/${idUser}`, data)
            .then(() => {
                dispach({
                    type: SERVICES_SUCCESS
                })
                nav.reset({
                    index: 0,
                    routes: [{ name: 'Profile' }]
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