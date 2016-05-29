
import { 
    GET_USER_DATA,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAIL
    } from '../constants/User'


const initialState = {
  avatar: {
    urls: {
      min: 'http://placehold.it/32x32',
      medium: 'http://placehold.it/96x96'
    }
  },
  name: 'User Name',
  loading: false
}

export default function user(state = initialState, action) {

  switch (action.type) {
    case GET_USER_DATA:
      return { ...state, loading: true }

    case GET_USER_DATA_SUCCESS:
      debugger;
      console.log('USER: %o', action.payload);
      return { ...state, loading: false }

    case GET_USER_DATA_FAIL:
      //console.log('USER: %o', action.payload);
      return { ...state, loading: false }

    default:
      return state;
  }

  
}

