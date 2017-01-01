import 'whatwg-fetch'

import * as types from '../constants/ActionTypes'

/**
 * action creator for initializing the loading circle
 */
export const initializeFetchAthlete = () => ({
  type: types.INITIALIZE_FETCH_ATHLETE,
})

/**
 * action creator for receiving the athlete data
 */
export const receiveAthleteData = json => ({
  type: types.RECEIVE_ATHLETE_DATA,
  data: json,
})

/**
 * handles receiving athlete data from the api
 * @param  {string} number [the number of the athlete]
 * @return {promise}        [a promise for handling the data]
 */
export const fetchAthleteData = number => (dispatch) => {
  dispatch(initializeFetchAthlete())
  return fetch(`/athlete?number=${number}`,
               { credentials: 'same-origin' })
    .then(response => response.json())
    .then(json => dispatch(receiveAthleteData(json)))
}
