/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import { UPDATE_SYSTEM } from '../actions/types';

const initialState = window.api.system;

function systemReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case UPDATE_SYSTEM:
			return {
				...state,
				deviceName: payload.deviceName,
				deviceType: payload.deviceType,
				deviceModel: payload.deviceModel,
				deviceModelPromotional: payload.deviceModelPromotional,
				deviceDisplayBrightness: payload.deviceDisplayBrightness,
				deviceDisplayHeight: payload.deviceDisplayHeight,
				deviceDisplayWidth: payload.deviceDisplayWidth,
				isLowPowerModeEnabled: payload.isLowPowerModeEnabled,
				isNetworkConnected: payload.isNetworkConnected,
				isTwentyFourHourTimeEnabled: payload.isTwentyFourHourTimeEnabled
			};

		default:
			return state;
	}
}

export default systemReducer;
