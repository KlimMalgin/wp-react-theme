//import xhr from 'xhr'
import { genres } from '../api/api'

import { 
    GET_GENRES,
    GET_GENRES_SUCCESS,
    GET_GENRES_FAIL,
    UNSELECT_GENRE,
    SELECT_GENRE,
    ENABLE_PANEL,
    DISABLE_PANEL
    } from '../constants/Search'

export function getGenres () {
    return function (dispatch) {
        dispatch({
            type: GET_GENRES
        })
        
        genres().then(function (response) {
            dispatch({
                type: GET_GENRES_SUCCESS, 
                payload: JSON.parse(response.body)
            })
        }).catch(function (/*err*/) {
            dispatch({
                type: GET_GENRES_FAIL,
                payload: []
            })
        });
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

export function enablePanel() {
  return {
    type: ENABLE_PANEL,
    payload: true
  }
}

export function disablePanel() {
  return {
    type: DISABLE_PANEL,
    payload: false
  }
}
