import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import search from './search'
import shadow from './shadow'

export default combineReducers({
  page,
  user,
  search,
  shadow
})
