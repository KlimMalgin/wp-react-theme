import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import page from './page'
import user from './user'
import search from './search'
import shadow from './shadow'

export default combineReducers({
  page,
  user,
  search,
  shadow,
  routing: routerReducer
})
