/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import {
	ADD_APP_TO_FOLDER,
	OPEN_CC,
	OPEN_START_MENU,
	SEARCHBAR_ACTIVE,
	SEARCHQUERY,
	SHOWMENU,
	OPEN_FOLDER,
	CLOSE_FOLDER
} from '../actions/types';

const initialState = {
	startMenuOpen: false,
	ccOpen: false,
	searchbarActive: false,
	searchQuery: '',
	showMenu: false,
	addAppToFolderFlag: false,
	folderOpened: false
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

		case ADD_APP_TO_FOLDER:
			return {
				...state,
				addAppToFolderFlag: payload.flag
			};

		case OPEN_FOLDER:
			return {
				...state,
				folderOpened: payload.flag
			};

		case CLOSE_FOLDER:
			return {
				...state,
				folderOpened: false
			};

		default:
			return state;
	}
}

export default componentsReducer;
