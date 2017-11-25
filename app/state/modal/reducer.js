import { Record } from "immutable"
import { createAction, handleActions } from 'redux-actions'


export const showModal = createAction('MODAL/SHOW')
export const closeModal = createAction('MODAL/CLOSE')

const INITIAL_STATE = new Record({
  isActive: false,
  type: null,
  data: null
})

const ModalReducer = handleActions({
  [showModal]: (state, {payload: {type, data}}) => state.merge({isActive: true, type, data}),
  [closeModal]: state => state.set('isActive', false)
}, INITIAL_STATE())

export default ModalReducer
