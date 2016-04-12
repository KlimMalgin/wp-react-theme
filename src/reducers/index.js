import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import search from './search'

export default combineReducers({
  page,
  user,
  search
})
