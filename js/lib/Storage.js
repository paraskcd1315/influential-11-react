const storageName = 'FluentUI';

var storage = {};

const saveStorage = () => {
	localStorage.setItem(storageName, JSON.stringify(storage));
};

const addValue = (key, value) => {
	if (storage.extraValues) {
		let extraValues = {
			...storage.extraValues,
			[key]: value
		};

		storage.extraValues = extraValues;
	} else {
		let extraValues = {
			[key]: value
		};

		storage.extraValues = extraValues;
	}

	saveStorage();
};

const removeValue = (key) => {
	delete storage.extraValues[key];

	saveStorage();
};

const addApp = (identifier, arrayName) => {
	let appArray = storage ? storage[arrayName] : null;

	if (storage[arrayName].indexOf(app) > -1) {
		alert('App is already placed.');
		return;
	}

	appArray.push(identifier);

	storage[arrayName] = appArray;

	saveStorage();
};

const replaceApp = (older, newer, arrayName) => {
	let appArray = storage ? storage[arrayName] : null;

	if (appArray.indexOf(newer) > -1) {
		let indexA = appArray.indexOf(older);
		let indexB = appArray.indexOf(newer);

		appArray[indexA] = newer;
		appArray[indexB] = older;
	} else {
		let index = appArray.indexOf(older);
		if (index !== -1) {
			appArray[index] = newer;
		}
	}

	storage[arrayName] = appArray;

	saveStorage();
};

const removeApp = (identifier, arrayName) => {
	let appArray = storage ? storage[arrayName] : null;

	let index = appArray.indexOf(identifier);

	appArray.splice(index, 1);

	storage[arrayName] = appArray;

	saveStorage();
};

const initStorage = (params) => {
	const localStore = JSON.parse(localStorage.getItem('FluentUI'));
	if (localStore) {
		storage = localStore;
	} else {
		storage = params;
		saveStorage();
	}
};
