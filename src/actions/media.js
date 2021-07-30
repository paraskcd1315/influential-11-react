import { UPDATE_MEDIA } from './types';

export const updateMedia = (media) => (dispatch) => {
	dispatch({
		type: UPDATE_MEDIA,
		payload: media
	});
};
