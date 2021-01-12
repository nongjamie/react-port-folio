import * as actionTypes from './../actions/actionTypes'
import contactData from './../../data/contact'

const initialState = {
  contacts: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CONTACT:
      return {
        ...state,
        ...contactData
      }
    default:
      return state
  }
}

export default reducer