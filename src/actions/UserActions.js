
import { user } from '../api/api'

import { 
    GET_USER_DATA,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAIL
    } from '../constants/User'

export function getUserData (userId) {
    return function (dispatch) {
        dispatch({
            type: GET_USER_DATA
        })
        
        user(userId).then(function (response) {
            dispatch({
                type: GET_USER_DATA_SUCCESS, 
                payload: JSON.parse(response.body)
            })
        }).catch(function (/*err*/) {
            dispatch({
                type: GET_USER_DATA_FAIL,
                payload: []
            })
        });
    }
}
