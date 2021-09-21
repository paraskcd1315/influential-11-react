var allEvents = [];

const addEvent = (element, params) => {
	allEvents.push({
		element: element,
		event: params.event,
		callback: params.callback,
		label: params.label
	});

	element.addEventListener(params.event, params.callback);
};

const removeEvent = (label) => {
	for (let i = 0; i < allEvents.length; i++) {
		let e = allEvents[i];

		if (e.label === label) {
			e.element.removeEventListener(e.event, e.callback);

			allEvents.splice(i, 1);
		}
	}
};

const removeAllEvents = () => {
	for (let i = 0; i < allEvents.length; i++) {
		let e = allEvents[i];

		e.element.removeEventListener(e.event, e.callback);

		allEvents = [];
	}
};
