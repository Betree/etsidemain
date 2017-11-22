import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import Immutable from 'immutable'
import promiseMiddleware from 'redux-promise'
import thunk from 'redux-thunk'


// Reducers
import HelloWorldReducer from './hello_world/reducer'

// Declare reducers
const reducers = combineReducers({
  HelloWorld: HelloWorldReducer
})


// Declare middlewares
const middlewares = [thunk, promiseMiddleware]

// If running in dev and browser has redux devtools extension activated, use it
const getComposer = () => {
  if (!window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    return compose
  return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    serialize: {immutable: Immutable},
    shouldCatchErrors: true
  })
}

// Build store
const store = createStore(reducers, getComposer()(applyMiddleware(...middlewares)))

export default store