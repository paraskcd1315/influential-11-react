import {
	ADD_DOCUMENT_FOLDER,
	ADD_PHOTO_FOLDER,
	ADD_MUSIC_FOLDER,
	ADD_VIDEO_FOLDER,
	REMOVE_DOCUMENT_FOLDER
} from './types';

export const addFolderToDocument =
	({ folderID, folderName, apps }) =>
	(dispatch) => {
		const localstore = JSON.parse(localStorage.getItem('FluentUI'));

		if (!localstore.documentFolders) {
			let folder = {
				[folderID]: {
					folderName: folderName,
					apps: apps
				}
			};

			localstore.documentFolders = folder;
		} else {
			let documentFolders = {
				...localstore.documentFolders,
				[folderID]: {
					folderName: folderName,
					apps: apps
				}
			};

			localstore.documentFolders = documentFolders;
		}

		localStorage.setItem('FluentUI', JSON.stringify(localstore));

		dispatch({
			type: ADD_DOCUMENT_FOLDER,
			payload: localstore.documentFolders
		});
	};

export const removeFolderFromDocuments = (folderID) => (dispatch) => {
	const localstore = JSON.parse(localStorage.getItem('FluentUI'));

	delete localstore.documentFolders[folderID];

	localStorage.setItem('FluentUI', JSON.stringify(localstore));

	dispatch({
		type: REMOVE_DOCUMENT_FOLDER,
		payload: localstore.documentFolders
	});
};

export const addFolderToPhotos =
	({ folderID, folderName, apps }) =>
	(dispatch) => {
		const localstore = JSON.parse(localStorage.getItem('FluentUI'));

		if (!localstore.photoFolders) {
			let folder = {
				[folderID]: {
					folderName: folderName,
					apps: apps
				}
			};

			localstore.photoFolders = folder;
		} else {
			let photoFolders = {
				...localstore.photoFolders,
				[folderID]: {
					folderName: folderName,
					apps: apps
				}
			};

			localstore.photoFolders = photoFolders;
		}

		localStorage.setItem('FluentUI', JSON.stringify(localstore));

		dispatch({
			type: ADD_PHOTO_FOLDER,
			payload: localstore.photoFolders
		});
	};

export const addFolderToMusic =
	({ folderID, folderName, apps }) =>
	(dispatch) => {
		const localstore = JSON.parse(localStorage.getItem('FluentUI'));

		if (!localstore.musicFolders) {
			let folder = {
				[folderID]: {
					folderName: folderName,
					apps: apps
				}
			};

			localstore.musicFolders = folder;
		} else {
			let musicFolders = {
				...localstore.musicFolders,
				[folderID]: {
					folderName: folderName,
					apps: apps
				}
			};

			localstore.musicFolders = musicFolders;
		}

		localStorage.setItem('FluentUI', JSON.stringify(localstore));

		dispatch({
			type: ADD_MUSIC_FOLDER,
			payload: localstore.musicFolders
		});
	};

export const addFolderToVideo =
	({ folderID, folderName, apps }) =>
	(dispatch) => {
		const localstore = JSON.parse(localStorage.getItem('FluentUI'));

		if (!localstore.videoFolders) {
			let folder = {
				[folderID]: {
					folderName: folderName,
					apps: apps
				}
			};

			localstore.videoFolders = folder;
		} else {
			let videoFolders = {
				...localstore.videoFolders,
				[folderID]: {
					folderName: folderName,
					apps: apps
				}
			};

			localstore.videoFolders = videoFolders;
		}

		localStorage.setItem('FluentUI', JSON.stringify(localstore));

		dispatch({
			type: ADD_VIDEO_FOLDER,
			payload: localstore.videoFolders
		});
	};
