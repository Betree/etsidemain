import { Record, fromJS } from "immutable"
import { createAction, handleActions } from 'redux-actions'


export const showModal = createAction('MODAL/SHOW')
export const closeModal = createAction('MODAL/CLOSE')

const INITIAL_STATE = new Record({
  isActive: false,
  type: null,
  data: null,
  display: "modal"
})

const ModalReducer = handleActions({
  [showModal]: (state, {payload: {type, data, display}}) =>
    state.merge({isActive: true, type, data: fromJS(data), display}),
  [closeModal]: state => state.set('isActive', false)
}, INITIAL_STATE())

export default ModalReducer
