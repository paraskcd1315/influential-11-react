/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import { UPDATE_WEATHER } from '../actions/types';

const initialState = window.api.weather;

function weatherReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case UPDATE_WEATHER:
			return {
				...state,
				daily: payload.daily,
				hourly: payload.hourly,
				metadata: payload.metadata,
				nightly: payload.nightly,
				now: payload.now
			};

		default:
			return state;
	}
}

export default weatherReducer;
