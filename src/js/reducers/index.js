import { ADD_MESSAGE } from '../constants/action-types'

const initialState = {
  messages: []
}

const rootReducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }

    default:
      return state

  }
}

export default rootReducer