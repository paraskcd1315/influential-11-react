import {
	ADD_DOCUMENT_FOLDER,
	ADD_PHOTO_FOLDER,
	ADD_MUSIC_FOLDER,
	ADD_VIDEO_FOLDER
} from './types';

export const addFolderToDocument =
	({ folderName, apps }) =>
	(dispatch) => {
		const localstore = JSON.parse(localStorage.getItem('FluentUI'));

		if (!localstore.documentFolders) {
			let folder = {
				[folderName]: apps
			};

			localstore.documentFolders = folder;
		} else {
			let documentFolders = {
				...localstore.documentFolders,
				[folderName]: apps
			};

			localstore.documentFolders = documentFolders;
		}

		localStorage.setItem('FluentUI', JSON.stringify(localstore));

		dispatch({
			type: ADD_DOCUMENT_FOLDER,
			payload: localstore.documentFolders
		});
	};
