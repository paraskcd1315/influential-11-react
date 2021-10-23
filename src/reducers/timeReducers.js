/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import { UPDATE_TIME } from '../actions/types';
import { Time } from '../libs/Time';

let hours, minutes, date, month, ampm, rawHour, bigMonth, year;

Time({
	twentyfour: false,
	zeroPadding: true,
	callback: (t) => {
		hours = t.hour();
		minutes = t.minute();
		date = t.dateNum();
		month = t.sMonthText();
		ampm = t.ampm();
		rawHour = t.rawHour();
		bigMonth = t.monthText();
		year = t.year();
	}
});

const initialState = {
	hours: hours,
	minutes: minutes,
	date: date,
	month: month,
	ampm: ampm,
	rawHour: rawHour,
	bigMonth: bigMonth,
	year: year
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
