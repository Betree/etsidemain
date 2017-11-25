import { Record } from "immutable"
import { createAction, handleActions } from 'redux-actions'


export const showModal = createAction('MODAL/SHOW')
export const closeModal = createAction('MODAL/CLOSE')

const INITIAL_STATE = new Record({
  isActive: false,
  data: null
})

const ModalReducer = handleActions({
  [showModal]: (state, {payload}) => state.merge({isActive: true, data: payload}),
  [closeModal]: state => state.set('isActive', false)
}, INITIAL_STATE())

export default ModalReducer
