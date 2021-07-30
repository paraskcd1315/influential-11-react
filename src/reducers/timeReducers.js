import { UPDATE_TIME } from '../actions/types';

const initialState = {
	hours: null,
	minutes: null,
	seconds: null,
	date: null,
	month: null,
	year: null
};

function timeReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case UPDATE_TIME:
			return {
				...state,
				hours: payload.hours,
				minutes: payload.minutes,
				seconds: payload.seconds,
				date: payload.date,
				month: payload.month,
				year: payload.year
			};

		default:
			return state;
	}
}

export default timeReducer;
