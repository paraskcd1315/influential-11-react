/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import {
	SETTINGS_OPEN,
	WEATHER_OPEN,
	EXPLORER_OPEN,
	MEDIA_OPEN
} from './types';

export const openSettings = (openSettings) => (dispatch) => {
	dispatch({
		type: SETTINGS_OPEN,
		payload: openSettings
	});
};

export const openWeather = (openWeather) => (dispatch) => {
	dispatch({
		type: WEATHER_OPEN,
		payload: openWeather
	});
};

export const openExplorer = (openExplorer) => (dispatch) => {
	dispatch({
		type: EXPLORER_OPEN,
		payload: openExplorer
	});
};

export const openMedia = (openMedia) => (dispatch) => {
	dispatch({
		type: MEDIA_OPEN,
		payload: openMedia
	});
};
