
const SIDEBAR_INITIAL_STATE = {
  collapse: false
}

export function dashBoard (state = SIDEBAR_INITIAL_STATE, action) {
  const {type} = action
  const {collapse} = state
  switch (type) {
    case 'TOGGLE_SIDEBAR':
      return Object.assign({}, state, {
        collapse: !collapse
      })
    default:
      return state
  }
}

export default dashBoard
