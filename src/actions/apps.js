/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import { UPDATE_APPS } from './types';

export const updateApps = (app) => (dispatch) => {
	dispatch({
		type: UPDATE_APPS,
		payload: app
	});
};
