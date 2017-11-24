import { Record } from "immutable"
import { createAction, handleActions } from 'redux-actions'


export const updateMessage = createAction('HELLO_WORLD/UPDATE')
export const reset = createAction('HELLO_WORLD/RESET')

const INITIAL_STATE = new Record({
  message: "Hello World"
})

const HelloWorldReducer = handleActions({
  [updateMessage]: (state, {payload}) => state.set('message', "Redux state updated !"),
  [reset]: () => INITIAL_STATE()
}, INITIAL_STATE())

export default HelloWorldReducer
