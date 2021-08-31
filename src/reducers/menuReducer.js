/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import {
	ADD_APPS_MENU,
	REMOVE_APP_FROM_FOLDER_MENU,
	REMOVE_APP_FROM_PAGE_MENU,
	REMOVE_FOLDER_MENU,
	REPLACE_APPS_MENU
} from '../actions/types';

const initialState = {
	identifier: '',
	name: '',
	icon: '',
	removeApp: false,
	replaceApp: false,
	removeFolder: false,
	addApp: false,
	addAppToFolder: false,
	fromPage: false
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

		case REMOVE_APP_FROM_FOLDER_MENU:
			return {
				...state,
				identifier: payload.identifier,
				name: payload.name,
				icon: payload.icon,
				removeApp: payload.removeApp
			};

		case REMOVE_APP_FROM_PAGE_MENU:
			return {
				...state,
				identifier: payload.identifier,
				name: payload.name,
				icon: payload.icon,
				removeApp: payload.removeApp,
				fromPage: payload.fromPage
			};

		case REMOVE_FOLDER_MENU:
			return {
				...state,
				identifier: payload.folderID,
				name: payload.folderName,
				icon: payload.icon ? 'assets/explorerIcons/Folder.png' : '',
				removeFolder: payload.removeFolder,
				fromPage: payload.fromPage ? payload.fromPage : null
			};

		default:
			return state;
	}
}

export default menuReducer;
