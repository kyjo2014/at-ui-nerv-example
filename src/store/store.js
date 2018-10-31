import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/reducers'

const middlewares = [
  thunkMiddleware
]

if (process.env.NODE_ENV !== 'production') {
  const loggerMiddleWare = require('redux-logger').createLogger
  middlewares.push(loggerMiddleWare())
}

let configureStore = preloadedState => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      ...middlewares
    )
  )
}

export default configureStore
