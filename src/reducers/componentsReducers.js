/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import {
	OPEN_CC,
	OPEN_START_MENU,
	SEARCHBAR_ACTIVE,
	SEARCHQUERY,
	SHOWMENU
} from '../actions/types';

const initialState = {
	startMenuOpen: false,
	ccOpen: false,
	searchbarActive: false,
	searchQuery: '',
	showMenu: false
};

function componentsReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case OPEN_START_MENU:
			return {
				...state,
				startMenuOpen: payload
			};

		case OPEN_CC:
			return {
				...state,
				ccOpen: payload
			};

		case SEARCHBAR_ACTIVE:
			return {
				...state,
				searchbarActive: payload
			};

		case SEARCHQUERY:
			return {
				...state,
				searchQuery: payload
			};

		case SHOWMENU:
			return {
				...state,
				showMenu: payload
			};

		default:
			return state;
	}
}

export default componentsReducer;
