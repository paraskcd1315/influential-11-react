/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import { ADD_APPS, REPLACE_APPS, REMOVE_APPS } from './types';

export const addApp = (app) => (dispatch) => {
	const localstore = JSON.parse(localStorage.getItem('FluentUI'));
	let dockIcons = localstore ? localstore['dockIcons'] : null;

	if (localstore['dockIcons'].indexOf(app) > -1) {
		alert('App already placed');
		return;
	}

	dockIcons.push(app);

	localstore['dockIcons'] = dockIcons;

	localStorage.setItem('FluentUI', JSON.stringify(localstore));

	dispatch({
		type: ADD_APPS,
		payload: dockIcons
	});
};

export const replaceApp =
	({ older, newer }) =>
	(dispatch) => {
		const localstore = JSON.parse(localStorage.getItem('FluentUI'));
		let dockIcons = localstore ? localstore['dockIcons'] : null;

		if (dockIcons.indexOf(newer) > -1) {
			let indexA = dockIcons.indexOf(older);
			let indexB = dockIcons.indexOf(newer);
			dockIcons[indexA] = newer;
			dockIcons[indexB] = older;
		} else {
			let index = dockIcons.indexOf(older);
			if (index !== -1) {
				dockIcons[index] = newer;
			}
		}

		localstore['dockIcons'] = dockIcons;

		localStorage.setItem('FluentUI', JSON.stringify(localstore));

		dispatch({
			type: REPLACE_APPS,
			payload: dockIcons
		});
	};

export const removeApp = (app) => (dispatch) => {
	const localstore = JSON.parse(localStorage.getItem('FluentUI'));
	let dockIcons = localstore ? localstore['dockIcons'] : null;

	let index = dockIcons.indexOf(app);
	dockIcons.splice(index, 1);

	localstore['dockIcons'] = dockIcons;

	localStorage.setItem('FluentUI', JSON.stringify(localstore));

	dispatch({
		type: REMOVE_APPS,
		payload: dockIcons
	});
};
