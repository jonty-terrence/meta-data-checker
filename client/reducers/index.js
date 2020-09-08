import { combineReducers } from 'redux'
import title from './title'
import description from './description'
import url from './url'

export default combineReducers({
  title,
  description,
  url
})
