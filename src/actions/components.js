/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import {
	OPEN_START_MENU,
	OPEN_CC,
	SEARCHBAR_ACTIVE,
	SEARCHQUERY,
	SHOWMENU
} from './types';

export const openStartMenu = (startMenuOpen) => (dispatch) => {
	dispatch({
		type: OPEN_START_MENU,
		payload: startMenuOpen
	});
};

export const openCC = (ccOpen) => (dispatch) => {
	dispatch({
		type: OPEN_CC,
		payload: ccOpen
	});
};

export const searchQuery = (searchQuery) => (dispatch) => {
	dispatch({
		type: SEARCHQUERY,
		payload: searchQuery
	});
};

export const activateSearchbar = (searchbarActive) => (dispatch) => {
	dispatch({
		type: SEARCHBAR_ACTIVE,
		payload: searchbarActive
	});
};

export const showMenu = (showMenu) => (dispatch) => {
	dispatch({
		type: SHOWMENU,
		payload: showMenu
	});
};
