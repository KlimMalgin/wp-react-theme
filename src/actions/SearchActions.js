import xhr from 'xhr'

import { 
    GET_GENRES,
    GET_GENRES_SUCCESS,
    GET_GENRES_FAIL,
    } from '../constants/Search'

export function getGenres () {
    return function (dispatch) {
        dispatch({
            type: GET_GENRES
        })
        
        xhr({
            uri: 'http://beatspot.me/vapi/v1/genre'
        }, function (err, resp, body) {
            if (!err) {
                debugger;
                dispatch({
                    type: GET_GENRES_SUCCESS,
                    payload: []
                })
            } else {
                debugger;
                dispatch({
                    type: GET_GENRES_FAIL,
                    payload: []
                })
            }
        })
        
        
        /*return {
            type: GET_GENRES,
            payload: []
        }*/
    }
}
