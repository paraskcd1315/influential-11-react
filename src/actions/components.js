import { OPEN_START_MENU } from './types';

export const openStartMenu = (startMenuOpen) => (dispatch) => {
	dispatch({
		type: OPEN_START_MENU,
		payload: startMenuOpen
	});
};
