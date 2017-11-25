import { Record, List, Set } from "immutable"
import { createAction, handleActions } from 'redux-actions'


export const actionFetchData = createAction('DEBATE/FETCH_DATA')
export const markAsSeen = createAction('DEBATE/MARK_AS_SEEN')
export const clearAlreadySeen = createAction('DEBATE/CLEAR_ALREADY_SEEN')

const INITIAL_STATE = new Record({
  categories: new List(),
  contributions: new List(),
  alreadySeen: new Set()
})

const DebateReducer = handleActions({
  [actionFetchData]: (state, {payload}) => state.merge(payload),
  [markAsSeen]: (state, {payload}) => state.update('alreadySeen', l => l.add(payload)),
  [clearAlreadySeen]: (state, {payload}) => state.update('alreadySeen', l => l.clear())
}, INITIAL_STATE())

export default DebateReducer
