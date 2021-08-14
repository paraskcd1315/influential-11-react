/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import { ADD_APPS_MENU, REPLACE_APPS_MENU } from './types';

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
