/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import { UPDATE_COMMS } from '../actions/types';

const initialState = window.api.comms;

function commsReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case UPDATE_COMMS:
			return {
				...state,
				bluetooth: payload.bluetooth,
				telephony: payload.telephony,
				wifi: payload.wifi
			};

		default:
			return state;
	}
}

export default commsReducer;
