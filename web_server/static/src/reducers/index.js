import * as types from '../constants/ActionTypes'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.INITIALIZE_FETCH_ATHLETE:
      return {
        ...state,
        athleteData: null,
        loading: true,
      }
    case types.RECEIVE_ATHLETE_DATA:
      return {
        ...state,
        athleteData: action.data,
        loading: false,
      }
    default:
      return state
  }
}

export default reducer
