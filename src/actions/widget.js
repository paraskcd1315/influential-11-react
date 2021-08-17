/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import { SETTINGS_OPEN } from './types';

export const openSettings = (openSettings) => (dispatch) => {
	dispatch({
		type: SETTINGS_OPEN,
		payload: openSettings
	});
};
