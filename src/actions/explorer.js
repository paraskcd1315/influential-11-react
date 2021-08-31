import {
	ADD_DOCUMENT_FOLDER,
	ADD_PHOTO_FOLDER,
	ADD_MUSIC_FOLDER,
	ADD_VIDEO_FOLDER,
	REMOVE_DOCUMENT_FOLDER,
	ADD_APP_TO_FOLDER,
	REMOVE_APP_FROM_FOLDER,
	REMOVE_PHOTO_FOLDER,
	REMOVE_MUSIC_FOLDER,
	REMOVE_VIDEO_FOLDER,
	ADD_APP_TO_PAGE,
	REMOVE_APP_FROM_PAGE
} from './types';

export const addAppToPage =
	({ pageID, app }) =>
	(dispatch) => {
		let localstore = JSON.parse(localStorage.getItem('FluentUI'));

		if (!localstore[pageID]) {
			localstore = {
				...localstore,
				[pageID]: [app]
			};
		} else {
			let apps = localstore[pageID];
			apps.push(app);
			localstore[pageID] = apps;
		}

		localStorage.setItem('FluentUI', JSON.stringify(localstore));

		dispatch({
			type: ADD_APP_TO_PAGE,
			payload: {
				pageID: pageID,
				apps: localstore[pageID]
			}
		});
	};

export const removeAppFromPage =
	({ pageID, app }) =>
	(dispatch) => {
		const localstore = JSON.parse(localStorage.getItem('FluentUI'));

		let index = localstore[pageID].indexOf(app);
		localstore[pageID].splice(index, 1);

		localStorage.setItem('FluentUI', JSON.stringify(localstore));

		dispatch({
			type: REMOVE_APP_FROM_PAGE,
			payload: {
				pageID: pageID,
				apps: localstore[pageID]
			}
		});
	};

export const addAppToFolder =
	({ folderID, pageID, app, page }) =>
	(dispatch) => {
		const localstore = JSON.parse(localStorage.getItem('FluentUI'));

		localstore[pageID][folderID].apps.push(app);

		localStorage.setItem('FluentUI', JSON.stringify(localstore));

		dispatch({
			type: ADD_APP_TO_FOLDER,
			payload: {
				flag: false,
				page: page,
				pageID: pageID,
				folderID: folderID,
				apps: localstore[pageID][folderID].apps
			}
		});
	};

export const removeAppFromFolder =
	({ folderID, pageID, app, page }) =>
	(dispatch) => {
		const localstore = JSON.parse(localStorage.getItem('FluentUI'));

		let index = localstore[pageID][folderID].apps.indexOf(app);
		localstore[pageID][folderID].apps.splice(index, 1);

		localStorage.setItem('FluentUI', JSON.stringify(localstore));

		dispatch({
			type: REMOVE_APP_FROM_FOLDER,
			payload: {
				page: page,
				pageID: pageID,
				folderID: folderID,
				apps: localstore[pageID][folderID].apps
			}
		});
	};

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

export const removeFolderFromPhotos = (folderID) => (dispatch) => {
	const localstore = JSON.parse(localStorage.getItem('FluentUI'));

	delete localstore.photoFolders[folderID];

	localStorage.setItem('FluentUI', JSON.stringify(localstore));

	dispatch({
		type: REMOVE_PHOTO_FOLDER,
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

export const removeFolderFromMusic = (folderID) => (dispatch) => {
	const localstore = JSON.parse(localStorage.getItem('FluentUI'));

	delete localstore.musicFolders[folderID];

	localStorage.setItem('FluentUI', JSON.stringify(localstore));

	dispatch({
		type: REMOVE_MUSIC_FOLDER,
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

export const removeFolderFromVideo = (folderID) => (dispatch) => {
	const localstore = JSON.parse(localStorage.getItem('FluentUI'));

	delete localstore.videoFolders[folderID];

	localStorage.setItem('FluentUI', JSON.stringify(localstore));

	dispatch({
		type: REMOVE_VIDEO_FOLDER,
		payload: localstore.videoFolders
	});
};
