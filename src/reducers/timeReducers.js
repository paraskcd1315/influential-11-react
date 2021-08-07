import { UPDATE_TIME } from '../actions/types';
import { Time } from '../libs/Time';

let hours, minutes, date, month;

Time({
	twentyfour: false,
	zeroPadding: true,
	callback: (t) => {
		hours = t.hour();
		minutes = t.minute();
		date = t.dateNum();
		month = t.sMonthText();
	}
});

const initialState = {
	hours: hours,
	minutes: minutes,
	date: date,
	month: month
};

function timeReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case UPDATE_TIME:
			return {
				...state,
				hours: payload.hours,
				minutes: payload.minutes
			};

		default:
			return state;
	}
}

export default timeReducer;
