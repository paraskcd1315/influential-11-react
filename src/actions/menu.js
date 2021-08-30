/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import {
	ADD_APPS_MENU,
	REPLACE_APPS_MENU,
	REMOVE_FOLDER_MENU,
	REMOVE_APP_FROM_FOLDER_MENU
} from './types';

export const showAddAppsMenu = (addAppsMenu) => (dispatch) => {
	dispatch({
		type: ADD_APPS_MENU,
		payload: addAppsMenu
	});
};

export const showReplaceAppsMenu = (replaceAppsMenu) => (dispatch) => {
	dispatch({
		type: REPLACE_APPS_MENU,
		payload: replaceAppsMenu
	});
};

export const showRemoveFolderMenu = (removeFolderMenu) => (dispatch) => {
	dispatch({
		type: REMOVE_FOLDER_MENU,
		payload: removeFolderMenu
	});
};

export const showRemoveAppFromFolderMenu =
	(removeAppFromFolderMenu) => (dispatch) => {
		dispatch({
			type: REMOVE_APP_FROM_FOLDER_MENU,
			payload: removeAppFromFolderMenu
		});
	};
