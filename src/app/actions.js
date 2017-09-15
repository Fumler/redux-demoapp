import * as types from "./constants"
import fetch from "isomorphic-fetch"

export const requestMatches = () => ({
	type: types.REQUEST_MATCHES,
})

export const receiveMatches = json => ({
	type: types.RECEIVE_MATCHES,
	payload: json,
})

export const showResult = id => ({
	type: types.SHOW_RESULT,
	id,
})

export const showAllResults = () => ({
	type: types.SHOW_ALL_RESULTS,
})

export const fetchMatches = dispatch => {
	return dispatch => {
		dispatch(requestMatches())
		setTimeout(() => {
			return fetch("https://api.opendota.com/api/proMatches")
				.then(response => response.json())
				.then(json => {
					dispatch(receiveMatches(json))
				})
		}, 3000)
	}
}
