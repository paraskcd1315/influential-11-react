import { OPEN_START_MENU } from '../actions/types';

const initialState = {
	startMenuOpen: false
};

function componentsReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case OPEN_START_MENU:
			return {
				...state,
				startMenuOpen: payload
			};

		default:
			return state;
	}
}

export default componentsReducer;
