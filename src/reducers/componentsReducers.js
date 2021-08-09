import {
	OPEN_START_MENU,
	SEARCHBAR_ACTIVE,
	SEARCHQUERY,
	SHOWMENU
} from '../actions/types';

const initialState = {
	startMenuOpen: false,
	searchbarActive: false,
	searchQuery: '',
	showMenu: false
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

		case SHOWMENU:
			return {
				...state,
				showMenu: payload
			};

		default:
			return state;
	}
}

export default componentsReducer;
