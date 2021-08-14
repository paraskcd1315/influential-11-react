/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import { ADD_APPS_MENU, REPLACE_APPS_MENU } from '../actions/types';

const initialState = {
	identifier: '',
	name: '',
	icon: '',
	removeApp: false,
	replaceApp: false,
	addApp: false
};

function menuReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case ADD_APPS_MENU:
			return {
				...state,
				identifier: payload.identifier,
				name: payload.name,
				icon: payload.icon,
				addApp: payload.addApp
			};

		case REPLACE_APPS_MENU:
			return {
				...state,
				identifier: payload.identifier,
				name: payload.name,
				icon: payload.icon,
				replaceApp: payload.replaceApp,
				removeApp: payload.removeApp
			};

		default:
			return state;
	}
}

export default menuReducer;
