/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import {
	ADD_APPS,
	REPLACE_APPS,
	REMOVE_APPS,
	ADD_VALUE,
	REMOVE_VALUE
} from '../actions/types';

const initialState = localStorage.getItem('FluentUI')
	? JSON.parse(localStorage.getItem('FluentUI'))
	: {
			dockIcons: [
				'com.apple.MobileSMS',
				'com.apple.mobilesafari',
				'com.apple.camera',
				'com.apple.Preferences',
				'com.apple.mobilenotes'
			]
	  };

if (!localStorage.getItem('FluentUI')) {
	localStorage.setItem('FluentUI', JSON.stringify(initialState));
}

function storageReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case ADD_APPS:
		case REPLACE_APPS:
		case REMOVE_APPS:
			return {
				...state,
				dockIcons: payload
			};

		case ADD_VALUE:
		case REMOVE_VALUE:
			return {
				...state,
				extraValues: payload
			};

		default:
			return state;
	}
}

export default storageReducer;
