/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import { UPDATE_APPS } from '../actions/types';

const initialState = window.api.apps;

function appsReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case UPDATE_APPS:
			return {
				...state,
				allApplications: payload.allApplications,
				userApplications: payload.userApplications,
				systemApplications: payload.systemApplications
			};

		default:
			return state;
	}
}

export default appsReducer;
