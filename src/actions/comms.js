/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import { UPDATE_COMMS } from './types';

export const updateComms = (comms) => (dispatch) => {
	dispatch({
		type: UPDATE_COMMS,
		payload: comms
	});
};
