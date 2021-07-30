import { UPDATE_APPS } from './types';

export const updateApps = (app) => (dispatch) => {
	dispatch({
		type: UPDATE_APPS,
		payload: app
	});
};
