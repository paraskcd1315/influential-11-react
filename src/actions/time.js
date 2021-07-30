import { UPDATE_TIME } from './types';

export const updateTime = (time) => (dispatch) => {
	dispatch({
		type: UPDATE_TIME,
		payload: time
	});
};
