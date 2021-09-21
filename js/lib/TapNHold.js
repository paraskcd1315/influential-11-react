var tapTimer = null,
	elementsAdded = {};

const clearTimer = () => {
	if (tapTimer) {
		clearTimeout(tapTimer);
	}
};

const touchStarted = (e) => {
	clearTimer();
	var elementInfo = elementsAdded[e.target.id];
	if (!elementInfo) {
		elementInfo = elementsAdded[e.target.parentElement.id];

		if (!elementInfo) {
			elementInfo = elementsAdded[e.target.parentElement.parentElement.id];
		}
	}

	tapTimer = setTimeout(function () {
		elementInfo.action(e.target, e);
	}, elementInfo.time);
};

const removeTapEvents = (id) => {
	if (elementsAdded[id]) {
		var element = document.getElementById(id);
		element.removeEventListener('touchstart', touchStarted, false);
		element.removeEventListener('touchmove', clearTimer, false);
		element.removeEventListener('touchend', clearTimer, false);
		element.removeEventListener('touchcancel', clearTimer, false);
		delete elementsAdded[id];
	}
};

const addTapEvents = (element) => {
	element.addEventListener('touchstart', touchStarted, false);
	element.addEventListener('touchmove', clearTimer, false);
	element.addEventListener('touchend', clearTimer, false);
	element.addEventListener('touchcancel', clearTimer, false);
};

const tapHold = (t) => {
	setTimeout(() => {
		var tapID = t.element.id;
		elementsAdded[tapID] = {};
		elementsAdded[tapID].time = t.time;
		elementsAdded[tapID].action = t.action;
		elementsAdded[tapID].element = t.element;
		addTapEvents(t.element);
	});
};
