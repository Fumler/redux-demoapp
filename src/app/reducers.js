import { combineReducers } from "redux"

import {
	REQUEST_MATCHES,
	RECEIVE_MATCHES,
	SHOW_ALL_RESULTS,
	SHOW_RESULT,
} from "./constants"

function matchesReducer(
	state = {
		isFetching: false,
		matches: [],
	},
	action,
) {
	switch (action.type) {
		case REQUEST_MATCHES:
			return {
				...state,
				isFetching: true,
			}

		case RECEIVE_MATCHES:
			return {
				...state,
				isFetching: false,
				matches: action.payload.map(match => {
					match.show = false
					return match
				}),
			}

		case SHOW_RESULT:
			return {
				...state,
				matches: state.matches.map(
					match =>
						match.match_id === action.id ? { ...match, show: true } : match,
				),
			}

		case SHOW_ALL_RESULTS:
			return {
				...state,
				matches: state.matches.map(match => ({ ...match, show: true })),
			}

		default:
			return state
	}
}

const rootReducer = combineReducers({
	matchesReducer,
})

export default rootReducer
