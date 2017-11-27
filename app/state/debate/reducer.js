import { Record, List, Set, fromJS } from "immutable"
import { createAction, handleActions } from 'redux-actions'


export const actionFetchData = createAction('DEBATE/FETCH_DATA')
export const actionFetchFacts = createAction('DEBATE/FETCH_FACTS')
export const setLoadingData = createAction(("DEBATE/LOADING_DATA"))
export const setLoadingFacts = createAction(("DEBATE/LOADING_FACTS"))
export const markAsSeen = createAction('DEBATE/MARK_AS_SEEN')
export const clearAlreadySeen = createAction('DEBATE/CLEAR_ALREADY_SEEN')

const INITIAL_STATE = new Record({
  categories: new List(),
  contributions: new List(),
  alreadySeen: new Set(),
  facts: new Map(),
  isLoadingContributions: false,
  isLoadingFacts: false
})

const DebateReducer = handleActions({
  [actionFetchData]: (state, {payload}) => state.merge({...payload, isLoadingContributions: false}),
  [actionFetchFacts]: (state, {payload}) => state.merge({facts: fromJS(payload), isLoadingFacts: false}),
  [setLoadingData]: (state, {payload}) => state.set('isLoadingContributions', payload),
  [setLoadingFacts]: (state, {payload}) => state.set('isLoadingFacts', payload),
  [markAsSeen]: (state, {payload}) => state.update('alreadySeen', l => l.add(payload)),
  [clearAlreadySeen]: (state, {payload}) => state.update('alreadySeen', l => l.clear())
}, INITIAL_STATE())

export default DebateReducer
