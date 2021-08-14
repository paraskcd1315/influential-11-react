/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import { UPDATE_WEATHER } from './types';

export const updateWeather = (weather) => (dispatch) => {
	dispatch({
		type: UPDATE_WEATHER,
		payload: weather
	});
};
