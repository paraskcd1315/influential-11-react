/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import { UPDATE_SYSTEM } from './types';

export const updateSystem = (system) => (dispatch) => {
	dispatch({
		type: UPDATE_SYSTEM,
		payload: system
	});
};
