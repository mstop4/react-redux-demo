import { ADD_MESSAGE } from '../constants/action-types'

export const addMessage = message => (
  {
    type: ADD_MESSAGE,
    payload: message
  }
)