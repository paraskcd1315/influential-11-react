/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import { UPDATE_RESOURCES } from '../actions/types';

const initialState = window.api.resources;

function resourcesReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case UPDATE_RESOURCES:
			return {
				...state,
				battery: payload.battery,
				memory: payload.memory,
				processor: payload.processor
			};

		default:
			return state;
	}
}

export default resourcesReducer;
