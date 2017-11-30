import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import Immutable from 'immutable'
import promiseMiddleware from 'redux-promise'
import thunk from 'redux-thunk'


// Reducers
import ModalReducer from './modal/reducer'

// Declare reducers
const reducers = combineReducers({
  Modal: ModalReducer
})


// Declare middlewares
const middlewares = [thunk, promiseMiddleware]

// If running in dev and browser has redux devtools extension activated, use it
const getComposer = () => {
  if (typeof window === 'undefined' || !window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    return compose
  return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    serialize: {immutable: Immutable},
    shouldCatchErrors: true
  })
}

// Build store
const store = createStore(reducers, getComposer()(applyMiddleware(...middlewares)))

export default store