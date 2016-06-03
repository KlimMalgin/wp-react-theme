
import { 
    GET_USER_DATA,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAIL
    } from '../constants/User'


const initialState = {
  avatar: {
    filename: 'http://placehold.it/96x96',
    urls: {
      min: 'http://placehold.it/32x32',
      medium: 'http://placehold.it/96x96'
    }
  },
  name: '',
  email: '',
  loading: false,
  uid: null
}


export default function user(state = initialState, action) {

  switch (action.type) {
    case GET_USER_DATA:
      return { ...state, loading: true }

    case GET_USER_DATA_SUCCESS:
      //debugger;
      let user = action.payload[0] || {};
      console.log('USER: %o', action.payload);
      return { ...state, ...user, loading: false }

    case GET_USER_DATA_FAIL:
      //console.log('USER: %o', action.payload);
      return { ...state, loading: false }

    default:
      return state;
  }

  
}

