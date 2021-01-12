import * as actionTypes from './../actions/actionTypes'
import homepageData from './../../data/homepage'

const initialState = {
  shortDescription: [],
  programmingLanguages: [],
  frontendTechnologies: [],
  backendTechnologies: [],
  databases: [],
  otherTools: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SHORTDESCRIPTION:
      return {
        ...state,
        shortDescription: [...homepageData.shortDescription]
      }
    case actionTypes.SET_PROGRAMMINGLANGUAGES:
      return {
        ...state,
        programmingLanguages: [...homepageData.programmingLanguages]
      }
    case actionTypes.SET_FRONTENDTECHNOLOGIES:
      return {
        ...state,
        frontendTechnologies: [...homepageData.frontendTechnologies]
      }
    case actionTypes.SET_BACKENDTECHNOLOGIES:
      return {
        ...state,
        backendTechnologies: [...homepageData.backendTechnologies]
      }
    case actionTypes.SET_DATABASES:
      return {
        ...state,
        databases: [...homepageData.databases]
      }
    case actionTypes.SET_OTHERTOOLS:
      return {
        ...state,
        otherTools: [...homepageData.otherTools]
      }
    default:
      return state
  }
}

export default reducer