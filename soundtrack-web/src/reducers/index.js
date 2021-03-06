// //syntax to use 
import { combineReducers } from 'redux'

import entriesReducer from './entriesReducer'
import sessionsReducer from './sessionsReducer'

const rootReducer = combineReducers({
  entries: entriesReducer,
  sessions: sessionsReducer
})



export default rootReducer
