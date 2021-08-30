import { CLOSE_FOLDER, OPEN_FOLDER } from '../actions/types';

const initialState = {
	page: '',
	folderID: '',
	pageID: ''
};

function explorerCustomFolderReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case OPEN_FOLDER:
			return {
				...state,
				page: payload.page,
				folderID: payload.folderID,
				pageID: payload.pageID
			};

		case CLOSE_FOLDER:
			return {
				...state,
				page: '',
				folderID: '',
				pageID: ''
			};

		default:
			return state;
	}
}

export default explorerCustomFolderReducer;
