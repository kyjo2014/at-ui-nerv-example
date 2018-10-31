import {combineReducers} from 'redux'

import dashBoardReducer from '@reducer/dashBoard'
import sideBarReducer from '@reducer/sideBar'

const rootReducer = combineReducers({
  dashBoardReducer,
  sideBarReducer
})

export default rootReducer
