/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import { UPDATE_TIME } from './types';

export const updateTime = (time) => (dispatch) => {
	dispatch({
		type: UPDATE_TIME,
		payload: time
	});
};
