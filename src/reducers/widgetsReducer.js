/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import {
	SETTINGS_OPEN,
	WEATHER_OPEN,
	EXPLORER_OPEN,
	CALENDAR_OPEN,
	MEDIA_OPEN,
	REMINDERS_OPEN
} from '../actions/types';

const initialState = {
	settingsOpen: false,
	weatherOpen: false,
	explorerOpen: false,
	calendarOpen: false,
	mediaOpen: false,
	remindersOpen: false
};

function widgetReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SETTINGS_OPEN:
			return { ...state, settingsOpen: payload };

		case WEATHER_OPEN:
			return { ...state, weatherOpen: payload };

		case EXPLORER_OPEN:
			return { ...state, explorerOpen: payload };

		case CALENDAR_OPEN:
			return { ...state, calendarOpen: payload };

		case MEDIA_OPEN:
			return { ...state, mediaOpen: payload };

		case REMINDERS_OPEN:
			return { ...state, remindersOpen: payload };

		default:
			return state;
	}
}

export default widgetReducer;
