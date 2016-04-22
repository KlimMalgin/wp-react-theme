import xhr from 'xhr'

import { 
    GET_GENRES,
    GET_GENRES_SUCCESS,
    GET_GENRES_FAIL,
    UNSELECT_GENRE,
    SELECT_GENRE
    } from '../constants/Search'

export function getGenres () {
    return function (dispatch) {
        dispatch({
            type: GET_GENRES
        })
        
        xhr({
            uri: 'https://beatspot.me/vapi/v1/genre'
        }, function (err, response, body) {
            if (!err) {
                dispatch({
                    type: GET_GENRES_SUCCESS,
                    payload: JSON.parse(body)
                })
            } else {
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

export function selectGenre(tag) {
    return function (dispatch) {
        dispatch({
            type: SELECT_GENRE,
            payload: tag
        })
    }
}

export function unSelectGenre(tag) {
    return function (dispatch) {
        dispatch({
            type: UNSELECT_GENRE,
            payload: tag
        })
    }
}
