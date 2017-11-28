import { Record, List, Set, fromJS } from "immutable"
import { createAction, handleActions } from 'redux-actions'


export const actionFetchData = createAction('DEBATE/FETCH_DATA')
export const actionFetchFacts = createAction('DEBATE/FETCH_FACTS')
export const setLoadingData = createAction(("DEBATE/LOADING_DATA"))
export const setLoadingFacts = createAction(("DEBATE/LOADING_FACTS"))
export const getRandomContrib = createAction('DEBATE/GET_RANDOM_CONTRIB')


const INITIAL_STATE = new Record({
  categories: new List(),
  contributions: new List(),
  randomContribution: null,
  contributionsNotSeenIdx: new List(),
  facts: new Map(),
  isLoadingContributions: false,
  isLoadingFacts: false
})

const DebateReducer = handleActions({
  [actionFetchData]: (state, {payload: {categories, contributions}}) =>
    state.merge({
      categories,
      contributions,
      isLoadingContributions: false,
      contributionsNotSeenIdx: shuffledContributionsIds(contributions)
    }),
  [actionFetchFacts]: (state, {payload}) => state.merge({facts: fromJS(payload), isLoadingFacts: false}),
  [setLoadingData]: (state, {payload}) => state.set('isLoadingContributions', payload),
  [setLoadingFacts]: (state, {payload}) => state.set('isLoadingFacts', payload),
  [getRandomContrib]: (state) => {
    let contributionsNotSeenIdx = null
    if (state.randomContribution !== null && state.contributionsNotSeenIdx.size === 0)
      return state.set('randomContribution', null)
    else if (state.contributionsNotSeenIdx.size > 0)
      contributionsNotSeenIdx = state.contributionsNotSeenIdx
    else
      contributionsNotSeenIdx = shuffledContributionsIds(state.contributions)

    return state.merge({
      randomContribution: state.contributions.get(contributionsNotSeenIdx.last()),
      contributionsNotSeenIdx: contributionsNotSeenIdx.pop()
    })
  }
}, INITIAL_STATE())


function shuffledContributionsIds(contributions) {
  return contributions.keySeq().toList().sortBy(Math.random)
}

export default DebateReducer
