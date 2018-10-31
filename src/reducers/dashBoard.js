import { combineReducers } from 'redux'

const DASH_BOARD_INITIAL_STATE = {

}

export function dashBoard (state = DASH_BOARD_INITIAL_STATE, action) {
  const {type, data} = action
  switch (type) {
    default:
      return state
  }
}

export default combineReducers({
  dashBoard
})
