/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import {
	ADD_APPS,
	REPLACE_APPS,
	REMOVE_APPS,
	ADD_VALUE,
	REMOVE_VALUE,
	ADD_DOCUMENT_FOLDER,
	REMOVE_DOCUMENT_FOLDER,
	ADD_PHOTO_FOLDER,
	ADD_MUSIC_FOLDER,
	ADD_VIDEO_FOLDER,
	ADD_APP_TO_FOLDER,
	REMOVE_APP_FROM_FOLDER,
	REMOVE_PHOTO_FOLDER,
	REMOVE_MUSIC_FOLDER,
	REMOVE_VIDEO_FOLDER,
	ADD_APP_TO_PAGE,
	REMOVE_APP_FROM_PAGE
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

		case ADD_APP_TO_FOLDER:
		case REMOVE_APP_FROM_FOLDER:
			if (payload.flag) {
				return state;
			} else {
				return {
					...state,
					[payload.pageID]: {
						...state[payload.pageID],
						[payload.folderID]: {
							...state[payload.pageID][payload.folderID],
							apps: payload.apps
						}
					}
				};
			}

		case ADD_DOCUMENT_FOLDER:
		case REMOVE_DOCUMENT_FOLDER:
			return {
				...state,
				documentFolders: payload
			};

		case ADD_PHOTO_FOLDER:
		case REMOVE_PHOTO_FOLDER:
			return {
				...state,
				photoFolders: payload
			};

		case ADD_MUSIC_FOLDER:
		case REMOVE_MUSIC_FOLDER:
			return {
				...state,
				musicFolders: payload
			};

		case ADD_VIDEO_FOLDER:
		case REMOVE_VIDEO_FOLDER:
			return {
				...state,
				videoFolders: payload
			};

		case ADD_APP_TO_PAGE:
		case REMOVE_APP_FROM_PAGE:
			if (payload.flag) {
				return state;
			} else {
				return {
					...state,
					[payload.pageID]: payload.apps
				};
			}

		default:
			return state;
	}
}

export default storageReducer;
