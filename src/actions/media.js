/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import { UPDATE_MEDIA } from './types';

export const updateMedia = (media) => (dispatch) => {
	dispatch({
		type: UPDATE_MEDIA,
		payload: media
	});
};
