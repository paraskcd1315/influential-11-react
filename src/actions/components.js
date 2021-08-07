import { OPEN_START_MENU, SEARCHBAR_ACTIVE, SEARCHQUERY } from './types';

export const openStartMenu = (startMenuOpen) => (dispatch) => {
	dispatch({
		type: OPEN_START_MENU,
		payload: startMenuOpen
	});
};

export const searchQuery = (searchQuery) => (dispatch) => {
	dispatch({
		type: SEARCHQUERY,
		payload: searchQuery
	});
};

export const activateSearchbar = (searchbarActive) => (dispatch) => {
	dispatch({
		type: SEARCHBAR_ACTIVE,
		payload: searchbarActive
	});
};
