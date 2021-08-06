import { UPDATE_RESOURCES } from './types';

export const updateResources = (resources) => (dispatch) => {
	dispatch({
		type: UPDATE_RESOURCES,
		payload: resources
	});
};
