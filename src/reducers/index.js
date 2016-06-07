import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user'
import search from './search'
import shadow from './shadow'

export default combineReducers({
  user,
  search,
  shadow,
  form: () => { return {}; },
  routing: routerReducer
})
