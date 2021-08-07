import {
	OPEN_START_MENU,
	SEARCHBAR_ACTIVE,
	SEARCHQUERY
} from '../actions/types';

const initialState = {
	startMenuOpen: false,
	searchbarActive: false,
	searchQuery: ''
};

function componentsReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case OPEN_START_MENU:
			return {
				...state,
				startMenuOpen: payload
			};

		case SEARCHBAR_ACTIVE:
			return {
				...state,
				searchbarActive: payload
			};

		case SEARCHQUERY:
			return {
				...state,
				searchQuery: payload
			};

		default:
			return state;
	}
}

export default componentsReducer;
