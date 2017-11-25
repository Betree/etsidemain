import { Record, List } from "immutable"
import { createAction, handleActions } from 'redux-actions'


export const actionFetchData = createAction('DEBATE/FETCH_DATA')

const INITIAL_STATE = new Record({
  categories: new List(),
  contributions: new List()
})

const DebateReducer = handleActions({
  [actionFetchData]: (state, {payload}) => state.merge(payload)
}, INITIAL_STATE())

export default DebateReducer
