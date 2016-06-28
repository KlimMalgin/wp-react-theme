import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form';
import user from './user'
import search from './search'
import shadow from './shadow'
import modal from './modal'

export default combineReducers({
  user,
  search,
  shadow,
  modal,
  form: formReducer,
  routing: routerReducer
})
